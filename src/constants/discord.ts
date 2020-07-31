import type { PermissionString, ColorResolvable } from 'discord.js';

export const COLOURS: { [name: string]: ColorResolvable } = {
    GREEN: 4289797,
    RED: 13632027,
    YELLOW: 16098851,
    PRIMARY: 9028150,
};

export const PERMISSIONS: { [name: string]: PermissionString } = {
    CREATE_INSTANT_INVITE: 'CREATE_INSTANT_INVITE',
    KICK_MEMBERS: 'KICK_MEMBERS',
    BAN_MEMBERS: 'BAN_MEMBERS',
    ADMINISTRATOR: 'ADMINISTRATOR',
    MANAGE_CHANNELS: 'MANAGE_CHANNELS',
    MANAGE_GUILD: 'MANAGE_GUILD',
    ADD_REACTIONS: 'ADD_REACTIONS',
    VIEW_AUDIT_LOG: 'VIEW_AUDIT_LOG',
    PRIORITY_SPEAKER: 'PRIORITY_SPEAKER',

    VIEW_CHANNEL: 'VIEW_CHANNEL',
    READ_MESSAGE_HISTORY: 'READ_MESSAGE_HISTORY',
    SEND_MESSAGES: 'SEND_MESSAGES',
    SEND_TTS_MESSAGES: 'SEND_TTS_MESSAGES',
    MANAGE_MESSAGES: 'MANAGE_MESSAGES',
    EMBED_LINKS: 'EMBED_LINKS',
    ATTACH_FILES: 'ATTACH_FILES',
    MENTION_EVERYONE: 'MENTION_EVERYONE',
    USE_EXTERNAL_EMOJIS: 'USE_EXTERNAL_EMOJIS',

    CONNECT: 'CONNECT',
    SPEAK: 'SPEAK',
    MUTE_MEMBERS: 'MUTE_MEMBERS',
    DEAFEN_MEMBERS: 'DEAFEN_MEMBERS',
    MOVE_MEMBERS: 'MOVE_MEMBERS',
    USE_VAD: 'USE_VAD',

    CHANGE_NICKNAME: 'CHANGE_NICKNAME',
    MANAGE_NICKNAMES: 'MANAGE_NICKNAMES',
    MANAGE_ROLES: 'MANAGE_ROLES',
    MANAGE_WEBHOOKS: 'MANAGE_WEBHOOKS',
    MANAGE_EMOJIS: 'MANAGE_EMOJIS',
};
