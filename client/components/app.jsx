import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            something: 'here'
        }
    }


    render() {
        return(
            <div>
                <p>Hello from react</p>
            </div>
        )
    }
}

export default App;