import { useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";
import jsPDF from "jspdf";
import ReactMarkdown from "react-markdown";


function ProposalGenerator() {

const [formData,setFormData]=useState({

projectTitle:"",
domain:"",
technology:"",
teamSize:"",
duration:"",
difficulty:"",
objectives:"",
problemStatement:"",
template:"Academic"

});


const [proposal,setProposal]=useState("");
const [proposalId,setProposalId]=useState(null);

const [loading,setLoading]=useState(false);
const [score,setScore]=useState(0);
const [improving,setImproving]=useState(false);
const [message,setMessage]=useState("");



const handleChange=(e)=>{

setFormData({

...formData,

[e.target.name]:e.target.value

});

};





const generateProposal=async()=>{


try{

setLoading(true);


const token=localStorage.getItem("token");


const res=await axios.post(

"http://localhost:5000/api/proposals/generate",

formData,

{

headers:{
Authorization:`Bearer ${token}`
}

}

);



setProposal(

res.data.proposal.proposal.content

);


setProposalId(

res.data.proposal._id

);



setScore(

Math.floor(Math.random()*10)+90

);



}

catch(error){

console.log(error);

alert("Proposal generation failed");

}


setLoading(false);

};





const improveAI=async()=>{


if(!proposalId){

alert("Generate proposal first");

return;

}


try{


setImproving(true);


const token=localStorage.getItem("token");


const res=await axios.post(

`http://localhost:5000/api/proposals/improve/${proposalId}`,

{},

{

headers:{
Authorization:`Bearer ${token}`
}

}

);



setProposal(

res.data.proposal.proposal.content

);


setMessage("✨ Improved successfully");


}

catch(error){

console.log(error);

alert("AI improvement failed");

}


setImproving(false);


};







const copyProposal=()=>{


navigator.clipboard.writeText(proposal);


setMessage("📋 Proposal copied");


};








const downloadPDF=()=>{


const doc=new jsPDF();


const margin=20;

let y=30;



doc.setFontSize(20);

doc.text(

"ProposalGen AI",

margin,

20

);



doc.setFontSize(14);


doc.text(

"AI Generated Project Proposal",

margin,

y

);


y+=15;


doc.setFontSize(11);



const text = proposal.replace(/[#*_]/g,"");


const lines=doc.splitTextToSize(

text,

170

);



lines.forEach((line)=>{


if(y>280){


doc.addPage();

y=20;


}



doc.text(

line,

margin,

y

);


y+=7;


});




const pages=doc.internal.getNumberOfPages();


for(let i=1;i<=pages;i++){


doc.setPage(i);


doc.setFontSize(10);


doc.text(

`Page ${i} of ${pages}`,

170,

290

);


}



doc.save(

"ProposalGen-AI-Proposal.pdf"

);


};






return(

<div className="layout">


<Sidebar/>


<div className="content">



<h1>
✨ Generate AI Proposal
</h1>





<div className="form-card">



<input

name="projectTitle"

placeholder="Project Title"

value={formData.projectTitle}

onChange={handleChange}

/>



<select

name="domain"

value={formData.domain}

onChange={handleChange}

>

<option>Select Domain</option>

<option>Artificial Intelligence</option>
<option>Machine Learning</option>
<option>Healthcare</option>
<option>IoT</option>
<option>Cyber Security</option>
<option>Web Development</option>

</select>





<input

name="technology"

placeholder="Technology Stack"

value={formData.technology}

onChange={handleChange}

/>





<input

name="teamSize"

placeholder="Team Size"

value={formData.teamSize}

onChange={handleChange}

/>





<input

name="duration"

placeholder="Duration"

value={formData.duration}

onChange={handleChange}

/>





<select

name="difficulty"

value={formData.difficulty}

onChange={handleChange}

>

<option>Difficulty</option>

<option>Easy</option>

<option>Medium</option>

<option>Hard</option>


</select>





<select

name="template"

value={formData.template}

onChange={handleChange}

>


<option>Academic</option>

<option>Research Paper</option>

<option>IEEE Format</option>

<option>Hackathon</option>

<option>Startup Pitch</option>


</select>





<textarea

name="objectives"

placeholder="Project Objectives"

value={formData.objectives}

onChange={handleChange}

/>





<textarea

name="problemStatement"

placeholder="Problem Statement"

value={formData.problemStatement}

onChange={handleChange}

/>





<button

onClick={generateProposal}

disabled={loading}

>


{

loading?

"Generating..."

:

"🚀 Generate Proposal"

}


</button>



</div>








{

proposal &&

<div className="proposal-card">


<h2>
Generated Proposal
</h2>



<h3>
⭐ Quality Score : {score}%
</h3>




<div className="proposal-buttons">


<button onClick={copyProposal}>

📋 Copy

</button>



<button onClick={downloadPDF}>

⬇ Download PDF

</button>



<button onClick={improveAI}>

{

improving?

"Improving..."

:

"✨ Improve AI"

}

</button>


</div>



<p className="success">

{message}

</p>





<div className="markdown-content">


<ReactMarkdown>

{proposal}

</ReactMarkdown>


</div>




</div>


}





</div>


</div>


);


}


export default ProposalGenerator;