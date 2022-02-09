module.exports = function Tracker(mod) {
	
//-------------- mod stuff
	let resistanceDC = {};
	
	switch(mod.dispatch.connection.metadata.protocolVersion){
		case 386769:
			mod.dispatch.addOpcode('S_NPC_RESISTANCE',   36067)
			mod.dispatch.addDefinition('S_NPC_RESISTANCE', 1, [
				['gameId', 'uint64'],
				['physicalResistance', 'int32'],
				['magicalResistance', 'int32']
			], true)
			resistanceDC = {
					3023 : {
						1000 : {
							physical : 60000,
							magical : 60000
						},
						2000 : {
							physical : 60000,
							magical : 60000
						}
					},
					811 : {
						81101 : {
							physical : 60000,
							magical : 60000
						},
						81102 : {
							physical : 60000,
							magical : 60000
						}
					},
					780 : {
						1000 : {
							physical : 70000,
							magical : 70000
						},
						2000 : {
							physical : 70000,
							magical : 70000
						},
						3000 : {
							physical : 70000,
							magical : 70000
						}
					},
					3102 : {
						1000 : {
							physical : 70000,
							magical : 70000
						}
					},
					3041 : {
						2000 : {
							physical : 90000,
							magical : 90000
						}
					},
					982 : {
						1000 : {
							physical : 78000,
							magical : 78000
						},
						2000 : {
							physical : 78000,
							magical : 78000
						},
						3000 : {
							physical : 78000,
							magical : 78000
						}
					},
					3105 : {
						1000 : {
							physical : 78000,
							magical : 78000
						}
					},
					3104 : {
						1000 : {
							physical : 90000,
							magical : 90000
						}
					},
					3044 : {
						2000 : {
							physical : 78000,
							magical : 78000
						}
					},
					444 : {
						2000 : {
							physical : 92500,
							magical : 92500
						}
					},
					3205 : {
						1000 : {
							physical : 92500,
							magical : 92500
						}
					},
					3036 : {
						1000 : {
							physical : 92500,
							magical : 92500
						}
					},
					3107 : {
						1000 : {
							physical : 90000,
							magical : 90000
						}
					},
					3126 : {
						1000 : {
							physical : 120000,
							magical : 120000
						}
					},
					3048 : {
						1000 : {
							physical : 0,
							magical : 0
						},
						2000 : {
							physical : 0,
							magical : 0
						},
						3000 : {
							physical : 20000,
							magical : 20000
						},
						4000 : {
							physical : 20000,
							magical : 20000
						},
						5000 : {
							physical : 20000,
							magical : 20000
						}
					},
					3108 : {
						1000 : {
							physical : 120000,
							magical : 120000
						}
					}
				}
		break;
		case 387110:
			mod.dispatch.addOpcode('S_NPC_RESISTANCE',   59169)
			mod.dispatch.addDefinition('S_NPC_RESISTANCE', 1, [
				['gameId', 'uint64'],
				['physicalResistance', 'int32'],
				['magicalResistance', 'int32']
			], true)
			resistanceDC = {
				3023 : {
					1000 : {
						physical : 60000,
						magical : 60000
					},
					2000 : {
						physical : 60000,
						magical : 60000
					}
				},
				811 : {
					81101 : {
						physical : 60000,
						magical : 60000
					},
					81102 : {
						physical : 60000,
						magical : 60000
					}
				},
				780 : {
					1000 : {
						physical : 70000,
						magical : 70000
					},
					2000 : {
						physical : 70000,
						magical : 70000
					},
					3000 : {
						physical : 70000,
						magical : 70000
					}
				},
				3102 : {
					1000 : {
						physical : 70000,
						magical : 70000
					}
				},
				3041 : {
					2000 : {
						physical : 90000,
						magical : 90000
					}
				},
				982 : {
					1000 : {
						physical : 78000,
						magical : 78000
					},
					2000 : {
						physical : 78000,
						magical : 78000
					},
					3000 : {
						physical : 78000,
						magical : 78000
					}
				},
				3105 : {
					1000 : {
						physical : 92500,
						magical : 92500
					}
				},
				3104 : {
					1000 : {
						physical : 90000,
						magical : 90000
					}
				},
				3044 : {
					2000 : {
						physical : 78000,
						magical : 78000
					}
				},
				444 : {
					2000 : {
						physical : 92500,
						magical : 92500
					}
				},
				3205 : {
					1000 : {
						physical : 92500,
						magical : 92500
					}
				},
				3036 : {
					1001 : {
						physical : 111000,
						magical : 111000
					}
				},
				3107 : {
					1000 : {
						physical : 90000,
						magical : 90000
					}
				},
				3126 : {
					1000 : {
						physical : 120000,
						magical : 120000
					}
				},
				3048 : {
					1000 : {
						physical : 0,
						magical : 0
					},
					2000 : {
						physical : 0,
						magical : 0
					},
					3000 : {
						physical : 20000,
						magical : 20000
					},
					4000 : {
						physical : 20000,
						magical : 20000
					},
					5000 : {
						physical : 20000,
						magical : 20000
					}
				},
				3108 : {
					1000 : {
						physical : 120000,
						magical : 120000
					}
				},
				9794 : {
					1000 : {
						physical : 74000,
						magical : 74000
					},
					2000 : {
						physical : 74000,
						magical : 74000
					},
					3000 : {
						physical : 74000,
						magical : 74000
					}
				},
				3027 : {
					1000 : {
						physical : 90000,
						magical : 90000
					}
				},
				9068 : {
					1000 : {
						physical : 111000,
						magical : 111000
					},
					2000 : {
						physical : 111000,
						magical : 111000
					},
					3000 : {
						physical : 111000,
						magical : 111000
					}
				},
				3109 : {
					1000 : {
						physical : 118000,
						magical : 118000
					},
					2000 : {
						physical : 118000,
						magical : 118000
					}
				},
				3209 : {
					1000 : {
						physical : 129500,
						magical : 129500
					},
					2000 : {
						physical : 129500,
						magical : 129500
					}
				},
				9920 : {
					1000 : {
						physical : 129500,
						magical : 129500
					},
					2000 : {
						physical : 129500,
						magical : 129500
					},
					3000 : {
						physical : 129500,
						magical : 129500
					}
				},
				3047 : {
					1000 : {
						physical : 132000,
						magical : 132000
					}
				},
				3050 : {
					1502 : {
						physical : 129500,
						magical : 129500
					}
				}
			}
		break;
		case 387400:
			mod.dispatch.addOpcode('S_NPC_RESISTANCE',   25149) // update when i wake up
			mod.dispatch.addDefinition('S_NPC_RESISTANCE', 1, [
				['gameId', 'uint64'],
				['physicalResistance', 'int32'],
				['magicalResistance', 'int32']
			], true)
			resistanceDC = {
				3023 : {
					1000 : {
						physical : 60000,
						magical : 60000
					},
					2000 : {
						physical : 60000,
						magical : 60000
					}
				},
				811 : {
					81101 : {
						physical : 60000,
						magical : 60000
					},
					81102 : {
						physical : 60000,
						magical : 60000
					}
				},
				780 : {
					1000 : {
						physical : 70000,
						magical : 70000
					},
					2000 : {
						physical : 70000,
						magical : 70000
					},
					3000 : {
						physical : 70000,
						magical : 70000
					}
				},
				3102 : {
					1000 : {
						physical : 70000,
						magical : 70000
					}
				},
				3041 : {
					2000 : {
						physical : 90000,
						magical : 90000
					}
				},
				982 : {
					1000 : {
						physical : 78000,
						magical : 78000
					},
					2000 : {
						physical : 78000,
						magical : 78000
					},
					3000 : {
						physical : 78000,
						magical : 78000
					}
				},
				3105 : {
					1000 : {
						physical : 92500,
						magical : 92500
					}
				},
				3104 : {
					1000 : {
						physical : 90000,
						magical : 90000
					}
				},
				3044 : {
					2000 : {
						physical : 78000,
						magical : 78000
					}
				},
				444 : {
					2000 : {
						physical : 92500,
						magical : 92500
					}
				},
				3205 : {
					1000 : {
						physical : 92500,
						magical : 92500
					}
				},
				3036 : {
					1001 : {
						physical : 111000,
						magical : 111000
					}
				},
				3107 : {
					1000 : {
						physical : 90000,
						magical : 90000
					}
				},
				3126 : {
					1000 : {
						physical : 120000,
						magical : 120000
					}
				},
				3048 : {
					1000 : {
						physical : 0,
						magical : 0
					},
					2000 : {
						physical : 0,
						magical : 0
					},
					3000 : {
						physical : 20000,
						magical : 20000
					},
					4000 : {
						physical : 20000,
						magical : 20000
					},
					5000 : {
						physical : 20000,
						magical : 20000
					}
				},
				3108 : {
					1000 : {
						physical : 120000,
						magical : 120000
					}
				},
				794 : {
					1000 : {
						physical : 74000,
						magical : 74000
					},
					2000 : {
						physical : 74000,
						magical : 74000
					},
					3000 : {
						physical : 74000,
						magical : 74000
					}
				},
				3027 : {
					1000 : {
						physical : 90000,
						magical : 90000
					}
				},
				468 : {
					1000 : {
						physical : 111000,
						magical : 111000
					},
					2000 : {
						physical : 111000,
						magical : 111000
					},
					3000 : {
						physical : 111000,
						magical : 111000
					}
				},
				3109 : {
					1000 : {
						physical : 118000,
						magical : 118000
					},
					2000 : {
						physical : 118000,
						magical : 118000
					}
				},
				3209 : {
					1000 : {
						physical : 129500,
						magical : 129500
					},
					2000 : {
						physical : 129500,
						magical : 129500
					}
				},
				920 : {
					1000 : {
						physical : 129500,
						magical : 129500
					},
					2000 : {
						physical : 129500,
						magical : 129500
					},
					3000 : {
						physical : 129500,
						magical : 129500
					}
				},
				3047 : {
					1000 : {
						physical : 132000,
						magical : 132000
					}
				},
				3050 : {
					1502 : {
						physical : 129500,
						magical : 129500
					}
				}
			}
		break;
		case 387421:
			mod.dispatch.addOpcode('S_NPC_RESISTANCE',   52025) // update when i wake up
			mod.dispatch.addDefinition('S_NPC_RESISTANCE', 1, [
				['gameId', 'uint64'],
				['physicalResistance', 'int32'],
				['magicalResistance', 'int32']
			], true)
			resistanceDC = {
				3023 : {
					1000 : {
						physical : 60000,
						magical : 60000
					},
					2000 : {
						physical : 60000,
						magical : 60000
					}
				},
				811 : {
					81101 : {
						physical : 60000,
						magical : 60000
					},
					81102 : {
						physical : 60000,
						magical : 60000
					}
				},
				780 : {
					1000 : {
						physical : 70000,
						magical : 70000
					},
					2000 : {
						physical : 70000,
						magical : 70000
					},
					3000 : {
						physical : 70000,
						magical : 70000
					}
				},
				3102 : {
					1000 : {
						physical : 70000,
						magical : 70000
					}
				},
				3041 : {
					2000 : {
						physical : 90000,
						magical : 90000
					}
				},
				982 : {
					1000 : {
						physical : 78000,
						magical : 78000
					},
					2000 : {
						physical : 78000,
						magical : 78000
					},
					3000 : {
						physical : 78000,
						magical : 78000
					}
				},
				3105 : {
					1000 : {
						physical : 92500,
						magical : 92500
					}
				},
				3104 : {
					1000 : {
						physical : 90000,
						magical : 90000
					}
				},
				3044 : {
					2000 : {
						physical : 78000,
						magical : 78000
					}
				},
				444 : {
					2000 : {
						physical : 92500,
						magical : 92500
					}
				},
				3205 : {
					1000 : {
						physical : 92500,
						magical : 92500
					}
				},
				3036 : {
					1001 : {
						physical : 111000,
						magical : 111000
					}
				},
				3107 : {
					1000 : {
						physical : 90000,
						magical : 90000
					}
				},
				3126 : {
					1000 : {
						physical : 120000,
						magical : 120000
					}
				},
				3048 : {
					1000 : {
						physical : 0,
						magical : 0
					},
					2000 : {
						physical : 0,
						magical : 0
					},
					3000 : {
						physical : 20000,
						magical : 20000
					},
					4000 : {
						physical : 20000,
						magical : 20000
					},
					5000 : {
						physical : 20000,
						magical : 20000
					}
				},
				3108 : {
					1000 : {
						physical : 120000,
						magical : 120000
					}
				},
				794 : {
					1000 : {
						physical : 74000,
						magical : 74000
					},
					2000 : {
						physical : 74000,
						magical : 74000
					},
					3000 : {
						physical : 74000,
						magical : 74000
					}
				},
				3027 : {
					1000 : {
						physical : 90000,
						magical : 90000
					}
				},
				468 : {
					1000 : {
						physical : 111000,
						magical : 111000
					},
					2000 : {
						physical : 111000,
						magical : 111000
					},
					3000 : {
						physical : 111000,
						magical : 111000
					}
				},
				3109 : {
					1000 : {
						physical : 118000,
						magical : 118000
					},
					2000 : {
						physical : 118000,
						magical : 118000
					}
				},
				3209 : {
					1000 : {
						physical : 129500,
						magical : 129500
					},
					2000 : {
						physical : 129500,
						magical : 129500
					}
				},
				920 : {
					1000 : {
						physical : 129500,
						magical : 129500
					},
					2000 : {
						physical : 129500,
						magical : 129500
					},
					3000 : {
						physical : 129500,
						magical : 129500
					}
				},
				3047 : {
					1000 : {
						physical : 132000,
						magical : 132000
					}
				},
				3050 : {
					1502 : {
						physical : 129500,
						magical : 129500
					}
				}
			}
		break;
		default:
			console.log('Module is not updated. It will not load. Contact : KYGAS#8575');
			console.log('Bye!');
			console.error('Bye!');
			console.error('Module is not updated. It will not load. Contact : KYGAS#8575');
			return;
		break;
	}
	
//--------------
	
	
	const command = mod.command;
	let magicalPierce = 0, magicalIgnore = 0, magicPercent = 0;
	let physicalPierce = 0, physicalIgnore = 0, physicalPercent = 0;
	let abnormalModifiers = {};
	let refreshCheck = {};
	let predictedResistance = {}, dcResistance = {};
	let abnormThrottle = {};
	let isBoss = [];
	
	command.add('resistances', (arg1 ,val)=>{
		
		if(!arg1){
			mod.settings.enabled = !mod.settings.enabled;
			command.message('Showing True Resistance? ' + mod.settings.enabled);
		}else{
			arg1 = arg1.toLowerCase();
			val = val.toLowerCase();
			switch(arg1){
				case 'mode': 
					switch(val){
						case '1':
						case "accurate":
							mod.settings.mode = 'accurate';
							command.message("Using accurate mode for resistances.");
							break;
						case '2':
						case "prediction":
							mod.settings.mode = 'prediction';
							command.message("Using prediction mode for resistances.");
							break;
						case '3':
						case "hardcoded":
							console.log("Hardcoded mode used by default if possible. Switching to prediction mode.");
							command.message("Hardcoded mode used by default if possible. Switching to prediction mode.");
							command.exec('resistances mode prediction');
							break;
						default:
							command.message("Currently existing modes :");
							command.message("1) Accurate");
							command.message("2) Prediction");
							command.message("3) Hardcoded");
							break;
					}
					break;
				case 'delay':
					mod.settings.minThrottle = parseInt(val)
					console.log("Minimum delay before rechecking each abnorm set to ( miliseconds ) : " + mod.settings.minThrottle);
					command.message("Minimum delay before rechecking each abnorm set to ( miliseconds ) : " + mod.settings.minThrottle);
					break;
				default:
					command.message("Invalid argument:");
					command.message("1) mode");
					command.message("1) a) accurate ");
					command.message("1) b) prediction");
					command.message("1) a) hardcoded");
					command.message("2) delay VALUE");
					break;
			}
		}
	})
	
	if( !['prediction','accurate'].includes(mod.settings.mode) ) command.exec('resistances mode prediction');
	
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
		if(event.id == 31083060){
			if(!abnormalModifiers[event.target]){
				abnormalModifiers[event.target] = {};
			}
			if(!abnormalModifiers[event.target][event.id]){
				abnormalModifiers[event.target][event.id] = {};
			}
			abnormalModifiers[event.target][event.id] = {
				magicalResistance : 10000 * event.stacks,
				physicalResistance: -5000 * event.stacks
			}
		}
		if(event.id == 31083061){
			if(!abnormalModifiers[event.target]){
				abnormalModifiers[event.target] = {};
			}
			if(!abnormalModifiers[event.target][event.id]){
				abnormalModifiers[event.target][event.id] = {};
			}
			abnormalModifiers[event.target][event.id] = {
				physicalResistance: 10000 * event.stacks,
				magicalResistance : -5000 * event.stacks
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
		if(event.id == 31083060){
			if(!abnormalModifiers[event.target]){
				abnormalModifiers[event.target] = {};
			}
			if(!abnormalModifiers[event.target][event.id]){
				abnormalModifiers[event.target][event.id] = {};
			}
			abnormalModifiers[event.target][event.id] = {
				magicalResistance : 10000 * event.stacks,
				physicalResistance: -5000 * event.stacks
			}
		}
		if(event.id == 31083061){
			if(!abnormalModifiers[event.target]){
				abnormalModifiers[event.target] = {};
			}
			if(!abnormalModifiers[event.target][event.id]){
				abnormalModifiers[event.target][event.id] = {};
			}
			abnormalModifiers[event.target][event.id] = {
				physicalResistance: 10000 * event.stacks,
				magicalResistance : -5000 * event.stacks
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
		if(mod.settings.mode == 'accurate' && refreshCheck[event.id] && isBoss.includes(event.target) ){
			
			if(!abnormThrottle[event.id] || Date.now() - abnormThrottle[event.id] > mod.settings.minThrottle ){
					mod.send('C_REQUEST_ABNORMALITY_TOOLTIP_VALUE', 1, {
						gameId : event.target,
						id : event.id
					})
					abnormThrottle[event.id] = Date.now();
			}
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
	
	mod.hook('S_BOSS_GAGE_INFO', 3, (event)=>{
		if(resistanceDC[event.huntingZoneId])
			if(resistanceDC[event.huntingZoneId][event.templateId]){
				dcResistance[event.id] = resistanceDC[event.huntingZoneId][event.templateId]
			}
		isBoss.push(event.id)
	})
	
	mod.hook('S_NPC_RESISTANCE', 1, {filter : { fake: null } }, (event)=>{
		if(!mod.settings.enabled || mod.settings.mode != 'accurate' || dcResistance[event.gameId]) return;
		
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
		if(!mod.settings.enabled || mod.settings.mode != 'prediction' || dcResistance[event.gameId]) return;
		
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
	
	mod.hook('S_NPC_RESISTANCE', 1, {filter : { fake: null } }, (event)=>{
		if(!mod.settings.enabled || !dcResistance[event.gameId]) return;
		
		let physicalResistance = dcResistance[event.gameId].physical;
		let magicalResistance = dcResistance[event.gameId].magical;
		
		event.magicalResistance -= (magicalResistance * Math.min(magicPercent, 0.8 ) + magicalIgnore)
		event.physicalResistance -= (physicalResistance * Math.min(physicalPercent, 0.8 ) + physicalIgnore)
		
		event.magicalResistance = Math.max(-33333, event.magicalResistance);
		event.physicalResistance = Math.max(-33333, event.physicalResistance);
		
		return true;
	})
}