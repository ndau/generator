package example

import (
	"encoding/base64"
	"fmt"
	"reflect"

	"github.com/attic-labs/noms/go/marshal"
	nt "github.com/attic-labs/noms/go/types"
	"github.com/oneiro-ndev/ndau/pkg/ndau/backing"
	"github.com/oneiro-ndev/ndaumath/pkg/address"
	"github.com/oneiro-ndev/ndaumath/pkg/signature"
	math "github.com/oneiro-ndev/ndaumath/pkg/types"
	util "github.com/oneiro-ndev/noms-util"
	"github.com/pkg/errors"
)

var accountDataStructTemplate nt.StructTemplate

func init() {
	accountDataStructTemplate = nt.MakeStructTemplate("AccountData", []string{
		"Balance",
		"CurrencySeatDate",
		"DelegationNode",
		"HasCurrencySeatDate",
		"HasDelegationNode",
		"HasLock",
		"HasRewardsTarget",
		"HasStake",
		"IncomingRewardsFrom",
		"LastEAIUpdate",
		"LastWAAUpdate",
		"Lock",
		"RewardsTarget",
		"Sequence",
		"SettlementSettings",
		"Settlements",
		"SidechainPayments",
		"Stake",
		"UncreditedEAI",
		"ValidationKeys",
		"ValidationScript",
		"WeightedAverageAge",
	})
}

// MarshalNoms implements noms/go/marshal.Marshaler
func (ad AccountData) MarshalNoms(vrw nt.ValueReadWriter) (accountDataValue nt.Value, err error) {
	validationKeysItems := make([]nt.Value, 0, len(ad.ValidationKeys))
	for _, validationKeysItem := range ad.ValidationKeys {
		validationKeysString, err := validationKeysItem.MarshalText()
		if err != nil {
			return nil, errors.Wrap(err, "AccountData.MarshalNoms->ValidationKeys")
		}
		validationKeysItems = append(
			validationKeysItems,
			nt.String(validationKeysString),
		)
	}
	validationKeysValue := nt.NewList(vrw, validationKeysItems...)

	rewardsTargetValue := nt.String("")
	if ad.RewardsTarget != nil {
		rewardsTargetString, err := ad.RewardsTarget.MarshalText()
		if err != nil {
			return nil, errors.Wrap(err, "AccountData.MarshalNoms->RewardsTarget")
		}
		rewardsTargetValue = nt.String(rewardsTargetString)
	}

	incomingRewardsFromItems := make([]nt.Value, 0, len(ad.IncomingRewardsFrom))
	for _, incomingRewardsFromItem := range ad.IncomingRewardsFrom {
		incomingRewardsFromString, err := incomingRewardsFromItem.MarshalText()
		if err != nil {
			return nil, errors.Wrap(err, "AccountData.MarshalNoms->IncomingRewardsFrom")
		}
		incomingRewardsFromItems = append(
			incomingRewardsFromItems,
			nt.String(incomingRewardsFromString),
		)
	}
	incomingRewardsFromValue := nt.NewList(vrw, incomingRewardsFromItems...)

	delegationNodeValue := nt.String("")
	if ad.DelegationNode != nil {
		delegationNodeString, err := ad.DelegationNode.MarshalText()
		if err != nil {
			return nil, errors.Wrap(err, "AccountData.MarshalNoms->DelegationNode")
		}
		delegationNodeValue = nt.String(delegationNodeString)
	}

	var lockValue nt.Value
	if ad.Lock == nil {
		lockValue, err = backing.Lock{}.MarshalNoms(vrw)
		if err != nil {
			return nil, errors.Wrap(err, "AccountData.MarshalNoms->Lock (nil)")
		}
	} else {
		lockValue, err = ad.Lock.MarshalNoms(vrw)
		if err != nil {
			return nil, errors.Wrap(err, "AccountData.MarshalNoms->Lock")
		}
	}

	var stakeValue nt.Value
	if ad.Stake == nil {
		stakeValue, err = backing.Stake{}.MarshalNoms(vrw)
		if err != nil {
			return nil, errors.Wrap(err, "AccountData.MarshalNoms->Stake (nil)")
		}
	} else {
		stakeValue, err = ad.Stake.MarshalNoms(vrw)
		if err != nil {
			return nil, errors.Wrap(err, "AccountData.MarshalNoms->Stake")
		}
	}

	settlementsItems := make([]nt.Value, 0, len(ad.Settlements))
	for _, settlementsItem := range ad.Settlements {
		settlementsItemValue, err := settlementsItem.MarshalNoms(vrw)
		if err != nil {
			return nil, errors.Wrap(err, "AccountData.MarshalNoms->Settlements")
		}
		settlementsItems = append(
			settlementsItems,
			settlementsItemValue,
		)
	}
	settlementsValue := nt.NewList(vrw, settlementsItems...)

	settlementSettingsValue, err := ad.SettlementSettings.MarshalNoms(vrw)
	if err != nil {
		return nil, errors.Wrap(err, "AccountData.MarshalNoms->SettlementSettings")
	}

	currencySeatDateValue := util.Int(0).NomsValue()
	if ad.CurrencySeatDate != nil {
		currencySeatDateValue = util.Int(*ad.CurrencySeatDate).NomsValue()
	}

	sidechainPaymentsItems := make([]nt.Value, 0, len(ad.SidechainPayments))
	for sidechainPaymentsItem := range ad.SidechainPayments {
		sidechainPaymentsItems = append(
			sidechainPaymentsItems,
			nt.String(sidechainPaymentsItem),
		)
	}

	return accountDataStructTemplate.NewStruct([]nt.Value{
		util.Int(ad.Balance).NomsValue(),
		currencySeatDateValue,
		delegationNodeValue,
		nt.Bool(ad.CurrencySeatDate != nil),
		nt.Bool(ad.DelegationNode != nil),
		nt.Bool(ad.Lock != nil),
		nt.Bool(ad.RewardsTarget != nil),
		nt.Bool(ad.Stake != nil),
		incomingRewardsFromValue,
		util.Int(ad.LastEAIUpdate).NomsValue(),
		util.Int(ad.LastWAAUpdate).NomsValue(),
		lockValue,
		rewardsTargetValue,
		util.Int(ad.Sequence).NomsValue(),
		settlementSettingsValue,
		settlementsValue,
		nt.NewSet(vrw, sidechainPaymentsItems...),
		stakeValue,
		util.Int(ad.UncreditedEAI).NomsValue(),
		validationKeysValue,
		nt.String(base64.StdEncoding.EncodeToString(ad.ValidationScript)),
		util.Int(ad.WeightedAverageAge).NomsValue(),
	}), nil
}

