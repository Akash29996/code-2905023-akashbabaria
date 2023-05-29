const calculation = (heightCm, weightKg) => {
    if (isNaN(heightCm) || isNaN(weightKg)) {
      throw new Error('Invalid height or weight value');
    }
  
    const heightM = heightCm / 100;
    return +(weightKg / (heightM * heightM)).toFixed(2);
  };
  
  const calculateBodyHealth = (bmi) => {
    if (isNaN(bmi)) {
        throw new Error('Invalid BMI value');
    }

    let category, risk;

    if (bmi <= 18.4) {
      category = "Underweight";
      risk = "Malnutrition risk";
    } else if (bmi <= 24.9) {
      category = "Normal weight";
      risk = "Low risk";
    } else if (bmi <= 29.9) {
      category = "Overweight";
      risk = "Enhanced risk";
    } else if (bmi <= 34.9) {
      category = "Moderately obese";
      risk = "Medium risk";
    } else if (bmi <= 39.9) {
      category = "Severel obese";
      risk = "High risk";
    } else {
      category = "Very severely obese";
      risk = "Very high risk";
    }
    return {category,risk}
  };

  const calculateBMI = (req,res) => {
    try{
        const results = [];
        let overweightCount = 0;
        var len = req.body.length;
        while (len--) {
          const { HeightCm, WeightKg } = req.body[len];
          const bmi = calculation(HeightCm, WeightKg);
          const {category,risk} = calculateBodyHealth(bmi)
      
          results.push({ ...req.body[len], bmi, category, risk });
          if (category === 'Overweight') {
            overweightCount++;
          }
        }
        res.json ({ overweightCount, results });

    } catch (error){
        res.status(400).json({ error: error.message });
    }
  };

  module.exports = { calculateBMI, calculateBodyHealth, calculation};