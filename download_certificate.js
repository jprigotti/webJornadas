const webAppDailu_retrieveMedicalList = 'https://script.google.com/macros/s/AKfycbzQeIrYwMdcPIgQb7wZ9kX5_4ztb5jUEESf9CnAnmYw1DRGWn3sXUYdJ4IZjLbJSTmnww/exec';
//esta const apunta a una webApp en Dailu, donde esta la lista de servicios

const webAppDailu_retrieveCertificate = 'https://script.google.com/macros/s/AKfycbwFU1WT78yfMX7f3-2rGlSywjRtFrJ1ggP7lMYZxQRMwk0uS1MfZpYkK2XevJkopQDYnA/exec';
//esta const apunta a una webApp en Dailu, envia el email y trae name, lastname y pdf url

const webAppDailu_userRegistrationDB = 'https://script.google.com/macros/s/AKfycbzFPvmEMvy5RZelVxmuR9W6IWi3wxiYswxEfzDOWoa8oaYjX2pR9HVTu-CqyhYwRPlq/exec';
//esta const apunta a una wbeApp en Dailu que tiene dos funciones:
//get con una query para saber si el usuario esta o no registrado
//post para insertar el usuario en el SS en Dailu

const webAppJS2022_sendEmailCalendar = 'https://script.google.com/macros/s/AKfycbwcpbcS1_xdL74n90vfLYvGAzVnDX-A94uj0731YODmPAcDFigg8N8ZVliAUt9xcLAJ/exec';
//esta const apunta a una webApp en jornadassantojanni2022 para enviar un correo de confirmacion y el evento del Calendar

/***********************************************************************
        EVENTS
***********************************************************************/


/***********************************************************************
        for submit
************************************************************************
This event has the for the form submit
1. It reads all the input values using a foreach (ising name attribute)
2. Creates a data object with the data from the input
3. It calls validateInput(data) fuction and passes on the data object
if return is:
true: then we call insertUsersSS(url, method, data)
false: nothing
***********************************************************************/

$('#form-ajax').submit(function (evento) {

    evento.preventDefault();  // avoid to execute the actual submit of the form.

    let that = $(this),
        // url = that.attr('action'),
        // method = that.attr('method'),
        data = {}; //this is gonna be a JS object to store all input values

    //loop through all the "name" items in the Form to load the data object
    that.find('[name]').each(function (index, value) {
        var that = $(this),
            type = that.attr('type'),
            name = that.attr('name'),
            value = that.val();

        if (type == "radio") {
            // For radio buttons, only include the value if it's checked
            if (that.is(':checked')) {
                data[name] = that.val();
            }
        } else {
            // For other input types, include their values
            data[name] = that.val();
        }

    });


    console.log(data);
    //check if user is registered or not, runnig a query using AJAX-GET passing data object
    (validateInput(data)) ? insertUserSS(data) : console.log("complete los campos");

});


/***********************************************************************
        FUNCTIONS
***********************************************************************/


/***********************************************************************
        Function insertUserSS(data)
************************************************************************
This function receives the data object to insert in the SS
We use the WebApp for webFormSS
***********************************************************************/

function insertUserSS(data) {
    processingRegistration(); //update the submit button to show progress
    //Primero validamos que el usuario no este previamente registrado con el metodo GET
    $.ajax({
        method: "get",
        redirect: "follow",
        url: webAppDailu_userRegistrationDB,
        dataType: 'json',
        accepts: 'application/json',
        data,
        success: (status) => {
            console.log("Usuario registrado? " + status['vlookupResult']);
            if (status['vlookupResult'] === true) {
                //User already registered
                rejectRegistration();
            } else {
                // User Not registered   
                // Proceed to submit using AJAX-POST
                $.ajax({
                    method: 'post',
                    redirect: "follow",
                    url: webAppDailu_userRegistrationDB,
                    dataType: 'json',
                    accepts: 'application/json',
                    data: data,
                    success: (result) => {
                        console.log(result);
                        confirmRegistration(data);
                    },
                    error: (err) => alert('Hubo un error, intentelo mas tarde')
                });
            }
        },
        error: (err) => alert('Hubo un error, intentelo mas tarde')
    });
}


