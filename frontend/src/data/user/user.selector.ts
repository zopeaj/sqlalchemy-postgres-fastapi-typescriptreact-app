import { RootState } from "../store";
import { useAppSelector } from "../hooks";

const selectUserToken = (state: RootState) => state.data.user.token
export const readUserToken = useAppSelector(selectUserToken);

const selectUserName = (state: RootState) => state.data.user.name;
export const readUserName = useAppSelector(selectUserName);

const selectUserId = (state: RootState) => state.data.user.userId;
export const readUserId = useAppSelector(selectUserId);
