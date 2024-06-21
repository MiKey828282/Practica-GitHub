document.addEventListener('DOMContentLoaded', function () {
    var nombre = document.getElementById('nombre')
    var alertname = document.getElementById('alertname')
    var correo = document.getElementById('email')
    var alertemail = document.getElementById('alertemail')
    var alertemailat = document.getElementById('alertemailat');
    var pass = document.getElementById('contrasena')
    var alertpass = document.getElementById('alertpass')
    var alertpass2 = document.getElementById('alertpass2')
    var alertpassnum = document.getElementById('alertpassnum');
    var genero = document.getElementsByName('genero')
    var alertgen = document.getElementById('alertgen')
    var genvalid = false
    var pais = document.getElementById('pais')
    const btn = document.getElementById('button')
    var escorrecto = true

    alertname.style.display = 'none';
    alertemail.style.display = 'none';
    alertemailat.style.display = 'none';
    alertpass.style.display = 'none';
    alertpass2.style.display = 'none';
    alertpassnum.style.display = 'none';
    alertgen.style.display = 'none';

    btn.addEventListener('click', () => {
        escorrecto=true;
        alertname.style.display = 'none';

        if (nombre.value.length == 0) {
            alertname.style.display = 'block';
            escorrecto= false;
        }

        alertemail.style.display = 'none';
        alertemailat.style.display = 'none';

        if (correo.value.length == 0) {
            alertemail.style.display = 'block';
            escorrecto= false;
        }
        else if (!correo.value.includes('@')) {
            alertemailat.style.display = 'block';
            escorrecto = false;
        }

        alertpass.style.display = 'none';
        alertpass2.style.display = 'none';
        alertpassnum.style.display = 'none';

        if (pass.value.length == 0) {
            alertpass.style.display = 'block';
            escorrecto = false;
        } else {
            if (pass.value.length < 8) {
                alertpass2.style.display = 'block';
                escorrecto = false;
            }
            if (!/\d/.test(pass.value)) { // Verifica si contiene al menos un número
                alertpassnum.style.display = 'block';
                escorrecto = false;
            }
        }

        alertgen.style.display = 'none';
        for (i = 0, len = genero.length; i < len; i++) {
            if (genero[i].checked) {
                genvalid = true;
                break;
            }
        }
        if(!genvalid)
            {
                alertgen.style.display = 'block'
            }
        if(escorrecto)
            {
                window.alert("Registro exitoso");
                nombre.value=''
                correo.value=''
                pass.value=''

                for (i = 0, len = genero.length; i < len; i++) {
                    genero[i].checked=false;
                }
                
            }
    });

});