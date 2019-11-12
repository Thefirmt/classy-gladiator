import React from 'react'
import axios from 'axios'
import ClassNameCarousel from './classNameCarousel.jsx'
import WeaponNameCarousel from './weapNameCarousel.jsx'

class ClassSelect extends React.Component{
    constructor(props) {
        super(props)

        this.state= {
            class: null,
            weapon: null,
        }

        this.classes = [];
        this.weapons = [];
        this.current = 0
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
        this.getStarterClasses();
        this.getStarterWeapons();
    }

    postChoice() {
        console.log(this.props)
        axios.post('classSelected', {
            name: this.props.user,
            class: this.state.class.id,
            weapon: this.state.weapon.id
        })
        .then(function(response) {
            console.log(response)
        })
    }

    render() {
        return(
            <div className="char-modal">
                    <div className="class-header">
                        CHOOSE YOUR CLASS
                    </div>
                    <div id="class-names">
                    { this.state.class !== null ? <ClassNameCarousel class={this.state.class} /> : 'Loading..' }
                    </div>
                    <div id="class-arrow-left" onClick={(e => {this.goLeft()})}>⮜</div>
                    <div id="image">
                        CLASS IMAGE
                    </div>
                    <div id="class-arrow-right" onClick={(e => {this.goRight()})}>⮞</div>
                <div className="weapon-header">WEAPON</div>
                <div id="weapon-name">
                { this.state.weapon !== null ? <WeaponNameCarousel weapon={this.state.weapon} /> : 'Loading..' }
                </div>
                <button id="button-accept" type="submit" onClick={(e)=>{
                    this.postChoice()
                    }}>Accept</button>
            </div>
        )
    }
}

export default ClassSelect;