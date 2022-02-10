const Hospital = require("../models/hospital.model");

exports.addHospital = (req, res) => {
    const Hospital = new Hospital({
        hospName: req.body.hospName,
        hospLocation: req.body.hospLocation,
        hospURL: req.body.hospURL,
    });
    user.save((err, user) => {
        if (err) { res.status(500).send({ message: err }); return; }
        res.send('Data inserted:\n' + JSON.stringify(req.body));
    });
};


exports.getHospitals = (req, res) => {
    Hospital.find({}).toArray()
        .exec(function (err, res) {
            if (err) { res.status(500).send({ message: err }); return; }
            console.log(res);
            reponse.send(JSON.stringify(res));
        });
}