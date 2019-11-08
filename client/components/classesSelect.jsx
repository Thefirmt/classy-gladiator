import React from 'react'
import axios from 'axios'
import ClassCarousel from './classCarousel.jsx'

class ClassSelect extends React.Component{
    constructor(props) {
        super(props)

        this.state= {
            class: null,
            weapon: null
        }

        this.classes = [];
        this.weapons = [];
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

    componentDidMount() {
        this.getStarterClasses();
        this.getStarterWeapons();
    }

    render() {
        return(
            <div id="char-modal">
                <div id="class-header">
                    <div id="choose-your-class">
                        CHOOSE YOUR CLASS
                    </div>
                    <div id="class-names">
                    { this.state.class !== null ? <ClassCarousel class={this.state.class} /> : 'Loading..' }
                    </div>
                </div>
                <div id="class-carousel">
                    <div id="class-arrow-left"></div>
                    <div id="image">
                        CLASS IMAGE
                    </div>
                    <div id="class-arrow-right"></div>
                </div>
                <div id="weapon-name">
                    WEAPON NAME
                </div>
                <button type="submit" onClick={(e)=>{props.select(this.state.class, this.state.weapon)}} />
            </div>
        )
    }
}

export default ClassSelect;