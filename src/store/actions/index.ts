export const setCategories= (value: any) => {
    return {
        type: 'SET_CATEGORIES',
        payload: value
    }
}

export const setProducts = (value: any) => {
    return {
        type: 'SET_PRODUCTS',
        payload: value
    }
}

export const addProductToCart = (value: any) => {
    return {
        type: 'ADD_PRODUCT_TO_CART',
        payload: value
    }
}

export const updateCart = (value: any) => {
    return {
        type: 'UPDATE_CART',
        payload: value
    }
}