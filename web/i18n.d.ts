import 'i18next';
import { TranslationTypes } from './shared/config/i18n/translations/translation.types';

declare module 'i18next' {
    interface CustomTypeOptions {
        resources: TranslationTypes;
    }
}
