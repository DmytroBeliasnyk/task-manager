import {Request, Response} from "express";
import {lists} from "../data/lists";

export const getLists: (req: Request, res: Response) => void = (req: Request, res: Response): void => {
  res.json({data: lists})
}