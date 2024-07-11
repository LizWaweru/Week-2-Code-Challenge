/**
 * This function initializes the shopping list application.
 * It adds event listeners to various DOM elements and defines the behavior of the application.
 */
document.addEventListener("DOMContentLoaded", function () {
    const addItemBtn = document.getElementById("addItemBtn");
    const itemInput = document.getElementById("itemInput");
    const itemList = document.getElementById("itemList");
    const markPurchasedBtn = document.getElementById("markPurchasedBtn");
    const clearListBtn = document.getElementById("clearListBtn");
  
    /**
     * This function adds a new item to the shopping list.
     * It creates a new list item, adds a delete button, and appends it to the list.
     */
    function addItem() {
      const newItemText = itemInput.value.trim();
      if (newItemText === "") return; // Do nothing if input is empty
  
      const liItem = document.createElement("li");
      liItem.textContent = newItemText;
  
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-btn");
      deleteButton.textContent = "❌";
  
      deleteButton.addEventListener("click", function () {
        itemList.removeChild(liItem);
      });
  
      liItem.appendChild(deleteButton);
      itemList.appendChild(liItem);
  
      itemInput.value = "";
    }
  
    addItemBtn.addEventListener("click", addItem);
  
    itemInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission
        addItem();
      }
    });
  
    itemList.addEventListener("click", function (e) {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("purchased");
      }
    });
  
    markPurchasedBtn.addEventListener("click", function () {
      const items = itemList.getElementsByTagName("li");
      for (let item of items) {
        item.classList.add("purchased");
      }
    });
  
    clearListBtn.addEventListener("click", function () {
      itemList.innerHTML = ""; // Clear all list items
    });
  });