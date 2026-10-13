import express from 'express'

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
      res.json({ msg: "NEXT UPDATED FILE" })
})

app.listen(3080, () => {
      console.log("APP running at 3080");
})