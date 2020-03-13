(function() {
  // initial array (can be get from server? storage...)
  const items = document.querySelectorAll(".carusel__item");
  const firstIndex = 0;
  const lastIndex = items.length - 1;
  let activeIndex = firstIndex;

  // carusel list
  const caruselList = document.querySelector(".carusel__list");

  // buttons
  const buttons = document.querySelectorAll(".carusel__arrow");

  const move = index => {
    if (index == null) return;
    const width = items[activeIndex] && items[activeIndex].offsetWidth;
    caruselList.style.left = parseInt(-width * index) + "px";
  };

  for (const button of buttons) {
    button.addEventListener("click", evt => {
      handleClick(evt);
    });
  }

  const handleClick = evt => {
    const forward = evt.target.classList.contains("carusel_arrow-left");
    // const width = items[activeIndex] && items[activeIndex].offsetWidth;

    // let index = forward
    //   ? activeIndex < lastIndex
    //     ? ++activeIndex
    //     : null
    //   : undefined;

    // index = undefined
    //   ? activeIndex > firstIndex
    //     ? --activeIndex
    //     : null
    //   : null;

    // move(index);

    if (forward) {
      if (activeIndex < lastIndex) {
        // крутим влево
        move(++activeIndex);
        // caruselList.style.left = parseInt(-width * ++activeIndex) + "px";
      }
    } else {
      if (activeIndex > firstIndex) {
        // крутим вправо
        move(--activeIndex);
        // caruselList.style.left = parseInt(-width * --activeIndex) + "px";
      }
    }
  };
})();
