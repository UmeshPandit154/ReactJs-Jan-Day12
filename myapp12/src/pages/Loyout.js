import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Loyout() {
  return (
    <>
        <header>Header</header>
        <Outlet/>
        <footer>Footer</footer>
    </>
  )
}
