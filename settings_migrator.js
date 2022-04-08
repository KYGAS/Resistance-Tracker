"use strict"

const DefaultSettings = {
	"enabled" : true, // ?_?
	"mode" : "prediction", /*
		Two working modes :
			- accurate :
				* tracks values of all abnormalities using WHITELISTED C_ packets
				* accurate 99.99% of the time
				* report bugs to KYGAS#8575
			- prediction :
				* tries to guess the base resistance of the boss
				* 100% detection proof and safe ( unless you stream where people can see that your resistance numbers are modified )
				* should be fairly accurate but might show 500-2000 higher resistance
			- hardcoded :
				* 100% accurate
				* slow to update
				* 100% detection proof and safe ( unless you stream where people can see that your resistance numbers are modified )
				* will happen if someone spoonfeeds me data 
	*/
	"minThrottle" : 20000,
	"notify" : true
}

module.exports = function MigrateSettings(from_ver, to_ver, settings) {
    if (from_ver === undefined) {
        // Migrate legacy config file
        return Object.assign(Object.assign({}, DefaultSettings), settings);
    } else if (from_ver === null) {
        // No config file exists, use default settings
        return DefaultSettings;
    } else {
        // Migrate from older version (using the new system) to latest one
        if (from_ver + 1 < to_ver) {
            // Recursively upgrade in one-version steps
            settings = MigrateSettings(from_ver, from_ver + 1, settings);
            return MigrateSettings(from_ver + 1, to_ver, settings);
        }

        // If we reach this point it's guaranteed that from_ver === to_ver - 1, so we can implement
        // a switch for each version step that upgrades to the next version. This enables us to
        // upgrade from any version to the latest version without additional effort!
		
        switch(to_ver)
        {
			case 3:
				settings.notify = true;
				break;
			// keep old settings, add new ones
			case 2:
				settings.minThrottle = 20000;
				break;
			// keep old settings, add new ones
			default:
				let oldsettings = settings
				
				settings = Object.assign(DefaultSettings, {});
				
				for(let option in oldsettings) {
					if(settings[option]) {
						settings[option] = oldsettings[option]
					}
				}

				if(from_ver < to_ver) console.log('[Resistance Tracker] Your settings have been updated to version ' + to_ver + '. You can edit the new config file after the next relog.')
				break;
        }

        return settings;
    }
}