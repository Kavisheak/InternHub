import { Advertisment } from "./Advertisment";
import LoginRegisterForm from "./Components/LoginPage/LoginRegisterForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div >
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Advertisment />} />
            <Route path="/login" element={<LoginRegisterForm />} />
          
          </Routes>
        </BrowserRouter>
           
      </div>
      
    </div>
  );
}

export default App;
