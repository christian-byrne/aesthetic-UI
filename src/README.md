
## History and Background of this Repo

Before I started learning about the big frontend frameworks, CSS frameworks, component libraries, UI modules, etc., I was just learning the basics in school -- starting with my first HTML page, to learning CSS selectors and preprocessors, to event-based programming, to backend APIs and runtimes, databases, ORM, templating security, to typescript and type-oriented workflows. 

There was a lot of time between my first hello-world in js and my first React app. Or between my first grid in CSS to my first boostrapped app. 

In the meantime, while I was learning the basics, I was often thinking about how my web development school assignments were repetitive or would benefit from more abstracted ssytems that could provide boilerplates or global configurations. 


I was thinking about web development much more like a software developer than a frontend developer during this time. To me, that distinction was never even apparent until I started reading subreddits dedicated to web development. I think that when I started learning (December 2020), this distinction had already been blurred -- at least that's my perspective. 

Anyway, at first I started to have the attitude of a CSS purist, and I for some reason never wanted to use any inline HTML attributes if I didn't have to. I thought it was more extendable and better practice (as in, better for practicing my skills) to only use CSS selector logic. I believed that inline HTML declarations were antiquated, especially after I learned that they share the lexical scope with the rendered node they are attached to. 

I got really into CSS and watching YouTube videos by CSS devs, amazed by what they could do. I really liked their use of grids, formulas, :root variables and I thought it was the best way to make extendable, scalable, and dynamic pages. As I started practicing more and more with these techniques, and applying them to my school projects, portofolio site, and codepen tinkering, I found that you could, in theory, just make a single CSS class, combined with a list of :root variables, that is attached to every single element, and that would be a mini, fully-opinionated CSS framework. From then on, I tried this approach to all my assignments. 

My next progression was almost exactly the same, except with JS instead of CSS. 

Later I would read comment from a veteran dev in /r/webdev about how the "shiny object syndrome" applies to cs -- how developers will often fall in love with new/trendy frameworks or methods, thikning they are amazing and flawless, and thereby dismiss some of the advantages of older frameworks (or at least dismiss the fact that advantages are largely dependent on the context). 

The lesson in the end was that, while learning and implementing new tehcnologies is seemingly one of the most important skills for a developer, it's still important to be able to think rationally about new tehcnologies and understsand when they are, in fact, not beneficial to implement (even if that is the minority of situations). Or, perhaps, to be able to distinguish between a developer who is reticient to adopt new technologies because they are lazy and inveterate from a developer who is rightfully reticient to adopt new technologies because the older ones have specific advantages in their given contenxt.

I don't have the experience to know the extent to which this is true, but I am able to recognize that I was thinking too black-and-white about frameworks from day one of my education. Whenever I would learn a new technology, I would start to see the older ones as antiquated and inefficient -- without any real reasoning to justify that bias.

As a result, when I started to become a JS purist, I wanted to make my webapps be 99% backend JS code (and later, TypeScript), with a single index.html page that had 5 lines, and maybe a folder for images or fonts. I combined this approach with my previous approach to global CSS logic, and started to try to make some modules that were like isomorphic web app constructors. I don't know what they would be called ("fully-opinionated isomorphic frontend engines"?), but the idea is that you just import the class for the engine, then pass arguments about how you want the page structured, and 99% of the CSS and DOM manipulation is abstracted and automated. The result being that you could create a webapp with a large number of dynamic pages and features -- and that almost every aspect of the page would be dynamic.

In the end, I learned that my approach had tons of flaws and fundamental misunderstandings about efficiency, the rendering process, extendability, network usage, security, and so on. And more importantly, that technologies already exist to accomplish the same goals I tried to, but using methods and philosophies which are actually efficient and scalable -- not to mention secure, accessible, mobile-first, and optmized. My current outlook is that it is almost always better to use existing frontend and CSS frameworks to build large-scale dynamic webapps, and to implement CMS systems to build webapps/pages for smaller clients. 

Nevertheless, it was still really fun to make these engines while I was at it. This repo contains the last one I made before I transitioned to modern frontend frameworks. Thank you for reading.