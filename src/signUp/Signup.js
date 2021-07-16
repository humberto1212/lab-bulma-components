import React from 'react'
import NavBar from '../navbar/Navbar'
import FormField from '../formfield/FormField'
import CoolButton from '../coolbuttom/CoolButtom'
import "bulma/css/bulma.css";

function SignUp(){


    return (

        <div>
            <NavBar />
            <FormField label={"name"} type={"text"} placeholder={"your name"}/>
            <FormField label={"email"} type={"email"} placeholder={'your email'}/>
            <FormField label={"asswort"} type={"passwort"} placeholder={'your passwort'}/>
            <CoolButton class={"is-rounded is-warning"} >submitting</CoolButton>

        

  
        </div>




    )


}

export default SignUp

