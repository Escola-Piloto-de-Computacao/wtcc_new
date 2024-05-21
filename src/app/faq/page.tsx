import { FAQuestions } from '@/lib/data';
import FaqBox from '@/components/core/Faq';
import Formulario from '@/components/core/Faq/Formulario';

export default function Faq() {
    return (
        <div className="min-h-[90vh] flex flex-col">
            <div className="h-[64vh]">
                <div className="text-center space-y-1">
                    <h1 className="text-4xl">FAQ</h1>
                    <h2 className="font-light">perguntas frequentes</h2>
                </div>
                <FaqBox questions={FAQuestions} />
            </div>
            <div className="h-[95vh] text-center flex flex-col gap-8 items-center">
                <div>
                    <h2 className="text-2xl">Envie sua pergunta!</h2>
                    <p>Ainda ficou com uma dúvida e quer descobrir a resposta?</p>
                </div>
                <div className="w-[35vw] border-1 rounded-md px-5 pt-3 pb-5 shadow-lg bg-gray-100">
                    <Formulario />
                </div>
            </div>
        </div>
    );
};