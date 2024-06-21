const areaOfRectangle = (l, w) => {
  return l * w;
};

function areaOfSquare(a) {
  return a * a;
}
function areaOfTriangle(b, h) {
  return (1 / 2) * (b * h);
}

function areaOfCircle(r) {
  return 3.14 * r * r;
}

function AreaOfEllipse(a, b) {
  return 3.14 * a * b;
}

function AreaOfTrapezoid(a, b, h) {
  return (1 / 2) * (a + b) * h;
}

module.exports = {
  areaOfRectangle,
  areaOfSquare,
  areaOfTriangle,
  areaOfCircle,
  AreaOfEllipse,
  AreaOfTrapezoid,
};
