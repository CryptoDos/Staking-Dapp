import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Wallet from "./components/Wallet/Wallet";
import Web3ContextProvider from "./context/Web3ContextProvider";
import DisplayPanel from "./components/DisplayPanel/DisplayPanel";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <Web3ContextProvider>
        <Wallet />
        <Navigation />
        <DisplayPanel />
      </Web3ContextProvider>
    </>
  );
}

export default App;
