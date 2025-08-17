import type {List} from "../data/lists.ts";
import type {Task} from "../data/tasks.ts";

export enum ModalFormMode {
  AddList = 'Create new list',
  AddTask = 'Add task',
  EditList = 'Edit list',
  EditTask = 'Edit task'
}

export type ListManagementFormMode = {
  formMode: ModalFormMode
  formItem: List | Task | null
  listId?: string
}