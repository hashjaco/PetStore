import express from 'express';
import {getToken, indexPage, messagesPage } from "../controllers";

const indexRouter = express.Router();
indexRouter.get('/', indexPage);
indexRouter.get('/auth', getToken);
indexRouter.get('/messages', messagesPage);

export default indexRouter;
