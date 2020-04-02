import { Observable, Subject } from "rxjs";

export class SessionService {

    localStorageSubject$: Subject<void>
    getLocalStorageSubject$: Subject<string>

    constructor() {
        this.localStorageSubject$ = new Subject()
        this.getLocalStorageSubject$ = new Subject()
    }

    saveSession(token: string): Observable<void> {
        localStorage.setItem('token', token)
        this.localStorageSubject$.next()
        return this.localStorageSubject$
    }

    getSession(): Observable<string> {
        setTimeout(() => {
            const token = localStorage.getItem('token')
            this.getLocalStorageSubject$.next(token ? token : '')
        })

        return this.getLocalStorageSubject$
    }
}