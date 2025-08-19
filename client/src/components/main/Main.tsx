import {type FC, useState} from 'react'
import {Header} from "./Header.tsx";
import {ListManagementSection} from "./sections/ListManagementSection.tsx";
import {ListsSection} from "./sections/ListsSection.tsx";
import type {ListManagementFormMode} from "../../utils/modalFormMode.ts";
import type {List} from "../../../../shared/types/list.ts";

type MainProps = {
  lists: Array<List>
  openForm: (formState: ListManagementFormMode) => void
}

export const Main: FC<MainProps> = ({lists, openForm}) => {
  const [selectedList, setSelectedList] = useState<List | null>(null)

  return (
    <>
      <div className="flex flex-col size-full p-4">
        <Header/>
        <main className="flex gap-4 h-full overflow-hidden">
          <ListsSection
            lists={lists}
            selectList={setSelectedList}
            openForm={openForm}
          />
          <ListManagementSection
            selectedList={selectedList}
            openForm={openForm}
          />
        </main>
      </div>
    </>
  )
}