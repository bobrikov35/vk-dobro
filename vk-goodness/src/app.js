const Hostname = 'http://localhost:3005/';
// const Hostname = 'https://vk-dobro-1.herokuapp.com/';

const CONFIG = {
  apiUrls: {
    host: Hostname,
    cities: `${Hostname}projects-data/cities/`,
    dobrothon: `${Hostname}account/fundraising/`,
    donation: `${Hostname}account/donations/`,
    points: `${Hostname}account/achievements/`,
    projects: `${Hostname}projects-data/`,
    project: `${Hostname}projects-data/`,
    singleDobrothon: `${Hostname}account/fundraising/fundraising_id=`,
    stats: `${Hostname}projects-data/cities/`,
    stories: `${Hostname}account/achievements/stories/`,
    wall: `${Hostname}account/achievements/wall/`,
  },
};

const DATA = {
  controllers: {
    account: [
      { id: 1, name: 'dobrothons', title: 'Доброфоны' },
      { id: 2, name: 'donationsGrouped', title: 'Участие в проектах' },
      { id: 3, name: 'donations', title: 'История пожертвований' },
    ],
  },
  categories: [
    { id: 0, name: 'all', title: 'Всем' },
    { id: 1, name: 'kids', title: 'Детям' },
    { id: 2, name: 'adults', title: 'Взрослым' },
    { id: 3, name: 'elderly', title: 'Пожилым' },
    { id: 4, name: 'animals', title: 'Животным' },
    { id: 5, name: 'nature', title: 'Природе' },
  ],
  cities: [
    { id: 0, name: 'any', title: 'В любом городе' },
  ],
  donationTabs: [
    { id: 1, value: 5 },
    { id: 2, value: 10 },
    { id: 3, value: 25 },
    { id: 4, value: 50 },
    { id: 5, value: 100 },
    { id: 6, value: 250 },
    { id: 7, value: 500 },
    { id: 8, value: 1000 },
    { id: 9, value: 2500 },
    { id: 10, value: 5000 },
  ],
  rewards: [
    { id: 1, image: '/icons/medal-bronze.png', target: 10 },
    { id: 2, image: '/icons/medal-silver.png', target: 20 },
    { id: 3, image: '/icons/medal-gold.png', target: 40 },
  ],
};

const startParams = new URLSearchParams(window.location.search);
const entriesParams = startParams.entries();
const fragment = window.location.hash.split('/');
const VK_PARAMS = {
  app: startParams,
  all: Object.fromEntries(entriesParams),
  fragment: {
    name: fragment[1],
    id: fragment[2],
  },
};

export {
  CONFIG,
  DATA,
  VK_PARAMS,
};
