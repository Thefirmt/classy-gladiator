import React from 'react'

const Class = (props) => {
    return(
        <div>
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
            <button type="submit" onClick={(e)=>{props.select(2, 2)}} />
        </div>
    )
}

export default Class;