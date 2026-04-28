import { Request, Response } from "express";
import { Person } from "../types/person.type";
import { dataset } from "../models/person.model";

export class PersonController {
  async getAllPersons(req: Request, res: Response) {
    //path function
    return res.json(dataset);
  }

  async createPerson(req: Request, res: Response) {
    const { name, age } = req.body; //body parameters/client data

    const newPerson: Person = {
      id: dataset.length + 1,
      name,
      age,
    };

    dataset.push(newPerson); //add to dataset
    return res.json(newPerson);
  }
}
