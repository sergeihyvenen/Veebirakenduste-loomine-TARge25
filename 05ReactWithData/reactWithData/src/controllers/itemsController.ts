import type { Request, Response} from "express";
import * as service from "../services/itemsService";

export const getItems = async (_: Request, res: Response) => {
    const items = await service.getItems();
    res.json(items);
};

export const createItem = async (req: Request, res: Response) => {
    await service.addItem(req.body.name);
    res.sendStatus(201);
}

export const removeItem = async (req: Request, res: Response) => {
    await service.deleteItem(Number(req.params.id));
    res.sendStatus(200);
}
//Siin me võtame id URL-ist ja name request body-st ning saadame need service'i.
export const updateItem = async (req: Request, res: Response) => {
  await service.updateItem(Number(req.params.id), req.body.name);
  res.sendStatus(200);
};
