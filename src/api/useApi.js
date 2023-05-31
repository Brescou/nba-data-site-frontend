import { useState } from "react"

const API_URL = "http://localhost:5000/v1"

const apiRequest = async (
    endpoint,
    method = "GET",
    body = null,
    token = null,
    callBack = null,
) => {
    const options = {
        method,
        headers: {
            "Content-Type": "application/json",
        },
    }
    if (token) {
        options.headers.Authorization = `JWT ${token}`
    }

    if (body) {
        options.body = JSON.stringify(body)
    }
    const response = await fetch(`${API_URL}/${endpoint}`, options)

    if (response.status === 200) {
        const data = await response.json()
        console.log(data)
        if (callBack) {
            callBack(data)
        }
        return data
    }
    throw new Error("Something went wrong")
}

export const useApi = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const callApi = async (endpoint, method, body) => {
        setError(null)
        setIsLoading(true)
        try {
            const data = await apiRequest(endpoint, method, body)
            return data
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }
    return { isLoading, error, callApi }
}
