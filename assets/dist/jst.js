this["JST"] = this["JST"] || {};

this["JST"]["/components/invslot"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<span class="invslot">\r\n\t<span class="invslot-item">\r\n\t\t<span class="invslot-sprite" item="{{::$ctrl.item}}"></span>\r\n\t\t<span ngif="$ctrl.amt.length" class="invslot-stacksize">{{::$ctrl.amt}}</span>\r\n\t</span>\r\n</span>';

}
return __p
};

this["JST"]["/pages/ark"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>Arks</h1>\r\n\t<hr />\r\n\t<p>\r\n\t\tArks are synonymous to teams. Every team will own an ark, and every ark will claim a 64x64 radius area when it is dropped.\r\n\t\tEvery ark gives some sort of bonus to its\' team members. There can only be one Ark per type\r\n\t\texisting a time. That means there are only at most 13 teams allowed at any given moment.\r\n\t</p>\r\n\t<h2>Mechanics</h2>\r\n\r\n\t<p><b>Buying</b></p>\r\n\t<ul>\r\n\t\t<li>Currently only admins can award arks, and ark banners</li>\r\n\t\t<li>To buy express your interest to the admin</li>\r\n\t\t<li>The initial ark costs 100 faith</li>\r\n\t\t<li>The upgrade to tier 2 costs 250 faith</li>\r\n\t\t<li>The upgrade to tier 3 costs 1000 faith</li>\r\n\t</ul>\r\n\r\n\t<p><b>Ark Bonus</b></p>\r\n\t<ul>\r\n\t\t<li>All ark bonuses are global.</li>\r\n\t\t<li>Ark debuffs all non-team members with mining fatigue within a 64/128/256 radius of territory</li>\r\n\t\t<li>At a 2nd level ark, you are able to buy an ark banner which claims a 16x16 radius of territory</li>\r\n\t</ul>\r\n\r\n\t<p><b>Teams</b></p>\r\n\t<ul>\r\n\t\t<li>There are a max of 5 members per team (will go up as the player count grows)</li>\r\n\t\t<li>Only admins can asign team memberships (will change in the future)</li>\r\n\t\t<li>Arcs can be killed by opposing teams</li>\r\n\t\t<li>Killing an arc gives 50 faith to the killer</li>\r\n\t\t<li>Killing the arc destroys the team and removes the buffs</li>\r\n\t</ul>\r\n\r\n \t<table>\r\n\t\t<tbody>\r\n\t\t\t<tr>\r\n\t\t\t\t<th style="width: 120px;">Ark</th>\r\n\t\t\t\t<th>Description</th>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td><img class="entity-sprite" src="https://gamepedia.cursecdn.com/minecraft_gamepedia/thumb/3/30/Pig.png/150px-Pig.png?version=5bf3e9ba92b8c9de9c73007493f02080"/></td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<p><b>Tier I</b> - On sunrise, gain 4 food worth of hunger points (a.k.a saturation)></p>\r\n\t\t\t\t\t<p><b>Tier II</b> - Porkchop as offering(64 to 2 faith) </p>\r\n\t\t\t\t\t<p><b>Tier III</b> - Gain an efficiency and damage buff based on the hunger level</p>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li>Between Efficiency 0 to Efficiency III</li>\r\n\t\t\t\t\t\t<li>Between Sharpness 0 to Sharpness III</li>\r\n\t\t\t\t\t\t<li>Both stacks with tools but not with other buffs</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td><img class="entity-sprite"  src="https://gamepedia.cursecdn.com/minecraft_gamepedia/thumb/a/a3/Chicken.png/150px-Chicken.png?version=e8cdde1986661fdf02e6f66c1ab49564"/></td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<p><b>Tier I</b> - Gives all members Slow Falling I and Jump Boost II</p>\r\n\t\t\t\t\t<p><b>Tier II</b> - New crafting recipes</p>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li>Craft wool to feathers</li>\r\n\t\t\t\t\t\t<li>Craft arrows with iron nugget</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t\t<p><b>Tier III</b> - Craft tipped arrows</p>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td><img class="entity-sprite"  src="https://gamepedia.cursecdn.com/minecraft_gamepedia/thumb/e/e9/Turtle.png/240px-Turtle.png?version=41546a8eace414a7baf99d7033c34eaa"/></td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<p><b>Tier I</b> - 4 golden hearts every sunrise (not stacking)</p>\r\n\t\t\t\t\t<p><b>Tier II</b> - Can use experience as an offering</p>\r\n\t\t\t\t\t<p><b>Tier III</b> - Craft iron golems that are on your team - spawn eggs</p>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td><img class="entity-sprite"  src="https://gamepedia.cursecdn.com/minecraft_gamepedia/thumb/e/e0/Tamed_Wolf_with_Red_Collar.png/150px-Tamed_Wolf_with_Red_Collar.png?version=29b392993c87a973d41c6264ef856c35"/></td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<p><b>Tier I</b> - Adds 2 tiers worth of damage (iron does diamond damage) for swords and axes</p>\r\n\t\t\t\t\t<p><b>Tier II</b> - Adds glow to player nearby with low hp</p>\r\n\t\t\t\t\t<p><b>Tier III</b> - Craft wolf spawn eggs (not transferrable)</p>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td><img class="entity-sprite"  src="https://gamepedia.cursecdn.com/minecraft_gamepedia/thumb/1/1b/Ocelot_Revision_0.png/200px-Ocelot_Revision_0.png?version=57cb2807fbb4b40b3c46b32a71471900"/></td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<p><b>Tier I</b> - Protection II</p>\r\n\t\t\t\t\t<p><b>Tier II</b> - Passively damages mobs around you (6 radius)</p>\r\n\t\t\t\t\t<p><b>Tier III</b> - Tamed entities are invulnerable</p>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td><img class="entity-sprite"  src="https://gamepedia.cursecdn.com/minecraft_gamepedia/thumb/0/0b/Dolphin.png/215px-Dolphin.png?version=dd9b58d5e50378d26fd67de85f11d73b"/></td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<p><b>Tier I</b> - Conduit Power</p>\r\n\t\t\t\t\t<p><b>Tier II</b> - Damage boost while in water (extra 4 hearts of damage)</p>\r\n\t\t\t\t\t<p><b>Tier III</b> - Dolphins Grace</p>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td><img class="entity-sprite"  src="https://gamepedia.cursecdn.com/minecraft_gamepedia/thumb/9/93/Brown_Rabbit.png/150px-Brown_Rabbit.png?version=71dc0a91a9d4ce986853dd66f9f4c881"/></td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<p><b>Tier I</b> - Jump Boost II and Speed I</p>\r\n\t\t\t\t\t<p><b>Tier II</b> - Luck I</p>\r\n\t\t\t\t\t<p><b>Tier III</b> - Speed II and Invul for 20 seconds when heart drops to 2</p>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td><img class="entity-sprite"  src="https://gamepedia.cursecdn.com/minecraft_gamepedia/thumb/7/78/Polar_Bear.png/280px-Polar_Bear.png?version=e4fdbf69981748d32de91218b6157eff"/></td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<p><b>Tier I</b> - Eating raw meat gives huge damage boost for 30 seconds (additional diamond tier)</p>\r\n\t\t\t\t\t<p><b>Tier II</b> - Eating raw meat gives one time regen boost</p>\r\n\t\t\t\t\t<p><b>Tier III</b> - Eating raw meat gives 3 faith</p>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td><img class="entity-sprite"  src="https://gamepedia.cursecdn.com/minecraft_gamepedia/thumb/b/bb/Mooshroom.png/150px-Mooshroom.png?version=2f9478fe265e4c4e9888b91088b24265"/></td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<p><b>Tier I</b> - Gives poison touch (non lethal)</p>\r\n\t\t\t\t\t<p><b>Tier II</b> - Potion effects are twice as long</p>\r\n\t\t\t\t\t<p><b>Tier III</b> - Craft god tier potions</p>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td><img class="entity-sprite"  src="https://gamepedia.cursecdn.com/minecraft_gamepedia/thumb/6/69/White_Sheep.png/160px-White_Sheep.png?version=ce8ac2c3bbcc49bb300298c01ef93d18"/></td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<p><b>Tier I</b> - Gives 1 faith and 3 bottles worth of experience per day</p>\r\n\t\t\t\t\t<p><b>Tier II</b> - Sheep around the ark gives 1 extra faith per day to all members, radius of 8</p>\r\n\t\t\t\t\t<p><b>Tier III</b> - Have Protection V when near sheep (radius of 10)</p>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td><img class="entity-sprite"  src="https://gamepedia.cursecdn.com/minecraft_gamepedia/thumb/8/86/White_Horse.png/200px-White_Horse.png?version=40fee0e0602de227b22fb57011b63d13"/></td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<p><b>Tier I</b> - Saddles can be used as offerings (1 faith for 16 saddles)</p>\r\n\t\t\t\t\t<p><b>Tier II</b> - Gives Haste II</p>\r\n\t\t\t\t\t<p><b>Tier III</b> - Craft horse armor</p>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td><img class="entity-sprite"  src="https://gamepedia.cursecdn.com/minecraft_gamepedia/thumb/d/de/Red_Parrot.png/150px-Red_Parrot.png?version=bfa9a25234ccaaa4b1c7fdcbe63ce625"/></td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<p><b>Tier I</b> - Craft stone dice, when rolled (thrown) get a random effect</p>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li>Luck II</li>\r\n\t\t\t\t\t\t<li>Poison (None Lethal)</li>\r\n\t\t\t\t\t\t<li>Resistance II</li>\r\n\t\t\t\t\t\t<li>Bad Luck II</li>\r\n\t\t\t\t\t\t<li>Absorption (2 hearts) for 10 mins</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t\t<p><b>Tier II</b> - Craft gold dice, when rolled (thrown) get a random effect</p>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li>Luck V</li>\r\n\t\t\t\t\t\t<li>Poison (Lethal)</li>\r\n\t\t\t\t\t\t<li>Resistance V</li>\r\n\t\t\t\t\t\t<li>Bad Luck V</li>\r\n\t\t\t\t\t\t<li>Absorption 8 hearts for 10 mins</li>\r\n\t\t\t\t\t\t<li>Wither</li>\r\n\t\t\t\t\t\t<li>Strength V</li>\r\n\t\t\t\t\t\t<li>Random TP within a radius of 1000 (always on overground)</li>\r\n\t\t\t\t\t\t<li>10 faith</li>\r\n\t\t\t\t\t\t<li>Block below you turns to lava</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t\t<p><b>Tier III</b> - Craft bone dice, when rolled (thrown) get a random effect</p>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li>Enchanted Tools</li>\r\n\t\t\t\t\t\t<li>Poison III(Lethal)</li>\r\n\t\t\t\t\t\t<li>Tier VI and VII materials (Mithril and Adamantine)</li>\r\n\t\t\t\t\t\t<li>Holy Weapon</li>\r\n\t\t\t\t\t\t<li>Hunger V</li>\r\n\t\t\t\t\t\t<li>Absorption 16 hearts 10 mins</li>\r\n\t\t\t\t\t\t<li>Summon Wither Skeletions</li>\r\n\t\t\t\t\t\t<li>Nothing</li>\r\n\t\t\t\t\t\t<li>Random TP within a radius of 3000 (always on overground)</li>\r\n\t\t\t\t\t\t<li>50 faith</li>\r\n\t\t\t\t\t\t<li>Random person in the map floats upward</li>\r\n\t\t\t\t\t\t<li>Inventory is cleared</li>\r\n\t\t\t\t\t\t<li>Instant Death</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td><img class="entity-sprite"  src="https://gamepedia.cursecdn.com/minecraft_gamepedia/thumb/8/84/Cow.png/150px-Cow.png?version=ab2f246f75ecee2b1cec2aae80333724"/></td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<p><b>Tier I</b> - Killing sheep, pig, chicken and horse yields bonemeal</p>\r\n\t\t\t\t\t<p><b>Tier II</b> - Bread(64 to 1 faith) and milk bucket(16 to 2 faith) as offering</p>\r\n\t\t\t\t\t<p><b>Tier III</b> - Destroying one block destroy the entire tree</p>\r\n\t\t\t\t</td>\r\n\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n\t</table>\r\n\r\n\t<h2>Ark Exchange</h2>\r\n\t<p>There are 3 ways to get faith. First is through some game trigger, second is by being compensated, and last through offerings. As of 0.3,\r\n\tthe only way offerings are done is by physically giving the items to the admin.</p>\r\n\t<table>\r\n\t\t<tbody>\r\n\t\t\t<tr>\r\n\t\t\t\t<th style="width: 120px;">Item</th>\r\n\t\t\t\t<th>Exchange</th>\r\n\t\t\t</tr>\r\n\r\n\t\t\t<tr>\r\n\t\t\t\t<td><invslot item="raw_cod" amt="64"/></td>\r\n\t\t\t\t<td>1 faith</td>\r\n\t\t\t</tr>\r\n\t\t\t\r\n\t\t\t<tr>\r\n\t\t\t\t<td><invslot item="pufferfish" amt="64"/></td>\r\n\t\t\t\t<td>1 faith</td>\r\n\t\t\t</tr>\r\n\r\n\t\t\t<tr>\r\n\t\t\t\t<td><invslot item="raw_salmon" amt="64"/></td>\r\n\t\t\t\t<td>1 faith</td>\r\n\t\t\t</tr>\r\n\r\n\t\t\t<tr>\r\n\t\t\t\t<td><invslot item="hay" amt="64"/></td>\r\n\t\t\t\t<td>2 faith</td>\r\n\t\t\t</tr>\r\n\r\n\t\t\t<tr>\r\n\t\t\t\t<td><invslot item="iron" amt="64"/></td>\r\n\t\t\t\t<td>2 faith</td>\r\n\t\t\t</tr>\r\n\r\n\t\t\t<tr>\r\n\t\t\t\t<td><invslot item="gold" amt="64"/></td>\r\n\t\t\t\t<td>3 faith</td>\r\n\t\t\t</tr>\r\n\r\n\t\t\t<tr>\r\n\t\t\t\t<td><invslot item="emerald" amt="64"/></td>\r\n\t\t\t\t<td>8 faith</td>\r\n\t\t\t</tr>\r\n\r\n\t\t\t<tr>\r\n\t\t\t\t<td><invslot item="diamond" amt="64"/></td>\r\n\t\t\t\t<td>10 faith</td>\r\n\t\t\t</tr>\r\n\r\n\t\t\t<tr>\r\n\t\t\t\t<td><invslot item="nautilus_shell" amt="64" /></td>\r\n\t\t\t\t<td>35 faith</td>\r\n\t\t\t</tr>\r\n\r\n\t\t\t<tr>\r\n\t\t\t\t<td><invslot item="skull_skeleton" /></td>\r\n\t\t\t\t<td>40 faith (any mob skull)</td>\r\n\t\t\t</tr>\r\n\r\n\t\t\t<tr>\r\n\t\t\t\t<td><invslot item="dragon_egg"/></td>\r\n\t\t\t\t<td>140 faith (kill the dragon)</td>\r\n\t\t\t</tr>\r\n\r\n\t\t</tbody>\r\n\t</table>';

}
return __p
};

