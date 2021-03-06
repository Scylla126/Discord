import * as Discord from 'discord.js';

import BaseWatcher from './BaseWatcher';

/**
 * This watcher checks for people using links to unofficial Minecraft links.
 */
class UnofficialMinecraftLinkWatcher extends BaseWatcher {
    /**
     * If this watcher uses bypass rules.
     */
    usesBypassRules = true;

    /**
     * The methods this watcher should listen on.
     */
    methods: Array<keyof Discord.ClientEvents> = ['messageCreate', 'messageUpdate'];

    /**
     * The links that this watcher should remove.
     */
    links = [
        '0x10c-zone.ru',
        '10minecraft.ru',
        '123minecraft.com',
        '1minecraftsource.net',
        '1ru-minecraft.ru',
        '1st-minecraft.ru',
        '24hminecraft.com',
        '24mine.org',
        '2minecraft.net',
        '2minecraft.org',
        '2майнкрафтер.рф',
        '3minecraft.com',
        '4minecraft.com',
        '4minecraft.org',
        '5minecraft.com',
        '5minecraft.net',
        '5minecraft.ru',
        '6minecraft.net',
        '6minecraft.org',
        '6minecraftmods.net',
        '7minecraft.net',
        '8minecraft.com',
        '8minecraft.org',
        '9craft.org',
        '9minecraft.net',
        '9minecraftaz.blogspot.com',
        '9minecraftmods.net',
        '9minecrafts.com',
        '9minecrafts.ru',
        '9minecraftscom.blogspot.com',
        '9mobo.com',
        'all-mod-for-minecraft.blogspot.com',
        'all-mods.ru',
        'allforminecraft.ru',
        'allfreeapk.com',
        'aminecraft.net',
        'azminecraft.info',
        'begin-minecraft.ru',
        'bendercraft.ru',
        'bigminecraft.ru',
        'bnstbns.pro',
        'c-raft.ru',
        'clubminecraftbr.blogspot.com',
        'comoinstalarmodsminecraft.com.br',
        'crafthd.net',
        'craftzon.ru',
        'dascraft.org',
        'day2play.pl',
        'descargarminecraftgratis.net',
        'digitalgamesonlinenowone.com',
        'dle01.sofftportall8nn.info',
        'dlminecraft.net',
        'dosakh.ru',
        'download-minecraft-mod.com',
        'download.parcraftmc.com',
        'downloadape.org',
        'downloadatoz.com',
        'downloadminecraft.altervista.org',
        'downloadminecraftplay.com',
        'duno-farm.ru',
        'eminecraft.net',
        'en-minecraft.org',
        'evlas.ru',
        'exe-craft.ru',
        'fdminecraft.net',
        'file-minecraft.com',
        'for-minecraft.com',
        'forminecrafters.ru',
        'fr-minecraft.net',
        'free-mods.ru',
        'freedownloadminecraft.com',
        'freeminecraftmods.com',
        'freshminecraft.ru',
        'freshmod.ru',
        'full-mod.ru',
        'fulllistofminecraftmods.cf',
        'galaxythecreative.blogspot.no',
        'gameminecraft.ru',
        'gamemodding.net',
        'games-utilities.com',
        'gamewise.co',
        'getmod.ru',
        'giga.de',
        'gigminecraft.net',
        'gl-mods.ru',
        'godgames.ru',
        'goldmods-minecraft.ru',
        'hackphoenix.com',
        'hubicraft.com',
        'jojomine.com',
        'keepergames.ru',
        'kgamek.ru',
        'kminecraft.ru',
        'lambdacore.ucoz.ru',
        'launcherfenix.com.ar',
        'legacymodpack.com',
        'lemoncraft.ru',
        'lestnica44.ru',
        'loadminecraft.ru',
        'magnetobrowsers.net',
        'mc-mod.net',
        'mc.ahgame.com',
        'mc164.ru',
        'mcdownloads.ru',
        'mcmap.cc',
        'mcmoddatabase.com',
        'mcmodkit.com',
        'mcmods.ru',
        'mcmodteam.blogspot.de',
        'mcpatcher.net',
        'mcpebox.com',
        'mcpemods.net',
        'mcraft-info.ru',
        'mcraft-life.ru',
        'megamods.ru',
        'metrominecraft.com',
        'mi-mundo-minecraft.blogspot.no',
        'miinecraft.org',
        'mine-craft.ws',
        'mineblock.ru',
        'minecraft-365.com',
        'minecraft-all.ru',
        'minecraft-area.ru',
        'minecraft-book.ru',
        'minecraft-cube.ru',
        'minecraft-downloads.com',
        'minecraft-double.ru',
        'minecraft-en.ucoz.com',
        'minecraft-files.ru',
        'minecraft-forum.net',
        'minecraft-game.ru',
        'minecraft-home.ru',
        'minecraft-inside.ru',
        'minecraft-installer.com',
        'minecraft-jobs.ru',
        'minecraft-mc.ru',
        'minecraft-modding.de',
        'minecraft-modi.ru',
        'minecraft-mods-base.ru',
        'minecraft-mods.info',
        'minecraft-mods.org',
        'minecraft-mods.ru',
        'minecraft-modsdownload.com',
        'minecraft-open.ru',
        'minecraft-re.ru',
        'minecraft-sodeon.ru',
        'minecraft-soul.ru',
        'minecraft-tools.org',
        'minecraft-x.net',
        'minecraft-zet.ru',
        'minecraft.diablo1.ru',
        'minecraft12.com',
        'minecraft123.net',
        'minecraft15.my1.ru',
        'minecraft172.com',
        'minecraft37.ru',
        'minecraft5.net',
        'minecraft70.ru',
        'minecraft73.ru',
        'minecraftaz.net',
        'minecraftbay.com',
        'minecraftbuildinginc.com',
        'minecraftch.ru',
        'minecraftdata.com',
        'minecraftdatablog.blogspot.de',
        'minecraftdl.com',
        'minecraftdownload.in',
        'minecraftdownloadmod.blogspot.no',
        'minecraftdrive.com',
        'minecrafteando.com',
        'minecrafteon.com',
        'minecrafter-mod.ru',
        'minecraftes.com',
        'minecraftevi.com',
        'minecraftexe.com',
        'minecraftexpert.ru',
        'minecraftfile.net',
        'minecraftfive.com',
        'minecraftfly.ru',
        'minecraftfreedownloadpro.blogspot.no',
        'minecraftfreemods.net',
        'minecraftgate.info',
        'minecraftgig.ru',
        'minecraftgood.com',
        'minecrafthd.com',
        'minecrafthub.com',
        'minecrafthut.com',
        'minecraftiamodpack.blogspot.com',
        'minecraftiamods.com',
        'minecraftian.net',
        'minecraftinstallers.com',
        'minecraftium.ru',
        'minecraftjardl.com',
        'minecraftmine.org',
        'minecraftmodding.net',
        'minecraftmoddl.com',
        'minecraftmodlari.com',
        'minecraftmods.biz',
        'minecraftmods.com.br',
        'minecraftmods.izben.com',
        'minecraftmods18.net',
        'minecraftmods19.com',
        'minecraftmods9.blogspot.com',
        'minecraftmodsupdate.com',
        'minecraftmonster.ru',
        'minecraftmore.com',
        'minecraftnodus.do.am',
        'minecraftnow.ru',
        'minecraftonly.ru',
        'minecraftore.com',
        'minecraftors.ru',
        'minecraftpe-mods.com',
        'minecraftplanet.biz',
        'minecraftplanet.ru',
        'minecraftposts.net',
        'minecraftpw.ru',
        'minecraftq.ru',
        'minecraftquick.com',
        'minecraftresource.com',
        'minecrafts-mod.ru',
        'minecraftsemlimites.com',
        'minecraftside.com',
        'minecraftsone.blogspot.no',
        'minecraftspace.com',
        'minecraftspot.net',
        'minecraftstores.com',
        'minecraftsy.com',
        'minecrafttime.com',
        'minecraftvip.com',
        'minecraftxl.com',
        'minecraftxz.com',
        'minecraftyard.com',
        'minecraftym.ru',
        'minedown.com',
        'minefan.ru',
        'minelife.net',
        'mineplan.ru',
        'mineplanet.net',
        'mineturk.com',
        'minezona.ru',
        'minhvietltd.com',
        'mir-crafta.ru',
        'mirvideogames.ru',
        'mizunospb.ru',
        'mmods.net',
        'mncraftmods.ru',
        'mobileminecraft.com.br',
        'mod-for-minecraft.net',
        'mod-minecraft.net',
        'mod-minecraft.ru',
        'modcraft.biz',
        'moddingames.wordpress.com',
        'modfast.ru',
        'modminecrafts.com',
        'mododrom.ru',
        'mods-for-minecraft.net',
        'modscraft.ru',
        'modsforminecraft.org',
        'modsgate.com',
        'modsmc.com',
        'modsminecraft.com',
        'modsminecraft.org',
        'modsx.ru',
        'mody4mine.ru',
        'mosminecraft.ru',
        'mybestgamesfilesone.com',
        'myfreemediacloudone.com',
        'mymediadownloadsthirtytwo.com',
        'mymediasearchnowthree.com',
        'newfastmediasearcherfive.com',
        'nextminecraft.ru',
        'niceminecraft.net',
        'niinecrraftik.jeclo.pp.ua',
        'o-minecraft.ru',
        'ofminecraft.ru',
        'ogmcdownload.com',
        'old-minecraft.ru',
        'ominecraft.net',
        'onlinecheats.ru',
        'onlinegamesfilesone.com',
        'onlineplayminecraft.com',
        'only-minecraft.ru',
        'onlycraft.ru',
        'onminecraft.ru',
        'oo-minecraft.ru',
        'osdarlings.com',
        'packs548.rssing.com',
        'pandoriacraft.ru',
        'pd19.org',
        'planet-m.net',
        'planet-minecraft.ru',
        'planetaminecraft.com',
        'planetmods.net',
        'proud-portal.ru',
        'q-craft.ru',
        'rareportal.com',
        'revozin.com',
        'rinoyundaapk.blogspot.no',
        'rockybytes.com',
        'ru-m.org',
        'ru-minecraft.ru',
        'ru-minecrafty.ru',
        'setcraft.ru',
        'simplesminecraft.blogspot.com.br',
        'simplesminecraft.com',
        'skachat-mody-minecraft.ru',
        'skins-minecraft.net',
        'soft32.com',
        'softonic.com',
        'somecraf.net',
        'space-games.ucoz.ru',
        'stoninho.blogspot.com.br',
        'stop-nalogi.ru',
        'sumycraft.ru',
        'terrariaw.ru',
        'the-minecraft.fr',
        'tlauncher.org',
        'todocraft.net',
        'ultimateminecraftlj.weebly.com',
        'uminecraft.at.ua',
        'upload-minecraft.ru',
        'utk.io',
        'vam-polezno.ru',
        'vencko.net',
        'vminecraft.ru',
        'vminecrafte.ru',
        'voidswrath.com',
        'wc3-maps.ru',
        'wdsj2.com',
        'wemine.ru',
        'wizardhax.com',
        'world-minecraft.pp.ua',
        'worldofmods.com',
        'wpminecraft.blogspot.com',
        'xn--18-6kca8bglk2avv.xn--p1ai',
        'xn--2-8sbausglk2acux.xn--p1ai',
        'xn--80aaycfjjdyvv.xn--p1ai',
        'yaminecraft.ru',
        'yourfreegamesnow.com',
        'yourgamesdownloadsone.com',
        'yourminecraft.com',
        'zerocraft.ru',
        'zip-mc.com',
        'майнкрафт18.рф',
        'майнкрафтин.рф',
    ];

    /**
     * The function that should be called when the event is fired.
     */
    async action(method: keyof Discord.ClientEvents, ...args: Discord.ClientEvents['messageCreate' | 'messageUpdate']) {
        const message = args[1] || args[0];

        if (message.cleanContent) {
            const cleanMessage = message.cleanContent.toLowerCase();

            if (this.links.some((string) => cleanMessage.includes(string))) {
                const warningMessage = await message.channel.send(
                    `${message.member} This link is not allowed to be posted as it's a mod repost/virus/unofficial site. Please only use Minecraft Forums or Curse for mod downloads.`,
                );

                this.addWarningToUser(message, 'Matched unofficial Minecraft link watcher');

                message.delete();
                setTimeout(() => warningMessage.delete(), 60000);
            }
        }
    }
}

export default UnofficialMinecraftLinkWatcher;
