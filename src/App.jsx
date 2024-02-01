import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Basket from './components/Basket'
import { total } from './redux/features/basketSlice'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const {products} = useSelector((store)=>store.products)

  useEffect(()=>{
    dispatch(total())
  },[products])
  return (
    <>
    <Navbar/>
    <Basket/>
    </>
  )
}

export default App