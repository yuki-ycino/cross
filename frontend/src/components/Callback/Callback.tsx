import React from "react"
import { Link } from "react-router-dom"

type Props = {
  message: string
}

export const Callback: React.FC<Props> = ({ message }) => {
  return (
    <>
      <p>{message}</p>
      <Link to="/login">Login</Link>
    </>
  )
}
