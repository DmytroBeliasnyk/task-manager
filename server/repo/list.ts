import {db} from "../db";
import {List} from "../../shared/types/list";

export async function getListsFromDB(): Promise<List[]> {
  try {
    const res = await db.query<List>('SELECT * FROM lists')
    return res.rows
  } catch (err) {
    throw new Error('DB error while fetching lists')
  }
}