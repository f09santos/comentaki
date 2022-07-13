import React from 'react'
import './App.css'
import { AuthProvider } from './auth'
import  NewComment from './NewComment'
import Comments from './Comments'
import CreateUser from './CreateUser'
import SignInUser from './SignInUser'
import UserInfo from './UserInfo'





function App() {
  

  return (
    <AuthProvider>

    <div >
    <NewComment />
    <Comments /> 
    <CreateUser />
    <SignInUser />
    <UserInfo />
    
    </div>
    </AuthProvider>
  )
  
  
}

export default App;
