/* Практическая Работа 2
Четыре оптические линии связи.
Длинна первой - 12км., второй на 20% больше, чем первой.
Третья и четвёртая равны и имеют длину, равную средней длинны первых двух линий.
Волоконная ёмкость каждой линии меньше предыдущей в два раза.
Ёмкость первой - 128 Волокон.
Вычислить вес всех линий связи, если с каждым волокном сто метров кабеля становятся тяжелее на 200гр..
Вывести сообщение вида "самая тяжёлая линия *number* имеет общий вес __, а сто метров используемого кабеля весят __".
Использовать функции.
*/

const LenghtOCLine1 = 12 * 1000;
const LenghtOCLine2 = LenghtOCLine1 + ((LenghtOCLine1 / 100) * 20);
const LenghtOCLine3 = (LenghtOCLine1 + LenghtOCLine2) / 2;
const LenghtOCLine4 = LenghtOCLine3;

const CapacityOCLine1 = 128;
const CapacityOCLine2 = CapacityOCLine1 / 2;
const CapacityOCLine3 = CapacityOCLine2 / 2;
const CapacityOCLine4 = CapacityOCLine3 / 2;

function WeightOCLine(LenghtOCLine, CapacityOCLine) {
    return ((((LenghtOCLine / 100) * (CapacityOCLine * 200)) / 1000))
}

WeightOCLine1 = WeightOCLine(LenghtOCLine1, CapacityOCLine1);
WeightOCLine2 = WeightOCLine(LenghtOCLine2, CapacityOCLine2);
WeightOCLine3 = WeightOCLine(LenghtOCLine3, CapacityOCLine3);
WeightOCLine4 = WeightOCLine(LenghtOCLine4, CapacityOCLine4);

switch (true) {
    case ((WeightOCLine1 > WeightOCLine2) && (WeightOCLine1 > WeightOCLine3) && (WeightOCLine1 > WeightOCLine4)):
    console.log("Самая тяжёлая линия №1 имеет общий вес -", WeightOCLine1, "кг., а сто метров используемого кабеля весят", ((CapacityOCLine1 * 200) / 1000), "кг.");
    break;
    case ((WeightOCLine2 > WeightOCLine1) && (WeightOCLine2 > WeightOCLine3) && (WeightOCLine2 > WeightOCLine4)):
    console.log("Самая тяжёлая линия №2 имеет общий вес -", WeightOCLine2, "кг., а сто метров используемого кабеля весят", ((CapacityOCLine2 * 200) / 1000), "кг.");
    break;
    case ((WeightOCLine3 > WeightOCLine1) && (WeightOCLine3 > WeightOCLine2) && (WeightOCLine3 > WeightOCLine4)):
    console.log("Самая тяжёлая линия №3 имеет общий вес -", WeightOCLine3, "кг., а сто метров используемого кабеля весят", ((CapacityOCLine3 * 200) / 1000), "кг.");
    break;
    case ((WeightOCLine4 > WeightOCLine1) && (WeightOCLine4 > WeightOCLine2) && (WeightOCLine4 > WeightOCLine3)):
    console.log("Самая тяжёлая линия №4 имеет общий вес -", WeightOCLine4, "кг., а сто метров используемого кабеля весят", ((CapacityOCLine4 * 200) / 1000), "кг.");
    break;
default:
break;
    }