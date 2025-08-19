import {List} from "../../shared/types/list";
import {getListsFromDB} from "../repo/list";

export async function getLists(): Promise<List[]> {
  return await getListsFromDB()
}