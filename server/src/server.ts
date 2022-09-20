import express from "express"
import { PrismaClient } from ".prisma/client";

const app = express()
const prisma = new PrismaClient({
  log: [ 'query']
})

//HTTP methods / API RESTful / HTTP codes

//ROTS = GET www.minhaapi.com/games
app.get('/games', async (request, response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true
        }
      }
    }
  })

  return response.json(games);
})

//ROTS = POST www.minhaapi.com/games/ads
app.post('/ads', (request, response) => {

  return response.json([]);
})

//ROTS = GET www.minhaapi.com/ads
app.get('/ads/:id/ads', async (request, response) => {
  const gameId = request.params.id;

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: 'desc',
    }
  })
  
  return response.json(ads)
})

//ROTS CORRETA = http://localhost:3333/ads
app.listen(3333)