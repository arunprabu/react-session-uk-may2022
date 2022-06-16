export async function callApi(method, url, data) {
  const res = await fetch( url, {
    method,
    headers: {
      Accept: 'application/json'
    },
    body: JSON.stringify(data)
  })
  return res.json();
}