
function inicio() {
    document.getElementById("informacion").style.display = "block";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("back").style.display = "none";
    document.getElementById("Absorbentes").style.display = "none";
    document.getElementById("desinfectantes").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("limpieza").style.display = "none";
    conta=0;
    contador=0;
}




var btn = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    contador=0;


function servicios() {

if (contador==0) {
    document.getElementById("informacion").style.display = "none";
    document.getElementById("portafolio").style.display = "block";
    document.getElementById("back").style.display = "block";
    document.getElementById("side").style.display = "none";
    conta=0;
    contador=1;
}
else{

}
}

function catalogos() {
    document.getElementById("informacion").style.display = "none";	
    document.getElementById("portafolio").style.display = "block";
    document.getElementById("Absorbentes").style.display = "none";
    document.getElementById("back").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("desinfectantes").style.display = "none";
    document.getElementById("limpieza").style.display = "none";
    conta=0;
    contador=1;
   
}

function Absorbentes() {
    document.getElementById("informacion").style.display = "none";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("Absorbentes").style.display = "grid";
    document.getElementById("back").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("desinfectantes").style.display = "none";
    document.getElementById("limpieza").style.display = "none";
    conta=0;
    contador=2;
   
}

function desinfectantes() {
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("desinfectantes").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("back").style.display = "block";
    document.getElementById("Absorbentes").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("limpieza").style.display = "none";
    conta=0;
    contador=2;    
    
}

function limpieza() {
    document.getElementById("limpieza").style.display = "block";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("desinfectantes").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("back").style.display = "block";
    document.getElementById("Absorbentes").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    conta=0;
    contador=2;    
    
}

function cotizar() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("back").style.display = "block";
    document.getElementById("desinfectantes").style.display = "none";
    document.getElementById("Absorbentes").style.display = "none";
    document.getElementById("limpieza").style.display = "none";
    conta=0;
    contador=3;     
}

//   boton atras

function back() {

    if (contador==1) {
        document.getElementById("informacion").style.display = "block";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("back").style.display = "none";
        document.getElementById("side").style.display = "none";
        conta=0;
        contador=0;

    }
    else{
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("Absorbentes").style.display = "none";
        document.getElementById("desinfectantes").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("limpieza").style.display = "none";
        contador=1;

    }
    
    
    }

   //    menu laterl 

    var btns = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    conta=0;

    function sidebar()  {

        if (conta==0) {
            document.getElementById("side").style.display = "block";
            conta=1;
        }
        else{
            document.getElementById("side").style.display = "none";
            conta=0;
        }
        }

        function cerrarside() {
            document.getElementById("side").style.display = "none";
            conta=0;
            
        }

// llevar arriba
       

document.querySelector('.side')   
.addEventListener('click',()=>{
 window.scrollTo({
 top: 0,
 behavior: 'smooth'
});
});
document.querySelector('.portafolio')   
.addEventListener('click',()=>{
 window.scrollTo({
 top: 0,
 behavior: 'smooth'
});
});

document.querySelector('.back')   
.addEventListener('click',()=>{
 window.scrollTo({
 top: 0,
 behavior: 'smooth'
});
});

document.querySelector('.Absorbentes')   
.addEventListener('click',()=>{
 window.scrollTo({
 top: 0,
 behavior: 'smooth'
});
});

document.querySelector('.desinfectantes')   
.addEventListener('click',()=>{
 window.scrollTo({
 top: 0,
 behavior: 'smooth'
});
});

document.querySelector('.limpieza')   
.addEventListener('click',()=>{
 window.scrollTo({
 top: 0,
 behavior: 'smooth'
});
});

// formulario

document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    let telefono = "593959511244";
  
    let cliente = document.querySelector("#cliente").value;
    let contacto = document.querySelector("#contacto").value;
    let fecha = document.querySelector("#fecha").value;
    let venta = document.querySelector("#venta").value;
    let cantidad = document.querySelector("#cantidad").value;
    let productos = document.querySelector("#productos").value;
    let resp = document.querySelector("#respuesta");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    let url = `https://api.whatsapp.com/send?phone=593959511244&text=
          *Admon Distribuidores*%0A
          *Datos de la Cotización*%0A
          *Nombre de Cliente*%0A
          ${cliente}%0A
          *Numero de Contacto*%0A
          ${contacto}%0A
          *Fecha*%0A
          ${fecha}%0A
          *Tipo de Venta*%0A
          ${venta}%0A
          *Cantidad*%0A
          ${cantidad}%0A
          *Productos a Cotizar*%0A
          ${productos}%0A`;
  
    if (cliente === "" || contacto === "" || fecha === ""|| venta === "" || cantidad === "" ) {
      resp.classList.add("fail");
      resp.innerHTML = `Espera, ${cliente} faltan algunos Datos `;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Tu Cotización Fue Enviada, ${cliente}`;
  
    window.open(url);
  });
  


        document.querySelector('.side1')   
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });


        document.querySelector('.side3')   
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });
        

    
    
    
    
    
      

        
        




