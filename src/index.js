import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App'
import { mainReducer } from './reducers/mainReducer'

import 'bulma/css/bulma.css'
import './styles.scss'

const store = createStore(mainReducer)

const rootElement = document.getElementById('root')
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement)
