import {Component, Vue} from 'vue-property-decorator';
import {ChecklistElement} from "@/store";

@Component
export default class TranslationMixin extends Vue {
  public translate<T>(element: ChecklistElement<T>): T {
    // TODO: replace 'en' with fallback locale.
    return element[this.$i18n.locale] || element['en']
  }
}