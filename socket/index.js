const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const server = http.createServer();
const io = new Server(server, {
  cors: {
    //  origin: "http://localhost:5173"
    origin: "https://techbravery.netlify.app",
  },
});

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId && user.socketId === socketId) &&
    users.push({ userId, socketId });
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  socket.on("sendMessage", ({ sender, receiver, text }) => {
    const receiverUser = getUser(receiver);

    io.to(receiverUser.socketId).emit("getMessage", { sender, text });
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected.");

    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});

// Start the server
const port = 8900;
server.listen(port, () => {
  console.log(`Socket.IO server running on port ${port}`);
});
