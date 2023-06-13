fetch("http://localhost:3000/data")
  .then(response => response.json())
  .then(data => {
    renderTaskbarElement(data);
    document.querySelectorAll('.taskbar .taskbarElement').forEach((element, index) => {
      element.addEventListener("click", () => {
        renderTaskbarContent(data, index);
        
        //Taskbar element and content behavior
        document.querySelectorAll('div.taskbarElement').forEach(element => {
          element.classList.remove("highlightBorder");
          element.classList.add('hoverElement');
        })
        element.classList.toggle("highlightBorder");
        element.classList.remove("hoverElement");
        var taskbarContent = document.querySelector('.taskbarContent');
        taskbarContent.style.display = "block";
      })
    });
  });

var renderTaskbarElement = data => {
  var taskbarContent = data.map((x, index) => {
    return `
        <div class="taskbarElement hoverElement">
        <i class = '${data[index].icon}'></i>
        <p class="elementTitle">${data[index].title}</p>
        </div>
      `
  }).join("");
  document.querySelector('.taskbarUI .taskbar').innerHTML = taskbarContent;
}

var renderTaskbarContent = (data, index) => {
  var elementContent = document.querySelector(".taskbarUI .content");
  elementContent.classList.add('taskbarContent');
  var content = `
        <b> ${data[index].title} </b><br> 
        ${data[index].content}
      `
  elementContent.innerHTML = content;
  document.querySelector(".taskbarUI").appendChild(elementContent);
}