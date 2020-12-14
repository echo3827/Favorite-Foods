var photos = ["https://s3.amazonaws.com/spoonflower/public/design_thumbnails/0668/6374/r6036766_rpizza_lite_blue_shop_thumb.png", "https://s3.amazonaws.com/spoonflower/public/design_thumbnails/0693/5461/rFriespinkmintxxx_shop_thumb.png", "https://s3.amazonaws.com/spoonflower/public/design_thumbnails/0384/3266/rr3672930_3040624_rrrrrrBurgers_1_shop_thumb.png"
];
console.log(photos);

photos.forEach(function(item,name){
    $(".gallery").append("<img src=" + photos[name] + ">");
});

$('button').click(function(){
  var link = $('.image').val();
    photos.push(link);
    console.log(photos);
    $(".gallery").empty();
    
photos.forEach(function(item,name){
    $(".gallery").append("<img src=" + photos[name] + ">");    
    
});    
 });  
