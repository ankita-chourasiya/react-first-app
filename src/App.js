import logo from './logo.svg';
import './App.css';
import { Heading, Paragraph } from './components/Heading';
import Counter from './components/classBased/Counter'
import FunCounter from './components/functionBased/FunCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FunCounter />
        {/* <Counter />
        <Heading headingTitle="Qwerty" code="123"/>
        <Paragraph aim="Motivation"/> */}
      </header>
    </div>
  );
}

export default App;
