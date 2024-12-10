import express from "express";
const port = 3000;
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(cors());

app.get("/", function (req, res) {
  res.send({
    message: "hello world",
  });
});

io.on("connection", (socket) => {
  console.log("user connected");
  console.log("ID:" + socket.id);
});

server.listen(port, function () {
  console.log(`function is running on port ${port}`);
});
