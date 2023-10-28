function clockMinuteAdder(time, minutesToAdd) {
    // Your code here:
  ​
    const [horas, minutos] = time.split(":"); // ["09" , "00"]
  ​
    const minutosTotales = minutesToAdd + Number(minutos); // 20
  ​
    const horasTotales = Number(horas) + Math.floor(minutosTotales / 60);
    const nuevosMinutos = minutosTotales % 60;
  ​
    const nuevasHoras = horasTotales % 12 !== 0 ? horasTotales % 12 : 12;
  ​
    const formatoHoras = nuevasHoras < 10 ? `0${nuevasHoras}` : nuevasHoras;
  ​
    const formatoMinutos =
      nuevosMinutos < 10 ? `0${nuevosMinutos}` : nuevosMinutos;
  ​
    return `${formatoHoras}:${formatoMinutos}`;
  }
  ​
  function clockMinuteAdder(time, minutesToAdd) {
    const [hours, minutes] = time.split(":");
    const totalMinutes = Number(hours) * 60 + Number(minutes) + minutesToAdd;
    const newHours = (Math.floor(totalMinutes / 60) + Number(hours)) % 12 || 12;
    const formattedHours = String(newHours).padStart(2, "0");
    const formattedMinutes = String(totalMinutes % 60).padStart(2, "0");
    return `${formattedHours}:${formattedMinutes}`;
  }
  ​
  console.log(clockMinuteAdder("09:00", 20)); //('09:20')
  console.log(clockMinuteAdder("01:30", 30)); //('02:00')
  console.log(clockMinuteAdder("12:05", 100)); //('01:45')
  console.log(clockMinuteAdder("06:30", 90)); //('08:00')
  console.log(clockMinuteAdder("12:05", 1440)); //('12:05')
  ​
  module.exports = clockMinuteAdder;