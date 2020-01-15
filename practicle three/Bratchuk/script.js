/* Практическая Работа 3
Создайте четыре объекта, соответствующие городам Свердловской области (любым).
Объекты должны содержать название города и результаты последних 5-ти переписей населения.
Создайте метод, с использованием this, вычисляющий прогнозируемое население на 2022 год, запишите результат в объекты.
Выведите результат любым удобным способом.
Результат должен содержать:
Название города, средний прирост/убыль населения, прогнозируемую численность на 2022 и 2025 годы.
Для 2025 года не надо записывать в объект, сам метод выводить так же не нужно.
Использовать объекты и их методы.
*/
let City1 = {
    City: "Екатеринбург",
    Population2015: 1428042,
    Population2016: 1444439,
    Population2017: 1455904,
    Population2018: 1468833,
    Population2019: 1483119,
};
let City2 = {    
    City: "Алапаевск",
    Population2015: 37857,
    Population2016: 37739,
    Population2017: 37653,
    Population2018: 37526,
    Population2019: 37219,
};
let City3 = {    
    City: "Ивдель",
    Population2015: 16378,
    Population2016: 16235,
    Population2017: 16090,	
    Population2018: 15888,
    Population2019: 15659,
};
let City4 = {    
    City: "Ревда",
    Population2015: 62209,
    Population2016: 62395,
    Population2017: 62632,
    Population2018: 62687,
    Population2019: 62326,
};

function Population() {
    let IncD = Math.round((this.Population2019 - this.Population2015) / 4)
    this.Population2022 = Math.round((this.Population2019 + (IncD * 3)));
    let Population2025 = Math.round((this.Population2019 + (IncD * 6)));
    console.log("Город:", this.City, "Средний Прирост/Убыль:", IncD, "Прогнозируемая Численность на 2022:", this.Population2022, "Прогнозируемая Численность на 2025:", Population2025);
}

City1.Population2022 = Population;
City1.Population2022();
City2.Population2022 = Population;
City2.Population2022();
City3.Population2022 = Population;
City3.Population2022();
City4.Population2022 = Population;
City4.Population2022();