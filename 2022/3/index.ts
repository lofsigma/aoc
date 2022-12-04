import { readFileSync } from 'fs'
import { join } from 'path'

const data: string[] = readFileSync(join(__dirname, './data.txt'), 'utf-8').split('\n')

const lookup = new Map<string, number>(
    [...Array(26)]
        .map((_, i) => [String.fromCharCode('a'.charCodeAt(0) + i), i + 1])
        .concat(
            [...Array(26)]
                .map((_, i) => [String.fromCharCode('A'.charCodeAt(0) + i), i + 27])
        )
)


const part1 = data
    .map(
        r => lookup.get(Array.from(new Set(r.slice(0, r.length / 2))).filter((c) => new Set(r.slice(r.length / 2)).has(c))[0])
    )
    .reduce((a, b) => a + b, 0)

const part2 = data
    .map(
        (_, i) => i % 3 === 0
            ? lookup.get(
                Array
                    .from(new Set(data[i]))
                    .filter(x => new Set(data[i + 1]).has(x) && new Set(data[i + 2]).has(x))[0]
            )
            : 0
    )
    .reduce((a, b) => a + b, 0)

console.log(part1, part2)