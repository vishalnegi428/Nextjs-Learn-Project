import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUP = [
	{
		id: "m1",
		title: "Moroco",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/d/da/Palais_El_Badii_-_panoramio.jpg",
		address: "North Africa",
		description: "first meetup",
	},
	{
		id: "m2",
		title: "Moroco",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/d/da/Palais_El_Badii_-_panoramio.jpg",
		address: "North Africa",
		description: "second meetup",
	},
];

function HomePage(props) {
	return <MeetupList meetups={props.meetups}></MeetupList>;
}

export async function getStaticProps() {
	const client = await MongoClient.connect(
		"mongodb+srv://vishal:QWERTY123@cluster0.gyp5p.mongodb.net/?retryWrites=true&w=majority"
	);
	const db = client.db();

	const meetupCollection = db.collection("meetups");

	const meetups = await meetupCollection.find().toArray();

	client.close();

	return {
		props: {
			meetups: meetups.map((meetup) => ({
				title: meetup.title,
				image: meetup.image,
				address: meetup.address,
				id: meetup._id.toString(),
			})),
		},
		revalidate: 1,
	};
}

export default HomePage;
