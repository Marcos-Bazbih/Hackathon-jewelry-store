const BasicApi = "https://webapplicationsamuel.azurewebsites.net/api/Earrings";

export const GetData = async () => {
  try {
    return await fetch(BasicApi)
      .then((res) => {
        return res.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error("error", error));
  } catch (error) {
    console.error("error", error);
  }
};

export const GetDataById = async (id) => {
  try {
    return await fetch(`${BasicApi}/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("error", error));
  } catch (error) {
    console.error("error", error);
  }

  export const AddToEarring = async (earrings) => {
    let options = {
      method: "POST",
      body: JSON.stringify(earrings),
      headers: { "Content-Type": "application/json" },
    };
    try {
      return await fetch(`${BasicApi}`, options)
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
    } catch (err) {
      console.log(err);
    }
  };

  export const UpdateEarring = async (earrings, id) => {
    let options = {
      method: "PUT",
      body: JSON.stringify(earrings),
      headers: { "Content-Type": "application/json" },
    };
    try {
      return await fetch(`${BasicApi}/${id}`, options)
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
    } catch (err) {
      console.log(err);
    }
  };

  export const DeleteEarrings = async (id) => {
    let options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    try {
      return await fetch(`${BasicApi}/${id}`, options)
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
    } catch (err) {
      console.log(err);
    }
  };
};
