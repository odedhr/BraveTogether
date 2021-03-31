import { createAsyncAction } from "typesafe-actions";
export type RegisterResponseData = {
  error: boolean;
  message: string;
  api_user: {
    id: string;
    email: string;
    cellphone: string;
    first_name: string;
    last_name: string;
  };
  user: {
    has_committed_to_privacy: boolean;
    has_criminal_record: boolean;
    is_manager: boolean;
    user_id: number;
    image: string | null;
  };
};
export const registerUser = createAsyncAction(
  "REGISTER_USER_STARTED",
  "REGISTER_USER_SUCCESS",
  "REGISTER_USER_FAILED"
)<any, RegisterResponseData, any>();
export const convertAddressToLocationAC = createAsyncAction(
  "CONVERT_ADDRESS_STARTED",
  "CONVERT_ADDRESS_SUCCESS",
  "CONVERT_ADDRESS_FAILED"
)<any, any, any>();
export type UserActionTypes = typeof registerUser | typeof convertAddressToLocationAC;
