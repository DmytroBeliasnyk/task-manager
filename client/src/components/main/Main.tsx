import {type JSX, useState} from 'react'
import {Header} from "./Header.tsx";
import {TasksSection} from "./sections/TasksSection.tsx";
import {type List, lists} from "../../data/lists.ts";
import {ListsSection} from "./sections/ListsSection.tsx";

export const Main: () => JSX.Element = (): JSX.Element => {
  const [selectedList, setSelectedListId] = useState<List | null>(null)

  return (
    <div className="flex flex-col size-full p-4">
      <Header/>
      <main className="flex gap-4 h-full overflow-hidden">
        <ListsSection lists={lists} selectList={setSelectedListId}/>
        <TasksSection selectedList={selectedList}/>
      </main>
    </div>
  )
}