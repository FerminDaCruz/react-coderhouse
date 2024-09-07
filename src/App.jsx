import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContair'
import { useState } from 'react'




export default function App() {

  const [count, setCount] = useState(0);

  const handleAddItem = () => {
    setCount(count + 1)
  }

  const handleRemoveItem = () => {
    if (count === 0) return;
    setCount (count - 1)
  }

  return (
    <ChakraProvider>
      <NavBar/>
      <ItemListContainer greeting="me jijeo"/>
      <div style={{fontSize: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
        valor del estado: {count}
        <div style={{display: 'flex'}}>
          <button onClick={handleAddItem} style={{marginLeft: '1rem'}}>+</button>
          <button onClick={handleRemoveItem} style={{marginLeft: '1rem'}}>-</button>
        </div>
      </div>
      

    </ChakraProvider>
  )
}