/***********************************************************************
        function processingRegistration() 
************************************************************************
This function does no need to receive any argument
This code shows a progress bar o any other option to develop
***********************************************************************/

function processingRegistration() {
    // $("#formSubmit").val("Procesando...");
    $(".btn").css({ 'visibility': 'hidden' });
    $(".progressBar").css({ 'visibility': 'visible' });
    updateProgressBar()
}

/*
************************************************************************
        function confirmRegistration()
************************************************************************
This function does no need to receive any argument
This code shows a pop-up with a confirmation message
************************************************************************
*/

function confirmRegistration(data) {

    $.ajax({
        method: "post",
        redirect: "follow",
        url: webAppJS2022_sendEmailCalendar,
        dataType: 'json',
        accepts: 'application/json',
        data,
        success: (status) => {
            clearInterval(myInterval); //Stop progress bar counter
            document.querySelector(".ajax").reset(); //clear all input form
            $(".btn").css({ 'visibility': 'visible' }); //make btnArea visible
            $(".progressBar").css({ 'visibility': 'hidden' }); //hide progress bar
            $('.alertNewUser').css({ 'visibility': 'visible' }); //make alrt new user pop-up visible
        },
        error: (err) => {
            clearInterval(myInterval); //Stop progress bar counter
            document.querySelector(".ajax").reset(); //clear all input form
            $(".btn").css({ 'visibility': 'visible' }); //make btnArea visible
            $(".progressBar").css({ 'visibility': 'hidden' }); //hide progress bar
            alert('Hubo un problema, por favor intenta mas tardes.')
        }
    });

}


/*
************************************************************************
        function rejectRegistration()
************************************************************************
This function does no need to receive any argument
This code shows a pop-up with a message stating that the user is
already registered
************************************************************************
*/

function rejectRegistration() {
    clearInterval(myInterval); //Stop progress bar counter
    document.querySelector(".ajax").reset(); //clear all input form
    $('.alertRegisteredUser').css({ 'visibility': 'visible' }); //make alrt registered user pop-up visible

    $(".btn").css({ 'visibility': 'visible' });
    $(".progressBar").css({ 'visibility': 'hidden' });
}



/*************************************************************************
        function retrieveUserInformation(data)
************************************************************************
This function connects to google webapp, passes in the email and retrieves:
name, lastname and pdf url
************************************************************************
*/

function retrieveCertificate(data) {
    processingRegistration(); //update the submit button to show progress
    // const data = {
    //     email: email
    // }

    console.log(data);
    $.ajax({
        method: "get",
        redirect: "follow",
        url: webAppDailu_retrieveCertificate,
        dataType: 'json',
        accepts: 'application/json',
        data,
        success: (result) => {
            console.log(result);
            $('#download-title').text("Gracias por completar la encuesta! Estos son tus datos, si son correctos, hace click en el Descargar para obtener tu certificado");
            $('#inputFirstName').val(result.name);
            $('#inputLastName').val(result.lastname);
            $('#downloadCertificate').attr('href', result.pdfUrl);

            clearInterval(myInterval); //Stop progress bar counter
            $(".progressBar").css({ 'visibility': 'hidden' });
            $(".btn").css({ 'visibility': 'visible' });

            // document.querySelector(".ajax").reset(); //clear all input form
            // $('.warningMessage').css({ 'display': 'none' });
            // $("#form-view-1").toggleClass("hidden")
            // $("#form-view-2").toggleClass("hidden")
        },
        error: (err) => {
            console.log("Retrieve certificate returned error: ", error)
            // clearInterval(myInterval); //Stop progress bar counter
            // document.querySelector(".ajax").reset(); //clear all input form
            // $(".btn").css({ 'visibility': 'visible' }); //make btnArea visible
            // $(".progressBar").css({ 'visibility': 'hidden' }); //hide progress bar
            // alert('Hubo un problema, por favor intenta mas tardes.')
        }
    });

}


//This functions will show/hide the password
const showPassword = document.querySelector("#showPassword");
const passwordField = document.querySelector("#passwordField");
$('#showPassword').on('mousedown', function () {
    $(this).toggleClass("fa-eye");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
});

// $('#showPassword').on('mouseleave', function(){
//     $(this).toggleClass("fa-eye");
//     const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
//     passwordField.setAttribute("type", type);
// });


