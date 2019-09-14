var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
var TestComponent = /** @class */ (function (_super) {
    __extends(TestComponent, _super);
    function TestComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestComponent.prototype.render = function () {
        var TestComponentNested = /** @class */ (function (_super) {
            __extends(TestComponentNested, _super);
            function TestComponentNested() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TestComponentNested.prototype.render = function () {
                return React.createElement("p", null, "returned value nested");
            };
            return TestComponentNested;
        }(React.Component));
        TestComponentNested.displayName = "TestComponentNested";
        return React.createElement(TestComponentNested, null);
    };
    return TestComponent;
}(React.Component));
export { TestComponent };
TestComponent.displayName = "TestComponent";
