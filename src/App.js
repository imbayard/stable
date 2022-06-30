import './styling/App.css';
import axios from 'axios';

// Components
import Header from './components/Header.js';

function App() {
      async function handleClick() {
            axios.post('http://localhost:8080/v1/ako/user-object/query', {customerId: 'abc-123-abc-321'})
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
                })
      }
      return (
            <div className="App">
                <Header />
                <button style={{position: 'fixed', top: '50vh'}} onClick={handleClick}>Click Me!</button>
            </div>
      );
}

export default App;
