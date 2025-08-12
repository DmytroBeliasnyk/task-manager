import {nanoid} from "nanoid";

export enum Priority {
  Low,
  Medium,
  High
}

export type Task = {
  id: string
  title: string
  description: string
  priority: Priority
  completed: boolean
}

export const tasks: Array<Task> = [
  {
    id: nanoid(),
    title: "Task 1",
    description: "Description",
    priority: Priority.Low,
    completed: false,
  },
  {
    id: nanoid(),
    title: "Task 2",
    description: "Description",
    priority: Priority.Low,
    completed: false,
  },
  {
    id: nanoid(),
    title: "Task 3",
    description: "Description",
    priority: Priority.Low,
    completed: false,
  },
  {
    id: nanoid(),
    title: "Task 4",
    description: "Description",
    priority: Priority.High,
    completed: false,
  },
  {
    id: nanoid(),
    title: "Task 5",
    description: "Description",
    priority: Priority.Low,
    completed: false,
  },
  {
    id: nanoid(),
    title: "Task 6",
    description: "Description",
    priority: Priority.Low,
    completed: false,
  },
  {
    id: nanoid(),
    title: "Task 7",
    description: "Description",
    priority: Priority.Medium,
    completed: false,
  },
  {
    id: nanoid(),
    title: "Task 8",
    description: "Description",
    priority: Priority.Medium,
    completed: false,
  },
  {
    id: nanoid(),
    title: "Task 9",
    description: "Description",
    priority: Priority.High,
    completed: false,
  },
  {
    id: nanoid(),
    title: "Task 10",
    description: "Description",
    priority: Priority.Low,
    completed: false,
  },
]