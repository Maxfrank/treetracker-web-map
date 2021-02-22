const request = require("supertest");
const app = require("../app");

describe("/trees", () => {
  const url = "/trees?clusterRadius=8&zoom_level=2&timeline=2015-01-01_2015-12-31";
  it(url, async () => {
    const res = await request(app)
      .get(url);
    expect(res.statusCode).toBe(200);
  });
});

describe.only("case2", () => {
  const url = "/trees?clusterRadius=0.02&zoom_level=12&bounds=36.80545735559693,-3.083181971041851,36.4437325020813,-3.411419640340873&timeline=2015-02-12_2016-01-15";
  it(url, async () => {
    const res = await request(app)
      .get(url);
    expect(res.statusCode).toBe(200);
  });
});

