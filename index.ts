import app, { PORT, DUMMY } from "./src/app";
//importing same variable
import { PORT as API_PORT } from "./src/configs/constant";

app.listen(
  API_PORT,

  () => {
    console.log(`Server: http://localhost:${API_PORT}`);
  },
);
