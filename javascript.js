
$("#submit").click(function (){

    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    if (name == '' || email == '' || message == '') {

        swal({
            title: "Field empty!",
            text: "Please check the missing fields!",
            icon: "Warning",
            button: "OK",
        });

    } else {
        swal({
            title: "Successfully Submited",
            text: "Success",
            icon: "Successe",

        });
    }
}
);

