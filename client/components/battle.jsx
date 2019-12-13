import React from 'react'
import DisplayStats from './statsBattle.jsx'

class Battle extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            user: { 
                name : this.props.user.name,
                armor : this.props.user.armor,
                class : this.props.user.class,
                room : this.props.user.room,
                weapon : this.props.user.weapon },
        }
    }

    //get starter Classes from DB
    getStarterClasses() {
        axios.get('/starterClasses')
        .then(this.addClasses.bind(this))
    }
    addClasses(starterClasses) {
        this.classes = starterClasses.data.rows;
        this.setState({
            class: this.classes[0]
        });
    }

    //get starter Weapons from DB
    getStarterWeapons() {
        axios.get('/starterWeapons')
        .then(this.addWeapons.bind(this))
    }
    addWeapons(starterWeapons) {
        this.weapons = starterWeapons.data.rows;
        this.setState({
            weapon: this.weapons[0]
        });
    }

    goLeft() {
        if (this.current > 0) {
            this.current-= 1;
        }
        if (this.current === 0) {
            let y = document.getElementById("class-arrow-left");
            y.style.display = "none";
        }
        if (this.current < 7) {
            let x = document.getElementById("class-arrow-right")
            x.style.display = "grid";
        }
        this.setState({
            class: this.classes[this.current],
            weapon: this.weapons[this.current]
        });
    }

    goRight() {
        if (this.current < 7) {
            this.current+= 1;
        }
        if (this.current > 0) {
            let y = document.getElementById("class-arrow-left");
            y.style.display = "grid";
        }
        if (this.current === 7) {
            let x = document.getElementById("class-arrow-right")
            x.style.display = "none";
        }
        this.setState({
            class: this.classes[this.current],
            weapon: this.weapons[this.current]
        });
    }


    componentDidMount() {
        // this.getStarterClasses();
        // this.getStarterWeapons();
    }

    //Add weapon to database on a victory
    postChoice() {
        axios.post('classSelected', {
            name: this.props.user.name,
            class: this.state.class.id,
            weapon: this.state.weapon.id
        })
        .then(this.props.handleClassSelect(this.state.user, this.state.class.id, this.state.weapon.id))
        .catch(function (error) {
            console.log(error);
            })
    }
    
    render() {
        return(
            <div className="battle-modal">
                <div className="battle-header">
                    YOU'VE ENCOUNTERED [enemy]
                </div>
                <div id="battle-stats">
                    Strength Comparison
                { this.state.class !== null ? <DisplayStats class={this.state.class} /> : 'Loading..' }
                { this.state.class !== null ? <DisplayStats class={this.state.class} /> : 'Loading..' }
                </div>
                <div id="image">
                    BATTLE ARENA
                </div>
                <button id="button-accept" type="submit" onClick={(e)=>{
                    this.postChoice()
                    }}>FIGHT!</button>
                <button id="button-accept" type="submit" onClick={(e)=>{
                    this.postChoice()
                    }}>RUN!</button>
            </div>
        )
    }
}

  export default Battle;