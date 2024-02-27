import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddNote from "./components/AddNote";
import Navbar from "./components/Navbar";
import NotFound from './components/NotFound';
import NoteDetails from "./components/NoteDetails";
import NotesList from './components/NotesList';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" Component={NotesList}/>
            <Route path="/add" Component={AddNote}/>
            <Route path="/notes/edit/:id" Component={AddNote}/>
            <Route path="/notes/:id" Component={NoteDetails}/>
            <Route path="*" Component={NotFound}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
