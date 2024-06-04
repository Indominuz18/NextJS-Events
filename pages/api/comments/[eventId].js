import {
  connectDatabase,
  getAllDocument,
  insertDocument,
} from "../../../helpers/db-util";

async function handler(req, res) {
  const id = req.query.eventId;

  let db;

  try {
    db = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Failed to connect to the database." });
    return;
  }

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email ||
      email.trim() === "" ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid user input." });
    }

    try {
      await insertDocument(db, "comments", { email, name, text });
    } catch (error) {
      res.status(500).json({ message: "Failed to insert document." });
      return;
    }

    res.status(201).json({ messsage: "Comment successfully registered!" });
  } else if (req.method === "GET") {
    try {
      await getCommentsById(db, "comments", id);
    } catch (error) {
      res.status(500).json({ message: "Failed to load comments." });
      return;
    }

    res.status(200).json({ comments: comments });
  }

  client.close();
}

export default handler;
