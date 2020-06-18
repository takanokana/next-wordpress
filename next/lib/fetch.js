
export const fetchData = (url) => {
  console.log('ok?')
  return fetch(url, {
    mode: 'cors',
    credentials: 'include',
  })
    .then((res) => {
      console.log(res)
      return res.json()
    }).catch((error) => {
      return false;
    });
};
