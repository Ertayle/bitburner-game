/** @param {NS} ns **/
export async function main(ns) {

    let _scripts = {
        'hosts.js' : 'https://raw.githubusercontent.com/Ertayle/bitburner-game/main/src/hosts.js',
        'start.js' : 'https://raw.githubusercontent.com/Ertayle/bitburner-game/main/src/start.js',
    }

    Object.keys(_scripts).forEach( async _scriptName => {
        let _scriptUrl = _scripts[_scriptName];
        // Force file remove
        ns.rm(_scriptName);
        // Redownload script
        await ns.wget(_scriptUrl.toString(), _scriptName.toString); 
    });

}