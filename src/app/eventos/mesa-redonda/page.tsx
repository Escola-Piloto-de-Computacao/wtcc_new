import { BsFillQuestionSquareFill, BsChatLeftDotsFill } from "react-icons/bs";
import Image from "next/image";

export default function MesaRedondaPage() {
    return (
        <div className="flex flex-col items-center gap-6 mb-24 lg:mb-16">
            <div className="w-full flex flex-col items-center text-center mb-1">
                <div className="xsm:w-[66vw] sm:w-[45vw] md:w-[37vw] lg:w-[23vw] xl:w[19vw]">
                    <h1 className="w-full text-4xl font-light border-b-2 border-current pb-1">Mesa Redonda</h1>
                </div>
                <h2 className="pt-1">Perspectiva sobre o futuro do mercado de trabalho</h2>
            </div>
            <div className="flex flex-col gap-7 lg:gap-10 md:mx-4 lg:mx-0 xl:mx-20">
                <div className="flex flex-col lg:flex-row lg:ml-20 xl:ml-10 2xl:ml-20 lg:mr-16 xl:mr-8 2xl:mr-16 lg:p-7 gap-12 bg-slate-200 p-2 rounded-lg">
                    <Image
                        src="/mesa-redonda-1.jpg"
                        alt="Mesa Redonda"
                        width={1199}
                        height={900}
                        className="hidden lg:block col-span-3 lg:w-full h-full lg:h-[260px] object-cover rounded-md"
                        quality={100}
                        loading='eager'
                    />
                    <div className="flex flex-col gap-4 justify-center">
                        <div className="flex items-center gap-3">
                            <BsFillQuestionSquareFill className="text-5xl text-primary" />
                            <h3 className="text-2xl font-light">O que é?</h3>
                        </div>
                        <p className="col-span-5 flex flex-col items-center justify-center text-justify p-1 lg:p-0">
                            A mesa redonda tem como objetivo discutir o futuro do mercado de trabalho, trazendo perspectivas de alunos e professores, bem como especialistas em recursos humanos. Este evento é uma oportunidade imperdível para aqueles que desejam entender as tendências emergentes e os desafios que moldarão o ambiente profissional nos próximos anos. Os participantes terão a chance de ouvir insights valiosos de estudantes que estão ingressando no mercado de trabalho, bem como de professores que possuem uma visão ampla e atualizada das transformações no mundo profissional. Os debates abordarão questões cruciais como a digitalização, a automação, o trabalho remoto, a diversidade e inclusão, e o desenvolvimento de novas habilidades necessárias para o sucesso na era moderna.
                        </p>
                    </div>
                </div>
                <div className="flex lg:mr-24 lg:ml-16 lg:p-7 gap-12 bg-slate-200 p-2 rounded-lg">
                    <div className="flex flex-col gap-2 lg:gap-4 justify-center items-end">
                        <div className="flex items-center gap-3">
                            <h3 className="pb-1 text-2xl font-light">O que esperar?</h3>
                            <BsChatLeftDotsFill className="text-5xl text-primary" />
                        </div>
                        <p className="col-span-5 flex flex-col items-center justify-center text-justify p-1 lg:p-0">
                            Além das apresentações e discussões, haverá sessões interativas onde os participantes poderão fazer perguntas, compartilhar experiências e colaborar em soluções inovadoras. Este é um momento único para ampliar seu conhecimento, construir uma rede de contatos e se preparar para as transformações que estão por vir no mundo do trabalho. Não perca esta oportunidade de se atualizar e se engajar em um diálogo produtivo sobre o futuro do mercado de trabalho. Junte-se a nós para explorar como podemos, juntos, moldar um futuro profissional mais dinâmico, inclusivo e sustentável.                    </p>
                    </div>
                    <Image
                        src="/mesa-redonda-2.png"
                        alt="Mesa Redonda"
                        width={500}
                        height={300}
                        className="hidden lg:block col-span-3 h-[260px] object-cover rounded-md"
                        quality={100}
                        loading='eager'
                    />
                </div>
            </div>
        </div>
    );
};