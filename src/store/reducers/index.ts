const initialState = {
    categories: [],
    products: [{
        id: 1,
        name: "Macbook",
        brand: "Apple",
        price: "1200$",
        gallery: [
            "https://avatars.mds.yandex.net/get-mpic/4343059/img_id2105869270063691023.jpeg/orig",
            "https://www.apple.com/newsroom/images/product/mac/standard/Apple-MacBook-Pro-M2-Pro-and-M2-Max-hero-230117.jpg.news_app_ed.jpg",
        ]
    },
    {
        id: 2,
        name: "Macbook",
        brand: "Apple",
        price: "1200$",
        gallery: [
            "https://avatars.mds.yandex.net/get-mpic/4343059/img_id2105869270063691023.jpeg/orig",
            "https://www.apple.com/newsroom/images/product/mac/standard/Apple-MacBook-Pro-M2-Pro-and-M2-Max-hero-230117.jpg.news_app_ed.jpg",
        ]
    },
    {
        id: 3,
        name: "Macbook",
        brand: "Apple",
        price: "1200$",
        gallery: [
            "https://avatars.mds.yandex.net/get-mpic/4343059/img_id2105869270063691023.jpeg/orig",
            "https://www.apple.com/newsroom/images/product/mac/standard/Apple-MacBook-Pro-M2-Pro-and-M2-Max-hero-230117.jpg.news_app_ed.jpg",
        ]
    },
    {
        id: 4,
        name: "Macbook",
        brand: "Apple",
        price: "1200$",
        gallery: [
            "https://avatars.mds.yandex.net/get-mpic/4343059/img_id2105869270063691023.jpeg/orig",
            "https://www.apple.com/newsroom/images/product/mac/standard/Apple-MacBook-Pro-M2-Pro-and-M2-Max-hero-230117.jpg.news_app_ed.jpg",
        ]
    },
    {
        id: 5,
        name: "Macbook",
        brand: "Apple",
        price: "1200$",
        gallery: [
            "https://avatars.mds.yandex.net/get-mpic/4343059/img_id2105869270063691023.jpeg/orig",
            "https://www.apple.com/newsroom/images/product/mac/standard/Apple-MacBook-Pro-M2-Pro-and-M2-Max-hero-230117.jpg.news_app_ed.jpg",
        ]
    },
    {
        id: 6,
        name: "Macbook",
        brand: "Apple",
        price: "1200$",
        gallery: [
            "https://avatars.mds.yandex.net/get-mpic/4343059/img_id2105869270063691023.jpeg/orig",
            "https://www.apple.com/newsroom/images/product/mac/standard/Apple-MacBook-Pro-M2-Pro-and-M2-Max-hero-230117.jpg.news_app_ed.jpg",
        ]
    }],
    cart: [],
}

interface IAction {
    type: string;
    payload: any;
}

const reducer = (state = initialState, action: IAction) => { 
    switch(action.type) {
        case "SET_CATEGORIES":
            return {...state, categories: action.payload}
        case "SET_PRODUCTS":
            return {...state, products: action.payload}
        case "ADD_PRODUCT_TO_CART":
            return {...state, cart: [...state.cart, action.payload]}
        case "UPDATE_CART":
            return {...state, cart: action.payload}
        default: 
            return state
    }
}

export default reducer;