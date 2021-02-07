import React, { Component } from 'react'

export default class counter extends Component {
    state = {
        selectNumber: 1
    }

    getValue = (event) => {

        this.setState({ selectNumber: event.target.value });
    }

    increment = () => {
        let value = this.state.selectNumber
        this.props.increment(value * 1)
    }
    decrement = () => {
        let value = this.state.selectNumber
        this.props.decrement(value * 1)
     }
    incrementAsync = () => {
        let value = this.state.selectNumber
       this.props.incrementAsync(value * 1,1000)
    }
    render() {
        return (

            <div>
                <label htmlFor="">Count:{this.props.count}. current num of people{this.props.person.length}</label>
                <br />
                <select onChange={(e) => this.getValue(e)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button>oddadd</button>
                <button onClick={this.incrementAsync}>asyncadd</button>
            </div>
        )
    }
}
