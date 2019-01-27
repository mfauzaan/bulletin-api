# bulletin-api
A simple bulletin board API.

## Quick start

1. Clone the repository with `git clone --depth=1 git@github.com:mfauzaan/bulletin-api.git`
2. Setup the database on `config/database.js`
3. Install the dependencies with `npm` (click here if [you don't have Yarn installed](https://yarnpkg.com/docs/install))
4. Create the development and test databases you have setup on `config/database.js`
5. Run the database migrations with `npm run sequelize db:migrate`
6. Add some seed data to the development database with `npm run sequelize db:seed:all`
7. Run the application in development mode with `npm run dev`
8. Access `http://localhost:3000/api/users` and you're ready to go!

