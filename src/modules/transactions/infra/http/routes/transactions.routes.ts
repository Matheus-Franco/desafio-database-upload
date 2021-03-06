import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../../../../../config/upload';
import ensureAuth from '../../../../users/infra/http/middlewares/ensureAuth';

import CreateTransactionController from '../controllers/CreateTransactionController';
import DeleteTransactionController from '../controllers/DeleteTransactionController';
import ImportTransactionController from '../controllers/ImportTransactionController';
import ListTransactionByIdController from '../controllers/ListTransactionByIdController';
import ListTransactionsController from '../controllers/ListTransactionsController';

import ListUsersTransactionsController from '../controllers/ListUsersTransactionsController';

const createTransactionController = new CreateTransactionController();
const deleteTransactionController = new DeleteTransactionController();
const importTransactionController = new ImportTransactionController();
const listTransactionByIdController = new ListTransactionByIdController();
const listTransactionsController = new ListTransactionsController();
const listUsersTransactionsController = new ListUsersTransactionsController();

const upload = multer(uploadConfig);

const transactionsRouter = Router();

transactionsRouter.use(ensureAuth);

transactionsRouter.get('/my', listUsersTransactionsController.show);
transactionsRouter.get('/', listTransactionsController.index);
transactionsRouter.get('/:id', listTransactionByIdController.index);
transactionsRouter.post('/', createTransactionController.create);
transactionsRouter.post(
  '/import',
  upload.single('file'),
  importTransactionController.create,
);
transactionsRouter.delete('/:id', deleteTransactionController.delete);

export default transactionsRouter;
