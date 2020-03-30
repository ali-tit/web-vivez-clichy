import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax'
import { catchError } from 'rxjs/operators'

export class RegistrationRemoteService {

    private headers: object = {
        'Content-Type'   : 'application/x-www-form-urlencoded',
        'Accept'         : 'application/json'
    }

    register(phoneNumber: string): Observable<void> {
        const URL = 'https://feature.api.vivezclichy.fr/v1/authentication/send-activation-code'
        const body = { phone: phoneNumber }

        return ajax.post(URL, body, this.headers)
            .pipe(
                map(() => void 0),
                catchError(error => throwError(JSON.stringify(error)))
            )
    }
}