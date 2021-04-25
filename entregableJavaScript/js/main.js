AOS.init();

/*===================================================
 ----------validación de la calculadora------------ 
=====================================================*/

document.querySelector('#plus').addEventListener('click',()=> op = '+');
document.querySelector('#minus').addEventListener('click',()=> op = '-');
document.querySelector('#multiplication').addEventListener('click',()=> op = '*');
document.querySelector('#division').addEventListener('click',()=> op = '/');
document.querySelector('#btn-start').addEventListener('click',()=>{
    const n1 = parseInt(document.querySelector('#valor1').value);
    const n2 = parseInt(document.querySelector('#valor2').value);
    let result;
    if (op == '+') {
        result = n1 + n2;
    } else if (op == '-') {
        result = n1 - n2;
    }else if (op == '*') {
        result = n1 * n2;
    }else if (op == '/') {
        result = n1 / n2; 
    }
    document.querySelector('#result-cal').innerHTML = result;
});
document.querySelector('#btn-reset').addEventListener('click',limpiar=()=>{
    
    document.querySelector('#result-cal').innerHTML ="";
    document.querySelector('#valor1').value = "";
    document.querySelector('#valor2').value = "";
    document.querySelector('input[type="radio"]:checked').checked = false;
    signo.className ='';
});
const cambioSigno = (e) =>{
    switch (e.target.id){
        case "plus":
            signo.className ='fas fa-plus';
            break;
        case "minus":
            signo.className ='fas fa-minus';
        break;
        case "multiplication":
            signo.className ='fas fa-times';
        break;
        case "division":
            signo.className ='fas fa-divide';
        break;
    }
}
const radioBtn = document.querySelectorAll("input[type='radio']");
const inputs1 = document.querySelectorAll('#MiForm input');
inputs1.forEach((input1)=>{
     input1.addEventListener('click',cambioSigno);
 });
const validarRadio = ()=>{
    
    if (radioBtn[0].checked==true || radioBtn[1].checked==true || radioBtn[2].checked==true || radioBtn[3].checked==true) {
    }
     else {
        alert('selecciona una operación');
        document.querySelector('#result-cal').innerHTML ="";
    }
};
const validarInput=()=>{
     if(document.getElementById('valor1').value == "" && document.getElementById('valor2').value == ""){
        alert('es nesesario ingresar ambos valores');
        document.querySelector('#result-cal').innerHTML ="";        
    }else if (document.getElementById('valor1').value == "") {
        alert('ingresa el 1er número'); 
        document.querySelector('#result-cal').innerHTML ="";       
    }else if (document.getElementById('valor2').value == "") {
        alert('ingresa el 2do número');
        document.querySelector('#result-cal').innerHTML ="";        
    } 
    else if (op == "/" && document.getElementById('valor2').value == 0) {
        alert('Toda división por 0 es indefinida');
    }
};
const validacion = ()=>{
    validarRadio();
    validarInput();
};
document.querySelector('#btn-start').addEventListener('click',validacion);

/*===================================================
 ---------- validación Formulario inicio ------------ 
=====================================================*/

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const selects = document.querySelectorAll('#formulario select');
const expresiones = {
    id:/^\d{6,9}$/, 
    phone: /^[0-9]{3}-?[0-9]{3}-?[0-9]{4}$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/ ,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    cargo: /^[a-zA-ZÀ-ÿ\s]{1,15}$/,
    area: document.getElementById("area"),
    ubicacion: document.getElementById("ubicacion"),
    horario: document.getElementById('horario')
}
const campos = {
    id:false,
    phone:false,
    nombre:false,
    correo:false,
    cargo:false,
    area:false,
    ubicacion:false,
    horario:false
}
const validarFormulario = (e) => {
    switch (e.target.name) {
        case "id":
            validarCampo(expresiones.id, e.target, 'id');  
            break;
        case "phone":
            validarCampo(expresiones.phone, e.target, 'phone');  
            break;
        case "area":
            validarSelect(expresiones.area,  'area');
            break;
        case "ubicacion":
            validarSelect(expresiones.ubicacion,  'ubicacion');
            break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case "email":
            validarCampo(expresiones.correo, e.target, 'correo');
            break;
        case "cargo":
            validarCampo(expresiones.cargo, e.target, 'cargo');
            break;
        case "horario":
            rangoHora();
            break;
    }
}
const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    }else{
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}
const validarSelect = (expresion,  campo)=>{
    if (expresion.value== "" || expresion.value== 0 ) {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    } else {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    }
}
const rangoHora = ()=>{
    if (expresiones.horario.value == "" || expresiones.horario.value == 0 ) {
        document.getElementById('grupo__horario').classList.add('formulario__grupo-incorrecto');
        document.getElementById('grupo__horario').classList.remove('formulario__grupo-correcto');
        document.querySelector('#grupo__horario i').classList.add('fa-times-circle');
        document.querySelector('#grupo__horario i').classList.remove('fa-check-circle');
        document.querySelector('#grupo__horario .formulario__input-error').classList.add('formulario__input-error-activo');
        campos['horario'] = false;
      
    } else if (expresiones.horario.value > expresiones.horario.max && expresiones.horario.value < expresiones.horario.min) {
        document.querySelector('#grupo__horario .formulario__input-error').innerHTML ="Indique una hora entre las 7 a.m y las 6 p.m";  
        document.getElementById('grupo__horario').classList.add('formulario__grupo-incorrecto');
        document.getElementById('grupo__horario').classList.remove('formulario__grupo-correcto');
        document.querySelector('#grupo__horario i').classList.add('fa-times-circle');
        document.querySelector('#grupo__horario i').classList.remove('fa-check-circle');
        document.querySelector('#grupo__horario .formulario__input-error').classList.add('formulario__input-error-activo');
        campos['horario'] = false;
     }else {
        document.getElementById(`grupo__horario`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__horario`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__horario i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__horario i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__horario .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos['horario'] = true;
    }
}
const clear = (expresion,campo)=>{
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
    document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
}
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
    input.addEventListener('keypress', e =>{
        if (e.keyCode ==13) {
            e.preventDefault();
        }
    });
});
selects.forEach((select) => {
    select.addEventListener('blur', validarFormulario);
    select.addEventListener('click', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if( campos.id && campos.phone && campos.area &&  campos.ubicacion && campos.nombre && campos.correo &&  campos.cargo   && campos.horario){
        formulario.reset();
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(()=>{
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
    },5000);
    document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) =>{
        icono.classList.remove('formulario__grupo-correcto'); 
    });
    }else{
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        setTimeout(()=>{
            document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
        },5000);
    }
});
document.getElementById('close').addEventListener('click', ()=>{
    formulario.reset();
    clear(expresiones.id, 'id');
    clear(expresiones.phone, 'phone');
    clear(expresiones.area, 'area');
    clear(expresiones.ubicacion, 'ubicacion');
    clear(expresiones.nombre, 'nombre');
    clear(expresiones.coreo, 'correo');
    clear(expresiones.cargo, 'cargo');
    clear(expresiones.horario, 'horario');
});