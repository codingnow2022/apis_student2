
// document.addEventListener('DOMContentLoaded', function() {
//     var carousel = document.querySelector('.carousel');
//     var prevButton = carousel.querySelector('.prev-button');
//     var nextButton = carousel.querySelector('.next-button');
//     var carouselItems = carousel.querySelector('.carousel-items');
//     var items = carousel.querySelectorAll('.item');
//     var pagination = carousel.querySelector('.pagination');
//     var currentIndex = 0;
//     var visibleItems = 3;
//     var itemWidth = items[0].offsetWidth;
//     var totalItems = items.length;
//     var totalVisibleItems = Math.min(visibleItems, totalItems);
//     var isDragging = false;
//     var startPosX = 0;
//     var currentTranslateX = 0;

//     // Clonar los primeros elementos y agregarlos al final del carousel
//     for (var i = 0; i < totalVisibleItems; i++) {
//       carouselItems.appendChild(items[i].cloneNode(true));
//     }

//     // Crear los paginadores
//     for (var i = 0; i < totalItems; i++) {
//       var paginatorItem = document.createElement('a');
//       paginatorItem.classList.add('paginator-item');
//       paginatorItem.setAttribute('href', '#');
//       paginatorItem.setAttribute('data-index', i);
//       paginatorItem.textContent = (i + 1).toString();
//       if (i === currentIndex) {
//         paginatorItem.classList.add('active');
//       }
//       pagination.appendChild(paginatorItem);
//     }

//     // Función para mover el carousel
//     function moveCarousel(translateX) {
//       carouselItems.style.transform = 'translateX(' + translateX + 'px)';
//     }

//     // Función para actualizar la posición del carousel
//     function updateCarouselPosition() {
//       var translateX = currentIndex * -itemWidth;
//       moveCarousel(translateX);
//       setActiveItems();
//       setActivePaginator();
//     }

//     // Función para establecer los items activos
//     function setActiveItems() {
//       var activeIndex = currentIndex % totalItems;
//       for (var i = 0; i < items.length; i++) {
//         items[i].classList.remove('active');
//       }
//       items[activeIndex].classList.add('active');
//     }

//     // Función para establecer el paginador activo
//     function setActivePaginator() {
//       var paginatorItems = pagination.querySelectorAll('.paginator-item');
//       for (var i = 0; i < paginatorItems.length; i++) {
//         paginatorItems[i].classList.remove('active');
//       }
//       paginatorItems[currentIndex].classList.add('active');
//     }

//     // Evento de inicio de arrastre
//     function dragStart(event) {
//       isDragging = true;
//       startPosX = event.clientX || event.touches[0].clientX;
//       currentTranslateX = currentIndex * -itemWidth;
//       carouselItems.style.transition = 'none';
//     }

//     // Evento de arrastre
//     function drag(event) {
//       if (!isDragging) return;
//       var clientX = event.clientX || event.touches[0].clientX;
//       var deltaX = clientX - startPosX;
//       var translateX = currentTranslateX + deltaX;
//       moveCarousel(translateX);
//     }

//     // Evento de finalización de arrastre
//     function dragEnd(event) {
//       if (!isDragging) return;
//       var clientX = event.clientX || event.changedTouches[0].clientX;
//       var deltaX = clientX - startPosX;
//       var threshold = itemWidth * 0.2; // Umbral para considerar el arrastre como un cambio de ítem

//       if (deltaX > threshold) {
//         currentIndex--;
//       } else if (deltaX < -threshold) {
//         currentIndex++;
//       }

//       currentIndex = Math.max(0, Math.min(currentIndex, totalItems - 1));
//       carouselItems.style.transition = 'transform 0.5s ease-in-out';
//       updateCarouselPosition();

//       isDragging = false;
//       startPosX = 0;
//       currentTranslateX = 0;
//     }

//     // Función para mover el carousel hacia la izquierda
//     function moveCarouselLeft() {
//       currentIndex--;
//       if (currentIndex < 0) {
//         currentIndex = totalItems - 1;
//         carouselItems.style.transition = 'none';
//         carouselItems.style.transform = 'translateX(' + (-totalItems * itemWidth) + 'px)';
//         setTimeout(function() {
//           carouselItems.style.transition = 'transform 0.5s ease-in-out';
//           currentIndex = totalItems - visibleItems;
//           updateCarouselPosition();
//         }, 0);
//       } else {
//         updateCarouselPosition();
//       }
//     }

//     // Función para mover el carousel hacia la derecha
//     function moveCarouselRight() {
//       currentIndex++;
//       if (currentIndex >= totalItems + visibleItems) {
//         currentIndex = visibleItems;
//         carouselItems.style.transition = 'none';
//         carouselItems.style.transform = 'translateX(' + (-visibleItems * itemWidth) + 'px)';
//         setTimeout(function() {
//           carouselItems.style.transition = 'transform 0.5s ease-in-out';
//           currentIndex = visibleItems + 1;
//           updateCarouselPosition();
//         }, 0);
//       } else {
//         updateCarouselPosition();
//       }
//     }

//     // Función para manejar el cambio de ítem al hacer clic en un paginador
//     function handlePaginatorClick(event) {
//       event.preventDefault();
//       var targetIndex = parseInt(event.target.getAttribute('data-index'));
//       currentIndex = targetIndex;
//       carouselItems.style.transition = 'transform 0.5s ease-in-out';
//       updateCarouselPosition();
//     }

//     // Event listeners para arrastrar
//     carouselItems.addEventListener('mousedown', dragStart);
//     carouselItems.addEventListener('mousemove', drag);
//     carouselItems.addEventListener('mouseup', dragEnd);
//     carouselItems.addEventListener('mouseleave', dragEnd);
//     carouselItems.addEventListener('touchstart', dragStart);
//     carouselItems.addEventListener('touchmove', drag);
//     carouselItems.addEventListener('touchend', dragEnd);

//     // Event listeners para los botones de navegación
//     prevButton.addEventListener('click', moveCarouselLeft);
//     nextButton.addEventListener('click', moveCarouselRight);

//     // Event listener para el clic en los paginadores
//     pagination.addEventListener('click', handlePaginatorClick);

//     // Establecer los items iniciales como activos
//     setActiveItems();
//   });


































// document.addEventListener('DOMContentLoaded', function() {
//     var carousel = document.querySelector('.carousel');
//     var prevButton = carousel.querySelector('.prev-button');
//     var nextButton = carousel.querySelector('.next-button');
//     var carouselItems = carousel.querySelector('.carousel-items');
//     var items = carousel.querySelectorAll('.item');
//     var pagination = carousel.querySelector('.pagination');
//     var currentIndex = 0;
//     var visibleItems = 3;
//     var itemWidth = items[0].offsetWidth;
//     var totalItems = items.length;
//     var totalVisibleItems = Math.min(visibleItems, totalItems);
//     var isDragging = false;
//     var startPosX = 0;
//     var currentTranslateX = 0;

//     // Clonar los primeros elementos y agregarlos al final del carousel
//     for (var i = 0; i < totalVisibleItems; i++) {
//       carouselItems.appendChild(items[i].cloneNode(true));
//     }

//     // Crear los paginadores
//     for (var i = 0; i < totalItems; i++) {
//       var paginatorItem = document.createElement('a');
//       paginatorItem.classList.add('paginator-item');
//       paginatorItem.setAttribute('href', '#');
//       paginatorItem.setAttribute('data-index', i);
//       if (i === currentIndex) {
//         paginatorItem.classList.add('active');
//       }
//       pagination.appendChild(paginatorItem);
//     }

//     // Función para mover el carousel
//     function moveCarousel(translateX) {
//       carouselItems.style.transform = 'translateX(' + translateX + 'px)';
//     }

//     // Función para actualizar la posición del carousel
//     function updateCarouselPosition() {
//       var translateX = currentIndex * -itemWidth;
//       moveCarousel(translateX);
//       setActiveItems();
//       setActivePaginator();
//     }

//     // Función para establecer los items activos
//     function setActiveItems() {
//       var activeIndex = currentIndex % totalItems;
//       for (var i = 0; i < items.length; i++) {
//         items[i].classList.remove('active');
//       }
//       items[activeIndex].classList.add('active');
//     }

//     // Función para establecer el paginador activo
//     function setActivePaginator() {
//       var paginatorItems = pagination.querySelectorAll('.paginator-item');
//       for (var i = 0; i < paginatorItems.length; i++) {
//         paginatorItems[i].classList.remove('active');
//       }
//       paginatorItems[currentIndex].classList.add('active');
//     }

//     // Evento de inicio de arrastre
//     function dragStart(event) {
//       isDragging = true;
//       startPosX = event.clientX || event.touches[0].clientX;
//       currentTranslateX = currentIndex * -itemWidth;
//       carouselItems.style.transition = 'none';
//     }

//     // Evento de arrastre
//     function drag(event) {
//       if (!isDragging) return;
//       var clientX = event.clientX || event.touches[0].clientX;
//       var deltaX = clientX - startPosX;
//       var translateX = currentTranslateX + deltaX;
//       moveCarousel(translateX);
//     }

