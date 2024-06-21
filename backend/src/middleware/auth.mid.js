import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import pkg from 'jsonwebtoken';
const { verify } = pkg;

dotenv.config();

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_NAME;

let db;

(async () => {
  try {
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    db = client.db(dbName);
  } catch (error) {
    console.error(error);
  }
})();

export default (req, res, next) => {
  const token = req.headers.access_token;
  if (!token) return res.status(401).send();

  try {
    const decoded = verify(token, process.env.JWT_SECRET);
    req.user = decoded;
  } catch (error) {
    res.status(401).send();
  }

  return next();
};