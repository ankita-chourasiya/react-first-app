import logo from './logo.svg';
import './App.css';
import { Heading, Paragraph } from './components/Heading';
import Counter from './components/classBased/Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Heading headingTitle="Qwerty" code="123"/>
        <Paragraph aim="Motivation"/>
      </header>
    </div>
  );
}

export default App;
