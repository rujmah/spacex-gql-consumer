import { graphql } from "msw";
import { launchData } from "./launchData";

const spacexland = graphql.link("https://api.spacex.land/graphql");

export const handlers = [
  spacexland.query("GetLaunches", (req, res, ctx) => {
    return res(ctx.data(launchData));
  }),
];
