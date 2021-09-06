import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetup() {
	async function meetupHandler(meetupData) {
		const response = await fetch("/api/new-meetup", {
			method: "POST",
			body: JSON.stringify(meetupData),
			headers: {
				"Content-Type": "application/json ",
			},
		});

		const data = await response.json();

		console.log(data);
	}
	return <NewMeetupForm onAddMeetup={meetupHandler}></NewMeetupForm>;
}

export default NewMeetup;
