# Auth provider evaluation

Evaluation of providers for authentication and user management.
Currently only the first one, Google Firebase: https://firebase.google.com/

# Prerequisites

You need to have installed:+

* Node >= 12

For firebase you must create a project to obtain API-Key, App-ID, etc.

# Build and start

    npm install
    npm start
    
Visit http://localhost:3000

# Auth Providers

To configure the auth providers, copy the file `.env.template` to `.env` and set the variables accordingly.  

## Google Firebase

Implemented these standard use cases on client side:

* Signup
* Email verification
* Login
* Logout
