import React from 'react';
import PropTypes from 'prop-types';
import SendMessageForm from './SendMessageForm';

const ChatWindow = (props) => {
    return (
        <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{props.username}</div>

            <ul className="message-list">
                {props.messages.map((message, index) => (
                    <li
                        key={index}
                        className={
                            message.username === props.username ? 'message sender' : 'message recipient'
                        }
                    >
                        <p>{`${message.username}: ${message.text}`}</p>
                    </li>
                ))}
            </ul>
            <SendMessageForm username={props.username} sendMessage={props.sendMessage}/>
        </div>);
};

ChatWindow.propTypes = {
    username: PropTypes.string.isRequired,
    messages: PropTypes.array,
    sendMessage: PropTypes.func.isRequired
};

export default ChatWindow;