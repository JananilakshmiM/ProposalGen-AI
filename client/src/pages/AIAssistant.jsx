import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../styles/ai.css";


function AIAssistant(){


const [message,setMessage]=useState("");

const [chat,setChat]=useState([

{
role:"ai",
text:"Hello! I am ProposalGen AI Assistant. How can I help you today?"
}

]);


const [loading,setLoading]=useState(false);


const chatEndRef = useRef(null);



useEffect(()=>{

chatEndRef.current?.scrollIntoView({
behavior:"smooth"
});

},[chat,loading]);




const sendMessage = async()=>{


if(!message.trim() || loading)
return;



const userMessage = message;



setChat(prev=>[

...prev,

{
role:"user",
text:userMessage
}

]);



setMessage("");



try{


setLoading(true);



const token = localStorage.getItem("token");



const response = await axios.post(

"http://localhost:5000/api/ai/chat",

{
message:userMessage
},

{
headers:{

Authorization:`Bearer ${token}`

}

}

);



setChat(prev=>[

...prev,

{
role:"ai",
text:response.data.reply
}

]);


}



catch(error){


console.log(
"AI Error:",
error.response?.data || error.message
);



setChat(prev=>[

...prev,

{

role:"ai",

text:"Sorry, I am unable to answer right now. Please try again."

}

]);


}



finally{


setLoading(false);


}



};






return(

<div className="ai-page">


<h1>
🤖 AI Assistant
</h1>



<div className="ai-box">



<div className="chat-container">


{

chat.map((item,index)=>(


<div

key={index}

className={

item.role==="user"

?

"user-message"

:

"ai-message"

}

>


{item.text}


</div>


))


}



{

loading &&

<div className="ai-message">

AI is typing...

</div>


}



<div ref={chatEndRef}></div>


</div>






<div className="input-area">



<input


type="text"


placeholder="Ask about projects..."


value={message}


onChange={(e)=>setMessage(e.target.value)}


onKeyDown={(e)=>{

if(e.key==="Enter"){

sendMessage();

}

}}


/>



<button

onClick={sendMessage}

disabled={loading}

>


{

loading

?

"Sending..."

:

"Send"

}


</button>



</div>




</div>



</div>


);


}


export default AIAssistant;