import { applyMiddleware, createStore } from 'redux'
import { AppState } from './AppState'
import { epicsMiddleware, rootEpics } from './epicsMiddleware.redux'
import { reduxReducer } from './reducers.redux'
import { composeWithDevTools } from 'redux-devtools-extension';


export const reduxStore = () => {

    const store = createStore<AppState, any, any, any>(
        reduxReducer,
        composeWithDevTools(
            applyMiddleware(epicsMiddleware)
        )
    )
    epicsMiddleware.run(rootEpics)

    return store
}
