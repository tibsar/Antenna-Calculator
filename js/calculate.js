function calculate() {
  var frequency = parseInt($("#frequency").val());
  var wavelength = parseInt($("#wavelength").val());
  var full = 984;
  var length_feet = (full*(wavelength/8))/frequency;
  $("#feet").text(length_feet + " feet.")
}