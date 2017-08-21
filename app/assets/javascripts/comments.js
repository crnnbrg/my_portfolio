jQuery.fn.submitOnCheck = function() {
  this.find('input[type=submit]').remove();
  return this;
}
