// let signuporm = document.querySelector('#signupForm');
// let loginForm = document.querySelector('#loginForm');
// let login = document.querySelector('#login');
// let signup = document.querySelector('#signup');

// document.addEventListener('click', (e) => {
//     if (e.target === signup) {
//         loginForm.style.display = 'none';
//         signupForm.style.display = 'flex';
//     } else if (e.target === login) {
//         signupForm.style.display = 'none';
//         loginForm.style.display = 'flex';
//     }
// });



$(document).ready(function() {
    $(document).on('submit', '#signupForm', function(e) {
        e.preventDefault();
        var password = $('#StudentPassword').val();
        var cpassword = $('#StudentConfirmPassword').val();
        if (password == cpassword) {
            var gender = $("input[name='gender']:checked").val();
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
                    console.log(result);
                    // console.log(status);
                    alert(result.status);
                    // window.localStorage.clear();
                    // window.sessionStorage.clear();
                    // window.localStorage.setItem('token', result.token);
                    // window.location.href = "../user/dashboard.html";
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
});