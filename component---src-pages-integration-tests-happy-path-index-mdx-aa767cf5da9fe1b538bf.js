(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{dcun:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return r})),t.d(a,"default",(function(){return g}));t("91GP"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("q1tI");var i=t("7ljp"),s=t("013z");t("qKvR");function n(){return(n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var c,r={},o=(c="InlineNotification",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),d={_frontmatter:r},l=s.a;function g(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,i,s={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,["components"]);return Object(i.b)(l,n({},d,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)(o,{kind:"warning",mdxType:"InlineNotification"},"UNDER CONSTRUCTION"),Object(i.b)("p",null,"Here you can find the so called “happy path” integration test for the Reefer Containers EDA reference implementation. This test case tests the expected happy path for the application where a new order is created, the order gets a container and a voyage assigned and this new order becomes an assigned order. The following diagram depics roughly this path on a flow base fashion where the blue square rectangles, purple rounded rectangles and orange rectangles represent actions taken by the test case, events produced to the event backbone (either Kafka or IBM Event Streams) and object statuses respectively."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABZElEQVQoz5VRbU+DMBjk//8dP+niB7Oomy4zsombMEbGOyu0BfrCWjrLNIzFGOOlTZ62z13vWoM00vb3dpDDqiaUbiK43mUA1YySANTvXgLK5vgLDETFdOlNLT/ZA4Ty2Sp4WGy3YVpX+TrE9+YmhFz3qTPlXBp6MooZQT+FD4cGw0QNeae6FUJwLoUwSirmS0+Pior+WEOI9t3dP84dLypplSV5/ebm9g6DHODIcSfXFIRGReWL5euhiwuyVG5QmGs/ykrBqwIzy4ndACKMCQhS67kuss42J4gTOMyjOrS921Z1miVKGl53y/a71ZBS7sxJsJzqJOdYSu0WU2dyy1CcAXAzNq9GTzEgjo9G48XKy9tTl6FzQ3sOPuZSHHqyvqnwrNiacYIp42s3tpwgBTBM4WoTJaD6cmh0BqXQEmr4rL3KYINVmQ5/8c/Hv9EpCEbc2V1mv6q2/TdZNkxHg95qSP4EQLJ1ItzJYtIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"flow",title:"flow",src:"/refarch-kc/static/3c243087182681be4436e6ac1e67248f/2faef/Slide1.png",srcSet:["/refarch-kc/static/3c243087182681be4436e6ac1e67248f/7fc1e/Slide1.png 288w","/refarch-kc/static/3c243087182681be4436e6ac1e67248f/a5df1/Slide1.png 576w","/refarch-kc/static/3c243087182681be4436e6ac1e67248f/2faef/Slide1.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,"The idea behind this integration test case is to be used as a validation for any new deployment of the Reefer Containers EDA reference implementation. This test case is intended to be extended along with the creation of other tests cases to verify other scenarios or edge cases."),Object(i.b)("h2",null,"Tests"),Object(i.b)("p",null,"The following sequence diagrams represent each of the tests within this happy path integration test case."),Object(i.b)("h3",null,"Test 1 - Create container"),Object(i.b)("p",null,"This tests will make sure that a container with the appropriate capacity and location for the expected new order to be created exists."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABeUlEQVQoz41RPU/DMBDt/2dmYGBgQGJALAyAxADiF4AQJJBCQwIlcezYju0m/rhwSaqWioWX0/l80dM9v5tprV+i6C1JPvM8SZIojquKsnoApZRzDiEEZ8fs+uA3NQDMwPv5xVl8eiSKZZbnpCyFVIxxIRrBhQ2Q3V0/He1nt1fPxwfZzWV8cphenz8c7LH4cdb3YEgh8qw1uqBS6tY6Z51HdJ0L0GtS8sXcVCVP3zQpePpuyiVLItsIJPcAvVxZKcVDQuefCjs+wIB+B9M1/KonMshmxWrOpUoyblpvHWA0ynDR1LXQ2PJgVu41E7Vsg3f4rckheMaq5bJYpB/oFdJQLYb36EzAPAgZ5UjtogWrGW3bbktWijN0qabGKOcHxb91B5jycDgfRgqsyQjRtKSiX0QJhWaBtcMuUAKqxZgK64ZmZ3fJOAIf3Ehx/1Km3xvD1gP/TIYdMq68kZSQqiJF165Q12j2/8gb69d5ePD2ul3V1ByP6dcP69l4BWOLT9MAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"create container",title:"create container",src:"/refarch-kc/static/762f9273375d8dcd62185fd00bb80d73/2faef/Slide2.png",srcSet:["/refarch-kc/static/762f9273375d8dcd62185fd00bb80d73/7fc1e/Slide2.png 288w","/refarch-kc/static/762f9273375d8dcd62185fd00bb80d73/a5df1/Slide2.png 576w","/refarch-kc/static/762f9273375d8dcd62185fd00bb80d73/2faef/Slide2.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h3",null,"Test 2 - Voyages exist"),Object(i.b)("p",null,"This test will make sure the expected voyages exist."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABV0lEQVQoz5VRyU7DMBDt/3Pm0AOHHpA4IC4cAIkDSHwBQpBA2qptqi7ZnKRZvMwMY5uWigOCkTV+sd/zvMkMmqZ5D4JJFC3jOIqiIAzTNMuLgnOSJFIqQgStEAC0JjAHjIgDNGZ8cxVejsR6NZ3N1+tNVe3yXIiyEkIYovjp/nV0Gj/evZ0PFw+34cXZ7P76eXiShy8DImyTTb1c9G3byw7ASKm14QClNBC16VbMxp3NkzbZlvNps11lH4GqSxYTEtWdTrM0iqt11vOJAbaGgGyZPOFHNm5zYtsC16BE9EUtGbCSAzzR3oPt3LjssLF8dGIkqYwo6129Y4bSyG/xYmCMXR4oBQ7bnyUV7CsjGUOH8G6PKpMH4DbriUibvZhd1xVPp8jzvKoqr/xFbHt2TXsxSNl3Xcczl1LyLfxdbNnwD9ucNezFTo8HMfp5IH0ffXGOBuY+PgFRyH1kDuiFhgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"voyages exist",title:"voyages exist",src:"/refarch-kc/static/176ebc96afe9672ba3aa3725f49626ea/2faef/Slide3.png",srcSet:["/refarch-kc/static/176ebc96afe9672ba3aa3725f49626ea/7fc1e/Slide3.png 288w","/refarch-kc/static/176ebc96afe9672ba3aa3725f49626ea/a5df1/Slide3.png 576w","/refarch-kc/static/176ebc96afe9672ba3aa3725f49626ea/2faef/Slide3.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h3",null,"Test 3 - Create order"),Object(i.b)("p",null,"This test will make sure that the expected new order event is created along with a new order command event."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABjklEQVQoz32RPW/cMAyG7/937pAhQ4YCGYouGdoCGVqgvyAIUvtqO/adff6SaUk++6wvqjy7CYpDEEIgCIGP+PLVZhzHbRAkUVTkeRRFQRgy1kF/DsaY0tojOqPROWeMd/a1RsQNWht//RJ+vhFVucv3TdNIeQTgQgyCC+t9/uv+6eZj/vP7709X+x/fwtvr7P7u4eoDhI8b73Fqa1ns1TS2MIyTMsauRynt0E+s4Wl8zlkytY3YPY9NCVGgB0GwR+/lpBlAWkpxNA5RG9JHGQmmUNavbRd5gRHFoLikodY6P2scJvMQQdGImvE/aRukoOYTaaFmevXswpI3RNJVnPOsaAcpuw5oZ5rJQFY16wG2WX9oj8Zou8hw/+V1sudyrKpqmzJx1HRDfSR+OulZWed8epBKzW/DZHzblgB98pwVh/J0mtdVQep439d1TRZcYP/gRbUPEhbGZBfnXM7aUTc5bSzthFprKt6GX2XXdbPNOvkim87KULwLO9N3FcFJuiPxq/9LrOzL9+DlV/0F1Yx0stwuwjUAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"create order",title:"create order",src:"/refarch-kc/static/6694a75feb28b790df009feb932f8db3/2faef/Slide4.png",srcSet:["/refarch-kc/static/6694a75feb28b790df009feb932f8db3/7fc1e/Slide4.png 288w","/refarch-kc/static/6694a75feb28b790df009feb932f8db3/a5df1/Slide4.png 576w","/refarch-kc/static/6694a75feb28b790df009feb932f8db3/2faef/Slide4.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h3",null,"Test 4 - Container Allocated"),Object(i.b)("p",null,"This test will make sure that the expected container is assigned to the new order."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABbElEQVQoz41RyU7DMBDN/3Pm0AOXSkgcEBcOLOIAfAJCkNC0TRo3aRLHsbM2XsY4MZTl1JE1fnqe8ZvFadv2w3VXvo8QWvi+63kYF6QsCTGH4KLouw6kAKWUEFpJJbjFAOCAlMubK+9yXudZiLZZllV1QwhlVc0YG6TaPN+/zU+jp7v381n0eOtdnIUP1y+zE+K9OlpDm6cMBWkSZ7joB74fuJCjDQMHrTuc02DZ44yGqy5Pabhus4T4Lq/ZmKy1RriPElzQJtg1CrQCUxoIOb3pP17CD3YmKNGOZEUVjYYoqwfOAbT4Chx7PHghJixHPyYrJSlJwiDYRGjqGrdmSIdkEwDWj5cl1UQ59nkR0U1CS9au48Z0aiK4UFwckWxqyQsc7/IwDJJ4azY1FXicskHTYioz7RwXddNb5T1XUppVGmy9svw/ZcCkTHO8RJUhzSyMyLHKoERJ0u02juPErBfG7+yY9W/7JuGwqk9M1Ha+SXqkKgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"container allocated",title:"container allocated",src:"/refarch-kc/static/f961fda55f2f60c9b40207f6b53a47ec/2faef/Slide5.png",srcSet:["/refarch-kc/static/f961fda55f2f60c9b40207f6b53a47ec/7fc1e/Slide5.png 288w","/refarch-kc/static/f961fda55f2f60c9b40207f6b53a47ec/a5df1/Slide5.png 576w","/refarch-kc/static/f961fda55f2f60c9b40207f6b53a47ec/2faef/Slide5.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h3",null,"Test 5 - Voyage Assigned"),Object(i.b)("p",null,"This test will make sure that the expected voyage is assigned to the new order."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABPUlEQVQoz5VRPU/DMBDN/2dm6MDQAYkBsTAAUgeQ+AUIQYLSViFt8+U4ThOnie07Y7tVW5BA9A135/M9vfvwOOcfvj8Lw+ViEYahHwSElLSqSFnmeVExBkqBFAgAUmo4xIjooVLTu5vgesyS1TyKsyxbr1tKGavXrGICMH6evI3P46eH98tR/HgfXF1Ek9uX0RkNXj2tkRdZmyxBiE3fA6hBSKkMYBACtO5IzqLpxtpZV+T155znCQ190dSGbLERynTbNLxuJSACagCUSqP7/c1asumed70Zvu2GpOzRZmxSKleDdkZrFfyIPXQFUcrTojH8xqh3vVmHkCDkVkCD8+Dcsd0pD2YzTg1dz9+U/yabxfOGEkLSNE2SFaWVI+t/ks3Z5DZwwBPIps7Mv8dpbW/H3pNxf49D7vA8PtUXtWh8+N8xy1oAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"voyage assigned",title:"voyage assigned",src:"/refarch-kc/static/86221dc4861d1dd059ab785049f826fc/2faef/Slide6.png",srcSet:["/refarch-kc/static/86221dc4861d1dd059ab785049f826fc/7fc1e/Slide6.png 288w","/refarch-kc/static/86221dc4861d1dd059ab785049f826fc/a5df1/Slide6.png 576w","/refarch-kc/static/86221dc4861d1dd059ab785049f826fc/2faef/Slide6.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h3",null,"Test 6 - Order Assigned"),Object(i.b)("p",null,"This test will make sure that the resulting order is as expected. That is, it transitions to the assigned status and has a container and voyage assigned to it."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABbElEQVQoz5WRO2/bMBSF/f87d0iBDhkCZCiydGgDeGiB/IIgaKxCcRJHbixLpihStK37Yq4oIy3yGHpBfCBInMtzeCchhN+z2TzPl0WR5/ksy+rNZmOMaZqqrlvnoggjCDMjRqbnvYhMhOjm21n25divy7uHolyVznXGWOe8tRYkFhfTX8cfi5/n1yefHn58z04/30+/Xh59MNnVRBtvq9ItF5tqbW1LhACINBQAcIzbet3c3iTOle3iNqwfTT4D305ijBJj6Gn5Z1UZvyh3zIKkhoRYDeplpAEHJhw4iJkpbPc9kGlaY70qUaMRQ9JrF0BWg5ioeQfSwCQm6FytCeu6Cp0T0fOheOwfI6ZHR45eRh5s7/ZQFIX3Yad/KfIfYt10W3Q+GNvNly2qVY5qWG3qla4eh0aAb4oJXdvY1q9WpQ44ZZa/mVl60Iwp+RtinTn0iLDf73RCrzMTv2/7Rck4CYnyz0lKJy9G9QTBCnscqW7N4QAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"order assigned",title:"order assigned",src:"/refarch-kc/static/60389d67abb4ca3ee1126546eb148bf7/2faef/Slide7.png",srcSet:["/refarch-kc/static/60389d67abb4ca3ee1126546eb148bf7/7fc1e/Slide7.png 288w","/refarch-kc/static/60389d67abb4ca3ee1126546eb148bf7/a5df1/Slide7.png 576w","/refarch-kc/static/60389d67abb4ca3ee1126546eb148bf7/2faef/Slide7.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-integration-tests-happy-path-index-mdx-aa767cf5da9fe1b538bf.js.map