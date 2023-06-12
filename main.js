document.querySelectorAll('div.taskbarElement').forEach(element => {
  element.addEventListener('click',(e) => {
    document.querySelectorAll('div.taskbarElement').forEach(x =>{
      x.querySelector('.elementContent').style.display = "none";
    })
    element.querySelector('.elementContent').style.display = "block" ;
    //console.log(e.target.textContent);
  })
})