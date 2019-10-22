

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
          <td><button type="button" id="delete" data-id="${result.info[key].id}" class="btn btn-danger deleteTeacher">Delete</button></td>
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


///delete teacher


$(document).ready(function(){
    $(document).on('click', '.deleteTeacher', function(event) {
        event.preventDefault();
        var id = $(this).attr('data-id');

        alert(id);
        $.ajax({
                url: 'http://localhost:3000/teacher/delete/:'+id,
                method: 'get',
                contentType: 'application/json',
                success: function(result, status) {
                    console.log(status);
                    alert(result.message);
                    window.location.href = "./adminCheckupList.html";
                },
                error: function(jqXHR, status) {
                    console.log(status);
                    console.log(jqXHR.responseJSON.message);
                    alert(jqXHR.responseJSON.message);
                }
            });
    });
});

