import React from "react"

// class based component
export default class UserClass extends React.Component {
    constructor(props) {
        super(props);

        // state is reserved keyword - its a big object contains all state variables with initial values
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "default location",
                avatar_url: ""
            }
        }

        this.timer = setInterval(() => {
            console.log("hello")
        }, 1000)
        // console.log("child constructor")
    }

    async componentDidMount() {
        // console.log("child componentDidMount")
        const data = await fetch("https://api.github.com/users/radhakavade18");
        const json = await data.json();

        console.log(json);

        this.setState({
            userInfo: json
        })
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        const { name, location, avatar_url } = this.state.userInfo;

        // console.log("child render")
        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location:  {location}</h3>
                <h3>Contact: @radha-kavade</h3>
            </div>
        )
    }
}