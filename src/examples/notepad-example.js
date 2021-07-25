/**
 * @author Christian P. Byrne
 *
 */

import NotepadPage from "../../page-templates/notepad/notepad.js";

function renderNotepad() {
  const notepad = new NotepadPage("Notepad", "Your Work");
  
  notepad.addLeft([
    notepad.page.component.searchField({
      boxArgs: ["Search Notepads", "FIND"],
      inputFields: [
        { type: "text", placeholder: "enter keyword..." },
        { id: "searchWork", value: "Search" },
      ],
    }),
    notepad.page.component.searchField({
      boxArgs: ["Save Work", "SAVE"],
      inputFields: [{ id: "save", value: "Save" }],
    }),
  ]);
  notepad.addRight(notepad.page.component.vhsClock());
}

export default renderNotepad;
