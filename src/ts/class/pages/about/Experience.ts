export default class Experience {
  id: number;
  employer: string;
  position: string;
  website: string;
  dates: string;
  description: string;

  constructor(
    id: number,
    employer: string,
    position: string,
    website: string,
    dates: string,
    description: string
  ) {
    this.id = id;
    this.employer = employer;
    this.position = position;
    this.website = website;
    this.dates = dates;
    this.description = description;
  }
}
