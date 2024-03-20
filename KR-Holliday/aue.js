$(document).ready(function () {
  $("#getDataBtn").click(function () {
    getData();
  });
});

function getData() {
  const year = $("#year").val();
  const country_code = $("#country_code").val();
  const month = $("#month").val();

  const holidays = [];
  let j = 0;

  $.get(
    `https://date.nager.at/api/v3/PublicHolidays/${year}/${country_code}`,
    function (data) {
      for (let i = 0; i < data.length; i++) {
        let date = data[i].date.substr(5, 2);

        if (date === month) {
          holidays[j] = [data[i].date, data[i].localName, data[i].name];
          j++;
        }
      }

     