const Pi = 3.14; 
let rad = 6378e3;
let circ = (2 * Pi * rad);
let surfarea = (4 * Pi * (rad ** 2));
let volume = ((4/3)*Pi*(rad ** 3));

document.write('The radius of the sphere is ' + rad);
document.write('<br>');
document.write('The circumference is ' + circ);
document.write('<br>');
document.write('The surface area is ' + surfarea);
document.write('<br>');
document.write('The volume is ' + volume);
document.write('<br>');
