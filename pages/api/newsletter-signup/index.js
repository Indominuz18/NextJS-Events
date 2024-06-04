import { connectDatabase, insertDocument } from "../../../helpers/db-util";

async function handler(req, res) {
  if (req.method == "POST") {
    const email = req.body.email;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid User input!" });
      return;
    }

    let db;

    try {
      db = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Failed to connect to the database." });
      return;
    }

    try {
      await insertDocument(db, "newsletter", { email: email });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed to insert the document into database." });
      return;
    }

    res.status(201).json({ message: "Success", errorFlag: false });

    client.close();
  } else {
    res.status(201).json({ message: "It is working!" });
  }
}

export default handler;
