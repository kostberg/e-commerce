import { ADD_PRODUCT_STARTED, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE } from '../actions/types'

const initialState = {
    products: [
        {
            name: 'Friends t-shirt',
            price: '50',
            img: 'https://static.bershka.net/4/photos2/2019/I/0/1/p/7337/058/250/7337058250_1_1_3.jpg',
            id: 1
        },
        {
            name: 'Computer',
            price: '50',
            img: 'https://cdn.def-shop.com/cdn-cgi/image/w=530,q=95,f=auto/images/product_images/picture1300x1725_images/619532_0.jpg',
            id: 2
        },
        {
            name: 'IPhone',
            price: '50',
            img: 'https://cdn.def-shop.com/cdn-cgi/image/w=530,q=95,f=auto/images/product_images/picture1300x1725_images/619532_0.jpg',
            id: 3
        }
    ],
    loading: false,
    error: null
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_STARTED:
            return {
                ...state,
                loading: true
            };
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                products: [...state.products, action.payload]
            };
        case ADD_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error ? action.payload.error : "error"
            };
        default:
            return state;
    }
}

export default productsReducer