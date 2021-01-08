webpackJsonp([6],{

/***/ 1010:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GoogleMap_vue__ = __webpack_require__(1200);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
     components: {
          GoogleMap: __WEBPACK_IMPORTED_MODULE_0__GoogleMap_vue__["a" /* default */]
     },
     data() {
          return {
               order: {
                    user: { name: '' },
                    quantity: null,
                    created_at: '',
                    total: null,
                    address: {
                         address: ''
                    },
                    items: []

               },
               loading: false,
               dataAdedd: false,
               errorMessage: false
          };
     },
     mounted() {
          this.loadAllData();
     },
     methods: {
          loadAllData() {
               if (this.$route.query.id) {
                    this.axios.get(`api/admin/orders/${this.$route.query.id}`).then(response => {
                         if (response.status == 200) {
                              if (response.data.status == true) {
                                   this.order = response.data.data;
                              }
                         }
                    });
               }
          },
          chooseMapEvent(latLng) {
               this.order.current_location.lat = latLng.lat;
               this.order.current_location.lng = latLng.lng;
          },
          handleSubmit() {
               this.loading = true;
               this.errorMeg = '';
               // let formData = new FormData();
               let mapedItems = this.order.items.map(item => {
                    return { 'id': item.id, "current_temp": item.current_temp };
               });
               let order = {
                    weight: this.order.weight,
                    current_lat: this.order.current_location.lat,
                    current_lng: this.order.current_location.lng,
                    items: mapedItems,
                    '_method': 'PUT'
               };
               this.axios.post(`api/admin/orders/${this.$route.query.id}`, order).then(response => {
                    if (response.status == 200) {
                         if (response.data.status == true) {
                              this.loading = false;
                              this.dataAdedd = true;
                              let self = this;
                              setTimeout(function () {
                                   self.loadAllData();
                                   this.dataAdedd = false;
                              }, 2000);
                         } else {
                              this.errorMessage = response.data.msg;
                              this.loading = false;
                         }
                    }
               });
          }

     }
});

/***/ }),

/***/ 1011:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_google_maps__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_google_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_google_maps__);
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'google-map',

  computed: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapGetters */])({
    config: 'config'
  }),

  mounted() {
    let self = this;
    __WEBPACK_IMPORTED_MODULE_1_google_maps__["KEY"] = 'AIzaSyA7PA38yK-eREk4fjhMtoxB7m3C9zMRxRE';

    __WEBPACK_IMPORTED_MODULE_1_google_maps__["load"](google => {
      /* eslint-disable no-new */
      const map = new google.maps.Map(this.$el, {
        zoom: 8,
        center: new google.maps.LatLng(31.01657403369596, 31.395087176513687),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      const marker = new google.maps.Marker({
        draggable: true,
        position: new google.maps.LatLng(31.01657403369596, 31.395087176513687),
        map,
        title: "Hello World!"
      });
      google.maps.event.addListener(marker, 'dragend', function () {
        map.setCenter(marker.getPosition());
        self.$emit("chooseMapEvent", {
          lat: marker.getPosition().lat(),
          lng: marker.getPosition().lng()
        });
        console.log('marker.getPosition()', marker.getPosition().lat());
        console.log('marker.getPosition()', marker.getPosition().lng());
      });
    });
  }
});

/***/ }),

/***/ 1198:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1199);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("6cca2b29", content, true, {});

/***/ }),

/***/ 1199:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".product-img{width:100px;height:auto}.degree-input{width:128px}.card-body{height:400px}.google-maps-page .card-body{height:600px;width:100%;margin:0}", ""]);

// exports


/***/ }),

/***/ 1200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_GoogleMap_vue__ = __webpack_require__(1011);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ad614230_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_GoogleMap_vue__ = __webpack_require__(1203);
function injectStyle (ssrContext) {
  __webpack_require__(1201)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_GoogleMap_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ad614230_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_GoogleMap_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 1201:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1202);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("323d3f9e", content, true, {});

/***/ }),

/***/ 1202:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".google-map{height:100%}", ""]);

// exports


/***/ }),

