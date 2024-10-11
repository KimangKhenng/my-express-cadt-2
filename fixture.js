require('dotenv').config()

const dbConnect = require('./src/db/db.js')
const CourseModel = require('./src/models/course.js')
const { faker } = require('@faker-js/faker');
const UserModel = require('./src/models/user.js');

dbConnect().catch((err) => {
    console.log(err)
})

const numberOfCourse = 1000
const numberOfUsers = 100

async function generate() {
    for (let i = 0; i < numberOfCourse; i++) {
        const newCourse = new CourseModel({
            price: faker.commerce.price(),
            title: faker.lorem.sentence(5),
            category: faker.music.genre(),
            author: faker.person.fullName()
        })
        const result = await newCourse.save()
        console.log(`${i} - Course with id: ${result._id} generated`)
    }

    for (let i = 0; i < numberOfUsers; i++) {
        const newUser = new UserModel({
            username: faker.internet.userName(),
            firstname: faker.person.firstName(),
            lastname: faker.person.lastName(),
            dateOfBirth: faker.date.birthdate(),
            email: faker.internet.email()
        })
        const result = await newUser.save()
        console.log(`${i} - User with id: ${result._id} generated`)
    }
}
generate()