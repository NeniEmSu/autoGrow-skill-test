"use strict";

var main = document.querySelector("#main-content");
var searchInput = document.querySelector('#search');
var radioInputs = document.querySelectorAll('.main-nav__toggle input');
var addForm = document.querySelector('#addIdea');

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
  displayContent();
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

function displayContent() {
  // clear main to reset for adding new element
  main.innerHTML = ''; // create cards

  content.forEach(function (element) {
    var cardEl = document.createElement("article");
    cardEl.classList.add("card-block", element.status);
    if (element.status !== 'idea') cardEl.classList.add("in-progress");
    cardEl.innerHTML = "\n    <div class=\"card-block__head\">\n      <div class=\"progress\">\n        <div class=\"progress-bar\" role=\"progressbar\" style=\"width: ".concat(element.progress, "%;\" aria-valuenow=\"").concat(element.progress, "\" aria-valuemin=\"0\"\n          aria-valuemax=\"100\">").concat(element.progress, "%</div>\n      </div>\n    </div>\n    <div class=\"card-block__body\">\n      <p class=\"card-block__body-text project-name\">").concat(element['project-name'], "</p>\n      <div class=\"collapsible-menu d-flex d-sm-none\">\n        <button class=\"collapsible-menu-icon\">\n          <img src=\"images/dot-menu.svg\" alt=\"Make icon\" width=\"20\" height=\"20\" class=\"collapsible-menu-icon-img\">\n        </button>\n      </div>\n      <div class=\"card-block__body-icons d-none d-sm-flex\">\n        <button class=\"card-block__body-icon\">\n          <img src=\"images/hammer.svg\" alt=\"Make icon\" width=\"20\" height=\"20\" class=\"card-block__body-icon-img\">\n        </button>\n        <button class=\"card-block__body-icon\">\n          <img src=\"images/chat-box.svg\" alt=\"Make icon\" width=\"20\" height=\"20\" class=\"card-block__body-icon-img\">\n        </button>\n        <button class=\"card-block__body-icon\">\n          <img src=\"images/close.svg\" alt=\"Make icon\" width=\"20\" height=\"20\" class=\"card-block__body-icon-img\">\n        </button>\n      </div>\n    </div>\n    <div class=\"card-block__panel\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"name-").concat(element.id, "\">Project name</label>\n            <input type=\"text\" class=\"form-control\" id=\"name-").concat(element.id, "\" name=\"name\"\n              value=\"").concat(element['project-name'], "\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"notes-").concat(element.id, "\">Project notes</label>\n            <textarea name=\"notes\" id=\"notes-").concat(element.id, "\" class=\"form-control\"></textarea>\n          </div>\n        </div>\n      </div>\n\n      <button class=\"save\">Save</button>\n      <button class=\"delete\">Delete Idea</button>\n    </div>\n    ");
    main.appendChild(cardEl);
  });
}

searchInput.addEventListener('input', function (event) {
  var value = event.target.value;
  var projectName = document.querySelectorAll('.project-name');
  projectName.forEach(function (name) {
    // card-block -> card-block__body -> project name -> style
    if (name.innerText.toLowerCase().includes(value.toLowerCase())) name.parentElement.parentElement.style.display = 'block';else name.parentElement.parentElement.style.display = 'none';
  });
}); // looping radio buttons to filter

radioInputs.forEach(function (input) {
  input.addEventListener('click', function (event) {
    var cardBlock = document.querySelectorAll('.card-block');
    cardBlock.forEach(function (card) {
      if (radioInputs[0].checked === false && radioInputs[1].checked === false && radioInputs[2].checked === false) card.style.display = 'block';else if (radioInputs[0].checked === true && radioInputs[1].checked === true && radioInputs[2].checked === false) {
        if (card.classList.contains('idea') || card.classList.contains('made')) card.style.display = 'block';else card.style.display = 'none';
      } else if (radioInputs[0].checked === true && radioInputs[1].checked === false && radioInputs[2].checked === true) {
        if (card.classList.contains('idea') || card.classList.contains('real')) card.style.display = 'block';else card.style.display = 'none';
      } else if (radioInputs[0].checked === false && radioInputs[1].checked === true && radioInputs[2].checked === true) {
        if (card.classList.contains('made') || card.classList.contains('real')) card.style.display = 'block';else card.style.display = 'none';
      } else if (radioInputs[0].checked === true && radioInputs[1].checked === false && radioInputs[2].checked === false) {
        if (card.classList.contains('idea')) card.style.display = 'block';else card.style.display = 'none';
      } else if (radioInputs[0].checked === false && radioInputs[1].checked === true && radioInputs[2].checked === false) {
        if (card.classList.contains('made')) card.style.display = 'block';else card.style.display = 'none';
      } else if (radioInputs[0].checked === false && radioInputs[1].checked === false && radioInputs[2].checked === true) {
        if (card.classList.contains('real')) card.style.display = 'block';else card.style.display = 'none';
      } else card.style.display = 'block';
    });
  });
}); // adding new ideas

addForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var value = event.target.elements[0].value;
  var inputField = document.querySelector('#search');
  var idea = new Object();
  idea.id = content.length;
  idea['project-name'] = value;
  idea['project-notes'] = '';
  idea.status = 'idea';
  idea.progress = 0;
  idea.eta = new Date();
  idea.result = "https://petovera.lpages.co/childcare-blueprint/";
  idea.completedAt = new Date();
  idea.summary = [];
  idea.steps = {
    "revisions": [[]]
  };
  content.unshift(idea);
  inputField.value = '';
  displayContent();
}); // function toggleCardPanel() {
//   cardBlock.addEventListener('click', (event) => {
//   })
// }