import ReactPlayer from "react-player/youtube";
import Card from "react-bootstrap/Card";

export const Launch = (props) => {
  const { mission_name: missionName, launch_date_local: launchDate } =
    props.launch;

  const { article_link: articleURL, video_link: videoURL } = props.launch.links;
  return (
    <Card data-testid="launchBox">
      <Card.Body>
        <Card.Title>{missionName}</Card.Title>
        <p>Date: {launchDate}</p>
        <p>
          <a href={articleURL} target="_blank" rel="noreferrer">
            Find out more
          </a>
        </p>
        <ReactPlayer url={videoURL} />
      </Card.Body>
    </Card>
  );
};
