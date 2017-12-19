const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const isMrScott = require('./middleware/userCheck');
const session = require('express-session');

app.use(bodyParser.json())
// app.use(isMrScott);
app.use(session({
    secret: 'sldkfj',
    resave: false,
    saveUninitialized: true
}))

let adminData = {
    employees: ['Jim', 'Dwight', 'Pam', 'Toby', 'Angela', 'Andy', 'Kevin', 'Phyllis', 'Gabe', 'Darryl', 'Meredith', 'Kelly', 'Stanley', 'Ryan', 'Oscar', 'Creed'],
    yearlyBudget: 1250000,
    ytdRevenue: 223458,
    locationId: 354
}


app.put('/add_name/:name', function(req,res) {
    req.session.user = {
        name: req.params.name
    }
    res.status(200).send(req.session.user);
})

app.post('/api/admin_data', (req, res) => {
    res.status(200).send(adminData)
})


const port = 3002;
app.listen(port, ()=> console.log(`Listening to port: ${port}`));