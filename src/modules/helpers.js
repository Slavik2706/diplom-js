const animate = ({ timing, draw, duration }) => {

   let start = performance.now();

   requestAnimationFrame(function animate(time) {
      // timeFraction изменяется от 0 до 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;

      // вычисление текущего состояния анимации
      let progress = timing(timeFraction);

      draw(progress); // отрисовать её

      if (timeFraction < 1) {
         requestAnimationFrame(animate);
      }

   });
}

export { animate }

function checkPseudoClick(parentElem, event) {

   const parentWidth = parseInt(window.getComputedStyle(parentElem).width, 10),
      parentHeight = parseInt(window.getComputedStyle(parentElem).height, 10);

   const before = window.getComputedStyle(parentElem, ':before');

   const beforeXStart = (parentWidth / 2) - (parseInt(before.width, 10) / 2),
      beforeXEnd = (parentWidth / 2) + (parseInt(before.width, 10) / 2);

   const beforeYStart = (parentHeight / 2) - (parseInt(before.height, 10) / 2),
      beforeYEnd = (parentHeight / 2) + (parseInt(before.height, 10) / 2);

   const mouseX = event.offsetX,
      mouseY = event.offsetY;

   return (mouseX >= beforeXStart && mouseX <= beforeXEnd && mouseY >= beforeYStart && mouseY <= beforeYEnd ? true : false);
}

export { checkPseudoClick }