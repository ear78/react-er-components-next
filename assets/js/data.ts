import snowGhosts from '@/assets/img/snowghosts.jpg';
import greyBuilding from '@/assets/img/building-resize.jpg';
// import about from '../img/ABOUT.jpg'
import echoTower from '@/assets/img/echoTower.webp';
import jail from '@/assets/img/jail.webp';
import stairway from '@/assets/img/stairway.webp';
import stripes from '@/assets/img/stripes.webp';
import chairs from '@/assets/img/chairs.webp';
import echoTowerSml from '@/assets/img/echoTower-sml.jpg';
// import jailSml from '../img/jail-sml.jpg'
// import stairwaySml from '../img/stairway-sml.jpg'
import stripesSml from '@/assets/img/stripes-sml.jpg';
import chairsSml from '@/assets/img/chairs-sml.jpg';
import portfolio11 from '@/assets/img/UserMale.svg';
import portfolio12 from '@/assets/img/femaleUser.svg';
import PageBanner from '@/assets/img/pagebanner-screenshot.webp';
import HoverPods from '@/assets/img/hoverpods-screenshot.webp';
import TeamBuilding from '@/assets/img/teambuilding-screenshot.webp';
import HappyDots from '@/assets/img/happydots-screenshot.webp';
import Dropper from '@/assets/img/dropper-screenshot.webp';
import EasySlider from '@/assets/img/easyslider-screenshot.webp';
import pinkBuildingWebp from '@/assets/img/pinkBuilding.webp';
import pinkBuildingWebpSm from '@/assets/img/pinkBuilding-sm.webp';
import pinkBuildingJpg from '@/assets/img/pinkBuilding.jpg';

export const bannerImgWebp = pinkBuildingWebp;
export const bannerImgWebpSm = pinkBuildingWebpSm;
export const bannerImgJpg = pinkBuildingJpg;

export const homeData = {
  desc: `Please use the navigation to preview and try out these components I built from the ground up with React.js. 
  Actually, everything on the site was designed and built by me from the ground up with the exception of the Container and form components used from Mui. 
  The purpose of this project is to show my skills as a Front End UI Developer, and also to show the process of building and design UI/UX components from the ground up. 
  Technologies used are React, Typescript, Redux, Jest, React Transition Group, Css Modules, Sass, deployed to Netlify, and of course Javascript since React is all Javascript. 
  Data is all custom data I created off in the data.js section of the app to be able to pull into components via imports and where images are imported and handled by webpack. 
  Currently a work in progress as I continue to build out the project with more components and features. Really built for portfolio demonstration purposes only. The current customizable components are`,
  components:
    'HappyDots, Banner, HoverPods, TeamBuilding, Dropper, EasySlider, Dashboard',
};

export const pageSectionData = [
  {
    id: 0,
    title: 'Page Banner Component',
    component: 'Page Banner',
    description: `is an easy to use good looking banner to help you get
    started out of the box. It allows you to easily update the Pre title text,
    Title text, Sub title text, button color, text alignment, and overlay.`,
    img: PageBanner.src,
    page: '/page-banner',
  },
  {
    id: 1,
    title: 'Hover Pods Component',
    component: 'Hover Pods',
    description: `is a creative way to make clickable links with a simple hover animation.
    The changeable props are background hover color, text color, squared format,
    open tab on click.`,
    img: HoverPods.src,
    page: '/hover-pods',
  },
  {
    id: 2,
    title: 'Team Building Component',
    component: 'Team Building',
    description: `is simple component that can create a user/team member card
    with a simple hover animation.
    It has an alt layout prop, and you can pass an object to dynamically represent
    each card.`,
    img: TeamBuilding.src,
    page: '/team-building',
  },
  {
    id: 3,
    title: 'Happy Dots Component',
    component: 'Happy Dots',
    description: `is simple component that can create a scrollable menu
    with a simple hover animation.
    It has a ref prop, dot color prop, text color prop, and you can pass an object to
    dynamically represent each dot as well.`,
    img: HappyDots.src,
    page: '/happy-dots',
  },
  {
    id: 4,
    title: 'Dropper Component',
    component: 'Dropper',
    description: `is simple component that can create a simple dropdown
    with a simple hover and click animation.
    It takes a title prop and passes the content as children`,
    img: Dropper.src,
    page: '/dropper',
  },
  {
    id: 5,
    title: 'Easy Slider Component',
    component: 'Easy Slider',
    description: `is simple component that can create a simple image slider
    with a simple hover animation.
    It takes a title prop and passes the content as children`,
    img: EasySlider.src,
    page: '/e-slider',
  },
];

export const podData = [
  {
    id: 1,
    podBgImage: echoTowerSml.src,
    podText: 'Hello',
    podLink: 'https://www.apple.com',
  },
  {
    id: 2,
    podBgImage: chairsSml.src,
    podText: "I'm",
    podLink: 'https://www.apple.com',
  },
  {
    id: 3,
    podBgImage: greyBuilding.src,
    podText: 'A',
    podLink: 'https://www.apple.com',
  },
  {
    id: 4,
    podBgImage: stripesSml.src,
    podText: 'Hover Pod',
    podLink: 'https://www.apple.com',
  },
];

