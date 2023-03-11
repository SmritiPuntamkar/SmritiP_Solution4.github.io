var names=new Array();
names[0]="Paula";
names[1]="John";
names[2]="Jim";
names[3]="Franklin";
names[4]="Robert";
names[5]="Harry";
names[6]="Mary";
names[7]="Jannet";
names[8]="Jack";
names[9]="Joey";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
