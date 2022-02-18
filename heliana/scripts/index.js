Hooks.on("ready", function() {
  console.log("HGMH | The Heliana module is ready.");
});

Hooks.on("ready", addExpansionData);

function addExpansionData()
{
    const DND5E = CONFIG.DND5E

    DND5E.weaponProperties["hgmhPropLou"] = "Loud";
	DND5E.weaponProperties["hgmhPropRel"] = "Reload";
	DND5E.weaponProperties["hgmhPropBal"] = "Balanced";
	DND5E.spellSchools["hgmhSchBio"] = "Biomancy";

	const tempWeaponIds = DND5E.weaponIds;
	const newWeaponIds = {
		haladie: "heliana.hgmh-items.AjIjTGfiCKislDBj",
		nunchuks: "heliana.hgmh-items.LehYWbpSdHwzmIn7",
		tetherhook: "heliana.hgmh-items.vLL9siBxTnyJpy0i",
		blunderbuss: "heliana.hgmh-items.2tUO90YVsBKykxzz",
		musket: "heliana.hgmh-items.brMUvTjYOaTrfzWh",
		pistol: "heliana.hgmh-items.ecOhziQfJRwWW6dt",
		revolver: "heliana.hgmh-items.FCa2F3euhr7vF4EP",
		rifle: "heliana.hgmh-items.EWQoRth37YCnqddn"
	}
	DND5E.weaponIds = Object.assign(tempWeaponIds,newWeaponIds);
}
