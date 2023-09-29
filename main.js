/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => SommairePlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  // Définissez les valeurs par défaut de vos paramètres ici si nécessaire.
};
var SommairePlugin = class extends import_obsidian.Plugin {
  async onload() {
    await this.loadSettings();
    this.addRibbonIcon("dice", "Faire un sommaire", () => {
      const activeView = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
      if (activeView) {
        const editor = activeView.editor;
        const sommaireText = this.generateSommaire(editor);
        if (sommaireText) {
          const currentText = editor.getValue();
          const insertionIndex = currentText.indexOf("---", currentText.indexOf("---") + 3);
          if (insertionIndex !== -1) {
            const updatedText = currentText.slice(0, insertionIndex + 4) + sommaireText + "\n" + currentText.slice(insertionIndex + 3);
            editor.setValue(updatedText);
          } else {
            editor.replaceRange(sommaireText, { line: 0, ch: 0 });
          }
        } else {
          new import_obsidian.Notice("Aucun titre de niveau 1 trouv\xE9 dans le document.");
        }
      } else {
        new import_obsidian.Notice("Aucun \xE9diteur Markdown ouvert.");
      }
    });
  }
  onunload() {
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  // Méthode pour vérifier la présence d'un titre de niveau 1.
  hasTitle1(editor) {
    const lines = editor.getValue().split("\n");
    for (const line of lines) {
      if (line.trim().startsWith("# ")) {
        return true;
      }
    }
    return false;
  }
  // Méthode pour obtenir le texte du titre de niveau 1.
  getTitleText(editor) {
    const lines = editor.getValue().split("\n");
    for (const line of lines) {
      const trimmedLine = line.trim();
      if (trimmedLine.startsWith("# ") && trimmedLine.length > 2) {
        return trimmedLine.slice(2);
      }
    }
    return null;
  }
  generateSommaire(editor) {
    const lines = editor.getValue().split("\n");
    const sommaire = [];
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith("# ") && line.length > 2 && !line.startsWith("# [")) {
        const titleText = line.slice(2);
        const escapedTitleText = encodeURIComponent(titleText);
        sommaire.push(`# [${titleText}](#${escapedTitleText})
`);
      }
      if (line.startsWith("## ") && line.length > 3 && !line.startsWith("## [")) {
        const titleText = line.slice(3);
        const escapedTitleText = encodeURIComponent(titleText);
        sommaire.push(`## [${titleText}](##${escapedTitleText})
`);
      }
      if (line.startsWith("### ") && line.length > 4 && !line.startsWith("### [")) {
        const titleText = line.slice(4);
        const escapedTitleText = encodeURIComponent(titleText);
        sommaire.push(`### [${titleText}](###${escapedTitleText})
`);
      }
      if (line.startsWith("#### ") && line.length > 3 && !line.startsWith("#### [")) {
        const titleText = line.slice(5);
        const escapedTitleText = encodeURIComponent(titleText);
        sommaire.push(`#### [${titleText}](####${escapedTitleText})
`);
      }
      if (line.startsWith("##### ") && line.length > 3 && !line.startsWith("##### [")) {
        const titleText = line.slice(6);
        const escapedTitleText = encodeURIComponent(titleText);
        sommaire.push(`##### [${titleText}](#####${escapedTitleText})
`);
      }
      if (line.startsWith("###### ") && line.length > 3 && !line.startsWith("###### [")) {
        const titleText = line.slice(7);
        const escapedTitleText = encodeURIComponent(titleText);
        sommaire.push(`###### [${titleText}](######${escapedTitleText})
`);
      }
    }
    if (sommaire.length > 0) {
      return sommaire.join("\n");
    } else {
      console.log("Aucun titre de niveau 1 trouv\xE9 dans le document.");
    }
    return null;
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQXBwLCBFZGl0b3IsIFBsdWdpbiwgTm90aWNlLCBNYXJrZG93blZpZXcgfSBmcm9tICdvYnNpZGlhbic7XG5cbmludGVyZmFjZSBNeVBsdWdpblNldHRpbmdzIHtcbiAgICAvLyBEXHUwMEU5ZmluaXNzZXogdm9zIHBhcmFtXHUwMEU4dHJlcyBpY2kgc2kgblx1MDBFOWNlc3NhaXJlLlxufVxuXG5jb25zdCBERUZBVUxUX1NFVFRJTkdTOiBNeVBsdWdpblNldHRpbmdzID0ge1xuICAgIC8vIERcdTAwRTlmaW5pc3NleiBsZXMgdmFsZXVycyBwYXIgZFx1MDBFOWZhdXQgZGUgdm9zIHBhcmFtXHUwMEU4dHJlcyBpY2kgc2kgblx1MDBFOWNlc3NhaXJlLlxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb21tYWlyZVBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG4gICAgc2V0dGluZ3M6IE15UGx1Z2luU2V0dGluZ3M7XG5cbiAgICBhc3luYyBvbmxvYWQoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKCk7XG5cblx0XHQvLyBEYW5zIHZvdHJlIGdlc3Rpb25uYWlyZSBkZSBib3V0b24gcG91ciBnXHUwMEU5blx1MDBFOXJlciBsZSBzb21tYWlyZVxuXHRcdHRoaXMuYWRkUmliYm9uSWNvbignZGljZScsICdGYWlyZSB1biBzb21tYWlyZScsICgpID0+IHtcblx0XHRcdGNvbnN0IGFjdGl2ZVZpZXcgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpO1xuXHRcdFx0aWYgKGFjdGl2ZVZpZXcpIHtcblx0XHRcdFx0Y29uc3QgZWRpdG9yID0gYWN0aXZlVmlldy5lZGl0b3I7XG5cblx0XHRcdFx0Ly8gT2J0ZW5leiBsZSB0ZXh0ZSBkdSBzb21tYWlyZVxuXHRcdFx0XHRjb25zdCBzb21tYWlyZVRleHQgPSB0aGlzLmdlbmVyYXRlU29tbWFpcmUoZWRpdG9yKTtcblxuXHRcdFx0XHRpZiAoc29tbWFpcmVUZXh0KSB7XG5cdFx0XHRcdFx0Y29uc3QgY3VycmVudFRleHQgPSBlZGl0b3IuZ2V0VmFsdWUoKTtcblxuXHRcdFx0XHRcdC8vIFRyb3V2ZXogbGEgcG9zaXRpb24gb1x1MDBGOSBpbnNcdTAwRTlyZXIgbGUgc29tbWFpcmUgKGp1c3RlIGFwclx1MDBFOHMgbGVzIHByb3ByaVx1MDBFOXRcdTAwRTlzIHMnaWwgeSBlbiBhKVxuXHRcdFx0XHRcdGNvbnN0IGluc2VydGlvbkluZGV4ID0gY3VycmVudFRleHQuaW5kZXhPZihcIi0tLVwiLCBjdXJyZW50VGV4dC5pbmRleE9mKFwiLS0tXCIpICsgMyk7IC8vIFJlY2hlcmNoZSBkZSBsYSAyXHUwMEU4bWUgb2NjdXJyZW5jZSBkZSBcIi0tLVwiXG5cblx0XHRcdFx0XHRpZiAoaW5zZXJ0aW9uSW5kZXggIT09IC0xKSB7XG5cdFx0XHRcdFx0XHQvLyBJbnNcdTAwRTlyZXogbGUgc29tbWFpcmUgYXByXHUwMEU4cyBsZXMgcHJvcHJpXHUwMEU5dFx1MDBFOXNcblx0XHRcdFx0XHRcdGNvbnN0IHVwZGF0ZWRUZXh0ID1cblx0XHRcdFx0XHRcdFx0Y3VycmVudFRleHQuc2xpY2UoMCwgaW5zZXJ0aW9uSW5kZXggKyA0KSArIHNvbW1haXJlVGV4dCArIFwiXFxuXCIgKyBjdXJyZW50VGV4dC5zbGljZShpbnNlcnRpb25JbmRleCArIDMpO1xuXHRcdFx0XHRcdFx0ZWRpdG9yLnNldFZhbHVlKHVwZGF0ZWRUZXh0KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gUydpbCBuJ3kgYSBwYXMgZGUgcHJvcHJpXHUwMEU5dFx1MDBFOXMsIGluc1x1MDBFOXJleiBsZSBzb21tYWlyZSBhdSBkXHUwMEU5YnV0IGR1IGRvY3VtZW50XG5cdFx0XHRcdFx0XHRlZGl0b3IucmVwbGFjZVJhbmdlKHNvbW1haXJlVGV4dCwgeyBsaW5lOiAwLCBjaDogMCB9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bmV3IE5vdGljZShcIkF1Y3VuIHRpdHJlIGRlIG5pdmVhdSAxIHRyb3V2XHUwMEU5IGRhbnMgbGUgZG9jdW1lbnQuXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRuZXcgTm90aWNlKFwiQXVjdW4gXHUwMEU5ZGl0ZXVyIE1hcmtkb3duIG91dmVydC5cIik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblxuICAgIH1cblxuICAgIG9udW5sb2FkKCkge1xuICAgICAgICAvLyBDb2RlIFx1MDBFMCBleFx1MDBFOWN1dGVyIGxvcnMgZHUgZFx1MDBFOWNoYXJnZW1lbnQgZHUgcGx1Z2luLlxuICAgIH1cblxuICAgIGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfU0VUVElOR1MsIGF3YWl0IHRoaXMubG9hZERhdGEoKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2F2ZVNldHRpbmdzKCkge1xuICAgICAgICBhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xuICAgIH1cblxuICAgIC8vIE1cdTAwRTl0aG9kZSBwb3VyIHZcdTAwRTlyaWZpZXIgbGEgcHJcdTAwRTlzZW5jZSBkJ3VuIHRpdHJlIGRlIG5pdmVhdSAxLlxuICAgIGhhc1RpdGxlMShlZGl0b3I6IEVkaXRvcik6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBsaW5lcyA9IGVkaXRvci5nZXRWYWx1ZSgpLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XG4gICAgICAgICAgICBpZiAobGluZS50cmltKCkuc3RhcnRzV2l0aChcIiMgXCIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIE1cdTAwRTl0aG9kZSBwb3VyIG9idGVuaXIgbGUgdGV4dGUgZHUgdGl0cmUgZGUgbml2ZWF1IDEuXG4gICAgZ2V0VGl0bGVUZXh0KGVkaXRvcjogRWRpdG9yKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgICAgIGNvbnN0IGxpbmVzID0gZWRpdG9yLmdldFZhbHVlKCkuc3BsaXQoJ1xcbicpO1xuICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHRyaW1tZWRMaW5lID0gbGluZS50cmltKCk7XG4gICAgICAgICAgICBpZiAodHJpbW1lZExpbmUuc3RhcnRzV2l0aChcIiMgXCIpICYmIHRyaW1tZWRMaW5lLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJpbW1lZExpbmUuc2xpY2UoMik7IC8vIEV4Y2x1dCBsZSBwclx1MDBFOWZpeGUgXCIjIFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG5cblx0Z2VuZXJhdGVTb21tYWlyZShlZGl0b3I6IEVkaXRvcik6IHN0cmluZyB8IG51bGwge1xuXHRcdGNvbnN0IGxpbmVzID0gZWRpdG9yLmdldFZhbHVlKCkuc3BsaXQoJ1xcbicpO1xuXHRcdGNvbnN0IHNvbW1haXJlOiBzdHJpbmdbXSA9IFtdO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgbGluZSA9IGxpbmVzW2ldLnRyaW0oKTtcblx0XHRcdGlmIChsaW5lLnN0YXJ0c1dpdGgoXCIjIFwiKSAmJiBsaW5lLmxlbmd0aCA+IDIgJiYgIWxpbmUuc3RhcnRzV2l0aChcIiMgW1wiKSkge1xuXHRcdFx0XHRjb25zdCB0aXRsZVRleHQgPSBsaW5lLnNsaWNlKDIpO1xuXHRcdFx0XHRjb25zdCBlc2NhcGVkVGl0bGVUZXh0ID0gZW5jb2RlVVJJQ29tcG9uZW50KHRpdGxlVGV4dCk7XG5cdFx0XHRcdHNvbW1haXJlLnB1c2goYCMgWyR7dGl0bGVUZXh0fV0oIyR7ZXNjYXBlZFRpdGxlVGV4dH0pXFxuYCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAobGluZS5zdGFydHNXaXRoKFwiIyMgXCIpICYmIGxpbmUubGVuZ3RoID4gMyAmJiAhbGluZS5zdGFydHNXaXRoKFwiIyMgW1wiKSkge1xuXHRcdFx0XHRjb25zdCB0aXRsZVRleHQgPSBsaW5lLnNsaWNlKDMpO1xuXHRcdFx0XHRjb25zdCBlc2NhcGVkVGl0bGVUZXh0ID0gZW5jb2RlVVJJQ29tcG9uZW50KHRpdGxlVGV4dCk7XG5cdFx0XHRcdHNvbW1haXJlLnB1c2goYCMjIFske3RpdGxlVGV4dH1dKCMjJHtlc2NhcGVkVGl0bGVUZXh0fSlcXG5gKTtcblx0XHRcdH1cblx0XHRcdGlmIChsaW5lLnN0YXJ0c1dpdGgoXCIjIyMgXCIpICYmIGxpbmUubGVuZ3RoID4gNCAmJiAhbGluZS5zdGFydHNXaXRoKFwiIyMjIFtcIikpIHtcblx0XHRcdFx0Y29uc3QgdGl0bGVUZXh0ID0gbGluZS5zbGljZSg0KTtcblx0XHRcdFx0Y29uc3QgZXNjYXBlZFRpdGxlVGV4dCA9IGVuY29kZVVSSUNvbXBvbmVudCh0aXRsZVRleHQpO1xuXHRcdFx0XHRzb21tYWlyZS5wdXNoKGAjIyMgWyR7dGl0bGVUZXh0fV0oIyMjJHtlc2NhcGVkVGl0bGVUZXh0fSlcXG5gKTtcblx0XHRcdH1cblx0XHRcdGlmIChsaW5lLnN0YXJ0c1dpdGgoXCIjIyMjIFwiKSAmJiBsaW5lLmxlbmd0aCA+IDMgJiYgIWxpbmUuc3RhcnRzV2l0aChcIiMjIyMgW1wiKSkge1xuXHRcdFx0XHRjb25zdCB0aXRsZVRleHQgPSBsaW5lLnNsaWNlKDUpO1xuXHRcdFx0XHRjb25zdCBlc2NhcGVkVGl0bGVUZXh0ID0gZW5jb2RlVVJJQ29tcG9uZW50KHRpdGxlVGV4dCk7XG5cdFx0XHRcdHNvbW1haXJlLnB1c2goYCMjIyMgWyR7dGl0bGVUZXh0fV0oIyMjIyR7ZXNjYXBlZFRpdGxlVGV4dH0pXFxuYCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAobGluZS5zdGFydHNXaXRoKFwiIyMjIyMgXCIpICYmIGxpbmUubGVuZ3RoID4gMyAmJiAhbGluZS5zdGFydHNXaXRoKFwiIyMjIyMgW1wiKSkge1xuXHRcdFx0XHRjb25zdCB0aXRsZVRleHQgPSBsaW5lLnNsaWNlKDYpO1xuXHRcdFx0XHRjb25zdCBlc2NhcGVkVGl0bGVUZXh0ID0gZW5jb2RlVVJJQ29tcG9uZW50KHRpdGxlVGV4dCk7XG5cdFx0XHRcdHNvbW1haXJlLnB1c2goYCMjIyMjIFske3RpdGxlVGV4dH1dKCMjIyMjJHtlc2NhcGVkVGl0bGVUZXh0fSlcXG5gKTtcblx0XHRcdH1cblx0XHRcdGlmIChsaW5lLnN0YXJ0c1dpdGgoXCIjIyMjIyMgXCIpICYmIGxpbmUubGVuZ3RoID4gMyAmJiAhbGluZS5zdGFydHNXaXRoKFwiIyMjIyMjIFtcIikpIHtcblx0XHRcdFx0Y29uc3QgdGl0bGVUZXh0ID0gbGluZS5zbGljZSg3KTtcblx0XHRcdFx0Y29uc3QgZXNjYXBlZFRpdGxlVGV4dCA9IGVuY29kZVVSSUNvbXBvbmVudCh0aXRsZVRleHQpO1xuXHRcdFx0XHRzb21tYWlyZS5wdXNoKGAjIyMjIyMgWyR7dGl0bGVUZXh0fV0oIyMjIyMjJHtlc2NhcGVkVGl0bGVUZXh0fSlcXG5gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoc29tbWFpcmUubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIHNvbW1haXJlLmpvaW4oJ1xcbicpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkF1Y3VuIHRpdHJlIGRlIG5pdmVhdSAxIHRyb3V2XHUwMEU5IGRhbnMgbGUgZG9jdW1lbnQuXCIpO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblxufSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBMEQ7QUFNMUQsSUFBTSxtQkFBcUM7QUFBQTtBQUUzQztBQUVBLElBQXFCLGlC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
