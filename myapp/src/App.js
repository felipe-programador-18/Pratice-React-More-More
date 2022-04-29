
import { useState } from 'react';
import './App.css'

const NameEmployer = ['programer','Felipe Martins Machado','Programmer18', 'Betina', 'Joao']

const FilterNumberId = [21,3,232,4324,123,43234,3434,44,10]

function App() {
  const [busca, setbusca] = useState('')
  const Resumo =  busca.toLowerCase()
  const Union = NameEmployer.filter((call) => call.toLowerCase().includes(Resumo))
 
  const [caught, setcaught] = useState('')
  const Together = caught.toLowerCase()
  const Equaly = FilterNumberId.filter((eq) => eq.toLowerCase().includes(Together))

  return (
    <div className="App">

      <input type='text' onChange={evt => setbusca(evt.target.value)}/>
      <ul>
        {Union.map((call) =>(
          <li key={call}>{call}</li>
        ))}
      </ul>

      <input type='text' onChange={(ev => setcaught(ev.target.value))} />
      <ul> { Equaly.map((eq) => (
        <li key={eq}>{eq}</li>
      ))       
      }
      </ul>
     
    </div>
  );
}

export default App;
