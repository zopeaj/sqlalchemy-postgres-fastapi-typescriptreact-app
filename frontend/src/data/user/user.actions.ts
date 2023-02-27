import React from "react";
import { registerUserAsync, loginUserAsync, getUserProfileAsync } from "./service/userService";
import { AppThunk } from "../store";

export const actionCreateUser = (): AppThunk => (dispatch: React.Dispatch<any>, getState: any) => {

}

export const actionUpdateUser = (): AppThunk => (dispatch: React.Dispatch<any>, getState: any) => {

}

export const actionDeleteUser = (): AppThunk => (dispatch: React.Dispatch<any>, getState: any) => {

}

export const actionGetUserProfile = (): AppThunk => (dispatch: React.Dispatch<any>, getState: any) => {

}

export const actionLogin = (): AppThunk => (dispatch: React.Dispatch<any>, getState: any) => {

}

export const actionCheckLoggedIn = (): AppThunk => (dispatch: React.Dispatch<any>, getState: any) => {

}

export const actionRemoveLogin = (): AppThunk => (dispatch: React.Dispatch<any>, getState: any) => {

}

export const actionLogOut = (): AppThunk => (dispatch: React.Dispatch<any>, getState: any) => {

}

export const actionUserLogout = (): AppThunk => (dispatch: React.Dispatch<any>, getState: any) => {

}

export const actionRouteLogOut = (): AppThunk => (dispatch: React.Dispatch<any>, getState: any) => {
  //if router.currentRoute.path !== '/login' router.push('/login')
}

export const actionCheckApiError = (): AppThunk => (dispatch: React.Dispatch<any>, getState: any) => {
  //if payload.response!.status === 401 await dispatchLogout(context);
}

export const actionRouteLoggedIn = (): AppThunk => (dispatch: React.Dispatch<any>, getState: any) => {
  // if router.currentRoute.path === '/login' || router.currentRoute.path === '/' router.push('/main');
}

export const actionPasswordRecovery = (): AppThunk => (dispatch: React.Dispatch<any>, getState: any) => {

}

export const actionResetPassword = (): AppThunk => (dispatch: React.Dispatch<any>, getState: any) => {

}
