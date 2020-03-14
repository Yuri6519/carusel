(function() {
  // count of whole visible items
  const ITEMS_COUNT = 3; // = @item-count from main.less

  // initial array (can be get from server? storage...)
  const items = document.querySelectorAll(".carusel__item");

  // carusel list
  const caruselList = document.querySelector(".carusel__list");

  // wrapper
  const wrapper = document.querySelector(".carusel__wrapper");

  // buttons
  const buttons = document.querySelectorAll(".carusel__arrow");

  // first active index
  const firstIndex = 0;

  //last index
  const lastIndex = items.length - ITEMS_COUNT;
  
  // active index
  let activeIndex = firstIndex;
  
  // kt debends on division result
  let kt = wrapper.offsetWidth / items[lastIndex].offsetWidth - ITEMS_COUNT;

  const move = index => {
    if (index == null) return;
    let width = (items[activeIndex] && items[activeIndex].offsetWidth) * index;
    width = activeIndex === lastIndex ? width - items[activeIndex].offsetWidth * kt : width;
    caruselList.style.left = parseInt(-width) + "px";
  };

  for (const button of buttons) {
    button.addEventListener("click", evt => {
      handleClick(evt);
    });
  }

  const handleClick = evt => {
    const forward = evt.target.classList.contains("carusel_arrow-right");
    if (forward) {
      if (activeIndex < lastIndex) {
        activeIndex = activeIndex + ITEMS_COUNT;
        activeIndex = activeIndex < lastIndex ? activeIndex : lastIndex;
      }
    } else {
      if (activeIndex > firstIndex) {
        activeIndex = activeIndex - ITEMS_COUNT;
        activeIndex = activeIndex > firstIndex ? activeIndex : firstIndex;
      }
    }
    move(activeIndex);
  };
})();
