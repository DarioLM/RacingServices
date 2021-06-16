const express = require("express");

const app = express();

require("./routes/timings")(app);

app.listen(5000);
