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
		    ],
		    biopic: "./images/biopic.jpeg",
		    display: function () {}
		},
		education: {
			schools: [
				{
					name: "",
					location: "",
					degree: "",
					majors: [],
					dates: 0,
					url: ""
				},
				{
					name: "",
					location: "",
					degree: "",
					majors: [],
					dates: 0,
					url: ""
				}
			],
		    onlineCourses: [
		    	{
					title: "",
					school: "",
					date: 0,
					url: ""		    		
		    	}
		    ],
		    display: function () {}
		},
		work: {
			jobs: [
				{
					employer: "",
					title: "", 
					location: "", 
					dates: "", // (works with a hyphen between them)
					description: "" 					
				}
			],
		    display: function () {}
		},
		projects: {
			projects: [
				{
					title: "",
					dates: "", // (works with a hyphen between them)
					description: "",
					images: [] // array with string urls					
				}
			],
		    display: function () {}
		}
	}

	var optopus = {
		init: function() {
			resumeHeaderView.init();
		},
		get_bio: function() {
			return resumeModel.bio;
		}
	}

	var resumeHeaderView = {
		init: function() {
			var view = this;

			// header section
			var bio = optopus.get_bio();
			HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
			HTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
			HTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);

			//HTMLcontactGeneric = HTMLcontactGeneric.replace("%data%", "xxxx");
			HTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
			HTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
			HTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
			HTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
			//HTMLblog = HTMLblog.replace("%data%", "xxxx");
			HTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);

			view.render();
		},
		render: function() {
			// header section
			$("#header").prepend(HTMLheaderRole);
			$("#header").prepend(HTMLheaderName);
			$("#header").append(HTMLbioPic);

			//$("#header #topContacts").append(HTMLcontactGeneric);
			$("#header #topContacts").append(HTMLmobile);
			$("#header #topContacts").append(HTMLemail);
			$("#header #topContacts").append(HTMLtwitter);
			$("#header #topContacts").append(HTMLgithub);
			//$("#header #topContacts").append(HTMLblog);
			$("#header #topContacts").append(HTMLlocation);
		}
	}
	optopus.init();
}());