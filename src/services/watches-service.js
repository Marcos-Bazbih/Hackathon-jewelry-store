const BASIC_API = "https://webapplicationsamuel.azurewebsites.net/api/Watches";

export const GetAllWatches = async () => {
    try {
        return await fetch(`${BASIC_API}`)
            .then(res => res.json())
            .catch(err => console.error(err))
    } catch (err) {
        console.log(err);
    }
}

export const GetAllWatchesById = async (id) => {
    try {
        return await fetch(`${BASIC_API}/${id}`)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.error(err))
    } catch (err) {
        console.log(err);
    }
}

export const AddToWatches = async (watches) => {
    let options = {
        method: "POST",
        body: JSON.stringify(watches),
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

export const UpdateWatches = async (watches, id) => {
    let options = {
        method: "PUT",
        body: JSON.stringify(watches),
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

export const DeleteWatches = async (id) => {
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