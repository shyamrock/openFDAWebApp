# openFDA-Web App from [Objectstream, Inc.]

Objectstream	began	working	on	creating	a useful Data query website using openFDA API data sets	on	June 22 2015.
###Link to [Prototype]
###Approach	for	Pool	Two	– Development	Pool
The	following	documents	our	development	approach	once	we	initiated	resources	to	create	our	prototype. We are	following	the	U.S.	Digital	Service	Playbook as the reference guideline for executing this project:
 - Product Manager		- Vishal	Maheshwari
 - Technical	Architect - Shyam	Nagarajan
 - Front End Web Developer -Depak	Sabu
 - DevOps	Engineer - Nabil	Soulane
 - Backend Web Developer- Vimal	Kovath
  
##### Our	Technology	Stack/Framework
######Development	technology and Tools:

```sh 
  Agile Project Management: Redmine
  Testing Framework: Protractor,Mocha,Chai,Jasmine, Selenium Webdriver
  Development Tools:Sublime Text 3, dillinger.io 
  
```

######Runtime Deployment technology stack:

```sh 
  Frontend client Technologies: HTML5, CSS3, Bootstrap 3, Angular JS
  Backend Server Technologies: Node JS, SailsJS
  Database: Redis for session store and MongoDB for model persistence
```
The above technologies was chosen to enable a clear seperation of client and server; where all the calls are made through RESTful webservices to backend servers. This allows for future enablement to mobile devices. Redis from Redis lab (SaaS) free-tier is used for session store and MondoDB from Mongolab(SaaS) free-tier is used for data persistence.

######We used DigitalOcean IaaS as our deployment infrastructure.

We	split	this	project	into	two	sprints of one week each.		Redmine	was	used to track and record 	our	Agile development approach. All	development	was	done iteratively	as per	scrum	practice.		Here’s	is the [product	backlog] and	[scrum meeting notes]. Daily Sprint (stand up)	meetings	and	Sprint retrospectives	were	both	employed	to	identify	issues	(bugs,	to	do	items,	etc.)	for this project. These	issues	were	captured	in	the	Redmine	project management	system	and	then addressed by	our	team.

The team wrote unit test classes for backend services. The end-to-end functional testing was also writen and performed. The Jenkins CI server invoked those test cases before deploying to the server. Please refer to [testing approach].

######We used	Jenkins	CI for the continuous	integration	and	continuous	deployment	of	the	GitHub	code	files.		
Additionally,	a	GitHub	plugin	for	Jenkins	CI	and	the	web	hook	component	of	GitHub	was	deployed	to automate	the	build	directly	from	GitHub.		
Here	is	a	[CI-CD document]	that explains in detail our	CI	and	CD	approach. DigitalOcean	IaaS	was	also	used	as	the	[server]	platform	to	host	the	CI	server.		


######For	source	control	management,	we	used GitHub	repository as our configuration management tool.	

######Docker	was	used	as	the	container	for	the	openFDA	prototype.		
######Here is the link to the [Docker file]	hosted	on	the	Docker	hub.
######Please refer to [Docker docs] for more details.	

Assuming	Docker	is	installed	in	your	machine,	the	following commands	will	run	the application	:

```sh 
   docker pull	shyamos/openfda_node_webapp
   docker run -d -p 80:1337 shyamos/openfda_node_webapp sails lift
```
We	continuously	monitored	the	deployment	infrastructure	using	our	Icinga	Monitoring	Server	(open	source enterprise montoring), which also	runs	on	the	Digital	Ocean	IaaS server.		Here	is	a	link	to [icinga display] showing	the	results	of	the	monitoring and alerts the users through email on any server issues.		

This	prototype	as	been	designed	to	be	easily	deployed	on	any	other	servers	or	local	machines.	This	assumes	that	node.js	is	and	Git	is	installed. Here are	the	detailed steps.


 - Install	nodejs:	https://nodejs.org/download/
 - Install	Git:https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
 - Open	terminal	in	Mac	or	Linux;	Command	Line	on	Windows	Systems
 - Run	“git clone https://github.com/shyamrock/openFDAWebApp.git”.
 - cd	“openFDAWebApp”.	
 - Run "npm	install".	may require Sudo	on	a	Mac	or	in	Linux.
 - Run	“sails	lift”.
 - Open the	application	in	a	browser	at	http://localhost:1317.


###Approach	for	Pool	Three	– Full	Stack	Pool

 - Product Manager - Vishal	Maheshwari
 - Technical	Architect - Shyam	Nagarajan
 - Front End Web Developer -Depak	Sabu
 - DevOps Engineer - Nabil	Soulane
 - Backend Web Developer- Vimal	Kovath
 - Interaction Designer- Johnson Eyadiel
 - Visual	Designer- Martin	Mathew

Define	the	Site	Use:
- What	data	would	provide	the	most	immediate	impact	for	the	researchers?
- What	ways	the	data	should	be	displayed	in	order	to	easily	understand	the	information?

Conclusions:
- Research	data	should	be	pulled	for	food,	device	and	drug	recalls.
- Data	should	report	across	multiple	timelines	(in	years)
- Researcher	should	be	able	to	enter	word(s),	phrase(s)	in	a search	field	in	order	to	pull	the	data	of	interest
- Researcher	should	be	able	to	request	data	to	be	displayed	as	various	graphs	

Here is the link to [stories].

Please	refer to	our [approach] to UI and UX	with Human	Centered	Design.

Please refer to this link to view the [responsive] web design of the site.

We executed the remaining tasks as mentioned in Pool Two approach.



[Objectstream, Inc.]: http://objectstream.com
[Prototype]:http://104.236.11.72/
[Docker file]:https://registry.hub.docker.com/u/shyamos/openfda_node_webapp/
[Docker docs]:https://github.com/shyamrock/openFDAWebApp/blob/master/docs/ContainerDeployment-Docker.pdf
[CI-CD document]:https://github.com/shyamrock/openFDAWebApp/blob/master/docs/ContinuousIntegrationandContinuousDevelopment.pdf
[product backlog]:https://github.com/shyamrock/openFDAWebApp/blob/master/docs/openfdadataqueryui-gantt.pdf
[scrum meeting notes]:https://github.com/shyamrock/openFDAWebApp/blob/master/docs/ScrumMeetingNotes.pdf
[stories]:https://github.com/shyamrock/openFDAWebApp/blob/master/docs/OpenFDA_User%20Stories.pdf
[approach]:https://github.com/shyamrock/openFDAWebApp/blob/master/docs/%20UX%20and%20UI%20design%20for%20OpenFDA.pdf
[responsive]:https://github.com/shyamrock/openFDAWebApp/blob/master/docs/RWD%20Sample.pdf
[icinga display]:https://github.com/shyamrock/openFDAWebApp/blob/master/docs/IcingaMonitoringServer.pdf
[testing approach]:https://github.com/shyamrock/openFDAWebApp/blob/master/docs/TestingApproach.pdf
[server]:http://104.131.53.248:8080/
