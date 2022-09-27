export const parseBody = (body: string) => {
  try {
    return JSON.parse(body);
  } catch (error) {
    console.log("Error parsing JSON:", error, body);
  }
};
