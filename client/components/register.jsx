import React from 'react'
import { saltHashPassword } from '../../server/hashing.js'
import axios from 'axios'

const Register = () => {
    return (
        <div>
            <div id='text-Modal'>
                <h1>Create Account Classy Gladiator!</h1>
                <p>To begin playing you must first have an account.<br/>
                Please enter a username and password below and click submit to create your account<br/>
                Once you recieve confirmation that your account has been created you can return to the login page.</p>
            </div>
             <form>
                    Username:<br/>
                    <input type="text" id="reg-username"/><br/>
                    Password:<br/>
                    <input type="password" id="reg-psw"/><br/>
                    <input type="submit" value="Submit" onClick={(e) => {
                        e.preventDefault();
                        let name = document.getElementById("reg-username").value;
                        let password = document.getElementById("reg-psw").value;
                        let userPackage = saltHashPassword(password)
                        userPackage.user = name;
                        axios.post('/register', userPackage)
                        .then(function (response) {
                          window.alert(response.data);
                          console.log('Account Creation Successful');
                        })
                        .catch(function (error) {
                          // handle error
                          console.log(error);
                        })
                        }}/>
                </form>
        </div>
    )
}

export default Register;