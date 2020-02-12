import React from "react";
import * as Icons from 'react-icons/fa';

const profiles = [
  {
    network: "LinkedIn",
    username: "jwmcgettigan",
    url: "https://www.linkedin.com/in/jwmcgettigan/",
    icon: {
      type: "FaLinkedin",
      color: "#2867B2",
    }
  },
  {
    network: "GitHub",
    username: "jwmcgettigan",
    url: "https://github.com/jwmcgettigan",
    icon: {
      type: "FaGithubSquare",
      color: "#FFFFFF",
    }
  },
  {
    network: "Stack Overflow",
    username: "jwmcgettigan",
    url: "https://stackoverflow.com/users/11342791/jwmcgettigan",
    icon: {
      type: "FaStackOverflow",
      color: "#F48024",
    }
  },
  {
    network: "freeCodeCamp",
    username: "jwmcgettigan",
    url: "https://www.freecodecamp.org/jwmcgettigan",
    icon: {
      type: "FaFreeCodeCamp",
      color: "#FFFFFF",
    }
  },
  {
    network: "DEV Community",
    username: "jwmcgettigan",
    url: "https://dev.to/jwmcgettigan",
    icon: {
      type: "FaDev",
      color: "#FFFFFF",
    }
  }
]

const Link = ({url, text, icon}) => {
  const Icon = Icons[icon.type]
  return (
    <a href={url}>
      <span title={text}>
        <Icon color={icon.color} size={40}/>
      </span>
    </a>
  )
}

const SocialLinks = () => (
  <div id="social-links">
    {profiles.map((p) => <Link url={p.url} text={p.network} icon={p.icon}/>)}
  </div>
)

export default SocialLinks