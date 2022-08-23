import { WithRequiredProperty, ZeplinStyle } from 'web-zeplin-converter';
import type { Properties } from 'csstype';

interface StyleProps {
  zeplin_rectangleGreen: WithRequiredProperty<Properties, 'width' | 'height'>,
  zeplin_rectangleOrange: WithRequiredProperty<Properties, 'width' | 'height'>,
  zeplin_rectangleWhite:WithRequiredProperty<Properties, 'width' | 'height'>,
  zeplin_rectangleWhite_div: WithRequiredProperty<Properties, 'fontSize'>,
  zeplin_rectangleBigBlack:WithRequiredProperty<Properties, 'width' | 'height' | 'marginBottom'>,
  zeplin_rectanglesGray:WithRequiredProperty<Properties, 'width' | 'height'>,
  zeplin_rectangleDarkGray:WithRequiredProperty<Properties, 'width' | 'height'  | 'margin' | 'fontSize'>,
  zeplin_rectanglesColor:WithRequiredProperty<Properties, 'width' | 'paddingTop' | 'marginTop' | 'paddingBottom'>,
  zeplin_rectangleGray1:WithRequiredProperty<Properties, 'width' | 'fontSize' | 'paddingLeft' | 'paddingTop'>,
  zeplin_rectangleGray2:WithRequiredProperty<Properties, 'width'>,
  zeplin_rectangleCian: WithRequiredProperty<Properties, 'width' | 'height'>,
  zeplin_rectangleBlue:WithRequiredProperty<Properties, 'width' | 'height' | 'marginLeft' | 'marginRight'>,
  zeplin_rectanglePing: WithRequiredProperty<Properties, 'width' | 'height'>,
}

