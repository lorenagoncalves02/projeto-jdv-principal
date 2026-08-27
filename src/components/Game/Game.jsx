import { useState } from 'react';
import { Board } from '../Board/Board';
import styles from './Game.module.css';

export function Game() {
  // 'history' guarda um array contendo todas as "fotos" (estados) do tabuleiro
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // 'currentMove' guarda o índice da jogada que estamos visualizando
  const [currentMove, setCurrentMove] = useState(0);

  // Calcula se é a vez do X com base no número do turno atual
  const xIsNext = currentMove % 2 === 0;
  // Pega o estado do tabuleiro na jogada atual
  const currentSquares = history[currentMove];

  // Atualiza o histórico ao realizar uma nova jogada[cite: 1, 2]
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  // Altera o turno atual para "viajar no tempo"[cite: 1, 2]
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  return (
    <div className={`container py-4 ${styles['game']}`}>
      <h1 className="text-center mb-4">Jogo da Velha</h1>
      <div className={styles['game__content']}>
        <div className={styles['game__board']}>
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className={styles['game__info']}>
          <h3>Histórico de Jogadas</h3>
          <ol className="list-group list-group-numbered">
            {history.map((_, move) => (
              <li key={move} className="list-group-item d-flex justify-content-between align-items-center">
                <button 
                  className="btn btn-sm btn-outline-secondary" 
                  onClick={() => jumpTo(move)}
                >
                  {move > 0 ? `Ir para a jogada #${move}` : 'Ir para o início do jogo'}
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}