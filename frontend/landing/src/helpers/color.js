//! WIP, Need to Refactor!!!

// Simple class for handling sRGB colors
class Color  {
	constructor(rgba, opacity) {

		if (rgba[3] === undefined) {
			rgba[3] = 1;
			if(opacity != null) rgba[3] = opacity;
		}

		this.rgba = rgba;
	};

	get rgb () {
		return this.rgba.slice(0,3);
	};

	get hex () {
		const [r, g, b] = this.rgba.slice(0,3);
		return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	};

	get alpha () {
		return this.rgba[3];
	};

	set alpha (alpha) {
		this.rgba[3] = alpha;
	};

	get luminance () {
		// Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
		var rgba = this.rgba.slice();

		rgba.map(v => {
			v /= 255;
			v = v < .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4);
		})

		return .2126 * rgba[0] + .7152 * rgba[1] + 0.0722 * rgba[2];
	};

	get brightness () {
		var [r, g, b] = this.rgba;
		return (299*r + 587*g + 114*b) / 1000;
	};

	get isDark () {
		return this.brightness <= 125;
	};

	get isLight () {
		return this.brightness > 125;
	};

	get inverse () {
		return new Color([
			255 - this.rgba[0],
			255 - this.rgba[1],
			255 - this.rgba[2],
			this.alpha
		]);
	};

	getContrastText (contrast=21) {
		let opacityMap, textColor;
		if (this.isLight) {
			opacityMap = contrastToTextOpacityMap.darkOnLight;
			textColor = Color.BLACK;
		} else {
			opacityMap = contrastToTextOpacityMap.lightOnDark;
			textColor = Color.WHITE;
		}

		// Inform the user if the contrast isn't within the proper number range.
		//TODO: How would I enforce this properly? How would I do testing?
		if (contrast >= 1 && contrast <= 21) {
			const contrastRemainder = contrast % 1
			contrast = contrast - contrastRemainder;
			const isWholeNumber = contrastRemainder === 0;
			if (isWholeNumber) {
				textColor.alpha = opacityMap[contrast];
			} else {
				// Enable the use of non-whole numbers
				textColor.alpha = opacityMap[contrast] + (contrastRemainder * (opacityMap[contrast+1] - opacityMap[contrast]))
			}
			return textColor
		} else {
			console.log(contrast + " is not a valid contrast value. color().getContrastText() contrast must be within the range of 1-21.")
		}
	};

	toString () {
		return 'rgb' + (this.alpha < 1? 'a' : '') + '(' + this.rgba.slice(0, this.alpha >= 1? 3 : 4).join(', ') + ')';
	};

	clone () {
		return new Color(this.rgba);
	};

	// Overlay a color over another
	overlayOn (color) {
		var overlaid = this.clone();

		var alpha = this.alpha;

		if (alpha >= 1) {
			return overlaid;
		}

		for(var i=0; i<3; i++) {
			overlaid.rgba[i] = Math.round(overlaid.rgba[i] * alpha + color.rgba[i] * color.rgba[3] * (1 - alpha));
		}

		overlaid.rgba[3] = alpha + color.rgba[3] * (1 - alpha);

		return overlaid;
	};

	contrast (color) {
		// Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
		var alpha = this.alpha;

		if (alpha >= 1) {
			if (color.alpha < 1) {
				color = color.overlayOn(this);
			}

			var l1 = this.luminance + .05,
				l2 = color.luminance + .05,
				ratio = l1/l2;

			if (l2 > l1) {
				ratio = 1 / ratio;
			}

			// ratio = floor(ratio, 2);

			return {
				ratio: ratio,
				error: 0,
				min: ratio,
				max: ratio
			};
		}

		// If we’re here, it means we have a semi-transparent background
		// The text color may or may not be semi-transparent, but that doesn't matter

		var onBlack = this.overlayOn(Color.BLACK),
		    onWhite = this.overlayOn(Color.WHITE),
		    contrastOnBlack = onBlack.contrast(color).ratio,
		    contrastOnWhite = onWhite.contrast(color).ratio;

		var max = Math.max(contrastOnBlack, contrastOnWhite);

		// This is here for backwards compatibility and not used to calculate
		// `min`.  Note that there may be other colors with a closer luminance to
		// `color` if they have a different hue than `this`.
		var closest = this.rgb.map(function(c, i) {
			return Math.min(Math.max(0, (color.rgb[i] - c * alpha)/(1-alpha)), 255);
		});

		closest = new Color(closest);

		var min = 1;
		if (onBlack.luminance > color.luminance) {
			min = contrastOnBlack;
		}
		else if (onWhite.luminance < color.luminance) {
			min = contrastOnWhite;
		}

		return {
			ratio: (min + max) / 2,
			error: (max - min) / 2,
			min: min,
			max: max,
			closest: closest,
			farthest: onWhite == max? Color.WHITE : Color.BLACK
		};
	}

	adjustBrightness (percent) {
		const lightened = this.clone();
		const hex = rgbToHex(...lightened.rgb);
		const num = parseInt(hex.replace("#",""),16),
			amt = Math.round(2.55 * percent),
			R = (num >> 16) + amt,
			B = (num >> 8 & 0x00FF) + amt,
			G = (num & 0x0000FF) + amt;
		const rgb = parseColor("#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1));
		lightened.rgba = [...rgb, lightened.alpha];
		return lightened;
	};
};

Color.BLACK = new Color([0,0,0]);
Color.GRAY = new Color([127.5, 127.5, 127.5]);
Color.WHITE = new Color([255,255,255]);



function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function parseColor(input) {
	// Accept: 
	//   - read hex, rgb, rgba, hsl, hsv, and color names
	//   - string and numbers
	if (input.substr(0,1)=="#") {
		var collen=(input.length-1)/3;
		var fact=[17,1,0.062272][collen-1];
		return [
				Math.round(parseInt(input.substr(1,collen),16)*fact),
				Math.round(parseInt(input.substr(1+collen,collen),16)*fact),
				Math.round(parseInt(input.substr(1+2*collen,collen),16)*fact)
		];
	}
	else {
		if(input.includes("(") && input.includes(")")) {
			return input.split("(")[1].split(")")[0].split(",").map(x=>+x);
		} else {
			return input.split(",").map(x=>+x);
		}
	}
}

export const color = (color, opacity=null) => {
	return new Color(parseColor(color), opacity);
}


// ============================================================================

const contrastToTextOpacityMap = {
	darkOnLight: {
		1: 0.0,
		2: 0.283,
		3: 0.42,
		4: 0.505,
		5: 0.565,
		6: 0.61,
		7: 0.65,
		8: 0.685,
		9: 0.715,
		10: 0.74,
		11: 0.765,
		12: 0.79,
		13: 0.81,
		14: 0.83,
		15: 0.85,
		16: 0.87,
		17: 0.89,
		18: 0.91,
		19: 0.94,
		20: 0.97,
		21: 1.0
	},
	lightOnDark: {
		1: 0.0,
		2: 0.25,
		3: 0.35,
		4: 0.425,
		5: 0.485,
		6: 0.54,
		7: 0.585,
		8: 0.63,
		9: 0.665,
		10: 0.705,
		11: 0.74,
		12: 0.77,
		13: 0.8,
		14: 0.828,
		15: 0.855,
		16: 0.88,
		17: 0.905,
		18: 0.93,
		19: 0.955,
		20: 0.98,
		21: 1.0
	}
}