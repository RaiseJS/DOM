/**
 * RaiseJS / Raise your frontend projects to the next level! Extend your RaiseJS core with these jQuery DOM fundamentals.
 * Copyright(C) 2019 Victor Homic, the RaiseJS Project

 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with this program. If not, see https://www.gnu.org/licenses/.
 */

"use strict";

(function (doc, win, core) {
  "use strict";

  if (typeof core === 'undefined' || core === null) {
    throw new Error("Please import RaiseJS/core before loading RaiseJS/DOM and try again.");
  }

  $.fn.css = function (k, v) {
    if (typeof k === "undefined" || k === null) {
      return false;
    } else {
      if (typeof v === "undefined" || v === null) {
        var r = [];
        this.each(function (el) {
          el.style[k] == "" ? r.push(window.getComputedStyle(el, null).getPropertyValue(k)) : r.push(el.style[k]);
        });
        return r;
      } else {
        return this.each(function (el) {
          el.style.setProperty(k, v);
        });
      }
    }
  };

  $.fn.html = function (html) {
    if (typeof html === "undefined" || html === null) {
      var r = [];
      this.each(function (el) {
        r.push(el.innerHTML);
      });
      return r;
    } else {
      return this.each(function (el) {
        el.innerHTML = html;
      });
    }
  };

  $.fn.val = function (value) {
    if (typeof value === "undefined" || value === null) {
      var r = [];
      this.each(function (el) {
        r.push(el.value);
      });
      return r;
    } else {
      return this.each(function (el) {
        el.value = value;
      });
    }
  };

  $.fn.attr = function (k, v) {
    if (typeof k === "undefined" || k === null) {
      return false;
    } else {
      if (typeof v === "undefined" || v === null) {
        var r = [];
        this.each(function (el) {
          if (el.hasAttribute(k)) {
            r.push(el.getAttribute(k));
          } else {
            r.push(false);
          }
        });
        return r;
      } else {
        return this.each(function (el) {
          el.setAttribute(k, v);
        });
      }
    }
  };

  $.fn.removeAttr = function (c) {
    return this.each(function (el) {
      el.removeAttribute(c);
    });
  };

  $.fn.toggleClass = function (cl) {
    return this.each(function (el) {
      el.classList.toggle(cl);
    });
  };

  $.fn.addClass = function (cl) {
    return this.each(function (el) {
      el.classList.add(cl);
    });
  };

  $.fn.removeClass = function (cl) {
    return this.each(function (el) {
      el.classList.remove(cl);
    });
  };

  $.fn.on = function (en, eh) {
    return this.each(function (el) {
      el.addEventListener(en, eh);
    });
  };

  $.fn.off = function (en, eh) {
    return this.each(function (el) {
      el.removeEventListener(en, eh);
    });
  };

  $.fn.trigger = function (ev) {
    var event = new Event(ev);
    return this.each(function (el) {
      el.dispatchEvent(event);
    });
  };
})(document, window, $);
