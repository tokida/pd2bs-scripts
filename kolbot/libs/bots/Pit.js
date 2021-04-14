/**
*	@filename	Pit.js
*	@author		kolton
*	@desc		clear Pit
*/

function Pit() {


	if (Config.MFLeader) {
		me.overhead("waiting for party");
		say("waiting for party");
		delay(2000);
		say("3");
	}

	print("doChores");
	Town.doChores();

	print("getCorpse");
	Town.getCorpse();

	//Town.clearInventory();
	Pather.useWaypoint(6);


	print("doprecast");
	Precast.doPrecast(true);

	//Pather.makePortal();
	//delay(10000);

	print("My area is " + me.area)
	print("ClearType :" + Config.ClearType)
	Config.ClearType = 0x0;

	if (!Pather.moveToExit([7, 12], true)) {
		throw new Error("Failed to move to Pit level 1");
	}
	if (Config.MFLeader) {
		delay(10000);
	}

	if (Config.Pit.ClearPit1) {
		Attack.clearLevel(Config.ClearType);
	}

	if (!Pather.moveToExit(16, true, Config.Pit.ClearPath)) {
		throw new Error("Failed to move to Pit level 2");
	}
	delay(10000);

	Attack.clearLevel(0x0);

	return true;
}