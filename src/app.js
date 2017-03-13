import React, {Component} from 'react'
import ReactDom from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Header from './header.js'
import Code from './code.js'
import Counter from './counter.js'
import Footer from './footer.js'

window.React = React // For dubug
injectTapEventPlugin()

export default class APP extends React.Component {
    render () {
        return (
            <div>
                <Header />
                <main>
                    <div className="main-visual">
                        <h1 className="main-message">OKB-API-V2</h1>
                        <h2 className="sub-message">The RESTful OKB API</h2>
                    </div>
                </main>
                <Code />
                <Footer />
            </div>
        )
    }
}

ReactDom.render(
    <APP />,
    document.getElementById('app')
);