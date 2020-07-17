// ---feet to mile---//


function feetToMile(feet){

    var Mile=feet/5280;
    return Mile;
    
    }
    
    var resultMile=feetToMile(2000);
    
   
    console.log(resultMile);


    // -----end feet to mile--//






    // tiny friend-----//



function tinyFriend(name){

    var smallestName=name[0];

    for(var i=1;i<name.length;i++){
    
        var element=name[i];
        if(element.length<smallestName.length){
    
            smallestName=element;
        }
    }
return smallestName;
}

var largestResult=tinyFriend(["mim","sabiha","simu","sm"]);
console.log(largestResult);


// --end tiny friend---//



// -----wood calculator----//















    
function woodCalculator(chair,table,bed){
    var chairWood=chair*1;
    var tableWood=table*3;
    var bedWood=bed*5;


    var totalWood=chairWood+tableWood+bedWood;
    return totalWood;
    }

    var result=woodCalculator(2,5,10);
    console.log(result);
    


    // ------end wood calculator-----//





    function brickCalculator(floor){

    var tenFloorFeet =floor*15;

    var twentyFloorfeet=(floor-10)*12+150;
    var thirtyFloorFeet=(floor-20)*10+120+150;

    if(floor<=10){


        console.log(tenFloorFeet);
    }
    else if(floor<=20){

        console.log(twentyFloorfeet);
    }

    else if(floor<=30){

    console.log(thirtyFloorFeet);

    }
    }

    var resultOfFeet=brickCalculator(22)*1000;
  
    console.log(resultOfFeet);
