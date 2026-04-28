import { Request, Response } from "express";

interface Person {
  id: number;
  name: string;
  age: number;
}

const dataset: Person[] = [
  { id: 1, name: "Ram", age: 30 },
  { id: 2, name: "Hari", age: 25 },
  { id: 3, name: "Amrit", age: 21 },
];

export class PersonController {
  async getAllPersons(req: Request, res: Response) {
    //path function
    return res.json(dataset);
  }
}
