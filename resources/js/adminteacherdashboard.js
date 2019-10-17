<!DOCTYPE html>
<html>
<head>
  <title>


  </title>
  <!-- <link rel="stylesheet" type="text/css" href="bootstrap/bootstrap.css"> -->
  <!-- <link rel="stylesheet" type="text/css" href="resources/css/custom.css"> -->

  <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="css/custom.css">
    
  <script type="text/javascript" src="jquery/jquery.min.js">
  </script>

  <script type="text/javascript" src="bootstrap/popperjs/popper.min.js">
  </script>

  <script type="text/javascript" src="bootstrap/js/bootstrap.min.js">
  </script>

  <script type="text/javascript" src="js/admincoursedashboard.js"></script>
</head>
<body>

  <nav class="navbar navbar-expand-md bg-dark navbar-dark">
  <a class="navbar-brand" href="#">cyberSchool</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Home</a>
      </li>
    
      <li class="nav-item">
        <a class="nav-link" href="#" id="logout">Logout</a>
      </li>
    </ul>
  </div>
</nav>

  <h1>Teacher Dashboard</h1>
  <!-- <button id="editt">sdf</button> -->

  <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">DOB</th>
      <th scope="col">Gender</th>
      <th scope="col">Phone</th>
      <th scope="col">Address</th>
      <th scope="col">Email</th>
      <th scope="col">Profile Image</th>
      <th scope="col">Bio</th>
      <th scope="col">Verify</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody id="teachersListBody">

    <tr>
      <th scope="row">1</th>
      <td>JAVA</td>
      <td>very tori language</td>
      <td>20 hours</td>
      <td>$300</td>
      <td>The IMAGE</td>
      <td>Web</td>
      <td>Robin</td>
      <td><button type="button" id="edit" data-toggle="modal" data-target="#exampleModal" class="btn btn-primary">Edit</button></td>
      <td><button type="button" id="delete" class="btn btn-danger">Delete</button></td>
    </tr>

  </tbody>
</table>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

 <form  class="form-horizontal" id="editUserr"  method= "POST"  enctype="multipart/form-data">
<fieldset>

<legend>Registration</legend>

<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">Email</label>
  <div class="col-md-4">
  <input id="username" name="username" type="text" placeholder="username" class="form-control input-md">
  <span class="help-block">Please enter email</span>
  </div>
</div>

<div class="form-group">
  <label class="col-md-4 control-label" for="submit">submit</label>
  <div class="col-md-4">
    <button id="submit" name="submit"  class="btn btn-info">Submit</button>
  </div>
</div>

</fieldset>
</form>



      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
      </div>
    </div>
  </div>
</div>


</body>
<!-- <script type="text/javascript" src="resources/js/jquery-3.3.0.min.js"></script>
<script type="text/javascript" src="resources/js/custom.js"></script>
<script type="text/javascript" src="resources/js/dashboard.js"></script>


<script type="text/javascript" src="resources/js/bootstrap.js"></script> -->

</html>
