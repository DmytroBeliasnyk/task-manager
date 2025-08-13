import {type JSX, useState} from 'react'
import {Header} from "./Header.tsx";
import {TaskSection} from "./TaskSection.tsx";
import {lists} from "../../data/lists.ts";

export const Main: () => JSX.Element = (): JSX.Element => {
  const [selectedListId, setSelectedListId] = useState<string | null>(null)

  return (
    <div className="flex flex-col size-full p-4">
      <Header/>
      <main className="flex gap-4 h-full overflow-hidden">
        <TaskSection
          lists={lists}
          selectedListId={selectedListId}
          selectList={setSelectedListId}
        />
      </main>
    </div>
  )
}