let images = [];
let position = 0;
// Get Json data with AJAX
$.ajax({
    type:"GET",
    url: "Images.json",
    success:function(response){
        var json = $.parseJSON(response);
        images = [
            img1 = json[0],
            img2 = json[1],
            img3 = json[2], 
            img4 = json[3],
            img5 = json[4],
            img6 = json[5],
            img7 = json[6]
        ]
        console.log(json);
        display();
    }
})



// display image
function display(){
    $(".image").fadeOut(300,() =>{
        $(".image").attr("src",images[position].source);
    }).fadeIn(300);
    console.log(images[position].source);
    setTimeout(next,images[position].time);
}

// fuction to move previus
$('#previus').on('click',previus)
function previus(){
    if(position == 0){
        position = 6;
    }else{
        position = position - 1;
    }
    display();
}
// fuction to move next
$('#next').on('click',next)
function next(){
    if(position == 6){
        position = 0;
    }else{
        position = position + 1;
    }
    display();
}
