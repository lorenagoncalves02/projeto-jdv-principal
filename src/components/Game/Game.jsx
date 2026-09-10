import { useState, useEffect } from 'react';
import { Board } from '../Board/Board';
import { Scoreboard } from '../Scoreboard/Scoreboard';
import { calculateWinner } from '../../utils/calculateWinner';
import { getEasyCpuMove, getHardCpuMove, getMediumCpuMove } from '../../utils/cpuLogica';
import styles from './Game.module.css';

export function Game() {

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [scores, setScores] = useState({ x: 0, o: 0, ties: 0 });
  const [gameMode, setGameMode] = useState('pvp');

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handleResetGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  function handlePlay(nextSquares) {
    if (currentMove !== history.length - 1) return;

    const nextHistory = [...history, nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);

    const winner = calculateWinner(nextSquares);
    const isDraw = !winner && nextSquares.every((sq) => sq !== null);

    // Calcula os novos pontos de forma imutável
    let updatedScores = { ...scores };
    if (winner === 'X') {
      updatedScores.x += 1;
    } else if (winner === 'O') {
      updatedScores.o += 1;
    } else if (isDraw) {
      updatedScores.ties += 1;
    }

    // Validação do Requisito de Campeonato (Limite de 10 pontos)
    if (updatedScores.x >= 10 || updatedScores.o >= 10 || updatedScores.ties >= 10) {
      alert('Fim de jogo! A pontuação máxima de 10 foi atingida. O placar geral será zerado.');
      setScores({ x: 0, o: 0, ties: 0 });
      handleResetGame();
    } else {
      setScores(updatedScores);
    }
  }

  useEffect(() => {
    if (!xIsNext && gameMode !== 'pvp') {
      const winner = calculateWinner(currentSquares);
      const isDraw = currentSquares.every((sq) => sq !== null);
      if (winner || isDraw) return;

      let moveIndex;
      if (gameMode === 'easy') {
        moveIndex = getEasyCpuMove(currentSquares);
      } else if (gameMode === 'medium') {
        moveIndex = getMediumCpuMove(currentSquares);
      } else if (gameMode === 'hard') {
        moveIndex = getHardCpuMove(currentSquares);
      }

      if (moveIndex !== null && moveIndex !== undefined) {
        const nextSquares = currentSquares.slice();
        nextSquares[moveIndex] = 'O';
        const timer = setTimeout(() => {
          handlePlay(nextSquares);
        }, 500);
        return () => clearTimeout(timer);
      }
    }
  }, [currentSquares, xIsNext, gameMode]);

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  return (
    <div className={`container py-4 ${styles['game']}`}>
      <h1 className="text-center mb-4">Jogo da Velha</h1>

      <Scoreboard xWins={scores.x} oWins={scores.o} ties={scores.ties} />

      <div className="mb-4 w-100 mx-auto" style={{ maxWidth: '500px' }}>
        <label className="form-label fw-bold text-light d-block text-center mb-2">
          Modo de Jogo:
        </label>
        <div className="btn-group w-100" role="group" aria-label="Seleção de modo">
          <button
            type="button"
            className={`btn ${gameMode === 'pvp' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => { setGameMode('pvp'); handleResetGame(); }}
          >
            2 Jogadores
          </button>
          <button
            type="button"
            className={`btn ${gameMode === 'easy' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => { setGameMode('easy'); handleResetGame(); }}
          >
            Fácil
          </button>
          <button
            type="button"
            className={`btn ${gameMode === 'medium' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => { setGameMode('medium'); handleResetGame(); }}
          >
            Médio
          </button>
          <button
            type="button"
            className={`btn ${gameMode === 'hard' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => { setGameMode('hard'); handleResetGame(); }}
          >
            Difícil
          </button>
        </div>
      </div>

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