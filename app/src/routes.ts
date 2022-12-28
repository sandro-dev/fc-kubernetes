import { Request, Response, Router } from 'express'
import { version, name } from '../package.json'
const routes = Router()
import fs from 'fs'


routes.get('/healthz', (request: Request, response: Response) => response.sendStatus(200))

routes.get('/', (request: Request, response: Response) => {
  return response.json({
    name,
    version,
    isWorking: true,
    timestamp: new Date().toISOString(),
    email: process.env.EMAIL || 'test@email.com',
    user: process.env.USER || 'testuser',

  })
})

routes.get('/readfile', (request: Request, response: Response) => {
  fs.readFile('../data/variables.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);

    return response.json({
      name,
      version,
      isWorking: true,
      timestamp: new Date().toISOString(),
      file: {
        name: '../data/variables.txt',
        data
      }
    })
  });
})

export { routes }