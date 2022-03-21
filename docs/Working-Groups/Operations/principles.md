# Focus

For the operations part, we will be majorly working on developing the helm charts for running Cassandra on Kubernetes along with some other additional services like monitoring, backups and repairing etc. Since we want to develop a common standard for running different databases in Kubernetes, we will be also adding support for other databases like RelationalDB, MongoDB, Neo4j, ElasticSearch. This simply means having different helm charts for all databases but all sharing a common structure with some changes in the image name, ports, env etc.

Our focus is also to DevOpsify the whole setup, so we will be implementing different Github actions and workflows to automate the process of various deployments.
