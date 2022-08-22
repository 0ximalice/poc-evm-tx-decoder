import * as evm from 'ethereum-input-data-decoder'

describe('erc20-transfer', () => {
    before(async () => {})

    it('should deserialize tx data', async () => {
        const abi = [
            {
                constant: true,
                inputs: [],
                name: 'name',
                outputs: [{ name: '', type: 'string' }],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    { name: 'spender', type: 'address' },
                    { name: 'value', type: 'uint256' },
                ],
                name: 'approve',
                outputs: [{ name: '', type: 'bool' }],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'totalSupply',
                outputs: [{ name: '', type: 'uint256' }],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    { name: 'from', type: 'address' },
                    { name: 'to', type: 'address' },
                    { name: 'value', type: 'uint256' },
                ],
                name: 'transferFrom',
                outputs: [{ name: '', type: 'bool' }],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'decimals',
                outputs: [{ name: '', type: 'uint8' }],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    { name: 'spender', type: 'address' },
                    { name: 'addedValue', type: 'uint256' },
                ],
                name: 'increaseAllowance',
                outputs: [{ name: '', type: 'bool' }],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [{ name: 'value', type: 'uint256' }],
                name: 'burn',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [{ name: 'owner', type: 'address' }],
                name: 'balanceOf',
                outputs: [{ name: '', type: 'uint256' }],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    { name: 'from', type: 'address' },
                    { name: 'value', type: 'uint256' },
                ],
                name: 'burnFrom',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'symbol',
                outputs: [{ name: '', type: 'string' }],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    { name: 'spender', type: 'address' },
                    { name: 'subtractedValue', type: 'uint256' },
                ],
                name: 'decreaseAllowance',
                outputs: [{ name: '', type: 'bool' }],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    { name: 'to', type: 'address' },
                    { name: 'value', type: 'uint256' },
                ],
                name: 'transfer',
                outputs: [{ name: '', type: 'bool' }],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    { name: 'owner', type: 'address' },
                    { name: 'spender', type: 'address' },
                ],
                name: 'allowance',
                outputs: [{ name: '', type: 'uint256' }],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'constructor',
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, name: 'from', type: 'address' },
                    { indexed: true, name: 'to', type: 'address' },
                    { indexed: false, name: 'value', type: 'uint256' },
                ],
                name: 'Transfer',
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, name: 'owner', type: 'address' },
                    { indexed: true, name: 'spender', type: 'address' },
                    { indexed: false, name: 'value', type: 'uint256' },
                ],
                name: 'Approval',
                type: 'event',
            },
        ]

        /**
         * Transfer FTT token
         * https://etherscan.io/tx/0x9ce54ebd9b60c64e675885b31c4230f514b0574d2989709d5c602fdc6f4dc758
         */
        const decoder = new evm.default(abi)
        const input_data = decoder.decodeData(
            '0xa9059cbb000000000000000000000000f16e9b0d03470827a95cdfd0cb8a8a3b46969b91000000000000000000000000000000000000000000000000301264884eb2c000'
        )
        console.log(input_data)
    })
})