this["JST"]["/pages/holy"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'holy.html';

}
return __p
};

this["JST"]["/pages/home"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>Patch Notes</h1>\r\n\t<hr />\r\n\t<b>patch 1.2</b>\r\n\t<ul>\r\n\t\t<li>Nerfed emerald faith returns from 8 to 6</li>\r\n\t\t<li>Dolphin tier 2 and tier 3 swapped</li>\r\n\t\t<li>Temporary recipe -> torches yield 64</li>\r\n\t\t<li>Lowered server render distance from 10 to 7</li>\r\n\t</ul>\r\n\t\r\n\t<b>patch 1.1</b>\r\n\t<ul>\r\n\t\t<li>Buffed horse and swapped Tier I with Tier II</li>\r\n\t</ul>\r\n\t<b>patch 1.0</b>\r\n\t<ul>\r\n\t\t<li><a href="ark.html">Arks</a> Rebalance</li>\r\n\t\t<li>\r\n\t\t\t<ul>\r\n\t\t\t\t<li>New way of offering:</li>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li>admin is no longer needed for offerings!</li>\r\n\t\t\t\t\t\t<li>To offer, you need to trek to Parthenon, go to the middle of\r\n\t\t\t\t\t\t\tthe flight of stairs and while facing the temple throw your offerings to the floor.</li>\r\n\t\t\t\t\t\t<li>Your offerings will shatter on the ground giving you a small xp and the equivalent\r\n\t\t\t\t\t\t\tfavor. See more on the <a href="ark.html">Arks page</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t<li>Added level 2 and 3 tiers for all arks</li>\r\n\t\t\t\t<li>Nerfed nautilus offerings</li>\r\n\t\t\t\t<li>Updated cow tier level 1</li>\r\n\t\t\t</ul>\r\n\t\t</li>\r\n\t\t<li>New Holy Weapons</li>\r\n\t\t<li>\r\n\t\t\t<ul>\r\n\t\t\t\t<li>Apollos Bow - 35 faith</li>\r\n\t\t\t\t<li>Golden Armor - 100 faith</li>\r\n\t\t\t\t<li>Golden Fleece - 350 faith</li>\r\n\t\t\t\t<li>Helm of Darkness - 20 faith</li>\r\n\t\t\t\t<li>Hermes\' Slippers - 60 faith</li>\r\n\t\t\t\t<li>Mountain King\'s Pickaxe - 70 faith</li>\r\n\t\t\t\t<li>Ring of Solomon - 40 faith</li>\r\n\t\t\t\t<li>Smasher of Thousands - 30 faith</li>\r\n\t\t\t\t<li>St Michaels Sword - 140 faith</li>\r\n\t\t\t\t<li>Sword of Mars - 210 faith</li>\r\n\t\t\t</ul>\r\n\t\t</li>\r\n\t</ul>\r\n\r\n\t<b>patch 0.3</b>\r\n\t<ul>\r\n\t\t<li>Rebalanced ark powers</li>\r\n\t\t<li>Rebalanced ark offerings</li>\r\n\t</ul>\r\n\r\n\t<b>patch 0.2</b>\r\n\t<ul>\r\n\t\t<li>Added ark powers</li>\r\n\t\t<li>Zero hunger now kills people</li>\r\n\t</ul>';

}
return __p
};