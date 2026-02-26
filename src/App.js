import './App.css';
import { Counter } from './Counter';
import Apicall from './Apicall';
import { Parent } from './Parent';
import { Timer } from './Timer';
import Interview from './Interview';
import EventDelegation from './EventDelegation';
import List from './List';
function App() {
  return (
    <div className='App'>
      <Counter />
      <Apicall />
      <Parent />
      <Timer />
      <Interview />
      <EventDelegation />
      <List />
    </div>
  );
}

export default App;
