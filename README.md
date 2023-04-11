# Note: An obsolete project that was designed to test an idea

npm i -g express-generator
express server // creating a server
cd server && npm i // install dep
DEBUG=server node ./bin/www

mkdir data
mongod --dbpath ./data/ // connect to mongod project server
npm i mongodb mongoose
create schemas users and events
making dummy dbs work

routers
routes/index.js

what are the routes
Client GET
/home
/about 
/login
/signup
/logout
/profile/:id
/events/:id

Server
* user
GET, POST, PUT, DELETE /users/:id

* event
GET
/events - list
/events/:id - item

POST 
/events - posting event
/events/:id/join - join
/events/:id/quit - quit

PUT
/events/:id - update

DELETE
/events/:id - delete

cookie https://arjunphp.com/handle-cookies-express-js/

