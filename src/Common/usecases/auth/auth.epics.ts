import { ofType } from 'redux-observable'
import { map, switchMap } from 'rxjs/internal/operators';
import { SessionService } from '../../adapters/services/sessionService'
import { GET_TOKEN, SAVE_TOKEN, saveToken, getTokenSucceeded } from './auth.actions';

export const authEpic = (action$: any, store: any, { sessionService }: { sessionService: SessionService }) =>
    action$.pipe(
        ofType(SAVE_TOKEN),
        switchMap<{ payload: string }, any>(
            action => sessionService.saveSession(action.payload)
                .pipe(
                    map(() => saveToken(action.payload))
                )
        )
    )

export const getTokenEpic = (action$: any, store: any, { sessionService }: { sessionService: SessionService }) =>
    action$.pipe(
        ofType(GET_TOKEN),
        switchMap<{}, any>(
            () => {
                return sessionService.getSession()
                    .pipe(
                        map((token: string) => getTokenSucceeded(token))
                    )
            }
        )
    )
