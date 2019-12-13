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

    //write a function that rolls stats for weapon for each rarity
    //write a function that rolls stats for armor for each rarity
    //roll random weapon and armor and class stats for enemy
    //send user weapon and armor and class stats to display
    //send enemy stats to display
    //use intervals to display attacks from user and enemy.
    //if user wins, display the stats of the weapon and the users weapon
        //ask user if they would like to keep weapon?
            //save new weapon to database for user and send player back to main screen
    //if user loses, tell user they have died
        //wipe all data from users account including starting class and weapon
        //send user to log in screen?
    
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
                <div id="battle-arena"></div>
                <div id="battle-strengths">
                    Strength Comparison
                </div>
                <div id="battle-enemy-stats">
                { this.state.class !== null ? <DisplayStats class={this.state.class} /> : 'Loading..' }
                </div>
                <div id="battle-user-stats">
                { this.state.class !== null ? <DisplayStats class={this.state.class} /> : 'Loading..' }
                </div>
                <button id="battle-fight" type="submit" onClick={(e)=>{
                    this.postChoice()
                    }}>FIGHT!</button>
                <button id="battle-run" type="submit" onClick={(e)=>{
                    this.postChoice()
                    }}>RUN!</button>
            </div>
        )
    }
}

  export default Battle;