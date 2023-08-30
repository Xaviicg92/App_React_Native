const createObject = (id_user: string, id_build: string, time: number) => {
  const newObject = {
    id_user: id_user,
    id_building: id_build,
    time: time,
  };

  return newObject;
};

export const updateUserBuilding = (
  id_user: string,
  id_build: string,
  time: number
) => {
  return fetch(`https://api-cities.onrender.com/api/userBuildings/time`, {
    method: "POST",
    body: JSON.stringify(createObject(id_user, id_build, time)),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
