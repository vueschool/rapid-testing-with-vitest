import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { beforeAll, afterAll } from 'vitest'

const server = setupServer(
  rest.get(
    "https://jsonplaceholder.typicode.com/posts/:id",
    (req, res, ctx) => {
      const id = req.params.id
      return res(
        ctx.json({
          body: 'Mocked for ' + id + '!'
        })
      )
    }
  )
)

beforeAll(() => server.listen())
afterAll(() => server.close())
