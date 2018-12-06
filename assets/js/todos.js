//Check off todos by clicking
$("ul").on("click", "li",function(){
  $(this).toggleClass("completed");
});

//Click on X to delete todo
$("ul").on("click","span",function(event){
  $(this).parent().fadeOut(250,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
   if(event.which === 13){
     //Grabbing new todo text from input
     var todoText = $(this).val();
     //Create a ne li and add to ul
     $("ul").append("<li>"+"<span><i class='far fa-trash-alt'></i></span> "+ todoText + "</li>");
     $(this).val("");
   }
});

$(".fa-plus").on("click",function(){
  $("input[type='text']").fadeToggle();
});
