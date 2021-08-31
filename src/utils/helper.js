
export const getOpenseaLink = (horse, gender) => {
    const { generation, bloodline, breedType } = horse
    
    let link = `https://opensea.io/collection/zed-run-official?search[sortAscending]=true&search[sortBy]=PRICE&`
    link += `search[stringTraits][0][name]=bloodline&search[stringTraits][0][values][0]=${bloodline}&`
    link += `search[stringTraits][1][name]=breed_type&search[stringTraits][1][values][0]=${breedType}&`
    link += `search[stringTraits][2][name]=genotype&search[stringTraits][2][values][0]=Z${generation}`

    if (gender) {
        link += `&search[stringTraits][3][name]=gender&search[stringTraits][3][values][0]=${gender === 'male' ? 'Colt' : 'Filly'}&search[stringTraits][3][values][1]=${gender === 'male' ? 'Stallion' : 'Mare'}`
    }

    return link
}