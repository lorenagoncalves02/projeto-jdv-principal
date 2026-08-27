import { Game } from './components/Game/Game';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <main className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <Game />
    </main>
  );
}