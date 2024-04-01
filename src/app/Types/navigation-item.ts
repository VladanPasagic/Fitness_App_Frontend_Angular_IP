export class NavigationItem {
  link: string;
  text: string;

  /**
   *
   */
  constructor(text: string, link: string) {
    this.link = link;
    this.text = text;
  }
}
