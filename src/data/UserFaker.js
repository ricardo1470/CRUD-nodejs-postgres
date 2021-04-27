#!/usr/bin/node

/* import faker */
const faker = require('faker');
const fs = require('fs');

function userData() {
var user = [];

    for (let id = 1 ; id <= 100 ; id++)
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

const userDataGenerate = userData();
fs.writeFileSync('userDataGenerate.json', JSON.stringify(userDataGenerate, 'utf8', '\t'), function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The data has successfully! View it at 'userDataGenerate.json'");
});

//function jobData () {
    //let jobs = [];

    //for (let id = 1 ; id <= 200 ; id++)
    //{
        /* create job Title */
        //const jobTitle = faker.name.jobTitle();
        /* create job Area */
        //const jobArea = faker.name.jobArea();
        /* create job Descriptor */;
        //const jobDescriptor = faker.name.jobDescriptor();
    //}
//}
