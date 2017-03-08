var bio = {
  name: "Rob Hern",
  role: "Junior Web Developer",
  contacts: {
    mobile: "07941 878 383",
    email: "robertjhern@gmail.com",
    github: "@robhern135",
    twitter: "@robhern",
    location: "Essex/ London"
  },
  welcomeMessage: "Welcome to my Resume! After having worked for 3 years in Television for companies such as ITV, Sky, BBC, and Netflix I am currently retraining as a Front End Web Developer in Udacity's Nanodegree Course while building up my skillset and portfolio with personal projects. This fully responsive resume is part of Project 2 of the course! If you have a project you would like to discuss please do not hesitate to get in touch.",
  skills: ["HTML", "CSS", "JQuery", "Javascript", "Bootstrap"],
  bioPic: "images/me.jpg",
};

bio.display = function() {
  //BIO -------------
  var formattedRole =
    HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);

  var formattedName =
    HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  var formattedBioPic =
    HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").append(formattedBioPic);

  var formattedWelcome =
    HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcome);

  //Begin contact object stuff

  var formattedMobile =
    HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail =
    HTMLemail.replace("%data%", bio.contacts.email);
  var formattedTwitter =
    HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedGitHub =
    HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation =
    HTMLlocation.replace("%data%", bio.contacts.location);

 $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGitHub, formattedLocation);

  $("#header").append(HTMLskillsStart);
  for (j = 0; j < bio.skills.length; j++) {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[j]);
    $("#skills").append(formattedSkills);
  }

}; //end of function



// BIO ENDS
// WORK STARTS

var work = {
  jobs: [{
      employer: "Arrow Media",
      title: "Casting Consultant",
      location: "Oxford St, London",
      dates: "Nov-Dec '16",
      description: "Full casting and logistical planning of a cast of 80 actors and extras across 6 episodes for 'Engineering Space', a documentary drama about historical NASA Missions for Smithsonian Channel in the US."
    },
    {
      employer: "Raw TV",
      title: "Casting Consultant",
      location: "Hoxton, London",
      dates: "Oct '16",
      description: "Collating and suggesting casting option to director ensuring all areas of research are covered for 'When Drug Trials Go Wrong' for BBC 2"
    },
    {
      employer: "ITV Studios/ Potato",
      title: "Casting Researcher",
      location: "Southbank, London",
      dates: "May-Sept '16",
      description: "Full casting for a 10 episode series of 'Autopsy: The Last Hours Of...' for ITV. Casting between 10-20 cast members per episode across a strict remit and schedule. Full negotiating of contracts with agents and extras agencies while upholding a strict budget."
    },
    {
      employer: "Lightbox Entertainment/ Netflix",
      title: "English Casting Researcher",
      location: "Angel, London",
      dates: "Apr-May '16",
      description: "Casting for 3 episodes of 'Captive', a documantary drama show for Netflix."
    },
    {
      employer: "- - - - - - - - -",
      title: "- - - - - - -",
      location: "",
      dates: "",
      description: "Please see full CV for further past work in Television."
    }
  ]
};

work.display = function() {

  $("#workExperience").append(HTMLworkStart);

  var workStrings = "#workExperience";

  for (var k = 0; k < work.jobs.length; k++) {
    var formattedEmployer =
      HTMLworkEmployer.replace("%data%", work.jobs[k].employer);
    var formattedTitle =
      HTMLworkTitle.replace("%data%", work.jobs[k].title);
    var formattedEmployerTitle =
      formattedEmployer + formattedTitle;
    var formattedDates =
      HTMLworkDates.replace("%data%", work.jobs[k].dates);
    var formattedLocation =
      HTMLworkLocation.replace("%data%", work.jobs[k].location);
    var formattedDescription =
      HTMLworkDescription.replace("%data%", work.jobs[k].description);

    works = workStrings[k];
    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDescription);
  } //end of loop
}; //end of function



