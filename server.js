const express = require('express');
const morgan = require('morgan');

// const morganBody = require('morgan-body')
const cors = require('cors')
// const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const routes = require("./routes/index")

// middlewares
app.use(cors());
app.use(morgan('dev'));
// morganBody(app);
app.use(express.json());

// routes
app.use(routes);

app.listen(PORT, (error) => {
    if (error) {
        console.log(error)
        throw error
    }
    console.log(`Server on port ${PORT}`)
});