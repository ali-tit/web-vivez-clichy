import { ofType } from 'redux-observable'
import { of } from 'rxjs/internal/observable/of'
import { flatMap, switchMap } from 'rxjs/internal/operators';
import { catchError } from 'rxjs/operators'
import { CONFIRM, confirmationFailed, confirmationSucceeded } from './confirmation.actions';
import { RegistrationRemoteService } from "../../adapters/services/registrationRemoteService";
import { saveToken } from '../../../Common/usecases/auth/auth.actions';


export const confirmationEpic = (action$: any, store: any, { registrationRemoteService }: { registrationRemoteService: RegistrationRemoteService }) =>
    action$.pipe(
        ofType(CONFIRM),
        switchMap<{ payload: { phoneNumber: string, confirmationCode: string } }, any>(
            action => registrationRemoteService.confirmCode(action.payload.phoneNumber, action.payload.confirmationCode)
                .pipe(
                    flatMap((token) => [
                        saveToken(token),
                        confirmationSucceeded()
                    ]),
                    catchError(error => of(confirmationFailed(error)))
                )
        )
    )
