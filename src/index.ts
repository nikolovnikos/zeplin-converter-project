import { WZeplinEventListener, ZeplinWebEventDetails, devicesZTypes  } from 'web-zeplin-converter';
import { LayoutScreenStyle } from './LayoutScreenStyle';

const IPHONE11 = {
  model: 'iphone11',
  widthP: 414,
  widthL: 800,
  heightP: 896,
  heightL: 400,
};
const IPAD = {
  model: 'ipad',
  widthP: 768,
  widthL: 1024,
  heightP: 1024,
  heightL: 768,
};
const DESKTOP_1440 = {
  model: 'dekstop1440',
  widthP: 1440,
  widthL: 1440,
  heightP: 1024,
  heightL: 1024,
};

const listener = new WZeplinEventListener();
const deviceZM: devicesZTypes = { phone: IPHONE11, tablet: IPAD, desktop: DESKTOP_1440 };
const zeplinStyleObject = new LayoutScreenStyle(listener.deviceType, deviceZM);

const callBackListener = (options: ZeplinWebEventDetails) => {
  zeplinStyleObject.setDeviceZ(options.deviceType);
  const styles = zeplinStyleObject.getStyles(options.orientation);
  zeplinStyleObject.setStylesToElements(styles);
}
callBackListener({
  orientation: listener.orientation,
  width: document.body.clientWidth,
  deviceType: listener.deviceType,
});
listener.addListener(callBackListener);
