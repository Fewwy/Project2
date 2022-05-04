let number = 1;

function next(){

    number = number + 1;

    photo.src = `../pageCreated/assets/img/joke/photo-${number}.jpg`;

    if(number > 16){
    number = 1;
    }
}