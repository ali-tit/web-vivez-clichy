import { AppState } from "../../../redux.config/AppState";

export const hasSession = (appState: AppState) => appState.auth.token !== ''
