const fields = {
  dateCreated: 'created_at',
  dateModified: 'modified_at',
  dobrothonId: '_id',
  project: 'project_id',
  user: 'vk_user',
  userId: 'vk_user_id',
  userList: 'users_donated',
};

function parseProject(data) {
  return {
    city: data.city,
    dateCreated: new Date(data.createdAt),
    html: data.html,
    id: parseInt(data.id, 10),
    image: data.image,
    path: data.path,
    sum: parseInt(data.sum, 10),
    target: parseInt(data.target, 10),
    title: data.title,
    urgent: data.urgent,
  };
}

function parseDobrothon(data) {
  return {
    amount: parseInt(data.amount, 10),
    author: parseInt(data[fields.user][fields.userId], 10),
    dateCreated: new Date(data[fields.dateCreated]),
    dateModified: new Date(data[fields.dateModified]),
    fragment: data.fragment,
    id: data[fields.dobrothonId],
    project: parseProject(data.project),
    status: data.status,
    target: parseInt(data.target, 10),
    userList: data[fields.userList],
  };
}

function parseDobrothonList(data) {
  const list = [...data];
  list.reverse();
  const result = [];
  for (let i = 0; i < list.length; i++) {
    result.push(parseDobrothon(list[i]));
  }
  return result;
}

const parseDonationList = (data) => {
  const list = [...data];
  list.reverse();
  const donations = [];
  const donationsGrouped = [];
  let lastItem = -1;
  for (let i = 0; i < list.length; i++) {
    donations.push({
      amount: list[i].amount,
      dateCreated: new Date(list[i][fields.dateCreated]),
      project: parseProject(list[i][fields.project]),
    });
    if (!list[i].flag) {
      lastItem += 1;
      donationsGrouped.push({
        amount: list[i].amount,
        dateCreated: new Date(list[i][fields.dateCreated]),
        project: parseProject(list[i][fields.project]),
      });
      for (let j = i + 1; j < list.length; j++) {
        if (list[i][fields.project].id === list[j][fields.project].id) {
          list[j].flag = true;
          donationsGrouped[lastItem].amount += list[j].amount;
        }
      }
    }
  }
  return { donations, donationsGrouped };
};

function parseProjectList(data) {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    result.push(parseProject(data[i]));
  }
  return result;
}

export {
  parseDobrothon,
  parseDobrothonList,
  parseDonationList,
  parseProject,
  parseProjectList,
};
