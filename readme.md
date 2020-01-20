<h3 align="center">MPLbank Authentification System</h3>

---

## 📝 Table of Contents
- [📝 Table of Contents](#%f0%9f%93%9d-table-of-contents)
- [🧐 About ](#%f0%9f%a7%90-about)
- [🏁 Getting Started ](#%f0%9f%8f%81-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installing](#installing)
- [🎈 Usage ](#%f0%9f%8e%88-usage)
- [🚀 Deployment ](#%f0%9f%9a%80-deployment)
- [⛏️ Built Using ](#%e2%9b%8f%ef%b8%8f-built-using)
- [✍️ Authors ](#%e2%9c%8d%ef%b8%8f-authors)

## 🧐 About <a name = "about"></a>
MAS is a API who enable an authentification system for the MPLbank showcase.


## 🏁 Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 
See [deployment](#deployment) for notes on how to deploy the project on a live system. 

### Prerequisites
```
node.js
npm
```

### Installing

Install the dependencies

```
npm install
```
This application is using the [dotenv](https://www.npmjs.com/package/dotenv) package. You need to populate the environement variables in the [.env](./.env) file. To do that you can use the [.env_sample](./env_sample) file.


Run the devellopement server

```
npm run dev
```

If everything went well you should be able to acces this webpage : http://localhost:5000/api-docs

## 🎈 Usage <a name="usage"></a>
To use this api please look at the [swagger](./swagger.yaml).

The authentification is in 3 steps : 
* Call the `POST : /api/v1/check` with the email and number as parameters. The system will check on MDM if the email and number correspond to an existing user. If it does it will send an email to the user and send as a response to the request an url.
* The url send in the last step should be openend in an iframe in the TPP website and it will ask the user to enter the code send by email previously.
* After the user enter the code it will automaticaly call the `POST : /api/v1/valid` and if the code is correct, the iframe will generate an [PostMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) with the partyId of the user in it.


## 🚀 Deployment <a name = "deployment"></a>
This API need to be deploy on the VLAN 358 to have access to the MPLbank APIs.
To facilitate the deployement there is a docker image for s390x.
To create the image 
```
docker build -t <image tag> .
```
Run the image
```
docker run -d -p <port>:5000 <image tag> 
```

## ⛏️ Built Using <a name = "built_using"></a>
- [NeDB](https://github.com/louischatriot/nedb) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Winston](https://github.com/winstonjs/winston) - Logger

## ✍️ Authors <a name = "authors"></a>
- [Corentin Grard](https://github.ibm.com/Corentin-Grard) - Conception + devellopement

See also the list of [contributors](https://github.ibm.com/MPLbank/authentification/contributors) who participated in this project.