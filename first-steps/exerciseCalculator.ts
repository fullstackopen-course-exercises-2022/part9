interface Value {
    theNumberOfDays: number;
    theNumberOfTrainingDays: number;
    theOriginalTargetValue: number;
    theCalculatedAverageTime: number;
    booleanValueDescribingIfTheTargetWasReached: boolean;
    rating: number;
    aTextValueExplainingTheRating: string;
}

const calculateExercises = (hours: Array<number>): Value => {
    const theNumberOfDays = hours.length;
    const theNumberOfTrainingDays = hours.filter(hour => hour > 0).length;
    const theOriginalTargetValue = Number(process.argv[2]);
    const theCalculatedAverageTime = hours.reduce((a, b) => a + b) / theNumberOfDays;
    const booleanValueDescribingIfTheTargetWasReached = theCalculatedAverageTime >= theOriginalTargetValue;
    const rating = theCalculatedAverageTime > theOriginalTargetValue ? 3 : theCalculatedAverageTime === theOriginalTargetValue ? 2 : 1;
    const aTextValueExplainingTheRating = theCalculatedAverageTime > theOriginalTargetValue ?
        "Good work" : theCalculatedAverageTime === theOriginalTargetValue ?
            "Good job" : "Good, just do better next time!";

    return {
        theCalculatedAverageTime: theCalculatedAverageTime,
        theNumberOfDays: theNumberOfDays,
        theNumberOfTrainingDays: theNumberOfTrainingDays,
        theOriginalTargetValue: theOriginalTargetValue,
        booleanValueDescribingIfTheTargetWasReached: booleanValueDescribingIfTheTargetWasReached,
        rating: rating,
        aTextValueExplainingTheRating: aTextValueExplainingTheRating
    };
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1]));