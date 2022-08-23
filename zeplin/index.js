// build/_snowpack/pkg/web-zeplin-converter.js
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var ZeplinStyle_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ZeplinStyle = void 0;
  var ZeplinStyle2 = function() {
    function ZeplinStyle3(deviceT) {
      this.deviceType = deviceT;
      this.deviceZ = this.getDeviceZ();
    }
    ZeplinStyle3.prototype.getPhone = function(orientation) {
      var isPortrait = orientation === "portrait";
      this.deviceZ.setOrientation(orientation);
      if (isPortrait) {
        return this.phoneStylesPortrait();
      }
      return this.phoneStylesLandscape();
    };
    ZeplinStyle3.prototype.getTablet = function(orientation) {
      var isPortrait = orientation === "portrait";
      this.deviceZ.setOrientation(orientation);
      if (isPortrait) {
        return this.tabletStylesPortrait();
      }
      return this.tabletStylesLandscape();
    };
    ZeplinStyle3.prototype.getDesktop = function() {
      this.deviceZ.setOrientation("landscape");
      return this.desktopStylesLandscape();
    };
    ZeplinStyle3.prototype.getDeviceZ = function() {
      var deviceZ;
      switch (this.deviceType) {
        case "phone":
          deviceZ = this.phoneDeviceZ();
          break;
        case "tablet":
          deviceZ = this.tabletDeviceZ();
          break;
        case "desktop":
          deviceZ = this.desktopDeviceZ();
          break;
        default:
          deviceZ = this.phoneDeviceZ();
          break;
      }
      return deviceZ;
    };
    ZeplinStyle3.prototype.setDeviceZ = function(deviceT) {
      this.deviceType = deviceT;
      this.deviceZ = this.getDeviceZ();
    };
    ZeplinStyle3.prototype.getStyles = function(orientation) {
      var style;
      switch (this.deviceType) {
        case "phone":
          style = this.getPhone(orientation);
          break;
        case "tablet":
          style = this.getTablet(orientation);
          break;
        case "desktop":
          style = this.getDesktop();
          break;
        default:
          style = this.getPhone(orientation);
          break;
      }
      return style;
    };
    return ZeplinStyle3;
  }();
  exports.ZeplinStyle = ZeplinStyle2;
});
var ZeplinConverter_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ZeplinConverter = void 0;
  var devicesDimensionsZ = {
    iphone11: {
      widthP: 414,
      widthL: 800,
      heightP: 896,
      heightL: 400
    },
    ipad: {
      widthP: 768,
      widthL: 1024,
      heightP: 1024,
      heightL: 768
    },
    desktop1440: {
      widthP: 1440,
      widthL: 1440,
      heightP: 1024,
      heightL: 1024
    }
  };
  var ZeplinConverter = function() {
    function ZeplinConverter2(deviceM, orientation) {
      if (orientation === void 0) {
        orientation = "portrait";
      }
      var _this = this;
      this.setOrientation = function(orientation2) {
        _this.orientation = orientation2;
      };
      this.calucalteWidth = function(widthZ, deviceWidthZ, locked) {
        if (locked === void 0) {
          locked = false;
        }
        var windowWidth = _this.getWindowWidth();
        if (locked && windowWidth > deviceWidthZ) {
          windowWidth = deviceWidthZ;
        }
        var ratio = windowWidth / deviceWidthZ;
        return widthZ * ratio;
      };
      this.calucaltHeight = function(heightZ, deviceHeightZ, locked) {
        if (locked === void 0) {
          locked = false;
        }
        var windowWidth = _this.getWindowHeight();
        if (locked && windowWidth > deviceHeightZ) {
          windowWidth = deviceHeightZ;
        }
        var ratio = windowWidth / deviceHeightZ;
        return heightZ * ratio;
      };
      this.calculateBox = function(widthZ, heightZ, deviceWidthZ, locked) {
        if (locked === void 0) {
          locked = false;
        }
        var ratioZ = widthZ / heightZ;
        var w = _this.calucalteWidth(widthZ, deviceWidthZ, locked);
        var h = w / ratioZ;
        return {width: w, height: h};
      };
      this.getWidth = function(widthZ, locked) {
        if (locked === void 0) {
          locked = false;
        }
        if (_this.orientation === "portrait") {
          return _this.calucalteWidth(widthZ, _this.deviceDimZ.widthP, locked);
        }
        return _this.calucalteWidth(widthZ, _this.deviceDimZ.widthL, locked);
      };
      this.getHeight = function(heightZ, locked) {
        if (locked === void 0) {
          locked = false;
        }
        if (_this.orientation === "portrait") {
          var dimensionsP = _this.calculateBox(heightZ, heightZ, _this.deviceDimZ.widthP, locked);
          return dimensionsP.height;
        }
        var dimensionsL = _this.calculateBox(heightZ, heightZ, _this.deviceDimZ.widthL, locked);
        return dimensionsL.height;
      };
      this.getUnPropHeight = function(heightZ, locked) {
        if (locked === void 0) {
          locked = false;
        }
        if (_this.orientation === "portrait") {
          return _this.calucaltHeight(heightZ, _this.deviceDimZ.heightP, locked);
        }
        return _this.calucaltHeight(heightZ, _this.deviceDimZ.heightL, locked);
      };
      this.getBox = function(widthZ, heightZ, locked) {
        if (locked === void 0) {
          locked = false;
        }
        if (_this.orientation === "portrait") {
          return _this.calculateBox(widthZ, heightZ, _this.deviceDimZ.widthP, locked);
        }
        return _this.calculateBox(widthZ, heightZ, _this.deviceDimZ.widthL, locked);
      };
      this.deviceDimZ = devicesDimensionsZ[deviceM];
      this.deviceModel = deviceM;
      this.orientation = orientation;
    }
    return ZeplinConverter2;
  }();
  exports.ZeplinConverter = ZeplinConverter;
});
var WZeplinConverter_1 = createCommonjsModule(function(module, exports) {
  var __extends = commonjsGlobal && commonjsGlobal.__extends || function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WZeplinConverter = void 0;
  var WZeplinConverter2 = function(_super) {
    __extends(WZeplinConverter3, _super);
    function WZeplinConverter3(deviceM, orientation) {
      if (orientation === void 0) {
        orientation = "portrait";
      }
      return _super.call(this, deviceM, orientation) || this;
    }
    WZeplinConverter3.prototype.getWindowHeight = function() {
      return document.body.clientHeight;
    };
    WZeplinConverter3.prototype.getWindowWidth = function() {
      return document.body.clientWidth;
    };
    return WZeplinConverter3;
  }(ZeplinConverter_1.ZeplinConverter);
  exports.WZeplinConverter = WZeplinConverter2;
});
var WZeplinEventListener_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WZeplinEventListener = void 0;
  var TABLET_MAX_WIDTH_SIZE = 1133;
  var getDeviceByUserAgent = function() {
    var ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    } else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return "phone";
    }
    return "desktop";
  };
  var getDeviceType = function() {
    var deviceByUserAgent = getDeviceByUserAgent();
    if (deviceByUserAgent === "desktop" && document.body.clientWidth <= TABLET_MAX_WIDTH_SIZE) {
      return "tablet";
    }
    return deviceByUserAgent;
  };
  var getCurrentOrientation = function() {
    var landscape = "landscape";
    var portrait = "portrait";
    var orientationType = (window.screen.orientation || {}).type;
    if (orientationType) {
      if (orientationType.indexOf(landscape) !== -1) {
        return landscape;
      } else {
        return portrait;
      }
    }
    if (typeof window.orientation === "undefined") {
      return landscape;
    }
    if (window.orientation === 90 || window.orientation === -90) {
      return landscape;
    }
    return portrait;
  };
  var WZeplinEventListener2 = function() {
    function WZeplinEventListener3() {
      var _this = this;
      this.addListener = function(callBack) {
        _this.listener = function(e) {
          var detail = e.detail;
          var options = {
            width: detail.width || 0,
            orientation: detail.orientation || "portrait",
            deviceType: detail.deviceType || "phone"
          };
          callBack(options);
        };
        document.addEventListener("zeplin", _this.listener, false);
      };
      this.removeListener = function() {
        document.removeEventListener("zeplin", _this.listener, false);
        window.removeEventListener("resize", _this.handleResize, false);
        window.removeEventListener("orientationchange", _this.handleResize, false);
        document.body.removeAttribute("zeplinEventAttached");
      };
      this.handleOrienationChangeEvent = function(e) {
        var type = e.target.screen.orientation.type;
        var width = document.body.clientWidth;
        var deviceT = _this.deviceType;
        var orientation = _this.orientation;
        var deviceByUserAgent = getDeviceByUserAgent();
        if (deviceByUserAgent === "desktop" && width > TABLET_MAX_WIDTH_SIZE) {
          deviceT = "desktop";
        }
        if (type.indexOf("landscape") !== -1) {
          orientation = "landscape";
        } else {
          orientation = "portrait";
        }
        document.dispatchEvent(_this.event({
          width,
          orientation,
          deviceType: deviceT
        }));
        _this.deviceType = deviceT;
        _this.orientation = orientation;
      };
      this.handleResize = function() {
        var width = document.body.clientWidth;
        var deviceT = _this.deviceType;
        var orientation = _this.orientation;
        var deviceByUserAgent = getDeviceByUserAgent();
        if (deviceByUserAgent === "desktop" && width > TABLET_MAX_WIDTH_SIZE) {
          deviceT = "desktop";
        }
        if (!window.onorientationchange) {
          orientation = getCurrentOrientation();
        }
        document.dispatchEvent(_this.event({
          width,
          orientation,
          deviceType: deviceT
        }));
        _this.deviceType = deviceT;
        _this.orientation = orientation;
      };
      this.init = function() {
        var zeplinEventAttached = document.body.getAttribute("zeplinEventAttached");
        if (zeplinEventAttached === "true") {
          return;
        }
        _this.event = function(data) {
          return new CustomEvent("zeplin", {
            detail: data
          });
        };
        document.body.setAttribute("zeplinEventAttached", "true");
        window.addEventListener("resize", _this.handleResize, false);
        if (window.onorientationchange) {
          window.addEventListener("orientationchange", _this.handleOrienationChangeEvent);
        }
      };
      this.deviceType = getDeviceType();
      this.orientation = getCurrentOrientation();
      this.init();
    }
    return WZeplinEventListener3;
  }();
  exports.WZeplinEventListener = WZeplinEventListener2;
});
var lib = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.WZeplinEventListener = exports.WZeplinConverter = exports.ZeplinStyle = void 0;
  Object.defineProperty(exports, "ZeplinStyle", {enumerable: true, get: function() {
    return ZeplinStyle_1.ZeplinStyle;
  }});
  Object.defineProperty(exports, "WZeplinConverter", {enumerable: true, get: function() {
    return WZeplinConverter_1.WZeplinConverter;
  }});
  Object.defineProperty(exports, "WZeplinEventListener", {enumerable: true, get: function() {
    return WZeplinEventListener_1.WZeplinEventListener;
  }});
});
var WZeplinConverter = lib.WZeplinConverter;
var WZeplinEventListener = lib.WZeplinEventListener;
var ZeplinStyle = lib.ZeplinStyle;

