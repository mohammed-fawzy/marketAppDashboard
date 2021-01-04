webpackJsonp([17],{

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Set_vue__ = __webpack_require__(763);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_bf5e8fea_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Set_vue__ = __webpack_require__(810);
function injectStyle (ssrContext) {
  __webpack_require__(808)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Set_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_bf5e8fea_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Set_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
    name: 'set',
    props: ['name', 'sets'],
    methods: {
        iconClass(icon) {
            return this.set.prefix + ' ' + this.set.prefix + '-' + icon;
        }
    },
    computed: {
        set() {
            for (let set of this.sets) {
                if (set.href === this.name) return set;
            }
        },
        validatedLists() {
            if (this.selector === '') {
                return this.set.lists;
            }
            let result = [{ name: 'Icons Founded', icons: [] }];
            this.set.lists.forEach(list => {
                list.icons.forEach(icon => {
                    if (icon.match(this.selector)) {
                        result[0].icons.push(icon);
                    }
                });
            });
            return result;
        }
    },
    data: function () {
        return {
            selector: '',
            iconSize: 30,
            slider: {
                formatter: v => `${v}px`,
                height: 2,
                direction: 'horizontal',
                min: 20,
                max: 40,
                interval: 1,
                speed: 0.5
            }
        };
    }
});

/***/ }),

/***/ 808:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(809);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("17306936", content, true, {});

/***/ }),

/***/ 809:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".Set .header{background-color:#fff;padding:2rem 0;margin-bottom:2rem}.Set .header .header-text{text-align:left;padding-left:2.5rem}.Set .header .header-text h2{margin-bottom:0}.Set .back-to-fonts{font-size:25px;padding-right:20px}.Set .icons .icon-grid-container{padding:.5rem 0 5rem;margin:0 0 2rem;text-align:center;height:6rem;position:relative;min-height:1px;float:left;width:200px;height:80px}.Set .icons .icon-grid-container:hover{background-color:#20a8d8;color:#fff;cursor:pointer}", ""]);

// exports


/***/ }),

/***/ 810:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Set"},[_c('card',[_c('div',{staticClass:"row"},[_c('div',{staticClass:"header-text col-lg-4"},[_c('h2',[_vm._v(_vm._s(_vm.set.name))])]),_vm._v(" "),_c('div',{staticClass:"search col-lg-4"},[_c('div',{staticClass:"form-group with-icon-left"},[_c('div',{staticClass:"input-group"},[_c('span',{staticClass:"back-to-fonts"},[_c('router-link',{attrs:{"to":{path: '/components/icons'}}},[_c('i',{staticClass:"fa fa-hand-o-left"})])],1),_vm._v(" "),_c('form',{staticClass:"form-inline"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.selector),expression:"selector"}],staticClass:"form-control mr-sm-2",attrs:{"type":"text","placeholder":"Search Icon","required":"","aria-label":"Search"},domProps:{"value":(_vm.selector)},on:{"input":function($event){if($event.target.composing){ return; }_vm.selector=$event.target.value}}}),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{"type":"submit"}},[_c('i',{staticClass:"fa fa fa-search"})])])])])])])]),_vm._v(" "),_vm._l((_vm.validatedLists),function(list){return [_c('card',{attrs:{"headerText":list.name}},[(list.icons.length === 0)?_c('span',[_vm._v("No icons found")]):_vm._e(),_vm._v(" "),_vm._l((Math.floor(list.icons.length/8+1)),function(i){return [_c('div',{staticClass:"icons"},_vm._l((8),function(j){return (list.icons[(i-1)*8 + j-1])?_c('div',{staticClass:"icon-grid-container"},[_c('span',{class:_vm.iconClass(list.icons[(i-1)*8 + j-1]),style:('font-size: '+_vm.iconSize+'px'),attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('div',{staticClass:"iconText"},[_vm._v(_vm._s(list.icons[(i-1)*8 + j-1]))])]):_vm._e()}),0)]})],2)]})],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});
//# sourceMappingURL=17.build.js.map