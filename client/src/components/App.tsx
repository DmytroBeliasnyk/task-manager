import {type JSX} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {type List, lists} from '../data/lists.ts'

export const App: () => JSX.Element = (): JSX.Element => {
  return (
    <>
      <aside className="flex flex-col gap-12 h-full w-1/5 p-4 bg-secondary-bg">
        <header className="text-2xl font-semibold">
          <FontAwesomeIcon icon="list-check"/>
          <span className="ml-2">TaskManager</span>
        </header>
        <nav className="flex flex-col flex-auto justify-between text-text-secondary font-medium text-1g">
          <ul className="flex flex-col gap-2">
            <li className="cursor-pointer">
              <FontAwesomeIcon icon="list"/>
              <span className="ml-2">My lists</span>
            </li>
            <li className="cursor-pointer">
              <FontAwesomeIcon icon="share"/>
              <span className="ml-2">Shared lists</span>
            </li>
          </ul>
          <div className="cursor-pointer">
            <FontAwesomeIcon icon="gear"/>
            <span className="ml-2">Settings</span>
          </div>
        </nav>
      </aside>
      <div className="flex flex-col size-full p-4">
        <aside className="flex justify-between pb-2 text-1g">
          <label className="rounded-md bg-secondary-bg py-1 px-2 text-gray-400">
            <input
              className="placeholder:text-gray-400 placeholder:italic focus:outline-none text-text-secondary"
              placeholder="Search list by name"
              type="text"
            />
            <FontAwesomeIcon icon="search"/>
          </label>
          <div className="flex items-center gap-2 text-base text-text-secondary font-medium">
            <div className="size-8 rounded-full bg-text-secondary">{/* avatar */}</div>
            <span>username</span>
            <FontAwesomeIcon icon="angle-down"/> {/* open options list */}
          </div>
        </aside>
        <main className="flex gap-4 h-full overflow-hidden">
          <section id="sec-1" className="flex flex-col flex-1 gap-2 p-4 bg-secondary-bg rounded-md">
              <h2 className="pb-2 border-b border-text-secondary text-2xl font-semibold text-text-primary">
                My lists
              </h2>
              <div className="flex flex-col flex-1 gap-2 pr-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
                {
                  lists.map((list: List): JSX.Element => (
                    <div
                      key={list.id}
                      className="flex flex-1 p-2 bg-gray-300 rounded-md hover:border hover:border-gray-400"
                    >
                      <section className="flex flex-col">
                        <h3 className="text-text-primary text-base font-semibold">{list.title}</h3>
                        <p className="text-text-secondary text-sm font-medium">{list.description}</p>
                      </section>
                    </div>
                  ))
                }
              </div>
          </section>
          <section id="sec-2" className="flex flex-1 bg-secondary-bg rounded-md justify-center items-center text-center">
            <span className="inline-block w-3/4 text-4xl text-gray-400">Choose a task list to see its tasks...</span>
          </section>
        </main>
      </div>
    </>
  )
}