import React from 'react'
import reactDOM from 'react-dom'
import App from './components/app.jsx'
import Login from './components/login.jsx'
import Register from './components/register.jsx'
import ReactModal from 'react-modal'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

reactDOM.render(
    <Router>
        <div>
            <aside>
                <Link to={`/`}>Logout</Link>
            </aside>

            <main>
                <Route exact path="/" render={() => (
                    <div>
                        <ReactModal isOpen={true} ariaHideApp={false}>
                            <Login />
                            <Link to={'/register'}>Sign up</Link>
                            <Link to={`/play`}>Play</Link>
                        </ReactModal>
                    </div>
                )} />
                <Route path="/register" render={() => (
                    <div>
                        <ReactModal isOpen={true} ariaHideApp={false}>
                            <Register />
                            <Link to={`/`}>Return to Login</Link>
                            <p id="warning">WARNING THIS GAME DOES NOT RUN ON HTTPS!<br/>
                            WHILE STEPS HAVE BEEN TAKEN TO ENSURE TO SAFETY OF YOUR PASSWORD<br/>
                            NOTHING CAN STOP A DETERMINED HACKER ON HTTP.<br/>
                            FOR YOUR SAFETY <b>PLEASE USE A UNIQUE PASSWORD WITH THIS GAME.</b>
                            </p>
                        </ReactModal>
                    </div>
                )} />
                <Route path="/play" component={App} />
            </main>
        </div>
    </Router>,
    // <App />,
document.getElementById('app'));