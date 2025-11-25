import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

app.use("/api/users",us)


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
