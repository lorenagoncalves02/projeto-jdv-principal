import { Square } from '../Square/Square';
import { calculateWinner } from '../../utils/calculateWinner';
import styles from './Board.module.css';

// O Board recebe o estado atual dos 9 quadrados, a indicação de quem joga e a função onPlay
export function Board({ xIsNext, squares, onPlay }) {
  // Trata a ação de clique em uma célula específica do tabuleiro[cite: 1, 2]
  function handleClick(i) {
    // Bloqueia a jogada se a partida já tem vencedor ou se o quadrado já está ocupado[cite: 1, 2]
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    // Cria uma cópia imutável do array do tabuleiro[cite: 1, 2]
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    // Notifica o componente pai sobre o novo estado[cite: 1, 2]
    onPlay(nextSquares);
  }

  // Identifica o vencedor para atualizar o status[cite: 1, 2]
  const winner = calculateWinner(squares);
  let status = winner 
    ? `Vencedor: ${winner}` 
    : `Próximo jogador: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className={styles['board']}>
      {/* Alerta interativo do Bootstrap para exibir o status do jogo */}
      <div className="alert alert-info text-center mb-3" role="alert">
        {status}
      </div>

      {/* Grade do tabuleiro renderizada via CSS Grid */}
      <div className={styles['board__grid']}>
        {squares.map((value, index) => (
          <Square 
            key={index} 
            value={value} 
            onSquareClick={() => handleClick(index)} 
          />
        ))}
      </div>
    </div>
  );
}