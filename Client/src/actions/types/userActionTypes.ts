import { createAsyncAction } from "typesafe-actions";
export type RegisterResponseData = {
  error: boolean;
  message: string;
  user: {
    id: string;
    email: string;
    cellphone: string;
    first_name: string;
    last_name: string;
    has_committed_to_privacy: boolean;
    has_criminal_record: boolean;
    is_manager: boolean;
    user_id: number;
    image: string | null;
  };
};
export type Token = {
  token: string;
};
export const registerUser = createAsyncAction(
  "REGISTER_USER_STARTED",
  "REGISTER_USER_SUCCESS",
  "REGISTER_USER_FAILED"
)<any, RegisterResponseData, any>();
export const tokenRequestAction = createAsyncAction(
  "LOGIN_USER_STARTED",
  "LOGIN_USER_SUCCESS",
  "LOGIN_USER_FAILED"
)<any, Token, any>();
export const loginUserAction = createAsyncAction(
  "LOGIN_USER_STARTED",
  "LOGIN_USER_SUCCESS",
  "LOGIN_USER_FAILED"
)<any, any, any>();
export const convertAddressToLocationThenCreateEventAC = createAsyncAction(
  "CONVERT_ADDRESS_STARTED",
  "CONVERT_ADDRESS_SUCCESS",
  "CONVERT_ADDRESS_FAILED"
)<any, any, any>();
export const createHeroRequsetAction = createAsyncAction(
  "CREATE_HERO_STARTED",
  "CREATE_HERO_SUCCESS",
  "CREATE_HERO_FAILED"
)<any, any, any>();
export type UserActionTypes =
  | typeof registerUser
  | typeof convertAddressToLocationThenCreateEventAC;
