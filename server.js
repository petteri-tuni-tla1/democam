import express from "express";
import multer from "multer";
import { WebSocketServer } from "ws";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 3000;

const app = express();
const upload = multer({ dest: "uploads/" });

console.log("Starting server...");
console.log("ENV VARIABLES:", process.env);

// serve static files
app.use(express.static("public"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// file upload endpoint
app.post("/upload", upload.single("photo"), (req, res) => {
  const slot = req.query.slot || "1";
  const filename = `${slot}.png`;

  const newPath = path.join("uploads", filename);

  fs.renameSync(req.file.path, newPath);

  const imageUrl = `/uploads/${filename}`;

  // notify clients
  wss.clients.forEach(client => {
    if (client.readyState === 1) {
      client.send(JSON.stringify({ slot, imageUrl }));
    }
  });

  res.send("Saved");
});

// start HTTP server
const server = app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// WebSocket server
const wss = new WebSocketServer({ server });

