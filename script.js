/*===== DRAG and DROP =====*/
const dropItems = document.getElementById('drop-items')

new Sortable(dropItems, {
   animation: ,
   chosenClass: "sortable-chosen",
   dragClass: "sortable-drag",
});
