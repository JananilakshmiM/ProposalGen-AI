import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";


function Login(){

const navigate = useNavigate();


const [formData,setFormData]=useState({

email:"",
password:""

});



const handleChange=(e)=>{

setFormData({

...formData,

[e.target.name]:e.target.value

});

};



const handleLogin=async(e)=>{

e.preventDefault();


try{


const res = await axios.post(

"http://localhost:5000/api/auth/login",

formData

);



localStorage.setItem(

"token",

res.data.token

);



alert("Login Successful");


navigate("/dashboard");


}

catch(error){


console.log(error);


alert(

error.response?.data?.message || "Login Failed"

);


}


};



return(


<div className="auth-page">


<div className="auth-card">


<h1>
Login
</h1>



<form onSubmit={handleLogin}>


<input

type="email"

name="email"

placeholder="Email"

value={formData.email}

onChange={handleChange}

/>



<input

type="password"

name="password"

placeholder="Password"

value={formData.password}

onChange={handleChange}

/>




<button type="submit">

Login

</button>



</form>




<p>

Don't have account?

<Link to="/register">

 Register

</Link>


</p>



</div>


</div>


);


}


export default Login;