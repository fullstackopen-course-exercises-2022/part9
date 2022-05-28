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

    let statement = '';

    if (bmi < 16) {
        statement = 'Severely Underweight';
    } else if(bmi > 18.4) {
        statement = 'Underweight';
    } else if(bmi > 24.9) {
        statement = 'Normal'
    } else if(bmi > 29.9) {
        statement = 'Overweight'
    } else if(bmi > 34.9) {
        statement = 'Moderately Obese'
    } else if(bmi > 39.9) {
        statement = 'Severely Obese'
    } else if(bmi > 40.0) {
        statement = 'Morbidly Obese'
    }

    return statement
}
const height = Number(process.argv[2]);
const weight = Number(process.argv[3]);

export default calculateBmi

console.log(calculateBmi(height, weight));