//This function will update the progress bar
function updateProgressBar() {
    const progressBar = document.getElementsByClassName('progressBar')[0]
    const loop = 3;
    progressBar.style.setProperty('--width', 0)
    myInterval = setInterval(() => {
        const computedStyle = getComputedStyle(progressBar)
        let width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
        progressBar.style.setProperty('--width', width + 1)
        if (width == 95) {
            progressBar.style.setProperty('--width', 0)
            // clearInterval(myInterval);
        }
        console.log(width);
    }, 30)
}


//Este codigo es para cerrar el alertContainer NewUser
$('#alertContainerCloseNU').click(function () {
    $('.alertNewUser').css({ 'visibility': 'hidden' });
    window.location.replace("index.html");
});

//Este codigo es para cerrar el alertContainer RegisteredUser
$('#alertContainerCloseRU').click(function () {
    $('.alertRegisteredUser').css({ 'visibility': 'hidden' });
    window.location.replace("index.html");
});


//This code will insert option in Form Select
// let formSelect = document.getElementById("formSelect");

// let option = document.createElement('option');
// option.value="Clinica Medica";
// option.innerHTML="Clinica Medica";
// formSelect.appendChild(option);
// option = document.createElement('option');
// option.value="Cardiología";
// option.innerHTML="Cardiología";
// formSelect.appendChild(option);





/***********************************************************************
        Function validateInput(data)
************************************************************************
This function receives an data object
then for each empty argument, it highlight the associated input
We use an arrayCheck that stores false for each empty objet attribute
if arraycheck.some(item==fase) returs false - fail,
otherise return true - OK
***********************************************************************/

function validateInput(data) {
    // console.log(data);
    var arrayCheck = [];
    //Validamos el input FirstName
    if (data.firstName == "") {
        // $('.enterFirstName').css({ 'visibility': 'visible' });
        $('#inputFirstName').addClass('inputError');
        document.querySelector('#firstNameAlert').textContent = "Campo requerido";
        arrayCheck.push(false);
    } else {
        // $('.enterFirstName').css({ 'visibility': 'hidden' });
        $('#inputFirstName').removeClass('inputError');
        document.querySelector('#firstNameAlert').textContent = "";
        arrayCheck.push(true)
    }

    //validamos el input LastName
    if (data.lastName == "") {
        // $('.enterLastName').css({ 'visibility': 'visible' });
        $('#inputLastName').addClass('inputError');
        document.querySelector('#lastNameAlert').textContent = "Campo requerido";
        arrayCheck.push(false);
    } else {
        // $('.enterLastName').css({ 'visibility': 'hidden' });
        $('#inputLastName').removeClass('inputError');
        document.querySelector('#lastNameAlert').textContent = "";
        arrayCheck.push(true);
    }

    //validamos el input Cell
    if (data.cell == "") {
        // $('.enterCell').css({ 'visibility': 'visible' });
        $('#inputCell').addClass('inputError');
        document.querySelector('#cellAlert').textContent = "Campo requerido";
        arrayCheck.push(false);
    } else {
        // $('.enterCell').css({ 'visibility': 'hidden' });
        $('#inputCell').removeClass('inputError');
        document.querySelector('#cellAlert').textContent = "";
        arrayCheck.push(true);
    }

    //validamos el input Email
    if (data.email == "") {
        // $('.enterEmail').css({ 'visibility': 'visible' });
        $('#inputEmail').addClass('inputError');
        document.querySelector('#emailAlert').textContent = "Campo requerido";
        arrayCheck.push(false);
    } else if (data.email.includes('@') == false) {
        // $('.enterEmail').css({ 'visibility': 'visible' });
        $('#inputEmail').addClass('inputError');
        document.querySelector('#emailAlert').textContent = "Correo inválido";
        arrayCheck.push(false);
    } else {
        // $('.enterEmail').css({ 'visibility': 'hidden' });
        $('#inputEmail').removeClass('inputError');
        document.querySelector('#emailAlert').textContent = "";
        arrayCheck.push(true);
    }

    //validamos el input Servicio
    if (data.servicio == "Elegir") {
        // $('.enterServicio').css({ 'visibility': 'visible' });
        $('#formSelect').addClass('inputError');
        document.querySelector('#servicioAlert').textContent = "Campo requerido";
        arrayCheck.push(false);
    } else {
        // $('.enterServicio').css({ 'visibility': 'hidden' });
        $('#formSelect').removeClass('inputError');
        document.querySelector('#servicioAlert').textContent = "";
        arrayCheck.push(true);
    }

    console.log(arrayCheck);
    if (arrayCheck.some((item) => item == false)) {
        $('.warningMessage').css({ 'display': 'inline' });
        return false;
    } else {
        $('.warningMessage').css({ 'display': 'none' });
        return true;
    }
}


