import {type JSX} from 'react';
import clsx from 'clsx/lite';
import {type List} from "../../data/lists.ts";
import {Button} from "../button/Button.tsx";
import {type Task} from "../../data/tasks.ts";

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
  const tasksListClassName: string = clsx(
    'flex flex-col flex-1 bg-secondary-bg rounded-md gap-2 pr-1 overflow-y-auto ',
    'scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent',
  )
  const rightSectionClassName: string = clsx(
    'flex flex-col flex-1 min-w-[507px] bg-secondary-bg rounded-md',
    !props.selectedListId && 'justify-center items-center text-center',
    props.selectedListId && 'justify-between gap-2 p-4'
  )
  return (
    <>
      <section id="sec1" className="flex flex-col flex-1 min-w-[507px] justify-between gap-2 bg-secondary-bg rounded-md p-4">
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
      <section className={rightSectionClassName}>
        {props.selectedListId ? (
          <>
            <h2 className="pb-2 border-b border-text-secondary text-2xl font-semibold text-text-primary">
              {props.lists
                .find((list: List): boolean =>
                  list.id === props.selectedListId)!.title
              }
            </h2>
            <section className={tasksListClassName}>
              {props.lists
                .find((list: List): boolean => list.id === props.selectedListId)!.tasks
                .map((task: Task): JSX.Element => (
                  <div
                    key={task.id}
                    className="flex flex-1 p-2 bg-gray-300 rounded-md hover:border hover:border-gray-400"
                  >
                    <section className="flex flex-col">
                      <h3 className="text-text-primary text-base font-semibold">{task.title}</h3>
                      <p className="text-text-secondary text-sm font-medium">{task.description}</p>
                    </section>
                  </div>
                ))}
            </section>
            <div className="flex justify-end">
              <Button
                text={"Add task"}
                clickHandler={() => console.log('add task')}
              />
            </div>
          </>
        ) : (
          <span className="inline-block w-3/4 text-4xl text-gray-400">
            Choose a task list to see its tasks...
          </span>
        )}
      </section>
    </>
  )
}
