var id = window.sessionStorage.getItem('course_id'); 
$.ajax({
       url: 'http://localhost:3000/get/course/'+id,
       method: 'get',
       dataType: 'json',
       success: function(result, status) {
        console.log(result);
        console.log(result.info.course_image);
        $('#courseImage').attr('src','http://localhost:3000/image/course/'+result.info.course_image+'');
        $('#courseTitle').html(result.info.title);
        $('#courseShortDescription').html(result.info.description);
        $('#courseLongDescription').html(result.info.description);
        

        $('#coursePrice').html(`Nrs. ${result.info.fee}`);
        $('#creditHour').html(`Credit: ${result.info.credit} Hours`);




       },
       error: function(jqXHR, status) {
        console.log(jqXHR);
       }
     });

$.ajax({
       url: 'http://localhost:3000/get/teacher/'+id,
       method: 'get',
       dataType: 'json',
       success: function(result, status) {

        $('#teacherName').html(`Tutor: ${result.info.first_name} ${result.info.last_name}`);

        console.log(result);

        // console.log(result);
        // console.log(result.info.course_image);
        // $('#courseImage').attr('src','http://localhost:3000/image/course/'+result.info.course_image+'');
        // $('#courseTitle').html(result.info.title);
        // $('#courseShortDescription').html(result.info.description);
        // $('#courseLongDescription').html(result.info.description);
        

        // $('#coursePrice').html(`Nrs. ${result.info.fee}`);
        // $('#creditHour').html(`Credit: ${result.info.credit} Hours`);




       },
       error: function(jqXHR, status) {
        console.log(jqXHR);
       }
     });