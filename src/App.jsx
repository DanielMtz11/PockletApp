// import '../styles/App.css'
import './styles/App.css'

import Nav from './components/Nav'
import Home from './components/Home'
import Tokens from './components/Tokens'
import HowItWorks from './components/HowItWorks'
import Companies from './components/Companies'
import Transaction from './components/Transaction'


function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Tokens/>
      <HowItWorks/>
      <Companies/>
      <Transaction/>


      </div>

    // <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    // <script src="../js/menu.js"></script>


  );
}

export default App;
