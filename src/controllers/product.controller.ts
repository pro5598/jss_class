import { Request, Response } from "express";
import { ApiResponseHelper } from "../utils/apihelper.util";
import { HttpException } from "../exceptions/http-exception";
import { z } from "zod";
import { Product } from "../types/product.type";
import { CreateProductDTO } from "../dtos/product.dto";
import { dataset } from "../models/product.model";

export class ProductController {
  async getAllProducts(req: Request, res: Response) {
    //path function
    // return res.json(dataset);
    try {
      const someVar: any = {};

      //without custom exception

      return ApiResponseHelper.success(
        res,
        dataset,
        "Products fetched successfully",
        200,
      );
    } catch (err: Error | any | HttpException) {
      return ApiResponseHelper.error(
        res,
        "Failed to fetch Products",
        err.status ?? 500,
      );
    }
    //API consistency
    // 1.consistent response structure
    //2.logic through exceptions
    //3. combineresponse and error handling
  }

    async createProduct(req: Request, res: Response) {
        const parsedData = CreateProductDTO.safeParse(req.body);

        if (!parsedData.success) {
        return ApiResponseHelper.error(
            res,
            z.prettifyError(parsedData.error),
        400,
      );
    }

    const { name, price, category } = parsedData.data;

    // const { name, age } = req.body; //body parameters/client data

    // if (!name) {
    //   throw new HttpException(400, "Name is required");
    // }

    // if (!age) {
    //   throw new HttpException(400, "Age is required");
    // }

    const newProduct: Product = {
      id: dataset.length + 1,
      name,
      price,
      category,
    };

    dataset.push(newProduct); //add to dataset
    return ApiResponseHelper.success(
      res,
      newProduct,
      "Product created successfully",
      201,
    );
  }
}
