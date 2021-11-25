// 全局翻译
import { createI18n } from 'vue-i18n';
import { Locale } from 'vant';

import { getLocale } from '@/utils';
import localeLang from '@/locale';

// 获取缓存默认语言
const localeStr = getLocale();

// vant初始化语言
Locale.use(localeStr, localeLang[localeStr].vant);

export default createI18n({
  locale: localeStr,
  messages: localeLang,
  // silentTranslationWarn: true,
});
