import type {JSX} from 'react'
import {Sidebar} from "./sidebar/Sidebar.tsx";
import {Main} from "./main/Main.tsx";

export const App: () => JSX.Element = (): JSX.Element => {
  return (
    <>
      <Sidebar/>
      <Main/>
    </>
  )
}