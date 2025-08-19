import express, {Router} from "express";
import {getListsController} from "../controllers/list";

export const apiRouter: Router = express.Router()

apiRouter.get('/lists', getListsController)