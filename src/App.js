import logo from './logo.svg';
import './App.css';
import { Heading, Paragraph } from './components/Heading';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading headingTitle="Qwerty" code="123"/>
        <Paragraph aim="Motivation"/>
      </header>
    </div>
  );
}

export default App;
