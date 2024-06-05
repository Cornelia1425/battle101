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
import EventRecord from './components/EventRecord'
import Shop from './components/Shop'
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
                path: '/',
            },
            {
                element:<Videos />,
                path:'videos',
                loader: videosLoader
            },
            {
                element:<PastEvents />,
                path:'pastevents',
            },
            {
                element:<PosterAddDelete />,
                path:'add',
            },
            {
                element:<About />,
                path:'about',
            }
            ,
            {
                element:<EventRecord />,
                path:'record/:id',        
            }
            ,
            {
                element:<Shop />,
                path:'shop',        
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