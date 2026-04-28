//object representation

const obj1: {
  name: string;
  age: number;
  isPresent?: boolean; //meansoptional
} = {
  name: "Rahul",
  age: 22,
  //isPresent is Optioonal
};
console.log(obj1);

//2 USING TYPE

type ProductType = {
  id: number;
  tittle: string;
  price?: number | number[]; //union type//optional
};

const product1: ProductType = {
  id: 1,
  tittle: "Laptop",
  price: [23, 343, 2233.999],
};
console.log(product1);

//using interface

interface IuserInterface {
  username: string | number;
  email: string;
  isActive?: boolean;
}

const user1: IuserInterface = {
  username: 123,
  email: "abc@gmail.com",
};

console.log(user1);

class User {
  username: string;
  email: string;
  constructor(username: string, email: string) {
    ((this.username = username), (this.email = email));
  }
}

const user = new User("Amrit", "zxy@gmail.com");

class Employee extends User {
  empId: number;

  constructor(username: string, email: string, empId: number) {
    super(username, email);
    this.empId = empId;
  }
}

const emp1 = new Employee("Amrit", "demo@gmail.com", 13432);
console.log(emp1);

// polymorphism
const user3: User = new Employee("Charlie", "charlie@gmail.com", 123);
console.log(user3);

//Abstraction
interface IShape {
  area(): number;
}

class Square implements IShape {
  side: number;
  constructor(side: number) {
    this.side = side;
  }

  area(): number {
    return this.side * this.side;
  }
}

//task

type ComplexType = {
  id: number;
  user: User;
  products: ProductType;
  square: Square;
  userDetails: IuserInterface;
};

const complexObj: ComplexType = {
  id: 100,
  user: new User("Amrit", "ab@gmail.com"),
  products: { id: 100, tittle: "abcd" },
  square: new Square(10),
  userDetails: { username: "momo", email: "ababa@gmail.com" },
};

console.log(complexObj.square.area());

type PhoneType = { title: string };
type NetworkType = { provider: string };

type CallType = PhoneType | NetworkType; //union type
const ct1: CallType = { title: "iphone" };
const ct2: CallType = { provider: "Verizon" };
console.log(ct1, ct2);

type MobileType = PhoneType & NetworkType; //intersection type "&"
const mt1: MobileType = { title: "iphone", provider: "Verizon" }; //both attributes
console.log(mt1);

//Geniric - Type injection
const genericFn = <T>(arg: T): T => {
  console.log(arg, typeof arg);
  return arg;
};

genericFn<string>("Hello"); //<T> is replaced by string
genericFn<number>(123); //<T> is replaced by number

interface IApiResponse<T, K> {
  success: boolean;
  message: string;
  data: T;
  error?: K;
}

const res1: IApiResponse<ProductType, string> = {
  success: true,
  message: "successful",
  data: { id: 1, tittle: "Laptop", price: 999 },
};

const res2: IApiResponse<IuserInterface, string> = {
  success: false,
  message: "successful",
  data: { username: "momo", email: "hello@gmail.com" },
  error: "product found",
};

console.log(res1);
console.log(res2);

const arr1: Array<string> = ["a", "b", "c"]; //generic Array type
console.log(arr1);

//Useful generic type
type Category = {
  title: string;
  id: number;
  status?: string;
  isParent?: boolean;
};

const gen1: Required<Category> = {
  title: "A",
  id: 1,
  status: "active",
  isParent: true,
};

const gen2: Partial<Category> = {
  title: "b",
}; //alol attributes optional

const gen3: Readonly<Category> = {
  title: "c",
  id: 3,
}; //all attributes read only

//gen3.title = "D"; //cannot change

const gen4: Pick<Category, "title" | "status"> = {
  title: "D",
  status: "inactive",
}; //only pick title and status

const gen5: Omit<Category, "title" | "isParent"> = {
  id: 5,
}; //omit title and isParent

console.log(gen1, gen2, gen3, gen4, gen5);

// Task - fill the data
const t1: Required<Pick<Category, "title" | "id">> = {
  title: "adahd",
  id: 2,
};

const t2: Omit<Pick<Category, "title" | "id" | "status">, "status"> = {
  title: "dbakd",
  id: 4,
};
const t3: Pick<Omit<Category, "isParent">, "title" | "status"> & {
  price: number | number[];
  description: string | string[] | ProductType;
} = {
  title: "dnakjfb",
  status: "ok",
  price: 3000,
  description: "very good",
};
