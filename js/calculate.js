function calculate() {
  var frequency = parseInt($("#frequency").val());
  var wavelength = parseInt($("#wavelength").val());
  var full = 984;
  var length_feet = ((full*(wavelength/8))/frequency).toFixed(4);
  var length_meters = (length_feet * 0.3048).toFixed(4);

  $("#length").text("The length is:");
  $("#feet").text(length_feet + " feet");
  $("#or").text("or")
  $("#meters").text(length_meters + " meters");
}

function validateForm() {
  var isValid = true;
  if ( $("#frequency").val() === '' ){
    isValid = false;
  }
  return isValid;
}