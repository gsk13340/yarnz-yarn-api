# yarnz-yarn-api
Yarnz Yarn API

Author
Gemini Kaushik

Setup Instructions
Prerequisites
Ensure you have Node.js installed on your system. If not, download and install it from Node.js official website.
Installation
Clone the repository to your local machine:

1. git clone https://github.com/gsk13340/yarnz-yarn-api.git
   
    cd yarnz-yarn-api

3. Install the necessary packages:
   
   npm init
   
   npm install express 

4. Start the server:
   
    node server.js

After running the above command, the server will be running on http://localhost:4000.

API Routes

Get All Yarns

GET /yarns HTTP/1.1

Host: http://localhost:4000

Accept: application/json


Example URL: http://localhost:4000/yarns



Endpoint: /yarns

Method: GET

Description: Retrieves a list of all yarns

Success Response: Code 200 (OK), returns an array of events.


Get yarns by brand

GET /yarns/:brand HTTP/1.1


Host: http://localhost:4000

Accept: application/json

Example URL: http://localhost:4000/yarns/bernat

Endpoint: /yarns/:brand

Method: GET

![Screenshot (31)](https://github.com/gsk13340/yarnz-yarn-api/assets/42681947/944c5c58-56a0-4537-84db-620edca4c8d0)

