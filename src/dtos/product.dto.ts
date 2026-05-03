import { z } from "zod";
import { productSchema } from "../types/product.type";

export const CreateProductDTO = productSchema.omit({ id: true });
export type CreateProductDTO = z.infer<typeof CreateProductDTO>;
