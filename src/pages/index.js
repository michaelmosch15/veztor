import React, { useState, useEffect } from "react";
import CircularProgressBar from "../components/CircularProgressBar";
import ImgSrc from "../images/icon.png";
import "./styles.css";
import { Configuration, OpenAIApi } from "openai";

const IndexPage = () => {
  const ParentComponent = () => {
    const [progress] = useState(0);
    const [evaluation, setEvaluation] = useState("");

    useEffect(() => {
      const evaluateFinancialHealth = async () => {
        const configuration = new Configuration({
          apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);

        try {
          const prompt = `Given a financial health score of ${progress}, evaluate the company's condition out of 100, where 1 is the worst and 100 is the best.`;
          const completion = await openai.createCompletion({
            model: "gpt-3.5-turbo-0125",
            prompt,
            temperature: 0.5,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
          });

          setEvaluation(completion.data.choices[0].text.trim());
        } catch (error) {
          console.error("Error calling API:", error);
          setEvaluation("Failed to evaluate financial health.");
        }
      };

      if (progress > 0) {
        evaluateFinancialHealth();
      }
    }, [progress]);

    return (
      <div>
        <h2>Evaluation </h2>
        <pg>{evaluation}</pg>
      </div>
    );
  };

  function calculateRevenueGrowth(revenue, previousRevenue) {
    const growth = (revenue - previousRevenue) / previousRevenue;
    console.log(`The revenue growth is ${growth}`);
  
    return growth;
  }
  
  function calculateNetProfitMargin(profit, revenue) {
    const margin = profit / revenue;
    console.log(`The net profit margin is ${margin}`);
  
    return margin;
  }
  
  function calculateCurrentRatio(currentAssets, currentLiabilities) {
    const ratio = currentAssets / currentLiabilities;
    console.log(`The current ratio is ${ratio}`);
  
    return ratio;
  }
  
  function calculateDebtToEquityRatio(debt, equity) {
    const ratio = debt / equity;
    console.log(`The debt to equity ratio is ${ratio}`);
  
    return ratio;
  }
  
  function calculateOperatingExpensesToRevenueRatio(operatingExpenses, revenue) {
    const ratio = operatingExpenses / revenue;
    console.log(`The operating expenses to revenue ratio is ${ratio}`);
  
    return ratio;
  }
  
  function calculateVolatilityOfEarnings(earnings) {
    const volatility = earnings;
    console.log(`The volatility of earnings is ${volatility}`);
  
    return volatility;
  }
  
  function evaluate(
    revenueGrowth,
    netProfitMargin,
    currentRatio,
    debtToEquityRatio,
    operatingExpensesToRevenueRatio,
    volatilityOfEarnings
  ) {
    const finalScore =
      ((revenueGrowth + netProfitMargin + currentRatio) /
        (revenueGrowth +
          netProfitMargin +
          debtToEquityRatio +
          operatingExpensesToRevenueRatio +
          volatilityOfEarnings)) *
      100;
  
    return finalScore;
  }

  return (
    <main>
      <center>
        <img src={ImgSrc} className="icon" />
        <pg>
          <h1>Veztor</h1>
        </pg>
      </center>

      <div className="center-container">
        <div classname="titlecontainer"></div>
        <div className="circle-container">
          <CircularProgressBar
            progress={evaluate(
              calculateRevenueGrowth(5000, 600),
              calculateNetProfitMargin(20, 100),
              calculateCurrentRatio(500, 100),
              calculateDebtToEquityRatio(0, 500),
              calculateOperatingExpensesToRevenueRatio(80, 100),
              calculateVolatilityOfEarnings(50)
            )}
            animate={true}
          />
        </div>
      </div>
      <center>
        <div className="center-container">
          <div classname="titlecontainer">
            <ParentComponent />
          </div>
        </div>
      </center>
    </main>
  );
};

export default IndexPage;
