const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

async function getRequest(url) {
  const data = await (await fetch(url, {headers: headers})
    .then(res => res.json())
    .catch(e => console.log('error', e.message))
  )
  return data;
}

export const fetchEvents = () => getRequest('/events');