//     // Evento de finalización de arrastre
//     function dragEnd(event) {
//       if (!isDragging) return;
//       var clientX = event.clientX || event.changedTouches[0].clientX;
//       var deltaX = clientX - startPosX;
//       var threshold = itemWidth * 0.2; // Umbral para considerar el arrastre como un cambio de ítem

//       if (deltaX > threshold) {
//         currentIndex--;
//       } else if (deltaX < -threshold) {
//         currentIndex++;
//       }

//       currentIndex = Math.max(0, Math.min(currentIndex, totalItems - 1));
//       carouselItems.style.transition = 'transform 0.5s ease-in-out';
//       updateCarouselPosition();

//       isDragging = false;
//       startPosX = 0;
//       currentTranslateX = 0;
//     }

//     // Función para mover el carousel hacia la izquierda
//     function moveCarouselLeft() {
//       currentIndex--;
//       if (currentIndex < 0) {
//         currentIndex = totalItems - 1;
//         carouselItems.style.transition = 'none';
//         carouselItems.style.transform = 'translateX(' + (-totalItems * itemWidth) + 'px)';
//         setTimeout(function() {
//           carouselItems.style.transition = 'transform 0.5s ease-in-out';
//           currentIndex = totalItems - visibleItems;
//           updateCarouselPosition();
//         }, 0);
//       } else {
//         updateCarouselPosition();
//       }
//     }

//     // Función para mover el carousel hacia la derecha
//     function moveCarouselRight() {
//       currentIndex++;
//       if (currentIndex >= totalItems + visibleItems) {
//         currentIndex = visibleItems;
//         carouselItems.style.transition = 'none';
//         carouselItems.style.transform = 'translateX(' + (-visibleItems * itemWidth) + 'px)';
//         setTimeout(function() {
//           carouselItems.style.transition = 'transform 0.5s ease-in-out';
//           currentIndex = visibleItems + 1;
//           updateCarouselPosition();
//         }, 0);
//       } else {
//         updateCarouselPosition();
//       }
//     }

//     // Función para manejar el cambio de ítem al hacer clic en un paginador
//     function handlePaginatorClick(event) {
//       event.preventDefault();
//       var targetIndex = parseInt(event.target.getAttribute('data-index'));
//       currentIndex = targetIndex;
//       carouselItems.style.transition = 'transform 0.5s ease-in-out';
//       updateCarouselPosition();
//     }

//     // Event listeners para arrastrar
//     carouselItems.addEventListener('mousedown', dragStart);
//     carouselItems.addEventListener('mousemove', drag);
//     carouselItems.addEventListener('mouseup', dragEnd);
//     carouselItems.addEventListener('mouseleave', dragEnd);
//     carouselItems.addEventListener('touchstart', dragStart);
//     carouselItems.addEventListener('touchmove', drag);
//     carouselItems.addEventListener('touchend', dragEnd);

//     // Event listeners para los botones de navegación
//     prevButton.addEventListener('click', moveCarouselLeft);
//     nextButton.addEventListener('click', moveCarouselRight);

//     // Event listener para el clic en los paginadores
//     pagination.addEventListener('click', handlePaginatorClick);

//     // Establecer los items iniciales como activos
//     setActiveItems();
//   });


























// document.addEventListener('DOMContentLoaded', function() {
//     var carousel = document.querySelector('.carousel');
//     var prevButton = carousel.querySelector('.prev-button');
//     var nextButton = carousel.querySelector('.next-button');
//     var carouselItems = carousel.querySelector('.carousel-items');
//     var items = carousel.querySelectorAll('.item');
//     var pagination = carousel.querySelector('.pagination');
//     var currentIndex = 0;
//     var visibleItems = 3;
//     var itemWidth = items[0].offsetWidth;
//     var totalItems = items.length;
//     var totalVisibleItems = Math.min(visibleItems, totalItems);
//     var isDragging = false;
//     var startPosX = 0;
//     var currentTranslateX = 0;

//     // Clonar los primeros elementos y agregarlos al final del carousel
//     for (var i = 0; i < totalVisibleItems; i++) {
//       carouselItems.appendChild(items[i].cloneNode(true));
//     }

//     // Crear los paginadores
//     for (var i = 0; i < totalItems; i++) {
//       var paginatorItem = document.createElement('span');
//       paginatorItem.classList.add('paginator-item');
//       paginatorItem.setAttribute('data-index', i);
//       if (i === currentIndex) {
//         paginatorItem.classList.add('active');
//       }
//       pagination.appendChild(paginatorItem);
//     }

//     // Función para mover el carousel
//     function moveCarousel(translateX) {
//       carouselItems.style.transform = 'translateX(' + translateX + 'px)';
//     }

//     // Función para actualizar la posición del carousel
//     function updateCarouselPosition() {
//       var translateX = currentIndex * -itemWidth;
//       moveCarousel(translateX);
//       setActiveItems();
//       setActivePaginator();
//     }

//     // Función para establecer los items activos
//     function setActiveItems() {
//       var activeIndex = currentIndex % totalItems;
//       for (var i = 0; i < items.length; i++) {
//         items[i].classList.remove('active');
//       }
//       items[activeIndex].classList.add('active');
//     }

//     // Función para establecer el paginador activo
//     function setActivePaginator() {
//       var paginatorItems = pagination.querySelectorAll('.paginator-item');
//       for (var i = 0; i < paginatorItems.length; i++) {
//         paginatorItems[i].classList.remove('active');
//       }
//       paginatorItems[currentIndex].classList.add('active');
//     }

//     // Evento de inicio de arrastre
//     function dragStart(event) {
//       isDragging = true;
//       startPosX = event.clientX || event.touches[0].clientX;
//       currentTranslateX = currentIndex * -itemWidth;
//       carouselItems.style.transition = 'none';
//     }

//     // Evento de arrastre
//     function drag(event) {
//       if (!isDragging) return;
//       var clientX = event.clientX || event.touches[0].clientX;
//       var deltaX = clientX - startPosX;
//       var translateX = currentTranslateX + deltaX;
//       moveCarousel(translateX);
//     }

//     // Evento de finalización de arrastre
//     function dragEnd(event) {
//       if (!isDragging) return;
//       var clientX = event.clientX || event.changedTouches[0].clientX;
//       var deltaX = clientX - startPosX;
//       var threshold = itemWidth * 0.2; // Umbral para considerar el arrastre como un cambio de ítem

//       if (deltaX > threshold) {
//         currentIndex--;
//       } else if (deltaX < -threshold) {
//         currentIndex++;
//       }

//       currentIndex = Math.max(0, Math.min(currentIndex, totalItems - 1));
//       carouselItems.style.transition = 'transform 0.5s ease-in-out';
//       updateCarouselPosition();

//       isDragging = false;
//       startPosX = 0;
//       currentTranslateX = 0;
//     }

//     // Función para mover el carousel hacia la izquierda
//     function moveCarouselLeft() {
//       currentIndex--;
//       if (currentIndex < 0) {
//         currentIndex = totalItems - 1;
//         carouselItems.style.transition = 'none';
//         carouselItems.style.transform = 'translateX(' + (-totalItems * itemWidth) + 'px)';
//         setTimeout(function() {
//           carouselItems.style.transition = 'transform 0.5s ease-in-out';
//           currentIndex = totalItems - visibleItems;
//           updateCarouselPosition();
//         }, 0);
//       } else {
//         updateCarouselPosition();
//       }
//     }

//     // Función para mover el carousel hacia la derecha
//     function moveCarouselRight() {
//       currentIndex++;
//       if (currentIndex >= totalItems + visibleItems) {
//         currentIndex = visibleItems;
//         carouselItems.style.transition = 'none';
//         carouselItems.style.transform = 'translateX(' + (-visibleItems * itemWidth) + 'px)';
//         setTimeout(function() {
//           carouselItems.style.transition = 'transform 0.5s ease-in-out';
//           currentIndex = visibleItems + 1;
//           updateCarouselPosition();
//         }, 0);
//       } else {
//         updateCarouselPosition();
//       }
//     }

//     // Función para manejar el cambio de ítem al hacer clic en un paginador
//     function handlePaginatorClick(event) {
//       var targetIndex = parseInt(event.target.getAttribute('data-index'));
//       currentIndex = targetIndex;
//       carouselItems.style.transition = 'transform 0.5s ease-in-out';
//       updateCarouselPosition();
//     }

//     // Event listeners para arrastrar
//     carouselItems.addEventListener('mousedown', dragStart);
//     carouselItems.addEventListener('mousemove', drag);
//     carouselItems.addEventListener('mouseup', dragEnd);
//     carouselItems.addEventListener('mouseleave', dragEnd);
//     carouselItems.addEventListener('touchstart', dragStart);
//     carouselItems.addEventListener('touchmove', drag);
//     carouselItems.addEventListener('touchend', dragEnd);

