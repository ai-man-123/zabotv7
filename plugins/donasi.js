let handler =  m => m.reply(`
╭─「 Donasi • Internet 」
│ • digi [0102810046]
╰────

╭─「 Donasi • digi 」
│ • digi [0102810046]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
