"use client";

import * as React from 'react';
import { Faq } from '@/lib/definitions';
import { Collapse } from "antd";
import { CaretRightOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

interface FaqBoxProps { questions: Faq };
const FaqBox: React.FC<FaqBoxProps> = ({ questions }) => {
    const half = Math.ceil(questions.questions.length / 2);
    const firstHalf = questions.questions.slice(0, half);
    const secondHalf = questions.questions.slice(half);

    return (
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-16 mt-8 lg:mt-12 mx-20">
            <div className="space-y-10">
                <Collapse accordion size="large" expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}>
                    {firstHalf.map((question, index) => (
                        <Panel header={question.question} key={question.key}>
                            <p>{question.answer}</p>
                        </Panel>
                    ))}
                </Collapse>
            </div>
            <div className="space-y-10">
                <Collapse accordion size="large">
                    {secondHalf.map((question, index) => (
                        <Panel header={question.question} key={question.key}>
                            <p>{question.answer}</p>
                        </Panel>
                    ))}
                </Collapse>
            </div>
        </div>
    );
};

export default FaqBox;