import React from 'react'
import { MxCheckbox } from 'mx-checkbox'

const App = () => {
  return (
    <div>
      <MxCheckbox checked={true} label={"checked"}/>
      <MxCheckbox checked={false} label={"unchecked"}/>
    </div>
  )
}

export default App
