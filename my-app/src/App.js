import "./App.css";

function App() {
  //this is how we call the User Component
  return (
    <div className="App">
      <User name="Dinithi" age = {21} email = "dini@gmail.com"/>
      <User name="Piyumi" age = {25} email = "pipi@gmail.com"/>
      <User name="JK" age = {26} email = "jk@gmail.com"/>
    </div>
  );
}

//this returns ui stuff(some html code)
const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h2>{props.email}</h2>
    </div>
  );
};

export default App;
