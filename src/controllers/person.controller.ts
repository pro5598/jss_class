import { Request, Response } from "express";
import { Person } from "../types/person.type";
import { dataset } from "../models/person.model";
import { ApiResponseHelper } from "../utils/apihelper.util";
import { HttpException } from "../exceptions/http-exception";

export class PersonController {
  async getAllPersons(req: Request, res: Response) {
    //path function
    // return res.json(dataset);
    try {
      const someVar: any = {};

      //without custom exception

      return ApiResponseHelper.success(
        res,
        dataset,
        "persons fetched successfully",
        200,
      );
    } catch (err: Error | any | HttpException) {
      return ApiResponseHelper.error(
        res,
        "Failed to fetch persons",
        err.status ?? 500,
      );
    }
    //API consistency
    // 1.consistent response structure
    //2.logic through exceptions
    //3. combineresponse and error handling
  }

  async createPerson(req: Request, res: Response) {
    const { name, age } = req.body; //body parameters/client data

    if (!name) {
      throw new HttpException(400, "Name is required");
    }

    if (!age) {
      throw new HttpException(400, "Age is required");
    }

    const newPerson: Person = {
      id: dataset.length + 1,
      name,
      age,
    };

    dataset.push(newPerson); //add to dataset
    return ApiResponseHelper.success(
      res,
      newPerson,
      "Person created successfully",
      201,
    );
  }
}
