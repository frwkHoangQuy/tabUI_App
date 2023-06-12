document.querySelectorAll('div.taskbarElement').forEach(element => {
  element.addEventListener('click',(e) => {
    var renderElementContent = document.querySelector('.renderElementContent');
    renderElementContent.textContent = element.querySelector('.elementContent').textContent ;
    renderElementContent.style.display = "block";
  })
})