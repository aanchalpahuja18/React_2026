import './App.css'
import Item from './components/Item'
import ItemDate from './components/ItemDate'

function App() {
  const data = [
    {
      name: "Camera",
      date: 18,
      month: "August",
      year: 2003
    },
    {
      name: "Controller",
      date: 20,
      month: "June",
      year: 2013
    },
    {
      name: "Monitor",
      date: 15,
      month: "Dec",
      year: 2023
    }
  ]
  return (
    <div>
      <Item name={data[0].name}/>
      <ItemDate date={data[0].date} month={data[0].month} year={data[0].year}></ItemDate>

      <Item name={data[1].name}/>
      <ItemDate date={data[1].date} month={data[1].month} year={data[1].year}></ItemDate>

      <Item name={data[2].name}/>
      <ItemDate date={data[2].date} month={data[2].month} year={data[2].year}></ItemDate>
    </div>
  )
}

export default App
