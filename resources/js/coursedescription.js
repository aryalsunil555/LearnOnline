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
        

        $('#coursePrice').text(`Nrs. ${result.info.fee}`);
        $('#creditHour').html(`Credit:  ${result.info.credit} Hours`);

        $('#ratingDescription').append(
          `
         <div class="rating" id="${result.info[key].id}">
                <span class="ratingDynamic">
                  <span id="b1${result.info.id}"></span>
                  <span id="b2${result.info.id}"></span>
                  <span id="b3${result.info.id}"></span>
                  <span id="b4${result.info.id}"></span>
                  <span id="b5${result.info.id}"></span> 
                </span>
              </div>

          `

          );

        for(key in result.average){
          // console.log(result.average[key]);
          var rating = Math.floor(result.average.rating);
          if(rating >= 1){$('#b1'+result.average.courseID).html('<span class="fa fa-star checked"></span>');}
          else{$('#b1').html('<span class="fa fa-star"></span>')}
            if(rating >= 2){$('#b2'+result.average.courseID).html('<span class="fa fa-star checked"></span>');}
          else{$('#b2').html('<span class="fa fa-star"></span>')}
            if(rating >= 3){$('#b3'+result.average.courseID).html('<span class="fa fa-star checked"></span>');}
          else{$('#b3').html('<span class="fa fa-star"></span>')}
            if(rating >= 4){$('#b4'+result.average.courseID).html('<span class="fa fa-star checked"></span>');}
          else{$('#b4').html('<span class="fa fa-star"></span>')}
            if(rating >= 5){$('#b5'+result.average.courseID).html('<span class="fa fa-star checked"></span>');}
          else{$('#b5').html('<span class="fa fa-star"></span>')}
          // console.log(rating);
        }




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