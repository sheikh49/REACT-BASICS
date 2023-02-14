import "./App.css";
import Image from "./assets/image1.jpeg";
import Demo from "./components/Demo";
function App() {
  var x=10;
  var text;
  if(x===10){
    text="Equal";
  }else{
    text="Not Equal";
  }
  return (
    <div className="App">
      <h1>Hello Wolrd</h1>
      <h2>{50 + 5}</h2>
      <img src={Image} alt="pic" width="50%" />
      <h2>{text}</h2>
      <h3>
        {x>=10 ? "greater than or equal to 10": "not equal to 10"}
      </h3>
      <Demo para={text}/>
      
    </div>
  );
}

export default App;
