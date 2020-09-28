// const Hostname = 'http://localhost:3005';
const Hostname = 'https://vk-dobro-1.herokuapp.com';

const ApiUrls = {
  achievements: `${Hostname}/account/achievements/`,
  cities: `${Hostname}/projects-data/cities/`,
  donates: `${Hostname}/account/donations/`,
  projects: `${Hostname}/projects-data/`,
  single: `${Hostname}/projects-data/`,
  stats: `${Hostname}/projects-data/cities/`,
  stories: `${Hostname}/account/achievements/stories/`,
  wall: `${Hostname}/account/achievements/wall/`,
};

const AppCategories = [
  { id: 0, name: 'all', title: 'Всем' },
  { id: 1, name: 'kids', title: 'Детям' },
  { id: 2, name: 'adults', title: 'Взрослым' },
  { id: 3, name: 'elderly', title: 'Пожилым' },
  { id: 4, name: 'animals', title: 'Животным' },
  { id: 5, name: 'nature', title: 'Природе' },
];

const AppCities = [
  { id: 0, name: 'any', title: 'В любом городе' },
];

const AppDonatesTabs = [
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
];

const startParams = new URLSearchParams(window.location.search);
const entriesParams = startParams.entries();
const vkMiniApp = {
  id: 7585697,
  secureKey: 'y2pep1CF81uBWcGLg6Qq',
  serviceAccessKey: 'e4b2c379e4b2c379e4b2c37969e4c17cd8ee4b2e4b2c379bbe566d568a29921a0ca4653',
  params: {
    start: startParams,
    allObject: Object.fromEntries(entriesParams),
  },
};

export {
  ApiUrls,
  AppCategories,
  AppCities,
  AppDonatesTabs,
  vkMiniApp,
};
