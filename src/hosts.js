/** @param {NS} ns **/
export async function main(ns) {

    var directHosts = ns.scan();

    var directServers = [];

	directHosts.forEach( host => {
		directServers.push(ns.getServer(host));
	});

    // Write a hosts.txt file containing all directly connected servers informations
	await ns.write('hosts.txt', JSON.stringify(directServers), 'w');
}