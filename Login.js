/* global $*/
// user object used below comes from X-creds.js
$(function() {
    $(".btn3").click(function() {
        var name= $("#username").val();
        var password= $("#password").val();
        
        if (name !== user.name) {
            alert("wrong name");
        } else if (password !== user.password) {
            alert("wrong password");
        } else {
            if (user.type === 'teacher') {
                window.open('teacherpage.html', '_self');
            } else {
                window.open('student.html', '_self');
            }
            
        }
    });
});

$(function() {
    $(".btn3").click(function() {
        var name= $("#username").val();
        var password= $("#password").val();
        
        if (name !== user2.name) {
            alert("wrong name");
        } else if (password !== user.password) {
            alert("wrong password");
        } else {
            if (user2.type === 'teacher') {
                window.open('teacherpage.html', '_self');
            } else {
                window.open('student.html', '_self');
            }
            
        }
    });
});