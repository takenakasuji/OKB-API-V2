import React, {Component} from 'react'
import {AppBar} from 'material-ui'
import {TextField} from 'material-ui'
import {CircularProgress} from 'material-ui'
import {RaisedButton} from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import axios from 'axios'

const URL = 'http://pokeapi.co/api/v2/'

export default class Code extends Component {
    constructor() {
        super()
        this.state = {
            code: "",
            value: "",
            loading: false
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick() {
        this.setState({
            loading: true
        })
        let ep = URL + this.state.value;
        console.log(ep)
        axios.get(ep)
            .then(res => {
                const data = JSON.stringify(res.data, null , "\t")
                this.setState({
                    code: data,
                    loading: false
                })
            })
            .catch(error => {
                this.setState({
                    code: "error",
                    loading: false
                })
                //this.sending = false
                //throw error
            })
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }
    
    render() {
        let submitLabel
        let btnDisabled
        if (this.state.loading) {
            submitLabel = "Loading..."
            btnDisabled = true
        } else {
            submitLabel = "SUBMIT"
            btnDisabled = false
        }
        return (
            <MuiThemeProvider>
                <div className="code-wrapper">
                    <form className="api">
                        <a className="api-url">https://okb-api.io/</a>
                        <TextField
                            hintText="api/name"
                            onChange={this.handleChange}
                        />
                        <RaisedButton onClick={this.handleClick} label={submitLabel} primary={true} className="api-submit" disabled={btnDisabled} />
                    </form>
                    <div className="code-section">
                        <pre className="code">
                            <code>
                                {this.state.code}
                            </code>
                        </pre>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}