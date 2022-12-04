import { readFileSync } from 'fs'
import { join } from 'path'
const data: string[] = readFileSync(join(__dirname, './data.txt'), 'utf-8').split('\n')

const part1 = "TODO"
const part2 = "TODO"

console.log(part1, part2)