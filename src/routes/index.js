import express from 'express';
import {getToken, indexPage, getMessages, addMessage} from "../controllers";

const indexRouter = express.Router();
indexRouter.get('/', indexPage);
indexRouter.get('/auth', getToken);
indexRouter.get('/messages', getMessages);
indexRouter.post('/messages', addMessage);

export default indexRouter;
