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
//  JavaScript para la cuarta categoría -->

let previewContainer4 = document.querySelector('.products-preview_4');
let previewBoxes4 = previewContainer4.querySelectorAll('.preview');

document.querySelectorAll('.container_4 .product').forEach(product => {
  product.onclick = () => {
    previewContainer4.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBoxes4.forEach(preview => {
      let target = preview.getAttribute('data-target');
      if (name == target) {
        preview.classList.add('active');
      }
    });
  };
});

previewBoxes4.forEach(close => {
  close.querySelector('.fa-times').onclick = () => {
    close.classList.remove('active');
    previewContainer4.style.display = 'none';
  };
});

//  JavaScript para la quinta categoría -->

let previewContainer5 = document.querySelector('.products-preview_5');
let previewBoxes5 = previewContainer5.querySelectorAll('.preview');

document.querySelectorAll('.container_5 .product').forEach(product => {
  product.onclick = () => {
    previewContainer5.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBoxes5.forEach(preview => {
      let target = preview.getAttribute('data-target');
      if (name == target) {
        preview.classList.add('active');
      }
    });
  };
});

previewBoxes5.forEach(close => {
  close.querySelector('.fa-times').onclick = () => {
    close.classList.remove('active');
    previewContainer5.style.display = 'none';
  };
});

//  JavaScript para la sexta categoría -->

let previewContainer6 = document.querySelector('.products-preview_6');
let previewBoxes6 = previewContainer6.querySelectorAll('.preview');

document.querySelectorAll('.container_6 .product').forEach(product => {
  product.onclick = () => {
    previewContainer6.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBoxes6.forEach(preview => {
      let target = preview.getAttribute('data-target');
      if (name == target) {
        preview.classList.add('active');
      }
    });
  };
});

previewBoxes6.forEach(close => {
  close.querySelector('.fa-times').onclick = () => {
    close.classList.remove('active');
    previewContainer6.style.display = 'none';
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
var containers = document.querySelectorAll('.container, .container_2, .container_3,.container_4,.container_5,.container_6');
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

// Código para la flecha de desplazamiento
document.getElementById('arrow').addEventListener('click', function(event) {
  event.preventDefault();
  const target = document.getElementById('trending');
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
});



document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menu_icon');
  const navMenu = document.querySelector('.children');

  menuIcon.addEventListener('click', function() {
    menuIcon.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
});




// carrito:

// Variables
let containerBuyCart = document.querySelector('.lista-carrito');
let priceTotal = document.querySelector('.price-total');
let amountProduct = document.querySelector('.count-product');

let buyThings = [];
let totalCard = 0;
let countProduct = 0;

// Funciones
loadEventListeners();

function loadEventListeners() {
    document.querySelectorAll('.products-preview .cart').forEach(button => {
        button.addEventListener('click', addProduct);
    });

    containerBuyCart.addEventListener('click', deleteProduct);
}

function addProduct(e) {
    e.preventDefault();
    if (e.target.classList.contains('cart')) {
        const selectProduct = e.target.closest('.preview');
        readTheContent(selectProduct);
    }
}

function deleteProduct(e) {
    if (e.target.classList.contains('delete-product')) {
        const deleteId = e.target.getAttribute('data-id');

        buyThings.forEach((value, index) => {
            if (value.id == deleteId) {
                let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
                totalCard -= priceReduce;
                totalCard = totalCard.toFixed(2);
                buyThings.splice(index, 1);
            }
        });

        countProduct--;
    }

    if (buyThings.length === 0) {
        priceTotal.innerHTML = 0;
        amountProduct.innerHTML = 0;
    }

    loadHtml();
}

function readTheContent(product) {
    const infoProduct = {
        image: product.querySelector('img').src,
        title: product.querySelector('h3').textContent,
        price: product.querySelector('.price').textContent.replace('$', ''),
        id: product.getAttribute('data-target'),
        amount: 1
    }

    totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
    totalCard = totalCard.toFixed(2);

    const exist = buyThings.some(product => product.id === infoProduct.id);
    if (exist) {
        const pro = buyThings.map(product => {
            if (product.id === infoProduct.id) {
                product.amount++;
                return product;
            } else {
                return product
            }
        });
        buyThings = [...pro];
    } else {
        buyThings = [...buyThings, infoProduct];
        countProduct++;
    }
    loadHtml();
}

function loadHtml() {
    clearHtml();
    buyThings.forEach(product => {
        const { image, title, price, amount, id } = product;
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `
            <img src="${image}" alt="">
            <div class="item-content">
                <h5>${title}</h5>
                <h5 class="cart-price">$${price}</h5>
                <h6>Amount: ${amount}</h6>
            </div>
            <span class="delete-product" data-id="${id}">X</span>
        `;

        containerBuyCart.appendChild(row);

        priceTotal.innerHTML = totalCard;

        amountProduct.innerHTML = countProduct;
    });
}

function clearHtml() {
    containerBuyCart.innerHTML = '';
}

