export const NAKAMOTO = 'Nakamoto'
export const SZABO = 'Szabo'
export const FINNEY = 'Finney'
export const BUTERIN = 'Buterin'

export const BLOODLINE_MAP = {
    [NAKAMOTO]: { [NAKAMOTO]: NAKAMOTO, [SZABO]: SZABO, [FINNEY]: FINNEY, [BUTERIN]: BUTERIN },
    [SZABO]: { [NAKAMOTO]: SZABO, [SZABO]: SZABO, [FINNEY]: FINNEY, [BUTERIN]: BUTERIN },
    [FINNEY]: { [NAKAMOTO]: FINNEY, [SZABO]: FINNEY, [FINNEY]: FINNEY, [BUTERIN]: BUTERIN },
    [BUTERIN]: { [NAKAMOTO]: BUTERIN, [SZABO]: BUTERIN, [FINNEY]: BUTERIN, [BUTERIN]: BUTERIN }
}

export const GENESIS = 'genesis'
export const LEGENDARY = 'legendary'
export const EXCLUSIVE = 'exclusive'
export const ELITE = 'elite'
export const CROSS = 'cross'
export const PACER = 'pacer'

export const BREED_TYPE_MAP = {
    [GENESIS]: { [GENESIS]: LEGENDARY, [LEGENDARY]: EXCLUSIVE, [EXCLUSIVE]: ELITE, [ELITE]: CROSS, [CROSS]: CROSS, [PACER]: PACER },
    [LEGENDARY]: { [GENESIS]: EXCLUSIVE, [LEGENDARY]: EXCLUSIVE, [EXCLUSIVE]: ELITE, [ELITE]: CROSS, [CROSS]: CROSS, [PACER]: PACER },
    [EXCLUSIVE]: { [GENESIS]: EXCLUSIVE, [LEGENDARY]: ELITE, [EXCLUSIVE]: ELITE, [ELITE]: CROSS, [CROSS]: CROSS, [PACER]: PACER },
    [ELITE]: { [GENESIS]: ELITE, [LEGENDARY]: CROSS, [EXCLUSIVE]: CROSS, [ELITE]: CROSS, [CROSS]: CROSS, [PACER]: PACER },
    [CROSS]: { [GENESIS]: CROSS, [LEGENDARY]: CROSS, [EXCLUSIVE]: CROSS, [ELITE]: CROSS, [CROSS]: PACER, [PACER]: PACER },
    [PACER]: { [GENESIS]: PACER, [LEGENDARY]: PACER, [EXCLUSIVE]: PACER, [ELITE]: PACER, [CROSS]: PACER, [PACER]: PACER },
}

export const FATHER = 'Father'
export const MOTHER = 'Mother'
export const OFFSPRING = 'Offspring'

export const HORSE_IMAGES = {
    [FATHER]: 'https://img.zed.run/horses/0048BA.png',
    [MOTHER]: 'https://img.zed.run/horses/B22222.png',
    [OFFSPRING]: 'https://img.zed.run/horses/FFF8DC.png'
}

export const ENDPOINT = 'https://www.nft-whale.makadev.com/api-v1'
