import { ADD_PRODUCT_STARTED, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE } from './types'
import uuid from 'uuid'

const addProduct = (name, price) => {
    return dispatch => {
        dispatch(addProductStarted())

        // Perform actions here then: .then() => dispatch(addProductSuccess()) and .catch() => dispatch(addProductFailure())
        fetch(`http://localhost:9000/api/${name}`).then(res => {
            const { img } = res.json()
            const id = uuid.v4()
            dispatch(addProductSuccess(name,price,img,id))
        }).catch(err => {
            dispatch(addProductFailure(err))
        })
    }
}

const addProductStarted = () => {
    return {
        type: ADD_PRODUCT_STARTED
    }
}

const addProductSuccess = (name,price,img,id) => {
    return {
        type: ADD_PRODUCT_SUCCESS,
        payload: {
            name,
            price,
            img,
            id
        }
    }
}

const addProductFailure= (err) => {
    return {
        type: ADD_PRODUCT_FAILURE,
        payload: {
            ...err
        }

    }
}

export default addProduct