import {type FC, useEffect, useRef} from "react";
import type {ListManagementFormMode} from "../../utils/modalFormMode.ts";
import {Button} from "../button/Button.tsx";

type ModalFormProps = {
  formState: ListManagementFormMode
  closeModal: () => void
}

export const ListManagementForm: FC<ModalFormProps> = ({formState, closeModal}) => {
  const inputTitle = useRef<HTMLInputElement>(null!)
  useEffect(() => {
    inputTitle.current.focus()
  }, [])

  const inputTitleValue: string = formState.formItem ?
    formState.formItem.title : ''
  const inputDescriptionValue: string = formState.formItem ?
    formState.formItem.description : ''

  function formAction(formData: FormData): void {
    console.log(formData.get('title'))
    console.log(formData.get('description'))

    closeModal()
  }

  return (
    <div className="flex justify-center items-center size-full bg-gray-500/50 absolute inset-0 z-1">
      <div className="flex flex-col w-1/3 gap-2 p-4 bg-primary-bg rounded-md">
        <h2 className="pb-2 border-b border-text-secondary text-xl font-semibold text-text-primary">
          {formState.formMode}
        </h2>
        <form
          action={formAction}
          className="flex flex-col gap-2"
        >
          <label className="rounded-md bg-secondary-bg py-1 px-2 text-gray-400">
            <input
              className="placeholder:text-gray-400 placeholder:italic focus:outline-none text-text-secondary cursor-pointer"
              type={'text'}
              name={'title'}
              ref={inputTitle}
              placeholder={'Title'}
              defaultValue={inputTitleValue}
            />
          </label>
          <label className="h-18 rounded-md bg-secondary-bg py-1 px-2 text-gray-400">
            <textarea
              className="placeholder:text-gray-400 placeholder:italic resize-none focus:outline-none text-text-secondary cursor-pointer"
              name={'description'}
              placeholder={'Description'}
              defaultValue={inputDescriptionValue}
            ></textarea>
          </label>
          <div className="flex justify-end gap-4 mt-2">
            <Button
              text={'Submit'}
              type={'submit'}
            />
            <Button
              text={'Close'}
              type={'reset'}
              clickHandler={closeModal}
            />
          </div>
        </form>
      </div>
    </div>
  )
}
