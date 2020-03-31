import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { registrationEpic } from "../Registration/usecases/registration/registration.epics";
import { RegistrationRemoteService } from "../Registration/adapters/services/registrationRemoteService";
import { confirmationEpic } from '../Registration/usecases/confirmation/confirmation.epics';

export const rootEpics = combineEpics(
    registrationEpic,
    confirmationEpic
)

export const epicsMiddleware = createEpicMiddleware({
    dependencies: {
        ...{ registrationRemoteService: (new RegistrationRemoteService()) }
    }
})