// WORK ENDS
//PROJECTS BEGIN
var projects = {
  "projects": [{
    "title": "3D Artist",
    "dates": "Feb '17",
    "description": "Designing and building a fully responsive portfolio site for a 3D games artist",
    "images": ["images/artist1_small.jpg", "images/artist2_small.jpg"]
  }, {
    "title": "Personal Portfolio Site",
    "dates": "Feb '17",
    "description": "Creating a responsive portfolio site as Project 1 of Udacity's Nanodegree program. Styled with Steven Universe photos for fun.",
    "images": ["images/portfolio1_small.jpg", "images/portfolio2_small.jpg", "images/portfolio3_small.jpg", "images/portfolio4_small.jpg"]
  }, {
    "title": "More Coming Soon!",
    "dates": "",
    "description": "",
    "images": [""]
  }]
};

projects.display = function() {

  for (var p = 0; p < projects.projects.length; p++) {
    $("#projects").append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
    $(".project-entry:last").append(formattedProjectTitle);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[p].dates);
    $(".project-entry:last").append(formattedProjectDates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[p].description);
    $(".project-entry:last").append(formattedProjectDescription);
    if (projects.projects[p].images.length > 0) {
      for (img = 0; img < projects.projects[p].images.length; img++) {
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[p].images[img]);
        $(".project-entry:last").append(formattedProjectImage);
      } //end of img for loop
    }//end of project images if loop
  } //end of loop
}; //end of function



//PROJECTS END

//EDUCATION BEGINS

var education = {
  "schools": [{
      "name": "Canterbury Christ Church University",
      "location": "Canterbury, Kent",
      "degree": "Film, Radio & Television Production BA Hons",
      "majors": ["Film", " Television", " Radio", " Animation."],
      "dates": "2010-2013",
      "url": "http://cccu.com"
    },
    {
      "name": "Forest School",
      "location": "Snaresbrook, London",
      "degree": "A-Levels",
      "majors": [" Business Studies", " Computing", " Music Technology", " German."],
      "dates": "2008-2010",
      "url": "forest.org.uk"
    }
  ],
  "onlinecourses": [{
    "title": "Udacity Front End Web Developer Course",
    "school": "Udacity",
    "dates": "current",
    "url": "http://udacity.com"
  }]
};

education.display = function() {
  for (var m = 0; m < education.schools.length; m++) {
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName =
      HTMLschoolName.replace("%data%", education.schools[m].name);
    var formattedDegree =
      HTMLschoolDegree.replace("%data%", education.schools[m].degree);
    var formattedDates =
      HTMLschoolDates.replace("%data%", education.schools[m].dates);
    var formattedLocation =
      HTMLschoolLocation.replace("%data%", education.schools[m].location);
    var formattedMajor =
      HTMLschoolMajor.replace("%data%", education.schools[m].majors);

    $(".education-entry:last").append(formattedSchoolName);
    $(".education-entry:last").append(formattedDegree);
    $(".education-entry:last").append(formattedDates);
    $(".education-entry:last").append(formattedLocation);
    $(".education-entry:last").append(formattedMajor);
  }//end of loop

  $("#education").append(HTMLonlineClasses);
  $("#education").append(HTMLschoolStart);
  for (var n = 0; n < education.onlinecourses.length; n++) {
    var formattedOnlineTitle =
      HTMLonlineTitle.replace("%data%", education.onlinecourses[n].title);
    var formattedOnlineSchool =
      HTMLonlineSchool.replace("%data%", education.onlinecourses[n].school);
    var formattedOnlineDates =
      HTMLonlineDates.replace("%data%", education.onlinecourses[n].dates);
    var formattedOnlineURL =
      HTMLonlineURL.replace("%data%", education.onlinecourses[n].url);
    $(".education-entry:last").append(formattedOnlineTitle);
    $(".education-entry:last").append(formattedOnlineSchool);
    $(".education-entry:last").append(formattedOnlineDates);
    $(".education-entry:last").append(formattedOnlineURL);
  } //end of loop
}; //end of function


bio.display();
work.display();
projects.display();
education.display();

//EDUCATION ENDS

$("#mapDiv").append(googleMap);