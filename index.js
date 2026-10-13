import express from 'express'

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
      res.json({ msg: "HELLO GITHUB ACTIONS NEW .......... 22222222" })
})

app.listen(3080, () => {
      console.log("APP running at 3080");
})