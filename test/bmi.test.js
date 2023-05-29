const { expect } = require('chai');
const contollerBmi = require('../controllers/bmi');

describe('BMI Calculation', () => {
  const req = {
    body :[
      { Gender: 'Male', HeightCm: 208, WeightKg: 68 },
      { Gender: 'Female', HeightCm: 204, WeightKg: 63 }
    ]
  };

  const res = [
    {
      "Gender": "Male",
      "HeightCm": 208,
      "WeightKg": 68,
      "bmi": 15.72,
      "category": "Underweight",
      "risk": "Malnutrition risk"
    },
    {
        "Gender": "Female",
        "HeightCm": 204,
        "WeightKg": 63,
        "bmi": 15.14,
        "category": "Underweight",
        "risk": "Malnutrition risk"
    }
  ];

  const res1 = {
    json: jest.fn(),
  };

  it('should give cateogry and risk for BMI value', async () => {
    const response = contollerBmi.calculateBodyHealth(18)
    expect(response).to.deep.equal({category : "Underweight",risk : "Malnutrition risk"});
  });

  it('should calculate bmi for given height and weigth', async () => {
    const response = contollerBmi.calculation(208, 68)
    expect(response).to.deep.equal(15.72);
  });


});
