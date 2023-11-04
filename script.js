/*===== DRAG and DROP =====*/
const dropItems = document.getElementById('drop-items')

new Sortable(dropItems, {
   animation: 250,
   chosenClass: "sortable-chosen",
   dragClass: "sortable-drag",
});
