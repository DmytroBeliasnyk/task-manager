import {type Task, tasks} from "./tasks.ts";
import {nanoid} from "nanoid";

export type List = {
  id: string
  title: string
  description: string
  tasks: Array<Task>
  owner: string
  shared_with: Array<string>
}

export const lists: Array<List> = [
  {
    id: nanoid(),
    title: "List 1",
    description: "Description",
    tasks: tasks,
    owner: "Me",
    shared_with: []
  },
  {
    id: nanoid(),
    title: "List 2",
    description: "Description",
    tasks: tasks,
    owner: "Me",
    shared_with: []
  },
  {
    id: nanoid(),
    title: "List 3",
    description: "Description",
    tasks: tasks,
    owner: "Me",
    shared_with: []
  },
  {
    id: nanoid(),
    title: "List 4",
    description: "Description",
    tasks: tasks,
    owner: "Me",
    shared_with: []
  },
  {
    id: nanoid(),
    title: "List 5",
    description: "Description",
    tasks: tasks,
    owner: "Me",
    shared_with: []
  },
  {
    id: nanoid(),
    title: "List 6",
    description: "Description",
    tasks: tasks,
    owner: "Me",
    shared_with: []
  },
  {
    id: nanoid(),
    title: "List 7",
    description: "Description",
    tasks: tasks,
    owner: "Me",
    shared_with: []
  },
  {
    id: nanoid(),
    title: "List 8",
    description: "Description",
    tasks: tasks,
    owner: "Me",
    shared_with: []
  },
  {
    id: nanoid(),
    title: "List 9",
    description: "Description",
    tasks: tasks,
    owner: "Me",
    shared_with: []
  },
  {
    id: nanoid(),
    title: "List 10",
    description: "Description",
    tasks: tasks,
    owner: "Me",
    shared_with: []
  }
]