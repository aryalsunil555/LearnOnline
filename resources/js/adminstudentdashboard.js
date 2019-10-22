


let studentCounter=0;




function getStudentsList(){
$.ajax({
       url: 'http://localhost:3000/get/student',
       method: 'get',
       dataType: 'json',
       headers: { authorization: 'Bearer '+window.localStorage.getItem('token') },
       success: function(result, status) {
        // console.log(result.info);
        $('#studentsListBody').empty();
        for(key in result.info){
          $('#studentsListBody').append(            
          `
        <tr>
          <th scope="row"> ${result.info[key].id}</th>
          <td>${result.info[key].first_name}</td>
          <td>${result.info[key].last_name}</td>
          <td>${result.info[key].address}</td>
          <td>${result.info[key].phone}</td>
          <td>${result.info[key].dob} Hrs</td>
          <td>${result.info[key].gender}</td>
          <td>${result.info[key].profile_image}</td>
          <td>${result.info[key].email}</td>
          <td>${result.info[key].verify}</td>
          <td><button type="button" id="edit" class="editStudent btn-primary" data-id="${result.info[key].id} " data-toggle="modal" data-target="#exampleModal" class="btn btn-primary">Edit</button></td>
          <td><button type="button" id="delete" class="btn btn-danger">Delete</button></td>
        </tr>
          `
              );

          studentCounter++;

          console.log(studentCounter);
        }
       },
       error: function(jqXHR, status) {
        console.log(jqXHR);
       }
   })
}

getStudentsList();

// $(document).on('click', '.editStudent', function(e){
//   e.preventDefault();
//   var id = $(this).attr('data-id');
//   // alert(id);
//   $.ajax({
//        url: 'http://localhost:3000/get/student/'+id,
//        method: 'get',
//        dataType: 'json',
//        // headers: { authorization: 'Bearer '+window.localStorage.getItem('token') },
//        success: function(result, status) {
        
//        },
//        error: function(result, status) {}
// });
