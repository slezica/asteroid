# Asteroid

A Meteor-like minimal proof of concept using React, Redux, RethinkDB and SocketIO.
Less than 120 lines of code.

The webpage displays a list of documents found in a RethinkDB table, updated in
real time.

Take a look at `src/client.jsx`, and `src/server.js`.


# Set-up

Install dependencies, build the client and start the database:

    $ npm install
    $ webpack
    $ rethinkdb


# Start the server

Run `express` on `localhost:3000`:

    $ node-babel src/server.js
