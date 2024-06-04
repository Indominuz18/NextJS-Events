import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://ManmeetSingh:bowhqhaITsCitLKy@cluster1.8x4f1.mongodb.net/"
  );

  const db = client.db("Events");

  return db;
}

export async function insertDocument(db, collection, document) {
  const result = await db.collection(collection).inertOne(document);

  return result;
}

export async function getAllDocument(db, collection, sort) {
  const documents = await db.collection(collection).find().sort(sort).toArray();
  return documents;
}

export async function getCommentsById(db, collection, id) {
  const documents = await db
    .collection(collection)
    .find({id: id})
    .toArray();

  return documents;
}
