import { readFileSync, existsSync } from 'fs'

export function loadConfig() {
  if (!existsSync('./config.json'))
    return undefined
  return JSON.parse(readFileSync('./config.json', 'utf-8'))
}
