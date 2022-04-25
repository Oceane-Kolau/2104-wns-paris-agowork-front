import React from "react";
import { FacebookSharp, Twitter, LinkedIn, YouTube } from "@mui/icons-material";
import { Social } from "../../assets/styles/sidebar/sidebar";

const SocialMedia = (): JSX.Element => {
  return (
    <Social>
      <a href="/">
        <FacebookSharp />
      </a>
      <a href="/">
        <Twitter />
      </a>
      <a href="/">
        <LinkedIn />
      </a>
      <a href="/">
        <YouTube />
      </a>
    </Social>
  );
};

export default SocialMedia;
