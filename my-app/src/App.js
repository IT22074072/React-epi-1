import "./App.css";

function App() {
  //this is how we call the User Component
  return (
    <div className="App">
      <User />
      <User />
      <User />
    </div>
  );
}

//this returns ui stuff(some html code)
const User = () => {
  return (
    <div>
      <h1>Dinithi</h1>
      <h2>21</h2>
      <h2>dini@gmail.com</h2>
    </div>
  );
};

export default App;
