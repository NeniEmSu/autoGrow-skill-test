const main = document.querySelector("#main-content");
const searchInput = document.querySelector('#search');
const radioInputs = document.querySelectorAll('.main-nav__toggle input');
const addForm = document.querySelector('#addIdea');

function toggleSidebar() {
  $("#sidebar").toggleClass("closed");
}

$(document).ready(function () {
  $(".form-control").each(function () {
    if ($(this).val() !== "") {
      $(this).parent().addClass("label-animate");
    }
  });

  $(".form-control").click(function () {
    $(this).parent().addClass("label-animate");
  });


});

$(window).click(function (event) {
  if (!$(event.target).is(".form-control")) {
    $(".form-control").each(function () {
      if ($(this).val() == "") {
        $(this).parent().removeClass("label-animate");
      }
    });
  }
});

displayContent();

function displayContent() {
  // clear main to reset for adding new element
  main.innerHTML = ''

  // create cards
  content.forEach((element) => {
    const cardEl = document.createElement("article");
    cardEl.classList.add("card-block", element.status);

    if (element.status !== 'idea') cardEl.classList.add("in-progress");
    cardEl.innerHTML = `
    <div class="card-block__head">
      <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: ${element.progress}%;" aria-valuenow="${element.progress}" aria-valuemin="0"
          aria-valuemax="100">${element.progress}%</div>
      </div>
    </div>
    <div class='complete'><span class="tick"></span></div>
    <div class="card-block__body">
      <p class="card-block__body-text project-name">${element['project-name']}</p>
      <div class="collapsible-menu d-flex d-sm-none">
        <button class="collapsible-menu-icon">
          <img src="images/dot-menu.svg" alt="Make icon" width="20" height="20" class="collapsible-menu-icon-img">
        </button>
      </div>
      <div class="card-block__body-icons d-none d-sm-flex">
        <button class="card-block__body-icon">
          <img src="images/hammer.svg" alt="Make icon" width="20" height="20" class="card-block__body-icon-img">
        </button>
        <button class="card-block__body-icon">
          <img src="images/chat-box.svg" alt="Make icon" width="20" height="20" class="card-block__body-icon-img">
        </button>
        <button class="card-block__body-icon">
          <img src="images/close.svg" alt="Make icon" width="20" height="20" class="card-block__body-icon-img">
        </button>
      </div>
    </div>
    <div class="card-block__panel">
      <form class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="name-${element.id}">Project name</label>
            <input type="text" class="form-control" id="name-${element.id}" name="name"
              value="${element['project-name']}">
          </div>
          <div class="form-group">
            <label for="notes-${element.id}">Project notes</label>
            <textarea name="notes" id="notes-${element.id}" class="form-control"></textarea>
          </div>
        </div>
      </form>
      <button class="save">Save</button>
      <button class="delete">Delete Idea</button>
    </div>
    `
    main.appendChild(cardEl);

    // add event listener to toggle panel
    cardEl.addEventListener('click', () => {
      cardEl.classList.toggle('open')
    })
  });
}


searchInput.addEventListener('input', (event) => {
  const {
    value
  } = event.target;
  const projectName = document.querySelectorAll('.project-name')

  projectName.forEach((name) => {
    // card-block -> card-block__body -> project name -> style
    if (name.innerText.toLowerCase().includes(value.toLowerCase())) name.parentElement.parentElement.style.display = 'block'
    else name.parentElement.parentElement.style.display = 'none'
  })

})


// looping radio buttons to filter
radioInputs.forEach((input) => {
  input.addEventListener('click', (event) => {
    const cardBlock = document.querySelectorAll('.card-block')

    cardBlock.forEach((card) => {
      if (radioInputs[0].checked === false && radioInputs[1].checked === false && radioInputs[2].checked === false) card.style.display = 'block'

      else if (radioInputs[0].checked === true && radioInputs[1].checked === true && radioInputs[2].checked === false) {

        if (card.classList.contains('idea') || card.classList.contains('made')) card.style.display = 'block'
        else card.style.display = 'none'

      } else if (radioInputs[0].checked === true && radioInputs[1].checked === false && radioInputs[2].checked === true) {

        if (card.classList.contains('idea') || card.classList.contains('real')) card.style.display = 'block'
        else card.style.display = 'none'

      } else if (radioInputs[0].checked === false && radioInputs[1].checked === true && radioInputs[2].checked === true) {

        if (card.classList.contains('made') || card.classList.contains('real')) card.style.display = 'block'
        else card.style.display = 'none'

      } else if (radioInputs[0].checked === true && radioInputs[1].checked === false && radioInputs[2].checked === false) {

        if (card.classList.contains('idea')) card.style.display = 'block'
        else card.style.display = 'none'

      } else if (radioInputs[0].checked === false && radioInputs[1].checked === true && radioInputs[2].checked === false) {

        if (card.classList.contains('made')) card.style.display = 'block'
        else card.style.display = 'none'

      } else if (radioInputs[0].checked === false && radioInputs[1].checked === false && radioInputs[2].checked === true) {

        if (card.classList.contains('real')) card.style.display = 'block'
        else card.style.display = 'none'

      } else card.style.display = 'block'
    })

  })
})


// adding new ideas
addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = event.target.elements[0].value
  const inputField = document.querySelector('#search')

  const idea = new Object()

  idea.id = content.length
  idea['project-name'] = value
  idea['project-notes'] = ''
  idea.status = 'idea'
  idea.progress = 0
  idea.eta = new Date()
  idea.result = "https://petovera.lpages.co/childcare-blueprint/"
  idea.completedAt = new Date()
  idea.summary = []
  idea.steps = {
    "revisions": [
      []
    ]
  }
  content.unshift(idea)
  inputField.value = ''
  displayContent()
})