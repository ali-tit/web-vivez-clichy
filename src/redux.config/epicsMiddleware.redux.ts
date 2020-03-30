import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { registrationEpic } from "../Registration/usecases/registration/registration.epics";
import { RegistrationRemoteService } from "../Registration/adapters/services/registrationRemoteService";

export const rootEpics = combineEpics(
    registrationEpic
)

export const epicsMiddleware = createEpicMiddleware({
    dependencies: {
        ...{ registrationRemoteService: (new RegistrationRemoteService()) }
    }
})