# What is a good roadmap for the Rap-god API

This working group is effectively the back-end dev working group that’d effectively be concerned about making endpoints, etc.  We’ll be linking the API docs to this soon! We’ll be following the OpenAPI v3 spec and if you haven’t read it don’t worry : )

These are just overviews/top-level guidelines that can be followed based on your expertise, feel free to follow them as you wish.

 **1. Javascript** </br> </br>
We are currently using the ES2015 standard to write Express based back-end code. Express is a backend based framework that is written in an older standard of Javascript. We transpile the newer standard of Javascript (ES2015) using Babel. 

TL:DR; Don’t worry if you know nothing about back-end development, Learn ES2015 based JS. 

Learning Resource : 

 - [W3S](https://www.w3schools.com/js/js_es6.asp)</br>
 - [Google Dev Guide](https://developers.google.com/web/shows/ttt/series-2/es2015)</br>
 - [Babel Docs for ES6](https://babeljs.io/docs/en/learn/)
 
 **2. ExpressJS**</br></br>
 Express JS is the backend framework with which we’ll implement our API Endpoints. The framework has a set of tools/functionality with which you can implement a lot of backend features. You can read about Express JS in the below mentioned resources. A simple endpoint would be like

 ```
 app.get(“/”, (req,res) => {
      res.send(“Welcome to RapGOD”);
      }
)
```

Learning Resource : 

- [Learning from Express Docs](https://expressjs.com/en/starter/installing.html)</br>
- [Learn from MDN docs](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)</br>
- [Additional Learning Docs](https://expressjs.com/en/resources/learning.html)

**3. CassandraDB - Fundamentals** </br>

**DISCLAIMER** : This is not the same as [K8ssandra](https://k8ssandra.io/)

Apache Cassandra is the database that we’ll be using initially to implement the Rap-GOD API , the database will store our data as collections. Apache Cassandra has a wide variety of features that is unique to itself, You can read about them as you progress.

Learning Resource : 

- [Introduction to Apache Cassandra](https://www.youtube.com/watch?v=B_HTdrTgGNs)</br>
- [Introduction to Apache Cassandra - Student Session](https://www.youtube.com/watch?v=6CL3l4O59tg)</br>
- [Cassandra Basics](https://cassandra.apache.org/_/cassandra-basics.html)
