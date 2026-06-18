module.exports = function (RED) {
  function ConfigScratchPadFunctionality(config) {
    RED.nodes.createNode(this, config)
  }
  
  RED.nodes.registerType('ScratchPadCfg', ConfigScratchPadFunctionality);

  RED.httpAdmin.get('/ScratchPad/jslib/:libraryname', function (req, res) {
    let redirectLocation = {}
    const path = require('path');
    const fs = require('fs')

    try {
      switch (req.params.libraryname) {
        case "diff.min.js":
          redirectLocation = { Location: 'https://cdn.openmindmap.org/thirdparty/diff.min.js' }
          let filename = path.resolve(path.dirname(__filename), "..", "vendor", "diff.min.js")

          if (fs.existsSync(filename)) {
            return res.sendFile(filename)
          }
      }
    } catch (ex) { }

    res.writeHead(302, redirectLocation)
    return res.end();
  });
}