//     // Event listeners para los botones de navegación
//     prevButton.addEventListener('click', moveCarouselLeft);
//     nextButton.addEventListener('click', moveCarouselRight);

//     // Event listener para el clic en los paginadores
//     pagination.addEventListener('click', handlePaginatorClick);

//     // Establecer los items iniciales como activos
//     setActiveItems();
//   });















// document.addEventListener('DOMContentLoaded', function() {
//     var carousel = document.querySelector('.carousel');
//     var prevButton = carousel.querySelector('.prev-button');
//     var nextButton = carousel.querySelector('.next-button');
//     var carouselItems = carousel.querySelector('.carousel-items');
//     var items = carousel.querySelectorAll('.item');
//     var currentIndex = 0;
//     var visibleItems = 3;
//     var itemWidth = items[0].offsetWidth;
//     var totalItems = items.length;
//     var totalVisibleItems = Math.min(visibleItems, totalItems);
//     var isDragging = false;
//     var startPosX = 0;
//     var currentTranslateX = 0;

//     // Clonar los primeros elementos y agregarlos al final del carousel
//     for (var i = 0; i < totalVisibleItems; i++) {
//       carouselItems.appendChild(items[i].cloneNode(true));
//     }

//     // Función para mover el carousel
//     function moveCarousel(translateX) {
//       carouselItems.style.transform = 'translateX(' + translateX + 'px)';
//     }

//     // Función para actualizar la posición del carousel
//     function updateCarouselPosition() {
//       var translateX = currentIndex * -itemWidth;
//       moveCarousel(translateX);
//       setActiveItems();
//     }

//     // Función para establecer los items activos
//     function setActiveItems() {
//       var activeIndex = currentIndex % totalItems;
//       for (var i = 0; i < items.length; i++) {
//         items[i].classList.remove('active');
//       }
//       items[activeIndex].classList.add('active');
//     }

//     // Evento de inicio de arrastre
//     function dragStart(event) {
//       isDragging = true;
//       startPosX = event.clientX || event.touches[0].clientX;
//       currentTranslateX = currentIndex * -itemWidth;
//       carouselItems.style.transition = 'none';
//     }

//     // Evento de arrastre
//     function drag(event) {
//       if (!isDragging) return;
//       var clientX = event.clientX || event.touches[0].clientX;
//       var deltaX = clientX - startPosX;
//       var translateX = currentTranslateX + deltaX;
//       moveCarousel(translateX);
//     }

//     // Evento de finalización de arrastre
//     function dragEnd(event) {
//       if (!isDragging) return;
//       var clientX = event.clientX || event.changedTouches[0].clientX;
//       var deltaX = clientX - startPosX;
//       var threshold = itemWidth * 0.2; // Umbral para considerar el arrastre como un cambio de ítem

//       if (deltaX > threshold) {
//         currentIndex--;
//       } else if (deltaX < -threshold) {
//         currentIndex++;
//       }

//       currentIndex = Math.max(0, Math.min(currentIndex, totalItems - 1));
//       carouselItems.style.transition = 'transform 0.5s ease-in-out';
//       updateCarouselPosition();

//       isDragging = false;
//       startPosX = 0;
//       currentTranslateX = 0;
//     }

//     // Función para mover el carousel hacia la izquierda
//     function moveCarouselLeft() {
//       currentIndex--;
//       if (currentIndex < 0) {
//         currentIndex = totalItems - 1;
//         carouselItems.style.transition = 'none';
//         carouselItems.style.transform = 'translateX(' + (-totalItems * itemWidth) + 'px)';
//         setTimeout(function() {
//           carouselItems.style.transition = 'transform 0.5s ease-in-out';
//           currentIndex = totalItems - visibleItems;
//           updateCarouselPosition();
//         }, 0);
//       } else {
//         updateCarouselPosition();
//       }
//     }

//     // Función para mover el carousel hacia la derecha
//     function moveCarouselRight() {
//       currentIndex++;
//       if (currentIndex >= totalItems + visibleItems) {
//         currentIndex = visibleItems;
//         carouselItems.style.transition = 'none';
//         carouselItems.style.transform = 'translateX(' + (-visibleItems * itemWidth) + 'px)';
//         setTimeout(function() {
//           carouselItems.style.transition = 'transform 0.5s ease-in-out';
//           currentIndex = visibleItems + 1;
//           updateCarouselPosition();
//         }, 0);
//       } else {
//         updateCarouselPosition();
//       }
//     }

//     // Event listeners para arrastrar
//     carouselItems.addEventListener('mousedown', dragStart);
//     carouselItems.addEventListener('mousemove', drag);
//     carouselItems.addEventListener('mouseup', dragEnd);
//     carouselItems.addEventListener('mouseleave', dragEnd);
//     carouselItems.addEventListener('touchstart', dragStart);
//     carouselItems.addEventListener('touchmove', drag);
//     carouselItems.addEventListener('touchend', dragEnd);

//     // Event listeners para los botones de navegación
//     prevButton.addEventListener('click', moveCarouselLeft);
//     nextButton.addEventListener('click', moveCarouselRight);

//     // Establecer los items iniciales como activos
//     setActiveItems();
//   });



















// document.addEventListener('DOMContentLoaded', function() {
//     var carousel = document.querySelector('.carousel');
//     var carouselItems = carousel.querySelector('.carousel-items');
//     var items = carousel.querySelectorAll('.item');
//     var currentIndex = 0;
//     var visibleItems = 3;
//     var itemWidth = items[0].offsetWidth;
//     var totalItems = items.length;
//     var totalVisibleItems = Math.min(visibleItems, totalItems);
//     var isDragging = false;
//     var startPosX = 0;
//     var currentTranslateX = 0;

//     // Clonar los primeros elementos y agregarlos al final del carousel
//     for (var i = 0; i < totalVisibleItems; i++) {
//       carouselItems.appendChild(items[i].cloneNode(true));
//     }

//     // Función para mover el carousel
//     function moveCarousel(translateX) {
//       carouselItems.style.transform = 'translateX(' + translateX + 'px)';
//     }

//     // Función para actualizar la posición del carousel
//     function updateCarouselPosition() {
//       var translateX = currentIndex * -itemWidth;
//       moveCarousel(translateX);
//       setActiveItems();
//     }

//     // Función para establecer los items activos
//     function setActiveItems() {
//       var activeIndex = currentIndex % totalItems;
//       for (var i = 0; i < items.length; i++) {
//         items[i].classList.remove('active');
//       }
//       items[activeIndex].classList.add('active');
//     }

//     // Evento de inicio de arrastre
//     function dragStart(event) {
//       isDragging = true;
//       startPosX = event.clientX;
//       currentTranslateX = currentIndex * -itemWidth;
//       carouselItems.style.transition = 'none';
//     }

//     // Evento de arrastre
//     function drag(event) {
//       if (!isDragging) return;
//       var deltaX = event.clientX - startPosX;
//       var translateX = currentTranslateX + deltaX;
//       moveCarousel(translateX);
//     }

//     // Evento de finalización de arrastre
//     function dragEnd(event) {
//       if (!isDragging) return;
//       var deltaX = event.clientX - startPosX;
//       var threshold = itemWidth * 0.2; // Umbral para considerar el arrastre como un cambio de ítem

//       if (deltaX > threshold) {
//         currentIndex--;
//       } else if (deltaX < -threshold) {
//         currentIndex++;
//       }

//       currentIndex = Math.max(0, Math.min(currentIndex, totalItems - 1));
//       carouselItems.style.transition = 'transform 0.5s ease-in-out';
//       updateCarouselPosition();

//       isDragging = false;
//       startPosX = 0;
//       currentTranslateX = 0;
//     }

//     // Event listeners para arrastrar
//     carouselItems.addEventListener('mousedown', dragStart);
//     carouselItems.addEventListener('mousemove', drag);
//     carouselItems.addEventListener('mouseup', dragEnd);
//     carouselItems.addEventListener('mouseleave', dragEnd);
//     carouselItems.addEventListener('touchstart', dragStart);
//     carouselItems.addEventListener('touchmove', drag);
//     carouselItems.addEventListener('touchend', dragEnd);

//     // Establecer los items iniciales como activos
//     setActiveItems();
//   });












// document.addEventListener('DOMContentLoaded', function() {
//     var carousel = document.querySelector('.carousel');
//     var prevButton = carousel.querySelector('.prev-button');
//     var nextButton = carousel.querySelector('.next-button');
//     var carouselItems = carousel.querySelector('.carousel-items');
//     var items = carousel.querySelectorAll('.item');
//     var currentIndex = 0;
//     var visibleItems = 3;
//     var itemWidth = items[0].offsetWidth;
//     var totalItems = items.length;
//     var totalVisibleItems = Math.min(visibleItems, totalItems);

//     // Clonar los primeros elementos y agregarlos al final del carousel
//     for (var i = 0; i < totalVisibleItems; i++) {
//       carouselItems.appendChild(items[i].cloneNode(true));
//     }

