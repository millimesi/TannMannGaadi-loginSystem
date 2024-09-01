import React, { Component } from 'react';
import SignUp from './components/signup/signup.jsx';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/login/login.jsx';


class APP extends Component {
  route = createBrowserRouter([
      {
        path: "/",
        element: <SignUp />
      },
      {
        path: "/login",
        element: <Login />
      }
  ])

  render() { 
    return (
      <div className='App'>
        <RouterProvider router={this.route}></RouterProvider>
      </div>
    );
  }
}
 
export default APP;
