// 预留一个 统一配置UI的地方，比如以后换底层 ui 库了，可以在这里做桥接
import { Button, Dialog, Empty, Icon, Image, Loading, Popover, Popup } from 'vant';

const BaseUi = [Button, Dialog, Empty, Icon, Image, Loading, Popover, Popup];

export default BaseUi;