//     // Función para mover el carousel hacia la izquierda
//     function moveCarouselLeft() {
//       currentIndex--;
//       if (currentIndex < 0) {
//         currentIndex = totalItems - 1;
//         carouselItems.style.transition = 'none';
//         carouselItems.style.transform = 'translateX(' + (-totalItems * itemWidth) + 'px)';
//         setTimeout(function() {
//           carouselItems.style.transition = 'transform 0.5s ease-in-out';
//           currentIndex = totalItems - visibleItems;
//           updateCarouselPosition();
//         }, 0);
//       } else {
//         updateCarouselPosition();
//       }
//     }

//     // Función para mover el carousel hacia la derecha
//     function moveCarouselRight() {
//       currentIndex++;
//       if (currentIndex >= totalItems + visibleItems) {
//         currentIndex = visibleItems;
//         carouselItems.style.transition = 'none';
//         carouselItems.style.transform = 'translateX(' + (-visibleItems * itemWidth) + 'px)';
//         setTimeout(function() {
//           carouselItems.style.transition = 'transform 0.5s ease-in-out';
//           currentIndex = visibleItems + 1;
//           updateCarouselPosition();
//         }, 0);
//       } else {
//         updateCarouselPosition();
//       }
//     }

//     // Función para actualizar la posición del carousel
//     function updateCarouselPosition() {
//       var newPosition = -currentIndex * itemWidth;
//       carouselItems.style.transform = 'translateX(' + newPosition + 'px)';
//       setActiveItems();
//     }

//     // Función para establecer los items activos
//     function setActiveItems() {
//       var activeIndex = currentIndex % totalItems;
//       for (var i = 0; i < items.length; i++) {
//         items[i].classList.remove('active');
//       }
//       items[activeIndex].classList.add('active');
//     }

//     // Event listeners para los botones de navegación
//     prevButton.addEventListener('click', moveCarouselLeft);
//     nextButton.addEventListener('click', moveCarouselRight);

//     // Establecer los items iniciales como activos
//     setActiveItems();
//   });













// document.addEventListener('DOMContentLoaded', function() {
//     var carousel = document.querySelector('.carousel');
//     var prevButton = carousel.querySelector('.prev-button');
//     var nextButton = carousel.querySelector('.next-button');
//     var carouselItems = carousel.querySelector('.carousel-items');
//     var items = carousel.querySelectorAll('.item');
//     var currentIndex = 0;
//     var visibleItems = 3;
//     var itemWidth = items[0].offsetWidth;
//     var totalItems = items.length;
//     var totalVisibleItems = Math.min(visibleItems, totalItems);

//     // Función para mover el carousel hacia la izquierda
//     function moveCarouselLeft() {
//       currentIndex--;
//       if (currentIndex < 0) {
//         currentIndex = totalItems - 1;
//       }
//       updateCarouselPosition();
//     }

//     // Función para mover el carousel hacia la derecha
//     function moveCarouselRight() {
//       currentIndex++;
//       if (currentIndex >= totalItems) {
//         currentIndex = 0;
//       }
//       updateCarouselPosition();
//     }

//     // Función para actualizar la posición del carousel
//     function updateCarouselPosition() {
//       var startPosition = currentIndex;
//       var endPosition = currentIndex + visibleItems;
//       if (endPosition > totalItems) {
//         endPosition = totalItems;
//       }
//       var newPosition = -startPosition * itemWidth;
//       carouselItems.style.transform = 'translateX(' + newPosition + 'px)';
//       setActiveItems(startPosition, endPosition);
//     }

//     // Función para establecer los items activos
//     function setActiveItems(start, end) {
//       for (var i = 0; i < items.length; i++) {
//         items[i].classList.remove('active');
//       }
//       for (var j = start; j < end; j++) {
//         items[j].classList.add('active');
//       }
//     }

//     // Event listeners para los botones de navegación
//     prevButton.addEventListener('click', moveCarouselLeft);
//     nextButton.addEventListener('click', moveCarouselRight);

//     // Establecer los items iniciales como activos
//     setActiveItems(0, totalVisibleItems);
//   });



// document.addEventListener('DOMContentLoaded', function() {
//   var carousel = document.querySelector('.carousel');
//   var prevButton = carousel.querySelector('.prev-button');
//   var nextButton = carousel.querySelector('.next-button');
//   var carouselItems = carousel.querySelector('.carousel-items');
//   var items = carousel.querySelectorAll('.item');
//   var pagination = carousel.querySelector('.pagination');
//   var currentIndex = 0;
//   var visibleItems = 3;
//   var itemWidth = items[0].offsetWidth;
//   var totalItems = items.length;
//   var totalVisibleItems = Math.min(visibleItems, totalItems);

//   // Crear los paginadores
//   for (var i = 0; i < totalItems; i++) {
//     var paginatorItem = document.createElement('a');
//     paginatorItem.classList.add('paginator-item');
//     paginatorItem.setAttribute('href', '#');
//     paginatorItem.textContent = (i + 1).toString();
//     if (i === currentIndex) {
//       paginatorItem.classList.add('active');
//     }
//     pagination.appendChild(paginatorItem);
//   }

//   // Función para mover el carousel hacia la izquierda
//   function moveCarouselLeft() {
//     currentIndex--;
//     if (currentIndex < 0) {
//       currentIndex = totalItems - 1;
//     }
//     updateCarouselPosition();
//   }

//   // Función para mover el carousel hacia la derecha
//   function moveCarouselRight() {
//     currentIndex++;
//     if (currentIndex >= totalItems) {
//       currentIndex = 0;
//     }
//     updateCarouselPosition();
//   }

//   // Función para actualizar la posición del carousel
//   function updateCarouselPosition() {
//     var startPosition = currentIndex;
//     var endPosition = currentIndex + visibleItems;
//     if (endPosition > totalItems) {
//       endPosition = totalItems;
//     }
//     var newPosition = -startPosition * itemWidth;
//     carouselItems.style.transform = 'translateX(' + newPosition + 'px)';
//     setActiveItems(startPosition, endPosition);
//     setActivePaginator();
//   }

//   // Función para establecer los items activos
//   function setActiveItems(start, end) {
//     for (var i = 0; i < items.length; i++) {
//       items[i].classList.remove('active');
//     }
//     for (var j = start; j < end; j++) {
//       items[j].classList.add('active');
//     }
//   }

//   // Función para establecer el paginador activo
//   function setActivePaginator() {
//     var paginatorItems = pagination.querySelectorAll('.paginator-item');
//     for (var i = 0; i < paginatorItems.length; i++) {
//       paginatorItems[i].classList.remove('active');
//     }
//     paginatorItems[currentIndex].classList.add('active');
//   }

//   // Event listeners para los botones de navegación
//   prevButton.addEventListener('click', moveCarouselLeft);
//   nextButton.addEventListener('click', moveCarouselRight);

//   // Event listener para el clic en los paginadores
//   pagination.addEventListener('click', function(event) {
//     event.preventDefault();
//     var targetIndex = parseInt(event.target.textContent) - 1;
//     currentIndex = targetIndex;
//     updateCarouselPosition();
//   });

//   // Evento de inicio de arrastre
//   function dragStart(event) {
//     startPosX = event.clientX || event.touches[0].clientX;
//     isDragging = true;
//   }

//   // Evento de arrastre
//   function drag(event) {
//     if (!isDragging) return;
//     var currentPosX = event.clientX || event.touches[0].clientX;
//     var deltaX = currentPosX - startPosX;
//     var threshold = itemWidth * 0.2;

//     if (deltaX > threshold) {
//       currentIndex--;
//     } else if (deltaX < -threshold) {
//       currentIndex++;
//     }

//     currentIndex = (currentIndex + totalItems) % totalItems;
//     carouselItems.style.transition = 'transform 0.5s ease-in-out';
//     updateCarouselPosition();

//     isDragging = false;
//     startPosX = 0;
//     currentTranslateX = 0;
//   }

//   // Event listener para el inicio de arrastre
//   carouselItems.addEventListener('mousedown', dragStart);
//   carouselItems.addEventListener('touchstart', dragStart);

//   // Event listener para el arrastre
//   carouselItems.addEventListener('mousemove', drag);
//   carouselItems.addEventListener('touchmove', drag);

//   // Establecer los items iniciales como activos
//   setActiveItems(0, totalVisibleItems);
//   setActivePaginator();
// });










// document.addEventListener('DOMContentLoaded', function() {
//     var carousel = document.querySelector('.carousel');
//     var prevButton = carousel.querySelector('.prev-button');
//     var nextButton = carousel.querySelector('.next-button');
//     var carouselItems = carousel.querySelector('.carousel-items');
//     var items = carousel.querySelectorAll('.item');
//     var pagination = carousel.querySelector('.pagination');
//     var currentIndex = 0;
//     var visibleItems = 3;
//     var itemWidth = items[0].offsetWidth;
//     var totalItems = items.length;
//     var totalVisibleItems = Math.min(visibleItems, totalItems);
//     var startPosX = 0;
//     var currentTranslateX = 0;
//     var isDragging = false;

