const webApp_emailMessage = 'https://script.google.com/macros/s/AKfycbwIE1Q_VtCxh1SwqSCp4LjEFKDwx4qXDoirN1HsFYWrMvtE_MROPUsEW0ca126gLXa_/exec';

$('#formContact').submit(function (evento) {
    evento.preventDefault();  // avoid to execute the actual submit of the form.
    if (inputValidate()) {

        let that = $(this),
            data = {}; //this is gonna be a JS object to store all input values

        that.find('[name]').each(function (index, value) {
            var that = $(this),
                name = that.attr('name'),
                value = that.val();
            data[name] = value;
        });

        console.log(data);
        processingRegistration()
        sendMessage(data);
    }
});


function processingRegistration() {
    $(".btnArea").css({ 'display': 'none' });
    $(".progressBar").css({ 'display': 'block' });
    updateProgressBar()
}



function sendMessage(data) {

    $.ajax({
        method: "post",
        redirect: "follow",
        url: webApp_emailMessage,
        dataType: 'json',
        accepts: 'application/json',
        data,
        success: (status) => {
            console.log('success');
            clearInterval(myInterval); //Stop progress bar counter
            document.querySelector("#formContact").reset(); //clear all input form
            $(".btnArea").css({ 'display': 'block' }); //make btnArea visible
            $(".progressBar").css({ 'display': 'none' }); //hide progress bar
            $('.popupWindow').css({ 'visibility': 'visible' });
        },
        error: (err) => {
            console.log(err);
            alert('Su consulta no ha podido ser enviada, le pedimos que intente mas tarde.')
        }
    });
}






function inputValidate() {
    let arrayCheck = [];

    if (document.getElementsByName('firstName')[0].value == "") {
        document.querySelector('#firstNameAlert').textContent = "Campo requerido";
        document.querySelector('#inputFirstName').classList.add('inputFieldAlert');
        $('#inputFirstName').removeClass('inputError');
        arrayCheck.push('false');
    } else {
        document.querySelector('#firstNameAlert').textContent = ""
        arrayCheck.push('true');
    }

    if (document.getElementsByName('lastName')[0].value == "") {
        document.querySelector('#lastNameAlert').textContent = "Campo requerido";
        document.querySelector('#inputLastName').classList.add('inputFieldAlert');
        arrayCheck.push('false');
    } else {

        document.querySelector('#lastNameAlert').textContent = ""
        arrayCheck.push('true');
    }

    if (document.getElementsByName('email')[0].value == "") {
        document.querySelector('#emailAlert').textContent = "Campo requerido";
        document.querySelector('#inputEmail').classList.add('inputFieldAlert');
        arrayCheck.push('false');
    } else {
        if (document.getElementsByName('email')[0].value.includes('@')) {
            document.querySelector('#emailAlert').textContent = ""
            arrayCheck.push('true');
        } else {
            document.querySelector('#emailAlert').textContent = "Debe ingresar un correo válido";
            document.querySelector('#inputMessage').classList.add('inputFieldAlert');
            arrayCheck.push('false');
        }

    };

    if (document.getElementsByName('message')[0].value == "") {
        document.querySelector('#messageAlert').textContent = "Campo requerido";
        document.querySelector('#inputMessage').classList.add('inputFieldAlert');
        arrayCheck.push('false');
    } else {
        document.querySelector('#messageAlert').textContent = ""
        arrayCheck.push('true');
    };

    console.log(arrayCheck);
    if (arrayCheck.some((item) => item == 'false')) {
        document.querySelector('.messageArea').setAttribute('style', 'display: inline');
        return false;
    } else {
        document.querySelector('.messageArea').setAttribute('style', 'display: none');
        return true;
    }
}




$('.containerClose').click(function () {
    $('.popupWindow').css({ 'visibility': 'hidden' });
    window.location.replace("index.html");
});


$('#inputFirstName').on('change', function (e) {
    document.querySelector('#firstNameAlert').textContent = "";
    document.querySelector('#inputFirstName').classList.remove('inputFieldAlert');
    $('.messageArea').css({ 'display': 'none' });
});

$('#inputLastName').on('change', function (e) {
    document.querySelector('#lastNameAlert').textContent = "";
    document.querySelector('#inputLastName').classList.remove('inputFieldAlert');
    $('.messageArea').css({ 'display': 'none' });
});

$('#inputEmail').on('change', function (e) {
    document.querySelector('#emailAlert').textContent = "";
    document.querySelector('#inputEmail').classList.remove('inputFieldAlert');
    $('.messageArea').css({ 'display': 'none' });
});

$('#inputMessage').on('change', function (e) {
    document.querySelector('#messageAlert').textContent = "";
    document.querySelector('#inputMessage').classList.remove('inputFieldAlert');
    $('.messageArea').css({ 'display': 'none' });
})



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