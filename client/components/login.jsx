import React from 'react'
import axios from 'axios'
import ReactModal from 'react-modal'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { sha512 } from '../../server/hashing.js'

class Login extends React.Component {
  constructor (props) {
  super(props)
    this.state = {
      loggedIn : false,
      user : null
    }
    this.handleLogIn = this.handleLogIn.bind(this);
  }

  handleLogIn(name, pass) {
    axios.get(`/login?user=${name}`)
    .then(function (salt) {
      let hashed = sha512(pass, salt.data)
      hashed.user = name;
      console.log(this)
      return axios.get(`/loginconfirm?user=${hashed.user}&pass=${hashed.psw}`)
    })
    .then(this.loginPart2.bind(this))
    .catch(function (error) {
      console.log(error);
    })
  }

  loginPart2(user) {
      this.setState({
        loggedIn: true,
        user: user.data
      })
  }

  render(){
    if (this.state.loggedIn === true) {
      return <Redirect to={{
        pathname: '/play',
        state: { user: this.state.user }
        }}
        />
    }
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
                        e.preventDefault();
                        this.handleLogIn(name, pass)
                        }}/>
                </form>
                <p>Not a gladiator yet?</p>
            </div>
            
        </div>
    )
  }
}

export default Login;