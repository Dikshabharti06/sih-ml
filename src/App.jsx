
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard/Dashboard'

function App(){
const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route index element={<Dashboard/>}/>
    </Route>
  )
)
return(
    <RouterProvider router={router}/>
)
}

export default App