var _ marshal.Marshaler = (*AccountData)(nil)

// UnmarshalNoms implements noms/go/marshal.Unmarshaler
//
// This method makes no attempt to zeroize the provided struct; it simply
// overwrites fields as they are found.
func (ad *AccountData) UnmarshalNoms(value nt.Value) (err error) {
	vs, ok := value.(nt.Struct)
	if !ok {
		return fmt.Errorf(
			"AccountData.UnmarshalNoms expected a nt.Value; found %s",
			reflect.TypeOf(value),
		)
	}

	// noms Struct.MaybeGet isn't efficient: it iterates over all fields of
	// the struct until it finds one whose name happens to match the one sought.
	// It's better to iterate once over the struct and set the fields of the
	// target struct in arbitrary order.
	vs.IterFields(func(name string, value nt.Value) {
		if err == nil {
			switch name {
			case "Balance":
				var balance util.Int
				balance, err = util.IntFrom(value)
				if err != nil {
					err = errors.Wrap(err, "AccountData.UnmarshalNoms->Balance")
					return
				}
				ad.Balance = math.Ndau(balance)
			case "ValidationKeys":
				if validationKeysList, ok := value.(nt.List); ok {
					ad.ValidationKeys = make([]signature.PublicKey, 0, validationKeysList.Len())
					validationKeysList.Iter(func(validationKeysItem nt.Value, idx uint64) (stop bool) {
						if validationKeysItemString, ok := validationKeysItem.(nt.String); ok {
							var validationKey signature.PublicKey
							err = validationKey.UnmarshalText([]byte(validationKeysItemString))
							if err != nil {
								return true
							}
							ad.ValidationKeys = append(ad.ValidationKeys, validationKey)
							return false
						}
						err = fmt.Errorf(
							"AccountData.UnmarshalNoms expected ValidationKeys Item to be a nt.String; found %s",
							reflect.ValueOf(validationKeysItem).Type(),
						)
						return true
					})
				} else {
					err = fmt.Errorf(
						"AccountData.UnmarshalNoms expected ValidationKeys to be a nt.List; found %s",
						reflect.TypeOf(value),
					)
				}
			case "ValidationScript":
				if validationScriptBlob, ok := value.(nt.Blob); ok {
					ad.ValidationScript, err = util.Unblob(validationScriptBlob)
					if err != nil {
						err = errors.Wrap(err, "AccountData.UnmarshalNoms->ValidationScript")
					}
				} else {
					err = fmt.Errorf(
						"AccountData.UnmarshalNoms expected ValidationKeys to be a nt.Blob; found %s",
						reflect.TypeOf(value),
					)
				}
			case "RewardsTarget":
				ad.RewardsTarget = nil
				if hasRewardsTargetValue, ok := vs.MaybeGet("HasRewardsTarget"); ok {
					if hasRewardsTarget, ok := hasRewardsTargetValue.(nt.Bool); ok {
						if !hasRewardsTarget {
							return
						}
					} else {
						err = fmt.Errorf(
							"AccountData.UnmarshalNoms expected HasRewardsTarget to be a nt.Bool; found %s",
							reflect.ValueOf(hasRewardsTargetValue).Type(),
						)
						return
					}
				}
				if rewardsTargetString, ok := value.(nt.String); ok {
					err = ad.RewardsTarget.UnmarshalText([]byte(rewardsTargetString))
					if err != nil {
						err = errors.Wrap(
							err,
							"AccountData.UnmarshalNoms->RewardsTarget",
						)
					}
				} else {
					err = fmt.Errorf(
						"AccountData.UnmarshalNoms expected RewardsTarget to be a nt.String; found %s",
						reflect.TypeOf(value),
					)
				}
			case "IncomingRewardsFrom":
				if incomingRewardsFromList, ok := value.(nt.List); ok {
					ad.IncomingRewardsFrom = make([]address.Address, 0, incomingRewardsFromList.Len())
					incomingRewardsFromList.Iter(func(incomingRewardsFromItem nt.Value, idx uint64) (stop bool) {
						if incomingRewardsFromItemString, ok := incomingRewardsFromItem.(nt.String); ok {
							var incomingRewardFrom address.Address
							err = incomingRewardFrom.UnmarshalText([]byte(incomingRewardsFromItemString))
							if err != nil {
								return true
							}
							ad.IncomingRewardsFrom = append(ad.IncomingRewardsFrom, incomingRewardFrom)
							return false
						}
						err = fmt.Errorf(
							"AccountData.UnmarshalNoms expected IncomingRewardsFrom Item to be a nt.String; found %s",
							reflect.ValueOf(incomingRewardsFromItem).Type(),
						)
						return true
					})

				} else {
					err = fmt.Errorf(
						"AccountData.UnmarshalNoms expected IncomingRewardsFrom to be a nt.List; found %s",
						reflect.TypeOf(value),
					)
				}
			case "DelegationNode":
				ad.DelegationNode = nil
				if hasDelegationNodeValue, ok := vs.MaybeGet("HasDelegationNode"); ok {
					if hasDelegationNode, ok := hasDelegationNodeValue.(nt.Bool); ok {
						if !hasDelegationNode {
							return
						}
					} else {
						err = fmt.Errorf(
							"AccountData.UnmarshalNoms expected HasDelegationNode to be a nt.Bool; found %s",
							reflect.ValueOf(hasDelegationNodeValue).Type(),
						)
						return
					}
				}
				if delegationNodeString, ok := value.(nt.String); ok {
					err = ad.DelegationNode.UnmarshalText([]byte(delegationNodeString))
					if err != nil {
						err = errors.Wrap(
							err,
							"AccountData.UnmarshalNoms->DelegationNode",
						)
					}
				} else {
					err = fmt.Errorf(
						"AccountData.UnmarshalNoms expected DelegationNode to be a nt.String; found %s",
						reflect.TypeOf(value),
					)
				}
			case "Lock":
				ad.Lock = nil
				if hasLockValue, ok := vs.MaybeGet("HasLock"); ok {
					if hasLock, ok := hasLockValue.(nt.Bool); ok {
						if !hasLock {
							return
						}
					} else {
						err = fmt.Errorf(
							"AccountData.UnmarshalNoms expected HasLock to be a nt.Bool; found %s",
							reflect.ValueOf(hasLockValue).Type(),
						)
					}
				}
				err = ad.Lock.UnmarshalNoms(value)
				if err != nil {
					err = errors.Wrap(
						err,
						"AccountData.UnmarshalNoms->Lock",
					)
				}
			case "Stake":
				ad.Stake = nil
				if hasStakeValue, ok := vs.MaybeGet("HasStake"); ok {
					if hasStake, ok := hasStakeValue.(nt.Bool); ok {
						if !hasStake {
							return
						}
					} else {
						err = fmt.Errorf(
							"AccountData.UnmarshalNoms expected HasStake to be a nt.Bool; found %s",
							reflect.ValueOf(hasStakeValue).Type(),
						)
						return
					}
				}
				err = ad.Stake.UnmarshalNoms(value)
				if err != nil {
					err = errors.Wrap(
						err,
						"AccountData.UnmarshalNoms->Stake",
					)
				}
			case "LastEAIUpdate":
				var lastEAIUpdate util.Int
				lastEAIUpdate, err = util.IntFrom(value)
				if err != nil {
					err = errors.Wrap(err, "AccountData.UnmarshalNoms->LastEAIUpdate")
					return
				}
				ad.LastEAIUpdate = math.Timestamp(lastEAIUpdate)
			case "LastWAAUpdate":
				var lastWAAUpdate util.Int
				lastWAAUpdate, err = util.IntFrom(value)
				if err != nil {
					err = errors.Wrap(err, "AccountData.UnmarshalNoms->LastWAAUpdate")
					return
				}
				ad.LastWAAUpdate = math.Timestamp(lastWAAUpdate)
			case "WeightedAverageAge":
				var weightedAverageAge util.Int
				weightedAverageAge, err = util.IntFrom(value)
				if err != nil {
					err = errors.Wrap(err, "AccountData.UnmarshalNoms->WeightedAverageAge")
					return
				}
				ad.WeightedAverageAge = math.Duration(weightedAverageAge)
			case "Sequence":
				var sequence util.Int
				sequence, err = util.IntFrom(value)
				if err != nil {
					err = errors.Wrap(err, "AccountData.UnmarshalNoms->Sequence")
					return
				}
				ad.Sequence = uint64(sequence)
			case "Settlements":
				if settlementsList, ok := value.(nt.List); ok {
					ad.Settlements = make([]backing.Settlement, 0, settlementsList.Len())
					settlementsList.Iter(func(settlementsItem nt.Value, idx uint64) (stop bool) {
						var settlement backing.Settlement
						err = errors.Wrap(
							settlement.UnmarshalNoms(settlementsItem),
							"AccountData.UnmarshalNoms->Settlements",
						)
						if err != nil {
							return true
						}
						return false
					})
				} else {
					err = fmt.Errorf(
						"AccountData.UnmarshalNoms expected Settlements to be a nt.List; found %s",
						reflect.TypeOf(value),
					)
				}
			case "SettlementSettings":
				err = ad.SettlementSettings.UnmarshalNoms(value)
			case "CurrencySeatDate":
				ad.CurrencySeatDate = nil
				if hasCurrencySeatDateValue, ok := vs.MaybeGet("HasCurrencySeatDate"); ok {
					if hasCurrencySeatDate, ok := hasCurrencySeatDateValue.(nt.Bool); ok {
						if !hasCurrencySeatDate {
							return
						}
					} else {
						err = fmt.Errorf(
							"AccountData.UnmarshalNoms expected HasCurrencySeatDate to be a nt.Bool; found %s",
							reflect.ValueOf(hasCurrencySeatDateValue).Type(),
						)
					}
				}
				var currencySeatDateValue util.Int
				currencySeatDateValue, err = util.IntFrom(value)
				if err != nil {
					err = errors.Wrap(err, "AccountData.UnmarshalNoms->CurrencySeatDate")
					return
				}
				currencySeatDate := math.Timestamp(currencySeatDateValue)
				ad.CurrencySeatDate = &currencySeatDate
			case "SidechainPayments":
				ad.SidechainPayments = make(map[string]struct{})
				if sidechainPaymentsSet, ok := value.(nt.Set); ok {
					sidechainPaymentsSet.Iter(func(sidechainPaymentsItem nt.Value) (stop bool) {
						if sidechainPaymentsItemString, ok := sidechainPaymentsItem.(nt.String); ok {
							ad.SidechainPayments[string(sidechainPaymentsItemString)] = struct{}{}
						} else {
							err = fmt.Errorf(
								"AccountData.UnmarshalNoms expected SidechainPaymentsItem to be a nt.String; found %s",
								reflect.TypeOf(value),
							)
						}
						return err != nil
					})
				} else {
					err = fmt.Errorf(
						"AccountData.UnmarshalNoms expected SidechainPayments to be a nt.Set; found %s",
						reflect.TypeOf(value),
					)
				}
			case "UncreditedEAI":
				var uncreditedEAI util.Int
				uncreditedEAI, err = util.IntFrom(value)
				if err != nil {
					err = errors.Wrap(err, "AccountData.UnmarshalNoms->UncreditedEAI")
					return
				}
				ad.UncreditedEAI = math.Ndau(uncreditedEAI)
			}
		}
	})
	return
}

var _ marshal.Unmarshaler = (*AccountData)(nil)
