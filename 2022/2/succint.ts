import { readFileSync } from 'fs'
import { join } from 'path'
import { roundScoreSuccint } from './scores'

export const data: string = readFileSync(join(__dirname, './data.txt'), 'utf-8')

for (let i = 0; i < 100000; i++) {
    data.split('\n').map(round => roundScoreSuccint(round)).reduce((a, b) => a + b, 0)
}