import './App.css';
import Title from "./components/Title"
import SecondName from "./components/SecondName"
import { MyNameContextProvider } from "./contexts/MyName"

function App() {
  return (
    <MyNameContextProvider>
      <div className="App">
        <Title />
        <SecondName />
      </div>
    </MyNameContextProvider>
  );
}

export default App;
