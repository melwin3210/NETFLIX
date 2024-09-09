
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, useNavigate } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import ShimmerUI from './ShimmerUI'


const Body = () => {
    
 

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <ShimmerUI/>
        },
        {
            path: '/browse',
            element: <Browse/>
        },
        {
            path:'/login',
            element:<Login/>
        }
    ])
  return (
    <div>
        <RouterProvider router={appRouter} />
      
    </div>
  )
}

export default Body
