import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './components/Notes/Notes'
import CreateNote from './components/CreateNote/CreateNote'

const App = () => {

    const [currentId, setCurrentId] = useState(null)
    return (
        <Router>
            <Switch>
                <Route exact path='/' render={() => <Notes currentId={currentId} setCurrentId={setCurrentId} />}/>
                <Route exact path='/create' render={() => <CreateNote currentId={currentId} />}/>
            </Switch>
        </Router>
    )
}

export default App
