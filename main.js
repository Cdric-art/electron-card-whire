const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindows() {
	const win = new BrowserWindow({
		width: 1200,
		height: 800,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js')
		}
	})

	win.loadURL("http://localhost:3000/")
}

app.whenReady().then(() => {
	createWindows()

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindows()
		}
	})

	app.on('window-all-closed', () => {
		if (process.platform !== 'darwin') {
			app.quit()
		}
	})
})
