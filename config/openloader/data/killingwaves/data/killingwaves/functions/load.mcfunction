#
# Killing Waves
#

# life timer
scoreboard objectives add killingwaves.life dummy

# after how many seconds a wave should be killed
scoreboard players set killingwaves.maxLifetime killingwaves.life 10

# start loop
function killingwaves:1s