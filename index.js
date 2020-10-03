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

  $(window).click(function (event) {
    if (!$(event.target).is(".form-control")) {
      $(".form-control").each(function () {
        if ($(this).val() == "") {
          $(this).parent().removeClass("label-animate");
        }
      });
    }
  });

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
          <img src="images/dot-menu.svg" alt="subMenu icon" width="20" height="20" class="collapsible-menu-icon-img">
        </button>
      </div>
      <div class="card-block__body-icons d-none d-sm-flex">
        <button class="card-block__body-icon make-btn">
          <span>Make it Real</span>
          <img src="images/hammer.svg" alt="Make icon" width="20" height="20" class="card-block__body-icon-img">
        </button>
        <button class="card-block__body-icon chat-btn">
          <span>Discuss in chat</span>
          <img src="images/chat-box.svg" alt="chat box icon" width="20" height="20" class="card-block__body-icon-img">
        </button>
        <button class="card-block__body-icon delete-btn">
          <span>Delete</span>
          <img src="images/close.svg" alt="delete icon" width="20" height="20" class="card-block__body-icon-img">
        </button>
      </div>
    </div>
    <div class="card-block__panel">
      <form class="card-block__panel-form row d-none">
        <div class="col-12">
          <div class="form-group">
            <label for="name-${element.id}">Project name</label>
            <input type="text" class="form-control" id="name-${element.id}" name="name"
              value="${element['project-name']}">
          </div>
          <div class="form-group">
            <label for="notes-${element.id}">Project notes</label>
            <textarea name="notes" rows="5" id="notes-${element.id}" class="form-control">${element['project-notes']}</textarea>
          </div>
        </div>
      </form>
      <div class="${element['project-notes'] === '' ? 'd-none' : ''}">
        <p>${element['project-notes']}</p>
      </div>
      <button name='add-notes' id="add-notes-${element.id}" class="add ${element['project-notes'] === '' ? '' : 'd-none'}">Add notes</button>
      <button name='edit-notes' id="edit-notes-${element.id}" class="edit ${element['project-notes'] === '' ? 'd-none' : ''}">Edit notes</button>
      <button name='save-notes' type="submit" id="save-notes-${element.id}" class="save d-none">Save</button>
      <button name='delete-notes' id="delete-notes-${element.id}" class="delete">Delete Idea</button>
    </div>
    `
    main.appendChild(cardEl);

    // add event listener to toggle panel
    const cardNodes = cardEl.childNodes;
    const cardBody = getSpecificChildEl('card-block__body', cardNodes);

    // finding buttons within nested child elements
    const maKeBtn = cardBody.childNodes[5].childNodes[1];
    const chatBtn = cardBody.childNodes[5].childNodes[3];
    const deleteBtn = cardBody.childNodes[5].childNodes[5];

    const form = cardEl.childNodes[7].childNodes[1]
    const addBtn = cardEl.childNodes[7].childNodes[5];
    const saveBtn = cardEl.childNodes[7].childNodes[9]
    const deleteBtnInner = cardEl.childNodes[7].childNodes[11]

    addBtn.addEventListener('click', () => {
      form.classList.remove('d-none')
      saveBtn.classList.remove('d-none')
      addBtn.classList.add('d-none')
    })

    saveBtn.addEventListener('click', (event) => {
      // const projectNameInput = form.childNodes[1].childNodes[1].childNodes[3].value
      // const projectNotesInput = form.childNodes[1].childNodes[3].childNodes[3].innerText
      saveNotes(element.id, element['project-name'], 'still working on the bugs')
    })

    // toggle card
    cardBody.addEventListener('click', (event) => {
      // excluding all other children in event
      if (event.target !== cardBody && event.target !== cardBody.childNodes[1]) return;

      cardEl.classList.toggle('open');
    }, false);

    // set element as made
    maKeBtn.addEventListener('click', () => {
      element.status = 'made';
      element.progress = 10;
      displayContent();;
    });

    maKeBtn.addEventListener('mouseover', () => {
      toggleAnimateBtnClass(maKeBtn, 'add')
    });

    maKeBtn.addEventListener('mouseleave', () => {
      toggleAnimateBtnClass(maKeBtn, 'remove')
    });

    chatBtn.addEventListener('click', () => {
      alert("Lets chat if you have the time.");
    });

    chatBtn.addEventListener('mouseover', () => {
      toggleAnimateBtnClass(chatBtn, 'add')
    });

    chatBtn.addEventListener('mouseleave', () => {
      toggleAnimateBtnClass(chatBtn, 'remove')
    });

    [deleteBtnInner, deleteBtn].forEach((btn) => {
      btn.addEventListener('click', () => {
        deleteIdea(element.id);
      })
    })


    deleteBtn.addEventListener('mouseover', () => {
      toggleAnimateBtnClass(deleteBtn, 'add')
    });

    deleteBtn.addEventListener('mouseleave', () => {
      toggleAnimateBtnClass(deleteBtn, 'remove')
    });
  });
}

function getSpecificChildEl(lookUpClass, parentNode) {
  // console.log(parentNode)
  let foundElement = null;
  for (let i = 0; i < parentNode.length; i++) {
    if (parentNode[i].className === lookUpClass) {
      foundElement = parentNode[i];
      break;
    }
  }
  return foundElement;
}

function toggleAnimateBtnClass(buttonReceivingAction, classListMethod) {
  setTimeout(function () {
    if (classListMethod === 'add') buttonReceivingAction.classList.add('animate-btn')
    else buttonReceivingAction.classList.remove('animate-btn')
  }, 100);
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

function saveNotes(id, updatedName, notes) {
  const found_Elm_Index_By_Id = content.findIndex(element => element.id === id)
  const indexedElm = content[found_Elm_Index_By_Id]
  indexedElm['project-name'] = updatedName
  indexedElm['project-notes'] = notes

  displayContent()
}

function deleteIdea(id) {
  const found_Elm_Index_By_Id = content.findIndex(element => element.id === id)
  content.splice(found_Elm_Index_By_Id, 1)
  displayContent()
}