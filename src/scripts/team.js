;(function() {
  // const teamList = document.querySelector(".team__list");
// const buttonTeam = document.querySelectorAll('.team__button');
// const svgTeam = document.querySelectorAll('.team__svg');
const openItem = item => {
  const container = item.closest(".team__item");
  const contentWrapper = container.find(".team__desc-wrapper");
  const contentBlock = contentWrapper.find(".team__desc");
  const reqHeight = contentBlock.height();
  const svgBlock = container.find(".team__svg");

  container.addClass("activeteam");
  svgBlock.addClass("team__svg--active")
  contentWrapper.height(reqHeight);
}

const closeEveryItem = container => {
  const items = container.find(".team__desc-wrapper");
  const itemContainer = container.find(".team__item");
  const itemSvgBlock = container.find(".team__svg");

  itemContainer.removeClass("activeteam");
  itemSvgBlock.removeClass("team__svg--active");
  items.height(0);
}

$(".team__button").click(e => {
  const $this = $(e.currentTarget);
  const container = $this.closest(".team__list");
  const elemContainer = $this.closest(".team__item");


  if (elemContainer.hasClass("activeteam")) {
    closeEveryItem(container);
  } else {
    closeEveryItem(container);
    openItem($this);
  }
})
})()

