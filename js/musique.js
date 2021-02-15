function changerMusique(c){
    if(musiqueCourante){
        musiqueCourante.stop();
    }
    musiqueCourante = c;
    musiqueCourante.play();
}
