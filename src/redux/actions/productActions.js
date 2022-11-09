import fakeStoreApi from "../../apis/fakeStoreApi";
import { ActionTypes } from "../constants/action-types"


//this line of code block refactored below
//  export const fetchProducts =  () =>{

//     return async function (dispatch,getState){
//         const response = await fakeStoreApi.get("/products");
//         console.log("fetchProducts",response);
//         dispatch({type:ActionTypes.FETCH_PRODUCTS,payload:response.data});
//     }
//  }

 export const fetchProducts = () => async (dispatch) => {
    const response = await fakeStoreApi.get("/products");
    console.log("fetchProducts", response);
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};


export const fetchProduct = (id) => async (dispatch) => {
    const response = await fakeStoreApi.get(`/products/${id}`);
    console.log("fetchProducts", response);
    dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
};

 export const setProducts = (products) =>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
 }

 export const selectedProducts = (product) =>{
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
 }

 export const removeSelectedProduct = () =>{
    return {
        type:ActionTypes.REMOVE_SELECTED_PRODUCT
    }
 }
