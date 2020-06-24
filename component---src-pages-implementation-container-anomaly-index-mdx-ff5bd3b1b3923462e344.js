(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"xlG/":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return h}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),r=n("013z");n("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i,c={},s=(i="InlineNotification",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",e)}),l={_frontmatter:c},p=r.a;function h(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(p,o({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(s,{kind:"warning",mdxType:"InlineNotification"},"UNDER CONSTRUCTION"),Object(a.b)("h2",null,"Introduction"),Object(a.b)("p",null,"We have implemented a ",Object(a.b)("a",o({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-reefer-ml/"}),"Container Anomaly")," use case whereby our Reefer containers will send telemetry health status (1), in terms of temperature, CO2 level, power level, etc, to a ",Object(a.b)("a",o({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-reefer-ml/infuse/dev-scoring/"}),"Reefer Telemetry Agent")," (4), that we have built using the Reactive Messaging feature from the MicroProfile 3.0 specification onwards, through a ",Object(a.b)("em",{parentName:"p"},"reeferTelemety")," topic (3). This Reefer Telemetry Agent will, in turn, call an ",Object(a.b)("a",o({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-reefer-ml/analyze/ws-ml-dev/"}),"Anomaly Detection Scoring service")," (5) we have built following our ",Object(a.b)("a",o({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-data-ai-analytics/"}),"Data and AI Reference Architecture")," that will determine whether there is an anomaly in a given containers based on the data sent by their IoT sensors. If an anomaly is predicted, a ",Object(a.b)("strong",{parentName:"p"},"ContainerAnomaly")," event will get dropped into the ",Object(a.b)("em",{parentName:"p"},"containers")," topic the container management component (7) of our Reefer Container Reference Application listens to. The Container management component will call an ",Object(a.b)("a",o({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-reefer-ml/bpm/readme/"}),"IBM Business Process Management (BPM) process")," (8) which will end up with a field engineer fixing the container."),Object(a.b)("img",{src:"https://raw.githubusercontent.com/ibm-cloud-architecture/refarch-reefer-ml/master/docs/images/cp-solution-view.png",alt:"use case"}),Object(a.b)("h2",null,"Container Anomaly process"),Object(a.b)("p",null,"This section outlines the process the container management component of our Reefer Container Reference Application follows to handle the ",Object(a.b)("strong",{parentName:"p"},"ContainerAnomaly")," events for a given container:"),Object(a.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(a.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAAB3ElEQVQoz2WQ3W7TMBTH+4zwBNsuK95jT8AVEkLcAKt2h7ahCSGgm3bR0Wrt1grark2aNHHs2vFHnPgLxx0SAuv4L/n4/P7n2B0hxHIxn02ncRTFcTyfLzZJAkCeZVmSJF4xJghCCHKfKymxzlhrjGq8dgQCs9O303evssmPOE0LkFdC5DkoIPQkZ4xVMr+/Hb48XvYvL369v1ycJMNrf8yGNx3vQTbrYrUqEUKYEVrto2TSa4FKgAgGMJ1McDRaZYOURpKgYjaWGHacc412P1P5sGZxXsWgWmc8ysR6y1MoHxbF1WCZbgjAusyHEj8qAXFybZ32YMdar+52Bs9v0pKrqtaU1VQoITUkde9z9GVKssaNI064Qcxwhusy1kq1sN+eNyZ4hOXTxobQdqdcdvpx231R9AdFKQCiTWOdMkoZz+1hq7Tdj9BQmnzv67o2stZC+ozs9XYHB7Z/RSkhCNnQRofiJ1jrp86GMfr1WyArzYSfSH444d2uXK7bSu9+dsYOD5u7caP1v3DLh7F9Quu2C3/9ZvfsOR/fb9Gu4HV1/okeHcnRSCr1H+yf0GjfcB86qL9T7e86iGWMOXJWhPo/8F8f1gI2RMDE7jGdXghOES4RYd7aNo0KZr8By1pjvD9Y3/EAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"sequence diagram",title:"sequence diagram",src:"/refarch-kc/static/59344bcf8d9dbdc6f9f428c1396f454b/2faef/Slide1.png",srcSet:["/refarch-kc/static/59344bcf8d9dbdc6f9f428c1396f454b/7fc1e/Slide1.png 288w","/refarch-kc/static/59344bcf8d9dbdc6f9f428c1396f454b/a5df1/Slide1.png 576w","/refarch-kc/static/59344bcf8d9dbdc6f9f428c1396f454b/2faef/Slide1.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(a.b)("p",null,"As we can see in the image, the container management component called ",Object(a.b)("strong",{parentName:"p"},"Spring Containers")," (since it is written using the Spring Framework) listens to the ",Object(a.b)("strong",{parentName:"p"},"containers")," topic. The Spring Containers component expects ",Object(a.b)("strong",{parentName:"p"},"ContainerAnomaly")," events. However, it will not trigger the “container to maintenance” process until it receives 3 ContainerAnomaly events for a given container (this decreases the load on the BPM process)."),Object(a.b)("p",null,"Once we have received 3 ContainerAnomaly events for a specific container, the Spring Container component will:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Call the BPM process that will manage the assignment of a field engineer to have a look at and fix, if needed, the container at the destination port."),Object(a.b)("li",{parentName:"ol"},"Set the container into ",Object(a.b)("strong",{parentName:"li"},"MaintenanceNeeded")," state which will prevent that container from getting any order assigned. This is important as containers does not always fail while carrying goods overseas in a ship but also while they are at the docks."),Object(a.b)("li",{parentName:"ol"},"Send an ",Object(a.b)("strong",{parentName:"li"},"OrderSpoilt")," event to the orders topic, in case the container was allocated to an order and was carrying goods overseas, to notify any other Reefer Container Reference Application component that is interested on this event.")),Object(a.b)("p",null,"Once the BPM process has received the call from the Spring Container component, it will trigger a process whereby a field engineer will get assigned the task of checking and fixing the container, either at the dock where it is if it was not carrying goods overseas in a ship when the anomaly happened or once it gets to the destination port otherwise. Before the field engineer starts its work, the BPM process will interact to put the container into ",Object(a.b)("strong",{parentName:"p"},"InMaintenance")," state. It will also interact to get the container off maintenance mode into ",Object(a.b)("strong",{parentName:"p"},"Empty")," state, so that the container is again available for order allocation, once the container has been fixed."),Object(a.b)("p",null,"As a result of the ",Object(a.b)("strong",{parentName:"p"},"OrderSpoilt")," event sent into the orders topic, the Order Command component of our Reefer Container Reference Application that manages the orders will set the order, which the container with anomalies was allocated to and carrying goods for, to ",Object(a.b)("strong",{parentName:"p"},"Spoilt"),". This could potentially trigger a customer care interaction process whereby the customer gets notified."),Object(a.b)("h2",null,"IBM Business Process Manager (BPM) process"),Object(a.b)("p",null,"As we can see in the diagram and explanation above, the Spring Containers component calls a BPM process for a field engineer to get assigned to checking and fixing the potentially bad container. However, the fact that our Spring Containers component calls another, potentially external, service through an HTTP or RPC call introduces a dependency that could actually be troublesome if the call fails."),Object(a.b)("p",null,"What can we do in this case? We have a look at this usual scenario in distributed systems in the ",Object(a.b)("a",o({parentName:"p"},{href:"../dlq/dlq/"}),"Dead Letter Queue section"),"."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-implementation-container-anomaly-index-mdx-ff5bd3b1b3923462e344.js.map