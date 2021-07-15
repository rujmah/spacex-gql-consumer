import useSWR from "swr";
import { request } from "graphql-request";
import { Launch } from "./Launch";

const fetcher = (query) => request("https://api.spacex.land/graphql", query);

function Launches() {
  const { data, error } = useSWR(
    `query GetLaunches {
    launches(limit:2) {
      mission_name
      launch_date_local
      links {
        article_link
        video_link
      }
    mission_id
    }
}`,
    fetcher
  );

  if (error || !data)
    return <div>Sorry something went wrong retreiving the launches</div>;

  const launches = data.launches;
  return (
    <div>
      {launches.length !== 0
        ? launches.map((l) => <Launch launch={l} key={l.mission_name} />)
        : `Nope!`}
    </div>
  );
}

export default Launches;

export const styles = {
  odd: {
    backgroundColor: "#fffff0",
    padding: "0.15em",
    marginTop: "0.25em",
  },
};
