$(function(){
	var resumeModel = {
		bio: {
			name : "Jorge García Barderas",
		    role : "Product Manager · UX UI designer",
		    contacts : {
				mobile: "630 958 081",
				email: "jorgebarderas@gmail.com",
				github: "https://github.com/JorgeBarderas",
				twitter: "@jorgebarderas",
				location: "Madrid - Spain"
		    },
		    welcomeMessage: "Hi! This is my life",
		    skills: [
		    	"UI/UX Design: Adobe Creative Suite",
				"Development: C++, C#, Java, Phython, Ruby",
				"Web Development: HTML5, CSS3, Javascript, Backbone, AngularJS, Bootstrap, SASS, LESS, Django, Rails",
				"Wireframing: Moqups, Balsamiq, Axure",
				"SO: Windows, Mac OS X, iOS"
		    ],
		    biopic: "./images/biopic.jpeg"
		},
		education: {
			schools: [
				{
					name: "Europe",
					location: "Madrid (Spain)",
					degree: "Module I. Administrative technician",
					dates: "1992-1994"
				},
				{
					name: "Paloma",
					location: "Madrid (Spain)",
					degree: "Module II. Upper Technician in Graphic Arts",
					dates: "1994-1997"
				},
				{
					name: "U.N.E.D University",
					location: "Madrid (Spain)",
					degree: "Computer Engineering",
					dates: "1997-2001"
				}
			],
		    onlineCourses: [
		    	{
					title: "An Introduction to Interactive Programming in Python",
					school: "Coursera",
					date: "June 2013",
					url: "https://www.coursera.org/course/interactivepython"		    		
		    	},
		    	{
					title: "Human-Computer Interaction",
					school: "Coursera",
					date: "June 2013",
					url: "https://www.coursera.org/course/hci"		    		
		    	},
		    	{
					title: "Learn to Program: Crafting Quality Code",
					school: "Coursera",
					date: "April 2013",
					url: "https://www.coursera.org/course/programming2"		    		
		    	},
		    	{
					title: "Web Application Architectures",
					school: "Coursera",
					date: "April 2015",
					url: ""		    		
		    	},
		    	{
					title: "JavaScript Design Patterns",
					school: "UDACITY",
					date: "April 2015",
					url: "https://www.udacity.com/"		    		
		    	}
		    ]
		},
		work: {
			jobs: [
				{
					employer: "Pixelware, S.A.",
					title: "Developer", 
					location: "Tres Cantos, Madrid (Spain)", 
					dates: "2001-2003", // (works with a hyphen between them)
					description: "I started working while I was studying a degree in Engineering. The main activity was the development of an ECM/BPM Platform in C++. Platform which we later migrated to ASP.NET with C#." 					
				},
				{
					employer: "Pixelware, S.A.",
					title: "Development Manager", 
					location: "Tres Cantos, Madrid (Spain)", 
					dates: "2003-2005", // (works with a hyphen between them)
					description: "During this period I became the manager of the whole team, including Helpdesk, Development and R&D departments." 					
				},
				{
					employer: "Pixelware, S.A.",
					title: "Presale", 
					location: "Tres Cantos, Madrid (Spain)", 
					dates: "2005-2007", // (works with a hyphen between them)
					description: "During this period I became the manager of the whole team, including Helpdesk, Development and R&D departments." 					
				},
				{
					employer: "Pixelware, S.A.",
					title: "Project Manager", 
					location: "Tres Cantos, Madrid (Spain)", 
					dates: "2007-2008", // (works with a hyphen between them)
					description: "During this period I became the manager of the whole team, including Helpdesk, Development and R&D departments." 					
				},
				{
					employer: "Pixelware, S.A.",
					title: "Marketing Manager", 
					location: "Tres Cantos, Madrid (Spain)", 
					dates: "2008-2011", // (works with a hyphen between them)
					description: "I did the work of Marketing Manager of the company, functionally defining the products to sale and designing its output to market with the Technical and Sales departments." 					
				},
				{
					employer: "Pixelware, S.A.",
					title: "Product Manager", 
					location: "Alcobendas, Madrid (Spain)", 
					dates: "2011-Currently", // (works with a hyphen between them)
					description: "Managerial and strategic functions in the company. I have taken over the main product of the company, responsible for its functional design, engineering development and assuming the role of project manager for all deployments during this period. I manage a team including Helpdesk, QA, maintenance, development and business consulting departments."
				}
			]
		},
		projects: {
			projects: [
				{
					title: "Layers",
					dates: "2014", // (works with a hyphen between them)
					description: "Slider panel jquery plugin",
					images: [] // array with string urls					
				},
				{
					title: "Identity",
					dates: "2014", // (works with a hyphen between them)
					description: "Easy way to create an user avatar",
					images: ["https://dl.dropboxusercontent.com/u/2266596/projects/Identity/screenshot.png"] // array with string urls					
				},
				{
					title: "NavPanel",
					dates: "2014-2015", // (works with a hyphen between them)
					description: "Navigation panel",
					images: [] // array with string urls					
				}
			]
		}
	}

	var optopus = {
		init: function() {
			resumeHeaderView.init();
		},
		get_bio: function() {
			return resumeModel.bio;
		},
		get_work: function() {
			return resumeModel.work;
		},
		get_projects: function() {
			return resumeModel.projects;
		},
		get_education: function() {
			return resumeModel.education;
		}
	}

	var resumeHeaderView = {
		init: function() {
			var view = this;

			view.render();
			initializeMap();
		},
		render: function() {
			var view = this;

			var bio = optopus.get_bio();
			// header section
			$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
			$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
			$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
			$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

			$("#header #topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
			$("#header #topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
			$("#header #topContacts, #footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
			$("#header #topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
			$("#header #topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

			$("#header").append(HTMLskillsStart);
			$.each(bio.skills, function(){
				$("#skills").append(HTMLskills.replace("%data%", this));
			});

			var work = optopus.get_work();
			// work section
			$.each(work.jobs, function() {
				var job = this;
				var $block = $(HTMLworkStart);
				$block.append(HTMLworkEmployer.replace("%data%", job.employer));
				$block.append(HTMLworkTitle.replace("%data%", job.title));
				$block.append(HTMLworkDates.replace("%data%", job.dates));
				$block.append(HTMLworkLocation.replace("%data%", job.location));
				$block.append(HTMLworkDescription.replace("%data%", job.description));
				$("#workExperience").append($block);
			});

			var projects = optopus.get_projects();
			// projects section
			$.each(projects.projects, function() {
				var project = this;
				var $block = $(HTMLprojectStart);
				$block.append(HTMLprojectTitle.replace("%data%", project.title));
				$block.append(HTMLprojectDates.replace("%data%", project.dates));
				$block.append(HTMLprojectDescription.replace("%data%", project.description));
				$.each(project.images, function () {
					var img = this;
					$block.append(HTMLprojectImage.replace("%data%", img));
				});
				$("#projects").append($block);
			});

			var education = optopus.get_education();
			// education section
			$.each(education.schools, function() {
				var school = this;
				var $block = $(HTMLschoolStart);
				$block.append(HTMLschoolName.replace("%data%", school.name));
				$block.append(HTMLschoolDegree.replace("%data%", school.degree));
				$block.append(HTMLschoolLocation.replace("%data%", school.location));
				$("#education").append($block);
			});
			$.each(education.onlineCourses, function() {
				var course = this;
				var $block = $(HTMLonlineClasses);
				$block.append(HTMLonlineTitle.replace("%data%", course.title));
				$block.append(HTMLonlineSchool.replace("%data%", course.school));
				$block.append(HTMLonlineDates.replace("%data%", course.date));
				$block.append(HTMLonlineURL.replace("%data%", course.url));
				$("#education").append($block);
			});

			// map section
		}
	}
	optopus.init();
}());