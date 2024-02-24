import React, { useState, useEffect } from 'react';
import CircularProgressBar from '../components/CircularProgressBar';
import ImgSrc from "../images/icon.png";
import './styles.css'; 
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

        return <div><h2>Evaluation </h2><pg>{evaluation}</pg></div>;
    };

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
                    <CircularProgressBar progress={78} animate={true} />
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