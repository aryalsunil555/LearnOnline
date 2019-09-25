Feature: <Get Teacher Data>
This is a restful api service test project.
You can use json-mock as an api server. Before runing the script, please init the mock message and start the json-mock server. It can be found in your project's node_modules folder. 
Steps:
1. in command prompt, browse to your project folder,
2. run the following command:
    node_modules\.bin\json-mock.cmd data.json

  Scenario Outline: Get teacher data
    * Get the service api "<URL>" and i should get the '<expectval>'
    Examples: 
      | URL                                 | expectval                                         |
      | http://localhost:3000/get/teacher/1 | { "status": 200,"message": "Teacher data fetched","info": {"id": 1,"first_name": "Robin","last_name": "Rai","dob": "1996-10-31T18:15:00.000Z","gender": "Male","phone": "9861111111","address": "Jorpati","email": "robin@gmail.com","profile_image": null,"bio": "Hello Wrold","verify": "0","password": "$2b$10$tCIgZEQlR.ztq6GTbfyfNOAfwjQOGiWKjX4xl6TfyhT6nosF8msmi","createdAt": "2019-09-23T13:03:47.000Z","updatedAt": "2019-09-23T13:03:47.000Z"} } |