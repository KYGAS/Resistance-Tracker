# Resistance-Tracker
Lets you see true resistance of bosses against you.

## Info
- Uses a self-mapped opcode and def which are 100% safe as long as you don't share screen/stream to monkeys that will report you because your resistances don't match server values.
- You are 100% safe from being detected from server if you use prediction mode.
- Accurate mode is 99.99% safe. It's a valid packet, that user can proc vanilla without toolbox by mouse-hovering the abnormality below the boss'es HP bar. The packet is whitelisted by the Toolbox community and not abusable for anything.

## Usage

### `/8 resistances`
- Enables/disables resistance-tracker
- Default is on

### `/8 resistances MODE`
- Changes the mode of the resistance-tracker
- Default is prediction
	- Two working modes :
		- 1) accurate :
			- * tracks values of all abnormalities using WHITELISTED C_ packets
			- * self updated except on major patches
			- * accurate 99.99% of the time ( 0.01% yet to be found, +/- 1 resistance to rounding )
			- * report bugs to KYGAS#8575
		- 2) prediction :
			- * tries to guess the base resistance of the boss
			- * self updated except on major patches
			- * 100% detection proof and safe ( unless you stream where people can see that your resistance numbers are modified )
			- * should be fairly accurate ( 95% ) but might show 500-2000 higher resistance on edge cases
		- 3) hardcoded :
			- * 100% accurate
			- * slow to update
			- * 100% detection proof and safe ( unless you stream where people can see that your resistance numbers are modified )
			- * will happen if someone spoonfeeds me data 
- Examples : 
 - `/8 resistances accurate`
 - `/8 resistances prediction`
 
## Issues
- It's a very TESTABLE module. Idk if it works all the time. DM : KYGAS#8575 for bugs <3

---