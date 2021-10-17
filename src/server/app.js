const express = require('express')
const router = express.Router();
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/system/admin/list', (req, res) => {
  res.send({
    total: 1000,
    list: []
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = {
  router
}