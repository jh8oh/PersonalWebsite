import Experience from "../../class/about/Experience";

const dcCanada = new Experience(
  0,
  "DC Canada Education Publishing",
  "Web/Android Developer",
  "https://www.dc-canada.ca/",
  "Jan. - Apr. 2020",
  "Worked on maintaining the existing <a href=\"https://onestoryaday.ca\">One Story a Day website</a> and developing an app for it<br /><strong>Web Developer</strong><ul><li>Maintained and developed new contents and features on a WordPress powered website</li><li>Integrated MotionPay into the payment system for the Chinese domain which allowed customers to pay by scanning a QR code in Alipay/WeChat pay</ul><strong>Android Developer</strong><ul><li>Solo development and design of an Android eBook reader titled 'One Story a Day'</li><li>Connects with the LMS on the website to sync up users between the site and the app</li></ul>"
);

const innovapost = new Experience(
  1,
  "Innovapost",
  "Android/Innovation Developer",
  "https://innovapost.com/",
  "Sept. - Dec. 2020",
  "Split between working on the Android-platform team and the 'Innovation Garage'.<br /><strong>Android Developer</strong><ul><li>Fixed production bugs and implemented new features for the Canada Post application</li><li>Worked in a agile-scrum environment</li></ul><strong>'Innovation Garage' Developer</strong><ul><li>Researched the possibility of implementing progressive registration and OAuth 2.0 on the app</li><li>Part of a pilot team to eliminate the need for ring scanners and instead use wrist-mounted PDTs which automatically (de)activate their scanner based on the gravimeter.</li></ul>"
);

const theScore = new Experience(
  2,
  "theScore Inc",
  "Android Developer",
  "https://www.thescore.com/",
  "May - Aug. 2021",
  "Part of theScore Media app for Android team. <br /><ul><li>Worked on migrating the application from Kotlin Synthetics to View Binding along with fixing bugs and mitigating tech debt</li><li>Discovered a new architecture that used the MVVM design pattern, which recycled the same fragment for different screen and populated them with unique ViewHolders using Adapters</li><li>Researched the  methods of obtaining views past Kotlin Synthetics and how they might integrate into the unique architecture of the application</li></ul>"
)

const experiences = [theScore, innovapost, dcCanada];

export default experiences;
