//How to query data source
import { Person } from "../types/person.type";
import { dataset } from "../models/person.model";

export interface IPersonRepository {
  getOne(id: number): Person | undefined;
  getAll(): Person[];
  createPerson(person: Person): Person;
  updatePerson(id: number, name: string, age: number): Person | undefined;
}

export class PersonArrayRepository implements IPersonRepository {
  getOne(id: number): Person | undefined {
    const person = dataset.find((p) => p.id === id);
    return person;
  }
  getAll(): Person[] {
    return dataset;
  }

  createPerson(person: Person): Person {
    dataset.push(person);
    return person;
  }

  updatePerson(id: number, name: string, age: number): Person | undefined {
    const selected_person = dataset.findIndex((items) => items.id == id);

    if (selected_person == -1) {
      return null;
    }

    dataset[selected_person].name = name ?? dataset[selected_person].name;
    dataset[selected_person].age = age ?? dataset[selected_person].age;

    return dataset[selected_person];
  }
}
