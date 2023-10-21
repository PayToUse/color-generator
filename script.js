// function (only for specific ids)
function genColor() {
  // hex color generating
  const hexes = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

  var code = hexes[Math.floor(Math.random() * hexes.length)];
  var code2 = hexes[Math.floor(Math.random() * hexes.length)];
  var code3 = hexes[Math.floor(Math.random() * hexes.length)];
  var code4 = hexes[Math.floor(Math.random() * hexes.length)];
  var code5 = hexes[Math.floor(Math.random() * hexes.length)];
  var code6 = hexes[Math.floor(Math.random() * hexes.length)];
  var hex = "#" + code + code2 + code3 + code4 + code5 + code6;

  document.getElementById("hexcolor").innerHTML = hex;
  document.getElementById("hex").style.backgroundColor = hex;

  // hex with opacity color generating (various)
  var hex1 = hexes[Math.floor(Math.random() * hexes.length)];
  var hex2 = hexes[Math.floor(Math.random() * hexes.length)];
  var hex3 = hexes[Math.floor(Math.random() * hexes.length)];
  var hex4 = hexes[Math.floor(Math.random() * hexes.length)];
  var hex5 = hexes[Math.floor(Math.random() * hexes.length)];
  var hex6 = hexes[Math.floor(Math.random() * hexes.length)];
  var hex7 = hexes[Math.floor(Math.random() * hexes.length)];
  var hex8 = hexes[Math.floor(Math.random() * hexes.length)];
  var hexa = "#" + hex1 + hex2 + hex3 + hex4 + hex5 + hex6 + hex7 + hex8;

  document.getElementById("hexa").style.backgroundColor = hexa;
  document.getElementById("hexacolor").innerHTML = hexa;

  // rgb color generating
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  var rgb = "rgb(" + red + ", " + green + ", " + blue + ")";

  document.getElementById("rgbcolor").innerHTML = rgb;
  document.getElementById("rgb").style.backgroundColor = rgb;

  // rgba color generating (various)
  var redA = Math.floor(Math.random() * 255);
  var greenA = Math.floor(Math.random() * 255);
  var blueA = Math.floor(Math.random() * 255);
  var alpha = Math.floor(Math.random() * 10) + 1;
  var fAlpha = alpha / 10;
  var rgba = "rgba(" + redA + ", " + greenA + ", " + blueA + ", " + fAlpha + ")";

  document.getElementById("rgba").style.backgroundColor = rgba;
  document.getElementById("rgbacolor").innerHTML = rgba;

  // name color generating
  var colr = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];
  var color = colr[Math.floor(Math.random() * colr.length)];

  document.getElementById("colrcolor").innerHTML = color;
  document.getElementById("colr").style.backgroundColor = color;

  // hsl color generating
  var hue = Math.floor(Math.random() * 360) + 1;
  var saturation = Math.floor(Math.random() * 100);
  var lightness = Math.floor(Math.random() * 100);
  var hsl = "hsl(" + hue + ", " + saturation + "%, " + lightness + "%)";

  document.getElementById("hslcolor").innerHTML = hsl;
  document.getElementById("hsl").style.backgroundColor = hsl;

  // hsla color generating (various)
  var hue1 = Math.floor(Math.random() * 360) + 1;
  var saturation1 = Math.floor(Math.random() * 100);
  var lightness1 = Math.floor(Math.random() * 100);
  var alpha1 = Math.floor(Math.random() * 10) + 1;
  var fAlpha1 = alpha1 / 10;
  var hsla = "hsla(" + hue1 + ", " + saturation1 + "%, " + lightness1 + "%, " + fAlpha1 + ")";

  document.getElementById("hslacolor").innerHTML = hsla;
  document.getElementById("hsla").style.backgroundColor = hsla;

  // end of function...
}