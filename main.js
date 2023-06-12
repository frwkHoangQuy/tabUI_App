document.querySelectorAll('div.taskbarElement').forEach(element => {
  element.addEventListener('click', (e) => {
    // element.style.borderColor = "rgb(194, 53, 100)";
    document.querySelectorAll('div.taskbarElement').forEach(element => {
      element.classList.remove("highlightBorder");
      element.classList.add('hoverElement');
    })
    element.classList.toggle("highlightBorder");
    element.classList.remove("hoverElement");
    var renderElementContent = document.querySelector('.renderElementContent');
    renderElementContent.innerHTML = element.querySelector('.elementContent').innerHTML;
    renderElementContent.style.display = "block";
  })
})