import React from 'react'
import ReactModal from 'react-modal'
// import Background from './background.jsx'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            something: 'here',
            floor: 1,
            bgImage: 0,
            class: 3, //each class has a number in db
        }
    }

    //intial backgorund changing idea. Call this function after every floor to check for new background.
    //Perhaps a better idea is to just have bgImage update after ever boss fight as part of the boss Mechanic.
    //This will most likely be changed. Depending on floor change frequency
    checkBackground() {
        if (floor % 10 === 0) {
            bgImage++
        }
    }

    changeBg() {
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)
        var color = `rgb(${r},${g},${b})`
        document.getElementById("background").style.background= color
    }

    componentDidMount() {
        this.changeBg();
    }


    render() {
        return(
            <div>
                <div id="main">
                    <ReactModal isOpen={false}>

                    </ReactModal>
                    <div id="explore-container">
                        <div id="current-floor">
                            THIS IS THE CURRENT FLOOR DIV
                        </div>
                        <div id="explore"></div>
                    </div>
                    <div id="background">
                        <div id="name-container">
                            <div id="class-icon">
                                Icon
                            </div>
                            <div id="name-plate">
                                USERNAME
                            </div>
                        </div>
                        <div id="class-image">
                            CLASSIMAGEHERE
                        </div>
                        <div id="next-boss">
                            NEXT BOSS IN n FLOORS
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;