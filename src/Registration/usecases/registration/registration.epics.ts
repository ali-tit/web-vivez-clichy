import { ofType } from 'redux-observable'
import { of } from 'rxjs/internal/observable/of'
import { map, switchMap } from 'rxjs/internal/operators';
import { catchError } from 'rxjs/operators'
import { REGISTER, registrationFailed, registrationSucceeded } from './registration.actions';
import { RegistrationRemoteService } from "../../adapters/services/registrationRemoteService";

export const registrationEpic = (action$: any, store: any, { registrationRemoteService }: { registrationRemoteService: RegistrationRemoteService }) =>
    action$.pipe(
        ofType(REGISTER),
        switchMap<{ payload: string }, any>(
            action => registrationRemoteService.register(action.payload)
                .pipe(
                    map(() => {
                        return registrationSucceeded()
                        
                    }), catchError(error => of(registrationFailed(error)))
                )
        )
    )
