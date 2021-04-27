import express from 'express';
import { getToken, indexPage, getMessages, addMessage } from '../controllers';
import { modifyMessage, performAsyncAction } from '../middleware';

const indexRouter = express.Router();
indexRouter.get('/', indexPage);
indexRouter.get('/auth', getToken);
indexRouter.get('/messages', getMessages);
indexRouter.post('/messages', modifyMessage, performAsyncAction, addMessage);

export default indexRouter;
