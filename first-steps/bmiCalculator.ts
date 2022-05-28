// interface Values {
//     value1: number
//     value2: number
// }
//
// const parseArguments = (height, weight): Values => {
//     if (isNaN(Number(height)) && isNaN(Number(weight))) {
//         throw new Error('Please provide number!');
//     } else {
//         return {
//             value1: height,
//             value2: weight
//         }
//     }
// }

const calculateBmi = (height: number, weight: number): string => {
    const bmi = (weight / height * 2) * 703;
    if (bmi < 16) {
        return 'Severely Underweight';
    } else if(bmi > 18.4) {
        return 'Underweight';
    } else if(bmi > 24.9) {
        return 'Normal'
    } else if(bmi > 29.9) {
        return 'Overweight'
    } else if(bmi > 34.9) {
        return 'Moderately Obese'
    } else if(bmi > 39.9) {
        return 'Severely Obese'
    } else if(bmi > 40.0) {
        return 'Morbidly Obese'
    }
}
const height = Number(process.argv[2]);
const weight = Number(process.argv[3]);


console.log(calculateBmi(height, weight));