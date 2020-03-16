import React from 'react'

class SimpleComponent extends React.Component {
    
    state = {mood: "happy"}
    
    handleClick = () => {
        switch(this.state.mood){
            case("happy"):
                this.setState({mood: "sad"})
                break;
            case("sad"):
            this.setState({mood: "happy"})
            break;
        }        
    }
    render() {
        return(
            <div onClick={this.handleClick}>{this.state.mood}</div>
        )
    }
}

export default SimpleComponent