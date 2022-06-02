import AppLayout from "./Layout/AppLayout";
import './App.css';
import PlayerController from "./Components/Controller";
import PlayerWindow from "./Components/PlayerWindow";

function App() {
  return (
      <AppLayout>
        <PlayerWindow/>
        <PlayerController/>
      </AppLayout>
  )
}

export default App;