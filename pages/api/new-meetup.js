// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";

async function handle(req, res) {
	if (req.method == "POST") {
		const data = req.body;

		const client = await MongoClient.connect(
			"mongodb+srv://vishal:QWERTY123@cluster0.gyp5p.mongodb.net/?retryWrites=true&w=majority"
		);
		const db = client.db();

		const meetupCollection = db.collection("meetups");

		const result = await meetupCollection.insertOne(data);

		console.log(result);

		client.close();

		res.status(201).json({ message: "meetup inserted successfully!" });
	}
}

export default handle;
