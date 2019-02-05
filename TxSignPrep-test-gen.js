import TxSignPrep from '../TxSignPrep'

describe('Transfer object prepare tests', () => {
  it('should build an object for Transfer and convert to known b64', () => {
    var transfertx = {"source":"ndajgqku9htejqq6k3r3ny6zwuwcpbyxydyrpjvbhxa3jgkr","destination":"ndafnm7nsx2t359dtmidnbr6hify8z9p2w2i8jckg24h2qup","qty":1550453263105981,"sequence":732340766579218,"signatures":["a4jadtca6e5rbi3hcua7adx74ukka8ks849ybw9y4tvb4tans855t9j8tacq3k4n4eg3v7wh7zjmmppm2srchgwt4fsxw9ky9eedt4xktr37bebyabc562ak"]}

    var bb = new TxSignPrep().prepare(transfertx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhZm5tN25zeDJ0MzU5ZHRtaWRuYnI2aGlmeTh6OXAydzJpOGpja2cyNGgycXVwAAWCIQf8/70AApoPXz8aEm5kYWpncWt1OWh0ZWpxcTZrM3Izbnk2end1d2NwYnl4eWR5cnBqdmJoeGEzamdrcg=="
    )
  })
  it('should build an object for Transfer without signatures and convert to known b64', () => {
    var transfertx = {"destination":"ndafnm7nsx2t359dtmidnbr6hify8z9p2w2i8jckg24h2qup","qty":1550453263105981,"sequence":732340766579218,"source":"ndajgqku9htejqq6k3r3ny6zwuwcpbyxydyrpjvbhxa3jgkr"}

    var bb = new TxSignPrep().prepare(transfertx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhZm5tN25zeDJ0MzU5ZHRtaWRuYnI2aGlmeTh6OXAydzJpOGpja2cyNGgycXVwAAWCIQf8/70AApoPXz8aEm5kYWpncWt1OWh0ZWpxcTZrM3Izbnk2end1d2NwYnl4eWR5cnBqdmJoeGEzamdrcg=="
    )
  })
})
describe('ChangeValidation object prepare tests', () => {
  it('should build an object for ChangeValidation and convert to known b64', () => {
    var changevalidationtx = {"target":"ndafyyuuq7zr59xzh2g3hxqhkh6f9e4rum9bsfsmx6fte3hh","new_keys":["npuba8jadtbbed7bv4yqghkqx35mxtptzrddxvs9u3ecsee5shxahxhigitezy68vzzps9h7nyw7"],"validation_script":"gT4GBI/beVClSMiV","sequence":4589118442271941,"signatures":["a4jadtca3u287qjrv6zcdc4dutscddz4487cwnb9kjq2ukzqsuyh33icesbuhmngsv4h4axedsv9x855mrktkmrrhsd65x8gtbks7mwrcup4cuuteyp89mv6"]}

    var bb = new TxSignPrep().prepare(changevalidationtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bnB1YmE4amFkdGJiZWQ3YnY0eXFnaGtxeDM1bXh0cHR6cmRkeHZzOXUzZWNzZWU1c2h4YWh4aGlnaXRlenk2OHZ6enBzOWg3bnl3NwAQTcdmlXTFbmRhZnl5dXVxN3pyNTl4emgyZzNoeHFoa2g2ZjllNHJ1bTlic2ZzbXg2ZnRlM2hoZ1Q0R0JJL2JlVkNsU01pVg=="
    )
  })
  it('should build an object for ChangeValidation without signatures and convert to known b64', () => {
    var changevalidationtx = {"new_keys":["npuba8jadtbbed7bv4yqghkqx35mxtptzrddxvs9u3ecsee5shxahxhigitezy68vzzps9h7nyw7"],"sequence":4589118442271941,"target":"ndafyyuuq7zr59xzh2g3hxqhkh6f9e4rum9bsfsmx6fte3hh","validation_script":"gT4GBI/beVClSMiV"}

    var bb = new TxSignPrep().prepare(changevalidationtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bnB1YmE4amFkdGJiZWQ3YnY0eXFnaGtxeDM1bXh0cHR6cmRkeHZzOXUzZWNzZWU1c2h4YWh4aGlnaXRlenk2OHZ6enBzOWg3bnl3NwAQTcdmlXTFbmRhZnl5dXVxN3pyNTl4emgyZzNoeHFoa2g2ZjllNHJ1bTlic2ZzbXg2ZnRlM2hoZ1Q0R0JJL2JlVkNsU01pVg=="
    )
  })
})
describe('ReleaseFromEndowment object prepare tests', () => {
  it('should build an object for ReleaseFromEndowment and convert to known b64', () => {
    var releasefromendowmenttx = {"destination":"ndacij8snywrrbu6df59wsaw7hc98u9bc3myr8md9xt4jbyx","qty":1975528111046083,"sequence":7465139729523843,"signatures":["a4jadtca8uwm6fney4kwitsus226tzswutsa65z7f44mjp6qjnf4w37anjc6m4bypc29mnbm3sesza68337hsgwpg5huycbceufb2c59wke4i5rjgkxzecwb"]}

    var bb = new TxSignPrep().prepare(releasefromendowmenttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhY2lqOHNueXdycmJ1NmRmNTl3c2F3N2hjOTh1OWJjM215cjhtZDl4dDRqYnl4AAcEu3tNfcMAGoWBScbkgw=="
    )
  })
  it('should build an object for ReleaseFromEndowment without signatures and convert to known b64', () => {
    var releasefromendowmenttx = {"destination":"ndacij8snywrrbu6df59wsaw7hc98u9bc3myr8md9xt4jbyx","qty":1975528111046083,"sequence":7465139729523843}

    var bb = new TxSignPrep().prepare(releasefromendowmenttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhY2lqOHNueXdycmJ1NmRmNTl3c2F3N2hjOTh1OWJjM215cjhtZDl4dDRqYnl4AAcEu3tNfcMAGoWBScbkgw=="
    )
  })
})
describe('ChangeSettlementPeriod object prepare tests', () => {
  it('should build an object for ChangeSettlementPeriod and convert to known b64', () => {
    var changesettlementperiodtx = {"target":"ndae5z3wvafypi8yy5tfvrsxba6emcz5zatqnfcv7i9rr8y7","period":"11m25dt14h35m49s167320us","sequence":1912297565323361,"signatures":["a4jadtcafw9i9rcnde242bf2tfsvkzefdjdn5b9t7p6m3y5s8djuyb968ewc6ct6fk7bkxw8kapqmdcvwdncicesdcr3t7m2fqqhjy9g7mx5s2bydnns9xab"]}

    var bb = new TxSignPrep().prepare(changesettlementperiodtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "MTFtMjVkdDE0aDM1bTQ5czE2NzMyMHVzAAbLOXkWAGFuZGFlNXozd3ZhZnlwaTh5eTV0ZnZyc3hiYTZlbWN6NXphdHFuZmN2N2k5cnI4eTc="
    )
  })
  it('should build an object for ChangeSettlementPeriod without signatures and convert to known b64', () => {
    var changesettlementperiodtx = {"period":"11m25dt14h35m49s167320us","sequence":1912297565323361,"target":"ndae5z3wvafypi8yy5tfvrsxba6emcz5zatqnfcv7i9rr8y7"}

    var bb = new TxSignPrep().prepare(changesettlementperiodtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "MTFtMjVkdDE0aDM1bTQ5czE2NzMyMHVzAAbLOXkWAGFuZGFlNXozd3ZhZnlwaTh5eTV0ZnZyc3hiYTZlbWN6NXphdHFuZmN2N2k5cnI4eTc="
    )
  })
})
describe('Delegate object prepare tests', () => {
  it('should build an object for Delegate and convert to known b64', () => {
    var delegatetx = {"target":"ndarb64ii2ue7b5s4jvhrddea8s4rtquye36ne48dirtiid8","node":"ndaikqkecgejmft5bfiytmqirtff4idp4hdf7a8mw5xzeres","sequence":2483436573217588,"signatures":["a4jadtca74nwtz4iw99wbbdb6m8aewisyf4zcghu5kehmqaj43muw49ijvpvrrj6vaspfkjzpug2vcgsw2dprqyczxt3cpgjpi6w9gzs2puusjqkmadiixuv"]}

    var bb = new TxSignPrep().prepare(delegatetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhaWtxa2VjZ2VqbWZ0NWJmaXl0bXFpcnRmZjRpZHA0aGRmN2E4bXc1eHplcmVzAAjSrCLE0zRuZGFyYjY0aWkydWU3YjVzNGp2aHJkZGVhOHM0cnRxdXllMzZuZTQ4ZGlydGlpZDg="
    )
  })
  it('should build an object for Delegate without signatures and convert to known b64', () => {
    var delegatetx = {"node":"ndaikqkecgejmft5bfiytmqirtff4idp4hdf7a8mw5xzeres","sequence":2483436573217588,"target":"ndarb64ii2ue7b5s4jvhrddea8s4rtquye36ne48dirtiid8"}

    var bb = new TxSignPrep().prepare(delegatetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhaWtxa2VjZ2VqbWZ0NWJmaXl0bXFpcnRmZjRpZHA0aGRmN2E4bXc1eHplcmVzAAjSrCLE0zRuZGFyYjY0aWkydWU3YjVzNGp2aHJkZGVhOHM0cnRxdXllMzZuZTQ4ZGlydGlpZDg="
    )
  })
})
describe('CreditEAI object prepare tests', () => {
  it('should build an object for CreditEAI and convert to known b64', () => {
    var crediteaitx = {"node":"ndafyu9ynawv8gsws9sdq3y9vbzff39knvegcwtv4zude558","sequence":2673222963759107,"signatures":["a4jadtcap2fcjeg8tydhijpdd6gfsr46jswftqx9yib9qvgyi685sb25ingava4mn83ayk2s6wamzjghw2ee92umjgjgrqhw7j5wpi4uxcq2irj3cdaj95ae"]}

    var bb = new TxSignPrep().prepare(crediteaitx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhZnl1OXluYXd2OGdzd3M5c2RxM3k5dmJ6ZmYzOWtudmVnY3d0djR6dWRlNTU4AAl/SDkpCAM="
    )
  })
  it('should build an object for CreditEAI without signatures and convert to known b64', () => {
    var crediteaitx = {"node":"ndafyu9ynawv8gsws9sdq3y9vbzff39knvegcwtv4zude558","sequence":2673222963759107}

    var bb = new TxSignPrep().prepare(crediteaitx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhZnl1OXluYXd2OGdzd3M5c2RxM3k5dmJ6ZmYzOWtudmVnY3d0djR6dWRlNTU4AAl/SDkpCAM="
    )
  })
})
describe('Lock object prepare tests', () => {
  it('should build an object for Lock and convert to known b64', () => {
    var locktx = {"target":"ndagqzjrphnn579drtdcr2eu783gprek9zth3yw6at5i53df","period":"3y20dt6h48m279449us","sequence":5203743511895827,"signatures":["a4jadtca72zacitjwujmdmijhci5kicqzxr5c95cmyh94ctzjrratw8icnhavgcc664i2c62zehkbg9fwmrrdssj62quwuc24s6yg5uctvy7rpyt5mp8fwav"]}

    var bb = new TxSignPrep().prepare(locktx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "M3kyMGR0Nmg0OG0yNzk0NDl1cwASfMbzh18TbmRhZ3F6anJwaG5uNTc5ZHJ0ZGNyMmV1NzgzZ3ByZWs5enRoM3l3NmF0NWk1M2Rm"
    )
  })
  it('should build an object for Lock without signatures and convert to known b64', () => {
    var locktx = {"period":"3y20dt6h48m279449us","sequence":5203743511895827,"target":"ndagqzjrphnn579drtdcr2eu783gprek9zth3yw6at5i53df"}

    var bb = new TxSignPrep().prepare(locktx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "M3kyMGR0Nmg0OG0yNzk0NDl1cwASfMbzh18TbmRhZ3F6anJwaG5uNTc5ZHJ0ZGNyMmV1NzgzZ3ByZWs5enRoM3l3NmF0NWk1M2Rm"
    )
  })
})
describe('Notify object prepare tests', () => {
  it('should build an object for Notify and convert to known b64', () => {
    var notifytx = {"target":"ndag2377pcjd3ajf8bkfympmqvtacsh2nzv874cnf7gd4fmm","sequence":1507085064423784,"signatures":["a4jadtca4vjbhmw8q8zxq8puxajzxm3fsekcut65e68pen3qv9mdg42zjqek77jmm3pgp2i9guirwv7i8atmdsmaju2wz3y2iu2rh2jvm2j8uhjdebpqbmqq"]}

    var bb = new TxSignPrep().prepare(notifytx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AAVar5XpSWhuZGFnMjM3N3BjamQzYWpmOGJrZnltcG1xdnRhY3NoMm56djg3NGNuZjdnZDRmbW0="
    )
  })
  it('should build an object for Notify without signatures and convert to known b64', () => {
    var notifytx = {"sequence":1507085064423784,"target":"ndag2377pcjd3ajf8bkfympmqvtacsh2nzv874cnf7gd4fmm"}

    var bb = new TxSignPrep().prepare(notifytx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AAVar5XpSWhuZGFnMjM3N3BjamQzYWpmOGJrZnltcG1xdnRhY3NoMm56djg3NGNuZjdnZDRmbW0="
    )
  })
})
describe('SetRewardsDestination object prepare tests', () => {
  it('should build an object for SetRewardsDestination and convert to known b64', () => {
    var setrewardsdestinationtx = {"source":"ndaem3m4vssgpxgf5yysxu7raqejp7xsrbpfiuwpn9r4gbbb","destination":"ndap6wc2z9kadqgxntqmkw3psae33bgj3pucw87z597ytrw2","sequence":3658774096214545,"signatures":["a4jadtcahxvsig76rfsbrhggursrw4yc45ipqraebidiwu99z7uts7qrpzx52q7qqnneeixmtahs4jidez5uadi52e4k4mdvmav4qchzyvhp6dmq48qvcegh"]}

    var bb = new TxSignPrep().prepare(setrewardsdestinationtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhcDZ3YzJ6OWthZHFneG50cW1rdzNwc2FlMzNiZ2ozcHVjdzg3ejU5N3l0cncyAAz/orpRehFuZGFlbTNtNHZzc2dweGdmNXl5c3h1N3JhcWVqcDd4c3JicGZpdXdwbjlyNGdiYmI="
    )
  })
  it('should build an object for SetRewardsDestination without signatures and convert to known b64', () => {
    var setrewardsdestinationtx = {"destination":"ndap6wc2z9kadqgxntqmkw3psae33bgj3pucw87z597ytrw2","sequence":3658774096214545,"source":"ndaem3m4vssgpxgf5yysxu7raqejp7xsrbpfiuwpn9r4gbbb"}

    var bb = new TxSignPrep().prepare(setrewardsdestinationtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhcDZ3YzJ6OWthZHFneG50cW1rdzNwc2FlMzNiZ2ozcHVjdzg3ejU5N3l0cncyAAz/orpRehFuZGFlbTNtNHZzc2dweGdmNXl5c3h1N3JhcWVqcDd4c3JicGZpdXdwbjlyNGdiYmI="
    )
  })
})
describe('ClaimAccount object prepare tests', () => {
  it('should build an object for ClaimAccount and convert to known b64', () => {
    var claimaccounttx = {"target":"ndaje62dh3hn8hghsf4967n49tak9ecndzaihzft6tucediw","ownership":"npuba8jadtbbed9mf84dp58d543fni4cjkwa38p4m25pb4n6fn542ysssf455ygfsrpbqcpdjuja","validation_keys":["npuba8jadtbbebb2nnurig3u87frrcvami64kwhtcgq2xvytjjbdiksm88aeebhx32sugfipwpre"],"validation_script":"93iJOw5AWPKXu29o","sequence":7142365320213337,"signature":"a4jadtcaqq235a84m6wykxtuqw7h4tqmfex7ed7ewtt7r6cdpdyqpb9u69zb2nuna2jzpatikt7wfdytxhsgppz6bhash736uj3bxxp5ie2yt6e543vrkh8i"}

    var bb = new TxSignPrep().prepare(claimaccounttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bnB1YmE4amFkdGJiZWQ5bWY4NGRwNThkNTQzZm5pNGNqa3dhMzhwNG0yNXBiNG42Zm41NDJ5c3NzZjQ1NXlnZnNycGJxY3BkanVqYQAZX/GDxHNZbmRhamU2MmRoM2huOGhnaHNmNDk2N240OXRhazllY25kemFpaHpmdDZ0dWNlZGl3bnB1YmE4amFkdGJiZWJiMm5udXJpZzN1ODdmcnJjdmFtaTY0a3dodGNncTJ4dnl0ampiZGlrc204OGFlZWJoeDMyc3VnZmlwd3ByZTkzaUpPdzVBV1BLWHUyOW8="
    )
  })
  it('should build an object for ClaimAccount without signatures and convert to known b64', () => {
    var claimaccounttx = {"ownership":"npuba8jadtbbed9mf84dp58d543fni4cjkwa38p4m25pb4n6fn542ysssf455ygfsrpbqcpdjuja","sequence":7142365320213337,"target":"ndaje62dh3hn8hghsf4967n49tak9ecndzaihzft6tucediw","validation_keys":["npuba8jadtbbebb2nnurig3u87frrcvami64kwhtcgq2xvytjjbdiksm88aeebhx32sugfipwpre"],"validation_script":"93iJOw5AWPKXu29o"}

    var bb = new TxSignPrep().prepare(claimaccounttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bnB1YmE4amFkdGJiZWQ5bWY4NGRwNThkNTQzZm5pNGNqa3dhMzhwNG0yNXBiNG42Zm41NDJ5c3NzZjQ1NXlnZnNycGJxY3BkanVqYQAZX/GDxHNZbmRhamU2MmRoM2huOGhnaHNmNDk2N240OXRhazllY25kemFpaHpmdDZ0dWNlZGl3bnB1YmE4amFkdGJiZWJiMm5udXJpZzN1ODdmcnJjdmFtaTY0a3dodGNncTJ4dnl0ampiZGlrc204OGFlZWJoeDMyc3VnZmlwd3ByZTkzaUpPdzVBV1BLWHUyOW8="
    )
  })
})
describe('Stake object prepare tests', () => {
  it('should build an object for Stake and convert to known b64', () => {
    var staketx = {"target":"ndaijsgmt87sbc4bvjxvr7prbekipbpyknmrkae4v9sre79q","staked_account":"ndaqhzppg23nuk6qt9yrgsirr92zs4k9ec3z27as76s8k242","sequence":6229113420623440,"signatures":["a4jadtca244h6e6fzqbvb2wavrzbr48fnui75czi7b29k6upz3mcuurj873ci9jw4d837s28n67er9k2pv72wbyzwnd4wqqat6huefrf9k2cbbdkf3t46qnt"]}

    var bb = new TxSignPrep().prepare(staketx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "ABYhWHyzrlBuZGFxaHpwcGcyM251azZxdDl5cmdzaXJyOTJ6czRrOWVjM3oyN2FzNzZzOGsyNDJuZGFpanNnbXQ4N3NiYzRidmp4dnI3cHJiZWtpcGJweWtubXJrYWU0djlzcmU3OXE="
    )
  })
  it('should build an object for Stake without signatures and convert to known b64', () => {
    var staketx = {"sequence":6229113420623440,"staked_account":"ndaqhzppg23nuk6qt9yrgsirr92zs4k9ec3z27as76s8k242","target":"ndaijsgmt87sbc4bvjxvr7prbekipbpyknmrkae4v9sre79q"}

    var bb = new TxSignPrep().prepare(staketx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "ABYhWHyzrlBuZGFxaHpwcGcyM251azZxdDl5cmdzaXJyOTJ6czRrOWVjM3oyN2FzNzZzOGsyNDJuZGFpanNnbXQ4N3NiYzRidmp4dnI3cHJiZWtpcGJweWtubXJrYWU0djlzcmU3OXE="
    )
  })
})
describe('RegisterNode object prepare tests', () => {
  it('should build an object for RegisterNode and convert to known b64', () => {
    var registernodetx = {"node":"ndag5fd36qxj22e2623mvge4rw5f6znyxzg8edmgd4evfb2j","distribution_script":"Z7A96HtunF9baAgg","rpc_address":"string: thct uax xkqf afplsj bcxoeffr ","sequence":5633755682856050,"signatures":["a4jadtca57w5ruuxabhberunmy5aecfqxit3schzt59qwy247upmh3324pfi3nmycwb28pzw5ntgkyqzwzwnrhx6hbbf2ac6bv37nxis9fefqtavz34c3srm"]}

    var bb = new TxSignPrep().prepare(registernodetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "WjdBOTZIdHVuRjliYUFnZ25kYWc1ZmQzNnF4ajIyZTI2MjNtdmdlNHJ3NWY2em55eHpnOGVkbWdkNGV2ZmIyanN0cmluZzogdGhjdCB1YXggeGtxZiBhZnBsc2ogYmN4b2VmZnIgABQD3vY6XHI="
    )
  })
  it('should build an object for RegisterNode without signatures and convert to known b64', () => {
    var registernodetx = {"distribution_script":"Z7A96HtunF9baAgg","node":"ndag5fd36qxj22e2623mvge4rw5f6znyxzg8edmgd4evfb2j","rpc_address":"string: thct uax xkqf afplsj bcxoeffr ","sequence":5633755682856050}

    var bb = new TxSignPrep().prepare(registernodetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "WjdBOTZIdHVuRjliYUFnZ25kYWc1ZmQzNnF4ajIyZTI2MjNtdmdlNHJ3NWY2em55eHpnOGVkbWdkNGV2ZmIyanN0cmluZzogdGhjdCB1YXggeGtxZiBhZnBsc2ogYmN4b2VmZnIgABQD3vY6XHI="
    )
  })
})
describe('NominateNodeReward object prepare tests', () => {
  it('should build an object for NominateNodeReward and convert to known b64', () => {
    var nominatenoderewardtx = {"random":7664575722253654,"sequence":4786722739683373,"signatures":["a4jadtca47mrazgs6mfxbc22ufpuyamzmyfkp9nanhfk24abf594tpvquachuzwpnk4zwza7768aumhfs2ybrspb5gb95e9486rr6rh5gwdqi7xnaqivmihf"]}

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
    var claimnoderewardtx = {"node":"ndannrjqhe5sdc5ffbacss6h6vi28fbzpg3tbpgr6wsb53h2","sequence":4402827188794727,"signatures":["a4jadtcaeekq2g7mpaghvk6ki9ji4w25z67dd2bcgxf5u4xn8jbtmpuxfxab6w85yq3pd88h2ahzjsce33z7v9eibjcdr3wny4cn4gvmfud4dt9etnkz7n22"]}

    var bb = new TxSignPrep().prepare(claimnoderewardtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhbm5yanFoZTVzZGM1ZmZiYWNzczZoNnZpMjhmYnpwZzN0YnBncjZ3c2I1M2gyAA+kWRaYdWc="
    )
  })
  it('should build an object for ClaimNodeReward without signatures and convert to known b64', () => {
    var claimnoderewardtx = {"node":"ndannrjqhe5sdc5ffbacss6h6vi28fbzpg3tbpgr6wsb53h2","sequence":4402827188794727}

    var bb = new TxSignPrep().prepare(claimnoderewardtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhbm5yanFoZTVzZGM1ZmZiYWNzczZoNnZpMjhmYnpwZzN0YnBncjZ3c2I1M2gyAA+kWRaYdWc="
    )
  })
})
describe('TransferAndLock object prepare tests', () => {
  it('should build an object for TransferAndLock and convert to known b64', () => {
    var transferandlocktx = {"source":"ndabz277jx5g75apfr4k44gn936dr37m3nun9qt7q4i43pu7","destination":"ndarzcecy86twu66xxwsraz6yinpnyixqzqjs69wietutzrr","qty":6090287018180214,"period":"1y9m15dt10h9m51s569721us","sequence":7443647051579152,"signatures":["a4jadtcanf58hrv8vsjyi347wte9gna36je2zay34pks6tbjjvefksny668xvr56ukbux8fh2zc37hmnrtymzkpk2hxa3xcvjxn6s98ykfnjz69tj6akgmbh"]}

    var bb = new TxSignPrep().prepare(transferandlocktx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhcnpjZWN5ODZ0d3U2Nnh4d3NyYXo2eWlucG55aXhxenFqczY5d2lldHV0enJyMXk5bTE1ZHQxMGg5bTUxczU2OTcyMXVzABWjFXJMfnYAGnH1Ile/EG5kYWJ6Mjc3ang1Zzc1YXBmcjRrNDRnbjkzNmRyMzdtM251bjlxdDdxNGk0M3B1Nw=="
    )
  })
  it('should build an object for TransferAndLock without signatures and convert to known b64', () => {
    var transferandlocktx = {"destination":"ndarzcecy86twu66xxwsraz6yinpnyixqzqjs69wietutzrr","period":"1y9m15dt10h9m51s569721us","qty":6090287018180214,"sequence":7443647051579152,"source":"ndabz277jx5g75apfr4k44gn936dr37m3nun9qt7q4i43pu7"}

    var bb = new TxSignPrep().prepare(transferandlocktx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhcnpjZWN5ODZ0d3U2Nnh4d3NyYXo2eWlucG55aXhxenFqczY5d2lldHV0enJyMXk5bTE1ZHQxMGg5bTUxczU2OTcyMXVzABWjFXJMfnYAGnH1Ile/EG5kYWJ6Mjc3ang1Zzc1YXBmcjRrNDRnbjkzNmRyMzdtM251bjlxdDdxNGk0M3B1Nw=="
    )
  })
})
describe('CommandValidatorChange object prepare tests', () => {
  it('should build an object for CommandValidatorChange and convert to known b64', () => {
    var commandvalidatorchangetx = {"public_key":"N+z6hFSaKL11Tvzu","power":7147475985406603,"sequence":3268473309273449,"signatures":["a4jadtcax79adds8kenckr3awktyabmah55c6cez6ehkyazz7ataab8m9j2hsjcxkxwkjgu2c37qtje3qpsgit2bd7akfk6kbrfx4vcezwmsa4q4ewfeduqg"]}

    var bb = new TxSignPrep().prepare(commandvalidatorchangetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "ABlkl28mmotOK3o2aEZTYUtMMTFUdnp1AAucqL6OnWk="
    )
  })
  it('should build an object for CommandValidatorChange without signatures and convert to known b64', () => {
    var commandvalidatorchangetx = {"power":7147475985406603,"public_key":"N+z6hFSaKL11Tvzu","sequence":3268473309273449}

    var bb = new TxSignPrep().prepare(commandvalidatorchangetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "ABlkl28mmotOK3o2aEZTYUtMMTFUdnp1AAucqL6OnWk="
    )
  })
})
describe('SidechainTx object prepare tests', () => {
  it('should build an object for SidechainTx and convert to known b64', () => {
    var sidechaintxtx = {"source":"ndagsdx4pgt8x5tqgktthz47cwtwbekegpim99pmfuctz796","sidechain_id":48,"sidechain_signable_bytes":"JXOPWaJy/J85qrCj","sidechain_signatures":["a4jadtca9nqzk8zkptvq6keq3yucnbw5zf9czuw7r2pjzxvw7v927pdtgt6rmcim7uhs5b7zrpdt4dkb2439g73twzba5buekw54mq2jmfm47tz5tmq9uyu5"],"sequence":666378943674263,"signatures":["a4jadtcaxf7r2nsiwx9vgk3pw7ugiq4ihhtjquc8yyd382nvqmaffj2v2tqrv6e9cnyuv55w8ybai3ia7en8h2r4jefzghussdtjcj4jgvcfmfx9ey86qm9q"]}

    var bb = new TxSignPrep().prepare(sidechaintxtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AAJeEXA5N5cAAAAAAAAAMEpYT1BXYUp5L0o4NXFyQ2phNGphZHRjYTlucXprOHprcHR2cTZrZXEzeXVjbmJ3NXpmOWN6dXc3cjJwanp4dnc3djkyN3BkdGd0NnJtY2ltN3VoczViN3pycGR0NGRrYjI0MzlnNzN0d3piYTVidWVrdzU0bXEyam1mbTQ3dHo1dG1xOXV5dTVuZGFnc2R4NHBndDh4NXRxZ2t0dGh6NDdjd3R3YmVrZWdwaW05OXBtZnVjdHo3OTY="
    )
  })
  it('should build an object for SidechainTx without signatures and convert to known b64', () => {
    var sidechaintxtx = {"sequence":666378943674263,"sidechain_id":48,"sidechain_signable_bytes":"JXOPWaJy/J85qrCj","sidechain_signatures":["a4jadtca9nqzk8zkptvq6keq3yucnbw5zf9czuw7r2pjzxvw7v927pdtgt6rmcim7uhs5b7zrpdt4dkb2439g73twzba5buekw54mq2jmfm47tz5tmq9uyu5"],"source":"ndagsdx4pgt8x5tqgktthz47cwtwbekegpim99pmfuctz796"}

    var bb = new TxSignPrep().prepare(sidechaintxtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AAJeEXA5N5cAAAAAAAAAMEpYT1BXYUp5L0o4NXFyQ2phNGphZHRjYTlucXprOHprcHR2cTZrZXEzeXVjbmJ3NXpmOWN6dXc3cjJwanp4dnc3djkyN3BkdGd0NnJtY2ltN3VoczViN3pycGR0NGRrYjI0MzlnNzN0d3piYTVidWVrdzU0bXEyam1mbTQ3dHo1dG1xOXV5dTVuZGFnc2R4NHBndDh4NXRxZ2t0dGh6NDdjd3R3YmVrZWdwaW05OXBtZnVjdHo3OTY="
    )
  })
})
describe('UnregisterNode object prepare tests', () => {
  it('should build an object for UnregisterNode and convert to known b64', () => {
    var unregisternodetx = {"node":"ndah8iznxx74tund254cg6iyfq62nvnx6juybenre4nenzmz","sequence":5623762082951376,"signatures":["a4jadtcanivhb2mz4unz5zhjxuez5hgqfng9b9f6ettns7tyfsqbka3p95efp6ynarit5eguzwwe2a63624dwht8w9rietuvf9i7a3uj8wtf4m3q5yypprp7"]}

    var bb = new TxSignPrep().prepare(unregisternodetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhaDhpem54eDc0dHVuZDI1NGNnNml5ZnE2Mm52bng2anV5YmVucmU0bmVuem16ABP6yCVBcNA="
    )
  })
  it('should build an object for UnregisterNode without signatures and convert to known b64', () => {
    var unregisternodetx = {"node":"ndah8iznxx74tund254cg6iyfq62nvnx6juybenre4nenzmz","sequence":5623762082951376}

    var bb = new TxSignPrep().prepare(unregisternodetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhaDhpem54eDc0dHVuZDI1NGNnNml5ZnE2Mm52bng2anV5YmVucmU0bmVuem16ABP6yCVBcNA="
    )
  })
})
describe('Unstake object prepare tests', () => {
  it('should build an object for Unstake and convert to known b64', () => {
    var unstaketx = {"target":"ndaahak6sezpnup3g8kdq4k896enbrcaejaxkuy74q3v3t8u","sequence":3820780875409098,"signatures":["a4jadtcagbtapcddcvnuuvkg53rqvqp4x9c4ukgtbb3fmwrqv2ymye4rspfr6eqc2kgnmhyx57ae5yyhs6fehr5q3amf72amhpdw6wjk4dbkefiixp7f7q5r"]}

    var bb = new TxSignPrep().prepare(unstaketx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AA2S+t7X5spuZGFhaGFrNnNlenBudXAzZzhrZHE0azg5NmVuYnJjYWVqYXhrdXk3NHEzdjN0OHU="
    )
  })
  it('should build an object for Unstake without signatures and convert to known b64', () => {
    var unstaketx = {"sequence":3820780875409098,"target":"ndaahak6sezpnup3g8kdq4k896enbrcaejaxkuy74q3v3t8u"}

    var bb = new TxSignPrep().prepare(unstaketx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AA2S+t7X5spuZGFhaGFrNnNlenBudXAzZzhrZHE0azg5NmVuYnJjYWVqYXhrdXk3NHEzdjN0OHU="
    )
  })
})
describe('Issue object prepare tests', () => {
  it('should build an object for Issue and convert to known b64', () => {
    var issuetx = {"qty":2805298263287969,"sequence":8998038698708596,"signatures":["a4jadtcag6xucbzd3p37g6twgjx35hitkmmcabzpd5t9dehjk4pugrube84z6a82mxwjsynvdubbhiadtjvsjaawa9h2b6fjizvrfgi3fftvi4y2sfdur842"]}

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

