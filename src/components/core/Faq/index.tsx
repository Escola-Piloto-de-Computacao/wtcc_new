import * as React from 'react';
import { Faq } from '@/lib/definitions';
import { Collapse } from "antd";

interface FaqBoxProps { questions: Faq };
const FaqBox: React.FC<FaqBoxProps> = ({ questions }) => {
    const half = Math.ceil(questions.questions.length / 2);
    const firstHalf = questions.questions.slice(0, half);
    const secondHalf = questions.questions.slice(half);

    return (
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-20 mt-8 lg:mt-16 mx-16">
            <div className="space-y-10">
                {firstHalf.map((question, index) => (
                    <Collapse
                        key={question.key}
                        collapsible="header"
                        items={[
                            {
                                key: `${index}`,
                                label: question.question,
                                children: <p>{question.answer}</p>,
                            },
                        ]}
                    />
                ))}
            </div>
            <div className="space-y-10">
                {secondHalf.map((question, index) => (
                    <Collapse
                        key={question.key}
                        collapsible="header"
                        items={[
                            {
                                key: `${index}`,
                                label: question.question,
                                children: <p>{question.answer}</p>,
                            },
                        ]}
                    />
                ))}
            </div>
        </div>
    );
};

export default FaqBox;