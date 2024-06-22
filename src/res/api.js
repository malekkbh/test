const baseURL = 'https://tira-server.onrender.com';

export const getAllUsers = async () => {
  const url = '/getAllUsers';
  return await fetchApi(url);
};

const fetchApi = async (url, method, body) => {
  const fullUrl = baseURL + url;

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  if (body) {
    const bodyStr = JSON.stringify(body);
    params.body = bodyStr;
  }
  params.method = method || 'GET';

  return await fetch(fullUrl, params)
    .then(res => res.json())
    .catch(e => console.log('fetch error: ', e));
};
