import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from "../axios";
import Profile from "./Profile";
import Uploader from "./Uploader";
import OtherProfile from "./Other-profile";
import SearchbarSw from "./Searchbar-sitewide";
import Builder from "./builder.js";

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
                <Link className="sitewideUser" to="/builder">
                  My builder:
                  <img
                    className="sitewideProfilePic"
                    src={"/headericon/headericon.png"}
                  />
                </Link>
                <Link className="sitewideUser" to="/">
                  {this.state.firstname}
                  <img
                    className="sitewideProfilePic"
                    src={this.state.avatar || "/default_image.png"}
                  />
                </Link>
                <a href="/sign-out">Sign Out</a>
              </div>
            </nav>
          </header>
          <section className="appBody">
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
              {/* builder */}
              <Route exact path="/builder" component={Builder} />
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
          <footer>
            <div className="footerCenterHolder">
              <p>
                © 2018 easyPC Studio | All Rights Reserved | +49 176 8083 7305 |
                liuxiao5248@gmail.com | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
              {"    "}
              <Link to="/contact" style={{ color: "white" }}>
                Contact us!
              </Link>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}
