# openFDAWebApp from [Objectstream, Inc.]

Objectstream	began	working	on	creating	a useful Data query website using openFDA API data sets	on	June 22 2015.
###Link to [Prototype]
###Approach	for	Pool	Two	– Developer	Pool
The	following	documents	our	development	approach	once	we	initiated	resources	to	create	our	prototype. We are	following	the	U.S.	Digital	Service	Playbook as the reference guideline for executing this project:
 - Product	owner	and	lead		- Vishal	Maheshwari
 - Technical	Architect - Shyam	Nagarajan
 - Front	End	Developer -Depak	Sabu
 - Dev	Ops	Engineer - Nabil	Soulane
 - Backend	Developer- Vimal	Kovath
  
##### Our	Technology	Stack/Framework
######Development	technology and Tools:

```sh 
  Agile Project Management: Redmine
  Testing Framework: Protractor,Mocha,Chai,Jasmine
  Development IDE:Sublime Text 3
```

######Runtime Deployment technology stack:

```sh 
  Frontend client Technologies: HTML5, CSS3, Bootstrap 3, Angular JS
  Backend Server Technologies: Node JS, SailsJS
  Database: Redis for session store and MongoDB for model persistence
```
The above technologies was chosen to enable a clear seperation of client and server; where all the calls are made through RESTful webservices. This allows for future enablement to mobile devices.

#####We used DigitalOcean Iaas for our deployment infrastructure.

We	split	this	project	into	two	sprints.		Redmine	was	used to implement	our	Agile development	approach.		All	development	was	done iteratively	as per	scrum	practice.		Here’s	a	link to	the	product	backlog and	scrum	meeting	notes.  Sprint	daily	meetings	and	Sprint retrospectives	were	both	employed	to	identify	issues	(bugs,	to	do	items,	etc.)	with	the	technology	build. These	issues	were	captured	in	the	Redmine	project management	system	and	then	closed	by	our	team.

We used	Jenkins	CI for the continuous	integration	and	continuous	deployment	of	the	GitHub	code	files.		Additionally,	a	GitHub	plugin	for	Jenkins	CI	and	the	web	hook	component	of	GitHub	was	deployed	to automate	the	build	directly	from	GitHub.		
Here	is	a	[CI-CD document]	that explains in detail our	CI	and	CD	approach. DigitalOcean	IaaS	was	also	used	as	the	server	platform	to	host	the	CI	server.		

[Objectstream, Inc.]: http://objectstream.com
[Prototype]:http://104.236.11.72/
[CI-CD document]:https://github.com/shyamrock/openFDAWebApp/blob/master/docs/ContinuousIntegrationandContinuousDevelopment.pdf
