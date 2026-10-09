import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Page';
import Books from './Page/books';
import Team from './Page/team';
import Contact from './Page/contact';


function App() {

  return (
    <>
      <div className="container">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/books" element={<Books/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/contact" element={<Contact/>} />
 
        </Routes>
      </BrowserRouter>
      </div>
    </>

  )
}

export default App
