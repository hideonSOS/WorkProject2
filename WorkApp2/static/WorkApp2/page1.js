const SelectOn=(No)=>{
    if (No<10){alert(No+'号機はありません。');}
    else if (No>=10 && No<40){
        NN=No-10;
        return MotorDict[NN]
    }
    else if (No>=40 && No<50){alert(No+'号機はありません。');}
    
    else if (No >=50 && No<=84){
        NN=No-20;
        return MotorDict[NN]
    }
    else if (No>84){alert(No+'号機はありません。');}
}