import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

dotenv.config()

const app = express()
const PORT  = process.env.PORT || 3000

