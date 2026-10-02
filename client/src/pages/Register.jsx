import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";


function Register(){


const navigate = useNavigate();


const [formData,setFormData]=useState({

name:"",
email:"",
password:""

});



const handleChange=(e)=>{

setFormData({

...formData,

[e.target.name]:e.target.value

});

};



const handleRegister=async(e)=>{

e.preventDefault();


try{


await axios.post(

"http://localhost:5000/api/auth/register",

formData

);


alert("Registration Successful");


navigate("/login");


}

catch(error){


console.log(error);


alert(

error.response?.data?.message || "Registration Failed"

);


}


};



return(


<div className="auth-page">


<div className="auth-card">


<h1>
Create Account
</h1>



<form onSubmit={handleRegister}>


<input

type="text"

name="name"

placeholder="Full Name"

value={formData.name}

onChange={handleChange}

/>



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

Register

</button>



</form>




<p>

Already have account?

<Link to="/login">

 Login

</Link>


</p>



</div>


</div>


);


}


export default Register;