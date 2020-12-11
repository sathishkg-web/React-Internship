Number.prototype.currency = function () {
  var x=this.toLocaleString();
  return x;
};

var sampleinput = 1000;
console.log(sampleinput.currency());