//     // Crear los paginadores
//     for (var i = 0; i < totalItems; i++) {
//       var paginatorItem = document.createElement('a');
//       paginatorItem.classList.add('paginator-item');
//       paginatorItem.setAttribute('href', '#');
//       paginatorItem.textContent = (i + 1).toString();
//       if (i === currentIndex) {
//         paginatorItem.classList.add('active');
//       }
//       pagination.appendChild(paginatorItem);
//     }

//     // Función para mover el carousel hacia la izquierda
//     function moveCarouselLeft() {
//       currentIndex--;
//       if (currentIndex < 0) {
//         currentIndex = totalItems - 1;
//       }
//       updateCarouselPosition();
//     }

//     // Función para mover el carousel hacia la derecha
//     function moveCarouselRight() {
//       currentIndex++;
//       if (currentIndex >= totalItems) {
//         currentIndex = 0;
//       }
//       updateCarouselPosition();
//     }

//     // Función para actualizar la posición del carousel
//     function updateCarouselPosition() {
//       var startPosition = currentIndex;
//       var endPosition = currentIndex + visibleItems;
//       if (endPosition > totalItems) {
//         endPosition = totalItems;
//       }
//       var newPosition = -startPosition * itemWidth;
//       carouselItems.style.transform = 'translateX(' + newPosition + 'px)';
//       setActiveItems(startPosition, endPosition);
//       setActivePaginator();
//     }

//     // Función para establecer los items activos
//     function setActiveItems(start, end) {
//       for (var i = 0; i < items.length; i++) {
//         items[i].classList.remove('active');
//       }
//       for (var j = start; j < end; j++) {
//         items[j].classList.add('active');
//       }
//     }

//     // Función para establecer el paginador activo
//     function setActivePaginator() {
//       var paginatorItems = pagination.querySelectorAll('.paginator-item');
//       for (var i = 0; i < paginatorItems.length; i++) {
//         paginatorItems[i].classList.remove('active');
//       }
//       paginatorItems[currentIndex].classList.add('active');
//     }

//     // Event listeners para los botones de navegación
//     prevButton.addEventListener('click', moveCarouselLeft);
//     nextButton.addEventListener('click', moveCarouselRight);

//     // Event listener para el clic en los paginadores
//     pagination.addEventListener('click', function(event) {
//       event.preventDefault();
//       var targetIndex = parseInt(event.target.textContent) - 1;
//       currentIndex = targetIndex;
//       updateCarouselPosition();
//     });

//     // Evento de inicio de arrastre
//     function dragStart(event) {
//       startPosX = event.clientX || event.touches[0].clientX;
//       isDragging = true;
//     }

//     // Evento de arrastre
//     function drag(event) {
//       if (!isDragging) return;
//       var currentPosX = event.clientX || event.touches[0].clientX;
//       var deltaX = currentPosX - startPosX;
//       var translateX = currentTranslateX + deltaX;
//       carouselItems.style.transform = 'translateX(' + translateX + 'px)';
//     }

//     // Evento de fin de arrastre
//     function dragEnd(event) {
//       if (!isDragging) return;
//       var currentPosX = event.clientX || event.changedTouches[0].clientX;
//       var deltaX = currentPosX - startPosX;
//       var threshold = itemWidth * 0.2;

//       if (deltaX > threshold) {
//         currentIndex--;
//       } else if (deltaX < -threshold) {
//         currentIndex++;
//       }

//       currentIndex = (currentIndex + totalItems) % totalItems;
//       carouselItems.style.transition = 'transform 0.5s ease-in-out';
//       updateCarouselPosition();

//       isDragging = false;
//       startPosX = 0;
//       currentTranslateX = 0;
//     }

//     // Event listener para el inicio de arrastre
//     carouselItems.addEventListener('mousedown', dragStart);
//     carouselItems.addEventListener('touchstart', dragStart);

//     // Event listener para el arrastre
//     carouselItems.addEventListener('mousemove', drag);
//     carouselItems.addEventListener('touchmove', drag);

//     // Event listener para el fin de arrastre
//     carouselItems.addEventListener('mouseup', dragEnd);
//     carouselItems.addEventListener('touchend', dragEnd);
//     carouselItems.addEventListener('mouseleave', dragEnd);

//     // Establecer los items iniciales como activos
//     setActiveItems(0, totalVisibleItems);
//     setActivePaginator();
//   });










// document.addEventListener('DOMContentLoaded', function() {
//     var carousel = document.querySelector('.carousel');
//     var prevButton = carousel.querySelector('.prev-button');
//     var nextButton = carousel.querySelector('.next-button');
//     var carouselItems = carousel.querySelector('.carousel-items');
//     var items = carousel.querySelectorAll('.item');
//     var pagination = carousel.querySelector('.pagination');
//     var currentIndex = 0;
//     var visibleItems = 3;
//     var itemWidth = items[0].offsetWidth;
//     var totalItems = items.length;
//     var totalVisibleItems = Math.min(visibleItems, totalItems);
//     var startPosX = 0;
//     var currentTranslateX = 0;
//     var isDragging = false;
//     var autoInterval = null;

//     // Crear los paginadores
//     for (var i = 0; i < totalItems; i++) {
//       var paginatorItem = document.createElement('a');
//       paginatorItem.classList.add('paginator-item');
//       paginatorItem.setAttribute('href', '#');
//       paginatorItem.textContent = (i + 1).toString();
//       if (i === currentIndex) {
//         paginatorItem.classList.add('active');
//       }
//       pagination.appendChild(paginatorItem);
//     }

//     // Función para mover el carousel hacia la izquierda
//     function moveCarouselLeft() {
//       currentIndex--;
//       if (currentIndex < 0) {
//         currentIndex = totalItems - 1;
//       }
//       updateCarouselPosition();
//     }

//     // Función para mover el carousel hacia la derecha
//     function moveCarouselRight() {
//       currentIndex++;
//       if (currentIndex >= totalItems) {
//         currentIndex = 0;
//       }
//       updateCarouselPosition();
//     }

//     // Función para actualizar la posición del carousel
//     function updateCarouselPosition() {
//       var startPosition = currentIndex;
//       var endPosition = currentIndex + visibleItems;
//       if (endPosition > totalItems) {
//         endPosition = totalItems;
//       }
//       var newPosition = -startPosition * itemWidth;
//       carouselItems.style.transform = 'translateX(' + newPosition + 'px)';
//       setActiveItems(startPosition, endPosition);
//       setActivePaginator();
//     }

//     // Función para establecer los items activos
//     function setActiveItems(start, end) {
//       for (var i = 0; i < items.length; i++) {
//         items[i].classList.remove('active');
//       }
//       for (var j = start; j < end; j++) {
//         items[j].classList.add('active');
//       }
//     }

//     // Función para establecer el paginador activo
//     function setActivePaginator() {
//       var paginatorItems = pagination.querySelectorAll('.paginator-item');
//       for (var i = 0; i < paginatorItems.length; i++) {
//         paginatorItems[i].classList.remove('active');
//       }
//       paginatorItems[currentIndex].classList.add('active');
//     }

//     // Event listeners para los botones de navegación
//     prevButton.addEventListener('click', moveCarouselLeft);
//     nextButton.addEventListener('click', moveCarouselRight);

//     // Evento de inicio de arrastre
//     function dragStart(event) {
//       startPosX = event.clientX || event.touches[0].clientX;
//       isDragging = true;
//     }

//     // Evento de arrastre
//     function drag(event) {
//       if (!isDragging) return;
//       var currentPosX = event.clientX || event.touches[0].clientX;
//       var deltaX = currentPosX - startPosX;
//       var translateX = currentTranslateX + deltaX;
//       carouselItems.style.transform = 'translateX(' + translateX + 'px)';
//     }

//     // Evento de fin de arrastre
//     function dragEnd(event) {
//       if (!isDragging) return;
//       var currentPosX = event.clientX || event.changedTouches[0].clientX;
//       var deltaX = currentPosX - startPosX;
//       var threshold = itemWidth * 0.2;

//       if (deltaX > threshold) {
//         currentIndex--;
//       } else if (deltaX < -threshold) {
//         currentIndex++;
//       }

//       currentIndex = (currentIndex + totalItems) % totalItems;
//       carouselItems.style.transition = 'transform 0.5s ease-in-out';
//       updateCarouselPosition();

//       isDragging = false;
//       startPosX = 0;
//       currentTranslateX = 0;
//     }

//     // Event listener para el inicio de arrastre
//     carouselItems.addEventListener('mousedown', dragStart);
//     carouselItems.addEventListener('touchstart', dragStart);

//     // Event listener para el arrastre
//     carouselItems.addEventListener('mousemove', drag);
//     carouselItems.addEventListener('touchmove', drag);

//     // Event listener para el fin de arrastre
//     carouselItems.addEventListener('mouseup', dragEnd);
//     carouselItems.addEventListener('touchend', dragEnd);
//     carouselItems.addEventListener('mouseleave', dragEnd);

