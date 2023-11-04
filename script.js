/*===== DRAG and DROP =====*/
const dropItems = document.getElementById('drop-items')

new Sortable(dropItems, {
   animation: 8,
   chosenClass: "sortable-chosen",
   dragClass: "sortable-drag",
});
