

// Generation command to create loot tables
ServerEvents.customCommand("genworlddevourer", () => {

	Utils.server.runCommand("/say [WDEVR] Started");

	const $LootDataType = Java.loadClass("net.minecraft.world.level.storage.loot.LootDataType")

	const lootData = Utils.server.getLootData();
	const allTables = lootData.getKeys($LootDataType.TABLE);
	const list = allTables
		.stream()
		.map(id => id.toString())
		.toList();
	const listNoBlock = allTables
		.stream()
		.filter(id => !id.path.contains("block"))
		.map(id => id.toString())
		.toList();

	Utils.server.runCommand("/say [WDEVR] Obtained reslocs");

	JsonIO.write("kubejs/data/foolsendeavour/loot_tables/chests/exalted_devoured_world.json", {
		"pools": [
			{
				"rolls": 1,
				"entries": list.map(resloc => ({
					"type": "minecraft:loot_table",
					"name": resloc
				}))
			}
		]
	});

	JsonIO.write("kubejs/data/foolsendeavour/loot_tables/chests/devoured_world.json", {
		"pools": [
			{
				"rolls": 1,
				"entries": listNoBlock.map(resloc => ({
					"type": "minecraft:loot_table",
					"name": resloc
				}))
			}
		]
	});

	Utils.server.runCommand("/say [WDEVR] Wrote loot table");
})