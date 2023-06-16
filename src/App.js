import './App.css';
import {Plants} from "./Plants"

function App() {
  const p = [
    {name: "Mars", isGasPlanet: false},{name: "Earth", isGasPlanet: false},{name: "Jupiter", isGasPlanet: true}
  ]

  // return <div className='App'>
  //     <Job salary={90000} position="Senior SDE" company="Amazon" />
  //     <Job salary={12000} position="Junior SDW" company="Google" />
  //     <Job salary={10000} position="Project Manager" company="Netflix"/>
  // </div>

  return <div className='App'>
    {
      p.map((name, key) => {
        return <Plants name={p.name} age={p.isGasPlanet} />
      })
    }
  </div>
}

// const User = (data) => {
//   return <div>
//     <h1>
//       {data.name}
//     </h1>
//     <h1>{data.age}</h1>
//     <h1>{data.address}</h1>
//   </div>
// }


// const Job = (data) => {
//   return <div>
//     <h1>{data.salary}</h1>
//     <h1>{data.position}</h1>
//     <h1>{data.company}</h1>
//   </div>
// }
export default App;
 