let images = [];
let position = 0;
// Get Json data with AJAX
$.ajax({
    type:"GET",
    url: "Images.json",
    success:function(response){
        images = [
            img1 = response[0],
            img2 = response[1],
            img3 = response[2], 
            img4 = response[3],
            img5 = response[4],
            img6 = response[5],
            img7 = response[6]
        ]
        console.log(images);
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
