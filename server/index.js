const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const { S7Endpoint, S7ItemGroup } = require("nodes7");
const variables = require("./constants");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  let interval;

  console.log(`User Connected: ${socket.id}`);

  const plc = new S7Endpoint({ host: "192.168.0.100", rack: 0, slot: 1 });
  const itemGroup = new S7ItemGroup(plc);

  plc.on("error", (e) => console.log("PLC Error!", e));
  plc.on("disconnect", () => {
    console.log("PLC Disconnected");
    clearInterval(interval);
  });

  plc.on("connect", async () => {
    console.log("PLC Connected!");

    itemGroup.setTranslationCB((tag) => variables[tag]);
    itemGroup.addItems(Object.keys(variables));
    interval = setInterval(async () => {
      const data = await itemGroup.readAllItems();
      socket.broadcast.emit("receive_message", data);
    }, 2000);

    socket.on("message", (value) => {
      console.log(value);
      itemGroup.writeItems("wStatusWord1", value);
    });
  });
});

server.listen(3001, () => {
  console.log("Server is running");
});
