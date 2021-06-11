# Hotel App

A scalable application made for Travel Lodge with microservices<br />

As per the requirement and to improve the scalability of the application I have used microservices architecture when building the project<br />
For the backend development I have used Apollo Federation with nodejs as Apollo plays a leading role when comes to graphql. And Apollo Federation provides tons of scalability along with simplicity. We can share data between our services without any hustle. <br />
As per Databases I have used a noSQL database as they provides horizontal scaling and tons of flexibility. For this purpose I have took mongoDB cloud. <br />
For the frontend, I have choose micro frontend architecture as well because it gives scalabilty and sharing components, data and easy to collaborate with multiple teams. For Microfrontend I have choosen Single-SPA. It allows to work with multiple frameworks for different services without worring much on intergration. Single-SPA uses runtime Intergration via script so it is super flexible. <br />
For this project I have used only react for all services and Apollo client for communication with our graphql backend, styled-components for themeing and styles. <br />

## Project Architecture

![alt text](https://github.com/hashaneranda/hotel-app/blob/main/architecture-hotel.png?raw=true)

## Project Sequence Diaghram

![alt text](https://github.com/hashaneranda/hotel-app/blob/main/sequence-hotel.png?raw=true)

## Project Demo

- [Demo here](https://www.loom.com/share/c6d0f18835db4b5c8acf8b8c487489e8)

## Getting Started

### Installation

Clone the repo:

```bash
git clone https://github.com/hashaneranda/hotel-app
cd hotel-app
```

Install the dependencies:

```bash
yarn install
```

and create a new file .env and copy the content of .env.sample for hotel-backend/services/\*

### Commands

Running app locally:

```bash
yarn start
```

the app will run on http://localhost:9000

## Project Structure

```
hotel-backend\
 |--services\       # Apollo Federation services and gateway
    |--foods\       # Foods service
    |--gateway\     # Graphql gateway
    |--users\       # users service
hotel-backend\
 |--services\       # Single SPA microfrontend
    |--api\         # Graphql apollo client service
    |--auth\        # Authentication app
    |--food\        # Food order app
    |--root-config\ # root config for single spa
    |--styleguide\  # Common components and styles

```
