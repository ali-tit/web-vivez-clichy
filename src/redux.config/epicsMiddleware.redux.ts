import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { registrationEpic } from "../Registration/usecases/registration/registration.epics";
import { RegistrationRemoteService } from "../Registration/adapters/services/registrationRemoteService";
import { confirmationEpic } from '../Registration/usecases/confirmation/confirmation.epics';
import { SessionService } from '../Common/adapters/services/sessionService';
import { authEpic, getTokenEpic } from '../Common/usecases/auth/auth.epics';

export const rootEpics = combineEpics(
    registrationEpic,
    confirmationEpic,
    authEpic,
    getTokenEpic
)

export const epicsMiddleware = createEpicMiddleware({
    dependencies: {
        ...{ registrationRemoteService: (new RegistrationRemoteService())},
        ...{ sessionService: (new SessionService() )
            }
    }
})