const domain = 'https://trivia-zee4.onrender.com';

export const getAllUsers = async () => {
  const route = '/getAllUsers';
  return await appFetch(route, 'GET', null);
};

const appFetch = async (route, method, body) => {
  const url = domain + route;

  const params = {
    method: method || 'GET',
  };

  if (body) {
    params.body = body;
  }

  return await fetch(url, params)
    .then(res => res.json())
    .then(resJson => resJson)
    .catch(e => console.log('fetch error: ', e));
};
