// Funcion para inscribir usuarios
const createObject = (user: string, pass: string) => {
  const newObject = {
    name: user,
    pass: pass,
  };

  return newObject;
};

export const signin = (
  user: string,
  pass: string
): Promise<UserApi | undefined> => {
  return fetch(`https://api-cities.onrender.com/api/newuser`, {
    method: "POST",
    body: JSON.stringify(createObject(user, pass)),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data === "undefined") {
        console.log("usuario incorrecto");
        return undefined;
      } else {
        console.log(data);
        return data;
      }
    })
    .catch((err) => err);
};
