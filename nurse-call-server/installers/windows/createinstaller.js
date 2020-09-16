const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  console.log('creating windows installer')
  const rootPath = path.join('./')
  const outPath = path.join(rootPath, 'release-builds')

  return Promise.resolve({
    appDirectory: path.join(outPath, 'nurse-station-win32-x64/'),
    authors: 'Thejus Paul',
    noMsi: true,
    outputDirectory: path.join(outPath, 'windows-installer'),
    exe: 'Nurse-Station.exe'
  })
}