function FormatedDate({date}) {

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    let dayNumber = date.getDate();

  return <p>{day} {dayNumber}</p>
} export default FormatedDate;