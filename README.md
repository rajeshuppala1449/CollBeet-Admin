<p  align="center">

<img  src="https://user-images.githubusercontent.com/41849970/70860193-86eae680-1f44-11ea-812f-c1a6a6f216a5.png">

</p>

# CollBeet Admin

CollBeet Admin is a dashboard interface design only for use of Administrators. With CollBeet Admin, admins can easily add student schedules, mess schedules, daily announcements, college locations and college info, which can later be accessed easily using CollBeet Assistant by students (clients). It is designed as a completely open source, free and decentralised software that can be deployed individually on any cloud platform by developer/admin alongside [CollBeet Assistant](https://github.com/kalol-institute-of-technology/CollBeet-Assistant). We have already added support for all major engineering branches and added features that will be very useful for most of college students but feel free to add/change code as per your accordance to make it more suitable for your individual college needs.

[For Screenshots click here](https://github.com/kalol-institute-of-technology/CollBeet-Admin/blob/master/Screenshots.md)

---

## Index
* [Tech Stack](#tech-stack)
* [Deployment](#deployment)
    * [GCP Compute Engine Deployment](#gcp-compute-engine-deployment)
    * [Heroku (Ideal for test purposes)](#heroku-deployment)
* [Setup](#setup)
    * [Change Admin Password](#change-admin-password)
    * [Adding Data](#adding-data)
* [Development](#development)
    * [Developer Environment Setup](#developer-environment-setup)
        * [Prerequisites](#prerequisites)
        * [Steps](#steps)
    * [REST API Endpoints](#rest-api-endpoints)

---

## Tech Stack

CollBeet Admin is designed & developed using following technologies:
+ [MeteorJS](https://www.meteor.com/)
+ [ReactJS](https://www.meteor.com/tutorials/react/creating-an-app)
+ [Material-UI](https://material-ui.com/)

Familiarity with following technologies will also help in further development of CollBeet Admin:
+ [NodeJS](https://nodejs.org/en/docs/)
+ [MongoDB](https://docs.mongodb.com/manual/)

---

## Deployment

### GCP Compute Engine Deployment

For production servers and deployment we highly recommend using [GCP Compute Engine](https://cloud.google.com/compute). You can find further instructions below on how to deploy CollBeet Admin:

[Full Guide](https://github.com/kalol-institute-of-technology/CollBeet-Admin/blob/master/docs/gcpcomputedeploy.md)

---

### Heroku Deployment

Just click the following button to deploy CollBeet Admin on a Heroku Server. However due to higher cost we only recommend Heroku only if you are planning to use this server for testing purposes. For production, we highly recommend GCP Compute Engine Deployment.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

---

## Setup

### Change Admin Password

CollBeet Admin after deployment will be setup by default with following Admin credentials:

    Username: admin
    Password: admin
    
You can change Change Admin Password to whatever you like, using the **Change Password** button, located on the upper left hand side corner of the dashboard.

---

### Adding Data

CollBeet Admin is designed to make sure you can easily add/modify data, so that users always get fresh data. Here are the section wise steps to adding data. Note: Expected responses are for Smart Speaker. In Screen enabled devices, given responses may be replaced with a more appropriate responses such as Table cards and Lists.

---

#### Student Schedule

To add student schedule, you need to first add a Department with current active semesters. After adding the department, just click on **+Add A Lecture** button, and fill all the required details. You can add following two types of lectures:

---

1) **Normal Lectures** - To add a normal lecture, select semester and day of that lecture. Then add Lecture name, Teacher name, Start time and End time.

   Expected Response From Assistant: *You have a [Lecture Name] Lecture coming up next from [Start Time] to [End Time]. Lecture will be taken by [Teacher Name]*

   Assistant will automatically detect the lecture based on student current timezone and will return a response with the upcoming lecture details. If there are no upcoming lectures, student will recieve following response.

   Expected Response: *You have no lectures coming up next. I think you are done for the day. Enjoy!!*

2) **Break Lectures** - To add a break lecture, select semester and day of that lecture. Then add Start time and End time.

   Expected Response: *You have a break coming up next.*

   Assistant will automatically detect the lecture based on student current timezone and will return above response if a break is coming up next.

3) **Modify Department** - Since active semesters do keep changing every six months or so. You can add/remove active semester by clicking on **Modify** button under department name. If the department is no longer required you can also delete department.

---

#### Mess Schedule

1) **Adding Meals** - To add mess schedule, select the day you want to add mess schedule for and then select the meal type. You can then add all the dishes that are being served that day and click on **Add**.

   Expected Response: *In [Meal Type] today, we are serving [Food Items].*
   
---
   
#### Announcements

1)**Adding Announcements** - If you have any announcement to make for all the student of your college, you can add it using this tab. Just use the textfield provided and write your announcment. You can add as many annoucement as you want for that particular day.

   Expected Response: *You have following [Total Announcements Number] announcement(s) today. [Entered Announcements]*
   
---
   
#### Locations

1) **Adding Staffroom Location** - In a college there can be multiple staffrooms for every department. To add a stafroom, first select the desired department and then add the staffroom location.

   Expected Response: *You can find [Department Name] staff room at [Entered Location].*
   
1) **Adding Lab Location** - In a college there can be multiple labs for every department. To add a lab, first select the desired department and then add the lab location.

   Expected Response: *You can find [Department Name] lab at [Entered Location].*
   
1) **Adding Various Location** - In CollBeet, you can add locations to various places such as Principal's office, Admin Office,Cafeteria etc. Just select the desired location and add directions for that location.

   Expected Response: *You can find it at [Entered Location]*
   
---
   
#### College Info

1) **Adding College Info** - Some of the general information about your college such as College Name, Address, Phone Number and Website can be added using this section.

   Expected Response: *It is [Requested College Info]*
   
   Example Response for College Name: *It is Kalol Institute Of Technology and Research Center*
   
---

## Development

Even though CollBeet Admin is designed as a ready to use software, it is possible that your college has some different requirements than vanilla version. Because this is an open source and our very friendly MIT License, feel free to change/add code as per your requirements. Refer to following points to know more on how to do it.

---

### Developer Environment Setup

Setting up Developer Environment for CollBeet Admin is super easy, make sure you have all following required prerequisites installed on your machine and follow the given steps:

---

#### Prerequisites
+ [Meteor >=1.9](https://www.meteor.com/install)
+ [VSCode or equivalent editor](https://code.visualstudio.com/)
+ [Git CLI](https://git-scm.com/)

---

#### Steps:
1. Fork this repository.
1. Once the repository is forked, clone the repository on you local machine using Git CLI and your forked repo URL.

    `git clone your-repo-url`
    
 1. Change to root directory.
 
    `cd CollBeet-Admin`
    
 1. Install all project dependecies.
 
    `meteor npm install`
    
 1. Run a local development server using following command.
 
    `meteor`
    
Server should start now and will be running on `http://localhost:3000`. Any changes you make to your code will be updated automatically.

---

### REST API Endpoints

REST API Endpoints are used by CollBeet-Assistant to communicate with CollBeet-Admin. You can access any of this endpoints, on your browser or [Postman](https://www.postman.com/). For ex: If you have a localhost server and want to access student endpoint just write following URL: `http://localhost:3000/api/student`

| Url                       | Short Description                                         |
| :------------------------ | :-------------------------------------------------------- |
| `/api/student`               | Gets all added lectures and departments.                 | 
| `/api/mess`       | Gets all added meals from mess section.                |
| `/api/announcements`      | Gets added announcments.        |
| `/api/info`       | Gets added general information about college. |
| `/api/locations` | Gets all added location info about college.       |

---
