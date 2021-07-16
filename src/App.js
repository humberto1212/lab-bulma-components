import React from 'react';
import Navbar from './navbar/Navbar'
import FormField from './formfield/FormField'
import SignUp from './signUp/Signup'
import Message from './message/Mennage'


const App = () => {
  return(
    <div>

      <Navbar />

      <FormField  
        label={ 'Name' }
        type={ 'text' } 
        placeholder={ 'e.g Alex Smith' }
      />
      <FormField 
        abel={ 'Email' }
        type={ 'email' } 
        placeholder={ 'e.g. alexsmith@gmail.com' } 
      />

      <SignUp />

      <Message isInfo title='Hello World'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong> Pellentesque risus mi</strong>.
      </Message>

    </div>
  )
};

export default App;
