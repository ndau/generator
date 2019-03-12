import TxSignPrep from '../TxSignPrep'

describe('Transfer object prepare tests', () => {
  it('should build an object for Transfer and convert to known b64', () => {
    var transfertx = {"source":"ndaqq89666v6e3ujex5krp46iy9wur9spwep9tpqkecamaki","destination":"ndaapk6vsv7nzafwekbufyqy527eutm4q82z3xcjyus5n842","qty":1550453263105981,"sequence":732340766579218,"signatures":["a4jadtcarcgedph3wwccm249vqm39t8qtrtci2kpujixuhfjsmnzjhh8b9b6yaesui5abp4r8ayivnrp3q3pxv5bqkw48te6e65g224axr4kqpystg9z4937"]}

    var bb = new TxSignPrep().prepare(transfertx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhYXBrNnZzdjduemFmd2VrYnVmeXF5NTI3ZXV0bTRxODJ6M3hjanl1czVuODQyAAWCIQf8/70AApoPXz8aEm5kYXFxODk2NjZ2NmUzdWpleDVrcnA0Nml5OXd1cjlzcHdlcDl0cHFrZWNhbWFraQ=="
    )
  })
  it('should build an object for Transfer without signatures and convert to known b64', () => {
    var transfertx = {"destination":"ndaapk6vsv7nzafwekbufyqy527eutm4q82z3xcjyus5n842","qty":1550453263105981,"sequence":732340766579218,"source":"ndaqq89666v6e3ujex5krp46iy9wur9spwep9tpqkecamaki"}

    var bb = new TxSignPrep().prepare(transfertx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhYXBrNnZzdjduemFmd2VrYnVmeXF5NTI3ZXV0bTRxODJ6M3hjanl1czVuODQyAAWCIQf8/70AApoPXz8aEm5kYXFxODk2NjZ2NmUzdWpleDVrcnA0Nml5OXd1cjlzcHdlcDl0cHFrZWNhbWFraQ=="
    )
  })
})
describe('ChangeValidation object prepare tests', () => {
  it('should build an object for ChangeValidation and convert to known b64', () => {
    var changevalidationtx = {"target":"ndac3beunkses6sk2i3uaxec6fatppsenfipdvxw59nahcgw","new_keys":["npuba8jadtbbedkfn3nh9bwa5yjf84ght764ye9q32eju6tqkjqs52s7if8wymw658nuz78qx4yf"],"validation_script":"APGYmJtfD/x/3cOM","sequence":4589118442271941,"signatures":["a4jadtcay7tqkxezgg8snhmkerwcgjmuh2897c2vcu85ptaaabji8pd8jni6h49hs5smpdnvbb7bj4sn9ufiedjsnygicpibr8a9tqgkc8yui9dxjv4cnryu"]}

    var bb = new TxSignPrep().prepare(changevalidationtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bnB1YmE4amFkdGJiZWRrZm4zbmg5YndhNXlqZjg0Z2h0NzY0eWU5cTMyZWp1NnRxa2pxczUyczdpZjh3eW13NjU4bnV6NzhxeDR5ZgAQTcdmlXTFbmRhYzNiZXVua3NlczZzazJpM3VheGVjNmZhdHBwc2VuZmlwZHZ4dzU5bmFoY2d3QVBHWW1KdGZEL3gvM2NPTQ=="
    )
  })
  it('should build an object for ChangeValidation without signatures and convert to known b64', () => {
    var changevalidationtx = {"new_keys":["npuba8jadtbbedkfn3nh9bwa5yjf84ght764ye9q32eju6tqkjqs52s7if8wymw658nuz78qx4yf"],"sequence":4589118442271941,"target":"ndac3beunkses6sk2i3uaxec6fatppsenfipdvxw59nahcgw","validation_script":"APGYmJtfD/x/3cOM"}

    var bb = new TxSignPrep().prepare(changevalidationtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bnB1YmE4amFkdGJiZWRrZm4zbmg5YndhNXlqZjg0Z2h0NzY0eWU5cTMyZWp1NnRxa2pxczUyczdpZjh3eW13NjU4bnV6NzhxeDR5ZgAQTcdmlXTFbmRhYzNiZXVua3NlczZzazJpM3VheGVjNmZhdHBwc2VuZmlwZHZ4dzU5bmFoY2d3QVBHWW1KdGZEL3gvM2NPTQ=="
    )
  })
})
describe('ReleaseFromEndowment object prepare tests', () => {
  it('should build an object for ReleaseFromEndowment and convert to known b64', () => {
    var releasefromendowmenttx = {"destination":"ndagxdcp53jb35jiwyizx7wr8dg4acgeb6yrp8wkn3vfz6dn","qty":1975528111046083,"sequence":7465139729523843,"signatures":["a4jadtcact7h6rvn7kmk2se5gf8rkygmbbfstjfiewg96nzp8r6kuh336gi56ijcac9ixuu23mymrxi2kb7ticncsh3e8mg78ddvz7i3tu2jcm9pafuhbaz2"]}

    var bb = new TxSignPrep().prepare(releasefromendowmenttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhZ3hkY3A1M2piMzVqaXd5aXp4N3dyOGRnNGFjZ2ViNnlycDh3a24zdmZ6NmRuAAcEu3tNfcMAGoWBScbkgw=="
    )
  })
  it('should build an object for ReleaseFromEndowment without signatures and convert to known b64', () => {
    var releasefromendowmenttx = {"destination":"ndagxdcp53jb35jiwyizx7wr8dg4acgeb6yrp8wkn3vfz6dn","qty":1975528111046083,"sequence":7465139729523843}

    var bb = new TxSignPrep().prepare(releasefromendowmenttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhZ3hkY3A1M2piMzVqaXd5aXp4N3dyOGRnNGFjZ2ViNnlycDh3a24zdmZ6NmRuAAcEu3tNfcMAGoWBScbkgw=="
    )
  })
})
describe('ChangeSettlementPeriod object prepare tests', () => {
  it('should build an object for ChangeSettlementPeriod and convert to known b64', () => {
    var changesettlementperiodtx = {"target":"ndafvqdpiy376v9agebtrnd45dxxvhscv456858nhanyt987","period":"11m25dt14h35m49s167320us","sequence":1912297565323361,"signatures":["a4jadtcartiu2ghcix9ewvpfy229y4bhbgywfkhdpmcswiuqq2qae85xn5nhcg6mbevqr5evap6ert8bm9mgryv7j7y6pnn86rmukjnc6fffq37nxjdvnbia"]}

    var bb = new TxSignPrep().prepare(changesettlementperiodtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "MTFtMjVkdDE0aDM1bTQ5czE2NzMyMHVzAAbLOXkWAGFuZGFmdnFkcGl5Mzc2djlhZ2VidHJuZDQ1ZHh4dmhzY3Y0NTY4NThuaGFueXQ5ODc="
    )
  })
  it('should build an object for ChangeSettlementPeriod without signatures and convert to known b64', () => {
    var changesettlementperiodtx = {"period":"11m25dt14h35m49s167320us","sequence":1912297565323361,"target":"ndafvqdpiy376v9agebtrnd45dxxvhscv456858nhanyt987"}

    var bb = new TxSignPrep().prepare(changesettlementperiodtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "MTFtMjVkdDE0aDM1bTQ5czE2NzMyMHVzAAbLOXkWAGFuZGFmdnFkcGl5Mzc2djlhZ2VidHJuZDQ1ZHh4dmhzY3Y0NTY4NThuaGFueXQ5ODc="
    )
  })
})
describe('Delegate object prepare tests', () => {
  it('should build an object for Delegate and convert to known b64', () => {
    var delegatetx = {"target":"ndaa248nz3z4t28j4hh79ykaj7kicjx2iqw2u2ez5yh7b7ri","node":"ndafir5tvn88dcruh8f38anhn5fvqiuz6nue42sf5qnv4ugt","sequence":2483436573217588,"signatures":["a4jadtcarr7u44uixda9cn57if6k9kxm7i4heexzm7wkw2arjxft7ctjjaahuahieeqkkxedzby87eabjvjf83aw6pc24jbdnxccb5zrk8kdsg5dgw7bniii"]}

    var bb = new TxSignPrep().prepare(delegatetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhZmlyNXR2bjg4ZGNydWg4ZjM4YW5objVmdnFpdXo2bnVlNDJzZjVxbnY0dWd0AAjSrCLE0zRuZGFhMjQ4bnozejR0MjhqNGhoNzl5a2FqN2tpY2p4MmlxdzJ1MmV6NXloN2I3cmk="
    )
  })
  it('should build an object for Delegate without signatures and convert to known b64', () => {
    var delegatetx = {"node":"ndafir5tvn88dcruh8f38anhn5fvqiuz6nue42sf5qnv4ugt","sequence":2483436573217588,"target":"ndaa248nz3z4t28j4hh79ykaj7kicjx2iqw2u2ez5yh7b7ri"}

    var bb = new TxSignPrep().prepare(delegatetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhZmlyNXR2bjg4ZGNydWg4ZjM4YW5objVmdnFpdXo2bnVlNDJzZjVxbnY0dWd0AAjSrCLE0zRuZGFhMjQ4bnozejR0MjhqNGhoNzl5a2FqN2tpY2p4MmlxdzJ1MmV6NXloN2I3cmk="
    )
  })
})
describe('CreditEAI object prepare tests', () => {
  it('should build an object for CreditEAI and convert to known b64', () => {
    var crediteaitx = {"node":"ndamukadnibrjcwpwvtedmqi6nyjimx58b7kgv974m5wmm43","sequence":2673222963759107,"signatures":["a4jadtca83gk3ehhi4zbmzm9bp3pa8efycdis5rnyvrs22nzhy3r9bgarnhnduujxdr5mkn7d8j9h8v35xv64uizzkwagri8xzhwixwpi3uqqnys67k7y5sy"]}

    var bb = new TxSignPrep().prepare(crediteaitx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhbXVrYWRuaWJyamN3cHd2dGVkbXFpNm55amlteDU4YjdrZ3Y5NzRtNXdtbTQzAAl/SDkpCAM="
    )
  })
  it('should build an object for CreditEAI without signatures and convert to known b64', () => {
    var crediteaitx = {"node":"ndamukadnibrjcwpwvtedmqi6nyjimx58b7kgv974m5wmm43","sequence":2673222963759107}

    var bb = new TxSignPrep().prepare(crediteaitx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhbXVrYWRuaWJyamN3cHd2dGVkbXFpNm55amlteDU4YjdrZ3Y5NzRtNXdtbTQzAAl/SDkpCAM="
    )
  })
})
describe('Lock object prepare tests', () => {
  it('should build an object for Lock and convert to known b64', () => {
    var locktx = {"target":"ndaehk7i5i2jn3fycyd94m7hh97w3fdj76g4z488gxyiband","period":"3y20dt6h48m279449us","sequence":5203743511895827,"signatures":["a4jadtcajddjd3ithbcf3n7xxztp8bvzk4myzh98c5ee6tn48ff9pk39ihebjp6mkgxbsfuxz5x7gccmtppbf74px6nvmu9kvkmy4vrtf3z2w5mj7fx2d9mj"]}

    var bb = new TxSignPrep().prepare(locktx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "M3kyMGR0Nmg0OG0yNzk0NDl1cwASfMbzh18TbmRhZWhrN2k1aTJqbjNmeWN5ZDk0bTdoaDk3dzNmZGo3Nmc0ejQ4OGd4eWliYW5k"
    )
  })
  it('should build an object for Lock without signatures and convert to known b64', () => {
    var locktx = {"period":"3y20dt6h48m279449us","sequence":5203743511895827,"target":"ndaehk7i5i2jn3fycyd94m7hh97w3fdj76g4z488gxyiband"}

    var bb = new TxSignPrep().prepare(locktx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "M3kyMGR0Nmg0OG0yNzk0NDl1cwASfMbzh18TbmRhZWhrN2k1aTJqbjNmeWN5ZDk0bTdoaDk3dzNmZGo3Nmc0ejQ4OGd4eWliYW5k"
    )
  })
})
describe('Notify object prepare tests', () => {
  it('should build an object for Notify and convert to known b64', () => {
    var notifytx = {"target":"ndaf7a6jqjgw4ui3faidjvutsje88pb9tj2qen6b3cazecqi","sequence":1507085064423784,"signatures":["a4jadtca47u9efyh29tj8ztmkyi2mfau9nfmwe9cs6kp39ajym52vpdtv8fmb6efu2tydkckdaixp7merdhx5e2cs7meeyavuf33286rr2pb9tunuwkxkkvf"]}

    var bb = new TxSignPrep().prepare(notifytx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AAVar5XpSWhuZGFmN2E2anFqZ3c0dWkzZmFpZGp2dXRzamU4OHBiOXRqMnFlbjZiM2NhemVjcWk="
    )
  })
  it('should build an object for Notify without signatures and convert to known b64', () => {
    var notifytx = {"sequence":1507085064423784,"target":"ndaf7a6jqjgw4ui3faidjvutsje88pb9tj2qen6b3cazecqi"}

    var bb = new TxSignPrep().prepare(notifytx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AAVar5XpSWhuZGFmN2E2anFqZ3c0dWkzZmFpZGp2dXRzamU4OHBiOXRqMnFlbjZiM2NhemVjcWk="
    )
  })
})
describe('SetRewardsDestination object prepare tests', () => {
  it('should build an object for SetRewardsDestination and convert to known b64', () => {
    var setrewardsdestinationtx = {"target":"ndaf3qubuwpqk36xwyec8mwycdt4rsd4gn2q7vmy4ynwbs8x","destination":"ndae9i82aw52jtjyb7rmvz3thsmm2zsymmijr7u3erh5f2xc","sequence":3658774096214545,"signatures":["a4jadtca8ui8n6yh6zen84fspqqnesxradv2dnes6rmsny7973knk39nzbw5ixdzipyuziyuhb64bbvc7zh9y55hqh6xvkrbgazktxsspuwprd6cz4827itp"]}

    var bb = new TxSignPrep().prepare(setrewardsdestinationtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhZTlpODJhdzUyanRqeWI3cm12ejN0aHNtbTJ6c3ltbWlqcjd1M2VyaDVmMnhjAAz/orpRehFuZGFmM3F1YnV3cHFrMzZ4d3llYzhtd3ljZHQ0cnNkNGduMnE3dm15NHlud2JzOHg="
    )
  })
  it('should build an object for SetRewardsDestination without signatures and convert to known b64', () => {
    var setrewardsdestinationtx = {"destination":"ndae9i82aw52jtjyb7rmvz3thsmm2zsymmijr7u3erh5f2xc","sequence":3658774096214545,"target":"ndaf3qubuwpqk36xwyec8mwycdt4rsd4gn2q7vmy4ynwbs8x"}

    var bb = new TxSignPrep().prepare(setrewardsdestinationtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhZTlpODJhdzUyanRqeWI3cm12ejN0aHNtbTJ6c3ltbWlqcjd1M2VyaDVmMnhjAAz/orpRehFuZGFmM3F1YnV3cHFrMzZ4d3llYzhtd3ljZHQ0cnNkNGduMnE3dm15NHlud2JzOHg="
    )
  })
})
describe('ClaimAccount object prepare tests', () => {
  it('should build an object for ClaimAccount and convert to known b64', () => {
    var claimaccounttx = {"target":"ndagg9wvbkz8wk2bb99mzte5f7zrmia62v4znxjxywst6ew2","ownership":"npuba8jadtbbea9bqkr56rq94h8zqqp66reajzfarj68txdctqyckhuu388cxyqt45e6ksuu58cv","validation_keys":["npuba8jadtbbea3xia5jkagbjuhqc2adfhsey3pf53bzku8agh8uxst2dp3gsr8a7ptbu8krs4g7"],"validation_script":"sclUHbhnIghc3N/E","sequence":7142365320213337,"signature":"a4jadtca83a2dxib43qysvn8352w87k5dje2sj26uj5u9uf2m32bg4u8yb9ig6c77xvp99vajkbh7829yawtmse2m7agmaavypaib2trdp958xa479nznps3"}

    var bb = new TxSignPrep().prepare(claimaccounttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bnB1YmE4amFkdGJiZWE5YnFrcjU2cnE5NGg4enFxcDY2cmVhanpmYXJqNjh0eGRjdHF5Y2todXUzODhjeHlxdDQ1ZTZrc3V1NThjdgAZX/GDxHNZbmRhZ2c5d3Zia3o4d2syYmI5OW16dGU1Zjd6cm1pYTYydjR6bnhqeHl3c3Q2ZXcybnB1YmE4amFkdGJiZWEzeGlhNWprYWdianVocWMyYWRmaHNleTNwZjUzYnprdThhZ2g4dXhzdDJkcDNnc3I4YTdwdGJ1OGtyczRnN3NjbFVIYmhuSWdoYzNOL0U="
    )
  })
  it('should build an object for ClaimAccount without signatures and convert to known b64', () => {
    var claimaccounttx = {"ownership":"npuba8jadtbbea9bqkr56rq94h8zqqp66reajzfarj68txdctqyckhuu388cxyqt45e6ksuu58cv","sequence":7142365320213337,"target":"ndagg9wvbkz8wk2bb99mzte5f7zrmia62v4znxjxywst6ew2","validation_keys":["npuba8jadtbbea3xia5jkagbjuhqc2adfhsey3pf53bzku8agh8uxst2dp3gsr8a7ptbu8krs4g7"],"validation_script":"sclUHbhnIghc3N/E"}

    var bb = new TxSignPrep().prepare(claimaccounttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bnB1YmE4amFkdGJiZWE5YnFrcjU2cnE5NGg4enFxcDY2cmVhanpmYXJqNjh0eGRjdHF5Y2todXUzODhjeHlxdDQ1ZTZrc3V1NThjdgAZX/GDxHNZbmRhZ2c5d3Zia3o4d2syYmI5OW16dGU1Zjd6cm1pYTYydjR6bnhqeHl3c3Q2ZXcybnB1YmE4amFkdGJiZWEzeGlhNWprYWdianVocWMyYWRmaHNleTNwZjUzYnprdThhZ2g4dXhzdDJkcDNnc3I4YTdwdGJ1OGtyczRnN3NjbFVIYmhuSWdoYzNOL0U="
    )
  })
})
describe('Stake object prepare tests', () => {
  it('should build an object for Stake and convert to known b64', () => {
    var staketx = {"target":"ndaq8ceg64jbkcjs5pp54anped97tbssm57y7b4m2nmcaunr","staked_account":"ndadv7yxigamyy2s2g6uuinkg7cfv6fmtd5dd6j7sucrhvca","sequence":6229113420623440,"signatures":["a4jadtca3befcxknhu4fndgkypdun7q9chvw8utd2rhmfpzc4p6258kjuqevwcn8dr7tnscnqqsdexexn8bzg7c4jrsagbj5iigihe3m2524tn8wpfsrkcg8"]}

    var bb = new TxSignPrep().prepare(staketx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "ABYhWHyzrlBuZGFkdjd5eGlnYW15eTJzMmc2dXVpbmtnN2NmdjZmbXRkNWRkNmo3c3Vjcmh2Y2FuZGFxOGNlZzY0amJrY2pzNXBwNTRhbnBlZDk3dGJzc201N3k3YjRtMm5tY2F1bnI="
    )
  })
  it('should build an object for Stake without signatures and convert to known b64', () => {
    var staketx = {"sequence":6229113420623440,"staked_account":"ndadv7yxigamyy2s2g6uuinkg7cfv6fmtd5dd6j7sucrhvca","target":"ndaq8ceg64jbkcjs5pp54anped97tbssm57y7b4m2nmcaunr"}

    var bb = new TxSignPrep().prepare(staketx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "ABYhWHyzrlBuZGFkdjd5eGlnYW15eTJzMmc2dXVpbmtnN2NmdjZmbXRkNWRkNmo3c3Vjcmh2Y2FuZGFxOGNlZzY0amJrY2pzNXBwNTRhbnBlZDk3dGJzc201N3k3YjRtMm5tY2F1bnI="
    )
  })
})
describe('RegisterNode object prepare tests', () => {
  it('should build an object for RegisterNode and convert to known b64', () => {
    var registernodetx = {"node":"ndaiwu87czaqframiiya7s7h6sabxagwtu2psutzy5fnkrwf","distribution_script":"xT5H/hXMBtK0FuVP","rpc_address":"string: thct uax xkqf afplsj bcxoeffr ","sequence":5633755682856050,"signatures":["a4jadtcawp95k77h4jvsbmb7svk43u5wjg2s2h9ckhx9qarcgzeppbb7gw5wuy7v9c7e7q2ngetxxrf68f4cqmc7u5xwbc67ttricg64gmak27vfxtf2wvwt"]}

    var bb = new TxSignPrep().prepare(registernodetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "eFQ1SC9oWE1CdEswRnVWUG5kYWl3dTg3Y3phcWZyYW1paXlhN3M3aDZzYWJ4YWd3dHUycHN1dHp5NWZua3J3ZnN0cmluZzogdGhjdCB1YXggeGtxZiBhZnBsc2ogYmN4b2VmZnIgABQD3vY6XHI="
    )
  })
  it('should build an object for RegisterNode without signatures and convert to known b64', () => {
    var registernodetx = {"distribution_script":"xT5H/hXMBtK0FuVP","node":"ndaiwu87czaqframiiya7s7h6sabxagwtu2psutzy5fnkrwf","rpc_address":"string: thct uax xkqf afplsj bcxoeffr ","sequence":5633755682856050}

    var bb = new TxSignPrep().prepare(registernodetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "eFQ1SC9oWE1CdEswRnVWUG5kYWl3dTg3Y3phcWZyYW1paXlhN3M3aDZzYWJ4YWd3dHUycHN1dHp5NWZua3J3ZnN0cmluZzogdGhjdCB1YXggeGtxZiBhZnBsc2ogYmN4b2VmZnIgABQD3vY6XHI="
    )
  })
})
describe('NominateNodeReward object prepare tests', () => {
  it('should build an object for NominateNodeReward and convert to known b64', () => {
    var nominatenoderewardtx = {"random":7664575722253654,"sequence":4786722739683373,"signatures":["a4jadtcaqttaw7kymicquvu4ks7u4xtif672a4q9zpvxznni7s78ti7qgtgjhb6rguz5pa85itu3cb42yfm68eftapt2saq94stsqsdu3dqsamqy72psf6r8"]}

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
    var claimnoderewardtx = {"node":"ndamfypstdvgc2vxi7ghnsjmm4a2t9mi8ikjv2rkbaw5arw2","sequence":4402827188794727,"signatures":["a4jadtca2tthu7m5zpypjtcaicj53ufkba269dycp884f6nrgarfzam7xe26e26pckuzs4cfz8c3dzmjy8pjqeagzva2t47cmr4uyjqmsvuvqmbs7gg97vxr"]}

    var bb = new TxSignPrep().prepare(claimnoderewardtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhbWZ5cHN0ZHZnYzJ2eGk3Z2huc2ptbTRhMnQ5bWk4aWtqdjJya2JhdzVhcncyAA+kWRaYdWc="
    )
  })
  it('should build an object for ClaimNodeReward without signatures and convert to known b64', () => {
    var claimnoderewardtx = {"node":"ndamfypstdvgc2vxi7ghnsjmm4a2t9mi8ikjv2rkbaw5arw2","sequence":4402827188794727}

    var bb = new TxSignPrep().prepare(claimnoderewardtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhbWZ5cHN0ZHZnYzJ2eGk3Z2huc2ptbTRhMnQ5bWk4aWtqdjJya2JhdzVhcncyAA+kWRaYdWc="
    )
  })
})
describe('TransferAndLock object prepare tests', () => {
  it('should build an object for TransferAndLock and convert to known b64', () => {
    var transferandlocktx = {"source":"ndaeq9we3ykrsf6dia48435yk592rapbqgnmnass87u38knc","destination":"ndaiifetgvbs7ezas38ijgd25qwrkjmdr9kk8rmpnbyqau9x","qty":6090287018180214,"period":"1y9m15dt10h9m51s569721us","sequence":7443647051579152,"signatures":["a4jadtcazfq8v2u6dhng4bct4y59yw8smvkuqygyrta4tgpecf7ywg88z3byg37di83za8x9p9nf472gpms8ftq4q4gsaq33gfgnfzbmvdyw54ucckn4n2n6"]}

    var bb = new TxSignPrep().prepare(transferandlocktx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhaWlmZXRndmJzN2V6YXMzOGlqZ2QyNXF3cmtqbWRyOWtrOHJtcG5ieXFhdTl4MXk5bTE1ZHQxMGg5bTUxczU2OTcyMXVzABWjFXJMfnYAGnH1Ile/EG5kYWVxOXdlM3lrcnNmNmRpYTQ4NDM1eWs1OTJyYXBicWdubW5hc3M4N3UzOGtuYw=="
    )
  })
  it('should build an object for TransferAndLock without signatures and convert to known b64', () => {
    var transferandlocktx = {"destination":"ndaiifetgvbs7ezas38ijgd25qwrkjmdr9kk8rmpnbyqau9x","period":"1y9m15dt10h9m51s569721us","qty":6090287018180214,"sequence":7443647051579152,"source":"ndaeq9we3ykrsf6dia48435yk592rapbqgnmnass87u38knc"}

    var bb = new TxSignPrep().prepare(transferandlocktx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhaWlmZXRndmJzN2V6YXMzOGlqZ2QyNXF3cmtqbWRyOWtrOHJtcG5ieXFhdTl4MXk5bTE1ZHQxMGg5bTUxczU2OTcyMXVzABWjFXJMfnYAGnH1Ile/EG5kYWVxOXdlM3lrcnNmNmRpYTQ4NDM1eWs1OTJyYXBicWdubW5hc3M4N3UzOGtuYw=="
    )
  })
})
describe('CommandValidatorChange object prepare tests', () => {
  it('should build an object for CommandValidatorChange and convert to known b64', () => {
    var commandvalidatorchangetx = {"public_key":"6aKTma+7ZKx6ffQ0","power":7147475985406603,"sequence":3268473309273449,"signatures":["a4jadtcan9s2jsixmnjyh2d8i9qezubq6as8f2vbrwz7u6bqxhuwa29xtufnnjyrpear5jf54quu4nr2tdxpj44gn23fzzhswfs7mwaz34s3jrt5wfha8542"]}

    var bb = new TxSignPrep().prepare(commandvalidatorchangetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "ABlkl28mmos2YUtUbWErN1pLeDZmZlEwAAucqL6OnWk="
    )
  })
  it('should build an object for CommandValidatorChange without signatures and convert to known b64', () => {
    var commandvalidatorchangetx = {"power":7147475985406603,"public_key":"6aKTma+7ZKx6ffQ0","sequence":3268473309273449}

    var bb = new TxSignPrep().prepare(commandvalidatorchangetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "ABlkl28mmos2YUtUbWErN1pLeDZmZlEwAAucqL6OnWk="
    )
  })
})
describe('SidechainTx object prepare tests', () => {
  it('should build an object for SidechainTx and convert to known b64', () => {
    var sidechaintxtx = {"source":"ndaa568k3e6aw3n8fsqu6mv3m3wumtts86yyuumfqbrzhuxc","sidechain_id":76,"sidechain_signable_bytes":"DIhuswLxKRoIK63x","sidechain_signatures":["a4jadtcazbm2b2d23gjcjmr7bqkfuwz22cd36bawzvfaw3wyjycuaq9iw45yq2juvxekapsvqfd9ks5hjhhgjhe4rjtg93ap8wicxr2fk3jdasg9u3jmwcsk"],"sequence":666378943674263,"signatures":["a4jadtcanzu5vmh2akzgf9fehb9priw4qqcfv6gjb6hazwegevts4diquiv2k9xxpbynzqxii2s8szzvxgpqfknx55wk26gtyzfym6eqhi46ntw5c42s3z7h"]}

    var bb = new TxSignPrep().prepare(sidechaintxtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AAJeEXA5N5cAAAAAAAAATERJaHVzd0x4S1JvSUs2M3hhNGphZHRjYXpibTJiMmQyM2dqY2ptcjdicWtmdXd6MjJjZDM2YmF3enZmYXczd3lqeWN1YXE5aXc0NXlxMmp1dnhla2Fwc3ZxZmQ5a3M1aGpoaGdqaGU0cmp0ZzkzYXA4d2ljeHIyZmszamRhc2c5dTNqbXdjc2tuZGFhNTY4azNlNmF3M244ZnNxdTZtdjNtM3d1bXR0czg2eXl1dW1mcWJyemh1eGM="
    )
  })
  it('should build an object for SidechainTx without signatures and convert to known b64', () => {
    var sidechaintxtx = {"sequence":666378943674263,"sidechain_id":76,"sidechain_signable_bytes":"DIhuswLxKRoIK63x","sidechain_signatures":["a4jadtcazbm2b2d23gjcjmr7bqkfuwz22cd36bawzvfaw3wyjycuaq9iw45yq2juvxekapsvqfd9ks5hjhhgjhe4rjtg93ap8wicxr2fk3jdasg9u3jmwcsk"],"source":"ndaa568k3e6aw3n8fsqu6mv3m3wumtts86yyuumfqbrzhuxc"}

    var bb = new TxSignPrep().prepare(sidechaintxtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AAJeEXA5N5cAAAAAAAAATERJaHVzd0x4S1JvSUs2M3hhNGphZHRjYXpibTJiMmQyM2dqY2ptcjdicWtmdXd6MjJjZDM2YmF3enZmYXczd3lqeWN1YXE5aXc0NXlxMmp1dnhla2Fwc3ZxZmQ5a3M1aGpoaGdqaGU0cmp0ZzkzYXA4d2ljeHIyZmszamRhc2c5dTNqbXdjc2tuZGFhNTY4azNlNmF3M244ZnNxdTZtdjNtM3d1bXR0czg2eXl1dW1mcWJyemh1eGM="
    )
  })
})
describe('UnregisterNode object prepare tests', () => {
  it('should build an object for UnregisterNode and convert to known b64', () => {
    var unregisternodetx = {"node":"ndahv2u3m6p75fyujdktzu26yg3qdz9iq4umgrijr9ycr857","sequence":5623762082951376,"signatures":["a4jadtcap8hjxh4wjmfv7nt4a5vgibuz53kynj5hgn4kzufwespq9ndh9dkr52eu6kza3qxex6kkshm35sp3abj53mbdddgjmsz6ngq68drg9fmxsa2h4gg7"]}

    var bb = new TxSignPrep().prepare(unregisternodetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhaHYydTNtNnA3NWZ5dWpka3R6dTI2eWczcWR6OWlxNHVtZ3JpanI5eWNyODU3ABP6yCVBcNA="
    )
  })
  it('should build an object for UnregisterNode without signatures and convert to known b64', () => {
    var unregisternodetx = {"node":"ndahv2u3m6p75fyujdktzu26yg3qdz9iq4umgrijr9ycr857","sequence":5623762082951376}

    var bb = new TxSignPrep().prepare(unregisternodetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhaHYydTNtNnA3NWZ5dWpka3R6dTI2eWczcWR6OWlxNHVtZ3JpanI5eWNyODU3ABP6yCVBcNA="
    )
  })
})
describe('Unstake object prepare tests', () => {
  it('should build an object for Unstake and convert to known b64', () => {
    var unstaketx = {"target":"ndagqw9b5tdcnvye53xt76fe2k27s9wsrrz8jvvg9c4mhk92","sequence":3820780875409098,"signatures":["a4jadtcaqzy4kitkadqv56i9ddgtfk8z642nu73yzheu8h6tnzxxjrq2cn993v7tgbxkd9397vvyjnxuu7x5a7xinkcpp3uazezixgc5qm7etgzeaw9r8r26"]}

    var bb = new TxSignPrep().prepare(unstaketx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AA2S+t7X5spuZGFncXc5YjV0ZGNudnllNTN4dDc2ZmUyazI3czl3c3JyejhqdnZnOWM0bWhrOTI="
    )
  })
  it('should build an object for Unstake without signatures and convert to known b64', () => {
    var unstaketx = {"sequence":3820780875409098,"target":"ndagqw9b5tdcnvye53xt76fe2k27s9wsrrz8jvvg9c4mhk92"}

    var bb = new TxSignPrep().prepare(unstaketx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AA2S+t7X5spuZGFncXc5YjV0ZGNudnllNTN4dDc2ZmUyazI3czl3c3JyejhqdnZnOWM0bWhrOTI="
    )
  })
})
describe('Issue object prepare tests', () => {
  it('should build an object for Issue and convert to known b64', () => {
    var issuetx = {"qty":2805298263287969,"sequence":8998038698708596,"signatures":["a4jadtcavyxgzbcsiigjjnzmxpq5p582r2z5rqfauv9t3ai4armpm5pzacusrttua3s7tgm6phwz84kwuscijj578xbg8gnrv3mng7pmrkfr9e6px33c5iir"]}

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
describe('ClaimChildAccount object prepare tests', () => {
  it('should build an object for ClaimChildAccount and convert to known b64', () => {
    var claimchildaccounttx = {"target":"ndaeayiax7edbuuuy6nrzr5rhjuik9ffya9c2adzukxkjkn3","child":"ndacicja5edqidtukgqm9jhjt78kgq9rpq7r4rum8j5pccub","child_ownership":"npuba8jadtbbeacq778b9fhxv7zqt3tr558h2txe6iy49x73wq3cu7537edxtcv93qth82ijbfcj","child_signature":"a4jadtcaw452jpwnpvw9c6sre7r5c85szit7t4hnjgji5neun95xkyfn3vnj9ap6ydvt8mzcwyefzvei5d8ejtppe6v75xmppjuehrcwxkyv4h3rd5sj85ka","child_settlement_period":"8m23dt16h44m36s771718us","child_validation_keys":["npuba8jadtbbedai2nsqbw5aezx95zxk52sad7n5yxf69pskbeqecdwskut25izmbn99uex9xiu6"],"child_validation_script":"1CHBDE4F8GyG/X2e","sequence":5884718809965732,"signatures":["a4jadtcaa5qdnwvzv7h8sitsz7kjpyyw5p9iftvq74udj8tir4rddm5tc5bmxjvtm93fvdfn7ducwwjpvwie2p2a5ecmsh6c434dwa7cx5kfiscqkgyggykx"]}

    var bb = new TxSignPrep().prepare(claimchildaccounttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhY2ljamE1ZWRxaWR0dWtncW05amhqdDc4a2dxOXJwcTdyNHJ1bThqNXBjY3VibnB1YmE4amFkdGJiZWFjcTc3OGI5Zmh4djd6cXQzdHI1NThoMnR4ZTZpeTQ5eDczd3EzY3U3NTM3ZWR4dGN2OTNxdGg4MmlqYmZjajhtMjNkdDE2aDQ0bTM2czc3MTcxOHVzYTRqYWR0Y2F3NDUyanB3bnB2dzljNnNyZTdyNWM4NXN6aXQ3dDRobmpnamk1bmV1bjk1eGt5Zm4zdm5qOWFwNnlkdnQ4bXpjd3llZnp2ZWk1ZDhlanRwcGU2djc1eG1wcGp1ZWhyY3d4a3l2NGgzcmQ1c2o4NWthbnB1YmE4amFkdGJiZWRhaTJuc3FidzVhZXp4OTV6eGs1MnNhZDduNXl4ZjY5cHNrYmVxZWNkd3NrdXQyNWl6bWJuOTl1ZXg5eGl1NjFDSEJERTRGOEd5Ry9YMmUAFOge3kVkpG5kYWVheWlheDdlZGJ1dXV5Nm5yenI1cmhqdWlrOWZmeWE5YzJhZHp1a3hramtuMw=="
    )
  })
  it('should build an object for ClaimChildAccount without signatures and convert to known b64', () => {
    var claimchildaccounttx = {"child":"ndacicja5edqidtukgqm9jhjt78kgq9rpq7r4rum8j5pccub","child_ownership":"npuba8jadtbbeacq778b9fhxv7zqt3tr558h2txe6iy49x73wq3cu7537edxtcv93qth82ijbfcj","child_settlement_period":"8m23dt16h44m36s771718us","child_signature":"a4jadtcaw452jpwnpvw9c6sre7r5c85szit7t4hnjgji5neun95xkyfn3vnj9ap6ydvt8mzcwyefzvei5d8ejtppe6v75xmppjuehrcwxkyv4h3rd5sj85ka","child_validation_keys":["npuba8jadtbbedai2nsqbw5aezx95zxk52sad7n5yxf69pskbeqecdwskut25izmbn99uex9xiu6"],"child_validation_script":"1CHBDE4F8GyG/X2e","sequence":5884718809965732,"target":"ndaeayiax7edbuuuy6nrzr5rhjuik9ffya9c2adzukxkjkn3"}

    var bb = new TxSignPrep().prepare(claimchildaccounttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhY2ljamE1ZWRxaWR0dWtncW05amhqdDc4a2dxOXJwcTdyNHJ1bThqNXBjY3VibnB1YmE4amFkdGJiZWFjcTc3OGI5Zmh4djd6cXQzdHI1NThoMnR4ZTZpeTQ5eDczd3EzY3U3NTM3ZWR4dGN2OTNxdGg4MmlqYmZjajhtMjNkdDE2aDQ0bTM2czc3MTcxOHVzYTRqYWR0Y2F3NDUyanB3bnB2dzljNnNyZTdyNWM4NXN6aXQ3dDRobmpnamk1bmV1bjk1eGt5Zm4zdm5qOWFwNnlkdnQ4bXpjd3llZnp2ZWk1ZDhlanRwcGU2djc1eG1wcGp1ZWhyY3d4a3l2NGgzcmQ1c2o4NWthbnB1YmE4amFkdGJiZWRhaTJuc3FidzVhZXp4OTV6eGs1MnNhZDduNXl4ZjY5cHNrYmVxZWNkd3NrdXQyNWl6bWJuOTl1ZXg5eGl1NjFDSEJERTRGOEd5Ry9YMmUAFOge3kVkpG5kYWVheWlheDdlZGJ1dXV5Nm5yenI1cmhqdWlrOWZmeWE5YzJhZHp1a3hramtuMw=="
    )
  })
})

