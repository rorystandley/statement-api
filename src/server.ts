import app from "./app";
import { PORT } from "./constants/statement.constants";

app.listen( PORT, () => console.log( `Listening on port ${PORT}` ) );
