window.onload=function() {
    var boton=document.getElementById("btn-submit");
    function validacion(e)
    {

        var mensaje=document.getElementById("textarea_cont");
        var mail= document.getElementById("exampleFormControlInput1");
        


        if(mail.value.includes("@"))
        {
            if(mensaje.value!="")
            {
                alert("Mensaje enviado con exito!");
            }
            else
            {
                e.preventDefault();
                alert("No puede enviar un mensaje vacio");
            }
            
        }
        else
        {
            e.preventDefault();
            alert("Tiene que ser un mail valido");
        }
    }

    boton.addEventListener("click",validacion)
}


