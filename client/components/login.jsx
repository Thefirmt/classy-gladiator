import React from 'react'
import axios from 'axios'
import { sha512 } from '../../server/hashing.js'

const Login = () => {
    return(
        <div>
            <div id='text-Modal'>
                <h1>Welcome to Classy Gladiator!</h1>
                <p>You must win 100 battles to earn your freedom.<br/>
                Search for powerful weapons and armor to aid you.<br/>
                Beware, death is permanent. You will lose all progress if you die.</p>
            </div>
            <div>
                <form>
                    Username:<br/>
                    <input type="text" id="username"/><br/>
                    Password:<br/>
                    <input type="password" id="psw"/><br/>
                    <input type="submit" value="Submit" onClick={(e) => {
                        let name = document.getElementById("username").value;
                        let pass = document.getElementById("psw").value;
                        axios.get(`/login?user=${name}`)
                        .then(function (salt) {
                          // handle success
                          let hashed = sha512(pass, salt)
                          hashed.user = name;
                          axios.get(`/loginconfirm?info=${hashed}`)
                        })
                        .catch(function (error) {
                          // handle error
                          console.log(error);
                        })
                        .finally(function () {
                          // always executed
                        });
                        
                        e.preventDefault();}}/>
                </form>
                <p>Not a gladiator yet?</p>
            </div>
        </div>

    )
}

export default Login;