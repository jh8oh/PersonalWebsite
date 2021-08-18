import ArchivedProject from "@/ts/class/pages/portfolio/ArchivedProject";
import IconLink from "@/ts/class/components/IconLink";
import HoverIcon from "@/ts/class/components/HoverIcon";

import githubDark from "@/assets/ico/sidebar-links/github-dark.png";
import githubPrimary from "@/assets/ico/sidebar-links/github-primary.png";

const oneStoryADay = new ArchivedProject(
  0,
  "One Story a Day",
  null,
  "Android app that replicates <a href=\"https://www.onestoryaday.ca/\"><em>One Story a Day</em></a>, a children's book website. Communicates with the website's REST API to handle the user account and uses <code>WebView</code> to display an embedded online reader or a JavaScript activity.",
  ["Android", "JWT authentication", "WordPress API"]
);

const weekPlanner = new ArchivedProject(
  1,
  "Week Planner",
  [
    new IconLink(
      "Week Planner Github Link",
      new HoverIcon(githubDark, githubPrimary),
      "https://github.com/jh8oh/week-planner"
    ),
  ],
  "A small planner that keeps track of tasks on a weekly basis. It was build in order to get myself familiar with the more complicated Android dependencies.",
  ["Android", "Room", "Dagger2", "Data Binding"]
);

const yearFacts = new ArchivedProject(
  2,
  "Year Facts",
  [
    new IconLink(
      "Year Facts Github Link",
      new HoverIcon(githubDark, githubPrimary),
      "https://github.com/jh8oh/year-facts"
    ),
  ],
  'Uses the <a href="http://numbersapi.com/#random/year">Numbers API</a> to grab interesting facts about years. Built in order to get more familiar with calling APIs from Android.',
  ["Android", "Retrofit", "Koin", "View Binding"]
);

const personalWebsiteV1 = new ArchivedProject(
  3,
  "Personal Website V1",
  [
    new IconLink(
      "Personal Website V1 Github Link",
      new HoverIcon(githubDark, githubPrimary),
      "https://github.com/jh8oh/jh8oh.github.io"
    ),
  ],
  "First version of my personal website. It was designed to advertise myself once I complete my undergraduate and to serve as a starting point into web development.",
  ["Vue", "Vue Router", "TypeScript", "SCSS"]
);

const cppChess = new ArchivedProject(
  4,
  "C++ Chess",
  [
    new IconLink(
      "C++ Chess Github Link",
      new HoverIcon(githubDark, githubPrimary),
      "https://github.com/jh8oh/cpp-chess"
    ),
  ],
  'University final project for CS246 to create a working chess game in C++. Implements the latest of chess moves such as <a href="https://i.redd.it/s4iusw5wlvh71.jpg">En-croissant</a>.',
  ["C++", "Linux Terminal"]
);

const colorPicker = new ArchivedProject(
  5,
  "Colour Picker",
  [
    new IconLink(
      "Color Picker Github Link",
      new HoverIcon(githubDark, githubPrimary),
      "https://github.com/jh8oh/colorpicker"
    ),
  ],
  "A colour picker module for Android. Small dialog view that contains rows of coloured circles which allows for quick selection of colours. Was hosted on Bintray until its deprecration.",
  ["Android", "Bintray"]
);

const archivedProjects = [
  oneStoryADay,
  weekPlanner,
  yearFacts,
  personalWebsiteV1,
  cppChess,
  colorPicker,
];

export default archivedProjects;
