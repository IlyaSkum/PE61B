let year = 2019
let Asbest = {
    name: "Асбест",
    r2015:66108,
    r2016:65305,
    r2017:64666,
    r2018:64091,
    r2019:63325,
}

let Kirovgrad = {
    name:"Кировград",
    r2015:20305,
    r2016:20036,
    r2017:19712,
    r2018:19277,
    r2019:18956,
}

let NigniiTagil = {
    name:"Нижний тагил",
    r2015:356773,
    r2016:356288,
    r2017:355693,
    r2018:355950,
    r2019:352135,
}

let Irbit = {
    name:"Ирбит",
    r2015:37681,
    r2016:37444,
    r2017:37443,
    r2018:37280,
    r2019:36668,
}

function prognoz() {
    let Sred = Math.round((this.r2019-this.r2015)/5)
    this.r2022 = Math.round(Sred*(2022-year)+this.r2019)
    let r2025 = Math.round(Sred*(2025-year)+this.r2019)
    document.writeln("<br\/>в городе ",this.name," к 2022 году население составит ",this.r2022," человек, а к 2025 году население будет - ", r2025 ," человек. Средний прирост(убыль) население составляет ",Sred,"человек.");
}

Asbest.prog = prognoz;
Asbest.prog();
Kirovgrad.prog = prognoz;
Kirovgrad.prog();
NigniiTagil.prog = prognoz;
NigniiTagil.prog();
Irbit.prog = prognoz;
Irbit.prog();