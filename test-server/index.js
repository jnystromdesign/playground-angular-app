const { Config, JsonDB } = require('node-json-db');

const express = require('express')
var cors = require('cors')
const path = require('path')
const PORT = 3000

const dbPath = path.resolve(__dirname, 'db/test-db.json');
var db = new JsonDB(new Config(dbPath, true, true, '/'));

async function getLastUserId(){
  const users = await db.getData('/users');
  const searchOrder = users.reverse();
  const mostRecentId = searchOrder.find(user => user && user.id !== null)
  return mostRecentId
}

const app = express();
app.use(express.json());
var corsOptions = {
  origin: ["http://localhost:4200"],
  
}

app.use(cors(corsOptions));


app.get('/', async (_req,res)=> {
  data = await db.getData('/')
  res.send(data)
})

app.get('/users', async (_req,res)=> {
  data = await db.getData('/users')
  res.send(data)
})

app.put('/users', async (req,res)=> {
  const lastUser = await getLastUserId();
  const userData = { ...req.body, id: Number(lastUser.id) +1 }
  await db.push('/users[]', userData).catch(error=>res.json(error));
  return res.json(userData)
})

app.get('/users/:id', async (req,res)=> {
  const id = Number(req.params.id) -1;
  try {
    const data = await db.getData('/users/'+id)
    res.send(data)
  }catch(e){
    return res.send('No user with id '+ id)
  }
})


app.patch('/users/:id', async (req,res)=> {
  const id = Number(req.params.id) -1;
  const updatedData = req.body
  try {
    await db.push('/users/'+id, updatedData, false)
    const data = await db.getData('/users/'+id)
    res.send(data)
  }catch(e){
    return res.send('No user with id '+ id)
  }
})

app.delete('/users/:id', async (req,res)=> {
  const id = Number(req.params.id)-1;
  try {
    const data = await db.delete('/users/'+id)
    res.send(data)
  }catch(e){
    return res.send('No user with id '+ id)
  }
})


app.listen(PORT, ()=>{
  console.log('App is listening at http://localhost:'+PORT)
})