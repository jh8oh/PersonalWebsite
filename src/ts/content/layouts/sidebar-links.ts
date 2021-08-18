import IconLink from "../../class/components/IconLink";

import iconGithub from "../components/hover-icons/icon-github";
import iconLinkedIn from "../components/hover-icons/icon-linkedin";
import iconResume from "../components/hover-icons/icon-resume";
import resumeTo from "@/assets/docs/resume.pdf";

const github = new IconLink("Github", iconGithub, "https://github.com/jh8oh");

const linkedIn = new IconLink("LinkedIn", iconLinkedIn,"https://www.linkedin.com/in/ji-ho-oh-63b590191/");

const resume = new IconLink("Resume", iconResume, resumeTo);

const sidebarLinks = [github, linkedIn, resume];

export default sidebarLinks;
