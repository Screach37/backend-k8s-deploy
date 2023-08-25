import Express from "express";
import cors from 'cors'

const app = Express();

app.use(cors());
const PORT = 5000;

app.get("/getData", (req, res)=>{
    res.send("Response from server: Hello");
});

app.listen(5000, ()=>console.log(`App is running on port ${PORT}`));