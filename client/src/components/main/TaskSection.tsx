import type {JSX} from 'react';
import clsx from 'clsx/lite';
import {type List} from "../../data/lists.ts";
import {Button} from "../button/Button.tsx";

type TaskSectionProps = {
  lists: Array<List>
  selectedListId: string | null
  selectList: (listId: string | null) => void
}

export const TaskSection: (props: TaskSectionProps) => JSX.Element = (props: TaskSectionProps): JSX.Element => {
  const listsSectionClassName: string = clsx(
    'flex flex-col flex-1',
    props.lists.length && `
      gap-2 pr-1 overflow-y-auto scrollbar-thin
      scrollbar-thumb-gray-400 scrollbar-track-transparent`,
    !props.lists.length && 'justify-center items-center text-center'
  )
  const tasksSectionClassName: string = clsx(
    'flex flex-1 bg-secondary-bg rounded-md',
    !props.selectedListId && 'justify-center items-center text-center'
  )

  return (
    <>
      <section className="flex flex-col flex-1 justify-between gap-2 bg-secondary-bg rounded-md p-4">
        <h2 className="pb-2 border-b border-text-secondary text-2xl font-semibold text-text-primary">
          My lists
        </h2>
        <section className={listsSectionClassName}>
          {props.lists.length ? (
            props.lists.map((list: List): JSX.Element => (
              <div
                key={list.id}
                onClick={() => props.selectList(list.id)}
                className="flex flex-1 p-2 bg-gray-300 rounded-md hover:border hover:border-gray-400"
              >
                <section className="flex flex-col">
                  <h3 className="text-text-primary text-base font-semibold">{list.title}</h3>
                  <p className="text-text-secondary text-sm font-medium">{list.description}</p>
                </section>
              </div>
            ))
          ) : (
            <span className="inline-block w-3/4 text-4xl text-gray-400">
              You don't have any lists...
            </span>
          )}
        </section>
        <div className="flex justify-end">
          <Button
            text={"Create new list"}
            clickHandler={() => console.log('create new list')}
          />
        </div>
      </section>
      <section className={tasksSectionClassName}>
        {props.selectedListId ? props.selectedListId : (
          <span className="inline-block w-3/4 text-4xl text-gray-400">
            Choose a task list to see its tasks...
          </span>
        )}
      </section>
    </>
  )
}
