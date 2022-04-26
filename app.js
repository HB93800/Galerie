//console.log('salut');
$('.littles img').mouseover(function(){
    var src1=this.getAttribute("src");
    //var alt2=this.getAttribute("alt");
    console.log(src1);
    //$('.bigs img').removeClass('.big_pic');
    $(".bigs").html('<img src='+src1+">");   

});