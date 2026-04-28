import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port: number = 8089;

type Product = {
  id: number;
  name: string;
  price: number;
  category?: string;
};

let products: Product[] = [
  { id: 1, name: "Laptop", price: 1200, category: "Electronics" },
  { id: 2, name: "Mechanical Keyboard", price: 150, category: "Electronics" },
  { id: 3, name: "Coffee Beans", price: 25, category: "Food" },
  { id: 4, name: "Running Shoes", price: 80, category: "Apparel" },
  { id: 5, name: "Desk Lamp", price: 45, category: "Furniture" },
];

// 1. GET ALL Products
app.get("/api/products", (req: Request, res: Response) => {
  return res.json(products);
});

// 2. GET ONE Product by ID
app.get("/api/products/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  return res.json(product);
});

// 3. CREATE Product
app.post("/api/products", (req: Request, res: Response) => {
  const { name, price, category } = req.body;

  const newProduct: Product = {
    id: products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1,

    name: name ?? "Unknown Product",
    price: price ?? 0,
    category: category || "Uncategorized",
  };

  products.push(newProduct);
  return res.status(201).json(newProduct);
});

// 4. UPDATE Product
app.put("/api/products/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string);
  const { name, price, category } = req.body;

  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products[index] = {
    id,
    name: name ?? "Unknown Product",
    price: price ?? 0,
    category: category || products[index].category,
  };

  return res.json(products[index]);
});

// 5. DELETE Product
app.delete("/api/products/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string);
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products.splice(index, 1);
  return res.json({ message: "Deleted" });
});

app.use((req: Request, res: Response) => {
  return res.status(404).json({ message: "API not found" });
});

// Global Error Handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  return res.status(500).json({ message: "Internal server error" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
