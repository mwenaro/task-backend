const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const { v4 : uuidv4 } =require('uuid')


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname,'public')));
// app.use(express.static(path.join(__dirname,'html')));
app.set('view engine', 'html');


//Routes


app.get('/', async (req, res) => {
    // return res.send('index.html')
    
   res.json({msg:"Hello from /"})
   
  })

app.get('/index', async (req, res) => {
    // return res.send('index.html')
    
   return res.render("index")
    // return res.sendFile(path.join(__dirname, 'public/index.html'));
    // res.json({ id: uuidv4() })
    res.status(404).json({ "msg": "Resource not found" })
  
  })

  app.get("/users",(req,res)=>{
    res.json([
        {name:"mwwero", age:40   },
        {name: "hussein", age: 33}
    ])
  })


app.get('/page', async (req, res) => {
 
  return res.sendFile(path.join(__dirname, 'public/page.html'));
 

})



app.listen(port, async () => {
  // await mongoDB()
  console.log(`Server listening on port ${port}`);
});

