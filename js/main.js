let ids = '';

function ids1 () {
    ids = 'servicios.html';
    history.pushState(`Selected: ${ids}`, `./${ids}`);
    pages = 'servicios.html.html';

};

function ids2 () {
    ids = 'carrito.html';
    history.pushState(`Selected: ${ids}`, `./${ids}`);
    pages = 'carrito.html';

};



window.addEventListener('popstate', e => {
    backweb();
    
});

function backarriba(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });       
};

function backweb() {
   
    if (contador==1) {
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("informacion").style.display = "none";
        document.getElementById("side").style.display = "none";
        document.getElementById("dispensadores").style.display = "none";
        document.getElementById("Absorbentes").style.display = "none";
        document.getElementById("desinfectantes").style.display = "none";
        document.getElementById("limpieza").style.display = "none";
        document.getElementById("maquinaria").style.display = "none";
        document.getElementById("bioseguridad").style.display = "none";
        document.getElementById("sharelink").style.display = "none";
        conta=0;
        contador=0;
        backarriba();
        history.back();

    }
    else if(contador==2){
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("informacion").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("dispensadores").style.display = "none";
        document.getElementById("Absorbentes").style.display = "none";
        document.getElementById("desinfectantes").style.display = "none";
        document.getElementById("limpieza").style.display = "none";
        document.getElementById("maquinaria").style.display = "none";
        document.getElementById("bioseguridad").style.display = "none";
        document.getElementById("sharelink").style.display = "none";
        contador=1;
        backarriba();
        ids1();

    }
    else{
            history.back();
        
    }

    } 

function inicio() {
    document.getElementById("informacion").style.display = "none";	
    document.getElementById("portafolio").style.display = "block";
    document.getElementById("Absorbentes").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("dispensadores").style.display = "none";
    document.getElementById("desinfectantes").style.display = "none";
    document.getElementById("limpieza").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=1;
    ids1();
}




var btn = contador=0;


function servicios() {


    document.getElementById("informacion").style.display = "none";
    document.getElementById("portafolio").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=1;
    ids1();


}

function codigoqr() {
    document.getElementById("informacion").style.display = "block";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("Absorbentes").style.display = "none";
    document.getElementById("dispensadores").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("desinfectantes").style.display = "none";
    document.getElementById("limpieza").style.display = "none";
    document.getElementById("maquinaria").style.display = "none";
    document.getElementById("bioseguridad").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=2;
    ids2();
   
}

function Absorbentes() {
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("Absorbentes").style.display = "grid";
    document.getElementById("side").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=2;
    ids2();
   
}

function dispensadores() {
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("dispensadores").style.display = "grid";
    document.getElementById("side").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=2;  
    ids2();  
    
}

function desinfectantes() {
    document.getElementById("desinfectantes").style.display = "grid";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=2;  
    ids2();  
    
}

function limpieza() {
    document.getElementById("limpieza").style.display = "grid";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=2; 
    ids2();   
    
}

function maquinaria() {
    document.getElementById("maquinaria").style.display = "grid";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=2; 
    ids2();   
    
}

function bioseguridad() {
    document.getElementById("bioseguridad").style.display = "grid";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=2; 
    ids2();   
    
}

function cotizar() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("sharelink").style.display = "none";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("dispensadores").style.display = "none";
    document.getElementById("Absorbentes").style.display = "none";
    document.getElementById("desinfectantes").style.display = "none";
    document.getElementById("limpieza").style.display = "none";
    document.getElementById("maquinaria").style.display = "none";
    document.getElementById("bioseguridad").style.display = "none";
    conta=0;
    contador=2;   
    backarriba();
    ids2();  
}

function sharetj() {
    document.getElementById("sharelink").style.display = "block";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("dispensadores").style.display = "none";
    document.getElementById("Absorbentes").style.display = "none";
    document.getElementById("desinfectantes").style.display = "none";
    document.getElementById("limpieza").style.display = "none";
    document.getElementById("maquinaria").style.display = "none";
    document.getElementById("bioseguridad").style.display = "none";
    conta=0;
    contador=1;
    ids1();    
       
}

//   boton atras

