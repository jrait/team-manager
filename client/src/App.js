import logo from './logo.svg';
import './App.css';
import {Router,Link,navigate} from '@reach/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './views/Main'
import New from './views/New'
import Status from './views/Status'

function App() {
  return (
    <div className="App">

      <Router>
        <Main path = '/players/list'></Main>
        <New path = '/players/new'/>
        <Status path = '/players/status/:game'/>
      </Router>
    </div>
  );
}

export default App;
