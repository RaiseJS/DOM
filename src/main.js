// ../main.js

/**
 * RaiseJS / Raise your frontend projects to the next level! Extend your RaiseJS core with these jQuery DOM fundamentals.
 * Copyright(C) !YEAR! Victor Homic, the RaiseJS Project

 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with this program. If not, see https://www.gnu.org/licenses/.
 */

/**
 * RaiseJS/DOM extends your project foundation (@RaiseJS/core).
 * To embed it, you should copy the min.poly.core.js file in the same directory.
 * This file is for development purposes only - it is not minified, has comments and is written in ES6.
 * The RaiseJS project has a focus on offering (!) lightweight libraries. Further information can be found on our webpage.
 */

// This is a self-invoking, anonymous function. Any variable and local function used in here stays in it;
(function(doc, win, core) {
	"use strict"; // Make sure we´re not doing anything wrong
	if (typeof core === 'undefined' || core === null) { // Throw error if core doesn´t exist
		throw new Error("Please import RaiseJS/core before loading RaiseJS/DOM and try again.");
	}
	$.fn.css = function(k, v) {
		if (typeof k === "undefined" || k === null) {
			return false;
		} else {
			if (typeof v === "undefined" || v === null) {
				let r = [];
				this.each(function(el) {
					el.style[k] == "" ? r.push(window.getComputedStyle(el, null).getPropertyValue(k)) : r.push(el.style[k]);
				});
				return r;
			} else {
				return this.each(function(el) {
					el.style.setProperty(k, v);
				});
			}
		}
	};
	$.fn.html = function(html) {
		if (typeof html === "undefined" || html === null) {
			let r = [];
			this.each(function(el) {
				r.push(el.innerHTML);
			});
			return r;
		} else {
			return this.each(function(el) {
				el.innerHTML = html;
			});
		}
	};
	$.fn.val = function(value) {
		if (typeof value === "undefined" || value === null) {
			let r = [];
			this.each(function(el) {
				r.push(el.value);
			});
			return r;
		} else {
			return this.each(function(el) {
				el.value = value;
			});
		}
	};
	$.fn.attr = function(k, v) {
		if (typeof k === "undefined" || k === null) {
			return false;
		} else {
			if (typeof v === "undefined" || v === null) {
				let r = [];
				this.each(function(el) {
					if (el.hasAttribute(k)) {
						r.push(el.getAttribute(k));
					} else {
						r.push(false);
					}
				});
				return r;
			} else {
				return this.each(function(el) {
					el.setAttribute(k, v);
				});
			}
		}
	};
	$.fn.removeAttr = function(c) {
		return this.each(function(el) {
			el.removeAttribute(c);
		});
	};
	$.fn.toggleClass = function(cl) {
		return this.each(function(el) {
			el.classList.toggle(cl);
		});
	};
	$.fn.addClass = function(cl) {
		return this.each(function(el) {
			el.classList.add(cl);
		});
	};
	$.fn.removeClass = function(cl) {
		return this.each(function(el) {
			el.classList.remove(cl);
		});
	};
	$.fn.on = function(en, eh) {
		return this.each(function(el) {
			el.addEventListener(en, eh);
		});
	};
	$.fn.off = function(en, eh) {
		return this.each(function(el) {
			el.removeEventListener(en, eh);
		});
	};
	$.fn.trigger = function(ev) {
      	let event = new Event(ev);
      	return this.each(function(el) {
			el.dispatchEvent(event);
		});
	};
})(document, window, $); // Import the $ core to extend it via $.fn . If it doesn´t exist, an error is thrown.
