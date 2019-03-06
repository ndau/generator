import TxSignPrep from '../TxSignPrep'

describe('Transfer object prepare tests', () => {
  it('should build an object for Transfer and convert to known b64', () => {
    var transfertx = {"source":"ndad9djvunc3c2yg896dpdy94akxwvxaa9fqx6ddxgvxwjcb","destination":"ndajbt8ssqfwgrhmpwer7w7n7n8d7n27ecr8fuue5swkwvgm","qty":1550453263105981,"sequence":732340766579218,"signatures":["a4jadtca7gzdfrci3dq5pvkxujke43p4g5phfqshunkrk2tjw93c3tsxnrtupqp3dkiu53344uxm24ksm5w669dg9kq4hipe355frz2zd8zis2y4satzvzze"]}

    var bb = new TxSignPrep().prepare(transfertx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhamJ0OHNzcWZ3Z3JobXB3ZXI3dzduN244ZDduMjdlY3I4ZnV1ZTVzd2t3dmdtAAWCIQf8/70AApoPXz8aEm5kYWQ5ZGp2dW5jM2MyeWc4OTZkcGR5OTRha3h3dnhhYTlmcXg2ZGR4Z3Z4d2pjYg=="
    )
  })
  it('should build an object for Transfer without signatures and convert to known b64', () => {
    var transfertx = {"destination":"ndajbt8ssqfwgrhmpwer7w7n7n8d7n27ecr8fuue5swkwvgm","qty":1550453263105981,"sequence":732340766579218,"source":"ndad9djvunc3c2yg896dpdy94akxwvxaa9fqx6ddxgvxwjcb"}

    var bb = new TxSignPrep().prepare(transfertx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhamJ0OHNzcWZ3Z3JobXB3ZXI3dzduN244ZDduMjdlY3I4ZnV1ZTVzd2t3dmdtAAWCIQf8/70AApoPXz8aEm5kYWQ5ZGp2dW5jM2MyeWc4OTZkcGR5OTRha3h3dnhhYTlmcXg2ZGR4Z3Z4d2pjYg=="
    )
  })
})
describe('ChangeValidation object prepare tests', () => {
  it('should build an object for ChangeValidation and convert to known b64', () => {
    var changevalidationtx = {"target":"ndamxzx8xhmvysanq2ux5azdb875x2yyitntuhayhbzdkhct","new_keys":["npuba8jadtbbedcefn7eit8jn3kj3vdsmwgunaami8gandpbn38esbyy6btga8cgcrfu53xaq8du"],"validation_script":"cM8NlD2AHKFaCLk4","sequence":4589118442271941,"signatures":["a4jadtcazep6ra6pbuu55si6v6khsigt4d52ftws8jhk4xntpef9eycm4dbkkpmxs5qq6hvck4nkaeax8afm6eeb9p8kfy7d5qx2z3j9ma37rwf3xq3uifaa"]}

    var bb = new TxSignPrep().prepare(changevalidationtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bnB1YmE4amFkdGJiZWRjZWZuN2VpdDhqbjNrajN2ZHNtd2d1bmFhbWk4Z2FuZHBibjM4ZXNieXk2YnRnYThjZ2NyZnU1M3hhcThkdQAQTcdmlXTFbmRhbXh6eDh4aG12eXNhbnEydXg1YXpkYjg3NXgyeXlpdG50dWhheWhiemRraGN0Y004TmxEMkFIS0ZhQ0xrNA=="
    )
  })
  it('should build an object for ChangeValidation without signatures and convert to known b64', () => {
    var changevalidationtx = {"new_keys":["npuba8jadtbbedcefn7eit8jn3kj3vdsmwgunaami8gandpbn38esbyy6btga8cgcrfu53xaq8du"],"sequence":4589118442271941,"target":"ndamxzx8xhmvysanq2ux5azdb875x2yyitntuhayhbzdkhct","validation_script":"cM8NlD2AHKFaCLk4"}

    var bb = new TxSignPrep().prepare(changevalidationtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bnB1YmE4amFkdGJiZWRjZWZuN2VpdDhqbjNrajN2ZHNtd2d1bmFhbWk4Z2FuZHBibjM4ZXNieXk2YnRnYThjZ2NyZnU1M3hhcThkdQAQTcdmlXTFbmRhbXh6eDh4aG12eXNhbnEydXg1YXpkYjg3NXgyeXlpdG50dWhheWhiemRraGN0Y004TmxEMkFIS0ZhQ0xrNA=="
    )
  })
})
describe('ReleaseFromEndowment object prepare tests', () => {
  it('should build an object for ReleaseFromEndowment and convert to known b64', () => {
    var releasefromendowmenttx = {"destination":"ndaemx6bvuvyayrf8nzqgay26v7vx8a4ifr6s9vefusttzm7","qty":1975528111046083,"sequence":7465139729523843,"signatures":["a4jadtcarjjthw9i3jdzx9pk29jnpu6smkbusnbeuxq4jqwjk96nebguuakdszxatduw4rnr8wbx6puh46cjxvrjsa5h9b452mjtxmdqmw2bhpamgr2ptbqj"]}

    var bb = new TxSignPrep().prepare(releasefromendowmenttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhZW14NmJ2dXZ5YXlyZjhuenFnYXkyNnY3dng4YTRpZnI2czl2ZWZ1c3R0em03AAcEu3tNfcMAGoWBScbkgw=="
    )
  })
  it('should build an object for ReleaseFromEndowment without signatures and convert to known b64', () => {
    var releasefromendowmenttx = {"destination":"ndaemx6bvuvyayrf8nzqgay26v7vx8a4ifr6s9vefusttzm7","qty":1975528111046083,"sequence":7465139729523843}

    var bb = new TxSignPrep().prepare(releasefromendowmenttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhZW14NmJ2dXZ5YXlyZjhuenFnYXkyNnY3dng4YTRpZnI2czl2ZWZ1c3R0em03AAcEu3tNfcMAGoWBScbkgw=="
    )
  })
})
describe('ChangeSettlementPeriod object prepare tests', () => {
  it('should build an object for ChangeSettlementPeriod and convert to known b64', () => {
    var changesettlementperiodtx = {"target":"ndanav55xasmnzyq39jdkisfd5hwxusut2dxamk9yxfarwes","period":"11m25dt14h35m49s167320us","sequence":1912297565323361,"signatures":["a4jadtca2q44zg2j3d2nze4gzp72uwr6prjrfmii5mstfzgqiur33w48kgtmrzqrd5kbvsuzm6vxphsfedt7rceemr7ceg8qd9yumzvx3gaws2v3q5tezser"]}

    var bb = new TxSignPrep().prepare(changesettlementperiodtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "MTFtMjVkdDE0aDM1bTQ5czE2NzMyMHVzAAbLOXkWAGFuZGFuYXY1NXhhc21uenlxMzlqZGtpc2ZkNWh3eHVzdXQyZHhhbWs5eXhmYXJ3ZXM="
    )
  })
  it('should build an object for ChangeSettlementPeriod without signatures and convert to known b64', () => {
    var changesettlementperiodtx = {"period":"11m25dt14h35m49s167320us","sequence":1912297565323361,"target":"ndanav55xasmnzyq39jdkisfd5hwxusut2dxamk9yxfarwes"}

    var bb = new TxSignPrep().prepare(changesettlementperiodtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "MTFtMjVkdDE0aDM1bTQ5czE2NzMyMHVzAAbLOXkWAGFuZGFuYXY1NXhhc21uenlxMzlqZGtpc2ZkNWh3eHVzdXQyZHhhbWs5eXhmYXJ3ZXM="
    )
  })
})
describe('Delegate object prepare tests', () => {
  it('should build an object for Delegate and convert to known b64', () => {
    var delegatetx = {"target":"ndar77g6n2x4p5gjk28gv9778vac5adi8f37tw8ty6uewv7t","node":"ndadiv9taenxgma4x6x3m6aryjagkxuum2kxcsqcmeep23qe","sequence":2483436573217588,"signatures":["a4jadtca65q4mtjbs9azdxzwdwk6m927gv7b3t4crjdf7892tmbba2n29ekjaa9fw4qmk6vrfcw2nz3aq4wprmp5e3nxg6kviiifiin2ewc38zg57zxugjh7"]}

    var bb = new TxSignPrep().prepare(delegatetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhZGl2OXRhZW54Z21hNHg2eDNtNmFyeWphZ2t4dXVtMmt4Y3NxY21lZXAyM3FlAAjSrCLE0zRuZGFyNzdnNm4yeDRwNWdqazI4Z3Y5Nzc4dmFjNWFkaThmMzd0dzh0eTZ1ZXd2N3Q="
    )
  })
  it('should build an object for Delegate without signatures and convert to known b64', () => {
    var delegatetx = {"node":"ndadiv9taenxgma4x6x3m6aryjagkxuum2kxcsqcmeep23qe","sequence":2483436573217588,"target":"ndar77g6n2x4p5gjk28gv9778vac5adi8f37tw8ty6uewv7t"}

    var bb = new TxSignPrep().prepare(delegatetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhZGl2OXRhZW54Z21hNHg2eDNtNmFyeWphZ2t4dXVtMmt4Y3NxY21lZXAyM3FlAAjSrCLE0zRuZGFyNzdnNm4yeDRwNWdqazI4Z3Y5Nzc4dmFjNWFkaThmMzd0dzh0eTZ1ZXd2N3Q="
    )
  })
})
describe('CreditEAI object prepare tests', () => {
  it('should build an object for CreditEAI and convert to known b64', () => {
    var crediteaitx = {"node":"ndaj8rz4ij9hf9zmz5p2vbsduxkeu4jwfi59akxtainu6bpa","sequence":2673222963759107,"signatures":["a4jadtcak77ttxf8ake9q23q9jzfruahtdppmn4h6aeeaab6hyemh5qcn8vunvjhnni49h3mghtxm7ay5tum6jc6s9pp4p7gygd9p77d3fz8tg7wasycpbt2"]}

    var bb = new TxSignPrep().prepare(crediteaitx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhajhyejRpajloZjl6bXo1cDJ2YnNkdXhrZXU0andmaTU5YWt4dGFpbnU2YnBhAAl/SDkpCAM="
    )
  })
  it('should build an object for CreditEAI without signatures and convert to known b64', () => {
    var crediteaitx = {"node":"ndaj8rz4ij9hf9zmz5p2vbsduxkeu4jwfi59akxtainu6bpa","sequence":2673222963759107}

    var bb = new TxSignPrep().prepare(crediteaitx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhajhyejRpajloZjl6bXo1cDJ2YnNkdXhrZXU0andmaTU5YWt4dGFpbnU2YnBhAAl/SDkpCAM="
    )
  })
})
describe('Lock object prepare tests', () => {
  it('should build an object for Lock and convert to known b64', () => {
    var locktx = {"target":"ndaehaewpj5npi4z7bua528a8hvx4dn544hudqx3ffgwhhrf","period":"3y20dt6h48m279449us","sequence":5203743511895827,"signatures":["a4jadtcaq2k62cscxhuy9gsydvmu5zt6ibt3hfiabw4zybvgq2piy9pdh82dn2n3g5atje37a2sjtshpy848vhgmdz3sn94tc5rnp2j3dcwgduqpzb2uwh3j"]}

    var bb = new TxSignPrep().prepare(locktx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "M3kyMGR0Nmg0OG0yNzk0NDl1cwASfMbzh18TbmRhZWhhZXdwajVucGk0ejdidWE1MjhhOGh2eDRkbjU0NGh1ZHF4M2ZmZ3doaHJm"
    )
  })
  it('should build an object for Lock without signatures and convert to known b64', () => {
    var locktx = {"period":"3y20dt6h48m279449us","sequence":5203743511895827,"target":"ndaehaewpj5npi4z7bua528a8hvx4dn544hudqx3ffgwhhrf"}

    var bb = new TxSignPrep().prepare(locktx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "M3kyMGR0Nmg0OG0yNzk0NDl1cwASfMbzh18TbmRhZWhhZXdwajVucGk0ejdidWE1MjhhOGh2eDRkbjU0NGh1ZHF4M2ZmZ3doaHJm"
    )
  })
})
describe('Notify object prepare tests', () => {
  it('should build an object for Notify and convert to known b64', () => {
    var notifytx = {"target":"ndak7f9d5pa69mxjcjmfwfza8q33bmefxqvzhyjzi7xgfd2s","sequence":1507085064423784,"signatures":["a4jadtcaa9rvn7nfaf95q74xyuq25uicgawz693d8ksp8pja9bfrjwa3hia3fdvaj7hjyrkves2ssaf2em255mrq83yaxqbfk8ppcg457ive6fji9knn8iy4"]}

    var bb = new TxSignPrep().prepare(notifytx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AAVar5XpSWhuZGFrN2Y5ZDVwYTY5bXhqY2ptZndmemE4cTMzYm1lZnhxdnpoeWp6aTd4Z2ZkMnM="
    )
  })
  it('should build an object for Notify without signatures and convert to known b64', () => {
    var notifytx = {"sequence":1507085064423784,"target":"ndak7f9d5pa69mxjcjmfwfza8q33bmefxqvzhyjzi7xgfd2s"}

    var bb = new TxSignPrep().prepare(notifytx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AAVar5XpSWhuZGFrN2Y5ZDVwYTY5bXhqY2ptZndmemE4cTMzYm1lZnhxdnpoeWp6aTd4Z2ZkMnM="
    )
  })
})
describe('SetRewardsDestination object prepare tests', () => {
  it('should build an object for SetRewardsDestination and convert to known b64', () => {
    var setrewardsdestinationtx = {"target":"ndaemvamvjcuih46yxnan7syvxu8a7b8wisemr2wmhavtrju","destination":"ndagsqak4fwh8gtnnhw4f2c9cccc8npwq2arhak7wq47pq8p","sequence":3658774096214545,"signatures":["a4jadtcapipinmbqqbgv9y957ydypc8qbrv97pzf6dfj8fc856et93csyf2zj49vuq68ewcrjtujq92gwjtgc22wyhhzq65xdjyqrsdstfdtvmhx8ee5v489"]}

    var bb = new TxSignPrep().prepare(setrewardsdestinationtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhZ3NxYWs0ZndoOGd0bm5odzRmMmM5Y2NjYzhucHdxMmFyaGFrN3dxNDdwcThwAAz/orpRehFuZGFlbXZhbXZqY3VpaDQ2eXhuYW43c3l2eHU4YTdiOHdpc2VtcjJ3bWhhdnRyanU="
    )
  })
  it('should build an object for SetRewardsDestination without signatures and convert to known b64', () => {
    var setrewardsdestinationtx = {"destination":"ndagsqak4fwh8gtnnhw4f2c9cccc8npwq2arhak7wq47pq8p","sequence":3658774096214545,"target":"ndaemvamvjcuih46yxnan7syvxu8a7b8wisemr2wmhavtrju"}

    var bb = new TxSignPrep().prepare(setrewardsdestinationtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhZ3NxYWs0ZndoOGd0bm5odzRmMmM5Y2NjYzhucHdxMmFyaGFrN3dxNDdwcThwAAz/orpRehFuZGFlbXZhbXZqY3VpaDQ2eXhuYW43c3l2eHU4YTdiOHdpc2VtcjJ3bWhhdnRyanU="
    )
  })
})
describe('ClaimAccount object prepare tests', () => {
  it('should build an object for ClaimAccount and convert to known b64', () => {
    var claimaccounttx = {"target":"ndafngq542uzbv8d6ggbk2yhwiwtksaixv33vecrzezkf86t","ownership":"npuba8jadtbbedqj4vefr4k7qcpcqwesca42smgreb6fbmarc6e9th9jw8vi9xcsjgt9actkp4f3","validation_keys":["npuba8jadtbbedm94x6erdnqu8gz2wvv3f6cend84jkm7dz9ztrirpm9572zxugec39z68nfdh8v"],"validation_script":"29p493G2pgi6RwWW","sequence":7142365320213337,"signature":"a4jadtcaabmddt6vvysehr4ru2sn6f7yf4ba7i6xkj52btgi6d43xvzaszuad5dhh6e88qd5zun6bvgytynm4kfz8pcursq3yc52mmhjc5y74trupsf5ra5t"}

    var bb = new TxSignPrep().prepare(claimaccounttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bnB1YmE4amFkdGJiZWRxajR2ZWZyNGs3cWNwY3F3ZXNjYTQyc21ncmViNmZibWFyYzZlOXRoOWp3OHZpOXhjc2pndDlhY3RrcDRmMwAZX/GDxHNZbmRhZm5ncTU0MnV6YnY4ZDZnZ2JrMnlod2l3dGtzYWl4djMzdmVjcnplemtmODZ0bnB1YmE4amFkdGJiZWRtOTR4NmVyZG5xdThnejJ3dnYzZjZjZW5kODRqa203ZHo5enRyaXJwbTk1NzJ6eHVnZWMzOXo2OG5mZGg4djI5cDQ5M0cycGdpNlJ3V1c="
    )
  })
  it('should build an object for ClaimAccount without signatures and convert to known b64', () => {
    var claimaccounttx = {"ownership":"npuba8jadtbbedqj4vefr4k7qcpcqwesca42smgreb6fbmarc6e9th9jw8vi9xcsjgt9actkp4f3","sequence":7142365320213337,"target":"ndafngq542uzbv8d6ggbk2yhwiwtksaixv33vecrzezkf86t","validation_keys":["npuba8jadtbbedm94x6erdnqu8gz2wvv3f6cend84jkm7dz9ztrirpm9572zxugec39z68nfdh8v"],"validation_script":"29p493G2pgi6RwWW"}

    var bb = new TxSignPrep().prepare(claimaccounttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bnB1YmE4amFkdGJiZWRxajR2ZWZyNGs3cWNwY3F3ZXNjYTQyc21ncmViNmZibWFyYzZlOXRoOWp3OHZpOXhjc2pndDlhY3RrcDRmMwAZX/GDxHNZbmRhZm5ncTU0MnV6YnY4ZDZnZ2JrMnlod2l3dGtzYWl4djMzdmVjcnplemtmODZ0bnB1YmE4amFkdGJiZWRtOTR4NmVyZG5xdThnejJ3dnYzZjZjZW5kODRqa203ZHo5enRyaXJwbTk1NzJ6eHVnZWMzOXo2OG5mZGg4djI5cDQ5M0cycGdpNlJ3V1c="
    )
  })
})
describe('Stake object prepare tests', () => {
  it('should build an object for Stake and convert to known b64', () => {
    var staketx = {"target":"ndaajqppqe4kecbty5k6rm8yr4gaj755i558pb8uispd68gh","staked_account":"ndam3ueqw2p775g2rweyhbvqbagrt8wgkh87prvkvqvczixx","sequence":6229113420623440,"signatures":["a4jadtcaae8rwsmwe2z62d7dnhwg4h6pmzsg2dygf69isahtggutgce7ms4tb5majducwfa2bh68bf2rd7frwbq55z7tjbshedgyxkv2qnk6uayv9ggy3xf3"]}

    var bb = new TxSignPrep().prepare(staketx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "ABYhWHyzrlBuZGFtM3VlcXcycDc3NWcycndleWhidnFiYWdydDh3Z2toODdwcnZrdnF2Y3ppeHhuZGFhanFwcHFlNGtlY2J0eTVrNnJtOHlyNGdhajc1NWk1NThwYjh1aXNwZDY4Z2g="
    )
  })
  it('should build an object for Stake without signatures and convert to known b64', () => {
    var staketx = {"sequence":6229113420623440,"staked_account":"ndam3ueqw2p775g2rweyhbvqbagrt8wgkh87prvkvqvczixx","target":"ndaajqppqe4kecbty5k6rm8yr4gaj755i558pb8uispd68gh"}

    var bb = new TxSignPrep().prepare(staketx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "ABYhWHyzrlBuZGFtM3VlcXcycDc3NWcycndleWhidnFiYWdydDh3Z2toODdwcnZrdnF2Y3ppeHhuZGFhanFwcHFlNGtlY2J0eTVrNnJtOHlyNGdhajc1NWk1NThwYjh1aXNwZDY4Z2g="
    )
  })
})
describe('RegisterNode object prepare tests', () => {
  it('should build an object for RegisterNode and convert to known b64', () => {
    var registernodetx = {"node":"ndad286hpnpc5zxd27rkvtw68euef7f7t3m6t6picntcpzha","distribution_script":"C99xituz21RxPH97","rpc_address":"string: thct uax xkqf afplsj bcxoeffr ","sequence":5633755682856050,"signatures":["a4jadtca98qr4xu5hkyvax2wu2jeuk3mshdjudvnkn84dae72zrzhwh5jighmarjizc3rb3t3b477sb5d4r8ebeqm228c2f8pr7ajfh3r7ezi75baasvnu6v"]}

    var bb = new TxSignPrep().prepare(registernodetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "Qzk5eGl0dXoyMVJ4UEg5N25kYWQyODZocG5wYzV6eGQyN3JrdnR3NjhldWVmN2Y3dDNtNnQ2cGljbnRjcHpoYXN0cmluZzogdGhjdCB1YXggeGtxZiBhZnBsc2ogYmN4b2VmZnIgABQD3vY6XHI="
    )
  })
  it('should build an object for RegisterNode without signatures and convert to known b64', () => {
    var registernodetx = {"distribution_script":"C99xituz21RxPH97","node":"ndad286hpnpc5zxd27rkvtw68euef7f7t3m6t6picntcpzha","rpc_address":"string: thct uax xkqf afplsj bcxoeffr ","sequence":5633755682856050}

    var bb = new TxSignPrep().prepare(registernodetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "Qzk5eGl0dXoyMVJ4UEg5N25kYWQyODZocG5wYzV6eGQyN3JrdnR3NjhldWVmN2Y3dDNtNnQ2cGljbnRjcHpoYXN0cmluZzogdGhjdCB1YXggeGtxZiBhZnBsc2ogYmN4b2VmZnIgABQD3vY6XHI="
    )
  })
})
describe('NominateNodeReward object prepare tests', () => {
  it('should build an object for NominateNodeReward and convert to known b64', () => {
    var nominatenoderewardtx = {"random":7664575722253654,"sequence":4786722739683373,"signatures":["a4jadtcarp3vibrnyix4h4aet6ezkkt4di6mb886v4jwmj5d5eypbpx8dwcgnncc7angjyzfi7h4eikdestvig7spsmhdnammteu7uqrna9vspnfwif9r24k"]}

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
    var claimnoderewardtx = {"node":"ndanb4bnzvbvz7kxxit5c4p3vzdf5p64g6r3y3zqqverds8r","sequence":4402827188794727,"signatures":["a4jadtcaswqk9sjmafaq7tbkhrrzycthsxgnksm8826qpcnu3pi2r2b5es3cr3t6nus75fywxmk6cfswx6tqiygn9ga96fcwuiiuxzv5dg847s3ssgrtv6cd"]}

    var bb = new TxSignPrep().prepare(claimnoderewardtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhbmI0Ym56dmJ2ejdreHhpdDVjNHAzdnpkZjVwNjRnNnIzeTN6cXF2ZXJkczhyAA+kWRaYdWc="
    )
  })
  it('should build an object for ClaimNodeReward without signatures and convert to known b64', () => {
    var claimnoderewardtx = {"node":"ndanb4bnzvbvz7kxxit5c4p3vzdf5p64g6r3y3zqqverds8r","sequence":4402827188794727}

    var bb = new TxSignPrep().prepare(claimnoderewardtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhbmI0Ym56dmJ2ejdreHhpdDVjNHAzdnpkZjVwNjRnNnIzeTN6cXF2ZXJkczhyAA+kWRaYdWc="
    )
  })
})
describe('TransferAndLock object prepare tests', () => {
  it('should build an object for TransferAndLock and convert to known b64', () => {
    var transferandlocktx = {"source":"ndaiwz5vuf3nayqgw582ymv22mnqc87fks6up2fp2m4krwa4","destination":"ndac6huhp4ffcnjv4zqcjdt8a53j3idb8cawnb7mnisfhv99","qty":6090287018180214,"period":"1y9m15dt10h9m51s569721us","sequence":7443647051579152,"signatures":["a4jadtca7pfdxz5a4dwxw86dg6prsy7akvqnz4kvtrk9jt3kpumgq39zek9bnaaehp3gst4y3cprp2rvsuj2bykpuxsjhgg53yvej975rwgf2siyh8gykjqn"]}

    var bb = new TxSignPrep().prepare(transferandlocktx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhYzZodWhwNGZmY25qdjR6cWNqZHQ4YTUzajNpZGI4Y2F3bmI3bW5pc2Zodjk5MXk5bTE1ZHQxMGg5bTUxczU2OTcyMXVzABWjFXJMfnYAGnH1Ile/EG5kYWl3ejV2dWYzbmF5cWd3NTgyeW12MjJtbnFjODdma3M2dXAyZnAybTRrcndhNA=="
    )
  })
  it('should build an object for TransferAndLock without signatures and convert to known b64', () => {
    var transferandlocktx = {"destination":"ndac6huhp4ffcnjv4zqcjdt8a53j3idb8cawnb7mnisfhv99","period":"1y9m15dt10h9m51s569721us","qty":6090287018180214,"sequence":7443647051579152,"source":"ndaiwz5vuf3nayqgw582ymv22mnqc87fks6up2fp2m4krwa4"}

    var bb = new TxSignPrep().prepare(transferandlocktx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhYzZodWhwNGZmY25qdjR6cWNqZHQ4YTUzajNpZGI4Y2F3bmI3bW5pc2Zodjk5MXk5bTE1ZHQxMGg5bTUxczU2OTcyMXVzABWjFXJMfnYAGnH1Ile/EG5kYWl3ejV2dWYzbmF5cWd3NTgyeW12MjJtbnFjODdma3M2dXAyZnAybTRrcndhNA=="
    )
  })
})
describe('CommandValidatorChange object prepare tests', () => {
  it('should build an object for CommandValidatorChange and convert to known b64', () => {
    var commandvalidatorchangetx = {"public_key":"GkjHyFjwATvcYbXb","power":7147475985406603,"sequence":3268473309273449,"signatures":["a4jadtcabsj8frvhjr7n7mef97u6ttcn2bav6v8v895drdr9rqcuzh7eedavide9q2yhud2kbkhph7thuym9xpp78uc36ykghndy3tk4xr5txpbc8926pg48"]}

    var bb = new TxSignPrep().prepare(commandvalidatorchangetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "ABlkl28mmotHa2pIeUZqd0FUdmNZYlhiAAucqL6OnWk="
    )
  })
  it('should build an object for CommandValidatorChange without signatures and convert to known b64', () => {
    var commandvalidatorchangetx = {"power":7147475985406603,"public_key":"GkjHyFjwATvcYbXb","sequence":3268473309273449}

    var bb = new TxSignPrep().prepare(commandvalidatorchangetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "ABlkl28mmotHa2pIeUZqd0FUdmNZYlhiAAucqL6OnWk="
    )
  })
})
describe('SidechainTx object prepare tests', () => {
  it('should build an object for SidechainTx and convert to known b64', () => {
    var sidechaintxtx = {"source":"ndaea8s3uird6kqzn2y5x3c2pf988zre6txvm46hmidy9z2a","sidechain_id":164,"sidechain_signable_bytes":"8c2R5pEehWFv7x0I","sidechain_signatures":["a4jadtca57vf7sgdkpsr8jdp6adkfte2sk5mve4znjbwfyi9hz8wkfcye4jhc47qm74qczutnigb62n7nhrfzb65a2y5sggwb9zvcn4ebvcxh78hbxi56cgg"],"sequence":666378943674263,"signatures":["a4jadtcahue4rxauc7pj8wv8cw7un4p9x5hynmt2pmynsv2j7bqm82m6g9u9p5kjxcd4tk4tsf5iii3ein69ixqc5f8tj72mubheizp3wuue3axdymmax4f9"]}

    var bb = new TxSignPrep().prepare(sidechaintxtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AAJeEXA5N5cAAAAAAAAApDhjMlI1cEVlaFdGdjd4MElhNGphZHRjYTU3dmY3c2dka3BzcjhqZHA2YWRrZnRlMnNrNW12ZTR6bmpid2Z5aTloejh3a2ZjeWU0amhjNDdxbTc0cWN6dXRuaWdiNjJuN25ocmZ6YjY1YTJ5NXNnZ3diOXp2Y240ZWJ2Y3hoNzhoYnhpNTZjZ2duZGFlYThzM3VpcmQ2a3F6bjJ5NXgzYzJwZjk4OHpyZTZ0eHZtNDZobWlkeTl6MmE="
    )
  })
  it('should build an object for SidechainTx without signatures and convert to known b64', () => {
    var sidechaintxtx = {"sequence":666378943674263,"sidechain_id":164,"sidechain_signable_bytes":"8c2R5pEehWFv7x0I","sidechain_signatures":["a4jadtca57vf7sgdkpsr8jdp6adkfte2sk5mve4znjbwfyi9hz8wkfcye4jhc47qm74qczutnigb62n7nhrfzb65a2y5sggwb9zvcn4ebvcxh78hbxi56cgg"],"source":"ndaea8s3uird6kqzn2y5x3c2pf988zre6txvm46hmidy9z2a"}

    var bb = new TxSignPrep().prepare(sidechaintxtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AAJeEXA5N5cAAAAAAAAApDhjMlI1cEVlaFdGdjd4MElhNGphZHRjYTU3dmY3c2dka3BzcjhqZHA2YWRrZnRlMnNrNW12ZTR6bmpid2Z5aTloejh3a2ZjeWU0amhjNDdxbTc0cWN6dXRuaWdiNjJuN25ocmZ6YjY1YTJ5NXNnZ3diOXp2Y240ZWJ2Y3hoNzhoYnhpNTZjZ2duZGFlYThzM3VpcmQ2a3F6bjJ5NXgzYzJwZjk4OHpyZTZ0eHZtNDZobWlkeTl6MmE="
    )
  })
})
describe('UnregisterNode object prepare tests', () => {
  it('should build an object for UnregisterNode and convert to known b64', () => {
    var unregisternodetx = {"node":"ndaj3zb8ep363avsrhvpzgve52gc5re63n6txx2vv6s5yuy3","sequence":5623762082951376,"signatures":["a4jadtcasxp9zhnmnebw9nvr8qidan6dc6jwf2npcvbyuvxxd44d5hx5fc54fhkywhdhwv5pudwmtrb5cxkcbjd5rf79a85jhc6q9a2gpbzezwqd9bqdca3b"]}

    var bb = new TxSignPrep().prepare(unregisternodetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhajN6YjhlcDM2M2F2c3JodnB6Z3ZlNTJnYzVyZTYzbjZ0eHgydnY2czV5dXkzABP6yCVBcNA="
    )
  })
  it('should build an object for UnregisterNode without signatures and convert to known b64', () => {
    var unregisternodetx = {"node":"ndaj3zb8ep363avsrhvpzgve52gc5re63n6txx2vv6s5yuy3","sequence":5623762082951376}

    var bb = new TxSignPrep().prepare(unregisternodetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhajN6YjhlcDM2M2F2c3JodnB6Z3ZlNTJnYzVyZTYzbjZ0eHgydnY2czV5dXkzABP6yCVBcNA="
    )
  })
})
describe('Unstake object prepare tests', () => {
  it('should build an object for Unstake and convert to known b64', () => {
    var unstaketx = {"target":"ndadvaud9mhekn8jxc7sbgrjup554iicq7znk9swe5nu7khe","sequence":3820780875409098,"signatures":["a4jadtcaxmf7r3viw28j99gqzcbztna6942n7mcbq8xej6kgnjxczjkxhmv8s9nqgu9emnfqy2aparqwffc3252dwxw4fdvncu4ke4uq9yiybet8tmyki78s"]}

    var bb = new TxSignPrep().prepare(unstaketx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AA2S+t7X5spuZGFkdmF1ZDltaGVrbjhqeGM3c2Jncmp1cDU1NGlpY3E3em5rOXN3ZTVudTdraGU="
    )
  })
  it('should build an object for Unstake without signatures and convert to known b64', () => {
    var unstaketx = {"sequence":3820780875409098,"target":"ndadvaud9mhekn8jxc7sbgrjup554iicq7znk9swe5nu7khe"}

    var bb = new TxSignPrep().prepare(unstaketx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AA2S+t7X5spuZGFkdmF1ZDltaGVrbjhqeGM3c2Jncmp1cDU1NGlpY3E3em5rOXN3ZTVudTdraGU="
    )
  })
})
describe('Issue object prepare tests', () => {
  it('should build an object for Issue and convert to known b64', () => {
    var issuetx = {"qty":2805298263287969,"sequence":8998038698708596,"signatures":["a4jadtcahat66r47zzt2hupv3xcja53dymhvjee89u5qfxs64mmedirfi4hi5g7rzfecsmafhd3nu4mwbap4sq7dv3xfrzm62ut64pq94tffdgjtpm7p9g6r"]}

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
    var claimchildaccounttx = {"target":"ndacz32aaimsgqmaxbzvkben22fcuyip6qcs6x7ktfr87xhu","child":"ndackqmf7kpfxbpbdvser8hwmb8wq8kqdm7ybgh5776jsr5f","child_ownership":"npuba8jadtbbeab5xga2ynj5tayvkhbbteptcs6nc5u9m5ia9x6jkv72a4qkssznngfq2mhujzgg","child_signature":"a4jadtcat9he236smw87p4ggn9mtv6cakb5cy7fprqdwmeab3x6ycwg9ipqieqwky9pcu56a8f8f7s6vmpx4cmqiep6f9zdxwjd59z2bie6je7y9z8p9x4tp","child_validation_keys":["npuba8jadtbbea5xdfu3j8tuih52it9zyvyvy6vnj9zgtnqspsbz6pmnjd9ydfe2e2t6kbwc2mki"],"child_validation_script":"PiVEGrP0dvBtDW/L","sequence":2114375199125313,"signatures":["a4jadtcawf7bszzedeipvx4vp4pj7eez9qvvsud9dxctv3qk59j4zbpcuhw85ubujr4kjqcb3shd8nin3xhvgpc8hdd3vsns5ugqx4ge883xshgdyrtkzew3"]}

    var bb = new TxSignPrep().prepare(claimchildaccounttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhY2txbWY3a3BmeGJwYmR2c2VyOGh3bWI4d3E4a3FkbTd5YmdoNTc3NmpzcjVmbnB1YmE4amFkdGJiZWFiNXhnYTJ5bmo1dGF5dmtoYmJ0ZXB0Y3M2bmM1dTltNWlhOXg2amt2NzJhNHFrc3N6bm5nZnEybWh1anpnZ2E0amFkdGNhdDloZTIzNnNtdzg3cDRnZ245bXR2NmNha2I1Y3k3ZnBycWR3bWVhYjN4Nnljd2c5aXBxaWVxd2t5OXBjdTU2YThmOGY3czZ2bXB4NGNtcWllcDZmOXpkeHdqZDU5ejJiaWU2amU3eTl6OHA5eDR0cG5wdWJhOGphZHRiYmVhNXhkZnUzajh0dWloNTJpdDl6eXZ5dnk2dm5qOXpndG5xc3BzYno2cG1uamQ5eWRmZTJlMnQ2a2J3YzJta2lQaVZFR3JQMGR2QnREVy9MAAeDA1aqb0FuZGFjejMyYWFpbXNncW1heGJ6dmtiZW4yMmZjdXlpcDZxY3M2eDdrdGZyODd4aHU="
    )
  })
  it('should build an object for ClaimChildAccount without signatures and convert to known b64', () => {
    var claimchildaccounttx = {"child":"ndackqmf7kpfxbpbdvser8hwmb8wq8kqdm7ybgh5776jsr5f","child_ownership":"npuba8jadtbbeab5xga2ynj5tayvkhbbteptcs6nc5u9m5ia9x6jkv72a4qkssznngfq2mhujzgg","child_validation_keys":["npuba8jadtbbea5xdfu3j8tuih52it9zyvyvy6vnj9zgtnqspsbz6pmnjd9ydfe2e2t6kbwc2mki"],"child_validation_script":"PiVEGrP0dvBtDW/L","sequence":2114375199125313,"target":"ndacz32aaimsgqmaxbzvkben22fcuyip6qcs6x7ktfr87xhu"}

    var bb = new TxSignPrep().prepare(claimchildaccounttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhY2txbWY3a3BmeGJwYmR2c2VyOGh3bWI4d3E4a3FkbTd5YmdoNTc3NmpzcjVmbnB1YmE4amFkdGJiZWFiNXhnYTJ5bmo1dGF5dmtoYmJ0ZXB0Y3M2bmM1dTltNWlhOXg2amt2NzJhNHFrc3N6bm5nZnEybWh1anpnZ2E0amFkdGNhdDloZTIzNnNtdzg3cDRnZ245bXR2NmNha2I1Y3k3ZnBycWR3bWVhYjN4Nnljd2c5aXBxaWVxd2t5OXBjdTU2YThmOGY3czZ2bXB4NGNtcWllcDZmOXpkeHdqZDU5ejJiaWU2amU3eTl6OHA5eDR0cG5wdWJhOGphZHRiYmVhNXhkZnUzajh0dWloNTJpdDl6eXZ5dnk2dm5qOXpndG5xc3BzYno2cG1uamQ5eWRmZTJlMnQ2a2J3YzJta2lQaVZFR3JQMGR2QnREVy9MAAeDA1aqb0FuZGFjejMyYWFpbXNncW1heGJ6dmtiZW4yMmZjdXlpcDZxY3M2eDdrdGZyODd4aHU="
    )
  })
})