//     // Función para activar el carrusel automáticamente
//     function activateCarousel() {
//       autoInterval = setInterval(moveCarouselRight, 3000);
//     }

//     // Función para desactivar el carrusel automáticamente
//     function deactivateCarousel() {
//       clearInterval(autoInterval);
//     }

//     // Activar el carrusel automáticamente
//     activateCarousel();

//     // Event listener para detener el carrusel al pasar el mouse por encima
//     carousel.addEventListener('mouseenter', deactivateCarousel);

//     // Event listener para reactivar el carrusel al retirar el mouse
//     carousel.addEventListener('mouseleave', activateCarousel);

//     // Establecer los items iniciales como activos
//     setActiveItems(0, totalVisibleItems);
//     setActivePaginator();
//   });










// document.addEventListener('DOMContentLoaded', function() {
//   var carousel = document.querySelector('.carousel');
//   var prevButton = carousel.querySelector('.prev-button');
//   var nextButton = carousel.querySelector('.next-button');
//   var carouselItems = carousel.querySelector('.carousel-items');
//   var items = carousel.querySelectorAll('.item');
//   var pagination = carousel.querySelector('.pagination');
//   var currentIndex = 0;
//   var visibleItems = 3;
//   var itemWidth = items[0].offsetWidth;
//   var totalItems = items.length;
//   var totalVisibleItems = Math.min(visibleItems, totalItems);
//   var startPosX = 0;
//   var currentTranslateX = 0;
//   var isDragging = false;
//   var autoInterval = null;

//   // Crear los paginadores
//   for (var i = 0; i < totalItems; i++) {
//     var paginatorItem = document.createElement('a');
//     paginatorItem.classList.add('paginator-item');
//     paginatorItem.setAttribute('href', '#');
//     paginatorItem.textContent = (i + 1).toString();
//     if (i === currentIndex) {
//       paginatorItem.classList.add('active');
//     }
//     // Agregar evento de clic al paginador
//     paginatorItem.addEventListener('click', function(event) {
//       event.preventDefault();
//       currentIndex = i;
//       updateCarouselPosition();
//     });
//     pagination.appendChild(paginatorItem);
//   }

//   // Función para mover el carousel hacia la izquierda
//   function moveCarouselLeft() {
//     currentIndex--;
//     if (currentIndex < 0) {
//       currentIndex = totalItems - 1;
//     }
//     updateCarouselPosition();
//   }

//   // Función para mover el carousel hacia la derecha
//   function moveCarouselRight() {
//     currentIndex++;
//     if (currentIndex >= totalItems) {
//       currentIndex = 0;
//     }
//     updateCarouselPosition();
//   }

//   // Función para actualizar la posición del carousel
//   function updateCarouselPosition() {
//     var startPosition = currentIndex;
//     var endPosition = currentIndex + visibleItems;
//     if (endPosition > totalItems) {
//       endPosition = totalItems;
//     }
//     var newPosition = -startPosition * itemWidth;
//     carouselItems.style.transform = 'translateX(' + newPosition + 'px)';
//     setActiveItems(startPosition, endPosition);
//     setActivePaginator();
//   }

//   // Función para establecer los items activos
//   function setActiveItems(start, end) {
//     for (var i = 0; i < items.length; i++) {
//       items[i].classList.remove('active');
//     }
//     for (var j = start; j < end; j++) {
//       items[j].classList.add('active');
//     }
//   }

//   // Función para establecer el paginador activo
//   function setActivePaginator() {
//     var paginatorItems = pagination.querySelectorAll('.paginator-item');
//     for (var i = 0; i < paginatorItems.length; i++) {
//       paginatorItems[i].classList.remove('active');
//     }
//     paginatorItems[currentIndex].classList.add('active');
//   }

//   // Event listeners para los botones de navegación
//   prevButton.addEventListener('click', moveCarouselLeft);
//   nextButton.addEventListener('click', moveCarouselRight);

//   // Evento de inicio de arrastre
//   function dragStart(event) {
//     startPosX = event.clientX || event.touches[0].clientX;
//     isDragging = true;
//   }

//   // Evento de arrastre
//   function drag(event) {
//     if (!isDragging) return;
//     var currentPosX = event.clientX || event.touches[0].clientX;
//     var deltaX = currentPosX - startPosX;
//     var translateX = currentTranslateX + deltaX;
//     carouselItems.style.transform = 'translateX(' + translateX + 'px)';
//   }

//   // Evento de fin de arrastre
//   function dragEnd(event) {
//     if (!isDragging) return;
//     var currentPosX = event.clientX || event.changedTouches[0].clientX;
//     var deltaX = currentPosX - startPosX;
//     var threshold = itemWidth * 0.2;

//     if (deltaX > threshold) {
//       currentIndex--;
//     } else if (deltaX < -threshold) {
//       currentIndex++;
//     }

//     currentIndex = (currentIndex + totalItems) % totalItems;
//     carouselItems.style.transition = 'transform 0.5s ease-in-out';
//     updateCarouselPosition();

//     isDragging = false;
//     startPosX = 0;
//     currentTranslateX = 0;
//   }

//   // Event listener para el inicio de arrastre
//   carouselItems.addEventListener('mousedown', dragStart);
//   carouselItems.addEventListener('touchstart', dragStart);

//   // Event listener para el arrastre
//   carouselItems.addEventListener('mousemove', drag);
//   carouselItems.addEventListener('touchmove', drag);

//   // Event listener para el fin de arrastre
//   carouselItems.addEventListener('mouseup', dragEnd);
//   carouselItems.addEventListener('touchend', dragEnd);
//   carouselItems.addEventListener('mouseleave', dragEnd);

//   // Función para activar el carrusel automáticamente
//   function activateCarousel() {
//     autoInterval = setInterval(moveCarouselRight, 3000);
//   }

//   // Función para desactivar el carrusel automáticamente
//   function deactivateCarousel() {
//     clearInterval(autoInterval);
//   }

//   // Activar el carrusel automáticamente
//   activateCarousel();

//   // Event listener para detener el carrusel al pasar el mouse por encima
//   carousel.addEventListener('mouseenter', deactivateCarousel);

//   // Event listener para reactivar el carrusel al retirar el mouse
//   carousel.addEventListener('mouseleave', activateCarousel);

//   // Establecer los items iniciales como activos
//   setActiveItems(0, totalVisibleItems);
//   setActivePaginator();
// });







