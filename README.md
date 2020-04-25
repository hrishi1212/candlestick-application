# candlestick-application
A candlestick application for 1 minute, 15 minutes and 1 hour duration using the data from API: https://coindcx-official.github.io/rest-api/#trades-2

## Requirements

* Node 
* jest-cli
* Git
* Contentful CLI (only for write access)

## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/hrishi1212/candlestick-application.git
cd candlestick-application
```

```bash
npm install
```

## Steps for read-only access

To start the express server, run the following

```bash
npm start
```
To test test cases, run the following

```bash
jest
```

Folder Structure
============================

> ### A top-level directory layout
.
    ├── biz                     # biz logic in this folder
    ├── config                  # config folder for different environment 
    ├── controllers             # route controllers in this folder
    ├── exceptions              # error handling exceptions 
    ├── request                 # 3rd parties api request in this folder
    ├── routes                  # application routes define in this folder
    └── service                 # a serice call to DB or 3rd party api in this folder
    └── index.js                # entry file index

