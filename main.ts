import { App, Editor, Plugin, Notice, MarkdownView } from 'obsidian';

interface MyPluginSettings {
    // Définissez vos paramètres ici si nécessaire.
}


const DEFAULT_SETTINGS: MyPluginSettings = {
    // Définissez les valeurs par défaut de vos paramètres ici si nécessaire.
}

export default class SommairePlugin extends Plugin {
    settings: MyPluginSettings;

    async onload() {
        await this.loadSettings();

		// Dans votre gestionnaire de bouton pour générer le sommaire
		this.addRibbonIcon('dice', 'Faire un sommaire', () => {
			const activeView = this.app.workspace.getActiveViewOfType(MarkdownView);
			if (activeView) {
				const editor = activeView.editor;

				// Obtenez le texte du sommaire
				const sommaireText = this.generateSommaire(editor);

				if (sommaireText) {
					const currentText = editor.getValue();

					// Trouvez la position où insérer le sommaire (juste après les propriétés s'il y en a)
					const insertionIndex = currentText.indexOf("---", currentText.indexOf("---") + 3); // Recherche de la 2ème occurrence de "---"

					if (insertionIndex !== -1) {
						// Insérez le sommaire après les propriétés
						const updatedText =
							currentText.slice(0, insertionIndex + 4) + sommaireText + "\n" + currentText.slice(insertionIndex + 3);
						editor.setValue(updatedText);
					} else {
						// S'il n'y a pas de propriétés, insérez le sommaire au début du document
						editor.replaceRange(sommaireText, { line: 0, ch: 0 });
					}
				} else {
					new Notice("Aucun titre de niveau 1 trouvé dans le document.");
				}
			} else {
				new Notice("Aucun éditeur Markdown ouvert.");
			}
		});


    }

    onunload() {
        // Code à exécuter lors du déchargement du plugin.
    }

    async loadSettings() {
        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    }

    async saveSettings() {
        await this.saveData(this.settings);
    }

    // Méthode pour vérifier la présence d'un titre de niveau 1.
    hasTitle1(editor: Editor): boolean {
        const lines = editor.getValue().split('\n');
        for (const line of lines) {
            if (line.trim().startsWith("# ")) {
                return true;
            }
        }
        return false;
    }

    // Méthode pour obtenir le texte du titre de niveau 1.
    getTitleText(editor: Editor): string | null {
        const lines = editor.getValue().split('\n');
        for (const line of lines) {
            const trimmedLine = line.trim();
            if (trimmedLine.startsWith("# ") && trimmedLine.length > 2) {
                return trimmedLine.slice(2); // Exclut le préfixe "# "
            }
        }
        return null;
    }


	generateSommaire(editor: Editor): string | null {
		const lines = editor.getValue().split('\n');
		const sommaire: string[] = [];

		for (let i = 0; i < lines.length; i++) {
			const line = lines[i].trim();
			if (line.startsWith("# ") && line.length > 2 && !line.startsWith("# [")) {
				const titleText = line.slice(2);
				const escapedTitleText = encodeURIComponent(titleText);
				sommaire.push(`# [${titleText}](#${escapedTitleText})\n`);
			}
			if (line.startsWith("## ") && line.length > 3 && !line.startsWith("## [")) {
				const titleText = line.slice(3);
				const escapedTitleText = encodeURIComponent(titleText);
				sommaire.push(`## [${titleText}](##${escapedTitleText})\n`);
			}
			if (line.startsWith("### ") && line.length > 4 && !line.startsWith("### [")) {
				const titleText = line.slice(4);
				const escapedTitleText = encodeURIComponent(titleText);
				sommaire.push(`### [${titleText}](###${escapedTitleText})\n`);
			}
			if (line.startsWith("#### ") && line.length > 3 && !line.startsWith("#### [")) {
				const titleText = line.slice(5);
				const escapedTitleText = encodeURIComponent(titleText);
				sommaire.push(`#### [${titleText}](####${escapedTitleText})\n`);
			}
			if (line.startsWith("##### ") && line.length > 3 && !line.startsWith("##### [")) {
				const titleText = line.slice(6);
				const escapedTitleText = encodeURIComponent(titleText);
				sommaire.push(`##### [${titleText}](#####${escapedTitleText})\n`);
			}
			if (line.startsWith("###### ") && line.length > 3 && !line.startsWith("###### [")) {
				const titleText = line.slice(7);
				const escapedTitleText = encodeURIComponent(titleText);
				sommaire.push(`###### [${titleText}](######${escapedTitleText})\n`);
			}
		}

		if (sommaire.length > 0) {
			return sommaire.join('\n');
		} else {
			console.log("Aucun titre de niveau 1 trouvé dans le document.");
		}

		return null;
	}


}