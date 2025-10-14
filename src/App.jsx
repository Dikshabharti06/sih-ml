
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard/Dashboard'
import Beneficiary from './components/Beneficiary/Beneficiary'
import Reports from './components/Reports/Reports'

function App(){
const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route index element={<Dashboard/>}/>
    <Route path='/beneficiary' element={<Beneficiary/>}/>
    <Route path='/reports' element={<Reports/>}/>
    </Route>
  )
)
return(
    <RouterProvider router={router}/>
)
}

export default App
