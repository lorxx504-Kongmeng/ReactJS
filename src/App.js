import './App.css';

function App() {
  const name = <h1>Kongmeng Lor</h1>
  return <div className='App'>
      <Job salary={90000} position="Senior SDE" company="Amazon" />
      <Job salary={12000} position="Junior SDW" company="Google" />
      <Job salary={10000} position="Project Manager" company="Netflix"/>
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


const Job = (data) => {
  return <div>
    <h1>{data.salary}</h1>
    <h1>{data.position}</h1>
    <h1>{data.company}</h1>
  </div>
}
export default App;
 