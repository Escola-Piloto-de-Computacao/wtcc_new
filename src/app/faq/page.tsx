import { FAQuestions } from '@/lib/data';
import FaqBox from '@/components/core/Faq';

export default function Faq() {
    return (
        <div className="h-[81vh] lg:mx-12">
            <h1>Faq</h1>
            <FaqBox questions={FAQuestions} />
        </div>
    );
};