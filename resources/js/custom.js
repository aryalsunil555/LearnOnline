let signupForm = document.querySelector('#signupForm');
let loginForm = document.querySelector('#loginForm');
document.addEventListener('click', (e) => {
    if (e.target === signup) {
        loginForm.style.display = 'none';
        signupForm.style.display = 'flex';
    } else if (e.target === login) {
        signupForm.style.display = 'none';
        loginForm.style.display = 'flex';
    }
});



$(document).ready(function() {
  // let signupForm=$('signupForm').val();
  // let loginForm=$('loginForm').val();

  let signupForm=$('#signupForm');
  let loginForm=$('#loginForm');



    $(document).on('submit', '#signupForm', function(e) {
        e.preventDefault();
        var password = $('#StudentPassword').val();
        var cpassword = $('#StudentConfirmPassword').val();
        if (password == cpassword) {
            var gender = $("input[name='gender']:checked").val();
            var signupInputs=$('.signupInputs');


            var studentRegisterFormData = {
                // key         value
                FirstName: $('#StudentFirstName').val(),
                LastName: $('#StudentLastName').val(),
                Gender: gender,
                DOB: $('#StudentDob').val(),
                Phone: $('#StudentPhone').val(),
                Address: $('#StudentAddress').val(),
                Email: $('#StudentEmail').val(),
                Password: password
            }
            // console.log(userRegisterFormData);
            $.ajax({
                url: 'http://localhost:3000/student/register',
                method: 'post',
                contentType: 'application/json',
                data: JSON.stringify(studentRegisterFormData),
                success: function(result, status) {
                    // console.log(result);
                    // console.log(status);
                    alert("Student Successfully Registered");
                    // window.localStorage.clear();
                    // window.sessionStorage.clear();
                    // window.localStorage.setItem('token', result.token);
                    // window.location.href = "../user/dashboard.html";


                  //TO CHANGE THE INPUT FIELDS BLANK AFTER REGISTRATION//

            for (var i = 0; i < signupInputs.length; i++) {
                           signupInputs[i].value='';
                       }
            $("input[name='gender']").prop("unchecked",true);
            $("#signupForm").css("display", "none");
            $("#loginForm").css("display", "flex");
            $("#loginEmail").focus();

                },
                error: function(jqXHR, status) {
                    // console.log(jqXHR);
                    // console.log(jqXHR.status);
                    console.log(status);
                    console.log(jqXHR.responseJSON.message);
                    // $('#message').html(jqXHR.responseJSON.message);
                    // console.log('data upload failed');
                    alert(jqXHR.responseJSON.message);
                }
            });
        }
        else{
        	$(StudentPassword).addClass("errorInput");
            $(StudentPassword).focus();

        }
    });


 // for LOGIN
  $(document).on('submit', '#loginForm', function(event){
    event.preventDefault();
   const myFormData = {
      Email : $('#loginEmail').val(),
      Password : $('#loginPassword').val(),
  }
  console.log(myFormData);
  $.ajax({
          url: 'http://localhost:3000/student/login',
          method: 'post',
          contentType: 'application/json',
          data: JSON.stringify(myFormData),
          success: function(result, status) {
            //console.log(result)
             window.localStorage.setItem('token', result.token);
             // if(result.userInfo.id==1){
             //    alert('LOGGED IN SUCCESSFULLY');
             // // window.location.href = "./dashboard/dashboard.html";
             // }
             // else{
             // // window.location.href = "./dashboard/userDashboard.html";
             // alert('FAILED');
             // }

             alert('LOGGED IN SUCCESSFULLY');
             window.location.href="courses";
             $('#login').text("LogOut");
          },
          error: function(jqXHR, status) {
            alert(jqXHR.responseJSON.message);
              console.log(jqXHR.responseJSON.message);
          }
      });
  });









});
