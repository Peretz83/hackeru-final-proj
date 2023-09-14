import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from 'morgan'
import connectDB from "./config/db.js";
import authRoute from './routes/authRoute.js'
import categoryRoute from './routes/categoryRoute.js'
import productRoute from './routes/productRoute.js'
import cors from 'cors'
import "./helpers/init-project.js"
import "./helpers/starting-categories.json"  assert {type: "json"};
import "./helpers/starting-products.json"  assert {type: "json"};

dotenv.config();

connectDB()

const app = express();

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/v1/auth', authRoute)
app.use('/api/v1/category', categoryRoute)
app.use('/api/v1/product', productRoute)

app.get("/", (req, res) => {
  res.send({
    message: "Welcome",
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
  console.log(
    `Server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  )
);
