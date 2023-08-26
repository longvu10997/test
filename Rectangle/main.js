let canvas = document.getElementById("MyCanvas");
let ctx = canvas.getContext("2d");
let rectangle = new Rectangle(10, 10, 200, 100, "#000000");
rectangle.render(ctx);
