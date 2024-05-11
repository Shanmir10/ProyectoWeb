
// para la primera categoría -->

   let previewContainer1 = document.querySelector('.products-preview');
   let previewBoxes1 = previewContainer1.querySelectorAll('.preview');
 
   document.querySelectorAll('.container .product').forEach(product => {
     product.onclick = () => {
       previewContainer1.style.display = 'flex';
       let name = product.getAttribute('data-name');
       previewBoxes1.forEach(preview => {
         let target = preview.getAttribute('data-target');
         if (name == target) {
           preview.classList.add('active');
         }
       });
     };
   });
 
   previewBoxes1.forEach(close => {
     close.querySelector('.fa-times').onclick = () => {
       close.classList.remove('active');
       previewContainer1.style.display = 'none';
     };
   });

 
// JavaScript para la segunda categoría -->
 
   let previewContainer2 = document.querySelector('.products-preview_2');
   let previewBoxes2 = previewContainer2.querySelectorAll('.preview');
 
   document.querySelectorAll('.container_2 .product').forEach(product => {
     product.onclick = () => {
       previewContainer2.style.display = 'flex';
       let name = product.getAttribute('data-name');
       previewBoxes2.forEach(preview => {
         let target = preview.getAttribute('data-target');
         if (name == target) {
           preview.classList.add('active');
         }
       });
     };
   });
 
   previewBoxes2.forEach(close => {
     close.querySelector('.fa-times').onclick = () => {
       close.classList.remove('active');
       previewContainer2.style.display = 'none';
     };
   });
 
 
 
//  JavaScript para la tercera categoría -->

   let previewContainer3 = document.querySelector('.products-preview_3');
   let previewBoxes3 = previewContainer3.querySelectorAll('.preview');
 
   document.querySelectorAll('.container_3 .product').forEach(product => {
     product.onclick = () => {
       previewContainer3.style.display = 'flex';
       let name = product.getAttribute('data-name');
       previewBoxes3.forEach(preview => {
         let target = preview.getAttribute('data-target');
         if (name == target) {
           preview.classList.add('active');
         }
       });
     };
   });
 
   previewBoxes3.forEach(close => {
     close.querySelector('.fa-times').onclick = () => {
       close.classList.remove('active');
       previewContainer3.style.display = 'none';
     };
   });

const header = document.querySelector("header");

window.addEventListener("scroll", function(){
   header.classList.toggle("sticky",this.window.scrollY)
})

//CODIGO DE BOTONES DE CATEGORIA

function setActive(button, targetContainer) {
  // Obtener todos los botones
  var buttons = document.querySelectorAll('.filter_buttons button');
  
  // Remover la clase 'active' de todos los botones
  buttons.forEach(function(btn) {
    btn.classList.remove('active');
  });
  
  // Agregar la clase 'active' al botón seleccionado
  button.classList.add('active');
  
  // Mostrar solo el contenedor correspondiente a la categoría seleccionada
  var containers = document.querySelectorAll('.container, .container_2, .container_3');
  containers.forEach(function(container) {
    container.style.display = 'none';
  });
  
  if (targetContainer === 'all') {
    containers.forEach(function(container) {
      container.style.display = 'block';
    });
  } else {
    document.querySelector('.' + targetContainer).style.display = 'block';
  }
} 