import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProposalGenerator from "./pages/ProposalGenerator";
import ProposalHistory from "./pages/ProposalHistory";
import Profile from "./pages/Profile";
import ProposalDetails from "./pages/ProposalDetails";
import AIAssistant from "./pages/AIAssistant";


function App() {

return (

<BrowserRouter>

<Routes>

<Route path="/" element={<Home />} />

<Route path="/login" element={<Login />} />

<Route path="/register" element={<Register />} />

<Route path="/dashboard" element={<Dashboard />} />

<Route path="/proposal" element={<ProposalGenerator />} />

<Route path="/proposal/:id" element={<ProposalDetails />} />

<Route path="/history" element={<ProposalHistory />} />

<Route path="/profile" element={<Profile />} />

<Route path="/ai-assistant" element={<AIAssistant />} />


</Routes>

</BrowserRouter>

)

}

export default App;