import { Router } from "express";
import * as controller from "../controllers/itemsController";

const router = Router();
//mis on router???
//käsitleb navigatsiooni erinevate vaadete vahel

router.get("/", controller.getItems);
router.post("/", controller.createItem);
//See route võtab vastu PUT päringu ja suunab selle controllerisse.
router.put("/:id", controller.updateItem);
router.delete("/:id", controller.removeItem);

export default router;
