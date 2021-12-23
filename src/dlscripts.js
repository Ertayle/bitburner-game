/** @param {NS} ns **/
export async function main(ns) {

    let scripts = {
        'hosts.js' : 'https://raw.githubusercontent.com/Ertayle/bitburner-game/main/src/hosts.js',
        'start.js' : 'https://raw.githubusercontent.com/Ertayle/bitburner-game/main/src/start.js',
    }

    Object.keys(scripts).forEach( scriptName => {
        let scriptUrl = scripts[scriptName];
        // Force file remove
        ns.rm(scriptName);
        // Redownload script
        await ns.wget(scriptUrl, scriptName); 
    });

}