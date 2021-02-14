//import logo from './logo.svg';
import './App.css';
import NameList from './Component/NameList/NameList';


function App() {

  

  return (

    <div className="App">


          

          <h1>savindu</h1>
          <ul>
            <li>savindu</li>
            <li>pasintha</li>
            <li>lakmal</li>
            <li>{document.write("savindufoisfios")}</li>
          </ul>


          <NameList  name="n1 props" />

          
          

    </div>


  ) ;
}

export default App;
