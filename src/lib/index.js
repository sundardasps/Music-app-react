export const getAverageColor = (src, callback) => {
  const img = new Image();
  img.crossOrigin = "Anonymous";
  img.src = src;

  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    const imageData = ctx.getImageData(
      img.width * 0.75,
      img.height * 0.75,
      img.width * 0.25,
      img.height * 0.25
    );

    const data = imageData.data;
    let r = 0, g = 0, b = 0, count = 0;

    for (let i = 0; i < data.length; i += 4) {
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
      count++;
    }

    r = Math.floor(r / count);
    g = Math.floor(g / count);
    b = Math.floor(b / count);

    const averageColor = [r, g, b];

    // Create darker matte version (50% brightness)
    const darkR = Math.floor(r * 0.4);
    const darkG = Math.floor(g * 0.4);
    const darkB = Math.floor(b * 0.4);

    const darkMatteColor = `rgb(${darkR}, ${darkG}, ${darkB})`;

    callback(averageColor, darkMatteColor);
  };
};


