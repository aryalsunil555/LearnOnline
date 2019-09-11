# features/login.feature

Feature:Login process
 In order to have access to the student dashboard
 As a user
 I need to be able to login

 Scenario: Unsuccessful login
  Given I am on the "login" page
  When I submit the login form with username "wrongemail" and password = "wrongPassword"
  Then I should see "Wrong username or password. Please try again."
  And I should be on the "login" page

 Scenario: Successful login
  Given I am on the "login" page
  When I submit the login form with username "correctemail" and password = "correctPassword"
  Then I should see "Welcome to the CyberSchool."
  And I should be on the "student-dashboard" page