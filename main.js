// Botones

let texto_nombre_active = false;

document.getElementById('boton_nombre').onclick = function(){
    if (!texto_nombre_active)
        document.getElementById('texto_nombre').innerHTML = "<b>Bioingeniería</b>: disciplina que estudia las aplicaciones de la ingeniería a la medicina o a la biología";
    else
        document.getElementById('texto_nombre').innerHTML = "";

        texto_nombre_active = !texto_nombre_active;
}


// Función que cambia el año de una actividad para mostrar su duración
let elemento_year;

function mostrar_duracion(duracion, id){
    elemento = document.getElementById(id);
    elemento_year = elemento.innerHTML;
    elemento.innerHTML = duracion;
}

const pps = document.getElementById("exp_pps");
const adscripcion = document.getElementById("exp_adscripcion");
const conicet = document.getElementById("exp_conicet");
const bio = document.getElementById("exp_bio");

// Función que genera eventListeners para entrada y salida del cursor al objeto
function eventos_entrada_salida(elemento_id, year_id, duracion){
    const elemento = document.getElementById(elemento_id);

    elemento.addEventListener("mouseenter", (e) => {
        mostrar_duracion(duracion, year_id);
      });
    
    elemento.addEventListener("mouseleave", (e) => {
        mostrar_duracion(elemento_year, year_id);
      });
}

// Función que calcula la cantidad de meses que pasaron entre dos fechas
function monthDiff(dateFrom, dateTo) {
    return dateTo.getMonth() - dateFrom.getMonth() + 
      (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
}

// Se calcula la cantidad de meses que pasaron desde que comencé en CONICET en abril de 2022
cantidad_meses_conicet = monthDiff(new Date(2022, 03), new Date());

eventos_entrada_salida('exp_pps', 'year_pps', '3 meses');
eventos_entrada_salida('exp_adscripcion', 'year_adscripcion', '1 año');
eventos_entrada_salida('exp_conicet', 'year_conicet', cantidad_meses_conicet + ' meses');
eventos_entrada_salida('exp_bio', 'year_bio', '6 años');
