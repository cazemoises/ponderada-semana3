import express from 'express';
import cors from 'cors';

import user_routes from './routes/user_routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', user_routes);

export default app;