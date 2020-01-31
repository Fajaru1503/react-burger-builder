import React from "react";
import styled from "styled-components";

import Aux from "../../hoc/Aux";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = props => (
  <Aux>
    <Toolbar />
    <Main>{props.children}</Main>
  </Aux>
);

export default Layout;

const Main = styled.main`
  margin-top: 72px;
`;
