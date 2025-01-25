import { Button } from "./components/Button";
import Input from "./components/Input";
import "./App.css";  

const App = () => {
  let username = "faraz";

  return (
    <div>
      <Button name="Submit" />
      <Input />
      <Button name="Next" />
      <Button name="Done" />
      <Button />
    </div>
    
    <div>
      <Input />
      <Button />
      <h1>Welcome {2 + 4 + 10}</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
        perspiciatis consequatur consectetur nihil sapiente excepturi, molestiae
        dolores facilis sed iste.
      </p>
    </div>
  );
};

export default App;
