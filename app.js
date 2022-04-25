//console.log('salut');
$('.littles').mouseover(function(){
    var src=this.getAttribute("src");
    console.log(src);
    $(".bigs").html('<img src="${src}" alt="Hokuto.jpg">')   

})