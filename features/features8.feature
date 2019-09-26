Feature: <Get CourseType Data>
This is a restful api service test project.
You can use json-mock as an api server. Before runing the script, please init the mock message and start the json-mock server. It can be found in your project's node_modules folder. 
Steps:
1. in command prompt, browse to your project folder,
2. run the following command:
    node_modules\.bin\json-mock.cmd data.json

  Scenario Outline: Get coursetype data
    * Get the service api "<URL>" and i should get the '<expectval>'
    Examples: 
      | URL                                 | expectval                                                                                                                                                                                                                                                                                                                           |
      | http://localhost:3000/get/coursetype/1 | { "status": 200,"message": "Course data fetched","info": {"coursetype_id": 1,"coursetype_title":"Java","createdAt": "2019-09-23T13:03:47.000Z","updatedAt": "2019-09-23T13:03:47.000Z"} |