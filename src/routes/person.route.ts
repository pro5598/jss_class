import { Request, Response, Router } from "express";
import { PersonController } from "../controllers/person.controller";

const router: Router = Router();
const personController = new PersonController();

//1. Get All -persons
router.get("/", personController.getAllPersons);

export default router;
