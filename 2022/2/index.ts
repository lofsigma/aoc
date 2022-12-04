import { readFileSync } from 'fs'
import { join } from 'path'

const data: string[] = readFileSync(join(__dirname, './data.txt'), 'utf-8').split('\n')

export const score1 = (r: string): number =>
    r === 'B Z' ? 9
        : r === 'A Y' ? 8
            : r === 'C X' ? 7
                : r === 'C Z' ? 6
                    : r === 'B Y' ? 5
                        : r === 'A X' ? 4
                            : r === 'A Z' ? 3
                                : r === 'C Y' ? 2
                                    : r === 'B X' ? 1
                                        : 0

const score2 = (r: string): number =>
    r === 'B Z' ? 9
        : r === 'A Z' ? 8
            : r === 'C Z' ? 7
                : r === 'C Y' ? 6
                    : r === 'B Y' ? 5
                        : r === 'A Y' ? 4
                            : r === 'A X' ? 3
                                : r === 'C X' ? 2
                                    : r === 'B X' ? 1
                                        : 0

const part1 = data.map(round => score1(round)).reduce((a, b) => a + b, 0)

const part2 = data.map(round => score2(round)).reduce((a, b) => a + b, 0)

console.log(part1, part2)