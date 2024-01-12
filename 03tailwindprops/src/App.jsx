import "./App.css";
import Card from "./components/Card";

function App() {
  
  // ? inserting array or object is better when you declare the variable first then inserting it
  let myObj = {
    name: "Billy",
    age: 23,
    address: {
      city: "Jakarta Barat",
      province: "DKI Jakarta",
      country: "Indonesia",
    },
  };
  let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3">Vite with Tailwind</h1>
      <Card username="Billy" myArr={newArr} myObj = {myObj} />
      <Card username="Jason" post="Beautiful man" />
      <Card />
    </>
  );
}

export default App;
