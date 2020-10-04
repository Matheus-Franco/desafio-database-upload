import { Router } from 'express';

import transactionsRouter from '../../../../modules/transactions/infra/http/routes/transactions.routes';
import usersRouter from '../../../../modules/users/infra/http/routes/users.routes';
import sessionsRouter from '../../../../modules/users/infra/http/routes/sessions.routes';
import profileRouter from '../../../../modules/users/infra/http/routes/profile.routes';

const routes = Router();

routes.use('/transactions', transactionsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/profile', profileRouter);

export default routes;
