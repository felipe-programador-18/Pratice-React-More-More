
import { useState } from 'react';
import './App.css'

const NameEmployer = ['programer','Felipe Martins Machado','Programmer18', 'Betina', 'Joao']
const FilterNumberId = ["21","3","232","4324",'123','43234','3434','44','10']
const BuildMap = [1,2,3,43,2,5,2,3,45,23,4,23,4,566,100]
const Testing = BuildMap.map((item) =>(
  <li> {item**2} </li>
))


function App() {
  const [busca, setbusca] = useState('')
  const [caught, setcaught] = useState('')
  const Resumo =  busca.toLowerCase()
  const Union = NameEmployer.filter((call) => call.toLowerCase().includes(Resumo))
 
  const Together = caught
  const Equaly = FilterNumberId.filter((eq) => eq.toLowerCase().includes(Together))

  return (
    <div className="App">

      <input type='text' onChange={evt => setbusca(evt.target.value)}/>
      <ul>
        {Union.map((call) =>(
          <li key={call}>{call}</li>
        ))}
      </ul>

      <input type='text' onChange={(evt => setcaught(evt.target.value))} />
      <ul> {Equaly.map((eq) => (
        <li key={eq}>{eq}</li>
      ))       
      }
      </ul>
     
      <ul>{Testing}</ul>

    </div>
  );
}

export default App;
