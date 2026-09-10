import styles from './Square.module.css';

export function Square({ value, onSquareClick }) {
  return (
    <button 
      // Integração com Bootstrap e CSS Modules (metodologia BEM para estados ocupados)
      className={`btn btn-outline-primary ${styles['square']} ${value ? styles['square--occupied'] : ''}`}
      onClick={onSquareClick}
      type="button"
    >
      {value}
    </button>
  );
}