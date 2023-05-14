import axios from "axios"

export const login = async (email: string, password: string) => {
    try {
        const response = await axios.post(`https://diplom-e-commerce-server.onrender.com/api/auth/login`, {
            email,
            password
        })
        console.log(response.data.user);
        localStorage.setItem("email", response.data.user.email)
        localStorage.setItem("id", response.data.user._id)
        return response.data.user;
    } catch (error) {
        console.log(error)
        return false
    }
}

export const addProduct = async (title: string, brand: string, category: string, price: string, description: string, gallery?: string[]) => {
    try {
        const response = await axios.post(`https://diplom-e-commerce-server.onrender.com/api/auth/add`, {
            title,
            brand,
            category,
            price,
            description,
            gallery
        })
        return response;
    } catch (error) {
        console.log(error)
        return false
    }
}

export const deleteOrder = async (id: string) => {
    try {
        const response = await axios.delete(`https://diplom-e-commerce-server.onrender.com/api/auth/deleteOrder/${id}`)
        return response;
    } catch (error) {
        console.log(error)
        return false
    }
}

export const updateOrder = async (id: string, changes: any) => {
    try {
        const response = await axios.put(`https://diplom-e-commerce-server.onrender.com/api/auth/updateOrder/${id}`, { changes })
        return response;
    } catch (error) {
        console.log(error)
        return false
    }
}

export const updateProduct = async (id: string, changes: any) => {
    try {
        const response = await axios.put(`https://diplom-e-commerce-server.onrender.com/api/auth/updateProduct/${id}`, { changes })
        return response;
    } catch (error) {
        console.log(error)
        return false
    }
}

export const deleteProduct = async (id: string) => {
    try {
        const response = await axios.delete(`https://diplom-e-commerce-server.onrender.com/api/auth/deleteProduct/${id}`)
        return response;
    } catch (error) {
        console.log(error)
        return false
    }
}