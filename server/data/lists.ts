import type {List} from "../../shared/types/list";
import {nanoid} from "nanoid";
import {tasks} from "./tasks";

export const lists: Array<List> = [
  {
    id: nanoid(),
    title: "List 1",
    description: "Description",
    tasks: tasks,
  },
  {
    id: nanoid(),
    title: "List 2",
    description: "Description",
    tasks: tasks,
  },
  {
    id: nanoid(),
    title: "List 3",
    description: "Description",
    tasks: tasks,
  },
  {
    id: nanoid(),
    title: "List 4",
    description: "Description",
    tasks: tasks,
  },
  {
    id: nanoid(),
    title: "List 5",
    description: "Description",
    tasks: tasks,
  },
  {
    id: nanoid(),
    title: "List 6",
    description: "Description",
    tasks: tasks,
  },
  {
    id: nanoid(),
    title: "List 7",
    description: "Description",
    tasks: tasks,
  },
  {
    id: nanoid(),
    title: "List 8",
    description: "Description",
    tasks: tasks,
  },
  {
    id: nanoid(),
    title: "List 9",
    description: "Description",
    tasks: tasks,
  },
  {
    id: nanoid(),
    title: "List 10",
    description: "Description",
    tasks: tasks,
  }
]