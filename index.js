import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SquelizeStore from "connect-session-sequelize";
import UserRote from "./routes/UserRote.js";
import ProductRote from "./routes/ProductRoute.js";
import AuthRoute from "./routes/AuthRoute.js"

dotenv.config();

const app = express();
const sessionStore = SquelizeStore(session.Store);
const store = new sessionStore({
    db: db
});
// (async() => {
//     await db.sync();
// })();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))

app.use(express.json());
app.use(UserRote);
app.use(ProductRote);
app.use(AuthRoute);

// store.sync();

app.listen(process.env.APP_PORT, () => {
    console.log('Server sudah suksess bossss.....');

});