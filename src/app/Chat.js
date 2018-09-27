import React from "react";
import { connect } from "react-redux";
import axios from "../axios";
import { Link } from "react-router-dom";
import { getSocket } from "../socket";
import { formatDate } from "../dateFormat";
import OnlineSitewide from "./Online-sitewide";
// import EmojiPicker from "./EmojiPicker";

class Chat extends React.Component {
  constructor() {
    super();
    this.postChatMessage = this.postChatMessage.bind(this);
    // this.onEmojiClick = this.handleEmojiClic.bind(this);
  }

  componentDidMount() {
    getSocket().emit("getChatMessages");
  }

  componentDidUpdate() {
    if (!this.chatElem) {
      return;
    } else {
      this.chatElem.scrollTop =
        this.chatElem.scrollHeight - this.chatElem.clientHeight;
    }
  }

  postChatMessage(e) {
    if (e.keyCode == 13 || e.button == 0) {
      e.preventDefault(); //enter new line behavour stops
      getSocket().emit("sendChatMessage", this.textVal.value);
      this.textVal.value = "";
    }
  }

  // handleEmojiClick = (code, emoji) => {
  //   let emojiPic = jsemoji.replace_colons(":${emoji.name}:");
  //   this.setState({
  //     inputText: this.state.inputText + emojiPic
  //   });
  // };

  render() {
    let chatMessageElements = this.props.chatMessages.map(message => {
      if (message.mainUser) {
        return (
          <div className="singleChat" key={message.id}>
            <div className="main_speech-bubble">
              <p>{message.messages}</p>
              <p className="main_msgDate">{formatDate(message.created_at)}</p>
            </div>
          </div>
        );
      } else {
        return (
          <div className="singleChat" key={message.id}>
            <div className="avatarNameHold">
              <img className="helproompic" src={message.avatar} />
              <p>
                {message.firstname} {message.lastname}
              </p>
            </div>
            <div className="bubbleWrapper">
              <div className="speech-bubble">
                <p>{message.messages}</p>
                <p className="msgDate">{formatDate(message.created_at)}</p>
              </div>
            </div>
          </div>
        );
      }
    });

    //MAIN RENDER() RETURN
    return (
      <section className="chatContainer">
        <OnlineSitewide />
        <h1>Need help?</h1>
        <h2>You can ask questions here and our experts will help u online:)</h2>
        <div className="chatWrapper">
          <div ref={chatElem => (this.chatElem = chatElem)} id="chatField">
            <div className="chatResponseField">{chatMessageElements}</div>
          </div>
          <div className="chatInput">
            <textarea
              onKeyDown={this.postChatMessage}
              id="chatTextArea"
              ref={textVal => (this.textVal = textVal)}
              maxLength="300"
              placeholder="Type done the problem so our Expers can help you:D"
            />
            <div className="emoji">Emoji</div>
            <div className="chatEnter" onClick={this.postChatMessage}>
              <div className="separatorChatPost" />
              Send
              <div className="enterChatMessage" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    chatMessages: store.chatMessages
  };
};

export default connect(mapStateToProps)(Chat);
