import { useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";
import tryConvert from "./lib/tryconvert";

function App() {
  const [value, setValues] = useState({ celsius: 0, fahrenheit: 0 });
  const handleChange = (event) => {
    if (event.target.id === "celsius") {
      setValues({
        celsius: event.target.value,
        fahrenheit: tryConvert(event.target.value, "toFahrenheit"),
      });
    } else {
      setValues({
        celsius: tryConvert(event.target.value, "toCelsius"),
        fahrenheit: event.target.value,
      });
    }
  };
  return (
    <>
      <h1>Temperature Converter</h1>

      <form>
        <Input label="Celsius" value={value} changeHandler={handleChange} />
        <Input label="Fahrenheit" value={value} changeHandler={handleChange} />
      </form>
    </>
  );
}

export default App;
