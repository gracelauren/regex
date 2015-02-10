var isUpcase = function(word) {
  return /\b[A-Z]/.test(word)
};

var cardFormat = function(number) {
  return /\d{4}-\d{4}-\d{4}-\d{4}/.test(number)
};

var isEmail = function(email) {
  var mailFormat = /[a-zA-Z0-9\.!#$%&'*+-/=?^_`{|}~]+(?=@)@[a-zA-Z0-9]+(?=\.).[a-zA-Z0-9]+/
  if(mailFormat.test(email)) {
  }
};
