import {Sidebar} from "./sidebar/Sidebar.tsx";
import {Main} from "./main/Main.tsx";
import {type FC, useState} from "react";
import {lists} from "../data/lists.ts";
import {ListManagementForm} from "./forms/ListManagementForm.tsx";
import clsx from "clsx/lite";
import type {ListManagementFormMode} from "../utils/modalFormMode.ts";

type ListManagementFormState = {
  isOpen: boolean
  formState?: ListManagementFormMode
}

export const App: FC = () => {
  const [listManagementFormState, setModalFormState] = useState<ListManagementFormState>({
    isOpen: false
  })

  function openForm(formState: ListManagementFormMode): void {
    setModalFormState({isOpen: true, formState})
  }

  function closeForm(): void {
    setModalFormState({isOpen: false})
  }

  const containerClassName: string = clsx(
    'flex flex-row h-full',
    listManagementFormState.isOpen && 'relative'
  )

  return (
    <div className={containerClassName}>
      <Sidebar/>
      <Main
        lists={lists}
        openForm={openForm}
      />
      {listManagementFormState.isOpen &&
        <ListManagementForm
          formState={listManagementFormState.formState!}
          closeModal={closeForm}
        />}
    </div>
  )
}

/*
*   function addList(formData: FormData): void {
    setOpenModalFormOpen({isOpen: false})
  }

  function updateList(formData: FormData): void {
    setOpenModalFormOpen({isOpen: false})
  }

  function addTask(formData: FormData): void {
    setOpenModalFormOpen({isOpen: false})
  }

  function updateTask(formData: FormData): void {
    setOpenModalFormOpen({isOpen: false})
  }

  function formAction(formData: FormData): void {
    switch (openModalForm.formMode) {
      case ModalFormMode.AddTask:

    }
  }
*
* */