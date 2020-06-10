import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import GlobalStyle from './styles/global'
import Routes from './routes/index'

const App: React.FC = () => (
  <React.Fragment>
    <Router>
      <Routes />
    </Router>
    <GlobalStyle />
  </React.Fragment>
)

export default App
