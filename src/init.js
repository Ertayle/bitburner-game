/** @param {NS} ns **/
export async function main(ns) {
    await ns.wget('https://raw.githubusercontent.com/Ertayle/bitburner-game/main/src/dlscripts.js', 'dlscripts.js');
    await ns.exec('dlscripts.js', 'home');
    await ns.exec('start.js', 'home');
}