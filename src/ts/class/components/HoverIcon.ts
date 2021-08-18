export default class HoverIcon {
  icon: string;
  iconDark: string;
  iconPrimary: string;

  constructor(
      iconDark: string,
      iconPrimary: string
  ){
    this.icon = iconDark;
    this.iconDark = iconDark;
    this.iconPrimary = iconPrimary;
  }

  setIcon(isHovered: boolean) {
    this.icon = isHovered ? this.iconPrimary : this.iconDark;
  }
}
