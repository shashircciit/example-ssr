import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users');

  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/current_user');

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res
  });
};

export const FETCH_ADMINS = 'fetch_admins';
export const fetchAdmins = () => async (dispatch, getState, api) => {
  const res = await api.get('/admins');

  dispatch({
    type: FETCH_ADMINS,
    payload: res
  });
};


export const FETCH_LOGIN = 'fetch_login';
export const fetchlogin = (user) => async dispatch => {
  console.log("11 reached to fetchlogin",JSON.stringify(user))
  try {
   let response = await axios.post('https://node.indianic.com:4069/api/adminLogin', user);
   let {data}=response;
   console.log(data)
   if(data.status == 1){
     await localStorage.setItem("access_token", data.access_token);
     console.log(JSON.stringify(localStorage.getItem("access_token")));
     let payload = {
         access_token : data.access_token,
         _id : data.data._id,
         firstname:data.data.firstname,
         lastname:data.data.lastname,
          profilePic : data.data.photo
     }
     dispatch({ type: FETCH_LOGIN, payload });
     console.log(JSON.stringify(data.access_token));
   }
   } catch (error) {
     throw error;
   }
 };
