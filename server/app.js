import express from "express";
const port = 3000;
import { server } from "socket.io";
import { createServer } from "http";

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get("/", function (req, res) {
  res.send({
    message: "hello world",
  });
});

io.on("connection", (socket) => {
  console.log("user connected");
  console.log("ID:" + socket.id);
});

app.listen(port, function () {
  console.log(`function is running on port ${port}`);
});
