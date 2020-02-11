<p  align="center">

<img  src="https://user-images.githubusercontent.com/41849970/70860193-86eae680-1f44-11ea-812f-c1a6a6f216a5.png">

</p>

# CollBeet Admin

CollBeet Admin is a dashboard interface design only for use of Administrators. With CollBeet Admin, admins can easily add student schedules, mess schedules, daily announcements, college locations and college info, which can later be accessed easily using CollBeet Assistant by students (clients). It is designed as a completely open source, free and decentralised software that can be deployed individually on any cloud platfor by developer/admin alongside CollBeet Assistant. We have already added support for all major engineering branches and added features that will be very useful for most of college students but feel free to add/change code as per your accordance to make it more suitable for your individual college needs.

[For Screenshots click here](https://github.com/kalol-institute-of-technology/CollBeet-Admin/blob/master/Screenshots.md)

---

## Index
* [Tech Stack](#tech-stack)
* [Deployment](#deployment)
    * [GCP Compute Engine Deployment](#gcp-compute-engine-deployment)
    * [Heroku (Ideal for test purposes)](#heroku-deployment)
    * [Let Us Handle Deployment](#let-us-handle-deployment)
* [Change Admin Password](#change-admin-password)
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

For production servers we highly recommend using [GCP Compute Engine](https://cloud.google.com/compute) for deployment purposes. You can find further instructions below:

[Insert Link Here](https://www.google.com/)

### Heroku Deployment

Just click the following button to deploy CollBeet Admin on a Heroku Server. However due to higher cost we only recommend Heroku only if you are planning to use this server for testing purposes. For production, we highly recommend GCP Compute Engine Deployment.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

### Let Us Handle Deployment

If you are an organisation or someone looking to not get into hassle of Cloud deployment and management of resources, let us take care of it for a small fee. You can contact on `ravalprajval@gmail.com` for further discussion and help. We can also help you in customisation of CollBeet Assistant and Admin as per your college requirements.

## Change Admin Password

CollBeet Admin after deployment will be setup by default with following Admin credentials:

    Username: admin
    Password: admin
    
You can change Change Admin Password to whatever you like, using the **Change Password** button, located on the upper left hand side corner of the dashboard.

## Development

Even though CollBeet Admin is designed as a ready to use software, it is possible that your college has some different requirements than vanilla version. Because this is an open source and our very friendly MIT License, feel free to change/add code as per your requirements. Refer to following points to know more on how to do it.

### Developer Environment Setup

Setting up Developer Environment for CollBeet Admin is super easy, make sure you have all following required prerequisites installed on your machine and follow the given steps:

#### Prerequisites
+ [Meteor >=1.9](https://www.meteor.com/install)
+ [VSCode or equivalent editor](https://code.visualstudio.com/)
+ [Git CLI](https://git-scm.com/)

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

### REST API Endpoints

REST API Endpoints are used by CollBeet-Assistant to communicate with CollBeet-Admin. You can access any of this endpoints, on your browser or [Postman](https://www.postman.com/). For ex: If you have a localhost server and want to access student endpoint just write following URL: `http://localhost:3000/api/student`

| Url                       | Short Description                                         |
| :------------------------ | :-------------------------------------------------------- |
| `/api/student`               | Gets all added lectures and departments.                 | 
| `/api/mess`       | Gets all added meals from mess section.                |
| `/api/announcements`      | Gets added announcments.        |
| `/api/info`       | Gets added general information about college. |
| `/api/locations` | Gets all added location info about college.       |
