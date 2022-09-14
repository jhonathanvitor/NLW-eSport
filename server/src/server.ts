import express from "express"

const app = express()

//ROTS = www.minhaapi.com/ads

app.get('/ads', (request, response) => {
  return response.json([
    { id: 1, name: 'Anúncio 1' },
    { id: 2, name: 'Anúncio 2' },
    { id: 3, name: 'Anúncio 3' }
  ])
})

//ROTS CORRETA = http://localhost:3333/ads
app.listen(3333)