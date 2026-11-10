import './App.css'


function ProfileCard(props){
  return(
  <>
    <div>
        <h1>Hello, {props.name}!</h1>
        <p>Personal Introduction</p>
        <h2>About me</h2>
        <ul>
          <li>Age: {props.age}</li>
        
          <li>Course: {props.course}</li>
        
          <li>
            Status: {props.isStudent? "Currently studying":"Not currently studying"}
          </li>
        </ul>
      </div>
  </>
  )
}


function App() {
  return (
    <>
      <div>
        <ProfileCard name= "Vishal Patel" age = {32} course = "Computer Science" isStudent = {true}/>
        <ProfileCard name= "john" age = {28} course = "Computer Science" isStudent = {false}/>
      </div>
      <footer>
        &copy; {new Date().getFullYear()} Personal Introduction
      </footer>
    </>
  )
}



export default App
