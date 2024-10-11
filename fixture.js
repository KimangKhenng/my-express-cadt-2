require('dotenv').config()

const dbConnect = require('./src/db/db.js')
const CourseModel = require('./src/models/course.js')
const { faker } = require('@faker-js/faker');

dbConnect().catch((err) => {
    console.log(err)
})

const numberOfCourse = 10000

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
}
generate()