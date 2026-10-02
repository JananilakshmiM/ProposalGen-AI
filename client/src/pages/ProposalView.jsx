import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import Sidebar from "../components/Sidebar";


function ProposalView(){

const {id}=useParams();

const [proposal,setProposal]=useState(null);



useEffect(()=>{

const getProposal=async()=>{


const token=localStorage.getItem("token");


const res=await axios.get(

`http://localhost:5000/api/proposals/${id}`,

{

headers:{
Authorization:`Bearer ${token}`
}

}

);


setProposal(res.data.proposal);


};


getProposal();


},[id]);



return(

<div className="layout">

<Sidebar/>


<div className="content">


<h1>
Proposal Details
</h1>


{
proposal &&

<div className="proposal-card">

<h2>
{proposal.projectTitle}
</h2>


<p>
Domain: {proposal.domain}
</p>


<pre>
{proposal.proposal.content}
</pre>


</div>

}


</div>

</div>


)

}


export default ProposalView;