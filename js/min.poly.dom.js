/**
 * RaiseJS / Raise your frontend projects to the next level! Extend your RaiseJS core with these jQuery DOM fundamentals.
 * Copyright(C) 2019 Victor Homic, the RaiseJS Project

 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with this program. If not, see https://www.gnu.org/licenses/.
 */

(function(e,f,d){if("undefined"===typeof d||null===d)throw Error("Please import RaiseJS/core before loading RaiseJS/DOM and try again.");$.fn.css=function(a,b){if("undefined"===typeof a||null===a)return!1;if("undefined"===typeof b||null===b){var c=[];this.each(function(b){""==b.style[a]?c.push(window.getComputedStyle(b,null).getPropertyValue(a)):c.push(b.style[a])});return c}return this.each(function(c){c.style.setProperty(a,b)})};$.fn.html=function(a){if("undefined"===typeof a||null===a){var b=[];
this.each(function(a){b.push(a.innerHTML)});return b}return this.each(function(b){b.innerHTML=a})};$.fn.val=function(a){if("undefined"===typeof a||null===a){var b=[];this.each(function(a){b.push(a.value)});return b}return this.each(function(b){b.value=a})};$.fn.attr=function(a,b){if("undefined"===typeof a||null===a)return!1;if("undefined"===typeof b||null===b){var c=[];this.each(function(b){b.hasAttribute(a)?c.push(b.getAttribute(a)):c.push(!1)});return c}return this.each(function(c){c.setAttribute(a,
b)})};$.fn.removeAttr=function(a){return this.each(function(b){b.removeAttribute(a)})};$.fn.toggleClass=function(a){return this.each(function(b){b.classList.toggle(a)})};$.fn.addClass=function(a){return this.each(function(b){b.classList.add(a)})};$.fn.removeClass=function(a){return this.each(function(b){b.classList.remove(a)})};$.fn.on=function(a,b){return this.each(function(c){c.addEventListener(a,b)})};$.fn.off=function(a,b){return this.each(function(c){c.removeEventListener(a,b)})};$.fn.trigger=
function(a){var b=new Event(a);return this.each(function(a){a.dispatchEvent(b)})}})(document,window,$);