// build/zeplin/LayoutScreenStyle.js
var LayoutScreenStyle = class extends ZeplinStyle {
  setDeviceZToStorage() {
  }
  phoneDeviceZ() {
    const phoneZ = new WZeplinConverter("iphone11");
    return phoneZ;
  }
  tabletDeviceZ() {
    const tabletZ = new WZeplinConverter("ipad");
    return tabletZ;
  }
  desktopDeviceZ() {
    const desktopZ = new WZeplinConverter("desktop1440");
    return desktopZ;
  }
  phoneStylesPortrait() {
    const widthFullScreen = 414;
    const rectangleGreen = this.deviceZ.getBox(widthFullScreen, 48);
    const rectangleOrange = this.deviceZ.getBox(widthFullScreen, 48);
    const rectangleWhite = this.deviceZ.getBox(widthFullScreen, 80);
    const rectangleBigBlack = this.deviceZ.getBox(widthFullScreen, 162);
    const rectanglesGray = this.deviceZ.getBox(widthFullScreen, 96);
    const rectangleDarkGray = this.deviceZ.getBox(222, 72);
    const rectangleCian = this.deviceZ.getBox(124, 104);
    const rectangleBlue = this.deviceZ.getBox(159, 104);
    const rectanglePing = this.deviceZ.getBox(87, 104);
    const style = {
      rectangleGreen: {
        width: rectangleGreen.width + "px",
        height: rectangleGreen.height + "px"
      },
      rectangleOrange: {
        width: rectangleOrange.width + "px",
        height: rectangleOrange.height + "px"
      },
      rectangleWhite: {
        width: rectangleWhite.width + "px",
        height: rectangleWhite.height + "px"
      },
      rectangleWhite_div: {
        fontSize: this.deviceZ.getHeight(32) + "px"
      },
      rectangleBigBlack: {
        width: rectangleBigBlack.width + "px",
        height: rectangleBigBlack.height + "px",
        marginBottom: this.deviceZ.getHeight(48) + "px"
      },
      rectanglesGray: {
        width: rectanglesGray.width + "px",
        height: rectanglesGray.height + "px"
      },
      rectangleGray1: {
        width: this.deviceZ.getWidth(207) + "px",
        fontSize: this.deviceZ.getHeight(12) + "px",
        paddingLeft: this.deviceZ.getWidth(16) + "px",
        paddingTop: this.deviceZ.getHeight(16) + "px"
      },
      rectangleGray2: {
        width: this.deviceZ.getWidth(110) + "px"
      },
      rectangleDarkGray: {
        width: rectangleDarkGray.width + "px",
        height: rectangleDarkGray.height + "px",
        fontSize: this.deviceZ.getHeight(16) + "px",
        margin: this.deviceZ.getHeight(84) + "px auto 0px auto"
      },
      rectanglesColor: {
        width: this.deviceZ.getWidth(widthFullScreen) + "px",
        marginTop: this.deviceZ.getHeight(56) + "px",
        paddingTop: this.deviceZ.getHeight(8) + "px",
        paddingBottom: this.deviceZ.getHeight(8) + "px"
      },
      rectangleCian: {
        width: rectangleCian.width + "px",
        height: rectangleCian.height + "px"
      },
      rectangleBlue: {
        width: rectangleBlue.width + "px",
        height: rectangleBlue.height + "px",
        marginLeft: this.deviceZ.getWidth(8) + "px",
        marginRight: this.deviceZ.getWidth(8) + "px"
      },
      rectanglePing: {
        width: rectanglePing.width + "px",
        height: rectanglePing.height + "px"
      }
    };
    return style;
  }
  phoneStylesLandscape() {
    const widthFullScreen = 800;
    const rectangleGreen = this.deviceZ.getBox(widthFullScreen, 48);
    const rectangleOrange = this.deviceZ.getBox(widthFullScreen, 48);
    const rectangleWhite = this.deviceZ.getBox(widthFullScreen, 80);
    const rectangleBigBlack = this.deviceZ.getBox(widthFullScreen, 162);
    const rectanglesGray = this.deviceZ.getBox(widthFullScreen, 96);
    const rectangleDarkGray = this.deviceZ.getBox(429, 72);
    const rectangleCian = this.deviceZ.getBox(240, 104);
    const rectangleBlue = this.deviceZ.getBox(307, 104);
    const rectanglePing = this.deviceZ.getBox(168, 104);
    const style = {
      rectangleGreen: {
        width: rectangleGreen.width + "px",
        height: rectangleGreen.height + "px"
      },
      rectangleOrange: {
        width: rectangleOrange.width + "px",
        height: rectangleOrange.height + "px"
      },
      rectangleWhite: {
        width: rectangleWhite.width + "px",
        height: rectangleWhite.height + "px"
      },
      rectangleWhite_div: {
        fontSize: this.deviceZ.getHeight(32) + "px"
      },
      rectangleBigBlack: {
        width: rectangleBigBlack.width + "px",
        height: rectangleBigBlack.height + "px",
        marginBottom: this.deviceZ.getHeight(48) + "px"
      },
      rectanglesGray: {
        width: rectanglesGray.width + "px",
        height: rectanglesGray.height + "px"
      },
      rectangleGray1: {
        width: this.deviceZ.getWidth(400) + "px",
        fontSize: this.deviceZ.getHeight(12) + "px",
        paddingLeft: this.deviceZ.getWidth(16) + "px",
        paddingTop: this.deviceZ.getHeight(16) + "px"
      },
      rectangleGray2: {
        width: this.deviceZ.getWidth(213) + "px"
      },
      rectangleDarkGray: {
        width: rectangleDarkGray.width + "px",
        height: rectangleDarkGray.height + "px",
        fontSize: this.deviceZ.getHeight(16) + "px",
        margin: this.deviceZ.getHeight(84) + "px auto 0px auto"
      },
      rectanglesColor: {
        width: this.deviceZ.getWidth(widthFullScreen) + "px",
        marginTop: this.deviceZ.getHeight(56) + "px",
        paddingTop: this.deviceZ.getHeight(8) + "px",
        paddingBottom: this.deviceZ.getHeight(8) + "px"
      },
      rectangleCian: {
        width: rectangleCian.width + "px",
        height: rectangleCian.height + "px"
      },
      rectangleBlue: {
        width: rectangleBlue.width + "px",
        height: rectangleBlue.height + "px",
        marginLeft: this.deviceZ.getWidth(16) + "px",
        marginRight: this.deviceZ.getWidth(16) + "px"
      },
      rectanglePing: {
        width: rectanglePing.width + "px",
        height: rectanglePing.height + "px"
      }
    };
    return style;
  }
  tabletStylesPortrait() {
    const widthFullScreen = 768;
    const rectangleGreen = this.deviceZ.getBox(widthFullScreen, 48);
    const rectangleOrange = this.deviceZ.getBox(widthFullScreen, 48);
    const rectangleWhite = this.deviceZ.getBox(widthFullScreen, 80);
    const rectangleBigBlack = this.deviceZ.getBox(widthFullScreen, 88);
    const rectanglesGray = this.deviceZ.getBox(720, 86);
    const rectangleDarkGray = this.deviceZ.getBox(195, 64);
    const rectangleCian = this.deviceZ.getBox(224, 93);
    const rectangleBlue = this.deviceZ.getBox(298, 93);
    const rectanglePing = this.deviceZ.getBox(150, 93);
    const style = {
      rectangleGreen: {
        width: rectangleGreen.width + "px",
        height: rectangleGreen.height + "px"
      },
      rectangleOrange: {
        width: rectangleOrange.width + "px",
        height: rectangleOrange.height + "px"
      },
      rectangleWhite: {
        width: rectangleWhite.width + "px",
        height: rectangleWhite.height + "px"
      },
      rectangleWhite_div: {
        fontSize: this.deviceZ.getHeight(32) + "px"
      },
      rectangleBigBlack: {
        width: rectangleBigBlack.width + "px",
        height: rectangleBigBlack.height + "px",
        marginBottom: this.deviceZ.getHeight(80) + "px"
      },
      rectanglesGray: {
        width: rectanglesGray.width + "px",
        height: rectanglesGray.height + "px"
      },
      rectangleGray1: {
        width: this.deviceZ.getWidth(147) + "px",
        fontSize: this.deviceZ.getHeight(14) + "px",
        paddingLeft: this.deviceZ.getWidth(8) + "px",
        paddingTop: this.deviceZ.getHeight(16) + "px"
      },
      rectangleGray2: {
        width: this.deviceZ.getWidth(110) + "px"
      },
      rectangleDarkGray: {
        width: rectangleDarkGray.width + "px",
        height: rectangleDarkGray.height + "px",
        fontSize: this.deviceZ.getHeight(16) + "px",
        margin: this.deviceZ.getHeight(288) + "px auto 0px auto"
      },
      rectanglesColor: {
        width: this.deviceZ.getWidth(widthFullScreen) + "px",
        marginTop: this.deviceZ.getHeight(92) + "px",
        paddingTop: this.deviceZ.getHeight(16) + "px",
        paddingBottom: this.deviceZ.getHeight(41) + "px"
      },
      rectangleCian: {
        width: rectangleCian.width + "px",
        height: rectangleCian.height + "px"
      },
      rectangleBlue: {
        width: rectangleBlue.width + "px",
        height: rectangleBlue.height + "px",
        marginLeft: this.deviceZ.getWidth(24) + "px",
        marginRight: this.deviceZ.getWidth(24) + "px"
      },
      rectanglePing: {
        width: rectanglePing.width + "px",
        height: rectanglePing.height + "px"
      }
    };
    return style;
  }
  tabletStylesLandscape() {
    const widthFullScreen = 1024;
    const rectangleGreen = this.deviceZ.getBox(widthFullScreen, 48);
    const rectangleOrange = this.deviceZ.getBox(widthFullScreen, 48);
    const rectangleWhite = this.deviceZ.getBox(widthFullScreen, 80);
    const rectangleBigBlack = this.deviceZ.getBox(widthFullScreen, 88);
    const rectanglesGray = this.deviceZ.getBox(912, 86);
    const rectangleDarkGray = this.deviceZ.getBox(195, 64);
    const rectangleCian = this.deviceZ.getBox(289, 93);
    const rectangleBlue = this.deviceZ.getBox(384, 93);
    const rectanglePing = this.deviceZ.getBox(191, 93);
    const style = {
      rectangleGreen: {
        width: rectangleGreen.width + "px",
        height: rectangleGreen.height + "px"
      },
      rectangleOrange: {
        width: rectangleOrange.width + "px",
        height: rectangleOrange.height + "px"
      },
      rectangleWhite: {
        width: rectangleWhite.width + "px",
        height: rectangleWhite.height + "px"
      },
      rectangleWhite_div: {
        fontSize: this.deviceZ.getHeight(32) + "px"
      },
      rectangleBigBlack: {
        width: rectangleBigBlack.width + "px",
        height: rectangleBigBlack.height + "px",
        marginBottom: this.deviceZ.getHeight(76) + "px"
      },
      rectanglesGray: {
        width: rectanglesGray.width + "px",
        height: rectanglesGray.height + "px"
      },
      rectangleGray1: {
        width: this.deviceZ.getWidth(147) + "px",
        fontSize: this.deviceZ.getHeight(14) + "px",
        paddingLeft: this.deviceZ.getWidth(8) + "px",
        paddingTop: this.deviceZ.getHeight(16) + "px"
      },
      rectangleGray2: {
        width: this.deviceZ.getWidth(110) + "px"
      },
      rectangleDarkGray: {
        width: rectangleDarkGray.width + "px",
        height: rectangleDarkGray.height + "px",
        fontSize: this.deviceZ.getHeight(16) + "px",
        margin: this.deviceZ.getHeight(78) + "px auto 0px auto"
      },
      rectanglesColor: {
        width: this.deviceZ.getWidth(widthFullScreen) + "px",
        marginTop: this.deviceZ.getHeight(50) + "px",
        paddingTop: this.deviceZ.getHeight(16) + "px",
        paddingBottom: this.deviceZ.getHeight(41) + "px"
      },
      rectangleCian: {
        width: rectangleCian.width + "px",
        height: rectangleCian.height + "px"
      },
      rectangleBlue: {
        width: rectangleBlue.width + "px",
        height: rectangleBlue.height + "px",
        marginLeft: this.deviceZ.getWidth(24) + "px",
        marginRight: this.deviceZ.getWidth(24) + "px"
      },
      rectanglePing: {
        width: rectanglePing.width + "px",
        height: rectanglePing.height + "px"
      }
    };
    return style;
  }
  desktopStylesLandscape() {
    const widthFullScreen = 1440;
    const rectanglesGray = this.deviceZ.getBox(1280, 96, true);
    const rectangleDarkGray = this.deviceZ.getBox(227, 64, true);
    const rectangleCian = this.deviceZ.getBox(407, 104, true);
    const rectangleBlue = this.deviceZ.getBox(540, 104, true);
    const rectanglePing = this.deviceZ.getBox(269, 104, true);
    const style = {
      rectangleGreen: {
        width: this.deviceZ.getWidth(widthFullScreen) + "px",
        height: this.deviceZ.getHeight(48, true) + "px"
      },
      rectangleOrange: {
        width: this.deviceZ.getWidth(widthFullScreen) + "px",
        height: this.deviceZ.getHeight(48, true) + "px"
      },
      rectangleWhite: {
        width: this.deviceZ.getWidth(widthFullScreen) + "px",
        height: this.deviceZ.getHeight(80, true) + "px"
      },
      rectangleWhite_div: {
        fontSize: this.deviceZ.getHeight(32) + "px"
      },
      rectangleBigBlack: {
        width: this.deviceZ.getWidth(widthFullScreen) + "px",
        height: this.deviceZ.getHeight(96, true) + "px",
        marginBottom: this.deviceZ.getHeight(110, true) + "px"
      },
      rectanglesGray: {
        width: rectanglesGray.width + "px",
        height: rectanglesGray.height + "px"
      },
      rectangleGray1: {
        width: this.deviceZ.getWidth(207, true) + "px",
        fontSize: this.deviceZ.getHeight(14, true) + "px",
        paddingLeft: this.deviceZ.getWidth(16, true) + "px",
        paddingTop: this.deviceZ.getHeight(16, true) + "px"
      },
      rectangleGray2: {
        width: this.deviceZ.getWidth(155, true) + "px"
      },
      rectangleDarkGray: {
        width: rectangleDarkGray.width + "px",
        height: rectangleDarkGray.height + "px",
        fontSize: this.deviceZ.getHeight(16, true) + "px",
        margin: this.deviceZ.getHeight(196, true) + "px auto 0px auto"
      },
      rectanglesColor: {
        width: this.deviceZ.getWidth(widthFullScreen) + "px",
        marginTop: this.deviceZ.getHeight(118, true) + "px",
        paddingTop: this.deviceZ.getHeight(24, true) + "px",
        paddingBottom: this.deviceZ.getHeight(40, true) + "px"
      },
      rectangleCian: {
        width: rectangleCian.width + "px",
        height: rectangleCian.height + "px"
      },
      rectangleBlue: {
        width: rectangleBlue.width + "px",
        height: rectangleBlue.height + "px",
        marginLeft: this.deviceZ.getWidth(32, true) + "px",
        marginRight: this.deviceZ.getWidth(32, true) + "px"
      },
      rectanglePing: {
        width: rectanglePing.width + "px",
        height: rectanglePing.height + "px"
      }
    };
    return style;
  }
};

// build/zeplin/index.js
var listener = new WZeplinEventListener();
var zeplinStyleObject = new LayoutScreenStyle(listener.deviceType);
function setStyleElements(styles) {
  const elementsIds = Object.keys(styles);
  const values = Object.values(styles);
  elementsIds.forEach((id, i) => {
    const element = document.getElementById(id);
    if (element) {
      const val = values[i];
      if (val) {
        const properties = Object.keys(val);
        const propertiesVals = Object.values(val);
        properties.forEach((prop, j) => {
          element.style[prop] = propertiesVals[j];
        });
      }
    }
  });
}
var callBackListener = (options) => {
  zeplinStyleObject.setDeviceZ(options.deviceType);
  const styles = zeplinStyleObject.getStyles(options.orientation);
  setStyleElements(styles);
};
callBackListener({
  orientation: listener.orientation,
  width: document.body.clientWidth,
  deviceType: listener.deviceType
});
listener.addListener(callBackListener);
//# sourceMappingURL=index.js.map
