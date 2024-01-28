import {faker} from '@faker-js/faker';

class userData {
    constructor() {
        this.faker = faker;
    }
    getData() {
        return {
          username: this.faker.internet.userName(),
          email: this.faker.internet.email(),
          password: this.faker.internet.password(),
          first_name: this.faker.person.firstName(),
          last_name: this.faker.person.lastName(),
          company: this.faker.company.name(),
          adress: this.faker.location.street(),
          adress2: this.faker.location.secondaryAddress(),
          zip_code: this.faker.location.zipCode(),
          state: this.faker.location.state(),
          city: this.faker.location.city(),
          mobile: this.faker.phone.number('07########'),
        };
       }
}
export default new userData();