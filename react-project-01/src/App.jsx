import './App.css'
import Item from './components/Item'
import ItemDate from './components/ItemDate'
import NewProduct from './components/NewProduct'

function App() {
  const data = [
    {
      id: 'p1',
      name: "Camera",
      amount: 20000,
      date: new Date(2026, 1, 11)
    },
    {
      id: 'p2',
      name: "Controller",
      amount: 35000,
      date: new Date(2026, 2, 20)
    },
    {
      id: 'p3',
      name: "Monitor",
      amount: 10000,
      date: new Date(2026, 5, 10)
    },
    {
      id: 'p4',
      name: "Keyboard",
      amount: 5000,
      date: new Date(2026, 6, 15)
    }
  ]

  function appHandler(product){
    console.log("I am inside App.jsx");
    console.log(product);
  }
  return (
    <div>
      <NewProduct/>
      <Item items ={data} onAppHandler = {appHandler}/>
    </div>
  )
}

export default App
