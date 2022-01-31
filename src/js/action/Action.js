import { ADD_PROD, DELETE_PROD } from "../actiontype/Type";

export const addProd = (payload) => {
  return {
    type: ADD_PROD,
    payload,
  };
};

export const deleteProd = (payload) => {
  return {
    type: DELETE_PROD,
    payload,
  };
};