// export const happyData = [ {
//     id: 'test',
//     text: 'Market Place',
//     lineColor: '#fff',
//     dotColor: ''
//   },
//   {
//     id: 'test1',
//     text: 'Kochava Collective',
//     lineColor: '#fff',
//     dotColor: ''
//   },
//   {
//     id: 'test2',
//     text: 'Attribution',
//     lineColor: '#fff',
//     dotColor: ''
//   },
//   {
//     id: 'test3',
//     text: 'SmartLink',
//     lineColor: '#fff',
//     dotColor: ''
//   },
//   {
//     id: 'test4',
//     text: 'User Experience',
//     lineColor: '#fff',
//     dotColor: ''
//   }
// ]

// export const podData = [
//   { podBgImage: echoTowerSml,
//     podBgColor: '#000000ad',
//     podTextColor: '#fff',
//     podText: 'Hello'
//   },
//   { podBgImage: chairsSml,
//     podBgColor: '#000000ad',
//     podTextColor: '#fff',
//     podText: 'I\'m'
//   },
//   { podBgImage: '/building-resize.jpg',
//     podBgColor: '#000000ad',
//     podTextColor: '#fff',
//     podText: 'A'
//   },
//   { podBgImage: stripesSml,
//     podBgColor: '#000000ad',
//     podTextColor: '#fff',
//     podText: 'Hover Pod'
//   },
// ]

export const forms = [
  [
    {
      inputType: 'text',
      labelText: 'Background Image',
      name: 'bgImage',
    },
    {
      inputType: 'text',
      labelText: 'Banner Pre Title',
      name: 'preTitle',
    },
    {
      inputType: 'text',
      labelText: 'Cta Url',
      name: 'ctaUrl',
    },
    {
      inputType: 'text',
      labelText: 'Banner Title',
      name: 'title',
    },
    {
      inputType: 'text',
      labelText: 'Banner Sub Title',
      name: 'subTitle',
    },
    {
      inputType: 'text',
      labelText: 'Banner Button Text',
      name: 'btnText',
    },
    {
      inputType: 'color',
      labelText: 'Banner Button Color',
      name: 'btnColor',
    },
    {
      inputType: 'checkbox',
      labelText: 'Banner Overlay',
      name: 'overlay',
    },
    {
      inputType: 'checkbox',
      labelText: 'Banner Overlay Dark',
      name: 'overlayDark',
    },
    {
      inputType: 'checkbox',
      labelText: 'Banner Overlay Full',
      name: 'overlayFull',
    },
    {
      inputType: 'checkbox',
      labelText: 'Show CTA Button',
      name: 'showBtn',
    },
    {
      inputType: 'radio',
      labelText: 'Banner Alignment',
      name: 'textAlign',
    },
  ],
  [
    {
      inputType: 'color',
      labelText: 'Hover Color',
      name: 'hoverColor',
    },
    {
      inputType: 'checkbox',
      labelText: 'Squared Pods',
      name: 'isSquared',
    },
    {
      inputType: 'checkbox',
      labelText: 'Open New Tab',
      name: 'openTab',
    },
  ],
  [
    {
      inputType: 'checkbox',
      labelText: 'Alternate Layout',
      name: 'altLayout',
    },
  ],
  [
    {
      inputType: 'color',
      labelText: 'Dot Color',
      name: 'dotColor',
    },
  ],
];

export const  teamMembers = [
  {
    image: '/UserMale.svg',
    name: 'Jack Reacher',
    jobTitle: 'Professional Hitman',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com'
  },
  {
    image: '/femaleUser.svg',
    name: 'David Mattias',
    jobTitle: 'General Manager',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com'
  },
  {
    image: '/UserMale.svg',
    name: 'Elias Leonard',
    jobTitle: 'Head of Technology',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com'
  },
  {
    image: '/femaleUser.svg',
    name: 'Megan Kimberly',
    jobTitle: 'Art Director',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com'
  },
  {
    image: '/UserMale.svg',
    name: 'Johnny Reb',
    jobTitle: 'Computerist',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com'
  },
  {
    image: '/femaleUser.svg',
    name: 'Paran John',
    jobTitle: 'Senior Developer',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com'
  },
  {
    image: '/UserMale.svg',
    name: 'Elias Leonard',
    jobTitle: 'Head of Technology',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com'
  },
  {
    image: '/femaleUser.svg',
    name: 'Megan Kimberly',
    jobTitle: 'Art Director',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com'
  },
  {
    image: '/UserMale.svg',
    name: 'David Mattias',
    jobTitle: 'General Manager',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com'
  },
  {
    image: '/femaleUser.svg',
    name: 'Elias Leonard',
    jobTitle: 'Head of Technology',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com'
  }
]
