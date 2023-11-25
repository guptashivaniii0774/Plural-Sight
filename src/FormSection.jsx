import React from "react";

import LogoImage from "./assets/login-logo.png"

const FormSection = () => {
    return (
        <>

<div class="form-section">
            <img src={LogoImage} alt=""/>

            <form>
            <label>Email or Username</label>
            <input type="text"/>
            <label>Password</label>
            <input type="text"/>


            <button>Sign in </button>

            </form>
            <a href="">Forgot Password ?</a>
            <a href="">Sign in with company or School</a>
            <hr/>
           
            <button class ="create" >Create an Account</button>
            <p>Create an account
                Copyright © 2004 - 2023 Pluralsight LLC. All rights reserved.
            </p>
            <span>
                <a href="" >Terms of use</a> | <a href="">Privacy policy</a>
            </span>
 
  
        </div>
       
        </>
    );
}

export default FormSection;