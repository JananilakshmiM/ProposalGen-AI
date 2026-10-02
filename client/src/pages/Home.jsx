import { Link } from "react-router-dom";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import "../styles/home.css";


function Home(){

useEffect(()=>{

  AOS.init({
    duration:1000,
    once:true,
  });

},[]);


return(

<>


{/* Navbar */}

<nav className="navbar">


<div className="logo">
🚀 ProposalGen AI
</div>


<ul className="nav-links">

<li>
<a href="#features">Features</a>
</li>

<li>
<a href="#workflow">Workflow</a>
</li>

<li>
<a href="#pricing">Pricing</a>
</li>

<li>
<a href="#contact">Contact</a>
</li>

</ul>



<div className="nav-buttons">


<Link to="/login">

<button className="login-btn">
Login
</button>

</Link>


<Link to="/register">

<button className="primary-btn">
Get Started
</button>

</Link>


</div>


</nav>



{/* Hero */}


<section className="hero">


<div className="hero-left">


<span className="badge">

🚀 AI Powered Engineering Platform

</span>



<h1>

Generate Complete

<br/>

Engineering Project

<span>
 Proposals
</span>

</h1>



<p>

ProposalGen AI helps students generate professional
project proposals, abstracts, objectives,
methodology, UML diagrams, literature surveys,
database schemas, PPT, Word and PDF documents.

</p>



<div className="hero-buttons">


<Link to="/register">

<button className="primary-btn">

Start Free

</button>

</Link>



<button className="secondary-btn">

Watch Demo

</button>


</div>




<div className="stats">


<div>

<h2>
10K+
</h2>

<p>
Projects Generated
</p>

</div>



<div>

<h2>
98%
</h2>

<p>
Accuracy
</p>

</div>



<div>

<h2>
40+
</h2>

<p>
AI Features
</p>

</div>


</div>



</div>





<div className="hero-right">


<div className="hero-card">


<h2>
✨ AI Generates
</h2>


<ul>

<li>✅ Abstract</li>

<li>✅ Problem Statement</li>

<li>✅ Objectives</li>

<li>✅ Literature Survey</li>

<li>✅ Methodology</li>

<li>✅ UML Diagram</li>

<li>✅ Database Schema</li>

<li>✅ Viva Questions</li>

<li>✅ PDF Export</li>


</ul>


</div>


</div>


</section>





{/* Features */}


<section 
className="features"
id="features"
>


<h1>
Everything You Need For Your Project
</h1>



<div className="feature-grid">


<div className="feature-card">

<h3>
🤖 AI Proposal Generator
</h3>

<p>
Generate complete project proposals instantly.
</p>

</div>



<div className="feature-card">

<h3>
📄 Documentation
</h3>

<p>
Create abstracts and reports automatically.
</p>

</div>




<div className="feature-card">

<h3>
📊 Project Evaluation
</h3>

<p>
AI evaluates project quality.
</p>

</div>




<div className="feature-card">

<h3>
🗄 Database Design
</h3>

<p>
Generate database schemas.
</p>

</div>



<div className="feature-card">

<h3>
🎤 Viva Preparation
</h3>

<p>
Practice AI viva questions.
</p>

</div>



<div className="feature-card">

<h3>
📥 Export
</h3>

<p>
Download PDF, Word and PPT.
</p>

</div>



</div>


</section>






{/* Workflow */}


<section 
className="workflow"
id="workflow"
>


<h1>
How ProposalGen AI Works
</h1>


<div className="timeline">



<div className="timeline-item">

<h2>
1
</h2>

<h3>
Enter Details
</h3>

<p>
Add project title, domain and technology.
</p>

</div>



<div className="timeline-item">

<h2>
2
</h2>

<h3>
AI Generation
</h3>

<p>
AI creates complete proposal.
</p>

</div>




<div className="timeline-item">

<h2>
3
</h2>

<h3>
Edit
</h3>

<p>
Improve your documentation.
</p>

</div>




<div className="timeline-item">

<h2>
4
</h2>

<h3>
Export
</h3>

<p>
Download and submit.
</p>

</div>


</div>


</section>


{/* Pricing */}

<section 
className="pricing"
id="pricing"
>

<h1>
Choose Your Plan
</h1>


<div className="pricing-grid">


<div className="pricing-card">

<h2>
Free
</h2>

<p>
Basic AI proposal generation
</p>

<ul>
<li>✅ Generate project proposals</li>
<li>✅ Basic documentation</li>
<li>✅ PDF export</li>
</ul>

<button className="primary-btn">
Start
</button>

</div>



<div className="pricing-card featured">

<h2>
Student
</h2>

<p>
Advanced AI features for students
</p>

<ul>
<li>✅ Unlimited proposal generation</li>
<li>✅ AI improvement</li>
<li>✅ Viva preparation</li>
<li>✅ PPT & Report generation</li>
</ul>

<button className="primary-btn">
Choose
</button>

</div>



<div className="pricing-card">

<h2>
Professional
</h2>

<p>
Complete project management solution
</p>

<ul>
<li>✅ Team collaboration</li>
<li>✅ Advanced AI tools</li>
<li>✅ Research assistance</li>
<li>✅ Priority support</li>
</ul>

<button className="primary-btn">
Contact
</button>

</div>


</div>


</section>


{/* Contact / Footer */}

<section 
className="contact"
id="contact"
>

<div className="contact-box">

<h1>
Ready to Build Your Project?
</h1>

<p>
Generate professional AI-powered project proposals instantly.
</p>


<Link to="/register">

<button className="primary-btn">
Start Creating
</button>

</Link>


</div>


</section>




<footer className="footer">


<h2>
🚀 ProposalGen AI
</h2>


<p>
AI Powered Engineering Proposal Generator
</p>


<div className="footer-links">

<a href="#features">
Features
</a>

<a href="#workflow">
Workflow
</a>

<a href="#pricing">
Pricing
</a>

<a href="#contact">
Contact
</a>


</div>



<p>
© 2026 ProposalGen AI. All rights reserved.
</p>


</footer>



</>

);

}


export default Home;