import express from 'express';
import productRouter from './routers/product'
const app = express();

//middleware
app.use(express.json());

app.use("/api", productRouter);




export const viteNodeApp = app;