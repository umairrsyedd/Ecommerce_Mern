import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import colors from "colors";
import { notFound, errorHandler } from "./Middleware/errorMiddleware.js";
// Routes
import Product from "./Routes/ProductRoute.js";
import User from "./Routes/UserRoutes.js";
//Config
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is running");
});
//Routes
app.use("/api/products", Product);
app.use("/api/users", User);

//Middleware Error
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `Server Running In ${process.env.NODE_ENV} Mode On Port : ${PORT}`.yellow
      .bold
  );
});
