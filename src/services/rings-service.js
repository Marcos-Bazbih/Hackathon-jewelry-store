const BASIC_API = "https://webapplicationsamuel.azurewebsites.net/api/Rings";

export const GetAllRings = async () => {
    try {
        return await fetch(`${BASIC_API}`)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.error(err))
    } catch (err) {
        console.log(err);
    }
}

export const GetAllRingsById = async (id) => {
    try {
        return await fetch(`${BASIC_API}/${id}`)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.error(err))
    } catch (err) {
        console.log(err);
    }
}

export const AddToRings = async (rings) => {
    let options = {
        method: "POST",
        body: JSON.stringify(rings),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASIC_API}`,options)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.error(err))
    } catch (err) {
        console.log(err);
    }
}

export const UpdateRings = async (rings, id) => {
    let options = {
        method: "PUT",
        body: JSON.stringify(rings),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASIC_API}/${id}`,options)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.error(err))
    } catch (err) {
        console.log(err);
    }
}

export const DeleteRings = async (id) => {
    let options = {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASIC_API}/${id}`,options)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.error(err))
    } catch (err) {
        console.log(err);
    }
}