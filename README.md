Interactive Shopping List

A simple interactive shopping application that allows users to: add items to the list, mark items as purchased, and clear the list. It also allows you to save and restore the shopping list.

Features;
- Enter item: prompts user to add new items to the list.
- Add button: Adds new items to the list.
- Mark purchased: Checks items off the list once purchased.
- Clear List: Clears list after purchase of new items.

Setup;
Create a local repo for your project and add it to your directory. Initialize the repo as a git repo and cd into it. Open the repo in VScode.

Create a html file with a structure for displaying the purchase information for your project and its dependencies in the repository folder. The HTML structure contains an input field for adding items, a list container to display items, and buttons for "Add", "Mark Purchased", and "Clear List".

Use JavaScript to dynamically add new items to the list container when the user clicks the "Add" button.
The JavaScript file stores an array to store shopping list items. Using event listeners, "Add" or the keydown event to capture which key is pressed and pass the user input information that adds items to the list. 

Using JavaScript addEventListener"markPurchasedBtn", that calls on an item that has been purchased and updates the list by deleting the item with a strikethrough text. The JavaScript file stores a list of items in the list container that will be updated to the list when the user clicks "Clear List".

Bonus Features:
This interactive shopping list allows a user to edit existing list items.
Delete purchased items and clear the list entirely when all items are purchased.

Author: Elizabeth Waweru.
