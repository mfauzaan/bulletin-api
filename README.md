# bulletin-api
A simple bulletin board API.

## Quick start

1. Clone the repository with `git clone --depth=1 git@github.com:mfauzaan/bulletin-api.git`
2. Open the folder `cd bulletin-api`
3. Copy Env Example File`cp .env.example .env`,
4. Setup the database fields on `.env`
5. Install the dependencies with `npm install`
6. Generate App Key, this is used for hashing password `npm run key:generate` 
7. Run the database migrations with `sequelize db:migrate`
8. Add some seed data to the development database with `sequelize db:seed:all` 
9. Run the application in development mode with `npm run dev`
10. Access `http://localhost:3000` and you're ready to go!

