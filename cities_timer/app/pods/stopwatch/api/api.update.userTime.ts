const createObject = (id: string, time: number) => {
  const newObject = {
    id: id,
    time: time,
  };

  return newObject;
};

export const updateTime = (id: string, time: number) => {
  return fetch(`https://api-cities.onrender.com/api/users/time`, {
    method: "POST",
    body: JSON.stringify(createObject(id, time)),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