function back() {

    if (contador==1) {
        document.getElementById("informacion").style.display = "block";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("side").style.display = "none";
        document.getElementById("dispensadores").style.display = "none";
        document.getElementById("Absorbentes").style.display = "none";
        document.getElementById("desinfectantes").style.display = "none";
        document.getElementById("limpieza").style.display = "none";
        document.getElementById("maquinaria").style.display = "none";
        document.getElementById("bioseguridad").style.display = "none";
        document.getElementById("sharelink").style.display = "none";
        conta=0;
        contador=0;
        history.back();

    }
    else if(contador==2){
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("dispensadores").style.display = "none";
        document.getElementById("Absorbentes").style.display = "none";
        document.getElementById("desinfectantes").style.display = "none";
        document.getElementById("limpieza").style.display = "none";
        document.getElementById("maquinaria").style.display = "none";
        document.getElementById("bioseguridad").style.display = "none";
        document.getElementById("sharelink").style.display = "none";
        contador=1;
        backarriba();
        ids1();

    }
    } 
    
    

   //    menu laterl 

    var btns = conta=0;

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

// llevar cerrar side automatico

document.querySelector('.tarjeta').addEventListener('click',()=>{
document.getElementById("side").style.display = "none";
conta=0;
});




// llevar arriba
    
document.querySelector('.side1')   
.addEventListener('click',()=>{
    backarriba();
});

document.querySelector('.side2')   
.addEventListener('click',()=>{
    backarriba();
});


document.querySelector('.back')   
.addEventListener('click',()=>{
    backarriba();
});


// formulario

