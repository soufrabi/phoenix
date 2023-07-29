import './App.css'
import { FrontEnd } from './components/frontend.jsx'
import { Provider } from 'react-redux'
import store from './store/index.js'

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <FrontEnd />
      </div>
    </Provider>

  )
}

export default App
