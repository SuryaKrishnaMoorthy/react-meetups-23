import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetailsPage = () => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Place_Jacobins_Lyon.jpg/1920px-Place_Jacobins_Lyon.jpg"
      title="A meetup"
      address="Some street 5, Some City"
      description="Some description"
    />
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId:'m1',
        },
      },
      {
        params: {
          meetupId:'m2',
        },
      }
    ]
  }
};

export  const getStaticProps = async (context) => {
  //fetch data from an api

  const meetupId = context.params.meetupId;
  console.log(meetupId); //doesnt get printed on the web console since this code runs in the server

  return {
    props: {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Place_Jacobins_Lyon.jpg/1920px-Place_Jacobins_Lyon.jpg",
      title: "A meetup",
      address: "Some street 5, Some City",
      description: "Some description"
    },
    revalidate: 1
  }
}

export default MeetupDetailsPage;
