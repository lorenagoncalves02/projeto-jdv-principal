// Função pura que verifica se existe uma combinação vencedora no tabuleiro[cite: 2]
export function calculateWinner(squares) {
  // As 8 combinações de vitória (linhas, colunas e diagonais)[cite: 2]
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // Se a posição atual não for nula e for igual às outras duas da combinação[cite: 2]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Retorna 'X' ou 'O'[cite: 2]
    }
  }

  return null; // Ninguém venceu até o momento[cite: 2]
}