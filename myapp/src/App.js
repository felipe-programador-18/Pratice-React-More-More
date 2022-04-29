
import { useState } from 'react';
import './App.css'

const NameEmployer = ['programer','Felipe Martins Machado','Programmer18', 'Betina', 'Joao']

function App() {
  const [busca, setbusca] = useState('')
  const Resumo =  busca.toLowerCase()
   const Union = NameEmployer.filter((call) => call.toLowerCase().includes(Resumo))
 
  return (
    <div className="App">

      <input type='text' onChange={evt => setbusca(evt.target.value)}/>
      <ul>
        {Union.map((call) =>(
          <li key={call}>{call}</li>
        ))}

      </ul>
     
    </div>
  );
}

export default App;
