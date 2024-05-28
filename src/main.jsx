import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App'
import Home from './components/Home'
import About from './components/About'
import Videos from './components/Videos'
import PastEvents from './components/PastEvents'
import ErrorPage from './components/ErrorPage'
import PosterAddDelete from './components/PosterAddDelete'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {videosLoader} from './components/loaders'

const routes = [
    {
        element: <App />,
        path: '/',
        errorElement:<ErrorPage/>,
        children:[
            {
                index:true,
                element:<Home />,
                errorElement:<ErrorPage/>

            },
            {
                element:<Videos />,
                path:'videos',
                errorElement:<ErrorPage/>,
                loader: videosLoader
            },
            {
                element:<PastEvents />,
                path:'pastevents',
                errorElement:<ErrorPage/>,
            },
            {
                element:<PosterAddDelete />,
                path:'add',
                errorElement:<ErrorPage/>,
            },
            {
                element:<About />,
                path:'about',
                errorElement:<ErrorPage/>
           
            }
        ]
    }
]

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>,
  )
  

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App  />); 