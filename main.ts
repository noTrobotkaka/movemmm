import { Notice, Plugin } from 'obsidian';

export default class MyPlugin extends Plugin {
	async onload() {
		this.addRibbonIcon("cigarette","Movemmm into exactlly",() => {
			new Notice("Movemmm!")
		});
		this.addCommand({
			id: "movemmm",
			name: "move file to",
			checkCallback: (checking ) => {
				const isPastDark = new Date().getHours() >= 13;
				if(isPastDark){
					if(!checking){
						new Notice("Movemmm!")
					}
					return true;
				}
				return false;
			},
		});
	}

	onunload() {
		new Notice("Disable the movemmm plugin!")
	}
}
