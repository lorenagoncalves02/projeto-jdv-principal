import { Square } from '../Square/Square';
import { calculateWinner } from '../../utils/calculateWinner';
import styles from './Board.module.css';

export function Board({ xIsNext, squares, onPlay }) {

  function handleClick(i) {

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';

    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status = winner 
    ? `Vencedor: ${winner}` 
    : `Próximo jogador: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className={styles['board']}>
      <div className="alert alert-info text-center mb-3" role="alert">
        {status}
      </div>

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
