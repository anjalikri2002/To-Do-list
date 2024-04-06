// Function to add a new task
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");
  
  if (taskInput.value === "") {
      alert("Please enter a task!");
      return;
  }
  
  var li = document.createElement("li");
  
  // Create checkbox for marking task as done
  var checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.onclick = function(event) {
      event.stopPropagation(); // Stop event propagation
      if (checkBox.checked) {
          li.classList.add("completed");
      } else {
          li.classList.remove("completed");
      }
  };
  
  // Create delete button with icon
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>'; // Font Awesome trash icon
  deleteButton.classList.add("delete-button");
  deleteButton.onclick = function() {
      li.remove();
  };
  
  // Append elements to list item
  li.appendChild(checkBox);
  li.appendChild(document.createTextNode(taskInput.value));
  li.appendChild(deleteButton);
  
  // Create edit button with icon
  var editButton = document.createElement("button");
  editButton.innerHTML = '<i class="fas fa-edit"></i>'; // Font Awesome edit icon
  editButton.classList.add("edit-button");
  editButton.onclick = function() {
      var newText = prompt("Enter the new task text:", li.textContent.trim());
      if (newText !== null && newText !== "") {
          li.textContent = newText;
          li.appendChild(checkBox); // Re-add checkbox after editing
          li.appendChild(deleteButton); // Re-add delete button after editing
          li.appendChild(editButton); // Re-add edit button after editing
      }
  };
  li.appendChild(editButton); // Append edit button after text content
  
  // Append list item to task list
  taskList.appendChild(li);
  
  // Clear input field
  taskInput.value = "";
}

