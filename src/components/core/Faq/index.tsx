"use client";

import * as React from 'react';
import { Faq } from '@/lib/definitions';
import { Collapse } from "antd";

const { Panel } = Collapse;

interface FaqBoxProps { questions: Faq };
const FaqBox: React.FC<FaqBoxProps> = ({ questions }) => {
    const half = Math.ceil(questions.questions.length / 2);
    const firstHalf = questions.questions.slice(0, half);
    const secondHalf = questions.questions.slice(half);

    return (
        <div className="lg:grid lg:grid-cols-2 gap-4 lg:gap-16 mt-8 lg:mt-12 mx-4 lg:mx-20">
            <div className="hidden lg:block space-y-10">
                <Collapse accordion size="large">
                    {firstHalf.map((question) => (
                        <Panel header={question.question} key={question.key}>
                            <p>{question.answer}</p>
                        </Panel>
                    ))}
                </Collapse>
            </div>
            <div className="hidden lg:block space-y-10">
                <Collapse accordion size="large">
                    {secondHalf.map((question) => (
                        <Panel header={question.question} key={question.key}>
                            <p>{question.answer}</p>
                        </Panel>
                    ))}
                </Collapse>
            </div>
            <Collapse accordion size="large" className="lg:hidden">
                {questions.questions.map((question) => (
                    <Panel header={question.question} key={question.key}>
                        <p>{question.answer}</p>
                    </Panel>
                ))}
            </Collapse>
        </div >
    );
};

export default FaqBox;