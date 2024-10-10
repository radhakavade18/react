import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor() {
        super()
        //console.log("parent constructor")
    }

    componentDidMount() {
        //console.log("parent componentDidMount")
    }

    render() {
        //console.log("parent render")
        return (
            <div>
                <h1>About</h1>
                <p>React web series</p>
                {/* <User name="Radha" location="Satara" /> */}
                <UserClass name="Olav" location="Disney land" />
            </div>
        )
    }

}

export default About;

/*
    the life cycle of the component
    - when only on child rendering in parent
        - parent constructor
        - parent render
        - child constructor
        - child render
        - child componentDidMount
        - parent componentDidMount

    - when 2 or multiple childs render in parent
        - parent constructor
        - parent render

        - child1 constructor
        - child1 render

        - child2 constructor
        - child2 render

        - child1 componentDidMount
        - child2 componentDidMount
        - parent componentDidMount
*/