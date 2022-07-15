import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" onClick={() => alert('알림창 입니다.')}> 이 버튼을 누르면 알림창이 뜨게됩니다.<br></br>▼<br></br>
      <button>Button</button>
    </div>
  );
}

export default App;
