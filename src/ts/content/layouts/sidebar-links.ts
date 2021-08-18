import IconLink from "../../class/components/IconLink";
import HoverIcon from "@/ts/class/components/HoverIcon";

import githubDark from "@/assets/ico/sidebar-links/github-dark.png";
import githubPrimary from "@/assets/ico/sidebar-links/github-primary.png";
import linkedInDark from "@/assets/ico/sidebar-links/linkedin-dark.png";
import linkedInPrimary from "@/assets/ico/sidebar-links/linkedin-primary.png";
import resumeDark from "@/assets/ico/sidebar-links/resume-dark.png";
import resumePrimary from "@/assets/ico/sidebar-links/resume-primary.png";
import resumeTo from "@/assets/docs/resume.pdf";

const github = new IconLink(
  "Github",
  new HoverIcon(githubDark, githubPrimary),
  "https://github.com/jh8oh"
);

const linkedIn = new IconLink(
  "LinkedIn",
  new HoverIcon(linkedInDark, linkedInPrimary),
  "https://www.linkedin.com/in/ji-ho-oh-63b590191/"
);

const resume = new IconLink("Resume", new HoverIcon(resumeDark, resumePrimary), resumeTo);

const sidebarLinks = [github, linkedIn, resume];

export default sidebarLinks;
