export async function callApi(method, url, data) {
  const res = await fetch( url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return res.json();
}