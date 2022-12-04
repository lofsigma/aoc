export const roundScoreVerbose = (round: string) => {
    switch (round[0]) {
        case 'A':
            switch (round[2]) {
                case 'X':
                    return 1 + 3
                case 'Y':
                    return 2 + 6
                case 'Z':
                    return 3 + 0
            }
        case 'B':
            switch (round[2]) {
                case 'X':
                    return 1 + 0
                case 'Y':
                    return 2 + 3
                case 'Z':
                    return 3 + 6
            }
        case 'C':
            switch (round[2]) {
                case 'X':
                    return 1 + 6
                case 'Y':
                    return 2 + 0
                case 'Z':
                    return 3 + 3
            }

    }
}

export const roundScoreSuccint = (round: string) => round === 'A X' ? 4 : round === 'A Y' ? 8 : round === 'A Z' ? 3 : round === 'B X' ? 1 : round === 'B Y' ? 5 : round === 'B Z' ? 9 : round === 'C X' ? 7 : round === 'C Y' ? 2 : round === 'C Z' ? 6 : 0