const pool = require('./config.js');
const insertBosses = require('./seedBosses.js')

;(async () => {
    // note: we don't try/catch this because if connecting throws an exception
    // we don't need to dispose of the client (it will be undefined)
    const client = await pool.connect()
    try {
      await client.query('BEGIN')
      const classesQuery = "INSERT INTO classes (tier, name, stam, life, mag, phys, spd, crit, eva, acc, mdef, pdef) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12), ($13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24), ($25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36), ($37, $38, $39, $40, $41, $42, $43, $44, $45, $46, $47, $48), ($49, $50, $51, $52, $53, $54, $55, $56, $57, $58, $59, $60), ($61, $62, $63, $64, $65, $66, $67, $68, $69, $70, $71, $72), ($73, $74, $75, $76, $77, $78, $79, $80, $81, $82, $83, $84), ($85, $86, $87, $88, $89, $90, $91, $92, $93, $94, $95, $96)"
      const insertClasses = [1, 'Acrobat', 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
        1, 'Environmentalist', 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
        1, 'Explorer', 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
        1, 'Mage', 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
        1, 'Marksman', 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
        1, 'Mercenary', 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
        1, 'Merchant', 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
        1, 'Performer', 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
      await client.query(classesQuery, insertClasses) //insertArmor(Required for boss) //insertWeapons (starters)
      const bossesQuery = "INSERT INTO boss (name, life, mag, phys, spd, crit, eva, acc, mdef, pdef, reward) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11), ($12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22), ($23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33), ($34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44), ($45, $46, $47, $48, $49, $50, $51, $52, $53, $54, $55)"
      await client.query(bossesQuery, insertBosses)
      await client.query('COMMIT')
    } catch (e) {
      await client.query('ROLLBACK')
      throw e
    } finally {
      client.release()
    }
  })().catch(e => console.error(e.stack))


//CLASSES STARTING STATS

// Acrobat
// tier 1,
// stam 10,
// life 10,
// mag 10,
// phys 10,
// spd 10,
// crit 10,
// eva 10,
// acc 10,
// mdef 10,
// pdef 10

// Environmentalist
// tier 1,
// stam 10,
// life 10,
// mag 10,
// phys 10,
// spd 10,
// crit 10,
// eva 10,
// acc 10,
// mdef 10,
// pdef 10

// Explorer
// tier 1,
// stam 10,
// life 10,
// mag 10,
// phys 10,
// spd 10,
// crit 10,
// eva 10,
// acc 10,
// mdef 10,
// pdef 10

// Mage
// tier 1,
// stam 10,
// life 10,
// mag 10,
// phys 10,
// spd 10,
// crit 10,
// eva 10,
// acc 10,
// mdef 10,
// pdef 10

// Marksman
// tier 1,
// stam 10,
// life 10,
// mag 10,
// phys 10,
// spd 10,
// crit 10,
// eva 10,
// acc 10,
// mdef 10,
// pdef 10

// Mercenary
// tier 1,
// stam 10,
// life 10,
// mag 10,
// phys 10,
// spd 10,
// crit 10,
// eva 10,
// acc 10,
// mdef 10,
// pdef 10

// Merchant
// tier 1,
// stam 10,
// life 10,
// mag 10,
// phys 10,
// spd 10,
// crit 10,
// eva 10,
// acc 10,
// mdef 10,
// pdef 10

// Performer
// tier 1,
// stam 10,
// life 10,
// mag 10,
// phys 10,
// spd 10,
// crit 10,
// eva 10,
// acc 10,
// mdef 10,
// pdef 10