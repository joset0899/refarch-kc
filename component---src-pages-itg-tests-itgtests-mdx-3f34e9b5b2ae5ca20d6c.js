(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{XHBg:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return l}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),r=n("013z");n("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s={},i={_frontmatter:s},c=r.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(c,o({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Reefer container shipment solution comes with a set of integration test cases to ensure the end to end functionality of the application. These test cases are part of our CI/CD process so that we ensure every new pull request that brings new code in does not break or modify the correct functionality of the application."),Object(a.b)("p",null,"So far we have the following integration test cases:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"/refarch-kc/44416c097c7058d12ad0e420e2c89b5b/happy_path.mdx"}),"Happy path")," - End to end happy path test."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"/refarch-kc/73e1f32956c81de4c6b62ae0adbd1f82/saga.mdx"}),"SAGA pattern")," - SAGA pattern for new order creation test."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"/refarch-kc/6552a9e3b59e4f00a85c104982a64bd8/order_rejected.mdx"}),"Order Rejection")," - Order Rejection test."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"/refarch-kc/8f1e8ca688060e202d5b2fde85d6a45a/containerAnomaly.mdx"}),"Container Anomaly")," - Container anomaly and maintenance test."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"/refarch-kc/686be45cacf0455a0272580d665e03c2/dlq.mdx"}),"Dead Letter Queue")," - Container Anomaly Dead Letter Queue Pattern test.")),Object(a.b)("p",null,"New integration test cases will be added in order to test other parts of the application as well as use cases and other Event Driven Patterns."),Object(a.b)("h2",null,"How to run the integration test cases"),Object(a.b)("h3",null,"Pre-requisites"),Object(a.b)("p",null,"In order to run the integration tests against the Reefer container shipment solution you first need to have this solution deployed on an Openshift or Kubernetes cluster. The solution is made up of:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Backing services such as IBM Event Streams and PostgreSQL - Instructions ",Object(a.b)("a",o({parentName:"li"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc/deployments/backing-services/"}),"here"),"."),Object(a.b)("li",{parentName:"ol"},"The Reefer container shipment solution components - Instructions ",Object(a.b)("a",o({parentName:"li"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc/deployments/application-components/"}),"here"),".")),Object(a.b)("p",null,"Once you have the solution deployed into your cluster, apart from an instance of IBM Event Streams and PostgreSQL either on premises or in IBM Cloud, you should have the following components at the very least for the integration tests to run:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"$ oc get pods\nNAME                                                READY     STATUS    RESTARTS   AGE\npod/ordercommandms-deployment-7cfcf65ffc-ffbxt      1/1       Running   0          32d\npod/orderqueryms-deployment-5ff4fd44d-ghrg6         1/1       Running   0          32d\npod/springcontainerms-deployment-7f78fc9b64-kt2pf   1/1       Running   0          32d\npod/voyagesms-deployment-7775bb8974-h8vj4           1/1       Running   0          32d\n")),Object(a.b)("p",null,"The integration test cases have been implemented to be run as a kubernetes job called ",Object(a.b)("strong",{parentName:"p"},"reefer-itgtests-job"),". This job consist of a tailored python container where the integration tests, which are written in Python, will get executed in. The yaml file that will create such kubernetes job, called ",Object(a.b)("strong",{parentName:"p"},"ReeferItgTests.yaml"),", can be found under the ",Object(a.b)("inlineCode",{parentName:"p"},"itg-tests/es-it")," folder in this very same repository. The reason for creating a tailored python container which to execute the integration tests in is because we can then control the execution environment for the integration tests. This way we ensure the appropriate libraries, permissions, etc are as expected. This tailored python container docker image is publicly available in the Docker Hub (",Object(a.b)("inlineCode",{parentName:"p"},"ibmcase/kcontainer-python:itgtests"),"). Please, make sure you can access the Docker Hub public registries from your OpenShift or Kubernetes cluster."),Object(a.b)("p",null,"The integration tests also require of some variables being defined beforehand, some of which need to be defined as ",Object(a.b)("strong",{parentName:"p"},"secrets or configMaps")," within your kubernetes namespace or OpenShift project, such as ",Object(a.b)("inlineCode",{parentName:"p"},"KAFKA_APIKEY"),", ",Object(a.b)("inlineCode",{parentName:"p"},"KAFKA_BROKERS")," and the IBM Event Streams PEM certificate (in case you are working with IBM Event Streams on premise), where the Reefer container shipment solution has been deployed into. You should have got these secrets or configMaps already created when deploying your backing services in #1 of this pre-requisites section."),Object(a.b)("p",null,"Other required variables for the integration tests need to be defined within the kubernetes job yaml file:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Orders topic name: This could be specified within the integration tests kubernetes job yaml file under the variable ",Object(a.b)("strong",{parentName:"p"},"ITGTESTS_ORDERS_TOPIC")," which defaults to ",Object(a.b)("inlineCode",{parentName:"p"},"itg-orders"),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Order Command topic name: This could be specified within the integration tests kubernetes job yaml file under the variable ",Object(a.b)("strong",{parentName:"p"},"ITGTESTS_ORDER_COMMANDS_TOPIC")," which defaults to ",Object(a.b)("inlineCode",{parentName:"p"},"itg-order-commands"),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Containers topic name: This could be specified within the integration tests kubernetes job yaml file under the variable ",Object(a.b)("strong",{parentName:"p"},"ITGTESTS_CONTAINERS_TOPIC")," which defaults to ",Object(a.b)("inlineCode",{parentName:"p"},"itg-containers"),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Container anomaly retry topic name: This could be specified within the integration tests kubernetes job yaml file under the variable ",Object(a.b)("strong",{parentName:"p"},"ITGTESTS_CONTAINER_ANOMALY_RETRY_TOPIC")," which defaults to ",Object(a.b)("inlineCode",{parentName:"p"},"itg-container-anomaly-retry"),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Container anomaly dead topic name: This could be specified within the integration tests kubernetes job yaml file under the variable ",Object(a.b)("strong",{parentName:"p"},"ITGTESTS_CONTAINER_ANOMALY_DEAD_TOPIC")," which defaults to ",Object(a.b)("inlineCode",{parentName:"p"},"itg-container-anomaly-dead"),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Kafka Environment: It should be either ",Object(a.b)("strong",{parentName:"p"},"OCP")," or ",Object(a.b)("strong",{parentName:"p"},"IBMCLOUD")," depending on where your IBM Event Streams instance is deployed onto. If it is deployed on premises in your OpenShift or Kubernetes cluster, then it ",Object(a.b)("inlineCode",{parentName:"p"},"KAFKA_ENV")," should be set to ",Object(a.b)("inlineCode",{parentName:"p"},"OCP"),". If you are using an IBM Event Streams instance in the IBM Cloud, then ",Object(a.b)("inlineCode",{parentName:"p"},"KAFKA_ENV")," should be set to ",Object(a.b)("inlineCode",{parentName:"p"},"IBMCLOUD"),"."),Object(a.b)("p",{parentName:"li"},"This is important as the ",Object(a.b)("strong",{parentName:"p"},"IBM Event Streams on-prem instances require a PEM certificate")," for the Kafka libraries to successfully connect to it. So, if you are using IBM Event Streams on-prem in your OpenShift or Kubernetes cluster, you also have to:"),Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"Uncomment the bottom part of the integration tests kubernetes job yaml file."),Object(a.b)("li",{parentName:"ol"},"Make sure you created the ",Object(a.b)("strong",{parentName:"li"},"eventstreams-pem-file")," secret that will hold your IBM Event Streams PEM certificate, in step #1 of this pre-requisites section.")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"IMPORTANT:")," For the integration test suite to work fine, more precisely to get the test case for testing ",Object(a.b)("a",o({parentName:"p"},{href:"../dlq/dlq.md"}),"the Dead Letter Queue pattern"),") to succeed, we ",Object(a.b)("strong",{parentName:"p"},"must")," mockup the BPM integration which we have developed some internal endpoints for. To use the BPM mockup endpoints, you will need to make sure the ",Object(a.b)("strong",{parentName:"p"},"bpm-anomaly")," configMap you created for the Spring Container microservice component of the Reefer container shipment solution holds the following values for the url and login attributes:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"login: 'http://localhost:8080/bpm_mockup/login'\nurl: 'http://localhost:8080/bpm_mockup/bpm_process_404'\n")),Object(a.b)("p",null,"You can do so by manually editing the configMap:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"$ oc edit configmap bpm-anomaly -n eda-integration\n")),Object(a.b)("p",null,"The above will require to restart the Spring Container microservice component, although we ",Object(a.b)("strong",{parentName:"p"},"strongly suggest")," the integration tests are run on a separate testing environment where the ",Object(a.b)("strong",{parentName:"p"},"bpm-anomaly")," (and any other configuration item) holds testing values as well as the ",Object(a.b)("strong",{parentName:"p"},"recreation")," of the kafka topics involved in the integration tests suite."),Object(a.b)("h3",null,"Run"),Object(a.b)("p",null,"In order to run the integration test cases for the Reefer container shipment solution, we need to create the the job that will run these. To create the job, we simply execute:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"oc apply -f ReeferItgReefer.yaml -n <namespace>\n")),Object(a.b)("p",null,"You should see the following output:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"job.batch/reefer-itgtests-job created\n")),Object(a.b)("p",null,"and if you list the pods in your namespace you should see a new pod which is running the integration tests:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"$ oc get pods | grep itgtests\nNAME                                           READY     STATUS        RESTARTS   AGE\nreefer-itgtests-job-x594k                      1/1       Running       0          2m\n")),Object(a.b)("p",null,"Once the integration tests have finished, the pod should transition to completed status:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"$ oc get pods\nNAME                                           READY     STATUS      RESTARTS   AGE\nreefer-itgtests-job-x594k                      0/1       Completed   0          3m\n")),Object(a.b)("p",null,"and the job output should be like:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"$ oc get jobs\nNAME                      DESIRED   SUCCESSFUL   AGE\nreefer-itgtests-job       1         1            3m\n")),Object(a.b)("h2",null,"Output"),Object(a.b)("p",null,"If we want to inspect the output of the integration tests, we would need to get the logs for the pod that ran them:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"$ oc logs e2e-reefer-itgtests-job-x594k\n")),Object(a.b)("p",null,"The output of the integration test cases is made up of a brief description of the execution environment:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"-----------------------------------------------------------------\n-- Reefer Container Shipment EDA application Integration Tests --\n-----------------------------------------------------------------\n\nExecuting integrations tests from branch master of https://github.com/ibm-cloud-architecture/refarch-kc.git\nKafka Brokers: broker-0-hnkssdz.kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-3-hnkssdz.kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-5-hnkssdz.kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-2-hnkssdz.kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-1-hnkssdz.kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-4-hnkssdz.kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093\nKafka API Key: XXXXXXX\nKafka Env: IBMCLOUD\nOrders topic name: itg-orders\nOrder Command topic name: itg-order-commands\nContainers topic name: itg-containers\n------------------------------------------------------------------\n")),Object(a.b)("p",null,"Then, each of the three test cases outlined in the introduction of this readme file will get executed, each of them beginning with a header like:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"******************************************\n******************************************\n**********   E2E Happy Path   ************\n******************************************\n******************************************\n")),Object(a.b)("p",null,"After the header, the different tests within the test case will get executed. Each of these comes with a header and look like:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),'--------------------------------\n--- [TEST] : Voyage Assigned ---\n--------------------------------\n\n1 - Load the expected voyage assigned event on the order topic from its json files\nThe expected voyage assigned event is:\n{\n    "payload": {\n        "orderID": "a467070e-797e-40f9-9644-7393e8553f1f",\n        "voyageID": "101"\n    },\n    "timestamp": "",\n    "type": "VoyageAssigned",\n    "version": "1"\n}\nDone\n\n2 - Read voyage assigned from oder topic\n[KafkaConsumer] - This is the configuration for the consumer:\n[KafkaConsumer] - {\'bootstrap.servers\': \'broker-0-hnkssdz.kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-3-hnkssdz.kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-5-hnkssdz.kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-2-hnkssdz.kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-1-hnkssdz.kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-4-hnkssdz.kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093\', \'group.id\': \'pythonconsumers\', \'auto.offset.reset\': \'earliest\', \'enable.auto.commit\': True, \'security.protocol\': \'SASL_SSL\', \'sasl.mechanisms\': \'PLAIN\', \'sasl.username\': \'token\', \'sasl.password\': \'XXXXXXXX\'}\n.[KafkaConsumer] - @@@ pollNextOrder itg-orders partition: [0] at offset 2 with key b\'a467070e-797e-40f9-9644-7393e8553f1f\':\n    value: {"timestamp":1576667245430,"type":"VoyageAssigned","version":"1","payload":{"voyageID":"101","orderID":"a467070e-797e-40f9-9644-7393e8553f1f"}}\nThis is the event read from the order topic:\n{\n    "payload": {\n        "orderID": "a467070e-797e-40f9-9644-7393e8553f1f",\n        "voyageID": "101"\n    },\n    "timestamp": "",\n    "type": "VoyageAssigned",\n    "version": "1"\n}\nDone\n\n3 - Verify voyage assigned event\nDone\n\n')),Object(a.b)("p",null,"A summary of the test case execution is shown at the end of each test case:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"----------------------------------------------------------------------\nRan 7 tests in 64.262s\n\nOK\n")),Object(a.b)("p",null,"A final summary of all tests cases is shown at the very end and looks like the following:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"END RESULTS:\n\nTEST CASE - E2EHappyPath\n-----------------------------------\ntest1_createContainer...OK\ntest2_voyagesExist...OK\ntest3_createOrder...OK\ntest4_containerAllocated...OK\ntest5_voyageAssigned...OK\ntest6_orderAssignedREST...OK\ntest7_exportValues...OK\n-----------------------------------\nPASSED: 7\nFAILED: 0\n\nTEST CASE - SagaNoContainer\n-----------------------------------\ntest1_createOrder...OK\ntest2_containerNotFound...OK\ntest3_orderRejected...OK\ntest4_orderRejectedREST...OK\n-----------------------------------\nPASSED: 4\nFAILED: 0\n\nTEST CASE - SagaNoVoyage\n-----------------------------------\ntest1_createContainer...OK\ntest2_createOrder...OK\ntest3_containerAllocated...OK\ntest4_voyageNotFound...OK\ntest5_orderRejected...OK\ntest6_orderRejectedREST...OK\ntest7_containerUnassignedREST...OK\ntest8_exportValues...OK\n-----------------------------------\nPASSED: 8\nFAILED: 0\n\nTEST CASE - OrderRejection\n-----------------------------------\ntest1_createOrder...OK\ntest2_containerAllocated...OK\ntest3_voyageAssigned...OK\ntest4_orderAssignedREST...OK\ntest5_orderRejected...OK\ntest6_orderRejectedREST...OK\ntest7_containerUnassignedREST...OK\ntest8_voyageCompensated...OK\n-----------------------------------\nPASSED: 8\nFAILED: 0\n\nTEST CASE - SpoilOrder\n-----------------------------------\ntest1_disableBPM...OK\ntest2_sendAnomalyEvents...OK\ntest3_containerMaintenanceNeeded...OK\ntest4_containerOrderSpoilt...OK\ntest5_containerToMaintenance...OK\ntest6_containerInMaintenance...OK\ntest7_containerOffMaintenance...OK\ntest8_containerEmpty...OK\ntest9_enableBPM...OK\n-----------------------------------\nPASSED: 9\nFAILED: 0\n\nTEST CASE - Dlq\n-----------------------------------\ntest1_createContainer...OK\ntest2_sendAnomalyEvents...OK\ntest3_containerMaintenanceNeeded...OK\ntest4_containerAnomalyRetry...OK\ntest5_containerAnomalyDead...OK\n-----------------------------------\nPASSED: 5\nFAILED: 0\n")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-itg-tests-itgtests-mdx-3f34e9b5b2ae5ca20d6c.js.map