import { Router } from "express";
import {
  create,
  deleteProduct,
  getAll,
  getProductById,
  related,
  updateProduct,
} from "../controllers/product";
import { checkAuth } from "../middleware/checkAuth";
import { checkIsAdmin } from "../middleware/checkAdmin";

const router = Router();
router.get("/products", getAll);
router.get("/products/:categoryId/related/", related);
router.get("/products/:id", getProductById);
router.use(checkAuth, checkIsAdmin);
router.delete("/products/:id", deleteProduct);
router.put("/products/:id", updateProduct);
router.post("/products", create);
export default router;
