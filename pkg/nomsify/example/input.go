package example

import (
	"github.com/oneiro-ndev/ndau/pkg/ndau/backing"
	"github.com/oneiro-ndev/ndaumath/pkg/address"
	"github.com/oneiro-ndev/ndaumath/pkg/signature"
	math "github.com/oneiro-ndev/ndaumath/pkg/types"
)

// AccountData contains all the information the node needs to take action on a particular account.
//
// See the whitepaper: https://github.com/oneiro-ndev/whitepapers/blob/master/node_incentives/transactions.md#wallet-data
type AccountData struct {
	Balance             math.Ndau                  `json:"balance" chain:"61,Acct_Balance"`
	ValidationKeys      []signature.PublicKey      `json:"validationKeys" chain:"62,Acct_ValidationKeys"`
	ValidationScript    []byte                     `json:"validationScript" chain:"69,Acct_ValidationScript"`
	RewardsTarget       *address.Address           `json:"rewardsTarget" chain:"63,Acct_RewardsTarget"`
	IncomingRewardsFrom []address.Address          `json:"incomingRewardsFrom" chain:"64,Acct_IncomingRewardsFrom"`
	DelegationNode      *address.Address           `json:"delegationNode" chain:"65,Acct_DelegationNode"`
	Lock                *backing.Lock              `json:"lock" chain:"."`
	Stake               *backing.Stake             `json:"stake" chain:"."`
	LastEAIUpdate       math.Timestamp             `json:"lastEAIUpdate" chain:"66,Acct_LastEAIUpdate"`
	LastWAAUpdate       math.Timestamp             `json:"lastWAAUpdate" chain:"67,Acct_LastWAAUpdate"`
	WeightedAverageAge  math.Duration              `json:"weightedAverageAge" chain:"68,Acct_WeightedAverageAge"`
	Sequence            uint64                     `json:"sequence" chain:"71,Acct_Sequence"`
	Settlements         []backing.Settlement       `json:"settlements" chain:"70,Acct_Settlements"`
	SettlementSettings  backing.SettlementSettings `json:"settlementSettings" chain:"."`
	CurrencySeatDate    *math.Timestamp            `json:"currencySeatDate" chain:"72,Acct_CurrencySeatDate"`
	SidechainPayments   map[string]struct{}        `json:"-" msg:"-"` // not useful for consumers; they should use an ABCI query instead
	UncreditedEAI       math.Ndau                  `json:"-" msg:"-"` // exclude from serialization
}
