function FormatedDate({date}) {

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    let hour = date.getHours();

    if (hour < 10) {
        hour = `0${hour}`;
    }

  return <p>{day} {hour}:00</p>
} export default FormatedDate;