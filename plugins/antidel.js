const { cmd } = require('../command');
const { getAnti, setAnti } = require('../data/antidel');
const config = require('../config');

cmd({
    pattern: "antidelete",
    alias: ['antidel', 'del', 'ad'],
    desc: "Toggle anti-delete — recovers deleted messages and sends to your DM",
    category: "owner",
    filename: __filename,
    react: "🛡️"
},
async (conn, mek, m, { from, reply, text, isCreator, isOwner }) => {
    if (!isCreator && !isOwner) {
        return reply('❌ *This command is only for the bot owner!*');
    }

    try {
        const cmdStatus = await getAnti();
        const herokuStatus = config.ANTI_DELETE === 'true';
        const effectiveStatus = cmdStatus || herokuStatus;

        if (!text || text.toLowerCase() === 'status') {
            return reply(
                `*🛡️ ANTI-DELETE STATUS*\n\n` +
                `├ Heroku Config (ANTI_DELETE): ${herokuStatus ? '✅ ON' : '❌ OFF'}\n` +
                `├ Command Toggle:              ${cmdStatus ? '✅ ON' : '❌ OFF'}\n` +
                `╰ Effective Status:            ${effectiveStatus ? '✅ *ACTIVE*' : '❌ *INACTIVE*'}\n\n` +
                `*How it works:*\n` +
                `Deleted messages are recovered and sent to your DM.\n` +
                `Supports: text, images, videos, audio, stickers, docs.\n\n` +
                `*Commands:*\n` +
                `• ${m.prefix}antidelete on — Enable\n` +
                `• ${m.prefix}antidelete off — Disable\n` +
                `• ${m.prefix}antidelete status — Check status\n\n` +
                `_Tip: Set ANTI_DELETE=true in Heroku config vars to enable permanently._`
            );
        }

        const action = text.toLowerCase().trim();

        if (action === 'on' || action === 'enable' || action === 'true') {
            if (cmdStatus) return reply('✅ Anti-delete command toggle is *already ON*!');
            await setAnti(true);
            return reply(
                '✅ *Anti-Delete ENABLED!*\n\n' +
                '🛡️ Deleted messages will now be forwarded to your DM.\n' +
                '📦 Supports: text, images, videos, audio, stickers & documents.\n\n' +
                '_To make this permanent, set ANTI_DELETE=true in Heroku config vars._'
            );
        }

        if (action === 'off' || action === 'disable' || action === 'false') {
            if (!cmdStatus) return reply('❌ Anti-delete command toggle is *already OFF*!');
            await setAnti(false);
            return reply(
                '❌ *Anti-Delete DISABLED!*\n\n' +
                '_Note: If ANTI_DELETE=true is set in Heroku, it will still be active via env._\n' +
                '_Set ANTI_DELETE=false in Heroku to fully disable._'
            );
        }

        return reply(
            `❌ *Unknown action!*\n\n` +
            `• ${m.prefix}antidelete on\n` +
            `• ${m.prefix}antidelete off\n` +
            `• ${m.prefix}antidelete status`
        );

    } catch (e) {
        console.error("❌ Error in antidelete command:", e);
        return reply(`❌ *Error:* ${e.message}`);
    }
});

// Quick test command
cmd({
    pattern: "testantidel",
    alias: ['testad'],
    desc: "Test antidelete system",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, { from, reply, isCreator, isOwner }) => {
    if (!isCreator && !isOwner) return reply('Owner only!');
    try {
        const cmdStatus = await getAnti();
        const herokuStatus = config.ANTI_DELETE === 'true';
        const storeSize = global.messageStore ? global.messageStore.size : 0;
        const mediaSize = global.mediaStore ? global.mediaStore.size : 0;
        reply(
            `*🧪 ANTI-DELETE TEST*\n\n` +
            `Heroku ANTI_DELETE: ${herokuStatus ? '✅ ON' : '❌ OFF'}\n` +
            `Command Toggle:     ${cmdStatus ? '✅ ON' : '❌ OFF'}\n` +
            `Cached Messages:    ${storeSize}\n` +
            `Cached Media:       ${mediaSize}\n` +
            `Prefix: ${m.prefix}\n\n` +
            `_Send a message then delete it — you should receive it in your DM._`
        );
    } catch (e) {
        reply(`Error: ${e.message}`);
    }
});
