// create a zod schema of
// id as string
// name as string, min length 1, default value "Unnamed Product"
// price as number, min 0
// category as optional string
// z.string().optional() // optional
// z.default("Unknown Product") // default value if not provided

// make a dto from this schema for create
// on create, id is not required

// make a dto from this schema for update
// on update, all fields are optional

// apply model, dto, and controller for product similar to person

import { z } from "zod";
export const productSchema = z.object({
  id: z.number,
  name: z.string().default("Unknown Product"),
  price: z.number("Should be number").min(0, "price must be positive"),
  category: z.string().optional(),
});

export type Product = z.infer<typeof productSchema>;
    