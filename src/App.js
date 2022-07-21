import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { Routes, Route } from "react-router-dom";
import Login from './Login'
import { useStateValue } from './StateProvider';

function App() {

  const [{user}, dispatch] = useStateValue()

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