export class LayoutScreenStyle extends ZeplinStyle <StyleProps> {
  phoneStylesPortrait() {
    const widthFullScreen = 414;
    const zeplin_rectangleGreen = this.deviceZ.getBox(widthFullScreen, 48);
    const zeplin_rectangleOrange = this.deviceZ.getBox(widthFullScreen, 48);
    const zeplin_rectangleWhite = this.deviceZ.getBox(widthFullScreen, 80);
    const zeplin_rectangleBigBlack = this.deviceZ.getBox(widthFullScreen, 162);
    const zeplin_rectanglesGray = this.deviceZ.getBox(widthFullScreen, 96);
    const zeplin_rectangleDarkGray = this.deviceZ.getBox(222, 72);
    const zeplin_rectangleCian = this.deviceZ.getBox(124, 104);
    const zeplin_rectangleBlue = this.deviceZ.getBox(159, 104);
    const zeplin_rectanglePing = this.deviceZ.getBox(87, 104);
    const style: StyleProps = {
      zeplin_rectangleGreen: {
        width: zeplin_rectangleGreen.width + 'px',
        height: zeplin_rectangleGreen.height + 'px',
      },
      zeplin_rectangleOrange: {
        width: zeplin_rectangleOrange.width + 'px',
        height: zeplin_rectangleOrange.height + 'px',
      },
      zeplin_rectangleWhite: {
        width: zeplin_rectangleWhite.width + 'px',
        height: zeplin_rectangleWhite.height + 'px',
      },
      zeplin_rectangleWhite_div: {
        fontSize: this.deviceZ.getHeight(32) + 'px',
      },
      zeplin_rectangleBigBlack: {
        width: zeplin_rectangleBigBlack.width + 'px',
        height: zeplin_rectangleBigBlack.height + 'px',
        marginBottom: this.deviceZ.getHeight(48) + 'px',
      },
      zeplin_rectanglesGray: {
        width: zeplin_rectanglesGray.width + 'px',
        height: zeplin_rectanglesGray.height + 'px',
      },
      zeplin_rectangleGray1: {
        width: this.deviceZ.getWidth(207) + 'px',
        fontSize: this.deviceZ.getHeight(12) + 'px',
        paddingLeft: this.deviceZ.getWidth(16) + 'px',
        paddingTop: this.deviceZ.getHeight(16) + 'px',
      },
      zeplin_rectangleGray2: {
        width: this.deviceZ.getWidth(110) + 'px',
      },
      zeplin_rectangleDarkGray: {
        width: zeplin_rectangleDarkGray.width + 'px',
        height: zeplin_rectangleDarkGray.height + 'px',
        fontSize: this.deviceZ.getHeight(16) + 'px',
        margin: this.deviceZ.getHeight(84) + 'px auto 0px auto',
      },
      zeplin_rectanglesColor: {
        width: this.deviceZ.getWidth(widthFullScreen) + 'px',
        marginTop: this.deviceZ.getHeight(56) + 'px',
        paddingTop: this.deviceZ.getHeight(8) + 'px',
        paddingBottom: this.deviceZ.getHeight(8) + 'px',
      },
      zeplin_rectangleCian: {
        width: zeplin_rectangleCian.width + 'px',
        height: zeplin_rectangleCian.height + 'px',
      },
      zeplin_rectangleBlue: {
        width: zeplin_rectangleBlue.width + 'px',
        height: zeplin_rectangleBlue.height + 'px',
        marginLeft: this.deviceZ.getWidth(8) + 'px',
        marginRight: this.deviceZ.getWidth(8) + 'px',
      },
      zeplin_rectanglePing: {
        width: zeplin_rectanglePing.width + 'px',
        height: zeplin_rectanglePing.height + 'px',
      },
    };
    return style;
  }
  phoneStylesLandscape () {
    const widthFullScreen = 800;
    const zeplin_rectangleGreen = this.deviceZ.getBox(widthFullScreen, 48);
    const zeplin_rectangleOrange = this.deviceZ.getBox(widthFullScreen, 48);
    const zeplin_rectangleWhite = this.deviceZ.getBox(widthFullScreen, 80);
    const zeplin_rectangleBigBlack = this.deviceZ.getBox(widthFullScreen, 162);
    const zeplin_rectanglesGray = this.deviceZ.getBox(widthFullScreen, 96);
    const zeplin_rectangleDarkGray = this.deviceZ.getBox(429, 72);
    const zeplin_rectangleCian = this.deviceZ.getBox(240, 104);
    const zeplin_rectangleBlue = this.deviceZ.getBox(307, 104);
    const zeplin_rectanglePing = this.deviceZ.getBox(168, 104);
    const style: StyleProps = {
      zeplin_rectangleGreen: {
        width: zeplin_rectangleGreen.width + 'px',
        height: zeplin_rectangleGreen.height + 'px',
      },
      zeplin_rectangleOrange: {
        width: zeplin_rectangleOrange.width + 'px',
        height: zeplin_rectangleOrange.height + 'px',
      },
      zeplin_rectangleWhite: {
        width: zeplin_rectangleWhite.width + 'px',
        height: zeplin_rectangleWhite.height + 'px',
      },
      zeplin_rectangleWhite_div: {
        fontSize: this.deviceZ.getHeight(32) + 'px',
      },
      zeplin_rectangleBigBlack: {
        width: zeplin_rectangleBigBlack.width + 'px',
        height: zeplin_rectangleBigBlack.height + 'px',
        marginBottom: this.deviceZ.getHeight(48) + 'px',
      },
      zeplin_rectanglesGray: {
        width: zeplin_rectanglesGray.width + 'px',
        height: zeplin_rectanglesGray.height + 'px',
      },
      zeplin_rectangleGray1: {
        width: this.deviceZ.getWidth(400) + 'px',
        fontSize: this.deviceZ.getHeight(12) + 'px',
        paddingLeft: this.deviceZ.getWidth(16) + 'px',
        paddingTop: this.deviceZ.getHeight(16) + 'px',
      },
      zeplin_rectangleGray2: {
        width: this.deviceZ.getWidth(213) + 'px',
      },
      zeplin_rectangleDarkGray: {
        width: zeplin_rectangleDarkGray.width + 'px',
        height: zeplin_rectangleDarkGray.height + 'px',
        fontSize: this.deviceZ.getHeight(16) + 'px',
        margin: this.deviceZ.getHeight(84) + 'px auto 0px auto',
      },
      zeplin_rectanglesColor: {
        width: this.deviceZ.getWidth(widthFullScreen) + 'px',
        marginTop: this.deviceZ.getHeight(56) + 'px',
        paddingTop: this.deviceZ.getHeight(8) + 'px',
        paddingBottom: this.deviceZ.getHeight(8) + 'px',
      },
      zeplin_rectangleCian: {
        width: zeplin_rectangleCian.width + 'px',
        height: zeplin_rectangleCian.height + 'px',
      },
      zeplin_rectangleBlue: {
        width: zeplin_rectangleBlue.width + 'px',
        height: zeplin_rectangleBlue.height + 'px',
        marginLeft: this.deviceZ.getWidth(16) + 'px',
        marginRight: this.deviceZ.getWidth(16) + 'px',
      },
      zeplin_rectanglePing: {
        width: zeplin_rectanglePing.width + 'px',
        height: zeplin_rectanglePing.height + 'px',
      },
    };
    return style;
  }
  tabletStylesPortrait () {
    const widthFullScreen = 768;
    const zeplin_rectangleGreen = this.deviceZ.getBox(widthFullScreen, 48);
    const zeplin_rectangleOrange = this.deviceZ.getBox(widthFullScreen, 48);
    const zeplin_rectangleWhite = this.deviceZ.getBox(widthFullScreen, 80);
    const zeplin_rectangleBigBlack = this.deviceZ.getBox(widthFullScreen, 88);
    const zeplin_rectanglesGray = this.deviceZ.getBox(720, 86);
    const zeplin_rectangleDarkGray = this.deviceZ.getBox(195, 64);
    const zeplin_rectangleCian = this.deviceZ.getBox(224, 93);
    const zeplin_rectangleBlue = this.deviceZ.getBox(298, 93);
    const zeplin_rectanglePing = this.deviceZ.getBox(150, 93);
    const style: StyleProps = {
      zeplin_rectangleGreen: {
        width: zeplin_rectangleGreen.width + 'px',
        height: zeplin_rectangleGreen.height + 'px',
      },
      zeplin_rectangleOrange: {
        width: zeplin_rectangleOrange.width + 'px',
        height: zeplin_rectangleOrange.height + 'px',
      },
      zeplin_rectangleWhite: {
        width: zeplin_rectangleWhite.width + 'px',
        height: zeplin_rectangleWhite.height + 'px',
      },
      zeplin_rectangleWhite_div: {
        fontSize: this.deviceZ.getHeight(32) + 'px',
      },
      zeplin_rectangleBigBlack: {
        width: zeplin_rectangleBigBlack.width + 'px',
        height: zeplin_rectangleBigBlack.height + 'px',
        marginBottom: this.deviceZ.getHeight(80) + 'px',
      },
      zeplin_rectanglesGray: {
        width: zeplin_rectanglesGray.width + 'px',
        height: zeplin_rectanglesGray.height + 'px',
      },
      zeplin_rectangleGray1: {
        width: this.deviceZ.getWidth(147) + 'px',
        fontSize: this.deviceZ.getHeight(14) + 'px',
        paddingLeft: this.deviceZ.getWidth(8) + 'px',
        paddingTop: this.deviceZ.getHeight(16) + 'px',
      },
      zeplin_rectangleGray2: {
        width: this.deviceZ.getWidth(110) + 'px',
      },
      zeplin_rectangleDarkGray: {
        width: zeplin_rectangleDarkGray.width + 'px',
        height: zeplin_rectangleDarkGray.height + 'px',
        fontSize: this.deviceZ.getHeight(16) + 'px',
        margin: this.deviceZ.getHeight(288) + 'px auto 0px auto',
      },
      zeplin_rectanglesColor: {
        width: this.deviceZ.getWidth(widthFullScreen) + 'px',
        marginTop: this.deviceZ.getHeight(92) + 'px',
        paddingTop: this.deviceZ.getHeight(16) + 'px',
        paddingBottom: this.deviceZ.getHeight(41) + 'px',
      },
      zeplin_rectangleCian: {
        width: zeplin_rectangleCian.width + 'px',
        height: zeplin_rectangleCian.height + 'px',
      },
      zeplin_rectangleBlue: {
        width: zeplin_rectangleBlue.width + 'px',
        height: zeplin_rectangleBlue.height + 'px',
        marginLeft: this.deviceZ.getWidth(24) + 'px',
        marginRight: this.deviceZ.getWidth(24) + 'px',
      },
      zeplin_rectanglePing: {
        width: zeplin_rectanglePing.width + 'px',
        height: zeplin_rectanglePing.height + 'px',
      },
    };
    return style;
  }
  tabletStylesLandscape () {
    const widthFullScreen = 1024;
    const zeplin_rectangleGreen = this.deviceZ.getBox(widthFullScreen, 48);
    const zeplin_rectangleOrange = this.deviceZ.getBox(widthFullScreen, 48);
    const zeplin_rectangleWhite = this.deviceZ.getBox(widthFullScreen, 80);
    const zeplin_rectangleBigBlack = this.deviceZ.getBox(widthFullScreen, 88);
    const zeplin_rectanglesGray = this.deviceZ.getBox(912, 86);
    const zeplin_rectangleDarkGray = this.deviceZ.getBox(195, 64);
    const zeplin_rectangleCian = this.deviceZ.getBox(289, 93);
    const zeplin_rectangleBlue = this.deviceZ.getBox(384, 93);
    const zeplin_rectanglePing = this.deviceZ.getBox(191, 93);
    const style: StyleProps = {
      zeplin_rectangleGreen: {
        width: zeplin_rectangleGreen.width + 'px',
        height: zeplin_rectangleGreen.height + 'px',
      },
      zeplin_rectangleOrange: {
        width: zeplin_rectangleOrange.width + 'px',
        height: zeplin_rectangleOrange.height + 'px',
      },
      zeplin_rectangleWhite: {
        width: zeplin_rectangleWhite.width + 'px',
        height: zeplin_rectangleWhite.height + 'px',
      },
      zeplin_rectangleWhite_div: {
        fontSize: this.deviceZ.getHeight(32) + 'px',
      },
      zeplin_rectangleBigBlack: {
        width: zeplin_rectangleBigBlack.width + 'px',
        height: zeplin_rectangleBigBlack.height + 'px',
        marginBottom: this.deviceZ.getHeight(76) + 'px',
      },
      zeplin_rectanglesGray: {
        width: zeplin_rectanglesGray.width + 'px',
        height: zeplin_rectanglesGray.height + 'px',
      },
      zeplin_rectangleGray1: {
        width: this.deviceZ.getWidth(147) + 'px',
        fontSize: this.deviceZ.getHeight(14) + 'px',
        paddingLeft: this.deviceZ.getWidth(8) + 'px',
        paddingTop: this.deviceZ.getHeight(16) + 'px',
      },
      zeplin_rectangleGray2: {
        width: this.deviceZ.getWidth(110) + 'px',
      },
      zeplin_rectangleDarkGray: {
        width: zeplin_rectangleDarkGray.width + 'px',
        height: zeplin_rectangleDarkGray.height + 'px',
        fontSize: this.deviceZ.getHeight(16) + 'px',
        margin: this.deviceZ.getHeight(78) + 'px auto 0px auto',
      },
      zeplin_rectanglesColor: {
        width: this.deviceZ.getWidth(widthFullScreen) + 'px',
        marginTop: this.deviceZ.getHeight(50) + 'px',
        paddingTop: this.deviceZ.getHeight(16) + 'px',
        paddingBottom: this.deviceZ.getHeight(41) + 'px',
      },
      zeplin_rectangleCian: {
        width: zeplin_rectangleCian.width + 'px',
        height: zeplin_rectangleCian.height + 'px',
      },
      zeplin_rectangleBlue: {
        width: zeplin_rectangleBlue.width + 'px',
        height: zeplin_rectangleBlue.height + 'px',
        marginLeft: this.deviceZ.getWidth(24) + 'px',
        marginRight: this.deviceZ.getWidth(24) + 'px',
      },
      zeplin_rectanglePing: {
        width: zeplin_rectanglePing.width + 'px',
        height: zeplin_rectanglePing.height + 'px',
      },
    };
    return style;
  }
  desktopStylesLandscape() {
    const widthFullScreen = 1440;
    const zeplin_rectanglesGray = this.deviceZ.getBox(1280, 96, true);
    const zeplin_rectangleDarkGray = this.deviceZ.getBox(227, 64, true);
    const zeplin_rectangleCian = this.deviceZ.getBox(407, 104, true);
    const zeplin_rectangleBlue = this.deviceZ.getBox(540, 104, true);
    const zeplin_rectanglePing = this.deviceZ.getBox(269, 104, true);
    const style: StyleProps = {
      zeplin_rectangleGreen: {
        width: this.deviceZ.getWidth(widthFullScreen) + 'px',
        height:  this.deviceZ.getHeight(48, true) + 'px',
      },
      zeplin_rectangleOrange: {
        width: this.deviceZ.getWidth(widthFullScreen) + 'px',
        height:  this.deviceZ.getHeight(48, true) + 'px',
      },
      zeplin_rectangleWhite: {
        width: this.deviceZ.getWidth(widthFullScreen) + 'px',
        height:  this.deviceZ.getHeight(80, true) + 'px',
      },
      zeplin_rectangleWhite_div: {
        fontSize: this.deviceZ.getHeight(32) + 'px',
      },
      zeplin_rectangleBigBlack: {
        width: this.deviceZ.getWidth(widthFullScreen) + 'px',
        height:  this.deviceZ.getHeight(96, true) + 'px',
        marginBottom: this.deviceZ.getHeight(110, true) + 'px',
      },
      zeplin_rectanglesGray: {
        width: zeplin_rectanglesGray.width + 'px',
        height: zeplin_rectanglesGray.height + 'px',
      },
      zeplin_rectangleGray1: {
        width: this.deviceZ.getWidth(207, true) + 'px',
        fontSize: this.deviceZ.getHeight(14, true) + 'px',
        paddingLeft: this.deviceZ.getWidth(16, true) + 'px',
        paddingTop: this.deviceZ.getHeight(16, true) + 'px',
      },
      zeplin_rectangleGray2: {
        width: this.deviceZ.getWidth(155, true) + 'px',
      },
      zeplin_rectangleDarkGray: {
        width: zeplin_rectangleDarkGray.width + 'px',
        height: zeplin_rectangleDarkGray.height + 'px',
        fontSize: this.deviceZ.getHeight(16, true) + 'px',
        margin: this.deviceZ.getHeight(196, true) + 'px auto 0px auto',
      },
      zeplin_rectanglesColor: {
        width: this.deviceZ.getWidth(widthFullScreen) + 'px',
        marginTop: this.deviceZ.getHeight(118, true) + 'px',
        paddingTop: this.deviceZ.getHeight(24, true) + 'px',
        paddingBottom: this.deviceZ.getHeight(40, true) + 'px',
      },
      zeplin_rectangleCian: {
        width: zeplin_rectangleCian.width + 'px',
        height: zeplin_rectangleCian.height + 'px',
      },
      zeplin_rectangleBlue: {
        width: zeplin_rectangleBlue.width + 'px',
        height: zeplin_rectangleBlue.height + 'px',
        marginLeft: this.deviceZ.getWidth(32, true) + 'px',
        marginRight: this.deviceZ.getWidth(32, true) + 'px',
      },
      zeplin_rectanglePing: {
        width: zeplin_rectanglePing.width + 'px',
        height: zeplin_rectanglePing.height + 'px',
      },
    };
    return style;
  }
}
