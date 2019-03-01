import TxSignPrep from '../TxSignPrep'

describe('Transfer object prepare tests', () => {
  it('should build an object for Transfer and convert to known b64', () => {
    var transfertx = {"source":"ndaa32a9bsdh96faewbdbug7f6f8f9tuz9qmzjy7ttfssi7i","destination":"ndahqd4wcx295gfsnbghx8vtqjyuyd5n5vg7dt7sadgaiwrb","qty":1550453263105981,"sequence":732340766579218,"signatures":["a4jadtcatupx8jdm33df45ub3j53epaq24424kyhg35tj25t2uiam7mkzj4y8mqcfgtjkkt74qd4zbfazfi494siwh4rb7ucbfsp5rhac8tb7786n94e69jx"]}

    var bb = new TxSignPrep().prepare(transfertx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhaHFkNHdjeDI5NWdmc25iZ2h4OHZ0cWp5dXlkNW41dmc3ZHQ3c2FkZ2Fpd3JiAAWCIQf8/70AApoPXz8aEm5kYWEzMmE5YnNkaDk2ZmFld2JkYnVnN2Y2ZjhmOXR1ejlxbXpqeTd0dGZzc2k3aQ=="
    )
  })
  it('should build an object for Transfer without signatures and convert to known b64', () => {
    var transfertx = {"destination":"ndahqd4wcx295gfsnbghx8vtqjyuyd5n5vg7dt7sadgaiwrb","qty":1550453263105981,"sequence":732340766579218,"source":"ndaa32a9bsdh96faewbdbug7f6f8f9tuz9qmzjy7ttfssi7i"}

    var bb = new TxSignPrep().prepare(transfertx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhaHFkNHdjeDI5NWdmc25iZ2h4OHZ0cWp5dXlkNW41dmc3ZHQ3c2FkZ2Fpd3JiAAWCIQf8/70AApoPXz8aEm5kYWEzMmE5YnNkaDk2ZmFld2JkYnVnN2Y2ZjhmOXR1ejlxbXpqeTd0dGZzc2k3aQ=="
    )
  })
})
describe('ChangeValidation object prepare tests', () => {
  it('should build an object for ChangeValidation and convert to known b64', () => {
    var changevalidationtx = {"target":"ndajtuv4zxhs8ac6xhpt4jsfwm3d5nmrmyvytmvbtxx4jkeg","new_keys":["npuba8jadtbbeawnvrmbawdn4is45n4qukegmddtmc6v3xwzr6pvuiz86724jwzb2fpiky4bxizv"],"validation_script":"S+i5LP7D6nai/+/K","sequence":4589118442271941,"signatures":["a4jadtcaqm2jeee6nksayswtx4cee6syrpdaaw6e6vgzvbm3sen8n3rx3ruqd6gtbm5gjdzbnuat7itt3azta3ds9ejpq7aija6mk37k2x34rxfa8w2yrgmr"]}

    var bb = new TxSignPrep().prepare(changevalidationtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bnB1YmE4amFkdGJiZWF3bnZybWJhd2RuNGlzNDVuNHF1a2VnbWRkdG1jNnYzeHd6cjZwdnVpejg2NzI0and6YjJmcGlreTRieGl6dgAQTcdmlXTFbmRhanR1djR6eGhzOGFjNnhocHQ0anNmd20zZDVubXJteXZ5dG12YnR4eDRqa2VnUytpNUxQN0Q2bmFpLysvSw=="
    )
  })
  it('should build an object for ChangeValidation without signatures and convert to known b64', () => {
    var changevalidationtx = {"new_keys":["npuba8jadtbbeawnvrmbawdn4is45n4qukegmddtmc6v3xwzr6pvuiz86724jwzb2fpiky4bxizv"],"sequence":4589118442271941,"target":"ndajtuv4zxhs8ac6xhpt4jsfwm3d5nmrmyvytmvbtxx4jkeg","validation_script":"S+i5LP7D6nai/+/K"}

    var bb = new TxSignPrep().prepare(changevalidationtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bnB1YmE4amFkdGJiZWF3bnZybWJhd2RuNGlzNDVuNHF1a2VnbWRkdG1jNnYzeHd6cjZwdnVpejg2NzI0and6YjJmcGlreTRieGl6dgAQTcdmlXTFbmRhanR1djR6eGhzOGFjNnhocHQ0anNmd20zZDVubXJteXZ5dG12YnR4eDRqa2VnUytpNUxQN0Q2bmFpLysvSw=="
    )
  })
})
describe('ReleaseFromEndowment object prepare tests', () => {
  it('should build an object for ReleaseFromEndowment and convert to known b64', () => {
    var releasefromendowmenttx = {"destination":"ndahgmcr95rpakuxgq5kva4ve2v74bv4av7janajzmwsawnc","qty":1975528111046083,"sequence":7465139729523843,"signatures":["a4jadtcacw3r7d64ttcdbj6rhsque9zmn5zayxqdq3w5pxjifxr67tw6x4zq5xbe3unsvd5ecqpss8kk474cwmayczu5bgef22b3a8ezczsdbe28328dhqgr"]}

    var bb = new TxSignPrep().prepare(releasefromendowmenttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhaGdtY3I5NXJwYWt1eGdxNWt2YTR2ZTJ2NzRidjRhdjdqYW5hanptd3Nhd25jAAcEu3tNfcMAGoWBScbkgw=="
    )
  })
  it('should build an object for ReleaseFromEndowment without signatures and convert to known b64', () => {
    var releasefromendowmenttx = {"destination":"ndahgmcr95rpakuxgq5kva4ve2v74bv4av7janajzmwsawnc","qty":1975528111046083,"sequence":7465139729523843}

    var bb = new TxSignPrep().prepare(releasefromendowmenttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhaGdtY3I5NXJwYWt1eGdxNWt2YTR2ZTJ2NzRidjRhdjdqYW5hanptd3Nhd25jAAcEu3tNfcMAGoWBScbkgw=="
    )
  })
})
describe('ChangeSettlementPeriod object prepare tests', () => {
  it('should build an object for ChangeSettlementPeriod and convert to known b64', () => {
    var changesettlementperiodtx = {"target":"ndaqgp7qa7dubc9hpxr475ifmqydzbefebvx6sgyuix6gja2","period":"11m25dt14h35m49s167320us","sequence":1912297565323361,"signatures":["a4jadtcabednfsg2nv7fzn554bu7b8dbuzw5hem3thry7k48259qzy3j2qyvpbn7m3c8vmjb5hpkc8tz7afknc7kng577u55avg33xy7vxa7qt65hwr3tct8"]}

    var bb = new TxSignPrep().prepare(changesettlementperiodtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "MTFtMjVkdDE0aDM1bTQ5czE2NzMyMHVzAAbLOXkWAGFuZGFxZ3A3cWE3ZHViYzlocHhyNDc1aWZtcXlkemJlZmVidng2c2d5dWl4NmdqYTI="
    )
  })
  it('should build an object for ChangeSettlementPeriod without signatures and convert to known b64', () => {
    var changesettlementperiodtx = {"period":"11m25dt14h35m49s167320us","sequence":1912297565323361,"target":"ndaqgp7qa7dubc9hpxr475ifmqydzbefebvx6sgyuix6gja2"}

    var bb = new TxSignPrep().prepare(changesettlementperiodtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "MTFtMjVkdDE0aDM1bTQ5czE2NzMyMHVzAAbLOXkWAGFuZGFxZ3A3cWE3ZHViYzlocHhyNDc1aWZtcXlkemJlZmVidng2c2d5dWl4NmdqYTI="
    )
  })
})
describe('Delegate object prepare tests', () => {
  it('should build an object for Delegate and convert to known b64', () => {
    var delegatetx = {"target":"ndadx85fgbiit65uxrtvq7pf6vwi754ms8qh6efgcqr8cqfs","node":"ndaq6pbptbdgyaattb3y7wjewab5ajxetf3epwid6ayg2pgy","sequence":2483436573217588,"signatures":["a4jadtcaba6rvbs48byqidzi8sn3iujprf9mpumsfhxvuxxswuasmhmgctz3fwzvqu9mijs4jx68af3m94pkn2kduripauvckqhdfj85rt38mcstkuvccgd8"]}

    var bb = new TxSignPrep().prepare(delegatetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhcTZwYnB0YmRneWFhdHRiM3k3d2pld2FiNWFqeGV0ZjNlcHdpZDZheWcycGd5AAjSrCLE0zRuZGFkeDg1ZmdiaWl0NjV1eHJ0dnE3cGY2dndpNzU0bXM4cWg2ZWZnY3FyOGNxZnM="
    )
  })
  it('should build an object for Delegate without signatures and convert to known b64', () => {
    var delegatetx = {"node":"ndaq6pbptbdgyaattb3y7wjewab5ajxetf3epwid6ayg2pgy","sequence":2483436573217588,"target":"ndadx85fgbiit65uxrtvq7pf6vwi754ms8qh6efgcqr8cqfs"}

    var bb = new TxSignPrep().prepare(delegatetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhcTZwYnB0YmRneWFhdHRiM3k3d2pld2FiNWFqeGV0ZjNlcHdpZDZheWcycGd5AAjSrCLE0zRuZGFkeDg1ZmdiaWl0NjV1eHJ0dnE3cGY2dndpNzU0bXM4cWg2ZWZnY3FyOGNxZnM="
    )
  })
})
describe('CreditEAI object prepare tests', () => {
  it('should build an object for CreditEAI and convert to known b64', () => {
    var crediteaitx = {"node":"ndadepjp3rg8f2jyq8ncxqeccxq2ah7sv8shduay8xpt8mmz","sequence":2673222963759107,"signatures":["a4jadtcakbyd9f38n2sdwg98z42icakibmasan9ygkj9ks8wpztj6ms59khbrqjcpasw5zxjwsqhgyax359ehc5dur58xm8c3nhyg6xvn9bj4szvkpehddc2"]}

    var bb = new TxSignPrep().prepare(crediteaitx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhZGVwanAzcmc4ZjJqeXE4bmN4cWVjY3hxMmFoN3N2OHNoZHVheTh4cHQ4bW16AAl/SDkpCAM="
    )
  })
  it('should build an object for CreditEAI without signatures and convert to known b64', () => {
    var crediteaitx = {"node":"ndadepjp3rg8f2jyq8ncxqeccxq2ah7sv8shduay8xpt8mmz","sequence":2673222963759107}

    var bb = new TxSignPrep().prepare(crediteaitx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhZGVwanAzcmc4ZjJqeXE4bmN4cWVjY3hxMmFoN3N2OHNoZHVheTh4cHQ4bW16AAl/SDkpCAM="
    )
  })
})
describe('Lock object prepare tests', () => {
  it('should build an object for Lock and convert to known b64', () => {
    var locktx = {"target":"ndaav3kzhn75mm3e49k2tkhkxp67xwyeg8fcbkwkfahii3i4","period":"3y20dt6h48m279449us","sequence":5203743511895827,"signatures":["a4jadtcam7v3zhwie7tw7ze2a3jr38u8uvq3qhuqzartv4trr4jts4n3cry3xj76z3hq9rmpf4brp73xzz5c4u54bzxcantyakjtzj6e847xuekfiv5f6fdj"]}

    var bb = new TxSignPrep().prepare(locktx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "M3kyMGR0Nmg0OG0yNzk0NDl1cwASfMbzh18TbmRhYXYza3pobjc1bW0zZTQ5azJ0a2hreHA2N3h3eWVnOGZjYmt3a2ZhaGlpM2k0"
    )
  })
  it('should build an object for Lock without signatures and convert to known b64', () => {
    var locktx = {"period":"3y20dt6h48m279449us","sequence":5203743511895827,"target":"ndaav3kzhn75mm3e49k2tkhkxp67xwyeg8fcbkwkfahii3i4"}

    var bb = new TxSignPrep().prepare(locktx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "M3kyMGR0Nmg0OG0yNzk0NDl1cwASfMbzh18TbmRhYXYza3pobjc1bW0zZTQ5azJ0a2hreHA2N3h3eWVnOGZjYmt3a2ZhaGlpM2k0"
    )
  })
})
describe('Notify object prepare tests', () => {
  it('should build an object for Notify and convert to known b64', () => {
    var notifytx = {"target":"ndadfrbrz7p78xriyn3avsgh3rwuzsjdj6fz2efyh9gfa8h6","sequence":1507085064423784,"signatures":["a4jadtca53k3by9f5armra79zhchdfxt3nsky67f2jyxkb938wvmmpnkdj3f9mz8psnfukkuc6x5mmumqefmjsg2tbs58j8bf2x8r6ep6j2nna3zc3f8nqsw"]}

    var bb = new TxSignPrep().prepare(notifytx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AAVar5XpSWhuZGFkZnJicno3cDc4eHJpeW4zYXZzZ2gzcnd1enNqZGo2ZnoyZWZ5aDlnZmE4aDY="
    )
  })
  it('should build an object for Notify without signatures and convert to known b64', () => {
    var notifytx = {"sequence":1507085064423784,"target":"ndadfrbrz7p78xriyn3avsgh3rwuzsjdj6fz2efyh9gfa8h6"}

    var bb = new TxSignPrep().prepare(notifytx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AAVar5XpSWhuZGFkZnJicno3cDc4eHJpeW4zYXZzZ2gzcnd1enNqZGo2ZnoyZWZ5aDlnZmE4aDY="
    )
  })
})
describe('SetRewardsDestination object prepare tests', () => {
  it('should build an object for SetRewardsDestination and convert to known b64', () => {
    var setrewardsdestinationtx = {"target":"ndan3a8p3de64vrna9mt5bqks29sjaq5fshfr95s4bzesn89","destination":"ndadiunamygf3y5xdp7378et7cwnx3nd4q3thkx3eye93g5c","sequence":3658774096214545,"signatures":["a4jadtcayf3b4xcqqn9ts4tg9wz5666556cty9qu46c2963tbft5pwmhmjv7ybsvzwxmn3f3ay87gf5f8axguz2m4f5wb8rwhyb8weifqbtrc9ygvw9q69z6"]}

    var bb = new TxSignPrep().prepare(setrewardsdestinationtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhZGl1bmFteWdmM3k1eGRwNzM3OGV0N2N3bngzbmQ0cTN0aGt4M2V5ZTkzZzVjAAz/orpRehFuZGFuM2E4cDNkZTY0dnJuYTltdDVicWtzMjlzamFxNWZzaGZyOTVzNGJ6ZXNuODk="
    )
  })
  it('should build an object for SetRewardsDestination without signatures and convert to known b64', () => {
    var setrewardsdestinationtx = {"destination":"ndadiunamygf3y5xdp7378et7cwnx3nd4q3thkx3eye93g5c","sequence":3658774096214545,"target":"ndan3a8p3de64vrna9mt5bqks29sjaq5fshfr95s4bzesn89"}

    var bb = new TxSignPrep().prepare(setrewardsdestinationtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhZGl1bmFteWdmM3k1eGRwNzM3OGV0N2N3bngzbmQ0cTN0aGt4M2V5ZTkzZzVjAAz/orpRehFuZGFuM2E4cDNkZTY0dnJuYTltdDVicWtzMjlzamFxNWZzaGZyOTVzNGJ6ZXNuODk="
    )
  })
})
describe('ClaimAccount object prepare tests', () => {
  it('should build an object for ClaimAccount and convert to known b64', () => {
    var claimaccounttx = {"target":"ndap5p3gyxxhzj7g37rcu3rz8ei5mieef85ru8x9nwweke8d","ownership":"npuba8jadtbbeb6gtsenci99k3phntut2utadn46ua9tj8yer9gnik5m9v7ye4yx3nevtah8efz8","validation_keys":["npuba8jadtbbeag3xntctezggdr9icapmg3iwmnx96yuwmzdvpppmmhb7b6i7e6xkepdwr2zxpwa"],"validation_script":"1Z2ffArgOD8XiX3n","sequence":7142365320213337,"signature":"a4jadtcaq5xn9hf6j5wtuhhs9b86eaa2bjbdgsafgrj4tfzhh75cb33pq2zb2bxhqwvqwvqa96qa6rrgt7gtzzh2ea6fnch9adwckkj7wd3y7se26fjui8y3"}

    var bb = new TxSignPrep().prepare(claimaccounttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bnB1YmE4amFkdGJiZWI2Z3RzZW5jaTk5azNwaG50dXQydXRhZG40NnVhOXRqOHllcjlnbmlrNW05djd5ZTR5eDNuZXZ0YWg4ZWZ6OAAZX/GDxHNZbmRhcDVwM2d5eHhoemo3ZzM3cmN1M3J6OGVpNW1pZWVmODVydTh4OW53d2VrZThkbnB1YmE4amFkdGJiZWFnM3hudGN0ZXpnZ2RyOWljYXBtZzNpd21ueDk2eXV3bXpkdnBwcG1taGI3YjZpN2U2eGtlcGR3cjJ6eHB3YTFaMmZmQXJnT0Q4WGlYM24="
    )
  })
  it('should build an object for ClaimAccount without signatures and convert to known b64', () => {
    var claimaccounttx = {"ownership":"npuba8jadtbbeb6gtsenci99k3phntut2utadn46ua9tj8yer9gnik5m9v7ye4yx3nevtah8efz8","sequence":7142365320213337,"target":"ndap5p3gyxxhzj7g37rcu3rz8ei5mieef85ru8x9nwweke8d","validation_keys":["npuba8jadtbbeag3xntctezggdr9icapmg3iwmnx96yuwmzdvpppmmhb7b6i7e6xkepdwr2zxpwa"],"validation_script":"1Z2ffArgOD8XiX3n"}

    var bb = new TxSignPrep().prepare(claimaccounttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bnB1YmE4amFkdGJiZWI2Z3RzZW5jaTk5azNwaG50dXQydXRhZG40NnVhOXRqOHllcjlnbmlrNW05djd5ZTR5eDNuZXZ0YWg4ZWZ6OAAZX/GDxHNZbmRhcDVwM2d5eHhoemo3ZzM3cmN1M3J6OGVpNW1pZWVmODVydTh4OW53d2VrZThkbnB1YmE4amFkdGJiZWFnM3hudGN0ZXpnZ2RyOWljYXBtZzNpd21ueDk2eXV3bXpkdnBwcG1taGI3YjZpN2U2eGtlcGR3cjJ6eHB3YTFaMmZmQXJnT0Q4WGlYM24="
    )
  })
})
describe('Stake object prepare tests', () => {
  it('should build an object for Stake and convert to known b64', () => {
    var staketx = {"target":"ndapsnqcytq8ezzg7dn976hs4wydxk6p52mfqf38q5pkjt6z","staked_account":"ndafvbdhti3cxvnw85nsgzcjs73bh34bzkbr79jepd9gp2sf","sequence":6229113420623440,"signatures":["a4jadtcaarh6k8gy87r4sz59pvehhssthrkvs3wthfppi9gqv6v7uj7wqhkqax96m58wg6fheb3zpzw69bscbfvbi9fc9aa8i3a3z2yhby7kj2xe9k46svv9"]}

    var bb = new TxSignPrep().prepare(staketx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "ABYhWHyzrlBuZGFmdmJkaHRpM2N4dm53ODVuc2d6Y2pzNzNiaDM0YnprYnI3OWplcGQ5Z3Ayc2ZuZGFwc25xY3l0cThlenpnN2RuOTc2aHM0d3lkeGs2cDUybWZxZjM4cTVwa2p0Nno="
    )
  })
  it('should build an object for Stake without signatures and convert to known b64', () => {
    var staketx = {"sequence":6229113420623440,"staked_account":"ndafvbdhti3cxvnw85nsgzcjs73bh34bzkbr79jepd9gp2sf","target":"ndapsnqcytq8ezzg7dn976hs4wydxk6p52mfqf38q5pkjt6z"}

    var bb = new TxSignPrep().prepare(staketx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "ABYhWHyzrlBuZGFmdmJkaHRpM2N4dm53ODVuc2d6Y2pzNzNiaDM0YnprYnI3OWplcGQ5Z3Ayc2ZuZGFwc25xY3l0cThlenpnN2RuOTc2aHM0d3lkeGs2cDUybWZxZjM4cTVwa2p0Nno="
    )
  })
})
describe('RegisterNode object prepare tests', () => {
  it('should build an object for RegisterNode and convert to known b64', () => {
    var registernodetx = {"node":"ndaqpz792w73xtxycfpaxfkrszq6825p9baf3k58vuuwj4rh","distribution_script":"uEESWBaE/8pvXKe/","rpc_address":"string: thct uax xkqf afplsj bcxoeffr ","sequence":5633755682856050,"signatures":["a4jadtcaym2v2tvxpz6e276u37jyjbbas7c2teczt2jt8mjrx7yqrzrwscc668pf9vixuaqm4xwcb3ejjtenmmbetr9r7fq85d5jew2wz53wgzfy3dn6jpv5"]}

    var bb = new TxSignPrep().prepare(registernodetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "dUVFU1dCYUUvOHB2WEtlL25kYXFwejc5Mnc3M3h0eHljZnBheGZrcnN6cTY4MjVwOWJhZjNrNTh2dXV3ajRyaHN0cmluZzogdGhjdCB1YXggeGtxZiBhZnBsc2ogYmN4b2VmZnIgABQD3vY6XHI="
    )
  })
  it('should build an object for RegisterNode without signatures and convert to known b64', () => {
    var registernodetx = {"distribution_script":"uEESWBaE/8pvXKe/","node":"ndaqpz792w73xtxycfpaxfkrszq6825p9baf3k58vuuwj4rh","rpc_address":"string: thct uax xkqf afplsj bcxoeffr ","sequence":5633755682856050}

    var bb = new TxSignPrep().prepare(registernodetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "dUVFU1dCYUUvOHB2WEtlL25kYXFwejc5Mnc3M3h0eHljZnBheGZrcnN6cTY4MjVwOWJhZjNrNTh2dXV3ajRyaHN0cmluZzogdGhjdCB1YXggeGtxZiBhZnBsc2ogYmN4b2VmZnIgABQD3vY6XHI="
    )
  })
})
describe('NominateNodeReward object prepare tests', () => {
  it('should build an object for NominateNodeReward and convert to known b64', () => {
    var nominatenoderewardtx = {"random":7664575722253654,"sequence":4786722739683373,"signatures":["a4jadtcaymwk2s7nf6ssw6z3q5nr6ip5nip7vztwgm5yb9u9kki4835biyj4e6vs53k8yrgfr4as66ijfiyj2irqssy4in2e7uuhwknjsm43t9ekf3katg24"]}

    var bb = new TxSignPrep().prepare(nominatenoderewardtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "ABs65BlHbVYAEQF/vImALQ=="
    )
  })
  it('should build an object for NominateNodeReward without signatures and convert to known b64', () => {
    var nominatenoderewardtx = {"random":7664575722253654,"sequence":4786722739683373}

    var bb = new TxSignPrep().prepare(nominatenoderewardtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "ABs65BlHbVYAEQF/vImALQ=="
    )
  })
})
describe('ClaimNodeReward object prepare tests', () => {
  it('should build an object for ClaimNodeReward and convert to known b64', () => {
    var claimnoderewardtx = {"node":"ndabx82yq89wk5ktad6sebnndcj2iyjyrysmkq8yhbjk6wi7","sequence":4402827188794727,"signatures":["a4jadtcarwcpeu5k2u49usar3parwgrynbi6ftv55uamcwkircmu9jsh344pef84qbiy2djaecgf5izmc4rqsg3w3f8xj4q7tcdeuy3tegngqwrdzgpd98nm"]}

    var bb = new TxSignPrep().prepare(claimnoderewardtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhYng4MnlxODl3azVrdGFkNnNlYm5uZGNqMml5anlyeXNta3E4eWhiams2d2k3AA+kWRaYdWc="
    )
  })
  it('should build an object for ClaimNodeReward without signatures and convert to known b64', () => {
    var claimnoderewardtx = {"node":"ndabx82yq89wk5ktad6sebnndcj2iyjyrysmkq8yhbjk6wi7","sequence":4402827188794727}

    var bb = new TxSignPrep().prepare(claimnoderewardtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhYng4MnlxODl3azVrdGFkNnNlYm5uZGNqMml5anlyeXNta3E4eWhiams2d2k3AA+kWRaYdWc="
    )
  })
})
describe('TransferAndLock object prepare tests', () => {
  it('should build an object for TransferAndLock and convert to known b64', () => {
    var transferandlocktx = {"source":"ndap6gmkrvkkvmbsmbxivibafz54k86phscqa9umhazfwyx9","destination":"ndanyqy9skqqhik257b4w7env29z2uvavy5fzmzp7jd2thua","qty":6090287018180214,"period":"1y9m15dt10h9m51s569721us","sequence":7443647051579152,"signatures":["a4jadtcaz9vi2yz4cn8p65zd6t2fvczshd3jghecxvqjcmge3wdx385zwuyyi8xpvgebe7t7nkdc7b794biic6jysjd8rsn498gi8revdzyxxesyeqch37np"]}

    var bb = new TxSignPrep().prepare(transferandlocktx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhbnlxeTlza3FxaGlrMjU3YjR3N2VudjI5ejJ1dmF2eTVmem16cDdqZDJ0aHVhMXk5bTE1ZHQxMGg5bTUxczU2OTcyMXVzABWjFXJMfnYAGnH1Ile/EG5kYXA2Z21rcnZra3ZtYnNtYnhpdmliYWZ6NTRrODZwaHNjcWE5dW1oYXpmd3l4OQ=="
    )
  })
  it('should build an object for TransferAndLock without signatures and convert to known b64', () => {
    var transferandlocktx = {"destination":"ndanyqy9skqqhik257b4w7env29z2uvavy5fzmzp7jd2thua","period":"1y9m15dt10h9m51s569721us","qty":6090287018180214,"sequence":7443647051579152,"source":"ndap6gmkrvkkvmbsmbxivibafz54k86phscqa9umhazfwyx9"}

    var bb = new TxSignPrep().prepare(transferandlocktx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhbnlxeTlza3FxaGlrMjU3YjR3N2VudjI5ejJ1dmF2eTVmem16cDdqZDJ0aHVhMXk5bTE1ZHQxMGg5bTUxczU2OTcyMXVzABWjFXJMfnYAGnH1Ile/EG5kYXA2Z21rcnZra3ZtYnNtYnhpdmliYWZ6NTRrODZwaHNjcWE5dW1oYXpmd3l4OQ=="
    )
  })
})
describe('CommandValidatorChange object prepare tests', () => {
  it('should build an object for CommandValidatorChange and convert to known b64', () => {
    var commandvalidatorchangetx = {"public_key":"6OPCJNEfZczejuZB","power":7147475985406603,"sequence":3268473309273449,"signatures":["a4jadtcawd8ivuxvf6y3iphxt2arn8r66k5s9ebxsjga5kq7fjcpuzd7psq9ggeb42ysa7dmkfkrkiyh9k55eyp3pxqyxpwagx7ipisjuaxpdgjy3cnnkp2t"]}

    var bb = new TxSignPrep().prepare(commandvalidatorchangetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "ABlkl28mmos2T1BDSk5FZlpjemVqdVpCAAucqL6OnWk="
    )
  })
  it('should build an object for CommandValidatorChange without signatures and convert to known b64', () => {
    var commandvalidatorchangetx = {"power":7147475985406603,"public_key":"6OPCJNEfZczejuZB","sequence":3268473309273449}

    var bb = new TxSignPrep().prepare(commandvalidatorchangetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "ABlkl28mmos2T1BDSk5FZlpjemVqdVpCAAucqL6OnWk="
    )
  })
})
describe('SidechainTx object prepare tests', () => {
  it('should build an object for SidechainTx and convert to known b64', () => {
    var sidechaintxtx = {"source":"ndabp2tmru5xbtsm5j6ihuhwtmrz2ysk7qh3ehkd4vd5jyr2","sidechain_id":111,"sidechain_signable_bytes":"QLS1I0HufKxU6o0/","sidechain_signatures":["a4jadtcap2wr3xx28wzfphnu87i6scbiebejts73srdn694ab82zd8e3bz39yei4g4wz5685vbzyedzapuxcnjbxa9ebcew7zgys7dsuwgujkhxv67ak688r"],"sequence":666378943674263,"signatures":["a4jadtca993qc4h5mm94sp22eppsg9q8q5mik7xe3aer5xi2wysudhc97kr6njp8ihaf8gs4ssmtseaicep2x5k2tbmzhzgwkzxp54bkt67ucnun4h92cmuj"]}

    var bb = new TxSignPrep().prepare(sidechaintxtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AAJeEXA5N5cAAAAAAAAAb1FMUzFJMEh1Zkt4VTZvMC9hNGphZHRjYXAyd3IzeHgyOHd6ZnBobnU4N2k2c2NiaWViZWp0czczc3JkbjY5NGFiODJ6ZDhlM2J6Mzl5ZWk0ZzR3ejU2ODV2Ynp5ZWR6YXB1eGNuamJ4YTllYmNldzd6Z3lzN2RzdXdndWpraHh2NjdhazY4OHJuZGFicDJ0bXJ1NXhidHNtNWo2aWh1aHd0bXJ6MnlzazdxaDNlaGtkNHZkNWp5cjI="
    )
  })
  it('should build an object for SidechainTx without signatures and convert to known b64', () => {
    var sidechaintxtx = {"sequence":666378943674263,"sidechain_id":111,"sidechain_signable_bytes":"QLS1I0HufKxU6o0/","sidechain_signatures":["a4jadtcap2wr3xx28wzfphnu87i6scbiebejts73srdn694ab82zd8e3bz39yei4g4wz5685vbzyedzapuxcnjbxa9ebcew7zgys7dsuwgujkhxv67ak688r"],"source":"ndabp2tmru5xbtsm5j6ihuhwtmrz2ysk7qh3ehkd4vd5jyr2"}

    var bb = new TxSignPrep().prepare(sidechaintxtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AAJeEXA5N5cAAAAAAAAAb1FMUzFJMEh1Zkt4VTZvMC9hNGphZHRjYXAyd3IzeHgyOHd6ZnBobnU4N2k2c2NiaWViZWp0czczc3JkbjY5NGFiODJ6ZDhlM2J6Mzl5ZWk0ZzR3ejU2ODV2Ynp5ZWR6YXB1eGNuamJ4YTllYmNldzd6Z3lzN2RzdXdndWpraHh2NjdhazY4OHJuZGFicDJ0bXJ1NXhidHNtNWo2aWh1aHd0bXJ6MnlzazdxaDNlaGtkNHZkNWp5cjI="
    )
  })
})
describe('UnregisterNode object prepare tests', () => {
  it('should build an object for UnregisterNode and convert to known b64', () => {
    var unregisternodetx = {"node":"ndaca55g8khe5bmgka3xidc47t85suc3cwyauyj96339nz5c","sequence":5623762082951376,"signatures":["a4jadtcaxdj2hcbbx28jg354d36esegi7exet6hyj2znwmcs66jgmjiqir2e2943u4ubikecmjn9jr9mgtaszc2u5j8igk76inbq57yfkjqymy5mfj2iy7fm"]}

    var bb = new TxSignPrep().prepare(unregisternodetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhY2E1NWc4a2hlNWJtZ2thM3hpZGM0N3Q4NXN1YzNjd3lhdXlqOTYzMzluejVjABP6yCVBcNA="
    )
  })
  it('should build an object for UnregisterNode without signatures and convert to known b64', () => {
    var unregisternodetx = {"node":"ndaca55g8khe5bmgka3xidc47t85suc3cwyauyj96339nz5c","sequence":5623762082951376}

    var bb = new TxSignPrep().prepare(unregisternodetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhY2E1NWc4a2hlNWJtZ2thM3hpZGM0N3Q4NXN1YzNjd3lhdXlqOTYzMzluejVjABP6yCVBcNA="
    )
  })
})
describe('Unstake object prepare tests', () => {
  it('should build an object for Unstake and convert to known b64', () => {
    var unstaketx = {"target":"ndabb747d7azeggw4dkqwktzzyan92evx4h39vb8g46gm8ip","sequence":3820780875409098,"signatures":["a4jadtcaiixjei8kuv8jwruh6puaw9kj2mpqgqgdxtavb5vuvsmgvpu2p5cpw8wrg4mymkd87i47nkiycz7fekgzhj5kn8ik9ivy9qskts23shmkixpbbqqx"]}

    var bb = new TxSignPrep().prepare(unstaketx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AA2S+t7X5spuZGFiYjc0N2Q3YXplZ2d3NGRrcXdrdHp6eWFuOTJldng0aDM5dmI4ZzQ2Z204aXA="
    )
  })
  it('should build an object for Unstake without signatures and convert to known b64', () => {
    var unstaketx = {"sequence":3820780875409098,"target":"ndabb747d7azeggw4dkqwktzzyan92evx4h39vb8g46gm8ip"}

    var bb = new TxSignPrep().prepare(unstaketx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AA2S+t7X5spuZGFiYjc0N2Q3YXplZ2d3NGRrcXdrdHp6eWFuOTJldng0aDM5dmI4ZzQ2Z204aXA="
    )
  })
})
describe('Issue object prepare tests', () => {
  it('should build an object for Issue and convert to known b64', () => {
    var issuetx = {"qty":2805298263287969,"sequence":8998038698708596,"signatures":["a4jadtcamkfqs3xttck58kpir46cjehbcsfbv9r9u47i6wz89z8ezd9k9unmnga575kae3pv9un6s4rrw7bwjcd7akq9bpvvtn7m6jyp8sxy64qgi42r5jd7"]}

    var bb = new TxSignPrep().prepare(issuetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AAn3Z2Z46KEAH/erJE/OdA=="
    )
  })
  it('should build an object for Issue without signatures and convert to known b64', () => {
    var issuetx = {"qty":2805298263287969,"sequence":8998038698708596}

    var bb = new TxSignPrep().prepare(issuetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AAn3Z2Z46KEAH/erJE/OdA=="
    )
  })
})

