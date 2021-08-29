export const getReport = async (criteria) => {
    const { father, mother, offspring } = criteria
    return {
        ...criteria,
        father: {...father, avgPrice: parseFloat(Math.random().toFixed(2)), sales: Math.floor(Math.random()*100)},
        mother: {...mother, avgPrice: parseFloat(Math.random().toFixed(2)), sales: Math.floor(Math.random()*100)},
        maleOffspring: {...offspring, avgPrice: parseFloat(Math.random().toFixed(2)), sales: Math.floor(Math.random()*100)},
        femaleOffspring: {...offspring, avgPrice: parseFloat(Math.random().toFixed(2)), sales: Math.floor(Math.random()*100)},
    }
}