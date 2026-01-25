window.addEventListener("load", () => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  let currentBackgroundColor = "#ffffff";
  let currentStrokeColor = "#000000";
  let currentLineWidth = 5;

  const culoare_fundal = document.getElementById("back_canvas");
  const culoare_ext = document.getElementById("cul_ext");
  const culoare_ump = document.getElementById("cul_ump");
  const formaElipsa = document.getElementById("elipsa");
  const formaDreptunghi = document.getElementById("dreptunghi");
  const formaLinie = document.getElementById("linie");
  const formaPensula = document.getElementById("pensula");
  const lineWidthInput = document.getElementById("lineWidth");

  let isDrawing = false;
  let isEllipseMode = false;
  let isRectangleMode = false;
  let isLineMode = false;

  let ellipse = {
    x: 0,
    y: 0,
    radiusX: 0,
    radiusY: 0,
    fillColor: "#ffffff",
  };
  let rectangle = {
    startX: 0,
    startY: 0,
    width: 0,
    height: 0,
    fillColor: "#ffffff",
  };
  let line = {
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
    fillColor: "#ffffff",
  };

  culoare_fundal.addEventListener("input", () => {
    currentBackgroundColor = culoare_fundal.value;
    drawBackground();
    drawStoredShapes();
  });

  culoare_ext.addEventListener("input", () => {
    currentStrokeColor = culoare_ext.value;
  });

  culoare_ump.addEventListener("input", () => {
    ellipse.fillColor = culoare_ump.value;
    rectangle.fillColor = culoare_ump.value;
    line.fillColor = culoare_ump.value;
  });

  lineWidthInput.addEventListener("input", () => {
    currentLineWidth = parseInt(lineWidthInput.value, 10) || 1;
    ctx.lineWidth = currentLineWidth;
  });

  formaElipsa.addEventListener("click", () => {
    isEllipseMode = true;
    isRectangleMode = false;
    isLineMode = false;
    isDrawing = false;
  });

  formaDreptunghi.addEventListener("click", () => {
    isEllipseMode = false;
    isRectangleMode = true;
    isLineMode = false;
    isDrawing = false;
  });

  formaLinie.addEventListener("click", () => {
    isEllipseMode = false;
    isRectangleMode = false;
    isLineMode = true;
    isDrawing = false;
  });

  formaPensula.addEventListener("click", () => {
    isEllipseMode = false;
    isRectangleMode = false;
    isLineMode = false;
  });

  const storedShapes = [];
  let currentPath = null;

  const startDraw = (e) => {
    ctx.strokeStyle = currentStrokeColor;
    ctx.fillStyle = ellipse.fillColor;
    ctx.lineWidth = currentLineWidth;

    if (isEllipseMode) {
      ellipse.x = e.offsetX;
      ellipse.y = e.offsetY;
      isDrawing = true;
    } else if (isRectangleMode) {
      rectangle.startX = e.offsetX;
      rectangle.startY = e.offsetY;
      isDrawing = true;
    } else if (isLineMode) {
      line.startX = e.offsetX;
      line.startY = e.offsetY;
      isDrawing = true;
    } else {
      isDrawing = true;
      ctx.beginPath();
      currentPath = new Path2D();
      currentPath.moveTo(e.offsetX, e.offsetY);
    }
  };

  const drawing = (e) => {
    if (!isDrawing) return;

    if (isEllipseMode) {
      ellipse.radiusX = Math.abs(e.offsetX - ellipse.x);
      ellipse.radiusY = Math.abs(e.offsetY - ellipse.y);
      drawEllipse();
    } else if (isRectangleMode) {
      rectangle.width = e.offsetX - rectangle.startX;
      rectangle.height = e.offsetY - rectangle.startY;
      drawRectangle();
    } else if (isLineMode) {
      line.endX = e.offsetX;
      line.endY = e.offsetY;
      drawLine();
    } else {
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
      currentPath.lineTo(e.offsetX, e.offsetY);
    }
  };

  const drawEllipse = () => {
    drawBackground();
    ctx.beginPath();
    ctx.ellipse(
      ellipse.x,
      ellipse.y,
      ellipse.radiusX,
      ellipse.radiusY,
      0,
      0,
      2 * Math.PI
    );
    ctx.stroke();
    ctx.fill();
    drawStoredShapes();
  };

  const drawRectangle = () => {
    drawBackground();
    ctx.beginPath();
    ctx.rect(
      rectangle.startX,
      rectangle.startY,
      rectangle.width,
      rectangle.height
    );
    ctx.stroke();
    ctx.fill();
    drawStoredShapes();
  };

  const drawLine = () => {
    drawBackground();
    ctx.beginPath();
    ctx.moveTo(line.startX, line.startY);
    ctx.lineTo(line.endX, line.endY);
    ctx.stroke();
    drawStoredShapes();
  };

  const endDraw = () => {
    if (isDrawing) {
      let shapeToAdd = null;

      if (isEllipseMode) {
        shapeToAdd = { type: "ellipse", ...ellipse };
      } else if (isRectangleMode) {
        shapeToAdd = { type: "rectangle", ...rectangle };
      } else if (isLineMode) {
        shapeToAdd = { type: "line", ...line };
      } else {
        ctx.closePath();
        shapeToAdd = {
          type: "path",
          path: currentPath,
          color: currentStrokeColor,
        };
        currentPath = null;
      }

      if (shapeToAdd) {
        shapeToAdd.lineWidth = currentLineWidth;
        storedShapes.push(shapeToAdd);
        isDrawing = false;
        drawStoredShapes();
      }
    }
  };

  const drawStoredShapes = () => {
    storedShapes.forEach((shape) => {
      ctx.lineWidth = shape.lineWidth;
      ctx.strokeStyle = shape.color;
      ctx.fillStyle = shape.fillColor;

      if (shape.type === "ellipse") {
        ctx.beginPath();
        ctx.ellipse(
          shape.x,
          shape.y,
          shape.radiusX,
          shape.radiusY,
          0,
          0,
          2 * Math.PI
        );
        ctx.stroke();
        ctx.fill();
      } else if (shape.type === "rectangle") {
        ctx.beginPath();
        ctx.rect(shape.startX, shape.startY, shape.width, shape.height);
        ctx.stroke();
        ctx.fill();
      } else if (shape.type === "line") {
        ctx.beginPath();
        ctx.moveTo(shape.startX, shape.startY);
        ctx.lineTo(shape.endX, shape.endY);
        ctx.stroke();
      } else if (shape.type === "path") {
        ctx.stroke(shape.path);
      }
    });

    ctx.lineWidth = currentLineWidth;
    ctx.fillStyle = currentFillColor;
  };

  const drawBackground = () => {
    ctx.fillStyle = currentBackgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  canvas.addEventListener("mousedown", startDraw);
  canvas.addEventListener("mousemove", drawing);
  canvas.addEventListener("mouseup", endDraw);

  const clearButton = document.getElementById("clear");
  const clearCanvas = () => {
    storedShapes.length = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  clearButton.addEventListener("click", clearCanvas);
  document.getElementById("sterge-figura").addEventListener("click", () => {
    if (storedShapes.length > 0) {
      storedShapes.pop();
      drawBackground();
      drawStoredShapes();
    }
  });

  const saveAsPNG = () => {
    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "drawing.png";
    link.click();
  };

  document.getElementById("save-png").addEventListener("click", saveAsPNG);

  const exportAsSVG = () => {
    const data = new XMLSerializer().serializeToString(canvas);
    const blob = new Blob([data], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "drawing.svg";
    link.click();
    URL.revokeObjectURL(url);
  };

  document.getElementById("save-svg").addEventListener("click", exportAsSVG);
});
