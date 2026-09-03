import { calculateWinner } from './calculateWinner';

export function getEasyCpuMove(squares) {

    const emptyIndices = squares
        .map((val, idx) => (val === null ? idx : null))
        .filter((val) => val !== null);

    if (emptyIndices.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * emptyIndices.length);
    return emptyIndices[randomIndex];
}

export function getHardCpuMove(squares) {
    const emptyIndices = squares
        .map((val, idx) => (val === null ? idx : null))
        .filter((val) => val !== null);

    if (emptyIndices.length === 0) return null;

    for (let idx of emptyIndices) {
        const tempBoard = squares.slice();
        tempBoard[idx] = 'O';
        if (calculateWinner(tempBoard) === 'O') return idx;
    }

    for (let idx of emptyIndices) {
        const tempBoard = squares.slice();
        tempBoard[idx] = 'X';
        if (calculateWinner(tempBoard) === 'X') return idx;
    }

    return getEasyCpuMove(squares);
}


export function getMediumCpuMove(squares) {
    const isSmartMove = Math.random() > 0.5;

    return isSmartMove ? getHardCpuMove(squares) : getEasyCpuMove(squares);
}