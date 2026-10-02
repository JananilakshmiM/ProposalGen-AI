const jwt = require("jsonwebtoken");

module.exports = (req,res,next)=>{

  console.log("AUTH HEADER:", req.headers.authorization);

  const authHeader = req.headers.authorization;

  if(!authHeader){
    return res.status(401).json({
      message:"No token provided"
    });
  }

  const token = authHeader.split(" ")[1];

  const auth = require("../middleware/authMiddleware");
  
  try{

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    console.log("DECODED USER:", decoded);

    req.user = decoded;

    next();

  }catch(error){

    console.log(error);

    return res.status(401).json({
      message:"Invalid token"
    });
  }
};