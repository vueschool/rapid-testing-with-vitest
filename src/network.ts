import { fetch } from 'ofetch'

export async function getPostBody(id:number) {
  const data = await fetch(
    'https://jsonplaceholder.typicode.com/posts/' + id
  ).then(r => r.json())

  return data.body
}
