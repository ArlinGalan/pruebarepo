$(".h1").click(function(){
    $(this).css("color","blue");
})

$(".parrafo").mouseover(function(){
    $(this).css("background","white").css("color","black");
}); $(".parrafo").mouseout(function(){
    $(this).css("background","black").css("color","white");
})

var inputs=document.getElementsByClassName('formulario-input');
for (var i=0;i<inputs.length;i++){
inputs[i].addEventListener(keyup,function(){
    if(this.value.length>=1){this.nexTElementSibling.classlist.add('fijar');
} else {nexTElementSibling.classlist. remove('fijar');}
});}
