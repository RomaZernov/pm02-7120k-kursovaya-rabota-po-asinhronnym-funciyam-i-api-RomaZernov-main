$(document).ready(function () {
  $.getJSON("https://restcountries.com/v3.1/all", function (data) {
    const countrySelect = $("#country_code");
    const countries = {};
    data.forEach(function (item) {
      const countryCode = item.cca2;
      const countryName = item.name.common;
      countries[countryCode] = countryName;
    });
    Object.keys(countries)
      .sort()
      .forEach(function (key) {
        countrySelect.append(
          `<option value="${key}">${countries[key]} (${key})</option>`
        );
      });
  });
});
$("#accordion").accordion();

// Hover states on the static widgets
$("#dialog-link, #icons li").hover(
  function () {
    $(this).addClass("ui-state-hover");
  },
  function () {
    $(this).removeClass("ui-state-hover");
  }
);
