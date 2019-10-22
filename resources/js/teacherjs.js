

// let teacherSignup = document.querySelector('#teacherSignup');
// let teacherLogin = document.querySelector('#teacherLogin');

// let teacherSignupForm=document.querySelector('#teacherSignupForm');
// let teacherLoginForm=document.querySelector('#teacherLoginForm');




// document.addEventListener('click',(e)=>{
//    e.preventDefault();
//    if (e.target.id==="teacherSignup") {
//     teacherLoginForm.style.display="none";
//     teacherSignupForm.style.display="flex";
//    }
//    else if(e.target.id==="teacherLogin"){
//     teacherSignupForm.style.display="none";
//     teacherLoginForm.style.display="flex";
//    }
// });



$(document).ready(function() {
  // let signupForm=$('signupForm').val();
  // let loginForm=$('loginForm').val();

	 let teacherRegisterFormData=$('#teacherRegisterFormData');
	 let loginForm=$('#loginForm');


    $(document).on('submit', '#teacherSignupForm', function(e) {
        e.preventDefault();
      console.log("BOOM");

        var password = $('#teacherPassword').val();
        var cpassword = $('#teacherConfirmPassword').val();
        if (password == cpassword) {
            var gender = $("input[name='gender']:checked").val();
            var signupInputs=$('.signupInputs');

            var teacherRegisterFormData = {
                // key         value
                FirstName: $('#teacherFirstName').val(),
                LastName: $('#teacherLastName').val(),
                Gender: gender,
                DOB: $('#teacherDOB').val(),
                Phone: $('#teacherPhone').val(),
                Address: $('#teacherAddress').val(),
                Bio:$('#teacherBio').val(),
                Email: $('#teacherEmail').val(),
                Password: password
            }
            // console.log(userRegisterFormData);
            $.ajax({
                url: 'http://localhost:3000/teacher/register',
                method: 'post',
                contentType: 'application/json',
                data: JSON.stringify(teacherRegisterFormData),
                success: function(result, status) {
                   
                // alert(result.message);
           
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
            
             // alert('LOGGED IN SUCCESSFULLY');
             alert("I M TEACHER");
             // window.location.href="teachercourses";
             $('#login').text("LogOut");
          },
          error: function(jqXHR, status) {
            alert(jqXHR.responseJSON.message);
              console.log(jqXHR.responseJSON.message);
          }
      });
  });




});


