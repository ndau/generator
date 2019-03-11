import TxSignPrep from '../TxSignPrep'

describe('Transfer object prepare tests', () => {
  it('should build an object for Transfer and convert to known b64', () => {
    var transfertx = {"source":"ndahi5afp7y63iy6xp6f9udr3yrer6chyyk89zz4kvqamwxs","destination":"ndaej4drgtmuw4wkrthxqq7gj4mzcehhdvffifr7rmv8rxnm","qty":1550453263105981,"sequence":732340766579218,"signatures":["a4jadtcavikxrhtpd562c4fwvrcuft68id6czimq5jmxvi4ceepdd4zhz2ttccdt8ejtgq8nmj6cn7pbxdgm9r9jg28nbriku2hb9ztzx6wy39c7c5ikbhbx"]}

    var bb = new TxSignPrep().prepare(transfertx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhZWo0ZHJndG11dzR3a3J0aHhxcTdnajRtemNlaGhkdmZmaWZyN3JtdjhyeG5tAAWCIQf8/70AApoPXz8aEm5kYWhpNWFmcDd5NjNpeTZ4cDZmOXVkcjN5cmVyNmNoeXlrODl6ejRrdnFhbXd4cw=="
    )
  })
  it('should build an object for Transfer without signatures and convert to known b64', () => {
    var transfertx = {"destination":"ndaej4drgtmuw4wkrthxqq7gj4mzcehhdvffifr7rmv8rxnm","qty":1550453263105981,"sequence":732340766579218,"source":"ndahi5afp7y63iy6xp6f9udr3yrer6chyyk89zz4kvqamwxs"}

    var bb = new TxSignPrep().prepare(transfertx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhZWo0ZHJndG11dzR3a3J0aHhxcTdnajRtemNlaGhkdmZmaWZyN3JtdjhyeG5tAAWCIQf8/70AApoPXz8aEm5kYWhpNWFmcDd5NjNpeTZ4cDZmOXVkcjN5cmVyNmNoeXlrODl6ejRrdnFhbXd4cw=="
    )
  })
})
describe('ChangeValidation object prepare tests', () => {
  it('should build an object for ChangeValidation and convert to known b64', () => {
    var changevalidationtx = {"target":"ndabhngcien58yyfdzfwg42aty2p48t9m7ibqcba5f62p64w","new_keys":["npuba8jadtbbeaihjqfruqhq3gtd3izdtci87jix2r9wa7m5hyw2xp3274k9dcrap9zvv8kxbhzh"],"validation_script":"ZC42gLBFthlaWx4M","sequence":4589118442271941,"signatures":["a4jadtcaebf76f7dufvihrsmi35dnqdrtrpswxjcfr4p65fsnwt75cdq9vnrypnnp26z3s4vss4xeqyv4atvsgpqpgxba2j6pc2gupmrds698fxhgtmmxx98"]}

    var bb = new TxSignPrep().prepare(changevalidationtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bnB1YmE4amFkdGJiZWFpaGpxZnJ1cWhxM2d0ZDNpemR0Y2k4N2ppeDJyOXdhN201aHl3MnhwMzI3NGs5ZGNyYXA5enZ2OGt4Ymh6aAAQTcdmlXTFbmRhYmhuZ2NpZW41OHl5ZmR6ZndnNDJhdHkycDQ4dDltN2licWNiYTVmNjJwNjR3WkM0MmdMQkZ0aGxhV3g0TQ=="
    )
  })
  it('should build an object for ChangeValidation without signatures and convert to known b64', () => {
    var changevalidationtx = {"new_keys":["npuba8jadtbbeaihjqfruqhq3gtd3izdtci87jix2r9wa7m5hyw2xp3274k9dcrap9zvv8kxbhzh"],"sequence":4589118442271941,"target":"ndabhngcien58yyfdzfwg42aty2p48t9m7ibqcba5f62p64w","validation_script":"ZC42gLBFthlaWx4M"}

    var bb = new TxSignPrep().prepare(changevalidationtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bnB1YmE4amFkdGJiZWFpaGpxZnJ1cWhxM2d0ZDNpemR0Y2k4N2ppeDJyOXdhN201aHl3MnhwMzI3NGs5ZGNyYXA5enZ2OGt4Ymh6aAAQTcdmlXTFbmRhYmhuZ2NpZW41OHl5ZmR6ZndnNDJhdHkycDQ4dDltN2licWNiYTVmNjJwNjR3WkM0MmdMQkZ0aGxhV3g0TQ=="
    )
  })
})
describe('ReleaseFromEndowment object prepare tests', () => {
  it('should build an object for ReleaseFromEndowment and convert to known b64', () => {
    var releasefromendowmenttx = {"destination":"ndab9jg3ia349naufafaqfp5jevumy9jtqgxvjk8rauyphiy","qty":1975528111046083,"sequence":7465139729523843,"signatures":["a4jadtcani2jagz9bjq7vtmiq67gdxdzhmmqaasat3cjx3wjb6yjxa5dusfs4du2u8rbencywm2pkhvfr9xqpitsspspz4eku62hx38v9v9p63bx6uzqhugj"]}

    var bb = new TxSignPrep().prepare(releasefromendowmenttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhYjlqZzNpYTM0OW5hdWZhZmFxZnA1amV2dW15OWp0cWd4dmprOHJhdXlwaGl5AAcEu3tNfcMAGoWBScbkgw=="
    )
  })
  it('should build an object for ReleaseFromEndowment without signatures and convert to known b64', () => {
    var releasefromendowmenttx = {"destination":"ndab9jg3ia349naufafaqfp5jevumy9jtqgxvjk8rauyphiy","qty":1975528111046083,"sequence":7465139729523843}

    var bb = new TxSignPrep().prepare(releasefromendowmenttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhYjlqZzNpYTM0OW5hdWZhZmFxZnA1amV2dW15OWp0cWd4dmprOHJhdXlwaGl5AAcEu3tNfcMAGoWBScbkgw=="
    )
  })
})
describe('ChangeSettlementPeriod object prepare tests', () => {
  it('should build an object for ChangeSettlementPeriod and convert to known b64', () => {
    var changesettlementperiodtx = {"target":"ndagc5u69xsnusi7sccm2i82kjxj3nuxfh39f7h9s9bmmm5a","period":"11m25dt14h35m49s167320us","sequence":1912297565323361,"signatures":["a4jadtcajcsfdujd3na38kfcjyy5r5cfaa7qywpwuqb9w5g38m337q8auyiz446b4rjwymrt3mzjsfz9wv879xccycyrci4tzq3e2gww2qz83ptt4ixwmvx2"]}

    var bb = new TxSignPrep().prepare(changesettlementperiodtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "MTFtMjVkdDE0aDM1bTQ5czE2NzMyMHVzAAbLOXkWAGFuZGFnYzV1Njl4c251c2k3c2NjbTJpODJranhqM251eGZoMzlmN2g5czlibW1tNWE="
    )
  })
  it('should build an object for ChangeSettlementPeriod without signatures and convert to known b64', () => {
    var changesettlementperiodtx = {"period":"11m25dt14h35m49s167320us","sequence":1912297565323361,"target":"ndagc5u69xsnusi7sccm2i82kjxj3nuxfh39f7h9s9bmmm5a"}

    var bb = new TxSignPrep().prepare(changesettlementperiodtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "MTFtMjVkdDE0aDM1bTQ5czE2NzMyMHVzAAbLOXkWAGFuZGFnYzV1Njl4c251c2k3c2NjbTJpODJranhqM251eGZoMzlmN2g5czlibW1tNWE="
    )
  })
})
describe('Delegate object prepare tests', () => {
  it('should build an object for Delegate and convert to known b64', () => {
    var delegatetx = {"target":"ndaieiyzxykeqgtnrbpr6za5ni9p27i8gb2nrrurg8rf9quu","node":"ndaas98xtka63fxhbpfybg4nh5iet6upmi8sf24zk82h4d3n","sequence":2483436573217588,"signatures":["a4jadtcaumvr7kp9tm4v62njhj8jrp6e47x6dfif7hu7tnjgn38katyw6fkczkjx89ihgzubmpusqxpty5uavfqnf3pxzrihmqghq8byrawswhtafm9f83qu"]}

    var bb = new TxSignPrep().prepare(delegatetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhYXM5OHh0a2E2M2Z4aGJwZnliZzRuaDVpZXQ2dXBtaThzZjI0ems4Mmg0ZDNuAAjSrCLE0zRuZGFpZWl5enh5a2VxZ3RucmJwcjZ6YTVuaTlwMjdpOGdiMm5ycnVyZzhyZjlxdXU="
    )
  })
  it('should build an object for Delegate without signatures and convert to known b64', () => {
    var delegatetx = {"node":"ndaas98xtka63fxhbpfybg4nh5iet6upmi8sf24zk82h4d3n","sequence":2483436573217588,"target":"ndaieiyzxykeqgtnrbpr6za5ni9p27i8gb2nrrurg8rf9quu"}

    var bb = new TxSignPrep().prepare(delegatetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhYXM5OHh0a2E2M2Z4aGJwZnliZzRuaDVpZXQ2dXBtaThzZjI0ems4Mmg0ZDNuAAjSrCLE0zRuZGFpZWl5enh5a2VxZ3RucmJwcjZ6YTVuaTlwMjdpOGdiMm5ycnVyZzhyZjlxdXU="
    )
  })
})
describe('CreditEAI object prepare tests', () => {
  it('should build an object for CreditEAI and convert to known b64', () => {
    var crediteaitx = {"node":"ndacnyzcb5v6capu7fntn9d2p8k7mrdkjg2trujfvdzmx3d3","sequence":2673222963759107,"signatures":["a4jadtca52ak33mufhry66cfqwfr3tmbk72qkdytak8a5ehjhxdy6bcgfvvqzij7gip9y69ahkxnqa4fsk38na7nyzx5ajusf94vmdnz2atuzqeh4tazfi2y"]}

    var bb = new TxSignPrep().prepare(crediteaitx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhY255emNiNXY2Y2FwdTdmbnRuOWQycDhrN21yZGtqZzJ0cnVqZnZkem14M2QzAAl/SDkpCAM="
    )
  })
  it('should build an object for CreditEAI without signatures and convert to known b64', () => {
    var crediteaitx = {"node":"ndacnyzcb5v6capu7fntn9d2p8k7mrdkjg2trujfvdzmx3d3","sequence":2673222963759107}

    var bb = new TxSignPrep().prepare(crediteaitx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhY255emNiNXY2Y2FwdTdmbnRuOWQycDhrN21yZGtqZzJ0cnVqZnZkem14M2QzAAl/SDkpCAM="
    )
  })
})
describe('Lock object prepare tests', () => {
  it('should build an object for Lock and convert to known b64', () => {
    var locktx = {"target":"ndapah78a3zr8snbxbccx9cpty6962vbbzskbmrkgb372zvk","period":"3y20dt6h48m279449us","sequence":5203743511895827,"signatures":["a4jadtcaxvyw779s8pv55defqdki82jrih624xxpewgrr9xcmiprmdskk3ih77gvvnbsryp6ty2x7mkq4bz5wbu43hc3ea23i93vbmv4w3f8ra47xmdxcrrj"]}

    var bb = new TxSignPrep().prepare(locktx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "M3kyMGR0Nmg0OG0yNzk0NDl1cwASfMbzh18TbmRhcGFoNzhhM3pyOHNuYnhiY2N4OWNwdHk2OTYydmJienNrYm1ya2diMzcyenZr"
    )
  })
  it('should build an object for Lock without signatures and convert to known b64', () => {
    var locktx = {"period":"3y20dt6h48m279449us","sequence":5203743511895827,"target":"ndapah78a3zr8snbxbccx9cpty6962vbbzskbmrkgb372zvk"}

    var bb = new TxSignPrep().prepare(locktx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "M3kyMGR0Nmg0OG0yNzk0NDl1cwASfMbzh18TbmRhcGFoNzhhM3pyOHNuYnhiY2N4OWNwdHk2OTYydmJienNrYm1ya2diMzcyenZr"
    )
  })
})
describe('Notify object prepare tests', () => {
  it('should build an object for Notify and convert to known b64', () => {
    var notifytx = {"target":"ndap5pgzss9vipvtcd96m4hs5uisa2gqeaj6qfbqqzh5dpas","sequence":1507085064423784,"signatures":["a4jadtcatib8gm66y9evgm3f74gc53txc9739me9zkj6ss9ehknsjrc2narrx7c9ucjsn7u5aepa2zm8y32jp72xg49ygqp5k2igbbctvbmh7k6va5nxuip5"]}

    var bb = new TxSignPrep().prepare(notifytx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AAVar5XpSWhuZGFwNXBnenNzOXZpcHZ0Y2Q5Nm00aHM1dWlzYTJncWVhajZxZmJxcXpoNWRwYXM="
    )
  })
  it('should build an object for Notify without signatures and convert to known b64', () => {
    var notifytx = {"sequence":1507085064423784,"target":"ndap5pgzss9vipvtcd96m4hs5uisa2gqeaj6qfbqqzh5dpas"}

    var bb = new TxSignPrep().prepare(notifytx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AAVar5XpSWhuZGFwNXBnenNzOXZpcHZ0Y2Q5Nm00aHM1dWlzYTJncWVhajZxZmJxcXpoNWRwYXM="
    )
  })
})
describe('SetRewardsDestination object prepare tests', () => {
  it('should build an object for SetRewardsDestination and convert to known b64', () => {
    var setrewardsdestinationtx = {"target":"ndai4nk6icsytjpxcee3j4uay6eep29wwkktar22pst6qtdf","destination":"ndaesmh6v9h8z7ssunn4fh7wq9hx3g4ntwkd83yfakyk96dm","sequence":3658774096214545,"signatures":["a4jadtcad87pb56ceydtyqxpj2zigdynpvvfzg3zyj2b7vv2wtku2zfa7c4zftb9jxgyyvbqw2f3bv9r5irsq66mzkjsk25swwt4qr88invjbr2j5kmb39eu"]}

    var bb = new TxSignPrep().prepare(setrewardsdestinationtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhZXNtaDZ2OWg4ejdzc3VubjRmaDd3cTloeDNnNG50d2tkODN5ZmFreWs5NmRtAAz/orpRehFuZGFpNG5rNmljc3l0anB4Y2VlM2o0dWF5NmVlcDI5d3dra3RhcjIycHN0NnF0ZGY="
    )
  })
  it('should build an object for SetRewardsDestination without signatures and convert to known b64', () => {
    var setrewardsdestinationtx = {"destination":"ndaesmh6v9h8z7ssunn4fh7wq9hx3g4ntwkd83yfakyk96dm","sequence":3658774096214545,"target":"ndai4nk6icsytjpxcee3j4uay6eep29wwkktar22pst6qtdf"}

    var bb = new TxSignPrep().prepare(setrewardsdestinationtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhZXNtaDZ2OWg4ejdzc3VubjRmaDd3cTloeDNnNG50d2tkODN5ZmFreWs5NmRtAAz/orpRehFuZGFpNG5rNmljc3l0anB4Y2VlM2o0dWF5NmVlcDI5d3dra3RhcjIycHN0NnF0ZGY="
    )
  })
})
describe('ClaimAccount object prepare tests', () => {
  it('should build an object for ClaimAccount and convert to known b64', () => {
    var claimaccounttx = {"target":"ndaennxpmtc8xm379nbu994gx6pu9xhbxukh4fsmcjn9rufq","ownership":"npuba8jadtbbecmebhzpn9urqkfzbvjdytmce7dqcia45pfchn5ahr3vhv3j4trp33duuwp7aecw","validation_keys":["npuba8jadtbbeaq8vj5vjgaq6gder4z5tq3s4rcsu3u2bxe3ukmk3r3asia9ryi7a54tueekmdvj"],"validation_script":"zu916PJwuTIB465W","sequence":7142365320213337,"signature":"a4jadtcawhnviaycea2ayqef2svmvzz9aaqpz9b3g4rudy7q738bkcquj32r9bbx7gadbngsn8ghxkmcgdvarj9e6q5vbipe2cd8jev4im34vsv9agmyy4at"}

    var bb = new TxSignPrep().prepare(claimaccounttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bnB1YmE4amFkdGJiZWNtZWJoenBuOXVycWtmemJ2amR5dG1jZTdkcWNpYTQ1cGZjaG41YWhyM3ZodjNqNHRycDMzZHV1d3A3YWVjdwAZX/GDxHNZbmRhZW5ueHBtdGM4eG0zNzluYnU5OTRneDZwdTl4aGJ4dWtoNGZzbWNqbjlydWZxbnB1YmE4amFkdGJiZWFxOHZqNXZqZ2FxNmdkZXI0ejV0cTNzNHJjc3UzdTJieGUzdWttazNyM2FzaWE5cnlpN2E1NHR1ZWVrbWR2anp1OTE2UEp3dVRJQjQ2NVc="
    )
  })
  it('should build an object for ClaimAccount without signatures and convert to known b64', () => {
    var claimaccounttx = {"ownership":"npuba8jadtbbecmebhzpn9urqkfzbvjdytmce7dqcia45pfchn5ahr3vhv3j4trp33duuwp7aecw","sequence":7142365320213337,"target":"ndaennxpmtc8xm379nbu994gx6pu9xhbxukh4fsmcjn9rufq","validation_keys":["npuba8jadtbbeaq8vj5vjgaq6gder4z5tq3s4rcsu3u2bxe3ukmk3r3asia9ryi7a54tueekmdvj"],"validation_script":"zu916PJwuTIB465W"}

    var bb = new TxSignPrep().prepare(claimaccounttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bnB1YmE4amFkdGJiZWNtZWJoenBuOXVycWtmemJ2amR5dG1jZTdkcWNpYTQ1cGZjaG41YWhyM3ZodjNqNHRycDMzZHV1d3A3YWVjdwAZX/GDxHNZbmRhZW5ueHBtdGM4eG0zNzluYnU5OTRneDZwdTl4aGJ4dWtoNGZzbWNqbjlydWZxbnB1YmE4amFkdGJiZWFxOHZqNXZqZ2FxNmdkZXI0ejV0cTNzNHJjc3UzdTJieGUzdWttazNyM2FzaWE5cnlpN2E1NHR1ZWVrbWR2anp1OTE2UEp3dVRJQjQ2NVc="
    )
  })
})
describe('Stake object prepare tests', () => {
  it('should build an object for Stake and convert to known b64', () => {
    var staketx = {"target":"ndagxamr8f9uvvcmm7vzjgdvrdrcgn5axr997vswg8446vqc","staked_account":"ndaa2tete45y3rycy2eke5qy9mpbt7svhx9y7pwu6z3br5bm","sequence":6229113420623440,"signatures":["a4jadtcanxpbwrn2fm5nzzqc2tf9yuvwerbnhy833npsj8xgrrkb8vdzrpep7rzidithu5xcrekp3gv68ftiitqci5axckiygwhq7nfsapkv4dwzd8mwmb3u"]}

    var bb = new TxSignPrep().prepare(staketx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "ABYhWHyzrlBuZGFhMnRldGU0NXkzcnljeTJla2U1cXk5bXBidDdzdmh4OXk3cHd1NnozYnI1Ym1uZGFneGFtcjhmOXV2dmNtbTd2empnZHZyZHJjZ241YXhyOTk3dnN3Zzg0NDZ2cWM="
    )
  })
  it('should build an object for Stake without signatures and convert to known b64', () => {
    var staketx = {"sequence":6229113420623440,"staked_account":"ndaa2tete45y3rycy2eke5qy9mpbt7svhx9y7pwu6z3br5bm","target":"ndagxamr8f9uvvcmm7vzjgdvrdrcgn5axr997vswg8446vqc"}

    var bb = new TxSignPrep().prepare(staketx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "ABYhWHyzrlBuZGFhMnRldGU0NXkzcnljeTJla2U1cXk5bXBidDdzdmh4OXk3cHd1NnozYnI1Ym1uZGFneGFtcjhmOXV2dmNtbTd2empnZHZyZHJjZ241YXhyOTk3dnN3Zzg0NDZ2cWM="
    )
  })
})
describe('RegisterNode object prepare tests', () => {
  it('should build an object for RegisterNode and convert to known b64', () => {
    var registernodetx = {"node":"ndaam9bdpvw22s67wwwyqcpah86iwy474jih5v984iemc94r","distribution_script":"LlIE0loSj08MsNAV","rpc_address":"string: thct uax xkqf afplsj bcxoeffr ","sequence":5633755682856050,"signatures":["a4jadtcai9gk2kc7ry45bhkusfdz5kvu832m7ch9yt3yq4cnz6hd4hr4w9ftvs94xxi6xy2przy3z5u7x4phsgsjh7m5wmp42kk7js7jkyynx5upji64g6rn"]}

    var bb = new TxSignPrep().prepare(registernodetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "TGxJRTBsb1NqMDhNc05BVm5kYWFtOWJkcHZ3MjJzNjd3d3d5cWNwYWg4Nml3eTQ3NGppaDV2OTg0aWVtYzk0cnN0cmluZzogdGhjdCB1YXggeGtxZiBhZnBsc2ogYmN4b2VmZnIgABQD3vY6XHI="
    )
  })
  it('should build an object for RegisterNode without signatures and convert to known b64', () => {
    var registernodetx = {"distribution_script":"LlIE0loSj08MsNAV","node":"ndaam9bdpvw22s67wwwyqcpah86iwy474jih5v984iemc94r","rpc_address":"string: thct uax xkqf afplsj bcxoeffr ","sequence":5633755682856050}

    var bb = new TxSignPrep().prepare(registernodetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "TGxJRTBsb1NqMDhNc05BVm5kYWFtOWJkcHZ3MjJzNjd3d3d5cWNwYWg4Nml3eTQ3NGppaDV2OTg0aWVtYzk0cnN0cmluZzogdGhjdCB1YXggeGtxZiBhZnBsc2ogYmN4b2VmZnIgABQD3vY6XHI="
    )
  })
})
describe('NominateNodeReward object prepare tests', () => {
  it('should build an object for NominateNodeReward and convert to known b64', () => {
    var nominatenoderewardtx = {"random":7664575722253654,"sequence":4786722739683373,"signatures":["a4jadtcacs9eig9hxskmbgnq9zy7g8rkyvrxagmrpht9q33a9xa76fxb7crkky8baa4zanrg32bzwtz7is7zhwg6gjzhhqyv43e396gyud7e7h2u9uyd8vja"]}

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
    var claimnoderewardtx = {"node":"ndakq5jbe62vaues6kjxqtk4nekyf6dehdzmh4rt46hxs7jj","sequence":4402827188794727,"signatures":["a4jadtcasnymkws9kfarxsxhtirqnt355bmeag43e7hwiwpw85gjutsxqhwgjr7x866tmh49uzi9xn6iu7htubutzm4epda3uidb5t2js7ezd52xe23vjeft"]}

    var bb = new TxSignPrep().prepare(claimnoderewardtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRha3E1amJlNjJ2YXVlczZranhxdGs0bmVreWY2ZGVoZHptaDRydDQ2aHhzN2pqAA+kWRaYdWc="
    )
  })
  it('should build an object for ClaimNodeReward without signatures and convert to known b64', () => {
    var claimnoderewardtx = {"node":"ndakq5jbe62vaues6kjxqtk4nekyf6dehdzmh4rt46hxs7jj","sequence":4402827188794727}

    var bb = new TxSignPrep().prepare(claimnoderewardtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRha3E1amJlNjJ2YXVlczZranhxdGs0bmVreWY2ZGVoZHptaDRydDQ2aHhzN2pqAA+kWRaYdWc="
    )
  })
})
describe('TransferAndLock object prepare tests', () => {
  it('should build an object for TransferAndLock and convert to known b64', () => {
    var transferandlocktx = {"source":"ndap3px8c7hhfx8m3wcgcxk8dqchyzah45by6hmmsaqaxfq3","destination":"ndaedihc5z5d858un4u6yxvjxtgvghjq5d6b3ys9s24wm6hk","qty":6090287018180214,"period":"1y9m15dt10h9m51s569721us","sequence":7443647051579152,"signatures":["a4jadtcas2awwhfyahdk8ubvuxj8waqfhqf4zw4f77596qer6k27yu257aus4mp9qtcm2jd8a9jycxvxqjuk4ymk84if6viaw2ifmp25echpumcp5rhfkx7m"]}

    var bb = new TxSignPrep().prepare(transferandlocktx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhZWRpaGM1ejVkODU4dW40dTZ5eHZqeHRndmdoanE1ZDZiM3lzOXMyNHdtNmhrMXk5bTE1ZHQxMGg5bTUxczU2OTcyMXVzABWjFXJMfnYAGnH1Ile/EG5kYXAzcHg4YzdoaGZ4OG0zd2NnY3hrOGRxY2h5emFoNDVieTZobW1zYXFheGZxMw=="
    )
  })
  it('should build an object for TransferAndLock without signatures and convert to known b64', () => {
    var transferandlocktx = {"destination":"ndaedihc5z5d858un4u6yxvjxtgvghjq5d6b3ys9s24wm6hk","period":"1y9m15dt10h9m51s569721us","qty":6090287018180214,"sequence":7443647051579152,"source":"ndap3px8c7hhfx8m3wcgcxk8dqchyzah45by6hmmsaqaxfq3"}

    var bb = new TxSignPrep().prepare(transferandlocktx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhZWRpaGM1ejVkODU4dW40dTZ5eHZqeHRndmdoanE1ZDZiM3lzOXMyNHdtNmhrMXk5bTE1ZHQxMGg5bTUxczU2OTcyMXVzABWjFXJMfnYAGnH1Ile/EG5kYXAzcHg4YzdoaGZ4OG0zd2NnY3hrOGRxY2h5emFoNDVieTZobW1zYXFheGZxMw=="
    )
  })
})
describe('CommandValidatorChange object prepare tests', () => {
  it('should build an object for CommandValidatorChange and convert to known b64', () => {
    var commandvalidatorchangetx = {"public_key":"z81pWmX14xv49SYa","power":7147475985406603,"sequence":3268473309273449,"signatures":["a4jadtcadakzy3x9cup95h8d3u2zd5ebb2hqavvh5a23cr4pnqt4257eethg54exkqxzugnghxmr9pcz647wagy6hyvinhwbumvb7ekmmb5d8b6h54frvb9p"]}

    var bb = new TxSignPrep().prepare(commandvalidatorchangetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "ABlkl28mmot6ODFwV21YMTR4djQ5U1lhAAucqL6OnWk="
    )
  })
  it('should build an object for CommandValidatorChange without signatures and convert to known b64', () => {
    var commandvalidatorchangetx = {"power":7147475985406603,"public_key":"z81pWmX14xv49SYa","sequence":3268473309273449}

    var bb = new TxSignPrep().prepare(commandvalidatorchangetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "ABlkl28mmot6ODFwV21YMTR4djQ5U1lhAAucqL6OnWk="
    )
  })
})
describe('SidechainTx object prepare tests', () => {
  it('should build an object for SidechainTx and convert to known b64', () => {
    var sidechaintxtx = {"source":"ndahxpb2ijq3upjn765yye6vu62nw9phhp4hjmknaatyhm2g","sidechain_id":51,"sidechain_signable_bytes":"JjBB8cUWTXC0AneU","sidechain_signatures":["a4jadtcamdpkdr7sn3pfyte4mqqmzb2x2ibmzg5vn6f4nswz62jiur9qe4g5yr22vsgckub4i8erk2ag4q6xpxy5aev3p6syc93rax89rshijgam3496fua2"],"sequence":666378943674263,"signatures":["a4jadtcanwre4zug9acu2csdiqxgc9u6sym7dhjv24yrkx59ghr8aj6t6zkk2jmbd3en4ypc7akzdnxmtars4x4pebx9wq2bbzqfwrpj5p8b634d55ep47nv"]}

    var bb = new TxSignPrep().prepare(sidechaintxtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AAJeEXA5N5cAAAAAAAAAM0pqQkI4Y1VXVFhDMEFuZVVhNGphZHRjYW1kcGtkcjdzbjNwZnl0ZTRtcXFtemIyeDJpYm16ZzV2bjZmNG5zd3o2MmppdXI5cWU0ZzV5cjIydnNnY2t1YjRpOGVyazJhZzRxNnhweHk1YWV2M3A2c3ljOTNyYXg4OXJzaGlqZ2FtMzQ5NmZ1YTJuZGFoeHBiMmlqcTN1cGpuNzY1eXllNnZ1NjJudzlwaGhwNGhqbWtuYWF0eWhtMmc="
    )
  })
  it('should build an object for SidechainTx without signatures and convert to known b64', () => {
    var sidechaintxtx = {"sequence":666378943674263,"sidechain_id":51,"sidechain_signable_bytes":"JjBB8cUWTXC0AneU","sidechain_signatures":["a4jadtcamdpkdr7sn3pfyte4mqqmzb2x2ibmzg5vn6f4nswz62jiur9qe4g5yr22vsgckub4i8erk2ag4q6xpxy5aev3p6syc93rax89rshijgam3496fua2"],"source":"ndahxpb2ijq3upjn765yye6vu62nw9phhp4hjmknaatyhm2g"}

    var bb = new TxSignPrep().prepare(sidechaintxtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AAJeEXA5N5cAAAAAAAAAM0pqQkI4Y1VXVFhDMEFuZVVhNGphZHRjYW1kcGtkcjdzbjNwZnl0ZTRtcXFtemIyeDJpYm16ZzV2bjZmNG5zd3o2MmppdXI5cWU0ZzV5cjIydnNnY2t1YjRpOGVyazJhZzRxNnhweHk1YWV2M3A2c3ljOTNyYXg4OXJzaGlqZ2FtMzQ5NmZ1YTJuZGFoeHBiMmlqcTN1cGpuNzY1eXllNnZ1NjJudzlwaGhwNGhqbWtuYWF0eWhtMmc="
    )
  })
})
describe('UnregisterNode object prepare tests', () => {
  it('should build an object for UnregisterNode and convert to known b64', () => {
    var unregisternodetx = {"node":"ndabyjmhg7v42u5rktuguzamqvte53xb363ni68ux6tsycx5","sequence":5623762082951376,"signatures":["a4jadtcau6q42khtbkzzvx7pmfdxpzfaqtjzbzwzx4rqstegkt8yz4t5jrfmvfdyn4tpcdgshptghtv4cdh33xax43p3np8si7syq2mj53tvb5u8xnvf638s"]}

    var bb = new TxSignPrep().prepare(unregisternodetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhYnlqbWhnN3Y0MnU1cmt0dWd1emFtcXZ0ZTUzeGIzNjNuaTY4dXg2dHN5Y3g1ABP6yCVBcNA="
    )
  })
  it('should build an object for UnregisterNode without signatures and convert to known b64', () => {
    var unregisternodetx = {"node":"ndabyjmhg7v42u5rktuguzamqvte53xb363ni68ux6tsycx5","sequence":5623762082951376}

    var bb = new TxSignPrep().prepare(unregisternodetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhYnlqbWhnN3Y0MnU1cmt0dWd1emFtcXZ0ZTUzeGIzNjNuaTY4dXg2dHN5Y3g1ABP6yCVBcNA="
    )
  })
})
describe('Unstake object prepare tests', () => {
  it('should build an object for Unstake and convert to known b64', () => {
    var unstaketx = {"target":"ndafk3c8s4p78ii7tqgvgdttbnh6ept9u9r439a67466xwcq","sequence":3820780875409098,"signatures":["a4jadtcau5myqbwrk392th4vs6v5t8f7sug7fdix6wn2wermigm32rd5bwpau5d5rn7saj5n54xaaz3nkeaxf94nrneypzgkybn4du6p7dcbfikugzx9j4vz"]}

    var bb = new TxSignPrep().prepare(unstaketx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AA2S+t7X5spuZGFmazNjOHM0cDc4aWk3dHFndmdkdHRibmg2ZXB0OXU5cjQzOWE2NzQ2Nnh3Y3E="
    )
  })
  it('should build an object for Unstake without signatures and convert to known b64', () => {
    var unstaketx = {"sequence":3820780875409098,"target":"ndafk3c8s4p78ii7tqgvgdttbnh6ept9u9r439a67466xwcq"}

    var bb = new TxSignPrep().prepare(unstaketx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "AA2S+t7X5spuZGFmazNjOHM0cDc4aWk3dHFndmdkdHRibmg2ZXB0OXU5cjQzOWE2NzQ2Nnh3Y3E="
    )
  })
})
describe('Issue object prepare tests', () => {
  it('should build an object for Issue and convert to known b64', () => {
    var issuetx = {"qty":2805298263287969,"sequence":8998038698708596,"signatures":["a4jadtca5ggsrz6yst3fqz7rzungr9pvk85fetdahhvam4uh94xe7yhy9natx4ffwkrn68giki2mwnmpczdcp56uxhgtsdhdiq8mecsry5yaptu4wnqhtutc"]}

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
    var claimchildaccounttx = {"target":"ndakv3amr7dy94ra9huyqwqeie2yp24qjky873ixrkvqyfmz","child":"ndafmy7cqaw3rssa3kq2rcsndvvr3s4bi6gjwd8rrvifizhi","child_ownership":"npuba8jadtbbeczx2j6atd6ufxgzkn7k4wkdsc29shmruwf7bed7j4n3w835xxrvdhgu9vc4zpyi","child_signature":"a4jadtcaaxectiqktxwmb7r32xeucisrv4jgux5ze5zss7b323in5jipdfbh8tkw5y5k29ka9x45ghumnci8wuzj2m3ryf2srsi6f77r53nsqddqf5zbwykn","child_settlement_period":"8m23dt16h44m36s771718us","child_validation_keys":["npuba8jadtbbeaxsxcr3q9txk44w7qwte6jptcw5x98fw9kwvak9eeziyz6tnpchvbwspceix9cz"],"child_validation_script":"Lnn/IgJ3A7+ts6SJ","sequence":5884718809965732,"signatures":["a4jadtca3pnghtccubb2hxi5i2vv8wiwaqy6hzmd44ph9pc2uaeqhck5nrsppbezfyzuqhs9tetckx2nhm6jk3gmmqcqa98i2d3q63n8c67cqwxiq3ueyu7v"]}

    var bb = new TxSignPrep().prepare(claimchildaccounttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhZm15N2NxYXczcnNzYTNrcTJyY3NuZHZ2cjNzNGJpNmdqd2Q4cnJ2aWZpemhpbnB1YmE4amFkdGJiZWN6eDJqNmF0ZDZ1ZnhnemtuN2s0d2tkc2MyOXNobXJ1d2Y3YmVkN2o0bjN3ODM1eHhydmRoZ3U5dmM0enB5aThtMjNkdDE2aDQ0bTM2czc3MTcxOHVzYTRqYWR0Y2FheGVjdGlxa3R4d21iN3IzMnhldWNpc3J2NGpndXg1emU1enNzN2IzMjNpbjVqaXBkZmJoOHRrdzV5NWsyOWthOXg0NWdodW1uY2k4d3V6ajJtM3J5ZjJzcnNpNmY3N3I1M25zcWRkcWY1emJ3eWtubnB1YmE4amFkdGJiZWF4c3hjcjNxOXR4azQ0dzdxd3RlNmpwdGN3NXg5OGZ3OWt3dmFrOWVleml5ejZ0bnBjaHZid3NwY2VpeDljekxubi9JZ0ozQTcrdHM2U0oAFOge3kVkpG5kYWt2M2FtcjdkeTk0cmE5aHV5cXdxZWllMnlwMjRxamt5ODczaXhya3ZxeWZteg=="
    )
  })
  it('should build an object for ClaimChildAccount without signatures and convert to known b64', () => {
    var claimchildaccounttx = {"child":"ndafmy7cqaw3rssa3kq2rcsndvvr3s4bi6gjwd8rrvifizhi","child_ownership":"npuba8jadtbbeczx2j6atd6ufxgzkn7k4wkdsc29shmruwf7bed7j4n3w835xxrvdhgu9vc4zpyi","child_settlement_period":"8m23dt16h44m36s771718us","child_signature":"a4jadtcaaxectiqktxwmb7r32xeucisrv4jgux5ze5zss7b323in5jipdfbh8tkw5y5k29ka9x45ghumnci8wuzj2m3ryf2srsi6f77r53nsqddqf5zbwykn","child_validation_keys":["npuba8jadtbbeaxsxcr3q9txk44w7qwte6jptcw5x98fw9kwvak9eeziyz6tnpchvbwspceix9cz"],"child_validation_script":"Lnn/IgJ3A7+ts6SJ","sequence":5884718809965732,"target":"ndakv3amr7dy94ra9huyqwqeie2yp24qjky873ixrkvqyfmz"}

    var bb = new TxSignPrep().prepare(claimchildaccounttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      "bmRhZm15N2NxYXczcnNzYTNrcTJyY3NuZHZ2cjNzNGJpNmdqd2Q4cnJ2aWZpemhpbnB1YmE4amFkdGJiZWN6eDJqNmF0ZDZ1ZnhnemtuN2s0d2tkc2MyOXNobXJ1d2Y3YmVkN2o0bjN3ODM1eHhydmRoZ3U5dmM0enB5aThtMjNkdDE2aDQ0bTM2czc3MTcxOHVzYTRqYWR0Y2FheGVjdGlxa3R4d21iN3IzMnhldWNpc3J2NGpndXg1emU1enNzN2IzMjNpbjVqaXBkZmJoOHRrdzV5NWsyOWthOXg0NWdodW1uY2k4d3V6ajJtM3J5ZjJzcnNpNmY3N3I1M25zcWRkcWY1emJ3eWtubnB1YmE4amFkdGJiZWF4c3hjcjNxOXR4azQ0dzdxd3RlNmpwdGN3NXg5OGZ3OWt3dmFrOWVleml5ejZ0bnBjaHZid3NwY2VpeDljekxubi9JZ0ozQTcrdHM2U0oAFOge3kVkpG5kYWt2M2FtcjdkeTk0cmE5aHV5cXdxZWllMnlwMjRxamt5ODczaXhya3ZxeWZteg=="
    )
  })
})

