const createObject = (user: string, pass: string) => {
  const newObject = {
    user: user,
    pass: pass,
  };

  return newObject;
};

export const login = (
  user: string,
  pass: string
): Promise<UserApi | undefined> => {
  return fetch(`https://api-cities.onrender.com/api/users`, {
    method: "POST",
    body: JSON.stringify(createObject(user, pass)),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data === "undefined") {
        return undefined;
      } else {
        console.log(data);
        return data;
      }
    });
};
