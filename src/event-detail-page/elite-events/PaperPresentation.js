import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import PaperPresentationImg from "../../assets/event-images/paperpresentation.jpg";

const paperPresentation = {
  image: PaperPresentationImg,
  description:
    "Action is the foundational key to success--Pablo Picasso. Elevate your ideas and let you ideas fly high along with your presentation.",
  type: "Elite Event",
  eventName: "Paper presentation",
  dateTime: "March 17, 9:00AM",
  venue: "IT-201",
  rules: [
    "Include only one idea per slide",
    "Spend only 1 minute per slide",
    "Make use of your heading",
    "Include only essential points",
    "Give credit, where credit is due",
    "Use graphics effectively",
    "Design to avoid cognitive overload.",
    "Design the slide so that a distracted person gets the main takeaway.",
    "Iteratively improve slide design through practice.",
    "Design to mitigate the impact of technical disasters.",
  ],
  firstprize: 1000,
  secondprize: 500,
  contact: [
    {
      name: "Khabilan S",
      phoneNo: "6382889722",
    },
    {
      name: "Tilak Chander S",
      phoneNo: "7010056926",
    },
    {
      name: "Arvind Srinivas K G",
      phoneNo: "7871605729",
    },
  ],
};

const PaperPresentation = () => {
  return <SingleEventPage eventDetails={paperPresentation} />;
};

export default PaperPresentation;