import initialState from "../store/initState";
import { Store, User } from "../store/storeTypes";
import { createReducer } from "typesafe-actions";
import {
  loginUserAction,
  RegisterResponseData,
  registerUser,
  Token,
  tokenRequestAction,
  UserActionTypes,
} from "../actions/types/userActionTypes";
// export default function usersReducer(state: User = initialState.user, action: any): User {
//   switch (action.type) {
//     case registerUser.success:
//       return action.payload;
//     default: {
//       return state;
//     }
//   }
// }
const reducer = createReducer<User, any>(initialState.user)
  .handleAction(registerUser.success, (state: Store, action: { payload: RegisterResponseData }) => {
    const { payload } = action;
    if (!payload.error) {
      const user: User = {
        CriminalBackGroundCheck: payload.user.has_criminal_record,
        email: payload.api_user.email,
        firstName: payload.api_user.first_name,
        lastName: payload.api_user.last_name,
        id: payload.api_user.id,
        phone: payload.api_user.cellphone,
        userAgreement: payload.user.has_committed_to_privacy,
        token: "",
        is_manager: payload.user.is_manager,
      };
      return user;
    }
    return state;
  })
  .handleAction(tokenRequestAction.success, (state: Store, action: { payload: Token }) => {
    const { payload } = action;
    return { ...state, token: payload.token };
  })
  .handleAction(loginUserAction.success, (state: Store, action: { payload: Token }) => {
    const { payload } = action;
    console.log(payload);
    return { ...state, ...payload };
  });
export default reducer;
