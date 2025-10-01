# runs on wave entities

scoreboard players add @s killingwaves.life 1

execute if score @s killingwaves.life >= killingwaves.maxLifetime killingwaves.life run kill @s