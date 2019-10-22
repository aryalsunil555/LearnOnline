

function getCoursesList(){
$.ajax({
       url: 'http://localhost:3000/get/courset',
       method: 'get',
       dataType: 'json',
       headers: { authorization: 'Bearer '+window.localStorage.getItem('token') },
       success: function(result, status) {
        console.log(result.info);
        $('#coursesListBody').empty();
        for(key in result.info){
          $('#coursesListBody').append(            
          `
        <tr>
          <th scope="row"> ${result.info[key].id}</th>
          <td>${result.info[key].title}</td>
          <td>${result.info[key].description}</td>
          <td>${result.info[key].credit} Hrs</td>
          <td>$ ${result.info[key].fee}</td>
          <td>${result.info[key].course_image}</td>
          <td>${result.info[key].coursetype_title}</td>
          <td>${result.info[key].first_name} ${result.info[key].last_name}</td>
          <td><button type="button" id="edit" data-toggle="modal" data-target="#exampleModal" class="btn btn-primary">Edit</button></td>
          <td><button type="button" id="delete" class="btn btn-danger">Delete</button></td>
        </tr>
          `
              );
        }
       },
       error: function(jqXHR, status) {
        console.log(jqXHR);
       }
   })
}

getCoursesList();
