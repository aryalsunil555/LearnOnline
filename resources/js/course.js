
alert("BOOM");


function getCourseData(){
$.ajax({
       url: 'http://localhost:3000/get/courset',
       method: 'get',
       dataType: 'json',
       success: function(result, status) {
        $('#coursesContainerID').empty();
        for(key in result.average){
          console.log(result.average[key]);
          // $('#a'+result.average[key]).
        }
        for(key in result.info){

          // console.log(result.info[key]);



          // $('#coursesContainerID').append('<tr>\
          //       <td>'+result.info[key].id+'</td>\
          //       <td>'+result.info[key].title+'</td>\
          //       <td>'+result.info[key].description+'</td>\
          //       <td>'+result.info[key].credit+'</td>\
          //       <td>'+result.info[key].fee+'</td>\
          //     </tr>');

         $('#coursesContainerID').append(
          `

          <div class="courseBlockContainer">
            <a href="" class="courseBlock ">
              <div class="courseImage">
                <img src="image/bargraph.png">
              </div>
              <div class="courseTitle">
                ${result.info[key].title} 
              </div>
              <div class="courseCredit">
                Credit: <span class="courseCreditDynamic">${result.info[key].credit} Hours </span>
              </div>
              <div class="courseTeacher">
                By: <span class="courseTeacherDynamic"> ${result.info[key].first_name} ${result.info[key].last_name} </span>
              </div>
             
              <div class="coursePrice">
                <span class="coursePriceDynamic">Nrs ${result.info[key].fee}</span>
              </div>


               <div class="rating" id="a${result.info[key].id}">
                <span class="ratingDynamic">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span> 
                </span>
              </div>
            </a>          
          </div>

          `

          );


        }
       },
       error: function(jqXHR, status) {
        console.log(jqXHR);
       }
   })
}

getCourseData();


