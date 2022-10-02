import './App.css';
import Navbar from './Components/Navbar'
import Container from './Components/Container'

function App() {
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // border: "2px solid red"
  }
  const textAreaStyle = {
    resize: "none",
    overflow: "auto"
  }
  const buttonsStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-evenly",

    width: "30%",
    // border: "2px solid red"
  }

  return (
    <>
      <Navbar title="Code Formatter" />
      <Container containerStyle={containerStyle} textAreaStyle={textAreaStyle} buttonsStyle={buttonsStyle}/>
    </>
  );
}

export default App;
