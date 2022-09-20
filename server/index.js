const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const { S7Endpoint, S7ItemGroup } = require("nodes7");
const { configuration, variables, refreshTime } = require("./constants");

const app = express();
app.use(cors());

const server = http.createServer(app);

const timeStamp = () => new Date().toISOString().slice(0, 19);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

let interval;

const plc = new S7Endpoint(configuration);
const tags = new S7ItemGroup(plc);

plc.on("error", (e) => console.log(`${timeStamp()} - PLC`, e));
plc.on("disconnect", () => {
  console.log(`${timeStamp()}  - PLC Disconnected`);
});

plc.on("connect", async () => {
  console.log(`${timeStamp()} - PLC Connected`);
  tags.setTranslationCB((tag) => variables[tag]);
  tags.addItems(Object.keys(variables));
});

io.on("connection", (socket) => {
  console.log(`${timeStamp()}  - HMI Connected`);
  interval = setInterval(async () => {
    const data = await tags.readAllItems();
    socket.broadcast.emit("data", data);
  }, refreshTime);

  socket.on("control", (variable) => {
    console.log(variable);
    tags.writeItems(variable.name, variable.value);
  });

  socket.on("disconnect", (reason) => {
    console.log(`${timeStamp()}  - HMI Disconnected`);
    clearInterval(interval);
  });
});

server.listen(3001, () => {
  console.log("Server is running");
});
