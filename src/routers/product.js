import express from 'express';
import { getProducts } from "../controllers/product";

const router = express.Router();

router.get(`/products`, getProducts);


// router.get(`/products`, (req, res) => {
//     console.log(req.query);
// })
// router.get(`/products/:id`, (req, res) => {
//     console.log("id", req.params.id);
// })
// router.post(`/products`, (req, res) => {
//     console.log(req.body);
// })
// router.put(`/products`, (req, res) => {
//     console.log("GET /products");
// })
// router.delete(`/products`, (req, res) => {
//     console.log("GET /products");
// })
export default router;