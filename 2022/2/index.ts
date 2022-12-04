import { readFileSync } from 'fs'
import { join } from 'path'
import { roundScoreVerbose } from './scores'
const data: string = readFileSync(join(__dirname, './data.txt'), 'utf-8')

export const roundScore2 = (round: string) => {
    switch (round[0]) {
        case 'A':
            switch (round[2]) {
                case 'X':
                    return 0 + 3
                case 'Y':
                    return 3 + 1
                case 'Z':
                    return 6 + 2
            }
        case 'B':
            switch (round[2]) {
                case 'X':
                    return 0 + 1
                case 'Y':
                    return 3 + 2
                case 'Z':
                    return 6 + 3
            }
        case 'C':
            switch (round[2]) {
                case 'X':
                    return 0 + 2
                case 'Y':
                    return 3 + 3
                case 'Z':
                    return 6 + 1
            }

    }
}

const part1 = data.split('\n').map(round => roundScoreVerbose(round)).reduce((a, b) => a + b, 0)

const part2 = data.split('\n').map(round => roundScore2(round)).reduce((a, b) => a + b, 0)

console.log(part1, part2)