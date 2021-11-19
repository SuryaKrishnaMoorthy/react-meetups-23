import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Place_Jacobins_Lyon.jpg/1920px-Place_Jacobins_Lyon.jpg",
    title: "A first meetup",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Place_Jacobins_Lyon.jpg/1920px-Place_Jacobins_Lyon.jpg",
    title: "A first meetup",
    address: "Some address 15, 12345 Some City",
    description: "This is a second meetup",
  },
  {
    id: "m3",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Place_Jacobins_Lyon.jpg/1920px-Place_Jacobins_Lyon.jpg",
    title: "A first meetup",
    address: "Some address 25, 12345 Some City",
    description: "This is a third meetup",
  },
];

const HomePage = (props) => {
  return (
      <MeetupList meetups={props.meetups} />
  );
};

export  const getStaticProps = async () => {
  //fetch data from an api
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 1
  }
}

export default HomePage;