document.addEventListener('DOMContentLoaded', function () {
  var carousel = document.querySelector('.carousel');
  var prevButton = carousel.querySelector('.prev-button');
  var nextButton = carousel.querySelector('.next-button');
  var carouselItems = carousel.querySelector('.carousel-items');
  var items = carousel.querySelectorAll('.item');
  var pagination = carousel.querySelector('.pagination');
  var currentIndex = 0;
  var visibleItems = 3;
  var itemWidth = items[0].offsetWidth;
  var totalItems = items.length;
  var totalVisibleItems = Math.min(visibleItems, totalItems);
  var startPosX = 0;
  var currentTranslateX = 0;
  var isDragging = false;
  var autoInterval = null;
  var stopButton = document.querySelector('.stop-button'); // Botón para detener el carrusel

  // Crear los paginadores
  for (var i = 0; i < totalItems; i++) {
    var paginatorItem = document.createElement('a');
    paginatorItem.classList.add('paginator-item');
    paginatorItem.setAttribute('href', '#');
    paginatorItem.textContent = (i + 1).toString();
    if (i === currentIndex) {
      paginatorItem.classList.add('active');
    }
    // Usar una función de cierre para capturar el valor de `i`
    (function (index) {
      paginatorItem.addEventListener('click', function (event) {
        event.preventDefault();
        currentIndex = index;
        updateCarouselPosition();
      });
    })(i);
    pagination.appendChild(paginatorItem);
  }

  // Función para mover el carousel hacia la izquierda
  function moveCarouselLeft() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = totalItems - 1;
    }
    updateCarouselPosition();
  }

  // Función para mover el carousel hacia la derecha
  function moveCarouselRight() {
    currentIndex++;
    if (currentIndex >= totalItems) {
      currentIndex = 0;
    }
    updateCarouselPosition();
  }

  // Función para actualizar la posición del carousel
  function updateCarouselPosition() {
    var startPosition = currentIndex;
    var endPosition = currentIndex + visibleItems;
    if (endPosition > totalItems) {
      endPosition = totalItems;
    }
    var newPosition = -startPosition * itemWidth;
    carouselItems.style.transform = 'translateX(' + newPosition + 'px)';
    setActiveItems(startPosition, endPosition);
    setActivePaginator();
  }

  // Función para establecer los items activos
  function setActiveItems(start, end) {
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove('active');
    }
    for (var j = start; j < end; j++) {
      items[j].classList.add('active');
    }
  }

  // Función para establecer el paginador activo
  function setActivePaginator() {
    var paginatorItems = pagination.querySelectorAll('.paginator-item');
    for (var i = 0; i < paginatorItems.length; i++) {
      paginatorItems[i].classList.remove('active');
    }
    paginatorItems[currentIndex].classList.add('active');
  }

  // Event listeners para los botones de navegación
  prevButton.addEventListener('click', moveCarouselLeft);
  nextButton.addEventListener('click', moveCarouselRight);

  // Evento de inicio de arrastre
  function dragStart(event) {
    startPosX = event.clientX || event.touches[0].clientX;
    isDragging = true;
  }

  // Evento de arrastre
  function drag(event) {
    if (!isDragging) return;
    var currentPosX = event.clientX || event.touches[0].clientX;
    var deltaX = currentPosX - startPosX;
    var translateX = currentTranslateX + deltaX;
    carouselItems.style.transform = 'translateX(' + translateX + 'px)';
  }

  // Evento de fin de arrastre
  function dragEnd(event) {
    if (!isDragging) return;
    var currentPosX = event.clientX || event.changedTouches[0].clientX;
    var deltaX = currentPosX - startPosX;
    var threshold = itemWidth * 0.2;

    if (deltaX > threshold) {
      currentIndex--;
    } else if (deltaX < -threshold) {
      currentIndex++;
    }

    currentIndex = (currentIndex + totalItems) % totalItems;
    carouselItems.style.transition = 'transform 0.5s ease-in-out';
    updateCarouselPosition();

    isDragging = false;
    startPosX = 0;
    currentTranslateX = 0;
  }

  // Event listener para el inicio de arrastre
  carouselItems.addEventListener('mousedown', dragStart);
  carouselItems.addEventListener('touchstart', dragStart);

  // Event listener para el arrastre
  carouselItems.addEventListener('mousemove', drag);
  carouselItems.addEventListener('touchmove', drag);

  // Event listener para el fin de arrastre
  carouselItems.addEventListener('mouseup', dragEnd);
  carouselItems.addEventListener('touchend', dragEnd);
  carouselItems.addEventListener('mouseleave', dragEnd);
  var cardItems = carousel.querySelectorAll('.item');

  // Event listener para detener el carrusel al hacer hover sobre una tarjeta
  cardItems.forEach(function(cardItem) {
    cardItem.addEventListener('mouseenter', function() {
      deactivateCarousel();
    });
  
    cardItem.addEventListener('mouseleave', function() {
      activateCarousel();
    });
  });
  // Función para activar el carrusel automáticamente
  function activateCarousel() {
    autoInterval = setInterval(moveCarouselRight, 3000);
  }

  // Función para desactivar el carrusel automáticamente
  function deactivateCarousel() {
    clearInterval(autoInterval);
  }

  // Activar el carrusel automáticamente
  activateCarousel();

  // Event listener para detener el carrusel al hacer clic en un botón
  stopButton.addEventListener('click', function () {
    if (autoInterval) {
      deactivateCarousel();
      autoInterval = null;
    } else {
      activateCarousel();
    }
  });

  var stopItem1 = document.querySelector('#item1');
  var stopItem2 = document.querySelector('#item2');
  var stopItem3 = document.querySelector('#item3');
  var stopItem4 = document.querySelector('#item4');
  var stopItem5 = document.querySelector('#item5');
  var stopItem6 = document.querySelector('#item6');
  var stopItem7 = document.querySelector('#item7');
  var infOculta1 = document.querySelector('#infOculta1');
  var infOculta2 = document.querySelector('#infOculta2');
  var infOculta3 = document.querySelector('#infOculta3');
  var infOculta4 = document.querySelector('#infOculta4');
  var carouselFondo = document.querySelector('#carousel-fondo');


  stopItem4.addEventListener('click', function () {
    if (autoInterval) {
      deactivateCarousel();
      autoInterval = null;
    } else {
      activateCarousel();
    }

    carouselFondo.className = '';
    carouselFondo.classList.add("item4Bg");
    stopItem1.classList.add("move4");
    stopItem2.classList.add("move4");
    stopItem3.classList.add("move4");
    stopItem4.classList.add("hide");
    stopItem5.classList.add("move4");
    stopItem6.classList.add("move4");
    stopItem7.classList.add("move4");
    infOculta4.classList.add("active");

    // setTimeout(function () {
    //   window.location.href = 'nuevo_archivo.html'; // Reemplaza 'nuevo_archivo.html' con la URL del archivo al que deseas redireccionar
    // }, 4000);

  });

  
  stopItem3.addEventListener('click', function () {
    if (autoInterval) {
      deactivateCarousel();
      autoInterval = null;
    } else {
      activateCarousel();
    }

    carouselFondo.className = '';
    carouselFondo.classList.add("item3Bg");
    stopItem1.classList.add("move3");
    stopItem2.classList.add("move3");
    stopItem3.classList.add("hide");
    stopItem4.classList.add("move3");
    stopItem5.classList.add("move3");
    stopItem6.classList.add("move3");
    stopItem7.classList.add("move3");
    infOculta3.classList.add("active");

    // setTimeout(function () {
    //   window.location.href = 'nuevo_archivo.html'; // Reemplaza 'nuevo_archivo.html' con la URL del archivo al que deseas redireccionar
    // }, 4000);

  });
  
  stopItem2.addEventListener('click', function () {
    if (autoInterval) {
      deactivateCarousel();
      autoInterval = null;
    } else {
      activateCarousel();
    }

    carouselFondo.className = '';
    carouselFondo.classList.add("item2Bg");
    stopItem1.classList.add("move2");
    stopItem2.classList.add("hide");
    stopItem3.classList.add("move2");
    stopItem4.classList.add("move2");
    stopItem5.classList.add("move2");
    stopItem6.classList.add("move2");
    stopItem7.classList.add("move2");
    infOculta2.classList.add("active");

    // setTimeout(function () {
    //   window.location.href = 'nuevo_archivo.html'; // Reemplaza 'nuevo_archivo.html' con la URL del archivo al que deseas redireccionar
    // }, 4000);

  });



  stopItem1.addEventListener('click', function () {
    if (autoInterval) {
      deactivateCarousel();
      autoInterval = null;
    } else {
      activateCarousel();
    }

    carouselFondo.className = '';
    carouselFondo.classList.add("item1Bg");
    stopItem1.classList.add("hide");
    stopItem2.classList.add("move1");
    stopItem3.classList.add("move1");
    stopItem4.classList.add("move1");
    stopItem5.classList.add("move1");
    stopItem6.classList.add("move1");
    stopItem7.classList.add("move1");
    infOculta1.classList.add("active");

    // setTimeout(function () {
    //   window.location.href = 'nuevo_archivo.html'; // Reemplaza 'nuevo_archivo.html' con la URL del archivo al que deseas redireccionar
    // }, 4000);

  });

  // Establecer los items iniciales como activos
  setActiveItems(0, totalVisibleItems);
  setActivePaginator();
});





// Codigo que sirve

// document.addEventListener('DOMContentLoaded', function() {
//   var carousel = document.querySelector('.carousel');
//   var prevButton = carousel.querySelector('.prev-button');
//   var nextButton = carousel.querySelector('.next-button');
//   var carouselItems = carousel.querySelector('.carousel-items');
//   var items = carousel.querySelectorAll('.item');
//   var pagination = carousel.querySelector('.pagination');
//   var currentIndex = 0;
//   var visibleItems = 3;
//   var itemWidth = items[0].offsetWidth;
//   var totalItems = items.length;
//   var totalVisibleItems = Math.min(visibleItems, totalItems);
//   var startPosX = 0;
//   var currentTranslateX = 0;
//   var isDragging = false;
//   var autoInterval = null;

//   // Crear los paginadores
//   for (var i = 0; i < totalItems; i++) {
//     var paginatorItem = document.createElement('a');
//     paginatorItem.classList.add('paginator-item');
//     paginatorItem.setAttribute('href', '#');
//     paginatorItem.textContent = (i + 1).toString();
//     if (i === currentIndex) {
//       paginatorItem.classList.add('active');
//     }
//     // Usar una función de cierre para capturar el valor de `i`
//     (function(index) {
//       paginatorItem.addEventListener('click', function(event) {
//         event.preventDefault();
//         currentIndex = index;
//         updateCarouselPosition();
//       });
//     })(i);
//     pagination.appendChild(paginatorItem);
//   }

//   // Función para mover el carousel hacia la izquierda
//   function moveCarouselLeft() {
//     currentIndex--;
//     if (currentIndex < 0) {
//       currentIndex = totalItems - 1;
//     }
//     updateCarouselPosition();
//   }

//   // Función para mover el carousel hacia la derecha
//   function moveCarouselRight() {
//     currentIndex++;
//     if (currentIndex >= totalItems) {
//       currentIndex = 0;
//     }
//     updateCarouselPosition();
//   }

//   // Función para actualizar la posición del carousel
//   function updateCarouselPosition() {
//     var startPosition = currentIndex;
//     var endPosition = currentIndex + visibleItems;
//     if (endPosition > totalItems) {
//       endPosition = totalItems;
//     }
//     var newPosition = -startPosition * itemWidth;
//     carouselItems.style.transform = 'translateX(' + newPosition + 'px)';
//     setActiveItems(startPosition, endPosition);
//     setActivePaginator();
//   }

