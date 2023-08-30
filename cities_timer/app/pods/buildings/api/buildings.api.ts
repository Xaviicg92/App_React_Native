export const getBuildings = (id: string) => {
  return fetch(`https://api-cities.onrender.com/api/buildings`, {
    method: "POST",
    body: JSON.stringify({ id: id }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
};
