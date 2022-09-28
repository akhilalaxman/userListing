import { createSlice } from "@reduxjs/toolkit";

import _ from "lodash";
import {
  addUserData,
  deleteUserData,
  getUsers,
  updateUserData,
} from "../../../Api";
import { toast } from "react-toastify";

//get user details
export const getUserDetails = (state) => async (dispatch) => {
  toast.configure();
  dispatch(setLoading(true));
  const response = await getUsers();
  response && dispatch(setLoading(false));

  return response.status
    ? dispatch(getDetails(response.data)) &&
        toast.success(response.message, {
          position: "bottom-center",
          autoClose: 2000,
        })
    : toast.error(response.message, {
        position: "bottom-center",
        autoClose: 2000,
      });
};

export const deleteUser = (id) => async (dispatch, getState) => {
  toast.configure();
  const details = getState().userDetails.details;
  const response = await deleteUserData(id);
  return response.status
    ? dispatch(getDetails(response.data)) &&
        toast.success(response.message, {
          position: "bottom-center",
          autoClose: 2000,
        })
    : toast.error(response.message, {
        position: "bottom-center",
        autoClose: 2000,
      });
};

export const updateUser = (data) => async (dispatch, getState) => {
  const details = getState().userDetails.details;
  dispatch(setLoading(true));
  const response = await updateUserData(data);
  response && dispatch(setLoading(false));
  return response.status
    ? dispatch(updateList(response.data)) &&
        dispatch(getDetails(response.data)) &&
        toast.success(response.message, {
          position: "bottom-center",
          autoClose: 2000,
        })
    : toast.error(response.message, {
        position: "bottom-center",
        autoClose: 2000,
      });
};

export const AddNewUser = (data) => async (dispatch, getState) => {
  toast.configure();

  dispatch(setLoading(true));
  data.id = Date.now();
  const response = await addUserData(data);
  response && dispatch(setLoading(false));
  return response.status
    ? dispatch(getDetails(response.data)) &&
        toast.success(response.message, {
          position: "bottom-center",
          autoClose: 2000,
        })
    : toast.error(response.message, {
        position: "bottom-center",
        autoClose: 2000,
      });
};

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState: { isLoading: false, details: [], updateList: [], addList: [] },
  reducers: {
    getDetails: (state, action) => {
      state.details = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    addList: (state, action) => {
      state.addList = action.payload;
    },
    updateList: (state, action) => {
      state.updateList = action.payload;
    },
    setHistory: (state, action) => {
      state.history = action.payload;
    },
  },
});

export const {
  getDetails,
  setLoading,
  updateList,
  setHistory,
} = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
