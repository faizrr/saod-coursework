import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'material-icons-css/css/material-icons.css'
import injectTapEventPlugin from 'react-tap-event-plugin'

import ComputersNetwork from './structures/ComputersNetwork'
export const computersNetworkInstance = new ComputersNetwork()

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

export function render () {
  ReactDOM.render(<App
    title={computersNetworkInstance.name}
    computerNodesStack={computersNetworkInstance.network}
  />, document.getElementById('root'))
  registerServiceWorker()
}

render()
