// src/utils/calculateWinner.js

// Função pura responsável por verificar se existe um vencedor no tabuleiro
export function calculateWinner(squares) {
  // Matriz com todas as 8 combinações de vitória possíveis no Jogo da Velha[cite: 2]
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas horizontais[cite: 2]
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas verticais[cite: 2]
    [0, 4, 8], [2, 4, 6]             // Diagonais[cite: 2]
  ];

  // Algoritmo que percorre cada combinação verificando igualdade entre os quadrados[cite: 2]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Retorna 'X' ou 'O'[cite: 2]
    }
  }

  return null; // Retorna nulo se não houver vencedor[cite: 2]
}