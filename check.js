function check(){
	if((cell[1][1]==1)&&(cell[2][1]==1)&&(cell[3][1]==1)){
	document.getElementById("demo").innerHTML="Winner";}
}
if((cell[4][2]==2)&&(cell[5][2]==2)&&(cell[6][2]==2)){
	document.getElementById("demo").innerHTML="Winner";}
}
if((cell[7][3]==3)&&(cell[8][3]==1)&&(cell[9][3]==3)){
	document.getElementById("demo").innerHTML="Winner";}
}
function keyHit_a(){
if(event.key=='a'){chgtoPic12(2);document.getElementById("par1").value="testing";}	
	
}