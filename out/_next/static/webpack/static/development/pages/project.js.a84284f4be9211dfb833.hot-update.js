webpackHotUpdate("static/development/pages/project.js",{

/***/ "./components/Projectform.js":
/*!***********************************!*\
  !*** ./components/Projectform.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var joi_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! joi-browser */ "./node_modules/joi-browser/dist/joi-browser.js");
/* harmony import */ var joi_browser__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(joi_browser__WEBPACK_IMPORTED_MODULE_13__);








var _jsxFileName = "/Users/rigalpatel/Jedcodeassignment/with-apollo/components/Projectform.js";


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  mutation project_operations(\n    $name: String\n    $description: String\n  ) {\n    project_operations(name: $name, description: $description) {\n      name\n      description\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var CREATE_PROJECT = graphql_tag__WEBPACK_IMPORTED_MODULE_10___default()(_templateObject());
var schema = {
  name: joi_browser__WEBPACK_IMPORTED_MODULE_13___default.a.string().required().error(function (errors) {
    return {
      message: "Name is required!"
    };
  }),
  description: joi_browser__WEBPACK_IMPORTED_MODULE_13___default.a.string().required().error(function (errors) {
    return {
      message: "Description is required!"
    };
  })
};

var Projectform =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Projectform, _React$Component);

  function Projectform(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Projectform);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Projectform).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      id: "",
      name: "",
      description: "",
      errors: ""
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, name, value));
    });

    if (props.project) {
      console.log("Found");
      _this.state = {
        id: props.project.id,
        name: props.project.name,
        description: props.project.description
      };
    }

    console.log(_this.state);
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Projectform, [{
    key: "validate",
    value: function validate(name, description) {
      var errors = "";
      var result = joi_browser__WEBPACK_IMPORTED_MODULE_13___default.a.validate({
        name: name,
        description: description
      }, schema);

      if (result.error) {
        errors = result.error.details[0].message;
      }

      return errors;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var input;
      var errors = this.state.errors;
      console.log(this.state);
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_9__["Mutation"], {
        mutation: CREATE_PROJECT,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, function (project_operations, _ref) {
        var loading = _ref.loading,
            error = _ref.error;
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("form", {
          onSubmit: function onSubmit(e) {
            e.preventDefault();

            var errors = _this2.validate(e.target.name.value, e.target.description.value);

            if (errors) {
              _this2.setState({
                errors: errors
              });

              return;
            }

            if (!errors) {
              project_operations({
                variables: {
                  id: e.target.id.value,
                  name: e.target.name.value,
                  description: e.target.description.value
                }
              }).then(function () {
                return next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push("/");
              });
            }
          },
          className: "jsx-3122679424",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, errors && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
          className: "jsx-3122679424",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, errors), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
          type: "text",
          name: "name",
          id: "name",
          placeholder: "Project Name",
          value: _this2.state.name,
          onChange: _this2.handleChange,
          className: "jsx-3122679424",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
          name: "description",
          id: "description",
          value: _this2.state.description,
          placeholder: "Description",
          onChange: _this2.handleChange,
          className: "jsx-3122679424",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
          type: "hidden",
          name: "id",
          id: "id",
          value: _this2.state.id,
          className: "jsx-3122679424",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button", {
          type: "submit",
          className: "jsx-3122679424",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }, "Add Account"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
          id: "3122679424",
          __self: this
        }, "form.jsx-3122679424{border-bottom:1px solid #ececec;padding-bottom:20px;margin-bottom:20px;}h1.jsx-3122679424{font-size:20px;}input.jsx-3122679424{display:block;margin-bottom:10px;}form.jsx-3122679424 button.jsx-3122679424{margin-right:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaWdhbHBhdGVsL0plZGNvZGVhc3NpZ25tZW50L3dpdGgtYXBvbGxvL2NvbXBvbmVudHMvUHJvamVjdGZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0lnQyxBQUd5RCxBQUtqQixBQUdELEFBSUksY0FIQyxDQUhyQixHQU9BLGNBWnNCLENBU3RCLG1CQVJxQixtQkFDckIiLCJmaWxlIjoiL1VzZXJzL3JpZ2FscGF0ZWwvSmVkY29kZWFzc2lnbm1lbnQvd2l0aC1hcG9sbG8vY29tcG9uZW50cy9Qcm9qZWN0Zm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE11dGF0aW9uIH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiO1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgSm9pIGZyb20gXCJqb2ktYnJvd3NlclwiO1xuXG5cblxuY29uc3QgQ1JFQVRFX1BST0pFQ1QgPSBncWxgXG4gIG11dGF0aW9uIHByb2plY3Rfb3BlcmF0aW9ucyhcbiAgICAkbmFtZTogU3RyaW5nXG4gICAgJGRlc2NyaXB0aW9uOiBTdHJpbmdcbiAgKSB7XG4gICAgcHJvamVjdF9vcGVyYXRpb25zKG5hbWU6ICRuYW1lLCBkZXNjcmlwdGlvbjogJGRlc2NyaXB0aW9uKSB7XG4gICAgICBuYW1lXG4gICAgICBkZXNjcmlwdGlvblxuICAgIH1cbiAgfVxuYDtcblxuY29uc3Qgc2NoZW1hID0ge1xuICBuYW1lOiBKb2kuc3RyaW5nKClcbiAgICAucmVxdWlyZWQoKVxuICAgIC5lcnJvcihlcnJvcnMgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkIVwiXG4gICAgICB9O1xuICAgIH0pLFxuICAgIGRlc2NyaXB0aW9uOiBKb2kuc3RyaW5nKClcbiAgICAucmVxdWlyZWQoKVxuICAgIC5lcnJvcihlcnJvcnMgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZTogXCJEZXNjcmlwdGlvbiBpcyByZXF1aXJlZCFcIlxuICAgICAgfTtcbiAgICB9KVxufTtcblxuY2xhc3MgUHJvamVjdGZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBcbiAgc3RhdGUgPSB7XG4gICAgaWQ6IFwiXCIsXG4gICAgbmFtZTogXCJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBlcnJvcnM6IFwiXCJcbn07XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgaWYgKHByb3BzLnByb2plY3QpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkZvdW5kXCIpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlkOiBwcm9wcy5wcm9qZWN0LmlkLFxuICAgICAgICAgICAgbmFtZTogcHJvcHMucHJvamVjdC5uYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb3BzLnByb2plY3QuZGVzY3JpcHRpb25cbiAgICAgICAgfTtcbiAgICB9ICBcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgIFxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICB0aGlzLnNldFN0YXRlKHsgW25hbWVdOiB2YWx1ZSB9KTtcbiAgfTtcblxuICB2YWxpZGF0ZShuYW1lLCBkZXNjcmlwdGlvbikge1xuICAgIGxldCBlcnJvcnMgPSBcIlwiO1xuICAgIGNvbnN0IHJlc3VsdCA9IEpvaS52YWxpZGF0ZShcbiAgICAgIHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uXG4gICAgICB9LFxuICAgICAgc2NoZW1hXG4gICAgKTtcbiAgICBpZiAocmVzdWx0LmVycm9yKSB7XG4gICAgICBlcnJvcnMgPSByZXN1bHQuZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlO1xuICAgIH1cbiAgICByZXR1cm4gZXJyb3JzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBpbnB1dDtcbiAgICBjb25zdCB7IGVycm9ycyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zb2xlLmxvZyggdGhpcy5zdGF0ZSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNdXRhdGlvbiBtdXRhdGlvbj17Q1JFQVRFX1BST0pFQ1R9PlxuICAgICAgICAgICAgICB7KHByb2plY3Rfb3BlcmF0aW9ucywgeyBsb2FkaW5nLCBlcnJvciB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy52YWxpZGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0Lm5hbWUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5kZXNjcmlwdGlvbi52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9ycyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlcnJvcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgIHByb2plY3Rfb3BlcmF0aW9ucyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAgZS50YXJnZXQuaWQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZS50YXJnZXQubmFtZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZS50YXJnZXQuZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4gUm91dGVyLnB1c2goXCIvXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMgJiYgPHA+e2Vycm9yc308L3A+fVxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcm9qZWN0IE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImlkXCIgaWQ9XCJpZFwiIHZhbHVlPXt0aGlzLnN0YXRlLmlkfSAvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQgQWNjb3VudDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VjZWNlYztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGZvcm0gYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgIHtsb2FkaW5nICYmIDxwPkxvYWRpbmcuLi48L3A+fVxuICAgICAgICAgICAgICAgICAge2Vycm9yICYmIDxwPkVycm9yIDooIFBsZWFzZSB0cnkgYWdhaW48L3A+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9NdXRhdGlvbj5cbiAgICAgICAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Rmb3JtOyJdfQ== */\n/*@ sourceURL=/Users/rigalpatel/Jedcodeassignment/with-apollo/components/Projectform.js */")), loading && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          },
          __self: this
        }, "Loading..."), error && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          },
          __self: this
        }, "Error :( Please try again"));
      });
    }
  }]);

  return Projectform;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Projectform);

/***/ })

})
//# sourceMappingURL=project.js.a84284f4be9211dfb833.hot-update.js.map