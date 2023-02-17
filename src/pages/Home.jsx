import React, { useContext } from 'react'
import { Context } from '../context/context'

function Home() {
    const {testState} = useContext(Context)
  return (
    <div>Home
        This variable is coming from Context -- {testState}
    </div>

  )
}

export default Home