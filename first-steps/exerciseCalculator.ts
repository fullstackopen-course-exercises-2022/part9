interface Value {
    theNumberOfDays: number;
    theNumberOfTrainingDays: number;
    theOriginalTargetValue: number;
    theCalculatedAverageTime: number;
    booleanValueDescribingIfTheTargetWasReached: boolean;
    rating: number;
    aTextValueExplainingTheRating: string;
}

export const calculateExercises = (hours: Array<number>, targetNumber: number): Value => {
    const theNumberOfDays = hours.length;
    const theNumberOfTrainingDays = hours.filter(hour => hour > 0).length;
    const theCalculatedAverageTime = hours.reduce((a, b) => a + b) / theNumberOfDays;
    const booleanValueDescribingIfTheTargetWasReached = theCalculatedAverageTime >= targetNumber;
    const rating = theCalculatedAverageTime > targetNumber ? 3 : theCalculatedAverageTime === targetNumber ? 2 : 1;
    const aTextValueExplainingTheRating = theCalculatedAverageTime > targetNumber ?
        "Good work" : theCalculatedAverageTime === targetNumber ?
            "Good job" : "Good, just do better next time!";

    return {
        theCalculatedAverageTime: theCalculatedAverageTime,
        theNumberOfDays: theNumberOfDays,
        theNumberOfTrainingDays: theNumberOfTrainingDays,
        theOriginalTargetValue: targetNumber,
        booleanValueDescribingIfTheTargetWasReached: booleanValueDescribingIfTheTargetWasReached,
        rating: rating,
        aTextValueExplainingTheRating: aTextValueExplainingTheRating,
    };
};