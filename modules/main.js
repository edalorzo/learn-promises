'use strict';

import {square, Point, distance} from 'lib.js';

let println = text => document.writeln(`${text}<br/>`);

println(`square(6) = ${square(6)}`);

let x = new Point(3,7);
let y = new Point(-6,-4);

println(`distance(${x},${y}) = ${distance(x,y)}`);


