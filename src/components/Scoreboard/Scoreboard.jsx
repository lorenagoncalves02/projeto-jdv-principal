// src/components/Scoreboard/Scoreboard.jsx
import styles from './Scoreboard.module.css';

// O componente recebe os contadores diretamente do pai (Game) via props
export function Scoreboard({ xWins, oWins, ties }) {
  return (
    <div className={`card text-center shadow-sm mb-4 ${styles['scoreboard']}`}>
      <div className="card-header bg-primary text-white fw-bold">
        Placar Geral
      </div>
      <div className="card-body d-flex justify-content-around py-2">
        <div className={styles['scoreboard__item']}>
          <span className="fw-bold text-primary">Jogador X</span>
          <h4 className="mb-0">{xWins}</h4>
        </div>
        <div className={styles['scoreboard__item']}>
          <span className="fw-bold text-secondary">Empates</span>
          <h4 className="mb-0">{ties}</h4>
        </div>
        <div className={styles['scoreboard__item']}>
          <span className="fw-bold text-danger">Jogador O</span>
          <h4 className="mb-0">{oWins}</h4>
        </div>
      </div>
    </div>
  );
}