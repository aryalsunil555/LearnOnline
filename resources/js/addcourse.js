
// let addcourseFormHolderId = document.querySelector('#addcourseFormHolder-id');
// let listOfCoursesId = document.querySelector('#listOfCourses-id');

// let navAddCourse=document.querySelector('#navAddCourse');
// let navViewCourse=document.querySelector('#navViewCourse');
// console.log(navAddCourse);
// document.addEventListener('click', (e) => {
//     if (e.target === navAddCourse) {
//         listOfCoursesId.style.display = 'none';
//         addcourseFormHolderId.style.display = 'flex';
//     } else if (e.target === navViewCourse) {
//         addcourseFormHolderId.style.display = 'none';
//         listOfCoursesId.style.display = 'flex';
//     }
// });



// $(document).ready(function() {

//     $(document).on('submit', '#addcourseForm', function(e) {
//         e.preventDefault();
  
//             var courseFormData = {
//                 // key         value
//                 title: $('#addCourseTitle').val(),
//                 description: $('#addCourseDescription').val(),
//                 credit: $('#addCourseCredit').val(),
//                 fee: $('#addCourseFee').val(),
//                 course_image: $('#addCourseImage').val(),
                
//             }
//             // console.log(userRegisterFormData);
//             $.ajax({
//                 url: 'http://localhost:3000/course/register',
//                 method: 'post',
//                 contentType: 'application/json',
//                 data: JSON.stringify(courseFormData),
//                 beforeSend: function() {
//                     // setting a timeout
//                 },
//                 success: function(result, status) {
//                     // console.log(result);
//                     // console.log(status);
//                     var message = result.message;
//                     alert(message);
//                     // alert("Student Successfully Registered");
//                     // window.localStorage.clear();
//                     // window.sessionStorage.clear();
//                     // window.localStorage.setItem('token', result.token);
//                     // window.location.href = "../user/dashboard.html";


//                     //TO CHANGE THE INPUT FIELDS BLANK AFTER REGISTRATION//
//                     for (var i = 0; i < signupInputs.length; i++) {
//                         signupInputs[i].value = '';
//                     }
//                     $("input[name='gender']").prop("unchecked", true);
//                     $("#signupForm").css("display", "none");
//                     $("#loginForm").css("display", "flex");
//                     $("#loginEmail").focus();

//                 },
//                 error: function(jqXHR, status) {
//                     // console.log(jqXHR);
//                     // console.log(jqXHR.status);
//                     console.log(status);
//                     console.log(jqXHR.responseJSON.message);
//                     // $('#message').html(jqXHR.responseJSON.message);
//                     // console.log('data upload failed');
//                     alert(jqXHR.responseJSON.message);
//                 }
//             });


//         });





    $(document).ready(function() {
    

    let addcourseForm = $('#addcourseForm');



    $(document).on('submit', '#addcourseForm', function(e) {
        e.preventDefault();
  
            var courseFormData = {
                // key         value
                Title: $('#addCourseTitle').val(),
                Description: $('#addCourseDescription').val(),
                Credit: $('#addCourseCredit').val(),
                Fee: $('#addCourseFee').val(),
                StartDate: $('#addStartDate').val(),
                EndDate: $('#addEndDate').val(),
                CourseTypeID: $('#addCourseTypeID').val(),
                TeacherID: $('#addTeacherID').val(),
                RatingID: $('#addRatingID').val(),
                // course_image:$('#addCourseImage').val(),
                // start_date:$('#addCourseStartDate').val(),
                // end_date:$('#addCourseEndDate').val()
               
            }
            console.log(courseFormData);
            $.ajax({
                url: 'http://localhost:3000/course/register',
                method: 'post',
                contentType: 'application/json',
                data: JSON.stringify(courseFormData),                
                success: function(result, status) {
                    
                    var message = result.message;
                    alert(message);

                    alert("Data ta gayo ni bro.. backend hera");
                 
                    //TO CHANGE THE INPUT FIELDS BLANK AFTER REGISTRATION//
                    // for (var i = 0; i < signupInputs.length; i++) {
                    //     signupInputs[i].value = '';
                    // }
                    // $("input[name='gender']").prop("unchecked", true);
                    // $("#signupForm").css("display", "none");
                    // $("#loginForm").css("display", "flex");
                    // $("#loginEmail").focus();

                },
                error: function(jqXHR, status) {
                    console.log(status);
                    console.log(jqXHR.responseJSON.message);
                    // alert(jqXHR.responseJSON.message);
                    alert('DATA GAYENA');
                }
            });
       
    });


});
        



