import './App.css';
import { Header,Footer, Details } from './Components/Header';
import {Nav} from "./Components/Nav"

function App() {
  return (
    <div>
      <h1> Hello World </h1>
      <Header/>
      <Footer/>
      <Nav/>
      <Details  name="Anshika"/>
    </div>
  );
}

export default App;
