import styles from './Scoreboard.module.css';

export function Scoreboard({ xWins, oWins, ties }) {
  return (
    <div className={`row g-2 mb-4 mx-auto justify-content-center ${styles['scoreboard']}`}>

      <div className="col-4">

        <div className={`card text-center ${styles['scoreboard__card']} ${styles['scoreboard__card--x']}`}>
          <div className="card-body p-2">
            <span className={`d-block fw-bold ${styles['scoreboard__label']}`}>Jogador X</span>
            <span className={`fs-4 fw-bolder ${styles['scoreboard__value']}`}>{xWins}</span>
          </div>
        </div>
      </div>

      <div className="col-4">

        <div className={`card text-center ${styles['scoreboard__card']} ${styles['scoreboard__card--ties']}`}>
          <div className="card-body p-2">
            <span className={`d-block fw-bold ${styles['scoreboard__label']}`}>Empates</span>
            <span className={`fs-4 fw-bolder ${styles['scoreboard__value']}`}>{ties}</span>
          </div>
        </div>
      </div>

      <div className="col-4">

        <div className={`card text-center ${styles['scoreboard__card']} ${styles['scoreboard__card--o']}`}>
          <div className="card-body p-2">
            <span className={`d-block fw-bold ${styles['scoreboard__label']}`}>Jogador O</span>
            <span className={`fs-4 fw-bolder ${styles['scoreboard__value']}`}>{oWins}</span>
          </div>
        </div>
      </div>
    </div>
  );
}