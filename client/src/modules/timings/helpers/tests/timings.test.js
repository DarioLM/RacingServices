import axios from "axios";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { getRacesClassifications } from "../timings";
import "@testing-library/jest-dom/extend-expect";
import timigsMock from "./mocks/racingServicesData";

const server = setupServer(
  rest.get("/timings", (req, res, ctx) => {
    return res(ctx.json(timigsMock));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it("Transforms raw data to a object of races with drivers and times", async () => {
  const timings = await axios.get("/timings").then((res) => res.data);
  const racesClassifications = getRacesClassifications(timings);

  timings[0].races.forEach((race) => {
    expect(racesClassifications[race.name]).toBeDefined();
    expect(racesClassifications[race.name]).toHaveLength(timings.length);
    racesClassifications[race.name].forEach((timing) => {
      expect(timing.driver).toBeDefined();
      expect(timing.time).toBeDefined();
    });
  });
});

it("Handles server error (bad url)", async () => {
  server.use(
    rest.get("/timingsssss", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );
});
