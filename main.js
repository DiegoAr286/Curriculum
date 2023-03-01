let texto_nombre_active = false;

document.getElementById('boton_nombre').onclick = function(){
    if (!texto_nombre_active)
        document.getElementById('texto_nombre').innerHTML = "<b>Bioingeniería</b>: disciplina que estudia las aplicaciones de la ingeniería a la medicina o a la biología";
    else
        document.getElementById('texto_nombre').innerHTML = "";

        texto_nombre_active = !texto_nombre_active;
}