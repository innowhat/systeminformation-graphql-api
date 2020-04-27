# systeminformation-graphql-api
A light weight node/express service to access APIs of [systeminformation](https://www.npmjs.com/package/systeminformation) package via GraphQL. 
It acts as a middleware between data source(systeminformation/nodeJS) and client to expose it as a [GRAPHQL](https://graphql.org/) API and can serve any client application irrespective of of the programming language, just like REST api.


# Dependencies
[node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/). 
Uses:
[express](http://expressjs.com) to setup web service,
[express-graphql](https://www.npmjs.com/package/express-graphql) to create a GraphQL HTTP Server Middleware.
npm install will automatically install all the dependencies.

# How to use it

## Download

Clone or download it from:
```git clone https://github.com/innowhat//systeminformation-graphql-api.git```

## Run server
Open the cmd in the directory where you cloned systeminformation-graphql-api  and then in the cmd
```
npm install
npm start
```
Go to browser and open the url below
http://localhost:5000/graphql

For additional information or help:
http://localhost:5000


## Run server with Demo App
Run the server concurrently with a demo app(create-react-app)
```
npm install
cd demo
npm install
cd .. (back to your root directory)
npm run dev
server and demo client will concurrently start running on the below port respectively
http://localhost:5000/graphql
http://localhost:3000

```


## GRAPHQL supported APIs

Add the data are read only.   
The URIs start with ```/graphql```


## REST APIs Supported

Only HTTP GET is supported.   
The URIs start with ```/api/systeminformation``` followed by:

- Hardware{system{...} bios{...}chassies{...}baseboard{...}}
- Cpu{cpu{...}flag{...}cache{...}currentspeed{...}}
- Memory{memory{...}layout (bank :"stringValue"){...}layouts{...}}
- Battery{battery{...}}
- Graphics{display(model :"stringValue"){...}displays{...}controller{...}controllers{...}}
- OS{info{...}user(user :"stringValue"){...}users{...}uuid{...}shell{...}versions{...}}
- Processes{process{...}fullLoad{...}currentLoad{...}}
- DiskFileSystem{FsSize{...}disksIO{...}fsStats{...}diskLayout{...}fsOpenFiles{...}blockDevices{...}}
- Network{networkStats{...}networkInterface(iface:"stringValue"){...}networkInterfaces{...}networkConnections{...}networkGatewayDefault{...}networkInterfaceDefault{...}}

- Wifi {wifiNetwork (ssid :"stringValue"){...}wifiNetworks{...}}
- Docker {info{...}}
- VirtualBox{info{...}}



For a full description of the underlying functionality see the [systeminformation documentation](https://systeminformation.io/#docs).






# TODO

### Add a runtime demo app
### Production build
### Add more features from systeminformation package and nodeJS
### Test with Jest
### Build a native app demo
### Any suggestions welcomed..
### Package it as a Service ?


# Credits
[systeminformation](https://www.npmjs.com/package/systeminformation)
 by [Sebastian Hildebrandt](https://github.com/sebhildebrandt)

