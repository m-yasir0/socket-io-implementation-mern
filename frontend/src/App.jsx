import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Chat from './pages/chat/Index'
import Dashboard from './pages/dashboard/Index'
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/chat/:to" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