document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  let items = document.getElementById("numer2").textContent;
   if (items == 0 ){
    console.log('noenvia')
   }else {
    let allTasks = "";
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    
    for (let i = 0; i < tasks.length; i++) {
      allTasks +=  "Producto:" + tasks[i].title + " Descripción " + tasks[i].description + " / " + "\n";
    }
//INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
let telefono = "593984880584";
let cliente = document.querySelector("#cliente").value;
let Ubicacion = document.querySelector("#Ubicacion").value;
let venta = document.querySelector("#venta").value;
let resp = document.querySelector("#respuesta");
let productos = allTasks ;

resp.classList.remove("fail");
resp.classList.remove("send");

let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
      *Admon Distribuidores*%0A
      *Datos de la Cotización*%0A
      *Cliente*%0A
      ${cliente}%0A
      *Ubicacion*%0A
      ${Ubicacion}%0A
      *Venta*%0A
      ${venta}%0A
      *Cotizar*%0A
      ${productos}%0A`;

if (cliente === "" || Ubicacion === "" || venta === "" ) {
  resp.classList.add("fail");
  resp.innerHTML = `Espera, ${cliente} faltan algunos Datos `;
  return false;
}
resp.classList.remove("fail");
resp.classList.add("send");
resp.innerHTML = `Tu Cotización Fue Enviada, ${cliente}`;
window.open(url);
clearLocalStorage();
clearTasks();

   }

    

    
  });

   //ALERTAS>
   function save(){
    let url = `https://drive.google.com/u/0/uc?id=1KoY5YALdLzQlEScFqzaprQ5qElt1Q6yp&export=download`;
    window.open(url); 
   };
  
  function ftuser() {
      Swal.fire({
          text: 'Soluciones Integrales de Limpieza',
          imageUrl: 'img/logoadmon.png',
          imageWidth: 200,
          confirmButtonText: 'Añadir a Contactos',
          showCloseButton: 'true',
          showCancelButton: true,
    
      
        }).then((result) => {
          if (result.isConfirmed) {
            save();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Descarga Correcta',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
  
   
  };
  

   function verpagos(){
    let urlsp = `https://admon-distribuidores.blogspot.com/p/opciones-de-pago.html`;
    window.open(urlsp); 
   };


  function msjpagos() {
    Swal.fire({
        title: 'Opciones de Pago',
        icon: 'success',
        html:
       '<a href="https://api.whatsapp.com//send?text=Enviado%20desde%20la%20App%20de%20Cliconline%20Ver%20Opciones%20de%20Pago%20https://https://admon-distribuidores.blogspot.com/p/opciones-de-pago.html" class="botonp" ><span class="fa fa-share-alt"></span >&nbsp;Compartir nro. Cuenta</a>',
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ver nro. Cuenta',
      })
      .then((result) => {
        if (result.isConfirmed) {
          verpagos();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Información ',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  
   
  };
  
  function msjn() {
    Swal.fire({
    showCloseButton: true,
    icon: 'info',
    title: 'Quiénes Somos',
    text: 'Información Disponible Próximamente',
    footer: 'Admon Distribuidores'
    });
  
   
  };



  function msj() {
    Swal.fire({
    showCloseButton: true,
    icon: 'success',
    title: 'Tarjeta Digital',
    text: 'Link Copiado a Portapapeles',
    footer: 'Admon Distribuidores'
    });
  
   
  };

  function msj2() {
    Swal.fire({
        icon: 'success',
        title: 'Cotizar',
        text: 'Agregado al Carrito',
        footer: 'Hason Clean',
        timer: 2000
      });
  
   
  }

const $content = document.getElementById('textareacopy');
  $btncopy = document.getElementById ('btcopi');
  $title = document.getElementById ('titlelink')

  $btncopy.addEventListener('click', e => {
    $content.select();
    document.execCommand('copy')
    msj();
  });

  var suma = 0;

  var agregar = ``;
  
  let amountProduct = document.querySelector('.count-product');
  
  //absorventes>
  
  
  function agp1() {
    document.getElementById('title').value =  `Papel Higiénico Jumbo Soott`;
    document.getElementById('description').value = `Doble hoja 250 mt`;
    cotizar2();
    
      }   
  
function agp2() {
        document.getElementById('title').value =  `Toalla Forest`;
        document.getElementById('description').value = `x 2 Rollos 100 mt`;
        cotizar2();
        
          }        

function agp3() {
        document.getElementById('title').value =  `Toalla Aurora`;
        document.getElementById('description').value = `Una Hoja 100 mt`;
        cotizar2();
                      
        } 
function agp4() {
        document.getElementById('title').value =  `Toalla Aurora`;
        document.getElementById('description').value = `Doble Hoja`;
        cotizar2();
                          
        }          

  
function agp5() {
    document.getElementById('title').value =  `Toalla Forest`;
    document.getElementById('description').value = `Doble Hoja Laminado`;
    cotizar2();
   
  }
  
  function agp6() {
    document.getElementById('title').value =  `Limpiones Industriales`;
    document.getElementById('description').value = `100, 300, 600 mt`;
    cotizar2();
       
  }
      
  //Dispensadores>   
        
  
  function agp7() {
    document.getElementById('title').value =  `Dispensador `;
    document.getElementById('description').value = ` Papel Higenico`;
    cotizar2();     
  }


  function agp8() {
   document.getElementById('title').value =  `Dispensador`;
    document.getElementById('description').value = `Papel Toalla en Z `;
    cotizar2();     
  }

  function agp9() {
    document.getElementById('title').value =  `Dispensadores`;
    document.getElementById('description').value = `jabon liquido`;
    cotizar2();     
  }       
    
  
  //desinfectantes> 
  
  function agp10() {
    document.getElementById('title').value =  `Desinfectante`;
    document.getElementById('description').value = `Liquido Concentrado`;
    cotizar2();       
  } 


  function agp11() {
 document.getElementById('title').value =  `Amonio`;
  document.getElementById('description').value = `Cuaternario`;
    cotizar2();       
  }  

  function agp12() {
document.getElementById('title').value =  `Cloro`;
document.getElementById('description').value = `al 5% y 10%`;
cotizar2();         
  } 


  function agp13() {
document.getElementById('title').value =  `Jabon`;
document.getElementById('description').value = `Liquido`;
cotizar2();     
  } 

  
  function agp14() {
    document.getElementById('title').value =  `Desengrasante`;
    document.getElementById('description').value = `Mundo Clean`;
    cotizar2();       
  } 


  function agp15() {
    document.getElementById('title').value =  `Desengrasante`;
    document.getElementById('description').value = `Tornado OZZ`;
    cotizar2();    
  } 


  function agp16() {
   document.getElementById('title').value =  `Limpia Vidrios`;
    document.getElementById('description').value = `Mundo Clean`;
    cotizar2();   
  } 
  
  //limpieza> 
  
  function agp17() {
    document.getElementById('title').value =  `Mopas de Barrido Y trapeo`;
    document.getElementById('description').value = `BINNER`;
    cotizar2();   
  }
 
  function agp18() {
    document.getElementById('title').value =  `Coches`;
    document.getElementById('description').value = `Limpieza`;
    cotizar2(); 
       
  }
  
  function agp19() {
    document.getElementById('title').value =  `Escobas`;
    document.getElementById('description').value = `Cerdas Suaves`;
    cotizar2();    
  }
  

  function agp20() {
    document.getElementById('title').value =  `Trapeadores`;
    document.getElementById('description').value = `fibras Resistentes`;
    cotizar2();     
  }


  
  function agp21() {
    document.getElementById('title').value =  `Fundas`;
    document.getElementById('description').value = `de Basura`;
    cotizar2();    
  }
  
  function agp22() {
    document.getElementById('title').value =  `Paños`;
    document.getElementById('description').value = `Microfibra`;
    cotizar2();          
  }
  
  function agp23() {
    document.getElementById('title').value =  `Detergente`;
    document.getElementById('description').value = `en Polvo`;
    cotizar2();     
  }
  
  function agp24() {
    document.getElementById('title').value =  `Detergente`;
    document.getElementById('description').value = `Liquido Enzimatico`;
    cotizar2();     
  }
  
  function agp25() {
    document.getElementById('title').value =  `Detergente`;
    document.getElementById('description').value = `de Ropa`;
    cotizar2();     
  }


  
  function agp26() {
  document.getElementById('title').value =  `Guantes`;
    document.getElementById('description').value = `de Caucho`;
    cotizar2();   
  }
  
  //maquinaria> 
  
  function agp27() {
    document.getElementById('title').value =  `Abrillantadoras`;
    document.getElementById('description').value = `Industriales`;
    cotizar2();       
  }

  
  function agp28() {
     document.getElementById('title').value =  `Aspiradoras`;
    document.getElementById('description').value = `de Polvo Y Agua`;
    cotizar2();    
  }                                             
  
  //bioseguridad>
  
  function agp29() {
    document.getElementById('title').value =  `Cepillo`;
    document.getElementById('description').value = `de Dientes`;
    cotizar2();        
  }
  
  function agp30() {
    document.getElementById('title').value =  `Alcohol`;
    document.getElementById('description').value = `al 70% "Mundo Clean`;
    cotizar2();   
  }
  
  function agp31() {
    document.getElementById('title').value =  `Gel Antibacterial`;
    document.getElementById('description').value = `DR Clean `;
    cotizar2();   
  }


  function msjcarrito() {
    Swal.fire({
        icon: 'success',
        showConfirmButton: false,
        text: 'Agregado al Carrito',
        timer: 500
      });
  
   
  }


  function cotizar2() {
    Swal.fire({
        title: 'Cotizar Producto',
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Añadir al Carrito',
      })
      .then((result) => {
        if (result.isConfirmed) {
          saveTask();
          msjcarrito();
        }else if (result.dismiss) {
            document.getElementById('formTask').reset();
          }
      })
  
    
  };
  

  function saveTask(e) {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
  
  
    let task = {
      title,
      description
    };
  
    if(localStorage.getItem('tasks') === null) {
      let tasks = [];
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    getTasks();
    document.getElementById('formTask').reset();
  
  }
  
  var index = 0; 
  
  function deleteTask(title) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for(let i = 0; i < tasks.length; i++) {
      if(tasks[i].title == title) {
        tasks.splice(i, 1);
        document.getElementById("numer").textContent = i ;
        document.getElementById("numer2").textContent = i ;
   
      }
    }
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
    getTasks();
  }
  
  
  var index2 = '';
  
  function getTasks() {
    if(localStorage.getItem('tasks') === null) {
      console.log('sinproductos')
    } else {
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      let tasksView = document.getElementById('tasks');
      tasksView.innerHTML = '';
      for(let i = 0; i < tasks.length; i++) {
        let title = tasks[i].title;
        let description = tasks[i].description;
        index2 = i + 1;
        document.getElementById("numer").textContent = index2  ;
        document.getElementById("numer2").textContent = index2 ;
        tasksView.innerHTML += `<div class="cardp">
            <div class="card-body">
              <p class="items">${title} - ${description}
              <a href="javascript:deleteTask('${title}')"><span class="fa fa-trash"></span ></a>
              </p>
           
            </div>
          </div>`;
       
      }
    }
    
  };

  
function whatsapp() {
  
    let allTasks = "";
let tasks = JSON.parse(localStorage.getItem('tasks'));

for (let i = 0; i < tasks.length; i++) {
  allTasks +=  "Producto:" + tasks[i].title + " Descrpicion " + tasks[i].description + " / " + "\n";
}

       clearLocalStorage();
       clearTasks();
};

  
  
  
  
   
  function clearLocalStorage() {
    localStorage.clear()
    ;
  
  }
  
  function clearTasks() {
    localStorage.removeItem('tasks');
    location.reload();
    getTasks();
  
  }
  

  getTasks();
  




    
    
    
    
    
      

        
        




