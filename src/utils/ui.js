import { Toast } from 'vant';
import { commonErrorMessage } from 'helper/http-error-message';

export function commonTip(msg) {
  const message = msg || commonErrorMessage[1];
  Toast.fail(message);
}
