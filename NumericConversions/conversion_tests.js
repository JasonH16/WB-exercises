// Description: This script tests various numeric conversion techniques
// conversion techniques
// Author: Jason H.
var log = console.log;
var a = "  101.1  ";
var b = "55";
var c = "402 Stevens";
var d = "Number 5  ";

log(parseInt(a));
log(parseInt(b));
log(parseInt(c));
log(parseInt(d));

log(parseFloat(a));
log(parseFloat(b));
log(parseFloat(c));
log(parseFloat(d));

log(Number(a));
log(Number(b));
log(Number(c));
log(Number(d));

log(+a);
log(+b);
log(+c);
log(+d);

