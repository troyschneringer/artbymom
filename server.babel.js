var express = require('express');

const app = express();
app.use('/artbymom/', express.static('www'));
app.listen(process.env.PORT || 3000);