import './App.css'
import { useState } from 'react';


const employees = [
  { id: 1, name: "Alice Smith", age: 28, role: "Frontend Developer" },
  { id: 2, name: "Bob Johnson", age: 34, role: "UI Designer" },
  { id: 3, name: "Charlie Davis", age: 41, role: "Product Manager" },
  { id: 4, name: "Diana Prince", age: 30, role: "Backend Engineer" }
] 





function ProfileCard(props){
  return(
  <>
    <li>
        <h1>Employee Name: {props.name}!</h1>
        <h2>About: </h2>
        <ul>
          <li>Age: {props.age}</li>
        
          <li>Role: {props.role}</li>
        
          {/* <li>
            Status: {props.isStudent? "Currently studying":"Not currently studying"}
          </li> */}
        </ul>
      </li>
  </>
  )
}


function App() {
  return (
    <>
      <div>
        <ToggleMessage />
      </div>
      {/* <footer>
        &copy; {new Date().getFullYear()} Personal Introduction
      </footer> */}
    </>
  )
}



function EmployeeDirectory(){
  return (
    <>
    <ul>
      {employees.map((employee) => (
        <ProfileCard key={employee.id} name={employee.name} age={employee.age} role={employee.role}/>
      ))}
    </ul>
    </>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  function handleIncrement(){
    setCount(count + 1)
  }
  function handleDecrement(){
    setCount(count - 1)
  }
  function handleReset(){
    setCount(0)
  }
  return(
    <>
    <div>
      <h1>Counter</h1>
      <div>{count}</div>
      <button type='button' onClick={handleDecrement}>Decrement</button>
      <button type='button' onClick={handleIncrement}>Increment</button>
      <button type='button' onClick={handleReset}>Reset</button>
      </div>
    </>
  )
}



function ToggleMessage(){
  let [isVisible, setIsVisbile] = useState(false)
  function toggleVisibility(){
    setIsVisbile(!isVisible);
  }
  return (
    <div>
      {isVisible && <p>Welcome to React!</p>}

      <button type="button" onClick={toggleVisibility}>
        {isVisible? "Hide Message":"Show Message"}
      </button>
    </div>
  );
}

export default App


