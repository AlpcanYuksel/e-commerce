import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from'./pages/Home';
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./container/PageContainer";


function App() {
  return (
    <div>
      <PageContainer>
      <BrowserRouter>
      
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
      </PageContainer>
    </div>

  );
}

export default App;
