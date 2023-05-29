const { expect } = require('chai');
const contollerBmi = require('../controllers/bmi');

describe('BMI Calculation', () => {
  const req = {
    body :[
      { Gender: 'Male', HeightCm: 208, WeightKg: 68 },
      { Gender: 'Female', HeightCm: 204, WeightKg: 63 }
    ]
  };

  const res1 = {
    json: jest.fn(),
  };

  it('should give cateogry and risk for BMI value', async () => {
    const response = contollerBmi.calculateBodyHealth(18)
    expect(response).to.deep.equal({category : "Underweight",risk : "Malnutrition risk"});
  });

  

});
