import { readFileSync } from 'fs'
import { join } from 'path'

const data = readFileSync(join(__dirname, './data.txt'), 'utf-8')

const dataProcessed = data.split('\n\n').map(s => s.split('\n').reduce((a, b) => +a + +b, 0))

const dataProcessedSortedDescending = dataProcessed.sort((a, b) => b - a)

const part1 = dataProcessedSortedDescending[0]

const part2 = dataProcessedSortedDescending.slice(0, 3).reduce((a, b) => a + b, 0)

console.log(part1, part2)