const BASIC_API = "https://webapplicationsamuel.azurewebsites.net/api/Necklaces";

export const GetAllNecklaces = async () => {
    try {
        return await fetch(`${BASIC_API}`)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.error(err))
    } catch (err) {
        console.log(err);
    }
}

export const GetAllNecklacesById = async (id) => {
    try {
        return await fetch(`${BASIC_API}/${id}`)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.error(err))
    } catch (err) {
        console.log(err);
    }
}

export const AddToNecklaces = async (necklaces) => {
    let options = {
        method: "POST",
        body: JSON.stringify(necklaces),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASIC_API}`, options)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.error(err))
    } catch (err) {
        console.log(err);
    }
}

export const UpdateNecklaces = async (necklaces, id) => {
    let options = {
        method: "PUT",
        body: JSON.stringify(necklaces),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASIC_API}/${id}`, options)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.error(err))
    } catch (err) {
        console.log(err);
    }
}

export const DeleteNecklaces = async (id) => {
    let options = {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASIC_API}/${id}`, options)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.error(err))
    } catch (err) {
        console.log(err);
    }
}