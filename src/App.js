import logo from './logo.svg';
import './App.css';
import Parent from './Pages/Parent';
import Child from './Pages/Child';
import Counter from './Pages/Counter';
import LongForm from './Pages/LongForm';

function App() {
    return (
        <div className="App">
            {/* <Parent /> */}
            {/* <Child /> */}
            <Counter />
            <LongForm/>
        </div>
    );
}

export default App;
