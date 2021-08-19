import HoverIcon from "./HoverIcon";

export default class IconLink {
  title: string;
  hoverIcon: HoverIcon;
  to: string;

  constructor(
    title: string,
    hoverIcon: HoverIcon,
    to: string
  ) {
    this.title = title;
    this.hoverIcon = hoverIcon
    this.to = to;
  }
}
