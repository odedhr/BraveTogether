import { createAsyncAction } from "typesafe-actions";
export const registerUser = createAsyncAction(
  "REGISTER_USER_STARTED",
  "REGISTER_USER_SUCCESS",
  "REGISTER_USER_FAILED"
)<any, any, any>();
export type UserActionTypes = typeof registerUser;