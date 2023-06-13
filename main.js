fetch("http://localhost:3000/data")
  .then(response => response.json())
  .then(data => {
    var taskbarContent = data.map((x, index) => {
      return `
        <div class="taskbarElement hoverElement">
        <i class = '${data[index].icon}'></i>
        <p class="elementTitle">${data[index].title}</p>
        </div>
      `
    }).join("");
    document.querySelector('.taskbarUI .taskbar').innerHTML = taskbarContent;
    document.querySelectorAll('.taskbar .taskbarElement').forEach((element, index) => {
      element.addEventListener("click", (e) => {
        var elementContent = document.querySelector(".taskbarUI .content");
        elementContent.classList.add('renderElementContent');
        var content = `
            <b> ${data[index].title} </b><br> 
            ${data[index].content}
          `
        elementContent.innerHTML = content;
        document.querySelector(".taskbarUI").appendChild(elementContent);
        document.querySelectorAll('div.taskbarElement').forEach(element => {
          element.classList.remove("highlightBorder");
          element.classList.add('hoverElement');
        })
        element.classList.toggle("highlightBorder");
        element.classList.remove("hoverElement");
        var renderElementContent = document.querySelector('.renderElementContent');
        //renderElementContent.innerHTML = element.querySelector('.elementContent').innerHTML;
        renderElementContent.style.display = "block";
      })
    });
  });
