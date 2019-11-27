import React from 'react'
import ReactModal from 'react-modal'
import ClassSelect from './classesSelect.jsx'
// import Background from './background.jsx'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name : 'Shazobrand the Mighty',
            armor : null,
            class : null,
            room : 1,
            weapon : null,
            bgImage: 0,
        }

        this.handleClassSelect = this.handleClassSelect.bind(this)
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


    //SET UNMOUNT or selected classes will always be overwritten on routing back to this app
    //Might make the fight module a little complicated
    //Just save changes to DB on character creation and reload them from there.
    componentDidMount() {
        // this.changeBg();
        this.setState({
            name : this.props.location.state.user.name,
            armor : this.props.location.state.user.armor,
            class : this.props.location.state.user.class,
            room : this.props.location.state.user.room,
            weapon : this.props.location.state.user.weapon,
        })
    }

    handleClassSelect(completed) {
        this.setState({
            class : choice,
            weapon : weapon
        })
    }


    render() {
        if (this.state.class === null) {
            return (
                <ReactModal isOpen={true} ariaHideApp={false}>
                    <ClassSelect user={this.state} />
                </ReactModal>
            )
        }
        return(
            <div>
                <div id="main">

                    <div id="explore-container">
                        <div id="current-floor">
                            YOU CURRENT HAVE {this.state.room} WINS
                        </div>
                        <div id="explore"></div>
                    </div>
                    <div id="background">
                        <div id="name-container">
                            <div id="class-icon">
                                Icon
                            </div>
                            <div id="name-plate">
                                {this.state.name}
                            </div>
                        </div>
                        <div id="class-image">
                            CLASSIMAGEHERE
                        </div>
                        <div id="next-boss">
                            NEXT BOSS IN n WINS
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;