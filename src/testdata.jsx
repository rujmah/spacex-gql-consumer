const testdata = {
  mission_name: "Sentinel-6 Michael Freilich",
  launch_date_local: "2020-11-21T09:17:00-08:00",
  launch_site: {
    site_name_long: "Vandenberg Air Force Base Space Launch Complex 4E",
  },
  links: {
    article_link:
      "https://spaceflightnow.com/2020/11/21/international-satellite-launches-to-extend-measurements-of-sea-level-rise/",
    video_link: "https://youtu.be/aVFPzTDCihQ",
  },
  rocket: {
    rocket_name: "Falcon 9",
    first_stage: {
      cores: [
        {
          flight: 1,
          core: {
            reuse_count: 0,
            status: null,
          },
        },
      ],
    },
    second_stage: {
      payloads: [
        {
          payload_type: "Satellite",
          payload_mass_kg: 1440,
          payload_mass_lbs: 3174.657,
        },
      ],
    },
  },
  ships: [],
};

export { testdata };
