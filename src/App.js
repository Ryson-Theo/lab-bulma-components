import "./App.css";
import "bulma/css/bulma.css";
import SignupForm from "./components/SignupForm";
import Message from "./components/Message";
import CoolButton from "./components/CoolButton";

function App() {
  return (
    <div className="App">
     
      <SignupForm />
      
     
      <div className="container" style={{ padding: "0 20px 40px 20px", maxWidth: "500px" }}>
        
        <span className="preview-label">Iteration 4 Buttons Style Preview:</span>
        <div className="buttons">
          <CoolButton isSuccess>Button 1</CoolButton>
          
          <CoolButton isWhite>Button 2</CoolButton>
        </div>

        <span className="preview-label">Iteration 5 Bonus Style Preview:</span>
        <div className="buttons">
          <CoolButton isSmall isDanger isRounded>Button 1</CoolButton>
          <CoolButton isSmall isSuccess>Button 2</CoolButton>
        </div>

        <hr />

        <span className="preview-label">Iteration 6 Message Component Preview:</span>
        <Message isInfo title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <strong>Pellentesque risus mi</strong>.
        </Message>
        
      </div>
    </div>
  );
}

export default App;