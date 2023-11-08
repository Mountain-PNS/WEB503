import { Router } from "express";
import { HomePage } from "../controller/HomePage.js";

const routerHome = Router();
routerHome.get('/', HomePage);
export default routerHome