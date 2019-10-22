

function getCoursesList(){
$.ajax({
       url: 'http://localhost:3000/get/teacher',
       method: 'get',
       dataType: 'json',
       headers: { authorization: 'Bearer '+window.localStorage.getItem('token') },
       success: function(result, status) {
        console.log(result.info);
        $('#teachersListBody').empty();
        for(key in result.info){
          $('#teachersListBody').append(            
          `
        <tr>
          <th scope="row"> ${result.info[key].id}</th>
          <td>${result.info[key].first_name}</td>
          <td>${result.info[key].last_name}</td>
          <td>${result.info[key].dob} </td>
          <td>${result.info[key].gender}</td>
          <td>${result.info[key].phone}</td>
          <td>${result.info[key].address}</td>
          <td>${result.info[key].email}</td>
          <td>${result.info[key].profile_image}</td>
          <td>${result.info[key].bio}</td>
          <td>${result.info[key].verify}</td>
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
