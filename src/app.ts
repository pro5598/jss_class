import express, { Application, NextFunction, Request, Response } from "express";
import personRoutes from "./routes/person.route";

const app: Application = express();

app.use(express.json()); //json input
app.use(express.urlencoded({ extended: true })); // x-www-form-urlencoded

app.use(
  "/api/persons", //base path/prefix
  personRoutes,
);


const PORT: number = 8089;

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

//1. Get All -persons
app.get("/api/persons", (req: Request, res: Response) => {
  //later paginated
  return res.json(dataset);
});

//2. Get one by id - person
app.get("/api/persons/:id", (req: Request, res: Response) => {
  const { id } = req.params; //route parameter
  const person = dataset.find((p) => p.id === parseInt(id as string));
  //find person by id
  return res.json(person);
});

//3. Create One person
app.post("/api/persons", (req: Request, res: Response) => {});

//4. Update one person
//4.1 put -> full update/ most update
//4.2 patch -> partial update/least update

app.put("/api/persons/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, age } = req.body;
  const personIndex = dataset.findIndex((p) => p.id === parseInt(id as string));

  if (personIndex === -1) {
    return res.json({ message: "Person not found" });
  }

  dataset[personIndex] = { id: parseInt(id as string), name, age }; //update person
  return res.json(dataset[personIndex]); //return updated person
});

//5. Delete one person
app.delete("/api/persons/:id", (req: Request, res: Response) => {
  const { id } = req.params; // route parameter
  const personIndex = dataset.findIndex((p) => p.id === parseInt(id as string));
  dataset.splice(personIndex, 1); // delete person
  return res.json({ message: "Deleted" });
});

app.get("/exception", (req: Request, res: Response) => {
  try {
    const logic: any = {};
    logic.user.find(); // simulate error
  } catch (err: Error | any) {
    console.error("Error:", err);
    return res.status(500).json({ message: "Exception Issue" });
  }
});

app.use((req: Request, res: Response) => {
  return res.status(404).json({ message: "API not found" });
});

//global error handler (at the alst)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Error", err);
  return res.status(500).json({ message: "Internal server error" });
});

//export techniques
const DUMMY: string = "Dummy Export";

//export object, can be multiple
export { PORT, DUMMY };

//default export - only one default export per file
export default app;
