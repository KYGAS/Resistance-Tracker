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
	let magicalPierce = 0, magicalIgnore = 0, magicPercent = 0;
	let physicalPierce = 0, physicalIgnore = 0, physicalPercent = 0;
	let abnormalModifiers = {};
	let refreshCheck = {};
	let predictedResistance = {};
	
	command.add('resistances', (mode)=>{
		if(!mode){
			mod.settings.enabled = !mod.settings.enabled;
			command.message('Showing True Resistance? ' + mod.settings.enabled);
		}else{
			switch(mode){
				case '1':
				case "accurate":
					mod.settings.mode = 'accurate';
					command.message("Using accurate mode for resistances.");
					break;
				case '2':
				case "prediction":
					mod.settings.mode = 'prediciton';
					command.message("Using prediciton mode for resistances.");
					break;
				case '3':
				case "hardcoded":
					console.log("Hardcoded mode not supported. Switching to prediction mode.");
					command.message("Hardcoded mode not supported. Switching to prediction mode.");
					command.exec('resistances prediciton');
					break;
				default:
					command.message("Currently existing modes :");
					command.message("1) Accurate");
					command.message("2) Prediction");
					command.message("3) Hardcoded");
					break;
			}
		}
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
		abnormalModifiers = {};
	})
	
	mod.hook('S_ABNORMALITY_BEGIN', 5, {filter : { fake: null } }, (event)=>{
		for ( let x in event.values ) {
			if(	event.values[x].type == 1003 ){
				// pres
				if(!abnormalModifiers[event.target]){
					abnormalModifiers[event.target] = {};
				}
				if(!abnormalModifiers[event.target][event.id]){
					abnormalModifiers[event.target][event.id] = {};
				}
				abnormalModifiers[event.target][event.id]['physicalResistance'] = Math.floor( event.values[x].value );
				refreshCheck[event.id] = true;
			}
			if(	event.values[x].type == 1004 ){
				// mres
				if(!abnormalModifiers[event.target]){
					abnormalModifiers[event.target] = {};
				}
				if(!abnormalModifiers[event.target][event.id]){
					abnormalModifiers[event.target][event.id] = {};
				}
				abnormalModifiers[event.target][event.id]['magicalResistance'] = Math.floor ( event.values[x].value );
				refreshCheck[event.id] = true;
			}
			
		}
		if(event.id == 18852){
			if(!abnormalModifiers[event.target]){
				abnormalModifiers[event.target] = {};
			}
			if(!abnormalModifiers[event.target][event.id]){
				abnormalModifiers[event.target][event.id] = {};
			}
			abnormalModifiers[event.target][event.id] = {
				physicalResistance : -5000,
				magicalResistance : -5000
			}
		}
		if(event.id == 18824){
			if(!abnormalModifiers[event.target]){
				abnormalModifiers[event.target] = {};
			}
			if(!abnormalModifiers[event.target][event.id]){
				abnormalModifiers[event.target][event.id] = {};
			}
			abnormalModifiers[event.target][event.id] = {
				physicalResistance : -94 * event.stacks,
				magicalResistance : -94 * event.stacks
			}
		}
		if(event.id == 99003900){
			if(!abnormalModifiers[event.target]){
				abnormalModifiers[event.target] = {};
			}
			if(!abnormalModifiers[event.target][event.id]){
				abnormalModifiers[event.target][event.id] = {};
			}
			abnormalModifiers[event.target][event.id] = {
				magicalResistance : 10000 * event.stacks
			}
		}
		if(event.id == 99003800){
			if(!abnormalModifiers[event.target]){
				abnormalModifiers[event.target] = {};
			}
			if(!abnormalModifiers[event.target][event.id]){
				abnormalModifiers[event.target][event.id] = {};
			}
			abnormalModifiers[event.target][event.id] = {
				physicalResistance : 10000 * event.stacks
			}
		}
	})
	
	mod.hook('S_ABNORMALITY_REFRESH', 2, {filter : { fake: null } }, (event)=>{
		if(event.id == 18824){
			if(!abnormalModifiers[event.target]){
				abnormalModifiers[event.target] = {};
			}
			if(!abnormalModifiers[event.target][event.id]){
				abnormalModifiers[event.target][event.id] = {};
			}
			abnormalModifiers[event.target][event.id] = {
				physicalResistance : -94 * event.stacks,
				magicalResistance : -94 * event.stacks
			}
		}
		if(event.id == 99003900){
			if(!abnormalModifiers[event.target]){
				abnormalModifiers[event.target] = {};
			}
			if(!abnormalModifiers[event.target][event.id]){
				abnormalModifiers[event.target][event.id] = {};
			}
			abnormalModifiers[event.target][event.id] = {
				magicalResistance : 10000 * event.stacks
			}
		}
		if(event.id == 99003800){
			if(!abnormalModifiers[event.target]){
				abnormalModifiers[event.target] = {};
			}
			if(!abnormalModifiers[event.target][event.id]){
				abnormalModifiers[event.target][event.id] = {};
			}
			abnormalModifiers[event.target][event.id] = {
				physicalResistance : 10000 * event.stacks
			}
		}
		if(mod.settings.mode == 'accurate' && refreshCheck[event.id]){
			mod.send('C_REQUEST_ABNORMALITY_TOOLTIP_VALUE', 1, {
				gameId : event.target,
				id : event.id
			})
		}
	})
	
	mod.hook('S_ABNORMALITY_END', 1, {filter : { fake: null } }, (event)=>{
		if(abnormalModifiers[event.target])
			if(abnormalModifiers[event.target][event.id]) delete abnormalModifiers[event.target][event.id];
	})
	
	mod.hook('S_ABNORMALITY_TOOLTIP_VALUE', 1, {filter : { fake: null } }, (event)=>{
		for ( let x in event.values ) {
			if(	event.values[x].type == 1003 ){
				// pres
				if(!abnormalModifiers[event.gameId]){
					abnormalModifiers[event.gameId] = {};
				}
				if(!abnormalModifiers[event.gameId][event.id]){
					abnormalModifiers[event.gameId][event.id] = {};
				}
				abnormalModifiers[event.gameId][event.id]['physicalResistance'] = Math.floor( event.values[x].value );
			}
			if(	event.values[x].type == 1004 ){
				// mres
				if(!abnormalModifiers[event.gameId]){
					abnormalModifiers[event.gameId] = {};
				}
				if(!abnormalModifiers[event.gameId][event.id]){
					abnormalModifiers[event.gameId][event.id] = {};
				}
				abnormalModifiers[event.gameId][event.id]['magicalResistance'] = Math.floor ( event.values[x].value );
			}
		}
	})
	
	mod.hook('S_NPC_RESISTANCE', 1, {filter : { fake: null } }, (event)=>{
		if(!mod.settings.enabled || mod.settings.mode != 'accurate') return;
		
		let physicalResistance = event.physicalResistance;
		let magicalResistance = event.magicalResistance;
		
		if(abnormalModifiers[event.gameId]){
			for( let id of Object.keys(abnormalModifiers[event.gameId]) ){
				physicalResistance -= abnormalModifiers[event.gameId][id].physicalResistance || 0;
				magicalResistance -= abnormalModifiers[event.gameId][id].magicalResistance || 0;
			}
		}
		
		event.magicalResistance -= (magicalResistance * Math.min(magicPercent, 0.8 ) + magicalIgnore)
		event.physicalResistance -= (physicalResistance * Math.min(physicalPercent, 0.8 ) + physicalIgnore)
		
		event.magicalResistance = Math.max(-33333, event.magicalResistance);
		event.physicalResistance = Math.max(-33333, event.physicalResistance);
		
		return true;
	})
	
	mod.hook('S_NPC_RESISTANCE', 1, {filter : { fake: null } }, (event)=>{
		if(!mod.settings.enabled || mod.settings.mode != 'prediciton') return;
		
		let physicalResistance = event.physicalResistance;
		let magicalResistance = event.magicalResistance;
		
		if(abnormalModifiers[event.gameId]){
			for( let id of Object.keys(abnormalModifiers[event.gameId]) ){
				physicalResistance -= abnormalModifiers[event.gameId][id].physicalResistance || 0;
				magicalResistance -= abnormalModifiers[event.gameId][id].magicalResistance || 0;
			}
		}
		
		if(!predictedResistance[event.gameId]) {
			predictedResistance[event.gameId] = {}
			predictedResistance[event.gameId] = {
				physicalResistance :  physicalResistance,
				magicalResistance : magicalResistance
			}
		}
		
		event.magicalResistance -= (predictedResistance[event.gameId].magicalResistance * Math.min(magicPercent, 0.8 ) + magicalIgnore)
		event.physicalResistance -= (predictedResistance[event.gameId].physicalResistance * Math.min(physicalPercent, 0.8 ) + physicalIgnore)
		
		event.magicalResistance = Math.max(-33333, event.magicalResistance);
		event.physicalResistance = Math.max(-33333, event.physicalResistance);
		
		return true;
	})
}