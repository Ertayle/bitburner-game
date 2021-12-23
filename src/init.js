/** @param {NS} ns **/
export async function main(ns) {
    await ns.wget('https://raw.githubusercontent.com/Ertayle/bitburner-game/main/src/dlscripts.js', 'dlscripts.js');
    await ns.run('dlscripts.js');
    await ns.run('start.js');
}