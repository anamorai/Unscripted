import { useState } from "react"
import { v4 } from "uuid";
import Grid from './components/Grid';

function App() {
  return (
    <>
      <div>
        <h1>Manage your productivity here</h1>
        <Grid />
      </div>
    </>
  )
}

export default App;