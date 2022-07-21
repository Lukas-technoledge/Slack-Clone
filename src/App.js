import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { Routes, Route } from "react-router-dom";
import {useState} from 'react'
import Login from './Login'

function App() {

  const [user, setUser] = useState(null)

  return (
      <div className="app">

        {!user ? (
          <Login />
        ) : (
          <>
        <Header />
        <div className="app__body">
          <Sidebar />

          <Routes>
            <Route path='/room/:roomId' element={<Chat/>}></Route>
            <Route path='/' element={<Chat />}></Route>
          </Routes>
        </div>
        </>
        )}
      </div>
  );
}

export default App;
