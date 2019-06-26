import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import StarGame from "../components/StarGame";

const server = express();
server.use(express.static("dist"));

server.get("/", (req, res) => {
  const initialMarkup = ReactDOMServer.renderToString(<StarGame />);

  res.send(`
    <html>
      <head>
        <title>React Star Game</title>
      </head>
      <body>
        <div id="mountNode">${initialMarkup}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `);
});

server.listen(3000, () => console.log("Server is running..."));
