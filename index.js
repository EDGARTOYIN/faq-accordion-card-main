let containers = document.querySelectorAll(".container");

// Añade el evento clic a cada elemento
containers.forEach((item) => {
  item.addEventListener("click", () => {
    const containerText = item.lastElementChild;
    const isActive = item.classList.contains("active");

    containers.forEach((i) => {
      i.classList.remove("active");
      const text = i.lastElementChild;
      text.style.gridTemplateRows = "0fr";
      text.style.padding = "0rem";
    });

    if (!isActive) {
      item.classList.add("active");
      
      containerText.style.gridTemplateRows = "1fr";
      containerText.style.padding = "0.50rem 0rem";
    }
  });
});
