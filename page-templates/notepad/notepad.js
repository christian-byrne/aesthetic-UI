/**
 * @author Christian P. Byrne
 */

import { TemplateEngine } from "../../src/aesthetic-ui.js";

/**
 * @classdesc Dashboard page constructor for Ostaa app.
 */
class NotepadPage {
  constructor(mainTitle, controlsTitle, templateOptions) {
    document.title = mainTitle;
    this.page = new TemplateEngine(controlsTitle, templateOptions);
    this.page.css.update("./page-templates/notepad/notepad.css");
    this.page.layout.useFooter();

    this.page.layout.addRight([
      this.page.component.notepad(),
    ]);

    this.addLeft = this.page.layout.addLeft;
    this.addRight = this.page.layout.addRight;
    this.component = this.page.component;
    this.layout = this.page.layout;
    this.tag = this.page.tag;
    this.css = this.page.css;
    this.clear = this.page.clear;
  }

  get style() {
    return this.page.styleSheet;
  }
}

export default NotepadPage;
