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
        backarriba();
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
    else{
            history.back();
        
    }

    } 

function inicio() {
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
    contador=0;
    backweb();
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

function catalogos() {
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
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    let telefono = "593984880584";
  
    let cliente = document.querySelector("#cliente").value;
    let contacto = document.querySelector("#contacto").value;
    let venta = document.querySelector("#venta").value;
    let cantidad = document.querySelector("#cantidad").value;
    let productos = document.querySelector("#productos1").value;
    let resp = document.querySelector("#respuesta");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *Admon Distribuidores*%0A
          *Datos de la Cotización*%0A
          *Nombre de Cliente*%0A
          ${cliente}%0A
          *Numero de Contacto*%0A
          ${contacto}%0A
          *Tipo de Venta*%0A
          ${venta}%0A
          *Items*%0A
          ${cantidad}%0A
          *Cotizar*%0A
          ${productos}%0A`;
  
    if (cliente === "" || contacto === "" || venta === "" || productos === "" || cantidad === "" ) {
      resp.classList.add("fail");
      resp.innerHTML = `Espera, ${cliente} faltan algunos Datos `;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Tu Cotización Fue Enviada, ${cliente}`;
  
    window.open(url);
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
        text: 'Producto Agregado a la Lista',
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
  
      agregar = agregar + ` Papel Higiénico Jumbo Soott -`;
      document.querySelector("#productos1").value =  agregar;
      suma = suma +1;
      amountProduct.innerHTML = suma;
      document.querySelector("#cantidad").value =  suma ;
      msj2();
      
       
      }   
  
  function agp2() {
  
      agregar = agregar + ` Toalla Forest 100 metros -`;
      document.querySelector("#productos1").value =  agregar;
      suma = suma +1;
      amountProduct.innerHTML = suma;
      document.querySelector("#cantidad").value =  suma ;
      msj2();
       
  }
      
  function agp3() {
  
      agregar = agregar + ` Toalla Aurora 100 metros -`;
      document.querySelector("#productos1").value =  agregar;
      suma = suma +1;
      amountProduct.innerHTML = suma;
      document.querySelector("#cantidad").value =  suma ;
      msj2();
       
  }
  
  function agp4() {
  
      agregar = agregar + ` Toalla en Z Doble Hoja Aurora -`;
      document.querySelector("#productos1").value =  agregar;
      suma = suma +1;
      amountProduct.innerHTML = suma;
      document.querySelector("#cantidad").value =  suma ;
      msj2();
       
  }
  
  function agp5() {
  
      agregar = agregar + ` Toalla en Z Doble Hoja Forest -`;
      document.querySelector("#productos1").value =  agregar;
      suma = suma +1;
      amountProduct.innerHTML = suma;
      document.querySelector("#cantidad").value =  suma ;
      msj2();
       
  }
  
  function agp6() {
  
      agregar = agregar + ` Limpiones Industriales de 100, 300, 600 Metros -`;
      document.querySelector("#productos1").value =  agregar;
      suma = suma +1;
      amountProduct.innerHTML = suma;
      document.querySelector("#cantidad").value =  suma ;
      msj2();
       
  }
      
  //Dispensadores>   
        
  
  function agp7() {
  
      agregar = agregar + ` Dispensador de Papel Higenico -`;
      document.querySelector("#productos1").value =  agregar;
      suma = suma +1;
      amountProduct.innerHTML = suma;
      document.querySelector("#cantidad").value =  suma ;
      msj2();
       
  }
  function agp8() {
  
      agregar = agregar + ` Dispensador de Papel Toalla en Z -`;
      document.querySelector("#productos1").value =  agregar;
      suma = suma +1;
      amountProduct.innerHTML = suma;
      document.querySelector("#cantidad").value =  suma ;
      msj2();
       
  }
  function agp9() {
  
      agregar = agregar + ` Dispensadores de jabon liquido -`;
      document.querySelector("#productos1").value =  agregar;
      suma = suma +1;
      amountProduct.innerHTML = suma;
      document.querySelector("#cantidad").value =  suma ;
      msj2();
       
  }       
    
  
  //desinfectantes> 
  
  function agp10() {
  
      agregar = agregar + ` Desinfectante Liquido Concentrado -`;
      document.querySelector("#productos1").value =  agregar;
      suma = suma +1;
      amountProduct.innerHTML = suma;
      document.querySelector("#cantidad").value =  suma ;
      msj2();
       
  } 
  function agp11() {
  
      agregar = agregar + ` Amonio Cuaternario -`;
      document.querySelector("#productos1").value =  agregar;
      suma = suma +1;
      amountProduct.innerHTML = suma;
      document.querySelector("#cantidad").value =  suma ;
      msj2();
       
  } 
  function agp12() {
  
      agregar = agregar + ` Cloro al 5% y 10% -`;
      document.querySelector("#productos1").value =  agregar;
      suma = suma +1;
      amountProduct.innerHTML = suma;
      document.querySelector("#cantidad").value =  suma ;
      msj2();
       
  } 
  function agp13() {
  
      agregar = agregar + ` Jabon Liquido -`;
      document.querySelector("#productos1").value =  agregar;
      suma = suma +1;
      amountProduct.innerHTML = suma;
      document.querySelector("#cantidad").value =  suma ;
      msj2();
       
  } 
  function agp14() {
  
      agregar = agregar + ` Desengrasante "Mundo Clean -`;
      document.querySelector("#productos1").value =  agregar;
      suma = suma +1;
      amountProduct.innerHTML = suma;
      document.querySelector("#cantidad").value =  suma ;
      msj2();
       
  } 
  function agp15() {
  
      agregar = agregar + ` Desengrasante "Tornado OZZ -`;
      document.querySelector("#productos1").value =  agregar;
      suma = suma +1;
      amountProduct.innerHTML = suma;
      document.querySelector("#cantidad").value =  suma ;
      msj2();
       
  } 
  function agp16() {
  
      agregar = agregar + ` Limpia Vidrios "Mundo Clean -`;
      document.querySelector("#productos1").value =  agregar;
      suma = suma +1;
      amountProduct.innerHTML = suma;
      document.querySelector("#cantidad").value =  suma ;
      msj2();
       
  } 
  
  //limpieza> 
  
  function agp17() {
  
      agregar = agregar + ` Mopas de Barrido Y trapeo "BINNER -`;
      document.querySelector("#productos1").value =  agregar;
      suma = suma +1;
      amountProduct.innerHTML = suma;
      document.querySelector("#cantidad").value =  suma ;
      msj2();
       
  }
  
  function agp18() {
  
      agregar = agregar + ` Coches de Limpieza -`;
      document.querySelector("#productos1").value =  agregar;
      suma = suma +1;
      amountProduct.innerHTML = suma;
      document.querySelector("#cantidad").value =  suma ;
      msj2();
       
  }
  
  function agp19() {
  
      agregar = agregar + ` Escobas -`;
      document.querySelector("#productos1").value =  agregar;
      suma = suma +1;
      amountProduct.innerHTML = suma;
      document.querySelector("#cantidad").value =  suma ;
      msj2();
       
  }
  
  function agp20() {
  
      agregar = agregar + ` Trapeadores -`;
      document.querySelector("#productos1").value =  agregar;
      suma = suma +1;
      amountProduct.innerHTML = suma;
      document.querySelector("#cantidad").value =  suma ;
      msj2();
       
  }
  
  function agp21() {
  
      agregar = agregar + ` Fundas de Basura -`;
      document.querySelector("#productos1").value =  agregar;
      suma = suma +1;
      amountProduct.innerHTML = suma;
      document.querySelector("#cantidad").value =  suma ;
      msj2();
       
  }
  
  function agp22() {
  
      agregar = agregar + ` Paños Microfibra -`;
      document.querySelector("#productos1").value =  agregar;
      suma = suma +1;
      amountProduct.innerHTML = suma;
      document.querySelector("#cantidad").value =  suma ;
      msj2();
       
  }
  
  function agp23() {
  
      agregar = agregar + ` Detergente en Polvo -`;
      document.querySelector("#productos1").value =  agregar;
      suma = suma +1;
      amountProduct.innerHTML = suma;
      document.querySelector("#cantidad").value =  suma ;
      msj2();
       
  }
  
  function agp24() {
  
      agregar = agregar + ` Detergente Liquido Enzimatico -`;
      document.querySelector("#productos1").value =  agregar;
      suma = suma +1;
      amountProduct.innerHTML = suma;
      document.querySelector("#cantidad").value =  suma ;
      msj2();
       
  }
  
  function agp25() {
  
      agregar = agregar + ` Detergente de Ropa -`;
      document.querySelector("#productos1").value =  agregar;
      suma = suma +1;
      amountProduct.innerHTML = suma;
      document.querySelector("#cantidad").value =  suma ;
      msj2();
       
  }
  
  function agp26() {
  
      agregar = agregar + ` Guantes de Caucho -`;
      document.querySelector("#productos1").value =  agregar;
      suma = suma +1;
      amountProduct.innerHTML = suma;
      document.querySelector("#cantidad").value =  suma ;
      msj2();
       
  }
  
  //maquinaria> 
  
  function agp27() {
  
      agregar = agregar + ` Abrillantadoras Industriale -`;
      document.querySelector("#productos1").value =  agregar;
      suma = suma +1;
      amountProduct.innerHTML = suma;
      document.querySelector("#cantidad").value =  suma ;
      msj2();
       
  }
  
  function agp28() {
  
      agregar = agregar + ` Aspiradoras de Polvo Y Agua -`;
      document.querySelector("#productos1").value =  agregar;
      suma = suma +1;
      amountProduct.innerHTML = suma;
      document.querySelector("#cantidad").value =  suma ;
      msj2();
       
  }                                             
  
  //bioseguridad>
  
  function agp29() {
  
      agregar = agregar + ` Cepillo de Dientes -`;
      document.querySelector("#productos1").value =  agregar;
      suma = suma +1;
      amountProduct.innerHTML = suma;
      document.querySelector("#cantidad").value =  suma ;
      msj2();
       
  }
  
  function agp30() {
  
      agregar = agregar + ` Alcohol al 70% "Mundo Clean -`;
      document.querySelector("#productos1").value =  agregar;
      suma = suma +1;
      amountProduct.innerHTML = suma;
      document.querySelector("#cantidad").value =  suma ;
      msj2();
       
  }
  
  function agp31() {
  
      agregar = agregar + ` Gel Antibacterial "DR Clean -`;
      document.querySelector("#productos1").value =  agregar;
      suma = suma +1;
      amountProduct.innerHTML = suma;
      document.querySelector("#cantidad").value =  suma ;
      msj2();
       
  }

  




    
    
    
    
    
      

        
        




