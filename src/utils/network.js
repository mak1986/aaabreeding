import { ENDPOINT } from "../constants"

export const getReport = async (criteria) => {
    const res = await fetch(ENDPOINT+'/roi', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(criteria)
    })

    return res.json()
}