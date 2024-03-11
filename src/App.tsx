import React from 'react';
import './App.css';
import Header from './components/header';
import { RouterProvider } from 'react-router-dom';
import router from './routes';



function App() {
  return (
    <div className="App dark:bg-foundation-grey-13 bg-foundation-grey-2 min-h-screen flex flex-col">
      <Header className=''/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
