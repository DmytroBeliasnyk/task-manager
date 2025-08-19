import express, {Router} from "express";
import {getLists} from "../controllers/listController";

export const apiRouter: Router = express.Router()

apiRouter.get('/lists', getLists)