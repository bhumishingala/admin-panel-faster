import { BASE_URL } from "../../fetch/Base_url";
import * as ActionType from '../ActionType';


export const getproducts = () => (dispatch) => {

    dispatch(loadingProducts());

    setTimeout(function () {
        try {
            fetch(BASE_URL + "products")
                .then(response => {
                    if (response.ok) {
                        return response;
                    } else {
                        var error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        throw error;
                    }
                },
                    error => {
                        var errmess = new Error(error.message);
                        throw errmess;
                    })
                .then((response) => response.json())
                .then((data) => dispatch({ type: ActionType.GET_PRODUCTS, payload: data }))
                .catch((error) => dispatch(errorproducts(error.message)));
        } catch (error) {
            dispatch(errorproducts(error.message));
        }
    }, 2000)
}

export const addproducts = (data) => (dispatch) => {
    try {
        fetch(BASE_URL + "products", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
                error => {
                    var errmess = new Error(error.message);
                    throw errmess;
                })
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionType.ADD_PRODUCTS, payload: data }))
            .catch((error) => dispatch(errorproducts(error.message)))
    } catch (error) {
        dispatch(errorproducts(error.message));
    }
}

export const deleteproducts = (id) => (dispatch) => {
    try {
        fetch(BASE_URL + 'products/' + id, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
                error => {
                    var errmess = new Error(error.message);
                    throw errmess;
                })
            .then((response) => response.json())
            .then(dispatch({ type: ActionType.DELETE_PRODUCTS, payload: id }))
            .catch((error) => dispatch(errorproducts(error.message)));
    } catch (error) {
        dispatch(errorproducts(error.message));
    }
}

export const updateproducts = (data) => (dispatch) => {
    try {
        fetch(BASE_URL + "products/" + data.id, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
                error => {
                    var errmess = new Error(error.message);
                    throw errmess;
                })
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionType.UPDATE_PRODUCTS, payload: data }))
            .catch((error) => dispatch(errorproducts(error.message)))
    } catch (error) {
        dispatch(errorproducts(error.message));
    }
}

export const loadingProducts = () => (dispatch) => {
    dispatch({ type: ActionType.LOADING_PRODUCTS })
}

export const errorproducts = (error) => (dispatch) => {
    dispatch({ type: ActionType.ERROR_PRODUCTS, payload: error })
}