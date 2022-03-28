$( document ).on( "mousemove", function( event ) {
    $( "#log" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
    // $("#circle").css({"transform": `translate(${event.pageX}, ${event.pageY})`});
    $("#circle").css({"transform": `translate(${event.pageX/20}px, ${event.pageY/20}px)`})

  });

const dragItem = document.getElementById('dragItem');

dragItem.addEventListener("dragstart", dragStart);
dragItem.addEventListener("dragend", dragEnd);

function dragStart(event){
  event.dataTransfer.setData("text/plain", event.target.id);
  setTimeout(() => {
    event.target.classList.add("hide");
  }, 0 );
}

function dragEnd(event){
  console.log(event);
  setTimeout(() => {
    event.target.classList.remove("hide");
    $("#dragItem").css({"top": event.clientX, "left": event.clientY})
  }, 0 );


}