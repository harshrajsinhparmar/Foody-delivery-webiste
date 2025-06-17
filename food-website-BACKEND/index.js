const express =require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const PORT=5000;


const app=express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'))

const UserRouter =require('./routes/UserRoutes');

app.use('/user',UserRouter)

mongoose.connect(
        "mongodb://localhost:27017/",
        {
            dbName:"foodyWebsite",
        }
).then(
    ()=>{console.log("our db connected successfully");
        app.listen(PORT,()=>{console.log("Our server started on port "+PORT);

        })

        }

).catch(
        (err)=>{
            console.log("error to connect with db",err.message);
                }



        )



                