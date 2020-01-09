let LinSFir = 12000
let LinSSec = 12000*1.2
let LinSThr = (LinSFir+LinSSec)/2
let LinSChe = (LinSFir+LinSSec)/2
let Dopvol = 0.2

//функция для вычисления волоконной емкости
function VE (vol) {
    return vol/2
}

let VolFirst = 128
let VolSecond = VE(VolFirst)
let VolThird = VE(VolSecond)
let VolCher = VE(VolThird)

//функция для нахождения веса
function ves (Lin,vol,dopvolokon){
    return (Lin/100*vol*dopvolokon)
}

let VesFir = ves(LinSFir,VolFirst,Dopvol)
let VesSec = ves(LinSSec,VolSecond,Dopvol)
let VesThr = ves(LinSThr,VolThird,Dopvol)
let VesChe = ves(LinSChe,VolCher,Dopvol)

switch (true) {
    case (VesFir>VesSec && VesFir>VesThr && VesFir>VesChe):
          document.write("Самая тяжелая линия 1 имеет общий вес ",VesFir," кг, а 100 метров используемого кабеля весят ",VesFir/LinSFir*100," кг")
        break
    case (VesSec>VesFir && VesSec>VesThr && VesSec>VesChe):
        document.write("Самая тяжелая линия 2 имеет общий вес ",VesSec," кг, а 100 метров используемого кабеля весят ",VesSec/LinSSec*100," кг")
        break
    case (VesThr>VesFir && VesThr>VesSec && VesThr>VesChe):
        document.write("Самая тяжелая линия 3 имеет общий вес ",VesThr," кг, а 100 метров используемого кабеля весят ",VesThr/LinSThr*100," кг")
        break
    case (VesChe>VesFir && VesChe>VesSec && VesChe>VesThr):
        document.write("Самая тяжелая линия 4 имеет общий вес ",VesChe," кг, а 100 метров используемого кабеля весят ",VesChe/LinSChe*100," кг")
        break
}