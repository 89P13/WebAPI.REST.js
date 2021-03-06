﻿// 
// superagent.js
// https://visionmedia.github.io/superagent/
// https://github.com/visionmedia/superagent
//
!function (t) { if ("object" == typeof exports && "undefined" != typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else { var e; "undefined" != typeof window ? e = window : "undefined" != typeof global ? e = global : "undefined" != typeof self && (e = self), e.superagent = t() } }(function () { return function t(e, r, n) { function i(o, a) { if (!r[o]) { if (!e[o]) { var u = "function" == typeof require && require; if (!a && u) return u(o, !0); if (s) return s(o, !0); var h = new Error("Cannot find module '" + o + "'"); throw h.code = "MODULE_NOT_FOUND", h } var c = r[o] = { exports: {} }; e[o][0].call(c.exports, function (t) { var r = e[o][1][t]; return i(r ? r : t) }, c, c.exports, t, e, r, n) } return r[o].exports } for (var s = "function" == typeof require && require, o = 0; o < n.length; o++) i(n[o]); return i }({ 1: [function (t, e, r) { function n(t) { return null != t && "object" == typeof t } e.exports = n }, {}], 2: [function (t, e, r) { function n() { } function i(t) { var e = {}.toString.call(t); switch (e) { case "[object File]": case "[object Blob]": case "[object FormData]": return !0; default: return !1 } } function s(t) { if (!w(t)) return t; var e = []; for (var r in t) null != t[r] && o(e, r, t[r]); return e.join("&") } function o(t, e, r) { return Array.isArray(r) ? r.forEach(function (r) { o(t, e, r) }) : void t.push(encodeURIComponent(e) + "=" + encodeURIComponent(r)) } function a(t) { for (var e, r, n = {}, i = t.split("&"), s = 0, o = i.length; o > s; ++s) r = i[s], e = r.split("="), n[decodeURIComponent(e[0])] = decodeURIComponent(e[1]); return n } function u(t) { var e, r, n, i, s = t.split(/\r?\n/), o = {}; s.pop(); for (var a = 0, u = s.length; u > a; ++a) r = s[a], e = r.indexOf(":"), n = r.slice(0, e).toLowerCase(), i = x(r.slice(e + 1)), o[n] = i; return o } function h(t) { return /[\/+]json\b/.test(t) } function c(t) { return t.split(/ *; */).shift() } function p(t) { return b(t.split(/ *; */), function (t, e) { var r = e.split(/ *= */), n = r.shift(), i = r.shift(); return n && i && (t[n] = i), t }, {}) } function l(t, e) { e = e || {}, this.req = t, this.xhr = this.req.xhr, this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || "undefined" == typeof this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText, this.setStatusProperties(this.xhr.status), this.header = this.headers = u(this.xhr.getAllResponseHeaders()), this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this.setHeaderProperties(this.header), this.body = "HEAD" != this.req.method ? this.parseBody(this.text ? this.text : this.xhr.response) : null } function f(t, e) { var r = this; this._query = this._query || [], this.method = t, this.url = e, this.header = {}, this._header = {}, this.on("end", function () { var t = null, e = null; try { e = new l(r) } catch (n) { return t = new Error("Parser is unable to parse the response"), t.parse = !0, t.original = n, t.rawResponse = r.xhr && r.xhr.responseText ? r.xhr.responseText : null, t.statusCode = r.xhr && r.xhr.status ? r.xhr.status : null, r.callback(t) } if (r.emit("response", e), t) return r.callback(t, e); if (e.status >= 200 && e.status < 300) return r.callback(t, e); var i = new Error(e.statusText || "Unsuccessful HTTP response"); i.original = t, i.response = e, i.status = e.status, r.callback(i, e) }) } function d(t, e) { var r = _("DELETE", t); return e && r.end(e), r } var y, m = t("emitter"), b = t("reduce"), v = t("./request-base"), w = t("./is-object"); y = "undefined" != typeof window ? window : "undefined" != typeof self ? self : this; var _ = e.exports = t("./request").bind(null, f); _.getXHR = function () { if (!(!y.XMLHttpRequest || y.location && "file:" == y.location.protocol && y.ActiveXObject)) return new XMLHttpRequest; try { return new ActiveXObject("Microsoft.XMLHTTP") } catch (t) { } try { return new ActiveXObject("Msxml2.XMLHTTP.6.0") } catch (t) { } try { return new ActiveXObject("Msxml2.XMLHTTP.3.0") } catch (t) { } try { return new ActiveXObject("Msxml2.XMLHTTP") } catch (t) { } return !1 }; var x = "".trim ? function (t) { return t.trim() } : function (t) { return t.replace(/(^\s*|\s*$)/g, "") }; _.serializeObject = s, _.parseString = a, _.types = { html: "text/html", json: "application/json", xml: "application/xml", urlencoded: "application/x-www-form-urlencoded", form: "application/x-www-form-urlencoded", "form-data": "application/x-www-form-urlencoded" }, _.serialize = { "application/x-www-form-urlencoded": s, "application/json": JSON.stringify }, _.parse = { "application/x-www-form-urlencoded": a, "application/json": JSON.parse }, l.prototype.get = function (t) { return this.header[t.toLowerCase()] }, l.prototype.setHeaderProperties = function (t) { var e = this.header["content-type"] || ""; this.type = c(e); var r = p(e); for (var n in r) this[n] = r[n] }, l.prototype.parseBody = function (t) { var e = _.parse[this.type]; return !e && h(this.type) && (e = _.parse["application/json"]), e && t && (t.length || t instanceof Object) ? e(t) : null }, l.prototype.setStatusProperties = function (t) { 1223 === t && (t = 204); var e = t / 100 | 0; this.status = this.statusCode = t, this.statusType = e, this.info = 1 == e, this.ok = 2 == e, this.clientError = 4 == e, this.serverError = 5 == e, this.error = 4 == e || 5 == e ? this.toError() : !1, this.accepted = 202 == t, this.noContent = 204 == t, this.badRequest = 400 == t, this.unauthorized = 401 == t, this.notAcceptable = 406 == t, this.notFound = 404 == t, this.forbidden = 403 == t }, l.prototype.toError = function () { var t = this.req, e = t.method, r = t.url, n = "cannot " + e + " " + r + " (" + this.status + ")", i = new Error(n); return i.status = this.status, i.method = e, i.url = r, i }, _.Response = l, m(f.prototype); for (var g in v) f.prototype[g] = v[g]; f.prototype.abort = function () { return this.aborted ? void 0 : (this.aborted = !0, this.xhr.abort(), this.clearTimeout(), this.emit("abort"), this) }, f.prototype.type = function (t) { return this.set("Content-Type", _.types[t] || t), this }, f.prototype.responseType = function (t) { return this._responseType = t, this }, f.prototype.accept = function (t) { return this.set("Accept", _.types[t] || t), this }, f.prototype.auth = function (t, e, r) { switch (r || (r = { type: "basic" }), r.type) { case "basic": var n = btoa(t + ":" + e); this.set("Authorization", "Basic " + n); break; case "auto": this.username = t, this.password = e } return this }, f.prototype.query = function (t) { return "string" != typeof t && (t = s(t)), t && this._query.push(t), this }, f.prototype.attach = function (t, e, r) { return this._getFormData().append(t, e, r || e.name), this }, f.prototype._getFormData = function () { return this._formData || (this._formData = new y.FormData), this._formData }, f.prototype.send = function (t) { var e = w(t), r = this._header["content-type"]; if (e && w(this._data)) for (var n in t) this._data[n] = t[n]; else "string" == typeof t ? (r || this.type("form"), r = this._header["content-type"], "application/x-www-form-urlencoded" == r ? this._data = this._data ? this._data + "&" + t : t : this._data = (this._data || "") + t) : this._data = t; return !e || i(t) ? this : (r || this.type("json"), this) }, l.prototype.parse = function (t) { return y.console && console.warn("Client-side parse() method has been renamed to serialize(). This method is not compatible with superagent v2.0"), this.serialize(t), this }, l.prototype.serialize = function (t) { return this._parser = t, this }, f.prototype.callback = function (t, e) { var r = this._callback; this.clearTimeout(), r(t, e) }, f.prototype.crossDomainError = function () { var t = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc."); t.crossDomain = !0, t.status = this.status, t.method = this.method, t.url = this.url, this.callback(t) }, f.prototype.timeoutError = function () { var t = this._timeout, e = new Error("timeout of " + t + "ms exceeded"); e.timeout = t, this.callback(e) }, f.prototype.withCredentials = function () { return this._withCredentials = !0, this }, f.prototype.end = function (t) { var e = this, r = this.xhr = _.getXHR(), s = this._query.join("&"), o = this._timeout, a = this._formData || this._data; this._callback = t || n, r.onreadystatechange = function () { if (4 == r.readyState) { var t; try { t = r.status } catch (n) { t = 0 } if (0 == t) { if (e.timedout) return e.timeoutError(); if (e.aborted) return; return e.crossDomainError() } e.emit("end") } }; var u = function (t) { t.total > 0 && (t.percent = t.loaded / t.total * 100), t.direction = "download", e.emit("progress", t) }; this.hasListeners("progress") && (r.onprogress = u); try { r.upload && this.hasListeners("progress") && (r.upload.onprogress = u) } catch (c) { } if (o && !this._timer && (this._timer = setTimeout(function () { e.timedout = !0, e.abort() }, o)), s && (s = _.serializeObject(s), this.url += ~this.url.indexOf("?") ? "&" + s : "?" + s), this.username && this.password ? r.open(this.method, this.url, !0, this.username, this.password) : r.open(this.method, this.url, !0), this._withCredentials && (r.withCredentials = !0), "GET" != this.method && "HEAD" != this.method && "string" != typeof a && !i(a)) { var p = this._header["content-type"], l = this._parser || _.serialize[p ? p.split(";")[0] : ""]; !l && h(p) && (l = _.serialize["application/json"]), l && (a = l(a)) } for (var f in this.header) null != this.header[f] && r.setRequestHeader(f, this.header[f]); return this._responseType && (r.responseType = this._responseType), this.emit("request", this), r.send("undefined" != typeof a ? a : null), this }, _.Request = f, _.get = function (t, e, r) { var n = _("GET", t); return "function" == typeof e && (r = e, e = null), e && n.query(e), r && n.end(r), n }, _.head = function (t, e, r) { var n = _("HEAD", t); return "function" == typeof e && (r = e, e = null), e && n.send(e), r && n.end(r), n }, _.del = d, _["delete"] = d, _.patch = function (t, e, r) { var n = _("PATCH", t); return "function" == typeof e && (r = e, e = null), e && n.send(e), r && n.end(r), n }, _.post = function (t, e, r) { var n = _("POST", t); return "function" == typeof e && (r = e, e = null), e && n.send(e), r && n.end(r), n }, _.put = function (t, e, r) { var n = _("PUT", t); return "function" == typeof e && (r = e, e = null), e && n.send(e), r && n.end(r), n } }, { "./is-object": 1, "./request": 4, "./request-base": 3, emitter: 5, reduce: 6 }], 3: [function (t, e, r) { var n = t("./is-object"); r.clearTimeout = function () { return this._timeout = 0, clearTimeout(this._timer), this }, r.parse = function (t) { return this._parser = t, this }, r.timeout = function (t) { return this._timeout = t, this }, r.then = function (t, e) { return this.end(function (r, n) { r ? e(r) : t(n) }) }, r.use = function (t) { return t(this), this }, r.get = function (t) { return this._header[t.toLowerCase()] }, r.getHeader = r.get, r.set = function (t, e) { if (n(t)) { for (var r in t) this.set(r, t[r]); return this } return this._header[t.toLowerCase()] = e, this.header[t] = e, this }, r.unset = function (t) { return delete this._header[t.toLowerCase()], delete this.header[t], this }, r.field = function (t, e) { return this._getFormData().append(t, e), this } }, { "./is-object": 1 }], 4: [function (t, e, r) { function n(t, e, r) { return "function" == typeof r ? new t("GET", e).end(r) : 2 == arguments.length ? new t("GET", e) : new t(e, r) } e.exports = n }, {}], 5: [function (t, e, r) { function n(t) { return t ? i(t) : void 0 } function i(t) { for (var e in n.prototype) t[e] = n.prototype[e]; return t } "undefined" != typeof e && (e.exports = n), n.prototype.on = n.prototype.addEventListener = function (t, e) { return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this }, n.prototype.once = function (t, e) { function r() { this.off(t, r), e.apply(this, arguments) } return r.fn = e, this.on(t, r), this }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function (t, e) { if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this; var r = this._callbacks["$" + t]; if (!r) return this; if (1 == arguments.length) return delete this._callbacks["$" + t], this; for (var n, i = 0; i < r.length; i++) if (n = r[i], n === e || n.fn === e) { r.splice(i, 1); break } return this }, n.prototype.emit = function (t) { this._callbacks = this._callbacks || {}; var e = [].slice.call(arguments, 1), r = this._callbacks["$" + t]; if (r) { r = r.slice(0); for (var n = 0, i = r.length; i > n; ++n) r[n].apply(this, e) } return this }, n.prototype.listeners = function (t) { return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [] }, n.prototype.hasListeners = function (t) { return !!this.listeners(t).length } }, {}], 6: [function (t, e, r) { e.exports = function (t, e, r) { for (var n = 0, i = t.length, s = 3 == arguments.length ? r : t[n++]; i > n;) s = e.call(null, s, t[n], ++n, t); return s } }, {}] }, {}, [2])(2) });

// 
// q.js
//https://github.com/kriskowal/q
//
!function (t) { "use strict"; if ("function" == typeof bootstrap) bootstrap("promise", t); else if ("object" == typeof exports && "object" == typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define(t); else if ("undefined" != typeof ses) { if (!ses.ok()) return; ses.makeQ = t } else { if ("undefined" == typeof window && "undefined" == typeof self) throw new Error("This environment was not anticipated by Q. Please file a bug."); var n = "undefined" != typeof window ? window : self, e = n.Q; n.Q = t(), n.Q.noConflict = function () { return n.Q = e, this } } }(function () { "use strict"; function t(t) { return function () { return K.apply(t, arguments) } } function n(t) { return t === Object(t) } function e(t) { return "[object StopIteration]" === en(t) || t instanceof _ } function r(t, n) { if (V && n.stack && "object" == typeof t && null !== t && t.stack && -1 === t.stack.indexOf(rn)) { for (var e = [], r = n; r; r = r.source) r.stack && e.unshift(r.stack); e.unshift(t.stack); var i = e.join("\n" + rn + "\n"); t.stack = o(i) } } function o(t) { for (var n = t.split("\n"), e = [], r = 0; r < n.length; ++r) { var o = n[r]; c(o) || i(o) || !o || e.push(o) } return e.join("\n") } function i(t) { return -1 !== t.indexOf("(module.js:") || -1 !== t.indexOf("(node.js:") } function u(t) { var n = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t); if (n) return [n[1], Number(n[2])]; var e = /at ([^ ]+):(\d+):(?:\d+)$/.exec(t); if (e) return [e[1], Number(e[2])]; var r = /.*@(.+):(\d+)$/.exec(t); return r ? [r[1], Number(r[2])] : void 0 } function c(t) { var n = u(t); if (!n) return !1; var e = n[0], r = n[1]; return e === H && r >= q && fn >= r } function s() { if (V) try { throw new Error } catch (t) { var n = t.stack.split("\n"), e = n[0].indexOf("@") > 0 ? n[1] : n[2], r = u(e); if (!r) return; return H = r[0], r[1] } } function f(t, n, e) { return function () { return "undefined" != typeof console && "function" == typeof console.warn && console.warn(n + " is deprecated, use " + e + " instead.", new Error("").stack), t.apply(t, arguments) } } function p(t) { return t instanceof h ? t : g(t) ? O(t) : E(t) } function a() { function t(t) { n = t, i.source = t, W(e, function (n, e) { p.nextTick(function () { t.promiseDispatch.apply(t, e) }) }, void 0), e = void 0, r = void 0 } var n, e = [], r = [], o = Z(a.prototype), i = Z(h.prototype); if (i.promiseDispatch = function (t, o, i) { var u = L(arguments); e ? (e.push(u), "when" === o && i[1] && r.push(i[1])) : p.nextTick(function () { n.promiseDispatch.apply(n, u) }) }, i.valueOf = function () { if (e) return i; var t = v(n); return m(t) && (n = t), t }, i.inspect = function () { return n ? n.inspect() : { state: "pending" } }, p.longStackSupport && V) try { throw new Error } catch (u) { i.stack = u.stack.substring(u.stack.indexOf("\n") + 1) } return o.promise = i, o.resolve = function (e) { n || t(p(e)) }, o.fulfill = function (e) { n || t(E(e)) }, o.reject = function (e) { n || t(R(e)) }, o.notify = function (t) { n || W(r, function (n, e) { p.nextTick(function () { e(t) }) }, void 0) }, o } function l(t) { if ("function" != typeof t) throw new TypeError("resolver must be a function."); var n = a(); try { t(n.resolve, n.reject, n.notify) } catch (e) { n.reject(e) } return n.promise } function d(t) { return l(function (n, e) { for (var r = 0, o = t.length; o > r; r++) p(t[r]).then(n, e) }) } function h(t, n, e) { void 0 === n && (n = function (t) { return R(new Error("Promise does not support operation: " + t)) }), void 0 === e && (e = function () { return { state: "unknown" } }); var r = Z(h.prototype); if (r.promiseDispatch = function (e, o, i) { var u; try { u = t[o] ? t[o].apply(r, i) : n.call(r, o, i) } catch (c) { u = R(c) } e && e(u) }, r.inspect = e, e) { var o = e(); "rejected" === o.state && (r.exception = o.reason), r.valueOf = function () { var t = e(); return "pending" === t.state || "rejected" === t.state ? r : t.value } } return r } function y(t, n, e, r) { return p(t).then(n, e, r) } function v(t) { if (m(t)) { var n = t.inspect(); if ("fulfilled" === n.state) return n.value } return t } function m(t) { return t instanceof h } function g(t) { return n(t) && "function" == typeof t.then } function k(t) { return m(t) && "pending" === t.inspect().state } function j(t) { return !m(t) || "fulfilled" === t.inspect().state } function w(t) { return m(t) && "rejected" === t.inspect().state } function b() { on.length = 0, un.length = 0, sn || (sn = !0) } function x(t, n) { sn && ("object" == typeof process && "function" == typeof process.emit && p.nextTick.runAfter(function () { -1 !== X(un, t) && (process.emit("unhandledRejection", n, t), cn.push(t)) }), un.push(t), on.push(n && "undefined" != typeof n.stack ? n.stack : "(no stack) " + n)) } function T(t) { if (sn) { var n = X(un, t); -1 !== n && ("object" == typeof process && "function" == typeof process.emit && p.nextTick.runAfter(function () { var e = X(cn, t); -1 !== e && (process.emit("rejectionHandled", on[n], t), cn.splice(e, 1)) }), un.splice(n, 1), on.splice(n, 1)) } } function R(t) { var n = h({ when: function (n) { return n && T(this), n ? n(t) : this } }, function () { return this }, function () { return { state: "rejected", reason: t } }); return x(n, t), n } function E(t) { return h({ when: function () { return t }, get: function (n) { return t[n] }, set: function (n, e) { t[n] = e }, "delete": function (n) { delete t[n] }, post: function (n, e) { return null === n || void 0 === n ? t.apply(void 0, e) : t[n].apply(t, e) }, apply: function (n, e) { return t.apply(n, e) }, keys: function () { return nn(t) } }, void 0, function () { return { state: "fulfilled", value: t } }) } function O(t) { var n = a(); return p.nextTick(function () { try { t.then(n.resolve, n.reject, n.notify) } catch (e) { n.reject(e) } }), n.promise } function S(t) { return h({ isDef: function () { } }, function (n, e) { return A(t, n, e) }, function () { return p(t).inspect() }) } function N(t, n, e) { return p(t).spread(n, e) } function D(t) { return function () { function n(t, n) { var u; if ("undefined" == typeof StopIteration) { try { u = r[t](n) } catch (c) { return R(c) } return u.done ? p(u.value) : y(u.value, o, i) } try { u = r[t](n) } catch (c) { return e(c) ? p(c.value) : R(c) } return y(u, o, i) } var r = t.apply(this, arguments), o = n.bind(n, "next"), i = n.bind(n, "throw"); return o() } } function P(t) { p.done(p.async(t)()) } function C(t) { throw new _(t) } function Q(t) { return function () { return N([this, I(arguments)], function (n, e) { return t.apply(n, e) }) } } function A(t, n, e) { return p(t).dispatch(n, e) } function I(t) { return y(t, function (t) { var n = 0, e = a(); return W(t, function (r, o, i) { var u; m(o) && "fulfilled" === (u = o.inspect()).state ? t[i] = u.value : (++n, y(o, function (r) { t[i] = r, 0 === --n && e.resolve(t) }, e.reject, function (t) { e.notify({ index: i, value: t }) })) }, void 0), 0 === n && e.resolve(t), e.promise }) } function U(t) { if (0 === t.length) return p.resolve(); var n = p.defer(), e = 0; return W(t, function (r, o, i) { function u(t) { n.resolve(t) } function c() { e--, 0 === e && n.reject(new Error("Can't get fulfillment value from any promise, all promises were rejected.")) } function s(t) { n.notify({ index: i, value: t }) } var f = t[i]; e++, y(f, u, c, s) }, void 0), n.promise } function F(t) { return y(t, function (t) { return t = Y(t, p), y(I(Y(t, function (t) { return y(t, z, z) })), function () { return t }) }) } function M(t) { return p(t).allSettled() } function B(t, n) { return p(t).then(void 0, void 0, n) } function $(t, n) { return p(t).nodeify(n) } var V = !1; try { throw new Error } catch (G) { V = !!G.stack } var H, _, q = s(), z = function () { }, J = function () { function t() { for (var t, r; e.next;) e = e.next, t = e.task, e.task = void 0, r = e.domain, r && (e.domain = void 0, r.enter()), n(t, r); for (; c.length;) t = c.pop(), n(t); o = !1 } function n(n, e) { try { n() } catch (r) { if (u) throw e && e.exit(), setTimeout(t, 0), e && e.enter(), r; setTimeout(function () { throw r }, 0) } e && e.exit() } var e = { task: void 0, next: null }, r = e, o = !1, i = void 0, u = !1, c = []; if (J = function (t) { r = r.next = { task: t, domain: u && process.domain, next: null }, o || (o = !0, i()) }, "object" == typeof process && "[object process]" === process.toString() && process.nextTick) u = !0, i = function () { process.nextTick(t) }; else if ("function" == typeof setImmediate) i = "undefined" != typeof window ? setImmediate.bind(window, t) : function () { setImmediate(t) }; else if ("undefined" != typeof MessageChannel) { var s = new MessageChannel; s.port1.onmessage = function () { i = f, s.port1.onmessage = t, t() }; var f = function () { s.port2.postMessage(0) }; i = function () { setTimeout(t, 0), f() } } else i = function () { setTimeout(t, 0) }; return J.runAfter = function (t) { c.push(t), o || (o = !0, i()) }, J }(), K = Function.call, L = t(Array.prototype.slice), W = t(Array.prototype.reduce || function (t, n) { var e = 0, r = this.length; if (1 === arguments.length) for (; ;) { if (e in this) { n = this[e++]; break } if (++e >= r) throw new TypeError } for (; r > e; e++) e in this && (n = t(n, this[e], e)); return n }), X = t(Array.prototype.indexOf || function (t) { for (var n = 0; n < this.length; n++) if (this[n] === t) return n; return -1 }), Y = t(Array.prototype.map || function (t, n) { var e = this, r = []; return W(e, function (o, i, u) { r.push(t.call(n, i, u, e)) }, void 0), r }), Z = Object.create || function (t) { function n() { } return n.prototype = t, new n }, tn = t(Object.prototype.hasOwnProperty), nn = Object.keys || function (t) { var n = []; for (var e in t) tn(t, e) && n.push(e); return n }, en = t(Object.prototype.toString); _ = "undefined" != typeof ReturnValue ? ReturnValue : function (t) { this.value = t }; var rn = "From previous event:"; p.resolve = p, p.nextTick = J, p.longStackSupport = !1, "object" == typeof process && process && process.env && process.env.Q_DEBUG && (p.longStackSupport = !0), p.defer = a, a.prototype.makeNodeResolver = function () { var t = this; return function (n, e) { n ? t.reject(n) : t.resolve(arguments.length > 2 ? L(arguments, 1) : e) } }, p.Promise = l, p.promise = l, l.race = d, l.all = I, l.reject = R, l.resolve = p, p.passByCopy = function (t) { return t }, h.prototype.passByCopy = function () { return this }, p.join = function (t, n) { return p(t).join(n) }, h.prototype.join = function (t) { return p([this, t]).spread(function (t, n) { if (t === n) return t; throw new Error("Can't join: not the same: " + t + " " + n) }) }, p.race = d, h.prototype.race = function () { return this.then(p.race) }, p.makePromise = h, h.prototype.toString = function () { return "[object Promise]" }, h.prototype.then = function (t, n, e) { function o(n) { try { return "function" == typeof t ? t(n) : n } catch (e) { return R(e) } } function i(t) { if ("function" == typeof n) { r(t, c); try { return n(t) } catch (e) { return R(e) } } return R(t) } function u(t) { return "function" == typeof e ? e(t) : t } var c = this, s = a(), f = !1; return p.nextTick(function () { c.promiseDispatch(function (t) { f || (f = !0, s.resolve(o(t))) }, "when", [function (t) { f || (f = !0, s.resolve(i(t))) }]) }), c.promiseDispatch(void 0, "when", [void 0, function (t) { var n, e = !1; try { n = u(t) } catch (r) { if (e = !0, !p.onerror) throw r; p.onerror(r) } e || s.notify(n) }]), s.promise }, p.tap = function (t, n) { return p(t).tap(n) }, h.prototype.tap = function (t) { return t = p(t), this.then(function (n) { return t.fcall(n).thenResolve(n) }) }, p.when = y, h.prototype.thenResolve = function (t) { return this.then(function () { return t }) }, p.thenResolve = function (t, n) { return p(t).thenResolve(n) }, h.prototype.thenReject = function (t) { return this.then(function () { throw t }) }, p.thenReject = function (t, n) { return p(t).thenReject(n) }, p.nearer = v, p.isPromise = m, p.isPromiseAlike = g, p.isPending = k, h.prototype.isPending = function () { return "pending" === this.inspect().state }, p.isFulfilled = j, h.prototype.isFulfilled = function () { return "fulfilled" === this.inspect().state }, p.isRejected = w, h.prototype.isRejected = function () { return "rejected" === this.inspect().state }; var on = [], un = [], cn = [], sn = !0; p.resetUnhandledRejections = b, p.getUnhandledReasons = function () { return on.slice() }, p.stopUnhandledRejectionTracking = function () { b(), sn = !1 }, b(), p.reject = R, p.fulfill = E, p.master = S, p.spread = N, h.prototype.spread = function (t, n) { return this.all().then(function (n) { return t.apply(void 0, n) }, n) }, p.async = D, p.spawn = P, p["return"] = C, p.promised = Q, p.dispatch = A, h.prototype.dispatch = function (t, n) { var e = this, r = a(); return p.nextTick(function () { e.promiseDispatch(r.resolve, t, n) }), r.promise }, p.get = function (t, n) { return p(t).dispatch("get", [n]) }, h.prototype.get = function (t) { return this.dispatch("get", [t]) }, p.set = function (t, n, e) { return p(t).dispatch("set", [n, e]) }, h.prototype.set = function (t, n) { return this.dispatch("set", [t, n]) }, p.del = p["delete"] = function (t, n) { return p(t).dispatch("delete", [n]) }, h.prototype.del = h.prototype["delete"] = function (t) { return this.dispatch("delete", [t]) }, p.mapply = p.post = function (t, n, e) { return p(t).dispatch("post", [n, e]) }, h.prototype.mapply = h.prototype.post = function (t, n) { return this.dispatch("post", [t, n]) }, p.send = p.mcall = p.invoke = function (t, n) { return p(t).dispatch("post", [n, L(arguments, 2)]) }, h.prototype.send = h.prototype.mcall = h.prototype.invoke = function (t) { return this.dispatch("post", [t, L(arguments, 1)]) }, p.fapply = function (t, n) { return p(t).dispatch("apply", [void 0, n]) }, h.prototype.fapply = function (t) { return this.dispatch("apply", [void 0, t]) }, p["try"] = p.fcall = function (t) { return p(t).dispatch("apply", [void 0, L(arguments, 1)]) }, h.prototype.fcall = function () { return this.dispatch("apply", [void 0, L(arguments)]) }, p.fbind = function (t) { var n = p(t), e = L(arguments, 1); return function () { return n.dispatch("apply", [this, e.concat(L(arguments))]) } }, h.prototype.fbind = function () { var t = this, n = L(arguments); return function () { return t.dispatch("apply", [this, n.concat(L(arguments))]) } }, p.keys = function (t) { return p(t).dispatch("keys", []) }, h.prototype.keys = function () { return this.dispatch("keys", []) }, p.all = I, h.prototype.all = function () { return I(this) }, p.any = U, h.prototype.any = function () { return U(this) }, p.allResolved = f(F, "allResolved", "allSettled"), h.prototype.allResolved = function () { return F(this) }, p.allSettled = M, h.prototype.allSettled = function () { return this.then(function (t) { return I(Y(t, function (t) { function n() { return t.inspect() } return t = p(t), t.then(n, n) })) }) }, p.fail = p["catch"] = function (t, n) { return p(t).then(void 0, n) }, h.prototype.fail = h.prototype["catch"] = function (t) { return this.then(void 0, t) }, p.progress = B, h.prototype.progress = function (t) { return this.then(void 0, void 0, t) }, p.fin = p["finally"] = function (t, n) { return p(t)["finally"](n) }, h.prototype.fin = h.prototype["finally"] = function (t) { return t = p(t), this.then(function (n) { return t.fcall().then(function () { return n }) }, function (n) { return t.fcall().then(function () { throw n }) }) }, p.done = function (t, n, e, r) { return p(t).done(n, e, r) }, h.prototype.done = function (t, n, e) { var o = function (t) { p.nextTick(function () { if (r(t, i), !p.onerror) throw t; p.onerror(t) }) }, i = t || n || e ? this.then(t, n, e) : this; "object" == typeof process && process && process.domain && (o = process.domain.bind(o)), i.then(void 0, o) }, p.timeout = function (t, n, e) { return p(t).timeout(n, e) }, h.prototype.timeout = function (t, n) { var e = a(), r = setTimeout(function () { n && "string" != typeof n || (n = new Error(n || "Timed out after " + t + " ms"), n.code = "ETIMEDOUT"), e.reject(n) }, t); return this.then(function (t) { clearTimeout(r), e.resolve(t) }, function (t) { clearTimeout(r), e.reject(t) }, e.notify), e.promise }, p.delay = function (t, n) { return void 0 === n && (n = t, t = void 0), p(t).delay(n) }, h.prototype.delay = function (t) { return this.then(function (n) { var e = a(); return setTimeout(function () { e.resolve(n) }, t), e.promise }) }, p.nfapply = function (t, n) { return p(t).nfapply(n) }, h.prototype.nfapply = function (t) { var n = a(), e = L(t); return e.push(n.makeNodeResolver()), this.fapply(e).fail(n.reject), n.promise }, p.nfcall = function (t) { var n = L(arguments, 1); return p(t).nfapply(n) }, h.prototype.nfcall = function () { var t = L(arguments), n = a(); return t.push(n.makeNodeResolver()), this.fapply(t).fail(n.reject), n.promise }, p.nfbind = p.denodeify = function (t) { var n = L(arguments, 1); return function () { var e = n.concat(L(arguments)), r = a(); return e.push(r.makeNodeResolver()), p(t).fapply(e).fail(r.reject), r.promise } }, h.prototype.nfbind = h.prototype.denodeify = function () { var t = L(arguments); return t.unshift(this), p.denodeify.apply(void 0, t) }, p.nbind = function (t, n) { var e = L(arguments, 2); return function () { function r() { return t.apply(n, arguments) } var o = e.concat(L(arguments)), i = a(); return o.push(i.makeNodeResolver()), p(r).fapply(o).fail(i.reject), i.promise } }, h.prototype.nbind = function () { var t = L(arguments, 0); return t.unshift(this), p.nbind.apply(void 0, t) }, p.nmapply = p.npost = function (t, n, e) { return p(t).npost(n, e) }, h.prototype.nmapply = h.prototype.npost = function (t, n) { var e = L(n || []), r = a(); return e.push(r.makeNodeResolver()), this.dispatch("post", [t, e]).fail(r.reject), r.promise }, p.nsend = p.nmcall = p.ninvoke = function (t, n) { var e = L(arguments, 2), r = a(); return e.push(r.makeNodeResolver()), p(t).dispatch("post", [n, e]).fail(r.reject), r.promise }, h.prototype.nsend = h.prototype.nmcall = h.prototype.ninvoke = function (t) { var n = L(arguments, 1), e = a(); return n.push(e.makeNodeResolver()), this.dispatch("post", [t, n]).fail(e.reject), e.promise }, p.nodeify = $, h.prototype.nodeify = function (t) { return t ? void this.then(function (n) { p.nextTick(function () { t(null, n) }) }, function (n) { p.nextTick(function () { t(n) }) }) : this }, p.noConflict = function () { throw new Error("Q.noConflict only works when Q is used as a global") }; var fn = s(); return p });

// =========================================================================
// WebAPI.REST.js
//
// Library for Dynamics CRM Web API inspired by SDK.REST.js
// Can be used in both form scripts and web resources
// Uses superagent.js for requests and q.js for promises
// 
// Change _webAPIPath and _defaultHeaders as necessary for newer versions
//
// Web API reference: https://msdn.microsoft.com/en-us/library/mt593051.aspx
//
// Developed by Marius Solend, Acando
// =========================================================================

var webAPI = webAPI || {};
webAPI.REST = {
    _context: function () {
        if (typeof Xrm != "undefined") { // Form
            return Xrm.Page.context;
        }
        else if (typeof GetGlobalContext != 'undefined') { // Web resource
            return GetGlobalContext();
        }
        else {
            throw new Error('Context is not available.');
        }
    },
    _clientUrl: function () {
        return this._context().getClientUrl();
    },
    _webAPIPath: function () {
        return this._clientUrl() + "/api/data/v8.0/";
    },
    _defaultHeaders: function (extraHeaders) {
        var defaultHeaders = {
            "Accept": "application/json",
            "OData-Version": "4.0",
            "OData-MaxVersion": "4.0"
        };

        if (extraHeaders) {
            for (var att in extraHeaders) {
                defaultHeaders[att] = extraHeaders[att];
            }
        }

        return defaultHeaders;
    }
};

webAPI.REST.executeBoundAction = function (type, id, actionName, actionParameters, extraHeaders) {
    var deferred = Q.defer();

    id = id ? '(' + id + ')' : '';

    var url = this._webAPIPath() + type + id + '/' + 'Microsoft.Dynamics.CRM.' + actionName

    var request = superagent.post(url);

    var headers = this._defaultHeaders(extraHeaders)

    if (actionParameters) {
        data = JSON.stringify(actionParameters);
        headers["Content-Type"] = "application/json";
        request.send(data);
    }

    request.set(headers);

    request.end(function (err, res) {
        if (err) {
            deferred.reject(err);
        }
        else {
            deferred.resolve(res);
        }
    });

    return deferred.promise;
};

webAPI.REST.executeUnboundAction = function (actionName, actionParameters, extraHeaders) {

    var deferred = Q.defer();

    var url = this._webAPIPath() + actionName;

    var request = superagent.post(url);

    var headers = this._defaultHeaders(extraHeaders);

    if (actionParameters) {
        data = JSON.stringify(actionParameters);
        headers["Content-Type"] = "application/json";
        request.send(data);
    }

    request.set(headers);

    request.end(function (err, res) {
        if (err) {
            deferred.reject(err);
        }
        else {
            deferred.resolve(res);
        }
    });

    return deferred.promise;
};

webAPI.REST.executeBoundFunction = function (type, id, functionString, extraHeaders) {

    var deferred = Q.defer();

    id = id ? '(' + id + ')' : '';

    var url = this._webAPIPath() + type + id + '/' + 'Microsoft.Dynamics.CRM.' + functionString;

    var headers = this._defaultHeaders(extraHeaders);

    superagent.get(url).set(headers).end(function (err, res) {
        if (err) {
            deferred.reject(err);
        }
        else {
            deferred.resolve(res);
        }
    });

    return deferred.promise;
};

webAPI.REST.executeUnboundFunction = function (functionString, extraHeaders) {

    var deferred = Q.defer();

    var url = this._webAPIPath() + functionString

    var headers = this._defaultHeaders(extraHeaders);

    superagent.get(url).set(headers).end(function (err, res) {
        if (err) {
            deferred.reject(err);
        }
        else {
            deferred.resolve(res);
        }
    });

    return deferred.promise;
};

//
// It is also poosible to create related entities and associate entities in one CREATE-operation
// https://msdn.microsoft.com/en-us/library/gg328090.aspx#bkmk_CreateRelated
//
webAPI.REST.createEntity = function (type, entity, extraHeaders) {

    var deferred = Q.defer();

    var data = JSON.stringify(entity);

    var url = this._webAPIPath() + type;

    var headers = this._defaultHeaders(extraHeaders);

    headers["Content-Type"] = "application/json";

    superagent.post(url).set(headers).send(data).end(function (err, res) {
        if (err) {
            deferred.reject(err);
        }
        else {
            deferred.resolve(res);
        }
    });

    return deferred.promise;
};

webAPI.REST.deleteEntity = function (type, id, extraHeaders) {

    var deferred = Q.defer();

    var url = this._webAPIPath() + type + '(' + id + ')';

    var headers = this._defaultHeaders(extraHeaders);

    headers["Content-Type"] = "application/json";

    superagent.del(url).set(headers).end(function (err, res) {
        if (err) {
            deferred.reject(err);
        }
        else {
            deferred.resolve(res);
        }
    });

    return deferred.promise;
};

webAPI.REST.updateEntity = function (type, id, entity, extraHeaders) {

    var deferred = Q.defer();

    var data = JSON.stringify(entity);

    var url = this._webAPIPath() + type + '(' + id + ')';

    var headers = this._defaultHeaders(extraHeaders);

    headers["Content-Type"] = "application/json";

    superagent.patch(url).set(headers).send(data).end(function (err, res) {
        if (err) {
            deferred.reject(err);
        }
        else {
            deferred.resolve(res);
        }
    });

    return deferred.promise;
};

webAPI.REST.retrieveEntity = function (type, id, options, extraHeaders) {

    var deferred = Q.defer();

    var url = this._webAPIPath() + type + '(' + id + ')';

    url += options ? options : '';

    var headers = this._defaultHeaders(extraHeaders);

    superagent.get(url).set(headers).end(function (err, res) {
        if (err) {
            deferred.reject(err);
        }
        else {
            deferred.resolve(res);
        }
    });

    return deferred.promise;
};

webAPI.REST.retrieveMultiple = function (type, options, extraHeaders, _nextLink) {

    var deferred = Q.defer();

    var url = "";

    if (!_nextLink) {
        url = this._webAPIPath() + type;

        url += options ? options : '';
    }
    else {
        url = _nextLink;
    }

    var headers = this._defaultHeaders(extraHeaders);

    superagent.get(url).set(headers).end(function (err, res) {
        if (err) {
            deferred.reject(err);
        }
        else {
            if (res.body.hasOwnProperty("@odata.nextLink")) {
                webAPI.REST.retrieveMultiple(null, null, null, res.body["@odata.nextLink"]).then(function (innerRes) {
                    delete res.body["@odata.nextLink"];
                    res.body.value = res.body.value.concat(innerRes.body.value);
                    deferred.resolve(res);
                }).catch(function (innerErr) {
                    deferred.reject(err);
                });
            }
            else {
                deferred.resolve(res);
            }
        }
    });

    return deferred.promise;
};

webAPI.REST.executeFetchXml = function (type, fetchXml, extraHeaders) {
    var deferred = Q.defer();

    var url = this._webAPIPath() + type + "?fetchXml=" + fetchXml;

    var headers = this._defaultHeaders(extraHeaders);

    superagent.get(url).set(headers).end(function (err, res) {
        if (err) {
            deferred.reject(err);
        }
        else {
            deferred.resolve(res);
        }
    });

    return deferred.promise;
};

webAPI.REST.associateEntities = function (parentType, parentId, childType, childId, relationshipName) {

    var deferred = Q.defer();

    var url = this._webAPIPath() + parentType + '(' + parentId + ')/' + relationshipName + '/$ref';
    
    var data = {};
    data['@odata.id'] = this._webAPIPath() + childType + 's' + '(' + childId + ')';
    data = JSON.stringify(data);

    var headers = this._defaultHeaders({ "Content-Type": "application/json" })

    superagent.post(url).set(headers).send(data).end(function (err, res) {
        if (err) {
            deferred.reject(err);
        }
        else {
            deferred.resolve(res);
        }
    });

    return deferred.promise;
};

webAPI.REST.diassociateEntities = function (parentType, parentId, childId, relationshipName) {

    var deferred = Q.defer();

    var url = this._webAPIPath() + parentType + '(' + parentId + ')/' + relationshipName + '(' + childId + ')/$ref';

    var headers = this._defaultHeaders();

    superagent.del(url).set(headers).end(function (err, res) {
        if (err) {
            deferred.reject(err);
        }
        else {
            deferred.resolve(res);
        }
    });

    return deferred.promise;
};