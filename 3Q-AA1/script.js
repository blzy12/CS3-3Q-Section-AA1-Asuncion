const Pi = 3.14; 
let rad = 6378e3;
document.write('The radius of the sphere is ' + rad);
document.write('<br>');

let circ = (2 * Pi * rad);
document.write('The circumference is ' + circ);
document.write('<br>');

let surfarea = (4 * Pi * rad ** 2);
document.write('The surface area is ' + surfarea);
document.write('<br>');

let volume = ((4/3)*Pi*(rad ** 3));
document.write('The volume is ' + volume);
document.write('<br>');
