import React from 'react'
import PropTypes from 'prop-types';
import ChatWindow from "./ChatWindow";

class SendMessageForm extends React.Component {
    state = {
        value: ''
    };
    onChange = (event) => {
        this.setState({value: event.target.value});
    };
    isDisabled = () => (this.state.value === '');
    onSubmit = (event) => {
        event.preventDefault();
        this.props.sendMessage({username: this.props.username, text: this.state.value});
        this.setState({value: ''});
    };

    render() {
        return (
            <div>
                <form className="input-group" onSubmit={this.onSubmit}>
                    <input type="text" className="form-control" placeholder="Enter your message..."
                           value={this.state.value} onChange={this.onChange}/>
                    <div className="input-group-append">
                        <button className="btn submit-button" disabled={this.isDisabled()}>
                            SEND
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
SendMessageForm.propTypes = {
    username: PropTypes.string.isRequired,
    sendMessage: PropTypes.func.isRequired
};

export default SendMessageForm;