$('#inputFirstName').on('change', function (e) {
    $('#inputFirstName').removeClass('inputError');
    document.querySelector('#firstNameAlert').textContent = "";
    $('.warningMessage').css({ 'display': 'none' });
})

$('#inputLastName').on('change', function (e) {
    $('#inputLastName').removeClass('inputError');
    document.querySelector('#lastNameAlert').textContent = "";
    $('.warningMessage').css({ 'display': 'none' });
})

$('#inputCell').on('change', function (e) {
    $('#inputCell').removeClass('inputError');
    document.querySelector('#cellAlert').textContent = "";
    $('.warningMessage').css({ 'display': 'none' });
})

$('#inputEmail').on('change', function (e) {
    let email = document.querySelector('#inputEmail').value.toString();
    email = email.replace(' ', '')
    document.querySelector('#inputEmail').value = email;
    $('#inputEmail').removeClass('inputError');
    document.querySelector('#emailAlert').textContent = "";
    $('.warningMessage').css({ 'display': 'none' });
})

$('#formSelect').on('change', function (e) {
    $('#inputServicio').removeClass('inputError');
    document.querySelector('#servicioAlert').textContent = "";
    $('.warningMessage').css({ 'display': 'none' });
})





// let optionClass = document.querySelector('#formSelect');
// optionClass.addEventListener('mouseover', funcion1);

// function funcion1(){
// var option = document.querySelector(".optionClass")
// option.setAttribute("style","background-color:blue")
// console.log("OK")
// }

// $('optionClass').hover(function() {
//         $(this).addClass('highlight');
//     }, function() {
//         $(this).removeClass('highlight');
//     }
// );

// $('select[name="servicios"] option ').hover(
//     function() {
//         $(this).addClass('highlight');
//     }, function() {
//         $(this).removeClass('highlight');
//     }
// );

//Esta funcion extrae el Param email del url
function getParameterByName(name) {
    const url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

$("#survey-submit").click((e) => {
    e.preventDefault();

    let questionGroups = ["question-1", "question-2"];
    let arrayValidation = [];

    questionGroups.forEach((groupName) => {
        var question = document.querySelectorAll(`input[name="${groupName}"]`);
        arrayValidation.push(validateRadioGroup(question))
    })

    let arrayValidationCheck = arrayValidation.some((elemento) => {
        return elemento === false
    })


    console.log(`Array validation checked is`, arrayValidationCheck);


    if (arrayValidationCheck) {
        $("#survey-validation").text("Debe responder todas las preguntas");
        $('.warningMessage').css({ 'display': 'inline' });
    } else {
        //armamos el objeto con el cuestionario
        let that = $(this);
        data = {}; //this is gonna be a JS object to store all input values
        that.find('[name]').each(function (index, value) {
            var that = $(this),
                type = that.attr('type'),
                name = that.attr('name'),
                value = that.val();

            if (type == "radio") {
                // For radio buttons, only include the value if it's checked
                if (that.is(':checked')) {
                    data[name] = that.val();
                }
            }

        });
        const userEmail = getParameterByName("email");
        data["userEmail"] = userEmail;
        retrieveCertificate(data);
        $('#inputFirstName').val("");
        $('#inputLastName').val("");
        $('#download-title').text("");
        $('.warningMessage').css({ 'display': 'none' });
        $("#form-view-1").toggleClass("hidden")
        $("#form-view-2").toggleClass("hidden")
    }
})



validateRadioGroup = (radioButtons) => {

    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            return true; // Al menos uno está seleccionado, la validación es exitosa
        }
    }

    return false; // Ninguno está seleccionado, la validación falla
}







