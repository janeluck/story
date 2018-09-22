/**
 * Created by jane on 30/07/2018.
 */
import React, {Component} from 'react';


import InputButtonPanel from '../src/components/InputButtonPanel';


export  class InputButtonPanelStory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }
    }
    componentDidMount(){
        this.input.focus()
    }

    onPanelChange = (value) => {
        this.setState({
            value
        })
    }

    onChange = (e) => {
        const value = e.target.value
        this.setState({
            value
        })
    }

    render() {
        return <div>
            <input ref= {input => this.input = input} type="text" value={this.state.value} onChange={this.onChange}/>
            <InputButtonPanel onChange={this.onPanelChange}/>
        </div>
    }

}
