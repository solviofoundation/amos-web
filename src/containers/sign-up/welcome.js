import React from 'react'
import {Link} from 'react-router-dom'

const Welcome = () => (
  <div>
    <Link to="/sign-up/email">Sign up with email</Link>
    {` • `}
    <Link to="/sign-in">Sign in with email</Link>
  </div>
)

export default Welcome