import app from "./app";
import { PORT } from "./constants/logging.constants";

app.listen( PORT, () => console.log( `Listening on port ${PORT}` ) );
