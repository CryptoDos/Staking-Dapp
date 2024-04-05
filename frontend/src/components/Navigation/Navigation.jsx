import React from "react";
import ConnectedAccount from "./ConnectedAccount";
import ConnectedNetwork from "./ConnectedNetwork";

// import { Container } from './styles';

function Navigation() {
  return (
    <nav>
      <ConnectedAccount /> <ConnectedNetwork />
    </nav>
  );
}

export default Navigation;
