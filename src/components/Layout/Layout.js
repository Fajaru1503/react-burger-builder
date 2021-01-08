import React, { Component } from "react";
import styled from "styled-components";

import Fragment from "../../hoc/Fragment";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Fragment>
        <Toolbar opened={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerToggleHandler}
        />
        <Main>{this.props.children}</Main>
      </Fragment>
    );
  }
}

export default Layout;

const Main = styled.main`
  margin-top: 72px;
`;
