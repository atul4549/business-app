import express from "express";
import path from "path";
import dotenv from "dotenv";
// import cors from "cors";
// import bodyParser from "body-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const __dirname = path.resolve();

// app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

app.use("/api/hello", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

if(process.env.NODE_ENV === "production") {
  // Production-specific middleware or settings
  app.use(express.static(path.join(__dirname, "../client/dist")));
  
  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
  });
}
// dnNjb2RlOi8vY29kZXJhYmJpdC5jb2RlcmFiYml0LXZzY29kZS9hdXRoLWNhbGxiYWNrJTNGd2luZG93SWQ9MT9jb2RlPWQ1NzBiZGIyNDg1OThmM2NhMzQ0JnN0YXRlPTNkYjE2YTI4LTdmZWYtNGM0Ny1hMjBmLTQ1NDg2NDhmODFjMyZwcm92aWRlcj1naXRodWImc2VsZkhvc3RlZERvbWFpbj0mcmVkaXJlY3RfdXJpPQ==
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
