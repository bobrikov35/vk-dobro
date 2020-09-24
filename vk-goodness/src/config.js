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
  { id: 1, name: 'all', title: 'Всем' },
  { id: 2, name: 'kids', title: 'Детям' },
  { id: 3, name: 'adults', title: 'Взрослым' },
  { id: 4, name: 'elderly', title: 'Пожилым' },
  { id: 5, name: 'animals', title: 'Животным' },
  { id: 6, name: 'nature', title: 'Природе' },
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
