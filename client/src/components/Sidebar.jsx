import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar(){

return(

<div className="sidebar">

<h2>
🚀 ProposalGen AI
</h2>


<ul>

<li>
<Link to="/dashboard">
Dashboard
</Link>
</li>


<li>
<Link to="/proposal">
Proposal Generator
</Link>
</li>


<li>
<Link to="/history">
Proposal History
</Link>
</li>


<li>
<Link to="/profile">
Profile
</Link>
</li>


<li>
<Link to="/ai-assistant">
AI Assistant
</Link>
</li>


</ul>


</div>

)

}

export default Sidebar;