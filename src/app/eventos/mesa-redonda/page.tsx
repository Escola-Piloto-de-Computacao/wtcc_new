import { BsFillQuestionSquareFill, BsChatLeftDotsFill } from "react-icons/bs";

export default function MesaRedondaPage() {
    return (
        <div className="h-[101vh] mt-30 flex flex-col items-center gap-6">
            <div className="w-full flex flex-col items-center text-center">
                <div className="lg:w-[19vw]">
                    <h1 className="w-full text-4xl font-light border-b-2 border-current pb-1">Mesa Redonda</h1>
                </div>
                <h2 className="pt-1">Perspectiva sobre o futuro do mercado de trabalho</h2>
            </div>
            <div className="flex flex-col gap-4 mx-4 lg:mx-20">
                <div className="flex ml-24 mr-16 p-7 gap-12">
                    <img src="/Mesa1.png" alt="Mesa Redonda" className="col-span-3 h-[260px] object-cover rounded-md" />
                    <div className="flex flex-col gap-4 justify-center">
                        <div className="flex items-center gap-3">
                            <BsFillQuestionSquareFill className="text-5xl text-primary" />
                            <h3 className="text-2xl font-light">O que é</h3>
                        </div>
                        <p className="col-span-5 flex flex-col items-center justify-center text-left">
                            A mesa redonda tem como objetivo discutir o futuro do mercado de trabalho, trazendo perspectivas de alunos e professores, bem como especialistas em recursos humanos. Este evento é uma oportunidade imperdível para aqueles que desejam entender as tendências emergentes e os desafios que moldarão o ambiente profissional nos próximos anos. Os participantes terão a chance de ouvir insights valiosos de estudantes que estão ingressando no mercado de trabalho, bem como de professores que possuem uma visão ampla e atualizada das transformações no mundo profissional. Os debates abordarão questões cruciais como a digitalização, a automação, o trabalho remoto, a diversidade e inclusão, e o desenvolvimento de novas habilidades necessárias para o sucesso na era moderna.
                        </p>
                    </div>
                </div>
                <div className="flex mr-24 ml-16 p-7 gap-12">
                    <div className="flex flex-col gap-4 justify-center items-end">
                        <div className="flex items-center gap-3">
                            <h3 className="pb-1 text-2xl font-light">O que esperar</h3>
                            <BsChatLeftDotsFill className="text-5xl text-primary" />
                        </div>
                        <p className="col-span-5 flex flex-col items-center justify-center text-right">
                            Além das apresentações e discussões, haverá sessões interativas onde os participantes poderão fazer perguntas, compartilhar experiências e colaborar em soluções inovadoras. Este é um momento único para ampliar seu conhecimento, construir uma rede de contatos e se preparar para as transformações que estão por vir no mundo do trabalho. Não perca esta oportunidade de se atualizar e se engajar em um diálogo produtivo sobre o futuro do mercado de trabalho. Junte-se a nós para explorar como podemos, juntos, moldar um futuro profissional mais dinâmico, inclusivo e sustentável.                    </p>
                    </div>
                    <img src="/Mesa2.png" alt="Mesa Redonda" className="col-span-3 h-[260px] object-cover rounded-md" />
                </div>
            </div>
        </div>
    );
};