Feature: <Delete Teacher>
This is a restful api service test project.
You can use json-mock as an api server. Before runing the script, please init the mock message and start the json-mock server. It can be found in your project's node_modules folder. 
Steps:
1. in command prompt, browse to your project folder,
2. run the following command:
    node_modules\.bin\json-mock.cmd data.json

  Scenario Outline: Put course update
    * Put to service api "<URL>" with '<data>' and I should get the '<expectval>'
    Examples: 
      | URL                                     | data                                                                                                                                                                               | expectval                                          
      | http://localhost:3000/teacher/delete/2  | {	"FirstName":"Robin","LastName":"Rai","Address":"Jorpati","DOB":"11/01/1996","Phone":"9861111111","Gender":"Male","Bio":"Hello Wrold","Email":"robin@gmail.com","Password":"123"} | { "status": 200, "message": "Teacher Deleted"} |
      