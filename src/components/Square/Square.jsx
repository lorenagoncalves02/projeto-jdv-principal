// src/components/Square/Square.jsx
import styles from './Square.module.css';

// O componente recebe 'value' (marcação) e 'onSquareClick' (função de clique) via props
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