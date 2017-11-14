// -----------------------------------------------------------------
// Imports library
// -----------------------------------------------------------------
import * as express from 'express'
import * as bodyParser from 'body-parser';
import * as path from 'path';

// -----------------------------------------------------------------
// Import router
// -----------------------------------------------------------------
import { default as index } from "./router/index";

// -----------------------------------------------------------------
// Attributes
// -----------------------------------------------------------------
const app: express.Express = express();

// -----------------------------------------------------------------
// Use express
// -----------------------------------------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(index)


export default app