  let x=(89+120+103)/3,
    y=(116+94+123)/3,
    z=(97+134+105)/3;
   
    if(x>y && x>z){
       result="Антон";
    }
    else if (y>x && y>z) {
    result="Иван";
  }
    else {
   result="Мария";
    }
     console.log((x), "Среднее кол-во очков Антона" , (y), "Среднее кол-во очков Ивана" ,  (z), "Среднее кол-во очков Марии" );
     console.log((result), "набрал(а) больше очков");
