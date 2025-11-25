import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/user.routes';

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

app.use("/api/users",router);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
