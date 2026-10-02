import { Link } from "react-router-dom";
import "../styles/landing.css";


function LandingPage(){

return(

<div className="landing">


<nav>

<h2>
🚀 ProposalGen AI
</h2>


<div>

<Link to="/login">
Login
</Link>


<Link to="/register">
<button>
Get Started
</button>
</Link>


</div>

</nav>



<section className="hero">


<div>


<h1>
Generate Engineering Project Proposals Using AI
</h1>


<p>
Create professional project documentation,
abstracts, objectives, methodologies and
future scope instantly using Generative AI.
</p>



<Link to="/register">

<button className="primary">
Start Creating
</button>

</Link>


</div>


<div className="hero-card">


<h2>
AI Proposal Generator
</h2>


<ul>

<li>
✔ AI Generated Abstract
</li>

<li>
✔ Complete Documentation
</li>

<li>
✔ PDF Export
</li>

<li>
✔ Proposal History
</li>


</ul>


</div>


</section>



<section className="features">


<div>
<h2>
AI Powered
</h2>
<p>
Generate proposals using LLM models.
</p>
</div>


<div>
<h2>
Student Friendly
</h2>
<p>
Designed for engineering projects.
</p>
</div>


<div>
<h2>
Professional Output
</h2>
<p>
Ready for project reviews.
</p>
</div>


</section>


</div>

)

}


export default LandingPage;