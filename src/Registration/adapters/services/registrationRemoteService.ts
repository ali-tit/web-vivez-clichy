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
        const body = { phone: phoneNumber, device_id: "my_deviceId", app_version: "1.02" }

        return ajax.post(URL, body, this.headers)
            .pipe(
                map(() => void 0),
                catchError(error => throwError(JSON.stringify(error)))
            )
    }

    confirmCode(phoneNumber: string, confirmationCode: string): Observable<string> {
        const URL = 'https://feature.api.vivezclichy.fr/v1/authentication/start-session'
        const body = { phone: phoneNumber, code: confirmationCode }

        return ajax.post(URL, body, this.headers)
            .pipe(
                map( res => res.response.data.token),
                catchError(error => throwError(JSON.stringify(error)))
            )
    }
}