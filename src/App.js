import React from 'react'
import './index.css';
import Maincontainer from './components/Maincontainer'; 
import { Provider } from 'react-redux';
import store from './store/Store';
import WatchVideoContainer from './components/WatchVideoContainer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import SearchPage from './components/search/SearchPage'
 

const appRouter = createBrowserRouter([{
  path:"/",
  element: <Body />,
  children:[
    {
      path:"/",
      element:<Maincontainer />
    },
    {
      path: "/watch",
      element: <WatchVideoContainer />
    },
    {
      path:"/search",
      element: <SearchPage />
    }
  ]
}]);

function App() {
  return (
    <Provider store={store}>
      <div>
    <RouterProvider router={appRouter} />
    </div>
    </Provider>
  )
}

export default App