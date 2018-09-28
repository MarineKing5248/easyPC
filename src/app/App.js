import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from "../axios";
import Profile from "./Profile";
import OtherProfile from "./Other-profile";
import Uploader from "./Uploader";
import SearchbarSw from "./Searchbar-sitewide";
import Builder from "./builder.js";
import Friends from "./Friends";
import Online from "./Online";
// import OnlineSitewide from "./Online-sitewide";
import Chat from "./Chat";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { bioInputFieldCheck: false };
    this.makeUploaderVisible = this.makeUploaderVisible.bind(this);
    this.submit = this.submit.bind(this);
    this.exitModal = this.exitModal.bind(this);
    this.toggleBioInputField = this.toggleBioInputField.bind(this);
    this.postBio = this.postBio.bind(this);
  }

  async componentDidMount() {
    const { data } = await axios.get("/user-data");
    this.setState(data);

    //close modal on Esc key
    window.addEventListener("keydown", e => {
      if (e.keyCode == 27) {
        this.setState({ modalVisible: false });
      }
    });
  }

  makeUploaderVisible() {
    this.setState({ modalVisible: true });
  }

  exitModal() {
    this.setState({ modalVisible: false });
  }

  handleModalClick(e) {
    e.stopPropagation();
  }
  //////////////////////////////////
  toggleBioInputField() {
    console.log("button pressed!");
    this.setState({ bioInputFieldCheck: !this.state.bioInputFieldCheck });
  }

  async postBio(e) {
    if (e.keyCode == 13 || e.button == 0) {
      let textOnClick = document.getElementById("textArea").value;
      let bioObject = { user_bio: e.target.value || textOnClick };

      const { data } = await axios.post("/post-bio", bioObject);
      console.log("AXIOS POSTBIO RESPONSE (destructured as data):", data);
      this.setState(data);
      this.setState({ bioInputFieldCheck: false });
    }
  }

  /////////////////////////////////
  updateAvatarInstantly(argument) {
    this.setState({ modalVisible: false });
    this.setState(argument);
  }

  submit(e) {
    const file = e.target.files[0];
    console.log("FILE variable:", file);
    const fd = new FormData();
    fd.append("file", file);

    axios.post("/avatar-uploads", fd).then(res => {
      console.log("RESPONSE IN POST/UPLOAD IMAGE ajax", res.data.avatar);
      this.updateAvatarInstantly(res.data);
    });
  }

  render() {
    if (!this.state.firstname) {
      return (
        <div className="errorTemplate">
          <img src="./loading.gif" />
        </div>
      );
    }
    return (
      <BrowserRouter>
        <div className="appContainer">
          <header className="appHeader">
            <nav>
              <img id="logo" src="/homepagelogo.png" alt="easyPC" />
              <SearchbarSw handleModalClick={this.handleModalClick} />
              <div className="headerLinks">
                <Link className="sitewideUser" to="/chat">
                  <img className="sitewideProfilePic" src="/help.png" />
                  <span className="tooltip"> Help </span>
                </Link>
                <Link className="sitewideUser" to="/builder">
                  <span className="tooltip"> My builder </span>
                  <img className="sitewideProfilePic" src={"/computer.png"} />
                </Link>
                <Link className="sitewideUser" to="/">
                  {this.state.firstname}
                  <img
                    className="sitewideProfilePic"
                    src={this.state.avatar || "/default_image.png"}
                  />
                  <span className="tooltip"> Profile </span>
                </Link>
                <a href="/sign-out">Sign Out</a>
              </div>
            </nav>
          </header>
          <section className="appBody">
            {/* builder */}
            <Route exact path="/builder" component={Builder} />
            {/* CHAT COMPONENT*/}
            <Route exact path="/chat" component={Chat} />
            <div className="centerHolder">
              {/* PROFILE PIC */}
              <Route
                exact
                path="/"
                render={props => (
                  <Profile
                    rootState={this.state}
                    clickHandler={this.makeUploaderVisible}
                    toggleBioInputField={this.toggleBioInputField}
                    postBio={this.postBio}
                    routeProps={props}
                  />
                )}
              />
              <Route
                exact
                path="/user/:otherUserId"
                render={props => (
                  <OtherProfile rootId={this.state.id} routeProps={props} />
                )}
              />
              {/* builder */}
              <Route exact path="/friends" component={Friends} />

              {/* ONLINE USERS*/}
              <Route exact path="/online" component={Online} />

              {/* UPLOADER(HIDDEN)*/}
              {this.state.modalVisible && (
                <Uploader
                  handleModalClick={this.handleModalClick}
                  submit={this.submit}
                  exitModal={this.exitModal}
                />
              )}
            </div>
          </section>
        </div>
      </BrowserRouter>
    );
  }
}
