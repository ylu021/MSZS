const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

async function getRequest(url, params) {
  if(params) {
    url += `/${params}`;
  }
  const data = await (await fetch(url, {headers})
    .then(res => res.json())
    .catch(e => console.log('error', e.message))
  )
  return data;
}

async function postRequest(url, body) {
  const data = await (await fetch(url, {
      headers,
      method: 'POST',
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .catch(e => console.log('error', e.message))
  )
  return data;
}
export const fetchEvents = () => getRequest('/api/events');
export const fetchEvent = (eventId) => getRequest('/api/events', eventId);

export const registerUser = (user) => postRequest('/api/auth/register', user);
export const loginUser = (user) => postRequest('/api/auth/login', user);
