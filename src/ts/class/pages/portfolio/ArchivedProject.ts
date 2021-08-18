import IconLink from "../../components/IconLink";

export default class ArchivedProject {
  id: number;
  title: string;
  links: IconLink[] | null;
  description: string;
  tags: string[];

  constructor(
    id: number,
    title: string,
    links: IconLink[] | null,
    description: string,
    tags: string[]
  ) {
    this.id = id;
    this.title = title;
    this.links = links;
    this.description = description;
    this.tags = tags;
  }
}
