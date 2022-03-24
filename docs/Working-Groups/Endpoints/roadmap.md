# What is a good roadmap for the Rap-god API

This working group is effectively the back-end dev working group that’d effectively be concerned about making endpoints, etc. We’ll be linking the API docs to this soon! We’ll be following the OpenAPI v3 spec and if you haven’t read it don’t worry : )

These are just overviews/top-level guidelines that can be followed based on your expertise, feel free to follow them as you wish.

## Javascript

We are currently using the ES2015 standard to write Express based back-end code. Express is a backend based framework that is written in an older standard of Javascript. We transpile the newer standard of Javascript (ES2015) using Babel.

### TLDR😉; Don’t worry if you know nothing about back-end development, Learn ES2015 based JS.

#### Learning Resource :

- [W3S](https://www.w3schools.com/js/js_es6.asp)
- [Google Dev Guide](https://developers.google.com/web/shows/ttt/series-2/es2015)
- [Babel Docs for ES6](https://babeljs.io/docs/en/learn/)

## ExpressJS

Express JS is the backend framework with which we’ll implement our API Endpoints. The framework has a set of tools/functionality with which you can implement a lot of backend features. You can read about Express JS in the below mentioned resources. A simple endpoint would be like

```
app.get(“/”, (req,res) => {
     res.send(“Welcome to RapGOD”);
     }
)
```

#### Learning Resource :

- [Learning from Express Docs](https://expressjs.com/en/starter/installing.html)
- [Learn from MDN docs](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)
- [Additional Learning Docs](https://expressjs.com/en/resources/learning.html)

## CassandraDB - Fundamentals

**DISCLAIMER** : This is not the same as [K8ssandra](https://k8ssandra.io/)

Apache Cassandra is the database that we’ll be using initially to implement the Rap-GOD API , the database will store our data as collections. Apache Cassandra has a wide variety of features that is unique to itself, You can read about them as you progress.

#### Learning Resource :

- [Introduction to Apache Cassandra](https://www.youtube.com/watch?v=B_HTdrTgGNs)
- [Introduction to Apache Cassandra - Student Session](https://www.youtube.com/watch?v=6CL3l4O59tg)
- [Cassandra Basics](https://cassandra.apache.org/_/cassandra-basics.html)

## Cassandra - ORM

To query data from our database, we can implement CQL queries that query data from the Database and return it, but this is not efficient as it is operationally complex. To solve this, we use ORM/ODM (Object Relational/Document Mapper) that maps the objects in your programming language to the elements in your database.

We’ll be using [Express-Cassandra](https://express-cassandra.readthedocs.io/en/latest/) for this project

#### Learning Resource :

- [Official Docs](https://express-cassandra.readthedocs.io/en/latest/usage/)
- [Geeks for Geeks](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiFo7CPldz2AhXlUGwGHRkRA4oQFnoECCoQAQ&url=https%3A%2F%2Fwww.geeksforgeeks.org%2Fhow-to-update-record-in-cassandra-using-expressjs%2F&usg=AOvVaw1nmac2L1y7-IDgOhGS4ceu)
- [Sandbox examples](https://codesandbox.io/examples/package/express-cassandra)

## Adding Middleware

Middleware provides access to the API Calls with access to the request object, they get invoked every time an endpoint is being called.

_Middleware_ functions are functions that have access to the[ request object](http://expressjs.com/en/4x/api.html#req) (req), the[ response object](http://expressjs.com/en/4x/api.html#res) (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

## OpenAPI

Wow, you have now come to the near end of the first cycle of learning, this is the time where you learn about OpenAPI .

The OpenAPI Specification (OAS) defines a standard, language-agnostic interface to RESTful APIs which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection. When properly defined, a consumer can understand and interact with the remote service with a minimal amount of implementation logic.

You can learn about it here:

- [How to add OpenAPI to express](https://www.freecodecamp.org/news/how-to-build-explicit-apis-with-openapi/)
- [Official spec docs](https://spec.openapis.org/oas/v3.1.0)
