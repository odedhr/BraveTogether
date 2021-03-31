import axios, { Method, AxiosRequestConfig, CancelTokenSource, ResponseType } from "axios";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { PayloadAC } from "typesafe-actions";

import { Store } from "../store/storeTypes";
export interface ApiRequest {
  method?: Method;
  url: string | ((state: Store) => string);
  data?: object | ((state: Store) => object);
  headers?: object;
  params?: any;
  responseType?: ResponseType;
}

export interface ApiActionLogic {
  onStarted: (dispatch: ThunkDispatch<Store, any, Action>, state: Store, data: any) => void;
  onSuccess: (data: any, dispatch: ThunkDispatch<Store, any, Action>, state: Store) => void;
  onFailed: (error: any, dispatch: ThunkDispatch<Store, any, Action>, state: Store) => void;
}

export interface InterceptorFunc {
  (state: Store): boolean;
}

export interface ApiActionConfig {
  request: ApiRequest;
  logic: ApiActionLogic;
  interceptor?: InterceptorFunc;
}

const pendingRequests = new Map<string, CancelTokenSource>();

export default function apiAction(conf: ApiActionConfig) {
  const { request, logic, interceptor } = conf;
  return async function (dispatch: ThunkDispatch<Store, any, Action>, getState: () => Store) {
    let tokenSource: CancelTokenSource | undefined;
    const state = getState();
    let quieryString = generateQuieryString(request.params);
    const params = request.params;
    request.params = undefined;
    request.url = typeof request.url === "function" ? request.url(state) : request.url;
    const requestId = request.url;
    tokenSource = axios.CancelToken.source();
    pendingRequests.get(requestId)?.cancel();
    request.url += quieryString;
    request.data = typeof request.data === "function" ? request.data(state) : request.data;
    request.method = request.method || "GET";
    const contentTypeHeader = { "Content-Type": "application/json" };
    const token = getState().user.token ? getState().user.token : "";
    request.headers = { ...contentTypeHeader, ...request.headers };

    if (interceptor && interceptor(state)) return;

    logic.onStarted(dispatch, state, request.data);
    try {
      pendingRequests.set(requestId, tokenSource);

      const response = await axios.request({
        ...request,
        cancelToken: tokenSource?.token,
      } as AxiosRequestConfig);
      logic.onSuccess(response.data, dispatch, state);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("request was canceled", request);
      } else {
        logic.onFailed(error, dispatch, state);
      }
    } finally {
      tokenSource?.cancel();
    }
  };
}

const generateQuieryString = (params: any | undefined): string => {
  let quieryString = "";
  if (params) {
    quieryString = "?";
    Object.keys(params).forEach((key, index) => {
      if (params[key]) {
        if (Array.isArray(params[key])) {
          params[key].forEach((param: string | number, i: number) => {
            quieryString += `${key}=${param}`;
            if (i !== params[key].length - 1) {
              quieryString += "&";
            }
          });
        } else if (params[key] instanceof Date) {
          quieryString += `${key}=${(params[key] as Date).toDateString()}`;
        } else {
          quieryString += `${key}=${params[key]}`;
        }
        quieryString += "&";
      }
    });
  }
  if (quieryString.charAt(quieryString.length - 1) === "&") {
    quieryString = quieryString.slice(0, quieryString.length - 1);
  }
  return quieryString;
};

export interface ApiActionSimpleConfig {
  request: ApiRequest;
  actions: [any, PayloadAC<any, any>, any];
  interceptor?: InterceptorFunc;
}

export const apiActionSimple = (conf: ApiActionSimpleConfig) => {
  const { request, actions, interceptor } = conf;

  return apiAction({
    request,
    logic: {
      onStarted: (dispatch, state, data = null) => {
        return dispatch(actions[0](data));
      },
      onSuccess: (data, dispatch) => {
        return dispatch(actions[1](data));
      },
      onFailed: (error, dispatch) => {
        return dispatch(actions[2](error));
      },
    },
    interceptor,
  });
};