/***/ 1203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"google-map"})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 1204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('div',{staticClass:"container"},[_c('router-link',{attrs:{"to":{ name: 'researcher-dashboard'}}},[_c('p',[_c('i',{staticClass:"fa fa-arrow-left mr-2",attrs:{"aria-hidden":"true"}}),_vm._v("Back to Researcher dashboard")])]),_vm._v(" "),(_vm.order)?_c('table',{staticClass:"table table-striped table-bordered mb-3"},[_vm._m(0),_vm._v(" "),_c('tbody',[(_vm.order)?_c('tr',[_c('th',{attrs:{"scope":"row"}},[_vm._v(_vm._s(_vm.order.id))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.order.created_at))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.order.address.address))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.order.user.name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.order.total))])]):_vm._e()])]):_vm._e(),_vm._v(" "),_c('form',{staticClass:"mb-1",on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit($event)}}},[_c('div',{staticClass:"row mt-4"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-3"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.order.weight),expression:"order.weight"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Enter weight","required":""},domProps:{"value":(_vm.order.weight)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.order, "weight", $event.target.value)}}})])]),_vm._v(" "),(_vm.order.items.length)?[_c('p',{staticClass:"text-center mt-4 mb-4"},[_vm._v("Products")]),_vm._v(" "),_c('table',{staticClass:"table table-bordered"},[_vm._m(2),_vm._v(" "),_c('tbody',_vm._l((_vm.order.items),function(item){return _c('tr',{key:item.id},[_c('th',{attrs:{"scope":"row"}},[_vm._v(_vm._s(item.id))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(item.product.name))]),_vm._v(" "),_c('th',[_vm._v(_vm._s(item.quantity))]),_vm._v(" "),(item.has_sensor)?_c('td',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(item.current_temp),expression:"item.current_temp"}],staticClass:"degree-input form-control",attrs:{"placeholder":"Enter Temp"},domProps:{"value":(item.current_temp)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(item, "current_temp", $event.target.value)}}})]):_c('td',[_vm._v("\n                                   no sensor\n                              ")]),_vm._v(" "),_c('td',[_vm._v("\n                                   "+_vm._s(item.is_spoiled)+"\n                              ")]),_vm._v(" "),(item.has_sensor)?_c('td',[_vm._v("\n                                   min: "+_vm._s(item.product.sensor.min)),_c('br'),_vm._v("\n                                   max: "+_vm._s(item.product.sensor.max)+"\n                              ")]):_vm._e(),_vm._v(" "),_c('td',[_c('img',{staticClass:"product-img",attrs:{"src":item.product.image}})])])}),0)])]:[_c('p',{staticClass:"text-center"},[_vm._v(" No products")])],_vm._v(" "),_c('card',{staticClass:"row",attrs:{"header-text":"Google Maps"}},[_c('google-map',{on:{"chooseMapEvent":_vm.chooseMapEvent}})],1),_vm._v(" "),_c('button',{staticClass:"btn btn-success w-50 d-block mx-auto mt-2",attrs:{"type":"submit"}},[_vm._v("Submit "),(_vm.loading)?_c('span',[_vm._v(" Loading...")]):_vm._e()])],2),_vm._v(" "),(_vm.dataAdedd)?_c('basix-alert',{staticClass:"col-6 mx-auto mt-2",attrs:{"type":"success","withCloseBtn":true}},[_c('span',{staticClass:"badge badge-pill badge-success"},[_vm._v("Success")]),_vm._v("\n               Data Added Successfully\n          ")]):_vm._e(),_vm._v(" "),(_vm.errorMessage)?_c('basix-alert',{staticClass:"col-12 col-md-6 mx-auto mt-2 text-center",attrs:{"type":"danger","withCloseBtn":true}},[_c('span',{staticClass:"badge badge-pill badge-danger"},[_vm._v(_vm._s(_vm.errorMessage))])]):_vm._e()],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',{attrs:{"scope":"col"}},[_vm._v("ID")]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v("Date")]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v("To")]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v("Name")]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v("Total")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-md-2"},[_c('label',{staticClass:" form-control-label",attrs:{"for":"price-input"}},[_vm._v("Shipment weight ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',{attrs:{"scope":"col"}},[_vm._v("ID")]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v("Product name")]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v("Quantity")]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v("Current_temp")]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v("Spoiled")]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v("Min Max")]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v("Product Image")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_single_order_vue__ = __webpack_require__(1010);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_003e9c8a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_single_order_vue__ = __webpack_require__(1204);
function injectStyle (ssrContext) {
  __webpack_require__(1198)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_single_order_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_003e9c8a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_single_order_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 814:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {

	if (root === null) {
		throw new Error('Google-maps package can be used only in browser');
	}

	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.GoogleMapsLoader = factory();
	}

})(typeof window !== 'undefined' ? window : null, function() {


	'use strict';


	var googleVersion = '3.31';

	var script = null;

	var google = null;

	var loading = false;

	var callbacks = [];

	var onLoadEvents = [];

	var originalCreateLoaderMethod = null;


	var GoogleMapsLoader = {};


	GoogleMapsLoader.URL = 'https://maps.googleapis.com/maps/api/js';

	GoogleMapsLoader.KEY = null;

	GoogleMapsLoader.LIBRARIES = [];

	GoogleMapsLoader.CLIENT = null;

	GoogleMapsLoader.CHANNEL = null;

	GoogleMapsLoader.LANGUAGE = null;

	GoogleMapsLoader.REGION = null;

	GoogleMapsLoader.VERSION = googleVersion;

	GoogleMapsLoader.WINDOW_CALLBACK_NAME = '__google_maps_api_provider_initializator__';


	GoogleMapsLoader._googleMockApiObject = {};


	GoogleMapsLoader.load = function(fn) {
		if (google === null) {
			if (loading === true) {
				if (fn) {
					callbacks.push(fn);
				}
			} else {
				loading = true;

				window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] = function() {
					ready(fn);
				};

				GoogleMapsLoader.createLoader();
			}
		} else if (fn) {
			fn(google);
		}
	};


	GoogleMapsLoader.createLoader = function() {
		script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = GoogleMapsLoader.createUrl();

		document.body.appendChild(script);
	};


	GoogleMapsLoader.isLoaded = function() {
		return google !== null;
	};


	GoogleMapsLoader.createUrl = function() {
		var url = GoogleMapsLoader.URL;

		url += '?callback=' + GoogleMapsLoader.WINDOW_CALLBACK_NAME;

		if (GoogleMapsLoader.KEY) {
			url += '&key=' + GoogleMapsLoader.KEY;
		}

		if (GoogleMapsLoader.LIBRARIES.length > 0) {
			url += '&libraries=' + GoogleMapsLoader.LIBRARIES.join(',');
		}

		if (GoogleMapsLoader.CLIENT) {
			url += '&client=' + GoogleMapsLoader.CLIENT;
		}

		if (GoogleMapsLoader.CHANNEL) {
			url += '&channel=' + GoogleMapsLoader.CHANNEL;
		}

		if (GoogleMapsLoader.LANGUAGE) {
			url += '&language=' + GoogleMapsLoader.LANGUAGE;
		}

		if (GoogleMapsLoader.REGION) {
			url += '&region=' + GoogleMapsLoader.REGION;
		}

		if (GoogleMapsLoader.VERSION) {
			url += '&v=' + GoogleMapsLoader.VERSION;
		}

		return url;
	};


	GoogleMapsLoader.release = function(fn) {
		var release = function() {
			GoogleMapsLoader.KEY = null;
			GoogleMapsLoader.LIBRARIES = [];
			GoogleMapsLoader.CLIENT = null;
			GoogleMapsLoader.CHANNEL = null;
			GoogleMapsLoader.LANGUAGE = null;
			GoogleMapsLoader.REGION = null;
			GoogleMapsLoader.VERSION = googleVersion;

			google = null;
			loading = false;
			callbacks = [];
			onLoadEvents = [];

			if (typeof window.google !== 'undefined') {
				delete window.google;
			}

			if (typeof window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] !== 'undefined') {
				delete window[GoogleMapsLoader.WINDOW_CALLBACK_NAME];
			}

			if (originalCreateLoaderMethod !== null) {
				GoogleMapsLoader.createLoader = originalCreateLoaderMethod;
				originalCreateLoaderMethod = null;
			}

			if (script !== null) {
				script.parentElement.removeChild(script);
				script = null;
			}

			if (fn) {
				fn();
			}
		};

		if (loading) {
			GoogleMapsLoader.load(function() {
				release();
			});
		} else {
			release();
		}
	};


	GoogleMapsLoader.onLoad = function(fn) {
		onLoadEvents.push(fn);
	};


	GoogleMapsLoader.makeMock = function() {
		originalCreateLoaderMethod = GoogleMapsLoader.createLoader;

		GoogleMapsLoader.createLoader = function() {
			window.google = GoogleMapsLoader._googleMockApiObject;
			window[GoogleMapsLoader.WINDOW_CALLBACK_NAME]();
		};
	};


	var ready = function(fn) {
		var i;

		loading = false;

		if (google === null) {
			google = window.google;
		}

		for (i = 0; i < onLoadEvents.length; i++) {
			onLoadEvents[i](google);
		}

		if (fn) {
			fn(google);
		}

		for (i = 0; i < callbacks.length; i++) {
			callbacks[i](google);
		}

		callbacks = [];
	};


	return GoogleMapsLoader;

});


/***/ })

});
//# sourceMappingURL=6.build.js.map