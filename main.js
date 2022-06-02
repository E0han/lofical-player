const { app, BrowserWindow, contextBridge, ipcMain, nativeTheme} = require('electron')
const path=require('path')
const url = require('url')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 600,
      height: 600,
      webPreferences:{
          preload: './preload.js'
      }
    })
    
    win.loadFile(
        "./build/index.html"
    )  // load the index.html of the app.
    
    ipcMain.handle('dark-mode:toggle', () => {
        if (nativeTheme.shouldUseDarkColors) {
          nativeTheme.themeSource = 'light'
        } else {
          nativeTheme.themeSource = 'dark'
        }
        return nativeTheme.shouldUseDarkColors
      })
    
      ipcMain.handle('dark-mode:system', () => {
        nativeTheme.themeSource = 'system'
      })
    // Open dev tools.
    // win.webContents.openDevTools()
    


  }

app.whenReady().then(() => {
    app.on('close', ()=>{
        win = null
    })
    // 当 Electron 完成初始化并准备创建浏览器窗口时调用此方法
    app.on('ready', createWindow())
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit()
        }
        })
    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
  })