//   // Función para establecer los items activos
//   function setActiveItems(start, end) {
//     for (var i = 0; i < items.length; i++) {
//       items[i].classList.remove('active');
//     }
//     for (var j = start; j < end; j++) {
//       items[j].classList.add('active');
//     }
//   }

//   // Función para establecer el paginador activo
//   function setActivePaginator() {
//     var paginatorItems = pagination.querySelectorAll('.paginator-item');
//     for (var i = 0; i < paginatorItems.length; i++) {
//       paginatorItems[i].classList.remove('active');
//     }
//     paginatorItems[currentIndex].classList.add('active');
//   }

//   // Event listeners para los botones de navegación
//   prevButton.addEventListener('click', moveCarouselLeft);
//   nextButton.addEventListener('click', moveCarouselRight);

//   // Evento de inicio de arrastre
//   function dragStart(event) {
//     startPosX = event.clientX || event.touches[0].clientX;
//     isDragging = true;
//   }

//   // Evento de arrastre
//   function drag(event) {
//     if (!isDragging) return;
//     var currentPosX = event.clientX || event.touches[0].clientX;
//     var deltaX = currentPosX - startPosX;
//     var translateX = currentTranslateX + deltaX;
//     carouselItems.style.transform = 'translateX(' + translateX + 'px)';
//   }

//   // Evento de fin de arrastre
//   function dragEnd(event) {
//     if (!isDragging) return;
//     var currentPosX = event.clientX || event.changedTouches[0].clientX;
//     var deltaX = currentPosX - startPosX;
//     var threshold = itemWidth * 0.2;

//     if (deltaX > threshold) {
//       currentIndex--;
//     } else if (deltaX < -threshold) {
//       currentIndex++;
//     }

//     currentIndex = (currentIndex + totalItems) % totalItems;
//     carouselItems.style.transition = 'transform 0.5s ease-in-out';
//     updateCarouselPosition();

//     isDragging = false;
//     startPosX = 0;
//     currentTranslateX = 0;
//   }

//   // Event listener para el inicio de arrastre
//   carouselItems.addEventListener('mousedown', dragStart);
//   carouselItems.addEventListener('touchstart', dragStart);

//   // Event listener para el arrastre
//   carouselItems.addEventListener('mousemove', drag);
//   carouselItems.addEventListener('touchmove', drag);

//   // Event listener para el fin de arrastre
//   carouselItems.addEventListener('mouseup', dragEnd);
//   carouselItems.addEventListener('touchend', dragEnd);
//   carouselItems.addEventListener('mouseleave', dragEnd);

//   // Función para activar el carrusel automáticamente
//   function activateCarousel() {
//     autoInterval = setInterval(moveCarouselRight, 3000);
//   }

//   // Función para desactivar el carrusel automáticamente
//   function deactivateCarousel() {
//     clearInterval(autoInterval);
//   }

//   // Activar el carrusel automáticamente
//   activateCarousel();

//   // Event listener para detener el carrusel al pasar el mouse por encima
//   carousel.addEventListener('mouseenter', deactivateCarousel);

//   // Event listener para reactivar el carrusel al retirar el mouse
//   carousel.addEventListener('mouseleave', activateCarousel);

//   // Establecer los items iniciales como activos
//   setActiveItems(0, totalVisibleItems);
//   setActivePaginator();
// });











const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 22000,
  },
  // // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination-bullet-active',
  // },

  // // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  speed: 2250,
  // effect: 'creative',
  // creativeEffect: {
  //   prev: {
  //     // will set `translateZ(-400px)` on previous slides
  //     translate: [0, 0, -400],

  //   },
  //   next: {
  //     // will set `translateX(100%)` on next slides
  //     translate: ['100%', 0, 0],

  //   },
  // },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  // effect: 'coverflow',
  // coverflowEffect: {
  //   rotate: 30,
  //   slideShadows: false,
  // },

  // effect: 'cards',
  // cardsEffect: {
  //   // ...
  // },
});




// document.addEventListener('DOMContentLoaded', function() {
//   var carouselContainer = document.querySelector('.cont-carousel-fondo');
//   var carouselItems = [
//     'img/bg1.png',
//     'img/bg2.png',
//     'img/bg3.png',
//     'img/bg4.png',
//     'img/bg5.png',
//     'img/bg6.png',
//     'img/bg7.png',
//     'img/bg8.png'
//   ];
//   var currentIndex = 0;
//   var autoInterval = null;

//   // Crear una capa adicional para aplicar la transición de opacidad
//   var transitionLayer = document.createElement('div');
//   transitionLayer.classList.add('transition-layer');
//   carouselContainer.appendChild(transitionLayer);

//   // Función para cambiar la imagen actual del carrusel con una transición suave
//   function changeCarouselImage() {
//     transitionLayer.style.opacity = '0';
//     setTimeout(function() {
//       carouselContainer.style.backgroundImage = 'url(' + carouselItems[currentIndex] + ')';
//       currentIndex++;
//       if (currentIndex >= carouselItems.length) {
//         currentIndex = 0;
//       }
//       transitionLayer.style.opacity = '1';
//     }, 500);
//   }

//   // Activar el carrusel automáticamente
//   function activateCarousel() {
//     autoInterval = setInterval(changeCarouselImage, 6000);
//   }

//   // Desactivar el carrusel automáticamente
//   function deactivateCarousel() {
//     clearInterval(autoInterval);
//   }

//   // Activar el carrusel automáticamente al cargar la página
//   activateCarousel();

//   // Event listener para detener el carrusel al pasar el mouse por encima
//   carouselContainer.addEventListener('mouseenter', deactivateCarousel);

//   // Event listener para reactivar el carrusel al retirar el mouse
//   carouselContainer.addEventListener('mouseleave', activateCarousel);
// });







// document.addEventListener('DOMContentLoaded', function() {
//   var carouselContainer = document.querySelector('.cont-carousel-fondo');
//   var carouselItems = [
//     'img/bg1.png',
//     'img/bg2.png',
//     'img/bg3.png',
//     'img/bg4.png',
//     'img/bg1.png',
//     'img/bg2.png',
//     'img/bg3.png',
//     'img/bg4.png'
//   ];
//   var currentIndex = 0;
//   var autoInterval = null;

//   // Función para cambiar la imagen actual del carrusel con una transición suave
//   function changeCarouselImage() {
//     carouselContainer.style.opacity = '0';
//     setTimeout(function() {
//       carouselContainer.style.backgroundImage = 'url(' + carouselItems[currentIndex] + ')';
//       currentIndex++;
//       if (currentIndex >= carouselItems.length) {
//         currentIndex = 0;
//       }
//       carouselContainer.style.opacity = '1';
//     }, 500);
//   }

//   // Activar el carrusel automáticamente
//   function activateCarousel() {
//     autoInterval = setInterval(changeCarouselImage, 6000);
//   }

//   // Desactivar el carrusel automáticamente
//   function deactivateCarousel() {
//     clearInterval(autoInterval);
//   }

//   // Activar el carrusel automáticamente al cargar la página
//   activateCarousel();

//   // Event listener para detener el carrusel al pasar el mouse por encima
//   carouselContainer.addEventListener('mouseenter', deactivateCarousel);

//   // Event listener para reactivar el carrusel al retirar el mouse
//   carouselContainer.addEventListener('mouseleave', activateCarousel);
// });















// document.addEventListener('DOMContentLoaded', function() {
//   var carouselContainer = document.querySelector('.cont-carousel-fondo');
//   var carouselItems = [
//     'img/bg1.png',
//     'img/bg2.png',
//     'img/bg3.png',
//     'img/bg4.png',
//     'img/bg1.png',
//     'img/bg2.png',
//     'img/bg3.png',
//     'img/bg4.png'
//   ];
//   var currentIndex = 0;
//   var autoInterval = null;

//   // Función para cambiar la imagen actual del carrusel
//   function changeCarouselImage() {
//     carouselContainer.style.backgroundImage = 'url(' + carouselItems[currentIndex] + ')';
//     currentIndex++;
//     if (currentIndex >= carouselItems.length) {
//       currentIndex = 0;
//     }
//   }

//   // Activar el carrusel automáticamente
//   function activateCarousel() {
//     autoInterval = setInterval(changeCarouselImage, 6000);
//   }

//   // Desactivar el carrusel automáticamente
//   function deactivateCarousel() {
//     clearInterval(autoInterval);
//   }

//   // Activar el carrusel automáticamente al cargar la página
//   activateCarousel();

//   // Event listener para detener el carrusel al pasar el mouse por encima
//   carouselContainer.addEventListener('mouseenter', deactivateCarousel);

//   // Event listener para reactivar el carrusel al retirar el mouse
//   carouselContainer.addEventListener('mouseleave', activateCarousel);
// });