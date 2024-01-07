const express = require('express');
const db = require('./db');
const authRoutes = require('./routes/authRoutes');
const communityRoutes = require('./routes/communityRoutes');
const memberRoutes = require('./routes/memberRoutes');
const roleRoutes = require('./routes/roleRoutes');

const app = express();
app.use(express.json()); 

app.use('/v1/auth', authRoutes);
app.use('/v1/community', communityRoutes)
app.use('/v1/member', memberRoutes)
app.use('/v1/role', roleRoutes)

const PORT = process.env.PORT || 8080;
app.get("/", (req,res)=>{
  return res.json({
      succeess:true,
      message:"your server is up and running"
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});