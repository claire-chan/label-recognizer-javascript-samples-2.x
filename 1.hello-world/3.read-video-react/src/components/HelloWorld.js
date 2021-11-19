import './HelloWorld.css';
import reactLogo from '../logo.svg';
import DLR from "../dlr";
import React from 'react';
import LabelRecognizer from './LabelRecognizer';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.refDivMessage = React.createRef();
        this.state = {
            libLoaded: false,
            resultValue: "",
            resultItems: [],
            bShowRecognizer: false
        };
    }
    async componentDidMount() {
        try {
            await DLR.loadWasm();
            this.setState(state => {
                state.libLoaded = true;
                return state;
            }, () => {
                this.showRecognizer();
            });
        } catch (ex) {
            alert(ex.message);
            throw ex;
        }
    }

    scrollToBottom = () => {
        this.refDivMessage.current.scrollTop = this.refDivMessage.current.scrollHeight;
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    appendMessage = (message) => {
        switch (message.type) {
            case "result":
                this.setState(prevState => {
                    prevState.resultValue = message.format + ": " + message.text;
                    prevState.resultItems = prevState.resultItems.concat([{ type: message.format + ": ", text: message.text }]);
                    return prevState;
                });
                break;
            case "error":
                this.setState(prevState => {
                    prevState.resultValue = message.msg;
                    prevState.resultItems = prevState.resultItems.concat([{ type: "Error: ", text: message.msg }]);
                    return prevState;
                });
                break;
            default:
                break;
        }
    }
    showRecognizer = () => {
        this.setState({
            bShowRecognizer: true
        });
    }
    render() {
        return (
            <div className="helloWorld">
                <h1>Hello World for React<img src={reactLogo} className="App-logo" alt="logo" /></h1>
                <input type="text" value={this.state.resultValue} readOnly={true} className="latest-result" placeholder="The Last Read Label" />
                <div id="UIElement">
                    {!this.state.libLoaded ? (<span style={{ fontSize: "x-large" }}>Loading Library...</span>) : ""}
                    {this.state.bShowRecognizer ? (<LabelRecognizer appendMessage={this.appendMessage}></LabelRecognizer>) : ""}
                </div>
                <div>
                    <span style={{ float: "left" }}>All Results:</span><br />
                    <div id="results" ref={this.refDivMessage}>
                        <ul>
                            {this.state.resultItems.map((item, index) => (
                                <li key={100000 + index} ><span>{item.type}</span><span className="resultText">{item.text}</span>                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default HelloWorld;