// Problem-5

type TCircle = {
  shape: "circle";
  radius: number;
};

type TRectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type TShape = TCircle | TRectangle;

const calculateShapeArea = (shape: TShape): number => {
  let area: number;

  if (shape.shape === "circle") {
    area = Math.PI * shape.radius * shape.radius; // Circle area
  } else {
    area = shape.width * shape.height; // Rectangle area
  }

  return parseFloat(area.toFixed(2));
};

// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// Sample Input 2:
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

// console.log(circleArea, rectangleArea);