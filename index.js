module.exports = function Tracker(mod) {
	
	//-------------- mod stuff
		mod.dispatch.addOpcode('S_NPC_RESISTANCE',   38899)
		mod.dispatch.addDefinition('S_NPC_RESISTANCE', 1, [
		  ['gameId', 'uint64'],
		  ['physicalResistance', 'int32'],
		  ['magicalResistance', 'int32']
		], true)
	//--------------
	
	
	const command = mod.command;
	let enabled = true;
	let magicalPierce = 0, magicalIgnore = 0, magicPercent = 0;
	let physicalPierce = 0, physicalIgnore = 0, physicalPercent = 0;
	let originalDefense = {};
	
	command.add('resistances', ()=>{
		enabled = !enabled;
		command.message('Showing True Resistance? ' + enabled);
	})
	
	mod.hook('S_PLAYER_STAT_UPDATE', 17, {filter : { fake: null } }, (event) => {
		
		magicalPierce = event.piercingMagicalBonus + event.piercingMagical;
		magicalIgnore = event.defenseReductionMagicalBonus + event.defenseReductionMagical;
		physicalPierce = event.piercingPhysicalBonus + event.piercingPhysical;
		physicalIgnore = event.defenseReductionPhysicalBonus + event.defenseReductionPhysical;
		
		magicPercent = (
				( magicalPierce /
					( magicalPierce + 10000 ) )
		)
		physicalPercent = (
				( physicalPierce /
					( physicalPierce + 10000 ) )
		)
	})
	
	mod.hook('S_LOAD_TOPO', 'raw', ()=>{
		originalDefense = {};
	})
	
	mod.hook('S_NPC_RESISTANCE', 1, {filter : { fake: null } }, (event) => {
		if(!enabled) return;
		if(!originalDefense[event.gameId])
			originalDefense[event.gameId] = {
				physicalResistance : event.physicalResistance,
				magicalResistance : event.magicalResistance
			}
		
		event.magicalResistance -= (originalDefense[event.gameId].magicalResistance * magicPercent + magicalIgnore)
		event.physicalResistance -= (originalDefense[event.gameId].physicalResistance * physicalPercent + physicalIgnore)
		
		return true;
	})
}