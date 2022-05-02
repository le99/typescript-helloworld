import express from 'express';
import _ from 'underscore';


export interface IFace {
  num: number,
  type: string
}

let a: any[] = [{num:1, type:"a"}];

_.forEach(a, (e)=>{
  console.log(e.num);
})


const app = express()
app.use(express.json());

const port = 3000

interface Cat {
  mm: number
}

app.get('/', (req, res) => {
  res.json('hey');
})

app.post('/', (req, res) => {
  let cat: Cat = req.body;
  res.json("hi: " + cat.mm)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})