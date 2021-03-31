import initialState from "../store/initState";
import { Store, User } from "../store/storeTypes";
import { createReducer } from "typesafe-actions";
import { registerUser } from "../actions/types/userActionTypes";
// export default function usersReducer(state: User = initialState.user, action: any): User {
//   switch (action.type) {
//     case registerUser.success:
//       return action.payload;
//     default: {
//       return state;
//     }
//   }
// }
const reducer = createReducer<User, any>(initialState.user).handleAction(
  registerUser.success,
  (state: Store, action: any) => {
    return action.payload;
  }
);
export default reducer;
