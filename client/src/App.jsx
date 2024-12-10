import React from "react";
import { io } from "socket.io-client";

const App = () => {
  const socket = io("http://localhost:3000");
  return <div></div>;
};

export default App;
