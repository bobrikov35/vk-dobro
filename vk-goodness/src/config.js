const Hostname = 'http://localhost:3005';

const ApiUrls = {
  achievements: `${Hostname}/account/achievements`,
  cities: `${Hostname}/projects-data/cities`,
  donates: `${Hostname}/account/donations`,
  projects: `${Hostname}/projects-data`,
  single: `${Hostname}/projects-data`,
  stats: `${Hostname}/projects-data/cities`,
  stories: `${Hostname}/account/achievements/stories`,
  wall: `${Hostname}/account/achievements/wall`,
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

const startParams = new URLSearchParams(window.location.search);
const entriesParams = startParams.entries();
const vkParams = {
  start: startParams,
  allObject: Object.fromEntries(entriesParams),
};

export {
  ApiUrls,
  AppCategories,
  AppCities,
  vkParams,
};
