/**
 * AnchorJS - v3.2.2 - 2016-10-05
 * https://github.com/bryanbraun/anchorjs
 * Copyright (c) 2016 Bryan Braun; Licensed MIT
 */
! function(A, e) {
	"use strict";
	"function" == typeof define && define.amd ? define([], e) : "object" == typeof module && module.exports ? module.exports = e() : (A.AnchorJS = e(), A.anchors = new A.AnchorJS)
}(this, function() {
	"use strict";

	function A(A) {
		function e(A) {
			A.icon = A.hasOwnProperty("icon") ? A.icon : "", A.visible = A.hasOwnProperty("visible") ? A.visible : "hover", A.placement = A.hasOwnProperty("placement") ? A.placement : "right", A.class = A.hasOwnProperty("class") ? A.class : "", A.truncate = A.hasOwnProperty("truncate") ? Math.floor(A.truncate) : 64
		}

		function t(A) {
			var e;
			if ("string" == typeof A || A instanceof String) e = [].slice.call(document.querySelectorAll(A));
			else {
				if (!(Array.isArray(A) || A instanceof NodeList)) throw new Error("The selector provided to AnchorJS was invalid.");
				e = [].slice.call(A)
			}
			return e
		}

		function n() {
			if (null === document.head.querySelector("style.anchorjs")) {
				var A, e = document.createElement("style"),
					t = " .anchorjs-link {   opacity: 0;   text-decoration: none;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; }",
					n = " *:hover > .anchorjs-link, .anchorjs-link:focus  {   opacity: 1; }",
					i = ' @font-face {   font-family: "anchorjs-icons";   src: url(data:n/a;base64,AAEAAAALAIAAAwAwT1MvMg8yG2cAAAE4AAAAYGNtYXDp3gC3AAABpAAAAExnYXNwAAAAEAAAA9wAAAAIZ2x5ZlQCcfwAAAH4AAABCGhlYWQHFvHyAAAAvAAAADZoaGVhBnACFwAAAPQAAAAkaG10eASAADEAAAGYAAAADGxvY2EACACEAAAB8AAAAAhtYXhwAAYAVwAAARgAAAAgbmFtZQGOH9cAAAMAAAAAunBvc3QAAwAAAAADvAAAACAAAQAAAAEAAHzE2p9fDzz1AAkEAAAAAADRecUWAAAAANQA6R8AAAAAAoACwAAAAAgAAgAAAAAAAAABAAADwP/AAAACgAAA/9MCrQABAAAAAAAAAAAAAAAAAAAAAwABAAAAAwBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAMCQAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAg//0DwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAAIAAAACgAAxAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADAAAAAIAAgAAgAAACDpy//9//8AAAAg6cv//f///+EWNwADAAEAAAAAAAAAAAAAAAAACACEAAEAAAAAAAAAAAAAAAAxAAACAAQARAKAAsAAKwBUAAABIiYnJjQ3NzY2MzIWFxYUBwcGIicmNDc3NjQnJiYjIgYHBwYUFxYUBwYGIwciJicmNDc3NjIXFhQHBwYUFxYWMzI2Nzc2NCcmNDc2MhcWFAcHBgYjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAAADACWAAEAAAAAAAEACAAAAAEAAAAAAAIAAwAIAAEAAAAAAAMACAAAAAEAAAAAAAQACAAAAAEAAAAAAAUAAQALAAEAAAAAAAYACAAAAAMAAQQJAAEAEAAMAAMAAQQJAAIABgAcAAMAAQQJAAMAEAAMAAMAAQQJAAQAEAAMAAMAAQQJAAUAAgAiAAMAAQQJAAYAEAAMYW5jaG9yanM0MDBAAGEAbgBjAGgAbwByAGoAcwA0ADAAMABAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAP) format("truetype"); }',
					o = " [data-anchorjs-icon]::after {   content: attr(data-anchorjs-icon); }";
				e.className = "anchorjs", e.appendChild(document.createTextNode("")), A = document.head.querySelector('[rel="stylesheet"], style'), void 0 === A ? document.head.appendChild(e) : document.head.insertBefore(e, A), e.sheet.insertRule(t, e.sheet.cssRules.length), e.sheet.insertRule(n, e.sheet.cssRules.length), e.sheet.insertRule(o, e.sheet.cssRules.length), e.sheet.insertRule(i, e.sheet.cssRules.length)
			}
		}
		this.options = A || {}, this.elements = [], e(this.options), this.isTouchDevice = function() {
			return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
		}, this.add = function(A) {
			var i, o, s, c, r, a, h, l, u, d, f, p, w = [];
			if (e(this.options), p = this.options.visible, "touch" === p && (p = this.isTouchDevice() ? "always" : "hover"), A || (A = "h1, h2, h3, h4, h5, h6"), i = t(A), 0 === i.length) return !1;
			for (n(), o = document.querySelectorAll("[id]"), s = [].map.call(o, function(A) {
					return A.id
				}), r = 0; r < i.length; r++)
				if (this.hasAnchorJSLink(i[r])) w.push(r);
				else {
					if (i[r].hasAttribute("id")) c = i[r].getAttribute("id");
					else {
						l = this.urlify(i[r].textContent), u = l, h = 0;
						do void 0 !== a && (u = l + "-" + h), a = s.indexOf(u), h += 1; while (-1 !== a);
						a = void 0, s.push(u), i[r].setAttribute("id", u), c = u
					}
					d = c.replace(/-/g, " "), f = document.createElement("a"), f.className = "anchorjs-link " + this.options.class, f.href = "#" + c, f.setAttribute("aria-label", "Anchor link for: " + d), f.setAttribute("data-anchorjs-icon", this.options.icon), "always" === p && (f.style.opacity = "1"), "" === this.options.icon && (f.style.font = "1em/1 anchorjs-icons", "left" === this.options.placement && (f.style.lineHeight = "inherit")), "left" === this.options.placement ? (f.style.position = "absolute", f.style.marginLeft = "-1em", f.style.paddingRight = "0.5em", i[r].insertBefore(f, i[r].firstChild)) : (f.style.paddingLeft = "0.375em", i[r].appendChild(f))
				} for (r = 0; r < w.length; r++) i.splice(w[r] - r, 1);
			return this.elements = this.elements.concat(i), this
		}, this.remove = function(A) {
			for (var e, n, i = t(A), o = 0; o < i.length; o++) n = i[o].querySelector(".anchorjs-link"), n && (e = this.elements.indexOf(i[o]), -1 !== e && this.elements.splice(e, 1), i[o].removeChild(n));
			return this
		}, this.removeAll = function() {
			this.remove(this.elements)
		}, this.urlify = function(A) {
			var t, n = /[& +$,:;=?@"#{}|^~[`%!'\]\.\/\(\)\*\\]/g;
			return this.options.truncate || e(this.options), t = A.trim().replace(/\'/gi, "").replace(n, "-").replace(/-{2,}/g, "-").substring(0, this.options.truncate).replace(/^-+|-+$/gm, "").toLowerCase()
		}, this.hasAnchorJSLink = function(A) {
			var e = A.firstChild && (" " + A.firstChild.className + " ").indexOf(" anchorjs-link ") > -1,
				t = A.lastChild && (" " + A.lastChild.className + " ").indexOf(" anchorjs-link ") > -1;
			return e || t || !1
		}
	}
	return A
});
