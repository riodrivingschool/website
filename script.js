/*===== DRAG and DROP =====*/
const dropItems = document.getElementById('drop-items')

new Sortable(dropItems, {
   animation: 8s linear infinite;
   chosenClass: "sortable-chosen",
   dragClass: "sortable-drag",
});
