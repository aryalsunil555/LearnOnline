var id = window.sessionStorage.getItem('course_id'); 
$.ajax({
       url: 'http://localhost:3000/get/course/'+id,
       method: 'get',
       dataType: 'json',
       success: function(result, status) {
        console.log(result);
        console.log(result.info.course_image);
        $('#courseImage').attr('src','http://localhost:3000/image/course/'+result.info.course_image+'');
       },
       error: function(jqXHR, status) {
        console.log(jqXHR);
       }
     });