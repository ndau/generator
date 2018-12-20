import TxSignPrep from '../TxSignPrep'

describe('Transfer object prepare tests', () => {
  it('should build an object for Transfer and convert to known b64', () => {
    var transfertx = {"source":"ndafm5p7wkpyubvk9crg4yg6bdmg3qavhhhu6wk4idxrzbs3","destination":"ndantg2f2iz5xs8e3e4ipbk2uef5f98hubvuegn9499udhgm","qty":1550453263105981,"sequence":732340766579218,"signatures":["a4jadtca9i6zk4e43kp8mgev7xjc6fdry8hgpanqv3usq528yq7htfcc3da3kkqma3tiruivgje8928krpsizvczbjnwrpxb42z956bcf6expetxutiguxic"]}

    var bb = new TxSignPrep().prepare(transfertx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhbnRnMmYyaXo1eHM4ZTNlNGlwYmsydWVmNWY5OGh1YnZ1ZWduOTQ5OXVkaGdtAAWCIQf8/70AApoPXz8aEm5kYWZtNXA3d2tweXVidms5Y3JnNHlnNmJkbWczcWF2aGhodTZ3azRpZHhyemJzMw=="
    )
  })
  it('should build an object for Transfer without signatures and convert to known b64', () => {
    var transfertx = {"destination":"ndantg2f2iz5xs8e3e4ipbk2uef5f98hubvuegn9499udhgm","qty":1550453263105981,"sequence":732340766579218,"source":"ndafm5p7wkpyubvk9crg4yg6bdmg3qavhhhu6wk4idxrzbs3"}

    var bb = new TxSignPrep().prepare(transfertx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhbnRnMmYyaXo1eHM4ZTNlNGlwYmsydWVmNWY5OGh1YnZ1ZWduOTQ5OXVkaGdtAAWCIQf8/70AApoPXz8aEm5kYWZtNXA3d2tweXVidms5Y3JnNHlnNmJkbWczcWF2aGhodTZ3azRpZHhyemJzMw=="
    )
  })
})
describe('ChangeValidation object prepare tests', () => {
  it('should build an object for ChangeValidation and convert to known b64', () => {
    var changevalidationtx = {"target":"ndaigsueiaggxy4xw69cqfma6fwfijqdmnzp75pjhu8pak4w","new_keys":["npuba8jadtbbeda38bqm6gtvkpenyxi7m2cgqtyamrsvt67ide2ixatd85kv34n5sm5ntwc2d9n6"],"validation_script":"zxeUJSaEirQcxkzw","sequence":4589118442271941,"signatures":["a4jadtca3j9dnzxs3t6hfiaujvs788zpmqgs9uefye5k89en9srbevrd2r7jdyqxu9hsswxmginw72dcjsg7v8wmq38g3gbcjntufrd5vz89f6aqtss948w4"]}

    var bb = new TxSignPrep().prepare(changevalidationtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bnB1YmE4amFkdGJiZWRhMzhicW02Z3R2a3Blbnl4aTdtMmNncXR5YW1yc3Z0NjdpZGUyaXhhdGQ4NWt2MzRuNXNtNW50d2MyZDluNgAQTcdmlXTFbmRhaWdzdWVpYWdneHk0eHc2OWNxZm1hNmZ3ZmlqcWRtbnpwNzVwamh1OHBhazR3enhlVUpTYUVpclFjeGt6dw=="
    )
  })
  it('should build an object for ChangeValidation without signatures and convert to known b64', () => {
    var changevalidationtx = {"new_keys":["npuba8jadtbbeda38bqm6gtvkpenyxi7m2cgqtyamrsvt67ide2ixatd85kv34n5sm5ntwc2d9n6"],"sequence":4589118442271941,"target":"ndaigsueiaggxy4xw69cqfma6fwfijqdmnzp75pjhu8pak4w","validation_script":"zxeUJSaEirQcxkzw"}

    var bb = new TxSignPrep().prepare(changevalidationtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bnB1YmE4amFkdGJiZWRhMzhicW02Z3R2a3Blbnl4aTdtMmNncXR5YW1yc3Z0NjdpZGUyaXhhdGQ4NWt2MzRuNXNtNW50d2MyZDluNgAQTcdmlXTFbmRhaWdzdWVpYWdneHk0eHc2OWNxZm1hNmZ3ZmlqcWRtbnpwNzVwamh1OHBhazR3enhlVUpTYUVpclFjeGt6dw=="
    )
  })
})
describe('ReleaseFromEndowment object prepare tests', () => {
  it('should build an object for ReleaseFromEndowment and convert to known b64', () => {
    var releasefromendowmenttx = {"destination":"ndarrpbk2278zzdkpmds4vu52buszzvkav78cnvh88qqg9mf","qty":1975528111046083,"sequence":7465139729523843,"signatures":["a4jadtcaweeh8pfxys9enpgij6mpkszvatic9f4daqvrp9az85ixmn7vz7dfty8nwdirnae9xqqfhkq4vu6tjwq7vtieajtqsm283c9pphks2qmkifg4qibb"]}

    var bb = new TxSignPrep().prepare(releasefromendowmenttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhcnJwYmsyMjc4enpka3BtZHM0dnU1MmJ1c3p6dmthdjc4Y252aDg4cXFnOW1mAAcEu3tNfcMAGoWBScbkgw=="
    )
  })
  it('should build an object for ReleaseFromEndowment without signatures and convert to known b64', () => {
    var releasefromendowmenttx = {"destination":"ndarrpbk2278zzdkpmds4vu52buszzvkav78cnvh88qqg9mf","qty":1975528111046083,"sequence":7465139729523843}

    var bb = new TxSignPrep().prepare(releasefromendowmenttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhcnJwYmsyMjc4enpka3BtZHM0dnU1MmJ1c3p6dmthdjc4Y252aDg4cXFnOW1mAAcEu3tNfcMAGoWBScbkgw=="
    )
  })
})
describe('ChangeSettlementPeriod object prepare tests', () => {
  it('should build an object for ChangeSettlementPeriod and convert to known b64', () => {
    var changesettlementperiodtx = {"target":"ndaqczchb8rihvnadyvj88x68ngfx7p3xf2kzhznaeh34qtr","period":"11m25dt14h35m49s167320us","sequence":1912297565323361,"signatures":["a4jadtcaxa5jw5m965ibkq58yrk4rjgmt48egs8eaw8swrp7ub2tv5awb7xuvdpk9saxkv5svquvhkmc7d268yj6juxzyxwyyuycjnrq484uvr9s68nc2936"]}

    var bb = new TxSignPrep().prepare(changesettlementperiodtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "MTFtMjVkdDE0aDM1bTQ5czE2NzMyMHVzAAbLOXkWAGFuZGFxY3pjaGI4cmlodm5hZHl2ajg4eDY4bmdmeDdwM3hmMmt6aHpuYWVoMzRxdHI="
    )
  })
  it('should build an object for ChangeSettlementPeriod without signatures and convert to known b64', () => {
    var changesettlementperiodtx = {"period":"11m25dt14h35m49s167320us","sequence":1912297565323361,"target":"ndaqczchb8rihvnadyvj88x68ngfx7p3xf2kzhznaeh34qtr"}

    var bb = new TxSignPrep().prepare(changesettlementperiodtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "MTFtMjVkdDE0aDM1bTQ5czE2NzMyMHVzAAbLOXkWAGFuZGFxY3pjaGI4cmlodm5hZHl2ajg4eDY4bmdmeDdwM3hmMmt6aHpuYWVoMzRxdHI="
    )
  })
})
describe('Delegate object prepare tests', () => {
  it('should build an object for Delegate and convert to known b64', () => {
    var delegatetx = {"target":"ndahxqn3gbjhhkw6bkxuprhyescywp96vagrm498vf5xpa5b","node":"ndaaud5dgwnfzpmdpu8ntdkjs4jucye7knbng26vqwfabhzd","sequence":2483436573217588,"signatures":["a4jadtcarnb48a6g4d2zavb5x6jcd6mxtk9v43wjmqm3qq5th4cfwq6jucmqr2kdyyevkfpgu7bgcqigakjyupxm9f5uzg5xpjsqb6bx4wq8kby7wzdzym79"]}

    var bb = new TxSignPrep().prepare(delegatetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhYXVkNWRnd25menBtZHB1OG50ZGtqczRqdWN5ZTdrbmJuZzI2dnF3ZmFiaHpkAAjSrCLE0zRuZGFoeHFuM2diamhoa3c2Ymt4dXByaHllc2N5d3A5NnZhZ3JtNDk4dmY1eHBhNWI="
    )
  })
  it('should build an object for Delegate without signatures and convert to known b64', () => {
    var delegatetx = {"node":"ndaaud5dgwnfzpmdpu8ntdkjs4jucye7knbng26vqwfabhzd","sequence":2483436573217588,"target":"ndahxqn3gbjhhkw6bkxuprhyescywp96vagrm498vf5xpa5b"}

    var bb = new TxSignPrep().prepare(delegatetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhYXVkNWRnd25menBtZHB1OG50ZGtqczRqdWN5ZTdrbmJuZzI2dnF3ZmFiaHpkAAjSrCLE0zRuZGFoeHFuM2diamhoa3c2Ymt4dXByaHllc2N5d3A5NnZhZ3JtNDk4dmY1eHBhNWI="
    )
  })
})
describe('CreditEAI object prepare tests', () => {
  it('should build an object for CreditEAI and convert to known b64', () => {
    var crediteaitx = {"node":"ndarg7fz2rhzr8c6tpgazecjmtg96wff9si6i9xz47kgh8vp","sequence":2673222963759107,"signatures":["a4jadtcan9azzid92vybh57386fpzyf5gghdvhzm7iuzzezaiqs9537ik5xe42bjyzce47af7t7pr2zunh3x6i3ekfy8m2hgbscykr7s8tchspsw4g5x6y7r"]}

    var bb = new TxSignPrep().prepare(crediteaitx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhcmc3Znoycmh6cjhjNnRwZ2F6ZWNqbXRnOTZ3ZmY5c2k2aTl4ejQ3a2doOHZwAAl/SDkpCAM="
    )
  })
  it('should build an object for CreditEAI without signatures and convert to known b64', () => {
    var crediteaitx = {"node":"ndarg7fz2rhzr8c6tpgazecjmtg96wff9si6i9xz47kgh8vp","sequence":2673222963759107}

    var bb = new TxSignPrep().prepare(crediteaitx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhcmc3Znoycmh6cjhjNnRwZ2F6ZWNqbXRnOTZ3ZmY5c2k2aTl4ejQ3a2doOHZwAAl/SDkpCAM="
    )
  })
})
describe('Lock object prepare tests', () => {
  it('should build an object for Lock and convert to known b64', () => {
    var locktx = {"target":"ndaryffgwbces3qxcxcne9i5bhw2e5ca2h9cvzyfmtrrxu7q","period":"3y20dt6h48m279449us","sequence":5203743511895827,"signatures":["a4jadtcab85j9evv4e5w49gce8hn5xpzvpgnk5j7stwqntzs5k2ihbvzya47w3ztvadn5ajku237gpd32h3bradkk7eay5n2p4a29q2hajtqczjvt8ps3jbf"]}

    var bb = new TxSignPrep().prepare(locktx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "M3kyMGR0Nmg0OG0yNzk0NDl1cwASfMbzh18TbmRhcnlmZmd3YmNlczNxeGN4Y25lOWk1Ymh3MmU1Y2EyaDljdnp5Zm10cnJ4dTdx"
    )
  })
  it('should build an object for Lock without signatures and convert to known b64', () => {
    var locktx = {"period":"3y20dt6h48m279449us","sequence":5203743511895827,"target":"ndaryffgwbces3qxcxcne9i5bhw2e5ca2h9cvzyfmtrrxu7q"}

    var bb = new TxSignPrep().prepare(locktx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "M3kyMGR0Nmg0OG0yNzk0NDl1cwASfMbzh18TbmRhcnlmZmd3YmNlczNxeGN4Y25lOWk1Ymh3MmU1Y2EyaDljdnp5Zm10cnJ4dTdx"
    )
  })
})
describe('Notify object prepare tests', () => {
  it('should build an object for Notify and convert to known b64', () => {
    var notifytx = {"target":"ndaadp7vsusgpu5ndzbpm3fpje2snv5x78cuz7a57eptqqzv","sequence":1507085064423784,"signatures":["a4jadtcauyrre3m7paj524xzexha7eqc6j3zvn7mnd7pnx7u982q69gc9kxbzm5zq5cnzrrcfvjwydmjwx938k7uas9dhqitfn7fwkcybq56ctsa73qnqjgd"]}

    var bb = new TxSignPrep().prepare(notifytx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AAVar5XpSWhuZGFhZHA3dnN1c2dwdTVuZHpicG0zZnBqZTJzbnY1eDc4Y3V6N2E1N2VwdHFxenY="
    )
  })
  it('should build an object for Notify without signatures and convert to known b64', () => {
    var notifytx = {"sequence":1507085064423784,"target":"ndaadp7vsusgpu5ndzbpm3fpje2snv5x78cuz7a57eptqqzv"}

    var bb = new TxSignPrep().prepare(notifytx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AAVar5XpSWhuZGFhZHA3dnN1c2dwdTVuZHpicG0zZnBqZTJzbnY1eDc4Y3V6N2E1N2VwdHFxenY="
    )
  })
})
describe('SetRewardsDestination object prepare tests', () => {
  it('should build an object for SetRewardsDestination and convert to known b64', () => {
    var setrewardsdestinationtx = {"source":"ndaqwt9scccvthjtztzmafe64yam9pxzkmysj9s7z5ipb3fg","destination":"ndak7vmic7pbkv5rjywbnegy6ergjwbnyju9p6g7znptk89k","sequence":3658774096214545,"signatures":["a4jadtcafritx4p5xm2a4q8vd4e7brzaxyirziyz2d2rv357q54wjx7dp4uj7nnkxm4zj274t6997kfp847wu6v5g85hyuc2kkmg2d8ktdc523pxgyhv243j"]}

    var bb = new TxSignPrep().prepare(setrewardsdestinationtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhazd2bWljN3Bia3Y1cmp5d2JuZWd5NmVyZ2p3Ym55anU5cDZnN3pucHRrODlrAAz/orpRehFuZGFxd3Q5c2NjY3Z0aGp0enR6bWFmZTY0eWFtOXB4emtteXNqOXM3ejVpcGIzZmc="
    )
  })
  it('should build an object for SetRewardsDestination without signatures and convert to known b64', () => {
    var setrewardsdestinationtx = {"destination":"ndak7vmic7pbkv5rjywbnegy6ergjwbnyju9p6g7znptk89k","sequence":3658774096214545,"source":"ndaqwt9scccvthjtztzmafe64yam9pxzkmysj9s7z5ipb3fg"}

    var bb = new TxSignPrep().prepare(setrewardsdestinationtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhazd2bWljN3Bia3Y1cmp5d2JuZWd5NmVyZ2p3Ym55anU5cDZnN3pucHRrODlrAAz/orpRehFuZGFxd3Q5c2NjY3Z0aGp0enR6bWFmZTY0eWFtOXB4emtteXNqOXM3ejVpcGIzZmc="
    )
  })
})
describe('ClaimAccount object prepare tests', () => {
  it('should build an object for ClaimAccount and convert to known b64', () => {
    var claimaccounttx = {"target":"ndaptj5nw6uf3qyfu8ff8g8t9rbspcxjzs9mhxjtpdxkqcqp","ownership":"npuba8jadtbbeamhqw368aqzu4jfjaj8inbdp6pq858pcxctqbstqnrp9d8rfp5zdjn3fc7fvgxq","validation_keys":["npuba8jadtbbeasw3r6vjnnvq4y3azb5sfyqn78v6jgt6q7zt58miwtimrm5qk9a7xgwzftjnkyf"],"validation_script":"fNUKjGNb+mFsGoWY","sequence":7142365320213337,"signature":"a4jadtcacmu5hd9hu2kxx4yyh82r2ritzhgg9fpyikga9qta8uqauk8yneqb2h4f5e6qy7ep5qaehcgi4msmpc6m6fqn5iyqfr3avqthsbwmyferau6gjz7h"}

    var bb = new TxSignPrep().prepare(claimaccounttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bnB1YmE4amFkdGJiZWFtaHF3MzY4YXF6dTRqZmphajhpbmJkcDZwcTg1OHBjeGN0cWJzdHFucnA5ZDhyZnA1emRqbjNmYzdmdmd4cQAZX/GDxHNZbmRhcHRqNW53NnVmM3F5ZnU4ZmY4Zzh0OXJic3BjeGp6czltaHhqdHBkeGtxY3FwbnB1YmE4amFkdGJiZWFzdzNyNnZqbm52cTR5M2F6YjVzZnlxbjc4djZqZ3Q2cTd6dDU4bWl3dGltcm01cWs5YTd4Z3d6ZnRqbmt5ZmZOVUtqR05iK21Gc0dvV1k="
    )
  })
  it('should build an object for ClaimAccount without signatures and convert to known b64', () => {
    var claimaccounttx = {"ownership":"npuba8jadtbbeamhqw368aqzu4jfjaj8inbdp6pq858pcxctqbstqnrp9d8rfp5zdjn3fc7fvgxq","sequence":7142365320213337,"target":"ndaptj5nw6uf3qyfu8ff8g8t9rbspcxjzs9mhxjtpdxkqcqp","validation_keys":["npuba8jadtbbeasw3r6vjnnvq4y3azb5sfyqn78v6jgt6q7zt58miwtimrm5qk9a7xgwzftjnkyf"],"validation_script":"fNUKjGNb+mFsGoWY"}

    var bb = new TxSignPrep().prepare(claimaccounttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bnB1YmE4amFkdGJiZWFtaHF3MzY4YXF6dTRqZmphajhpbmJkcDZwcTg1OHBjeGN0cWJzdHFucnA5ZDhyZnA1emRqbjNmYzdmdmd4cQAZX/GDxHNZbmRhcHRqNW53NnVmM3F5ZnU4ZmY4Zzh0OXJic3BjeGp6czltaHhqdHBkeGtxY3FwbnB1YmE4amFkdGJiZWFzdzNyNnZqbm52cTR5M2F6YjVzZnlxbjc4djZqZ3Q2cTd6dDU4bWl3dGltcm01cWs5YTd4Z3d6ZnRqbmt5ZmZOVUtqR05iK21Gc0dvV1k="
    )
  })
})
describe('Stake object prepare tests', () => {
  it('should build an object for Stake and convert to known b64', () => {
    var staketx = {"target":"ndacnipyesepxdfk8r43cdm6vj5r5mf85gs7ks89w9vp5dqb","node":"ndaqst4h5iywbg7zrj9wvd2w8b4dpiwxyq4r57v892fag37a","sequence":6229113420623440,"signatures":["a4jadtcajimtcq3vrvqre2bmzwx37wr9nuncwdz56hae2nr4wx2yikk8wxz7mc54csvwe5z8vzfwfmcgs25gfzwqqwykkuns53ms2c599te84vciekrxv3gu"]}

    var bb = new TxSignPrep().prepare(staketx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhcXN0NGg1aXl3Ymc3enJqOXd2ZDJ3OGI0ZHBpd3h5cTRyNTd2ODkyZmFnMzdhABYhWHyzrlBuZGFjbmlweWVzZXB4ZGZrOHI0M2NkbTZ2ajVyNW1mODVnczdrczg5dzl2cDVkcWI="
    )
  })
  it('should build an object for Stake without signatures and convert to known b64', () => {
    var staketx = {"node":"ndaqst4h5iywbg7zrj9wvd2w8b4dpiwxyq4r57v892fag37a","sequence":6229113420623440,"target":"ndacnipyesepxdfk8r43cdm6vj5r5mf85gs7ks89w9vp5dqb"}

    var bb = new TxSignPrep().prepare(staketx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhcXN0NGg1aXl3Ymc3enJqOXd2ZDJ3OGI0ZHBpd3h5cTRyNTd2ODkyZmFnMzdhABYhWHyzrlBuZGFjbmlweWVzZXB4ZGZrOHI0M2NkbTZ2ajVyNW1mODVnczdrczg5dzl2cDVkcWI="
    )
  })
})
describe('RegisterNode object prepare tests', () => {
  it('should build an object for RegisterNode and convert to known b64', () => {
    var registernodetx = {"node":"ndaefznjujwi2nsk687ukxzdk5ijt7bh6wvd86zdxaas8cud","distribution_script":"T0YGBb0B9UNdCH8v","rpc_address":"string: thct uax xkqf afplsj bcxoeffr ","sequence":5633755682856050,"signatures":["a4jadtcaxxmbnrq2qwkjn8fsvy8wxwvkm35jz7xgag2rkh4q7yyzdifspipsn5mx6ibqnxh5mkuuzmhhiikhzqwd7i8qipryuxrui56ecff8tw27c4p3cq3c"]}

    var bb = new TxSignPrep().prepare(registernodetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "VDBZR0JiMEI5VU5kQ0g4dm5kYWVmem5qdWp3aTJuc2s2ODd1a3h6ZGs1aWp0N2JoNnd2ZDg2emR4YWFzOGN1ZHN0cmluZzogdGhjdCB1YXggeGtxZiBhZnBsc2ogYmN4b2VmZnIgABQD3vY6XHI="
    )
  })
  it('should build an object for RegisterNode without signatures and convert to known b64', () => {
    var registernodetx = {"distribution_script":"T0YGBb0B9UNdCH8v","node":"ndaefznjujwi2nsk687ukxzdk5ijt7bh6wvd86zdxaas8cud","rpc_address":"string: thct uax xkqf afplsj bcxoeffr ","sequence":5633755682856050}

    var bb = new TxSignPrep().prepare(registernodetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "VDBZR0JiMEI5VU5kQ0g4dm5kYWVmem5qdWp3aTJuc2s2ODd1a3h6ZGs1aWp0N2JoNnd2ZDg2emR4YWFzOGN1ZHN0cmluZzogdGhjdCB1YXggeGtxZiBhZnBsc2ogYmN4b2VmZnIgABQD3vY6XHI="
    )
  })
})
describe('NominateNodeReward object prepare tests', () => {
  it('should build an object for NominateNodeReward and convert to known b64', () => {
    var nominatenoderewardtx = {"random":7664575722253654,"sequence":4786722739683373,"signatures":["a4jadtca65xq84uubij8vey4vnkhyprzxgty6bzfs68k6795ifysms8bhn4ecvirhf83qz77jv9nyvfefjg57kt2ycn8ng3shygdjnzxidrvusm2xhdbhztb"]}

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
    var claimnoderewardtx = {"node":"ndahr4crb57v7i8uihd92ytmx7gap36mj7jhasu3ypdqw8uz","sequence":4402827188794727,"signatures":["a4jadtcash7szq5a5r7bxu5e3rttm3i6nfz47sf3t4cdb5z99zhjbzivvveei9iy2wu5exu3adrxhgdfpwyksk2i22nwcpszs2tp8jj83x6fin8vc3dvpuuh"]}

    var bb = new TxSignPrep().prepare(claimnoderewardtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhaHI0Y3JiNTd2N2k4dWloZDkyeXRteDdnYXAzNm1qN2poYXN1M3lwZHF3OHV6AA+kWRaYdWc="
    )
  })
  it('should build an object for ClaimNodeReward without signatures and convert to known b64', () => {
    var claimnoderewardtx = {"node":"ndahr4crb57v7i8uihd92ytmx7gap36mj7jhasu3ypdqw8uz","sequence":4402827188794727}

    var bb = new TxSignPrep().prepare(claimnoderewardtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhaHI0Y3JiNTd2N2k4dWloZDkyeXRteDdnYXAzNm1qN2poYXN1M3lwZHF3OHV6AA+kWRaYdWc="
    )
  })
})
describe('TransferAndLock object prepare tests', () => {
  it('should build an object for TransferAndLock and convert to known b64', () => {
    var transferandlocktx = {"source":"ndacrr6m2p8amtcb2jdys5mi95e7bhtt6v8tdacgct6b77i5","destination":"ndah28g6nggny49cq4g3cemef52f74pyrnjt7vvvn8vh4gud","qty":6090287018180214,"period":"1y9m15dt10h9m51s569721us","sequence":7443647051579152,"signatures":["a4jadtcauuy3w2ziks3ziqi9wn9zhpmt7wxe7a4zugfbvpsjtm6fx65qrux8qyb5pcjmwsczqdqax43guxmvm2dpqe4h9ve8zpeugpiwkvcga2tu8mrhat5b"]}

    var bb = new TxSignPrep().prepare(transferandlocktx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhaDI4ZzZuZ2dueTQ5Y3E0ZzNjZW1lZjUyZjc0cHlybmp0N3Z2dm44dmg0Z3VkMXk5bTE1ZHQxMGg5bTUxczU2OTcyMXVzABWjFXJMfnYAGnH1Ile/EG5kYWNycjZtMnA4YW10Y2IyamR5czVtaTk1ZTdiaHR0NnY4dGRhY2djdDZiNzdpNQ=="
    )
  })
  it('should build an object for TransferAndLock without signatures and convert to known b64', () => {
    var transferandlocktx = {"destination":"ndah28g6nggny49cq4g3cemef52f74pyrnjt7vvvn8vh4gud","period":"1y9m15dt10h9m51s569721us","qty":6090287018180214,"sequence":7443647051579152,"source":"ndacrr6m2p8amtcb2jdys5mi95e7bhtt6v8tdacgct6b77i5"}

    var bb = new TxSignPrep().prepare(transferandlocktx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhaDI4ZzZuZ2dueTQ5Y3E0ZzNjZW1lZjUyZjc0cHlybmp0N3Z2dm44dmg0Z3VkMXk5bTE1ZHQxMGg5bTUxczU2OTcyMXVzABWjFXJMfnYAGnH1Ile/EG5kYWNycjZtMnA4YW10Y2IyamR5czVtaTk1ZTdiaHR0NnY4dGRhY2djdDZiNzdpNQ=="
    )
  })
})
describe('CommandValidatorChange object prepare tests', () => {
  it('should build an object for CommandValidatorChange and convert to known b64', () => {
    var commandvalidatorchangetx = {"public_key":"TTV+kd0DYzDmrniy","power":7147475985406603,"sequence":3268473309273449,"signatures":["a4jadtca6m96qd6kz6bqvbvrwksssdfnmgkt3f9ru4tgwg9vmba8hwr6utyrkg38aeap7dk3rgurqs5rv8cf6jiqxj4fzajs6q5davuvaqihpqjq5tt4w39j"]}

    var bb = new TxSignPrep().prepare(commandvalidatorchangetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "ABlkl28mmotUVFYra2QwRFl6RG1ybml5AAucqL6OnWk="
    )
  })
  it('should build an object for CommandValidatorChange without signatures and convert to known b64', () => {
    var commandvalidatorchangetx = {"power":7147475985406603,"public_key":"TTV+kd0DYzDmrniy","sequence":3268473309273449}

    var bb = new TxSignPrep().prepare(commandvalidatorchangetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "ABlkl28mmotUVFYra2QwRFl6RG1ybml5AAucqL6OnWk="
    )
  })
})
describe('SidechainTx object prepare tests', () => {
  it('should build an object for SidechainTx and convert to known b64', () => {
    var sidechaintxtx = {"source":"ndad32zv2cugaydh2gtycxgvny8esp5vk3i67dawrqpck7a2","sidechain_id":178,"sidechain_signable_bytes":"CGpi9Ti1amBHfAdR","sidechain_signatures":["a4jadtcaayfbjh7wm5vngm6zwtcykwkmhghsnfps5546kfgkczkzcwbpenpisrd7smysn8bid3f2ghkypbvdsaqh37vkh8h3dni8ckmiu7uwdhwue25y2cg5"],"sequence":666378943674263,"signatures":["a4jadtcaais4jhnumabj8z6s6dh7k46pzbaxmtw8z4kbxvg7wubt2ebz3yi5rwegfv8j4k3uk5bcamna59ver4vvhmmgx94rbgydecieg84f8hh2v6xpe9hn"]}

    var bb = new TxSignPrep().prepare(sidechaintxtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AAJeEXA5N5cAAAAAAAAAskNHcGk5VGkxYW1CSGZBZFJhNGphZHRjYWF5ZmJqaDd3bTV2bmdtNnp3dGN5a3drbWhnaHNuZnBzNTU0NmtmZ2tjemt6Y3dicGVucGlzcmQ3c215c244YmlkM2YyZ2hreXBidmRzYXFoMzd2a2g4aDNkbmk4Y2ttaXU3dXdkaHd1ZTI1eTJjZzVuZGFkMzJ6djJjdWdheWRoMmd0eWN4Z3ZueThlc3A1dmszaTY3ZGF3cnFwY2s3YTI="
    )
  })
  it('should build an object for SidechainTx without signatures and convert to known b64', () => {
    var sidechaintxtx = {"sequence":666378943674263,"sidechain_id":178,"sidechain_signable_bytes":"CGpi9Ti1amBHfAdR","sidechain_signatures":["a4jadtcaayfbjh7wm5vngm6zwtcykwkmhghsnfps5546kfgkczkzcwbpenpisrd7smysn8bid3f2ghkypbvdsaqh37vkh8h3dni8ckmiu7uwdhwue25y2cg5"],"source":"ndad32zv2cugaydh2gtycxgvny8esp5vk3i67dawrqpck7a2"}

    var bb = new TxSignPrep().prepare(sidechaintxtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AAJeEXA5N5cAAAAAAAAAskNHcGk5VGkxYW1CSGZBZFJhNGphZHRjYWF5ZmJqaDd3bTV2bmdtNnp3dGN5a3drbWhnaHNuZnBzNTU0NmtmZ2tjemt6Y3dicGVucGlzcmQ3c215c244YmlkM2YyZ2hreXBidmRzYXFoMzd2a2g4aDNkbmk4Y2ttaXU3dXdkaHd1ZTI1eTJjZzVuZGFkMzJ6djJjdWdheWRoMmd0eWN4Z3ZueThlc3A1dmszaTY3ZGF3cnFwY2s3YTI="
    )
  })
})

