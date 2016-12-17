$(document).ready(function(){
   var teacher = {
    name: "Donohue",
    class:[{
        period:1,
        students:[{
            name:'Jordan',
            present:false,
            late:false,
            desc:'none'
        },{
            name:'Jovan',
            present:false,
            late:false,
            desc:'none'
        },{
          name:'Krysta',
          present:false,
          late:false,
          desc:'none'
        }]
    },{
        period:2,
        students:[{
            name:'La asia',
            present:false,
            late:false,
            desc:'none'
        },{
            name:'Tina',
            present:false,
            late:false,
            desc:'none'
        }]
    }]
};

function present(student){
    student.present = true;
}

function late(student, reason){
    student.late = true;
    student.desc = reason;
}


function populateTable(students){
    for(var i = 0; i < students.length; i++){
    //   $(".test").append("<p>" + students[i].name + "</p>");
    $(".table").append(
        "<tr>\
            <td>" + students[i].name + "</td>\
            <td><span class='here'>" + students[i].present + "</span></td>\
            <td>" + students[i].desc + "</td>\
            <td><span class='late'>" + students[i].late + "</span></td></tr>");
    }
}

populateTable(teacher.class[0].students);


});
