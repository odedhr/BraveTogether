import { createAsyncAction } from "typesafe-actions";
export const registerUser = createAsyncAction(
  "REGISTER_USER_STARTED",
  "REGISTER_USER_SUCCESS",
  "REGISTER_USER_FAILED"
)<any, any, any>();
export const convertAddressToLocationAC = createAsyncAction(
  "CONVERT_ADDRESS_STARTED",
  "CONVERT_ADDRESS_SUCCESS",
  "CONVERT_ADDRESS_FAILED"
)<any, any, any>();
export type UserActionTypes = typeof registerUser;
