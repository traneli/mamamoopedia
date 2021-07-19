import React from "react";
import { Link, useHistory } from "react-router-dom";
import * as utils from "../utils.js"
import PageTemplate from '../PageTemplate';

function Discography() {
  const images = utils.importAll(require.context('../assets', false, /\.(png|jp?g|svg)/));
  let history = useHistory();

  function handleBackButton() {
    history.push("/");
  }

  return (
    <div>
      <PageTemplate>
        <p>DISCOGRAPHY TBA</p>
      </PageTemplate>
    </div>
  );
}

export default Discography;