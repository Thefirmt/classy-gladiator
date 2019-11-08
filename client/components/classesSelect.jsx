import React from 'react'
import Axios from 'axios'

class ClassSelect extends React.Component (props){
    constructor(props) {
        super(props)

        this.state= {
            class: 1,
            weapon: 1
        }

        this.classes = [];
        this.weapons = []
    }

    getStarterClasses() {
        Axios.get('/starterClasses')
        .then(function(classes) {
            this.classes = classes.data
        })
    }


    getStarterWeapons() {
        Axios.get('/starterWeapons')
        .then(function(weapons) {
            this.weapons = weapons.data
        })
    }

    render() {
        
        <div id="char-modal">
            <div id="class-header">
                <div id="choose-your-class">
                    CHOOSE YOUR CLASS
                </div>
                <div id="class-names">
                    <h1>class name</h1>
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
                Weapon Name
            </div>
            <button type="submit" onClick={(e)=>{props.select(this.state.class, this.state.weapon)}} />
        </div>
    }
}

export default Class;