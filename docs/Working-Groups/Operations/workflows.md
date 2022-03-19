# Workflows

Since we are working on 5 different databases, we are having one team each dedicated to a particular **database/ database family**:

1.  Sub-wg Cassandra
2.  Sub-wg RelationalDB
3.  Sub-wg MongoDB
4.  Sub-wg Neo4j
5.  Sub-wg ElasticSearch

## Cyclic Flow

Each team will be going through 3 different cycles of development of helm charts:

**Cycle 1**
Here is where we will get the fundamental software up and get going. It will be a very simple Kubernetes backed Database setup.

**Cycle 2**
This is where we will work on adding monitoring metrics to our Database.
We are yet to decide whether we'll use _prometheus_ or _open-telemetry_
Similarly Grafana might be used.

**Cycle 3** 
We will work on adding some additional softwares for repair, backups etc.
