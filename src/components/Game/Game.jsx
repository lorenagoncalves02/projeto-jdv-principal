import { useState } from 'react';
import { Scoreboard } from '../Scoreboard/Scoreboard';
import { Board } from '../Board/Board';
import { calculateWinner } from '../../utils/calculateWinner';
import styles from './Game.module.css';

export function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [scores, setScores] = useState({ x: 0, o: 0, ties: 0 });

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    // Trava de segurança: impede novas jogadas se o usuário estiver navegando pelo passado
    if (currentMove !== history.length - 1) {
      return;
    }

    const nextHistory = [...history, nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);

    // Atualização do placar acumulativo (RF08)
    const winner = calculateWinner(nextSquares);
    const isDraw = !winner && nextSquares.every((sq) => sq !== null);

    if (winner === 'X') {
      setScores((prev) => ({ ...prev, x: prev.x + 1 }));
    } else if (winner === 'O') {
      setScores((prev) => ({ ...prev, o: prev.o + 1 }));
    } else if (isDraw) {
      setScores((prev) => ({ ...prev, ties: prev.ties + 1 }));
    }
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function handleResetGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  return (
    <div className={`container py-4 ${styles['game']}`}>
      <h1 className="text-center mb-4">Jogo da Velha</h1>

      <Scoreboard xWins={scores.x} oWins={scores.o} ties={scores.ties} />

      <div className={styles['game__content']}>
        <div className={styles['game__board']}>
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>

        <div className={styles['game__info']}>
          <button
            className="btn btn-primary mb-3 w-100 fw-bold"
            onClick={handleResetGame}
          >
            Jogar Novamente
          </button>
          <h3>Histórico (Revisão)</h3>
          <ol className="list-group list-group-numbered">
            {history.map((_, move) => (
              <li key={move} className="list-group-item d-flex justify-content-between align-items-center">
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => jumpTo(move)}
                >
                  {move > 0 ? `Ver jogada #${move}` : 'Ver início do jogo'}
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}