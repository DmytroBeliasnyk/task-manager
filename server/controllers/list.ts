import {RequestHandler} from "express";
import {getLists} from "../services/list";
import {List} from "../../shared/types/list";

export const getListsController: RequestHandler = async (req, res) => {
  try {
    const lists: Array<List> = await getLists()
    res.json({data: lists})
  } catch (err) {
    console.log(err)
    res.status(500).json({message: "Internal Server Error"})
  }
}