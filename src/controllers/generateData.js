#!/usr/bin/node

/* import faker */
const faker = require('faker');
const fs = require('fs');
const path = require('path');

function userData() {
var user = [];

    for (let id = 1 ; id <= 500 ; id++)
    {
        /* create name */
        const firstname = faker.name.firstName();
        /* create last name */
        const lastname = faker.name.lastName();
        /* create phone number */
        const phonenumber = faker.phone.phoneNumber();
        /* create addres */
        const address = faker.address.direction();
        const city = faker.address.city();
        const country = faker.address.country();
        /* create email */
        const email = faker.internet.email();

        user.push({
            firstname: firstname,
            lastname: lastname,
            phonenumber: phonenumber,
            address: address,
            city: city,
            country: country,
            email: email
        })
    }

    return { data: user };

}
//console.log(userData);
const getdata = (req, res) => {
    const userDataGenerate = userData();
    fs.writeFileSync((path.join(__dirname ,'data.json')), JSON.stringify(userDataGenerate, null, '\t'), function (err) {
        if (err) throw err;
    });
    res.render('create.html', { title: '@Ricardo1470', message: "The data has successfully! View it at 'data.json'"});
}

module.exports = {
    getdata
}
