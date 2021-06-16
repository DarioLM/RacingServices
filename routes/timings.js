const mockData = require("../mocks/racingServicesData");

module.exports = (app) => {
  app.get("/api/timings", (req, res) => {
    res.send(JSON.stringify(mockData));
  });
};
