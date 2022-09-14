import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './src/config/db-config';
import {errorHandler} from './src/middleware/errorMiddleware';

import userRoutes from './src/routes/user-routes';

dotenv.config();
const port = process.env.PORT;

const app = express();
connectDB()

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.text())


app.use("/api/users", userRoutes)

app.use(errorHandler)

app.listen(port, () => console.log(`Server listen:::: ${port}`));

export default app;
