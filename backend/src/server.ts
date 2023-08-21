import dotenv from 'dotenv';

import app from "./app";

dotenv.config();

app.listen(process.env.SERVER_PORT, () => {
    console.clear();
    console.log(`Server running at url ${process.env.SERVER_HOST || "127.0.0.1:"}${process.env.SERVER_PORT}`)
});