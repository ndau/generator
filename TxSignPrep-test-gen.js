import TxSignPrep from '../TxSignPrep'

describe('Transfer object prepare tests', () => {
  it('should build an object for Transfer and convert to known b64', () => {
    var transfertx = {"source":"ndaaung6yhmjx49gik47hskh5pbf4fkwug5vynn4rx2da4zf","destination":"ndaqyrj65fh2tmxq8gzphk8k6rb28xeh2rwe3e2atqj59nqa","qty":1550453263105981,"sequence":732340766579218,"signatures":["a4jadtcasrugajwejui6tgw2s4auxe4rcmr9udii7e96n4chm78vzaiwcgn2a2x4dhqfeydd5hekswgrvycehb27c53sywxv56fjy57vkx2y8yeunumksnb3"]}

    var bb = new TxSignPrep().prepare(transfertx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhcXlyajY1ZmgydG14cThnenBoazhrNnJiMjh4ZWgycndlM2UyYXRxajU5bnFhAAWCIQf8/70AApoPXz8aEm5kYWF1bmc2eWhtang0OWdpazQ3aHNraDVwYmY0Zmt3dWc1dnlubjRyeDJkYTR6Zg=="
    )
  })
  it('should build an object for Transfer without signatures and convert to known b64', () => {
    var transfertx = {"destination":"ndaqyrj65fh2tmxq8gzphk8k6rb28xeh2rwe3e2atqj59nqa","qty":1550453263105981,"sequence":732340766579218,"source":"ndaaung6yhmjx49gik47hskh5pbf4fkwug5vynn4rx2da4zf"}

    var bb = new TxSignPrep().prepare(transfertx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhcXlyajY1ZmgydG14cThnenBoazhrNnJiMjh4ZWgycndlM2UyYXRxajU5bnFhAAWCIQf8/70AApoPXz8aEm5kYWF1bmc2eWhtang0OWdpazQ3aHNraDVwYmY0Zmt3dWc1dnlubjRyeDJkYTR6Zg=="
    )
  })
})
describe('ChangeValidation object prepare tests', () => {
  it('should build an object for ChangeValidation and convert to known b64', () => {
    var changevalidationtx = {"target":"ndahkkp6g2z62jkuq68vbdt5kyajq44x99f6exbdshumvjai","new_keys":["npuba8jadtbbedz523pz3d8xensuz46zhbqvckve9svrbjei87g5gjepe8tyrihn92dy4urdagj9"],"validation_script":"cG/M/jMqpk15Nuzi","sequence":4589118442271941,"signatures":["a4jadtcarb2erjuxvzieaesxz8zcib7jaci233ws9xb45uq2t7sfabdhu99y9m8fxbwt2haj5d77qru2m6g8r6kjapsuq457x6gc72rq3pf3q2ppkrac865e"]}

    var bb = new TxSignPrep().prepare(changevalidationtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bnB1YmE4amFkdGJiZWR6NTIzcHozZDh4ZW5zdXo0NnpoYnF2Y2t2ZTlzdnJiamVpODdnNWdqZXBlOHR5cmlobjkyZHk0dXJkYWdqOQAQTcdmlXTFbmRhaGtrcDZnMno2MmprdXE2OHZiZHQ1a3lhanE0NHg5OWY2ZXhiZHNodW12amFpY0cvTS9qTXFwazE1TnV6aQ=="
    )
  })
  it('should build an object for ChangeValidation without signatures and convert to known b64', () => {
    var changevalidationtx = {"new_keys":["npuba8jadtbbedz523pz3d8xensuz46zhbqvckve9svrbjei87g5gjepe8tyrihn92dy4urdagj9"],"sequence":4589118442271941,"target":"ndahkkp6g2z62jkuq68vbdt5kyajq44x99f6exbdshumvjai","validation_script":"cG/M/jMqpk15Nuzi"}

    var bb = new TxSignPrep().prepare(changevalidationtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bnB1YmE4amFkdGJiZWR6NTIzcHozZDh4ZW5zdXo0NnpoYnF2Y2t2ZTlzdnJiamVpODdnNWdqZXBlOHR5cmlobjkyZHk0dXJkYWdqOQAQTcdmlXTFbmRhaGtrcDZnMno2MmprdXE2OHZiZHQ1a3lhanE0NHg5OWY2ZXhiZHNodW12amFpY0cvTS9qTXFwazE1TnV6aQ=="
    )
  })
})
describe('ReleaseFromEndowment object prepare tests', () => {
  it('should build an object for ReleaseFromEndowment and convert to known b64', () => {
    var releasefromendowmenttx = {"destination":"ndaqu6dgqh6fxignhne9ru9kj9nb94j2khewn7fjwzp8q499","qty":1975528111046083,"sequence":7465139729523843,"signatures":["a4jadtcatiyv4r6astpqipj8faqfz2uj43indj7njqz4q6meznryj5ts8wkpq7p653bupu9kwk8i2eamqtty4385rwapujvbxyvwcabz7ucud3nspz9bprax"]}

    var bb = new TxSignPrep().prepare(releasefromendowmenttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhcXU2ZGdxaDZmeGlnbmhuZTlydTlrajluYjk0ajJraGV3bjdmand6cDhxNDk5AAcEu3tNfcMAGoWBScbkgw=="
    )
  })
  it('should build an object for ReleaseFromEndowment without signatures and convert to known b64', () => {
    var releasefromendowmenttx = {"destination":"ndaqu6dgqh6fxignhne9ru9kj9nb94j2khewn7fjwzp8q499","qty":1975528111046083,"sequence":7465139729523843}

    var bb = new TxSignPrep().prepare(releasefromendowmenttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhcXU2ZGdxaDZmeGlnbmhuZTlydTlrajluYjk0ajJraGV3bjdmand6cDhxNDk5AAcEu3tNfcMAGoWBScbkgw=="
    )
  })
})
describe('ChangeSettlementPeriod object prepare tests', () => {
  it('should build an object for ChangeSettlementPeriod and convert to known b64', () => {
    var changesettlementperiodtx = {"target":"ndar2zj7hu6mx3bzzq4z2h2j3vv5srgzvb5u4zsqpqjdhp75","period":"11m25dt14h35m49s167320us","sequence":1912297565323361,"signatures":["a4jadtca9sx3js8jfxje2ww8eqjq4zr2bz443ur7g6jdvnhx83ge6tksq58iw5z3a22826x4kydrjj2atd8ehage7pad39ck38xu98hjxnwzxbn4ytvsvnmc"]}

    var bb = new TxSignPrep().prepare(changesettlementperiodtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "MTFtMjVkdDE0aDM1bTQ5czE2NzMyMHVzAAbLOXkWAGFuZGFyMnpqN2h1Nm14M2J6enE0ejJoMmozdnY1c3JnenZiNXU0enNxcHFqZGhwNzU="
    )
  })
  it('should build an object for ChangeSettlementPeriod without signatures and convert to known b64', () => {
    var changesettlementperiodtx = {"period":"11m25dt14h35m49s167320us","sequence":1912297565323361,"target":"ndar2zj7hu6mx3bzzq4z2h2j3vv5srgzvb5u4zsqpqjdhp75"}

    var bb = new TxSignPrep().prepare(changesettlementperiodtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "MTFtMjVkdDE0aDM1bTQ5czE2NzMyMHVzAAbLOXkWAGFuZGFyMnpqN2h1Nm14M2J6enE0ejJoMmozdnY1c3JnenZiNXU0enNxcHFqZGhwNzU="
    )
  })
})
describe('Delegate object prepare tests', () => {
  it('should build an object for Delegate and convert to known b64', () => {
    var delegatetx = {"target":"ndam2j5k6q5ejn5jbstj39ugiv4mwh762eqrch62vftspamy","node":"ndapm58qzzyg5zcuix529c5m79am4hvdi88pfggjnggvaymk","sequence":2483436573217588,"signatures":["a4jadtcaz39rvbf9gwkhwhuv78sgh5ax8etb4xif9w6mpd2xq7bur6qbqu7phfmasiqfgj3e6v9q6s2cis5vya2nmbpg2f5637h9e77sy5sdyc322jf36xd5"]}

    var bb = new TxSignPrep().prepare(delegatetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhcG01OHF6enlnNXpjdWl4NTI5YzVtNzlhbTRodmRpODhwZmdnam5nZ3ZheW1rAAjSrCLE0zRuZGFtMmo1azZxNWVqbjVqYnN0ajM5dWdpdjRtd2g3NjJlcXJjaDYydmZ0c3BhbXk="
    )
  })
  it('should build an object for Delegate without signatures and convert to known b64', () => {
    var delegatetx = {"node":"ndapm58qzzyg5zcuix529c5m79am4hvdi88pfggjnggvaymk","sequence":2483436573217588,"target":"ndam2j5k6q5ejn5jbstj39ugiv4mwh762eqrch62vftspamy"}

    var bb = new TxSignPrep().prepare(delegatetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhcG01OHF6enlnNXpjdWl4NTI5YzVtNzlhbTRodmRpODhwZmdnam5nZ3ZheW1rAAjSrCLE0zRuZGFtMmo1azZxNWVqbjVqYnN0ajM5dWdpdjRtd2g3NjJlcXJjaDYydmZ0c3BhbXk="
    )
  })
})
describe('CreditEAI object prepare tests', () => {
  it('should build an object for CreditEAI and convert to known b64', () => {
    var crediteaitx = {"node":"ndak8hm4z9ddufgqukz3yxz8c9hedirieya6t6t49jszegqx","sequence":2673222963759107,"signatures":["a4jadtcaqimycbeb6fcz4w3gwnke8vd2cjpq99q796tv8kjnbm3sxfhr8qdi8uyuakawh9bqimnvwhyji9f29x97a88hqvkebqxmaahdpaqzeizdh39jjz3a"]}

    var bb = new TxSignPrep().prepare(crediteaitx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhazhobTR6OWRkdWZncXVrejN5eHo4YzloZWRpcmlleWE2dDZ0NDlqc3plZ3F4AAl/SDkpCAM="
    )
  })
  it('should build an object for CreditEAI without signatures and convert to known b64', () => {
    var crediteaitx = {"node":"ndak8hm4z9ddufgqukz3yxz8c9hedirieya6t6t49jszegqx","sequence":2673222963759107}

    var bb = new TxSignPrep().prepare(crediteaitx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhazhobTR6OWRkdWZncXVrejN5eHo4YzloZWRpcmlleWE2dDZ0NDlqc3plZ3F4AAl/SDkpCAM="
    )
  })
})
describe('Lock object prepare tests', () => {
  it('should build an object for Lock and convert to known b64', () => {
    var locktx = {"target":"ndahkmxu9pvwa52bc8tuihy3zyu5gdf2krg8jeuczmajdeu4","period":"3y20dt6h48m279449us","sequence":5203743511895827,"signatures":["a4jadtcahcn3n96b9zzwgjikabvy549xa6j3iyc6cs44qvp978x6qxb6ympktsnkewgx6n339gm2ud562kq74qx3zr824vd8ht52ncbjau73kpva7mfeqtsy"]}

    var bb = new TxSignPrep().prepare(locktx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "M3kyMGR0Nmg0OG0yNzk0NDl1cwASfMbzh18TbmRhaGtteHU5cHZ3YTUyYmM4dHVpaHkzenl1NWdkZjJrcmc4amV1Y3ptYWpkZXU0"
    )
  })
  it('should build an object for Lock without signatures and convert to known b64', () => {
    var locktx = {"period":"3y20dt6h48m279449us","sequence":5203743511895827,"target":"ndahkmxu9pvwa52bc8tuihy3zyu5gdf2krg8jeuczmajdeu4"}

    var bb = new TxSignPrep().prepare(locktx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "M3kyMGR0Nmg0OG0yNzk0NDl1cwASfMbzh18TbmRhaGtteHU5cHZ3YTUyYmM4dHVpaHkzenl1NWdkZjJrcmc4amV1Y3ptYWpkZXU0"
    )
  })
})
describe('Notify object prepare tests', () => {
  it('should build an object for Notify and convert to known b64', () => {
    var notifytx = {"target":"ndapdpbsx5rykws2549c2hsq82k4w2vetgn7imvvcn9btrd3","sequence":1507085064423784,"signatures":["a4jadtcapqsq624wcbghxkm3ngh8r532kdgum92eejtw3evwi74p8itpv4t6cp4wsaece9acs7zqcftq29qr9f84d22f4yvi46j7upzij466vesa9vmuqqvg"]}

    var bb = new TxSignPrep().prepare(notifytx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AAVar5XpSWhuZGFwZHBic3g1cnlrd3MyNTQ5YzJoc3E4Mms0dzJ2ZXRnbjdpbXZ2Y245YnRyZDM="
    )
  })
  it('should build an object for Notify without signatures and convert to known b64', () => {
    var notifytx = {"sequence":1507085064423784,"target":"ndapdpbsx5rykws2549c2hsq82k4w2vetgn7imvvcn9btrd3"}

    var bb = new TxSignPrep().prepare(notifytx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AAVar5XpSWhuZGFwZHBic3g1cnlrd3MyNTQ5YzJoc3E4Mms0dzJ2ZXRnbjdpbXZ2Y245YnRyZDM="
    )
  })
})
describe('SetRewardsDestination object prepare tests', () => {
  it('should build an object for SetRewardsDestination and convert to known b64', () => {
    var setrewardsdestinationtx = {"target":"ndact5k6hacxdmygy45fd2btqcgsx8f8tkwy9biz9faiqvpi","destination":"ndad8mj82n83xp44eqxcccuace3aw7g8hkgm285kp5vrhdcs","sequence":3658774096214545,"signatures":["a4jadtcaa6zq6ttvvg3vmtqm89mkk8bci9kgzemcc8a3jijkvag8tpn5y9y8zx9w7yfa3p7yhxfvpndsfhbphiptacusm5gp9qndnnxv79g5kmtzip8fvfit"]}

    var bb = new TxSignPrep().prepare(setrewardsdestinationtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhZDhtajgybjgzeHA0NGVxeGNjY3VhY2UzYXc3Zzhoa2dtMjg1a3A1dnJoZGNzAAz/orpRehFuZGFjdDVrNmhhY3hkbXlneTQ1ZmQyYnRxY2dzeDhmOHRrd3k5Yml6OWZhaXF2cGk="
    )
  })
  it('should build an object for SetRewardsDestination without signatures and convert to known b64', () => {
    var setrewardsdestinationtx = {"destination":"ndad8mj82n83xp44eqxcccuace3aw7g8hkgm285kp5vrhdcs","sequence":3658774096214545,"target":"ndact5k6hacxdmygy45fd2btqcgsx8f8tkwy9biz9faiqvpi"}

    var bb = new TxSignPrep().prepare(setrewardsdestinationtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhZDhtajgybjgzeHA0NGVxeGNjY3VhY2UzYXc3Zzhoa2dtMjg1a3A1dnJoZGNzAAz/orpRehFuZGFjdDVrNmhhY3hkbXlneTQ1ZmQyYnRxY2dzeDhmOHRrd3k5Yml6OWZhaXF2cGk="
    )
  })
})
describe('ClaimAccount object prepare tests', () => {
  it('should build an object for ClaimAccount and convert to known b64', () => {
    var claimaccounttx = {"target":"ndak268taj58grn46x4fyfjuurj23yefdtfikreu32phvpx9","ownership":"npuba8jadtbbecbgkaeu4pczj7i63szf8x6qjit88gnf4b7vn2k44wcwk3bz3qx4nzcardq6tndj","validation_keys":["npuba8jadtbbedz5227xxrxgvyx74jmqxy47b84yayfqzect7v3vi2927tt3ewn49w6jszbaa2cs"],"validation_script":"rCPzobpb29QDHvWP","sequence":7142365320213337,"signature":"a4jadtcagbtvtj8d2baqn6zxts47yqxbgzd257zrpxsuywt5spn5n6tce34q6iyfz3n96s66zuntuddgnvzbj5usts6dqx3rsqt2icy8gmbab384mwiq4xyi"}

    var bb = new TxSignPrep().prepare(claimaccounttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bnB1YmE4amFkdGJiZWNiZ2thZXU0cGN6ajdpNjNzemY4eDZxaml0ODhnbmY0Yjd2bjJrNDR3Y3drM2J6M3F4NG56Y2FyZHE2dG5kagAZX/GDxHNZbmRhazI2OHRhajU4Z3JuNDZ4NGZ5Zmp1dXJqMjN5ZWZkdGZpa3JldTMycGh2cHg5bnB1YmE4amFkdGJiZWR6NTIyN3h4cnhndnl4NzRqbXF4eTQ3Yjg0eWF5ZnF6ZWN0N3YzdmkyOTI3dHQzZXduNDl3NmpzemJhYTJjc3JDUHpvYnBiMjlRREh2V1A="
    )
  })
  it('should build an object for ClaimAccount without signatures and convert to known b64', () => {
    var claimaccounttx = {"ownership":"npuba8jadtbbecbgkaeu4pczj7i63szf8x6qjit88gnf4b7vn2k44wcwk3bz3qx4nzcardq6tndj","sequence":7142365320213337,"target":"ndak268taj58grn46x4fyfjuurj23yefdtfikreu32phvpx9","validation_keys":["npuba8jadtbbedz5227xxrxgvyx74jmqxy47b84yayfqzect7v3vi2927tt3ewn49w6jszbaa2cs"],"validation_script":"rCPzobpb29QDHvWP"}

    var bb = new TxSignPrep().prepare(claimaccounttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bnB1YmE4amFkdGJiZWNiZ2thZXU0cGN6ajdpNjNzemY4eDZxaml0ODhnbmY0Yjd2bjJrNDR3Y3drM2J6M3F4NG56Y2FyZHE2dG5kagAZX/GDxHNZbmRhazI2OHRhajU4Z3JuNDZ4NGZ5Zmp1dXJqMjN5ZWZkdGZpa3JldTMycGh2cHg5bnB1YmE4amFkdGJiZWR6NTIyN3h4cnhndnl4NzRqbXF4eTQ3Yjg0eWF5ZnF6ZWN0N3YzdmkyOTI3dHQzZXduNDl3NmpzemJhYTJjc3JDUHpvYnBiMjlRREh2V1A="
    )
  })
})
describe('Stake object prepare tests', () => {
  it('should build an object for Stake and convert to known b64', () => {
    var staketx = {"target":"ndam4mbi7ei7cdq49a79r9jfvj3v4thh4n8wbkedzhijdjcy","staked_account":"ndajaut3uj36wddtfk6xmbiihgjwkaxh5aejuqiu6dw4n73d","sequence":6229113420623440,"signatures":["a4jadtcap2wv599dhxq4pv6dynjh94c3hk9z3qwjuzm8vb5ycezn52w6ji2dfqz6xedzw2qpbc4bshurey6sy6be34mtc34s95g83c86w5mqi4syfae7qk7x"]}

    var bb = new TxSignPrep().prepare(staketx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "ABYhWHyzrlBuZGFqYXV0M3VqMzZ3ZGR0Zms2eG1iaWloZ2p3a2F4aDVhZWp1cWl1NmR3NG43M2RuZGFtNG1iaTdlaTdjZHE0OWE3OXI5amZ2ajN2NHRoaDRuOHdia2VkemhpamRqY3k="
    )
  })
  it('should build an object for Stake without signatures and convert to known b64', () => {
    var staketx = {"sequence":6229113420623440,"staked_account":"ndajaut3uj36wddtfk6xmbiihgjwkaxh5aejuqiu6dw4n73d","target":"ndam4mbi7ei7cdq49a79r9jfvj3v4thh4n8wbkedzhijdjcy"}

    var bb = new TxSignPrep().prepare(staketx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "ABYhWHyzrlBuZGFqYXV0M3VqMzZ3ZGR0Zms2eG1iaWloZ2p3a2F4aDVhZWp1cWl1NmR3NG43M2RuZGFtNG1iaTdlaTdjZHE0OWE3OXI5amZ2ajN2NHRoaDRuOHdia2VkemhpamRqY3k="
    )
  })
})
describe('RegisterNode object prepare tests', () => {
  it('should build an object for RegisterNode and convert to known b64', () => {
    var registernodetx = {"node":"ndanrx9h3tg2jd7p9k3k7rv4iqdg4ivu3s6piqja5ujzg2h4","distribution_script":"VY7LAkGVTUUKjn44","rpc_address":"string: thct uax xkqf afplsj bcxoeffr ","sequence":5633755682856050,"signatures":["a4jadtcafducvg3rgbt9ihyfiz3nrwzyf9su77d74yqtpzw67mtadga9je9svf688vau9aigx7km32ghwpvq2ycrutqymhess6p9fm6mxx7uagvr2tg9k35j"]}

    var bb = new TxSignPrep().prepare(registernodetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "Vlk3TEFrR1ZUVVVLam40NG5kYW5yeDloM3RnMmpkN3A5azNrN3J2NGlxZGc0aXZ1M3M2cGlxamE1dWp6ZzJoNHN0cmluZzogdGhjdCB1YXggeGtxZiBhZnBsc2ogYmN4b2VmZnIgABQD3vY6XHI="
    )
  })
  it('should build an object for RegisterNode without signatures and convert to known b64', () => {
    var registernodetx = {"distribution_script":"VY7LAkGVTUUKjn44","node":"ndanrx9h3tg2jd7p9k3k7rv4iqdg4ivu3s6piqja5ujzg2h4","rpc_address":"string: thct uax xkqf afplsj bcxoeffr ","sequence":5633755682856050}

    var bb = new TxSignPrep().prepare(registernodetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "Vlk3TEFrR1ZUVVVLam40NG5kYW5yeDloM3RnMmpkN3A5azNrN3J2NGlxZGc0aXZ1M3M2cGlxamE1dWp6ZzJoNHN0cmluZzogdGhjdCB1YXggeGtxZiBhZnBsc2ogYmN4b2VmZnIgABQD3vY6XHI="
    )
  })
})
describe('NominateNodeReward object prepare tests', () => {
  it('should build an object for NominateNodeReward and convert to known b64', () => {
    var nominatenoderewardtx = {"random":7664575722253654,"sequence":4786722739683373,"signatures":["a4jadtcaztsztfwebfux9mdn323dycr5f5r2pix96ajraba3np8cvuzcurufqh7njny73sxxej3pnd2sgny4axwgvgb4rp9ysj5mkh7dsbqey7p3wpqxf8f5"]}

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
    var claimnoderewardtx = {"node":"ndad3qbqbjjjvb52t28ryachdayymn3x7rwiuse79dpgtwu7","sequence":4402827188794727,"signatures":["a4jadtcadjm89u726bns6c9cpwnrwq725i6y46xzbs7kxhwyuhx9gg29u8gy54gy9kqdks75559pe5pn6duddbzxiv2ptmu2a62m8m5468442fd5rn49468k"]}

    var bb = new TxSignPrep().prepare(claimnoderewardtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhZDNxYnFiampqdmI1MnQyOHJ5YWNoZGF5eW1uM3g3cndpdXNlNzlkcGd0d3U3AA+kWRaYdWc="
    )
  })
  it('should build an object for ClaimNodeReward without signatures and convert to known b64', () => {
    var claimnoderewardtx = {"node":"ndad3qbqbjjjvb52t28ryachdayymn3x7rwiuse79dpgtwu7","sequence":4402827188794727}

    var bb = new TxSignPrep().prepare(claimnoderewardtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhZDNxYnFiampqdmI1MnQyOHJ5YWNoZGF5eW1uM3g3cndpdXNlNzlkcGd0d3U3AA+kWRaYdWc="
    )
  })
})
describe('TransferAndLock object prepare tests', () => {
  it('should build an object for TransferAndLock and convert to known b64', () => {
    var transferandlocktx = {"source":"ndafe522ehr9r5iabcghcxf4mjbc4pujxi26j85vtnyhd9ds","destination":"ndabsr63xfawn94qvnjvubk7e4dxyhvkfxdabftemqamywm3","qty":6090287018180214,"period":"1y9m15dt10h9m51s569721us","sequence":7443647051579152,"signatures":["a4jadtcaaq4vrbvb5qijkhdymj4ud3h8ydsm533cy6tiueqaipr6egk647b94aiiu8rj5h4hgufxhm9fxfvwsdj6w7dzkuksrrkci3z6n6b9kezgy8hzsv8n"]}

    var bb = new TxSignPrep().prepare(transferandlocktx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhYnNyNjN4ZmF3bjk0cXZuanZ1Yms3ZTRkeHlodmtmeGRhYmZ0ZW1xYW15d20zMXk5bTE1ZHQxMGg5bTUxczU2OTcyMXVzABWjFXJMfnYAGnH1Ile/EG5kYWZlNTIyZWhyOXI1aWFiY2doY3hmNG1qYmM0cHVqeGkyNmo4NXZ0bnloZDlkcw=="
    )
  })
  it('should build an object for TransferAndLock without signatures and convert to known b64', () => {
    var transferandlocktx = {"destination":"ndabsr63xfawn94qvnjvubk7e4dxyhvkfxdabftemqamywm3","period":"1y9m15dt10h9m51s569721us","qty":6090287018180214,"sequence":7443647051579152,"source":"ndafe522ehr9r5iabcghcxf4mjbc4pujxi26j85vtnyhd9ds"}

    var bb = new TxSignPrep().prepare(transferandlocktx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhYnNyNjN4ZmF3bjk0cXZuanZ1Yms3ZTRkeHlodmtmeGRhYmZ0ZW1xYW15d20zMXk5bTE1ZHQxMGg5bTUxczU2OTcyMXVzABWjFXJMfnYAGnH1Ile/EG5kYWZlNTIyZWhyOXI1aWFiY2doY3hmNG1qYmM0cHVqeGkyNmo4NXZ0bnloZDlkcw=="
    )
  })
})
describe('CommandValidatorChange object prepare tests', () => {
  it('should build an object for CommandValidatorChange and convert to known b64', () => {
    var commandvalidatorchangetx = {"public_key":"i8nKCQCIVtUojX+Y","power":7147475985406603,"sequence":3268473309273449,"signatures":["a4jadtcafpvpn8wr6xmji6vq9nwevsksbe25jeq5d7v9hrmz5raravsxu5e8sztsasepeah73yx6if2s3exssbs7n6pswrusf8kf5cc9a9hxwmdqkxghu345"]}

    var bb = new TxSignPrep().prepare(commandvalidatorchangetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "ABlkl28mmotpOG5LQ1FDSVZ0VW9qWCtZAAucqL6OnWk="
    )
  })
  it('should build an object for CommandValidatorChange without signatures and convert to known b64', () => {
    var commandvalidatorchangetx = {"power":7147475985406603,"public_key":"i8nKCQCIVtUojX+Y","sequence":3268473309273449}

    var bb = new TxSignPrep().prepare(commandvalidatorchangetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "ABlkl28mmotpOG5LQ1FDSVZ0VW9qWCtZAAucqL6OnWk="
    )
  })
})
describe('SidechainTx object prepare tests', () => {
  it('should build an object for SidechainTx and convert to known b64', () => {
    var sidechaintxtx = {"source":"ndam8um3twd29th6hdaye6cifut6rkzpmizkkg3gxc7fu685","sidechain_id":111,"sidechain_signable_bytes":"gBI5Dhp1YbP/rLYZ","sidechain_signatures":["a4jadtcagxd5h6aqdtezdjiezv723xienz63sb2svip7kgqid9vdcqhyruwfxdvvf8geg75gtwg7eqk48mkqgt9ijhy4mqxmtnaz59uvnf6zunda96shy2ht"],"sequence":666378943674263,"signatures":["a4jadtcarfckhn5i9e8b6rba62qhx2w6wtskrmgcr3w57246sszk3afinuvztnb8bhzv4gckhnashvnhyc5ed9zhgb69wshccuf6t7wym67p4zm59hkapj25"]}

    var bb = new TxSignPrep().prepare(sidechaintxtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AAJeEXA5N5cAAAAAAAAAb2dCSTVEaHAxWWJQL3JMWVphNGphZHRjYWd4ZDVoNmFxZHRlemRqaWV6djcyM3hpZW56NjNzYjJzdmlwN2tncWlkOXZkY3FoeXJ1d2Z4ZHZ2ZjhnZWc3NWd0d2c3ZXFrNDhta3FndDlpamh5NG1xeG10bmF6NTl1dm5mNnp1bmRhOTZzaHkyaHRuZGFtOHVtM3R3ZDI5dGg2aGRheWU2Y2lmdXQ2cmt6cG1pemtrZzNneGM3ZnU2ODU="
    )
  })
  it('should build an object for SidechainTx without signatures and convert to known b64', () => {
    var sidechaintxtx = {"sequence":666378943674263,"sidechain_id":111,"sidechain_signable_bytes":"gBI5Dhp1YbP/rLYZ","sidechain_signatures":["a4jadtcagxd5h6aqdtezdjiezv723xienz63sb2svip7kgqid9vdcqhyruwfxdvvf8geg75gtwg7eqk48mkqgt9ijhy4mqxmtnaz59uvnf6zunda96shy2ht"],"source":"ndam8um3twd29th6hdaye6cifut6rkzpmizkkg3gxc7fu685"}

    var bb = new TxSignPrep().prepare(sidechaintxtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AAJeEXA5N5cAAAAAAAAAb2dCSTVEaHAxWWJQL3JMWVphNGphZHRjYWd4ZDVoNmFxZHRlemRqaWV6djcyM3hpZW56NjNzYjJzdmlwN2tncWlkOXZkY3FoeXJ1d2Z4ZHZ2ZjhnZWc3NWd0d2c3ZXFrNDhta3FndDlpamh5NG1xeG10bmF6NTl1dm5mNnp1bmRhOTZzaHkyaHRuZGFtOHVtM3R3ZDI5dGg2aGRheWU2Y2lmdXQ2cmt6cG1pemtrZzNneGM3ZnU2ODU="
    )
  })
})
describe('UnregisterNode object prepare tests', () => {
  it('should build an object for UnregisterNode and convert to known b64', () => {
    var unregisternodetx = {"node":"ndahyajkaz64z5dr9cpym7bt4mxpznmimbbym6wtsujgase4","sequence":5623762082951376,"signatures":["a4jadtcafiqf9ujfqapgijmszp2dw8yqhqg6u5wffw4q296ucj27kbdhbygtn7v762jkifyr982c8h9uggzuxvsw2qpnmyx2t8ha5kbsjs543rncm3nsrdd3"]}

    var bb = new TxSignPrep().prepare(unregisternodetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhaHlhamthejY0ejVkcjljcHltN2J0NG14cHpubWltYmJ5bTZ3dHN1amdhc2U0ABP6yCVBcNA="
    )
  })
  it('should build an object for UnregisterNode without signatures and convert to known b64', () => {
    var unregisternodetx = {"node":"ndahyajkaz64z5dr9cpym7bt4mxpznmimbbym6wtsujgase4","sequence":5623762082951376}

    var bb = new TxSignPrep().prepare(unregisternodetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhaHlhamthejY0ejVkcjljcHltN2J0NG14cHpubWltYmJ5bTZ3dHN1amdhc2U0ABP6yCVBcNA="
    )
  })
})
describe('Unstake object prepare tests', () => {
  it('should build an object for Unstake and convert to known b64', () => {
    var unstaketx = {"target":"ndaf3qe37tqrs3a3dabei7u6unisd7wfidqv6m5fe7jsx8ic","sequence":3820780875409098,"signatures":["a4jadtcakhmew9ishr9svvhn446utu88nkazjesvhpkghdrhmriqiiiczbx4ry2hq45s7p8pnvh33y8mzrveqx4skfz878nqpuwq6mdy76kyfj8qzixcunav"]}

    var bb = new TxSignPrep().prepare(unstaketx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AA2S+t7X5spuZGFmM3FlMzd0cXJzM2EzZGFiZWk3dTZ1bmlzZDd3ZmlkcXY2bTVmZTdqc3g4aWM="
    )
  })
  it('should build an object for Unstake without signatures and convert to known b64', () => {
    var unstaketx = {"sequence":3820780875409098,"target":"ndaf3qe37tqrs3a3dabei7u6unisd7wfidqv6m5fe7jsx8ic"}

    var bb = new TxSignPrep().prepare(unstaketx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AA2S+t7X5spuZGFmM3FlMzd0cXJzM2EzZGFiZWk3dTZ1bmlzZDd3ZmlkcXY2bTVmZTdqc3g4aWM="
    )
  })
})
describe('Issue object prepare tests', () => {
  it('should build an object for Issue and convert to known b64', () => {
    var issuetx = {"qty":2805298263287969,"sequence":8998038698708596,"signatures":["a4jadtcanyp3yvddkqj3cw3243zh83znq9mzvnek3um3u273gszciv63mmm4uj6hd8titzz463gqw68tj6m9ja4ebj6x7cu2xq79h3scz4pz42muias8hxrb"]}

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

