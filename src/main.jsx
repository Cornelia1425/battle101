import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App'
import Home from './components/Home'
import About from './components/About'
import Videos from './components/Videos'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {videosLoader} from './components/loaders'

const routes = [
    {
        element: <App />,
        path: '/',
        children:[
            {
                index:true,
                element:<Home />

            },
            {
    
                element:<Videos />,
                path:'videos',
                loader: videosLoader
            },
            {
    
                element:<About />,
                path:'about'
           
            },
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