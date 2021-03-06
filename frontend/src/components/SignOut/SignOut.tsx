import React from "react"
import { Redirect } from "react-router-dom"

type Props = {
  redirectUrl: string
}

export const SignOut: React.FC<Props> = ({ redirectUrl }) => <Redirect to={redirectUrl} />
