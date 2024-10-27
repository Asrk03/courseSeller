import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = ()=>{
    return (
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="login" element={<LoginPage/>}/>
					<Route path="signup" element = {<SignupPage/>}/>
				</Routes>
			</BrowserRouter>
    );
}

export default App;
