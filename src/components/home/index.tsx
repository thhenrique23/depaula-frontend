import React, { useState } from 'react';
import style from './style.module.scss'
import ButtonBuyTicket from '../button-buy-ticket';
import ModalFormCheckout from '../modal-form-checkout';

const HomeTemplate: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    const setOpen = (isOpen: boolean) => {
        setShowModal(isOpen);
    }

    return (
        <>
            <section className="relative  bg-blueGray-50">
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                    <div className={`absolute top-0 w-full h-full bg-center bg-cover ${style.bgImage}`}>
                        <span id="blackOverlay" style={{ opacity: ".7" }} className="w-full h-full absolute bg-black"></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
                                <div className="">
                                    <h1 className="text-white font-semibold text-5xl">
                                        Super Sorteio
                                    </h1>
                                    <p className="mt-4 text-lg text-blueGray-200">
                                        <strong>Não fique de fora!</strong> Participe do nosso mega sorteio e aumente suas chances de ganhar com várias oportunidades imperdíveis. <strong>Por apenas R$ 1,99 você já consegue participar.</strong>
                                    </p>
                                    <p className="mt-4 text-lg text-blueGray-200">
                                        Compre quantos bilhetes quiser. Quanto mais bilhetes, maiores são suas chances de ganhar!
                                    </p>
                                    <p className="mt-4 text-lg font-semibold text-blueGray-200">Confira as premiações abaixo e como participar.</p>
                                    <p className="mt-4 text-lg font-semibold text-blueGray-200">Data do sorteio: 31/08/2024 as 18:00.</p>
                                    <ButtonBuyTicket onClick={() => setOpen(true)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: 'translateZ(0px)' }}>
                        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                </div>
                <section className="pb-10 bg-blueGray-200 -mt-24">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center">
                            <div className={`w-full md:w-64 px-4 text-center`}>
                                <div className={`relative flex flex-col h-56 min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg  ${style.borderAnimated}`}>
                                    <div className={`px-4 py-5 flex-auto ${style.heightImportantCard}`}>
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                            <i className="fas fa-money-bill-alt"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">R$ 500.000,00 reais</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            É isso mesmo! Iremos sortear R$ 500,000,00 no <span className="font-semibold">primeiro prêmio.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={`md:pt-12 lg:pt-4 w-full md:w-64 px-4 text-center`}>
                                <div className="relative flex h-56 flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className={`px-4 py-5 flex-auto ${style.heightImportantCard}`}>
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                            <i className="fas fa-money-bill-alt"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">30 bilhetes de R$ 1000,00</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            30 bilhetes de, <span className="font-semibold">R$ 1000,00 cada, ou seja 30 sorteios.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={`w-full md:w-64 px-4 text-center`}>
                                <div className={`relative flex flex-col h-56 min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg  ${style.borderAnimated}`}>
                                    <div className={`px-4 py-5 flex-auto ${style.heightImportantCard}`}>
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                            <i className="fas fa-car"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">Audi A3 2017</h6>
                                        <p className="mt-2 text-blueGray-500 m-0 p-0">
                                            1  carro Audi A3 2017 em um
                                        </p>
                                        <span className="font-semibold">bilhete premiado.</span>
                                    </div>
                                </div>
                            </div>
                            <div className={`md:pt-12 lg:pt-4 w-full md:w-64 px-4 text-center`}>
                                <div className="relative flex h-56 flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className={`px-4 py-5 flex-auto ${style.heightImportantCard}`}>
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                            <i className="fas fa-stethoscope"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">1 Silicone + Lipo ou</h6>
                                        <h6 className="text-xl font-semibold">30K no PIX</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            1 Silicone + Lipo ou, <span className="font-semibold">R$ 30,000 mil reais no PIX</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`pb-10 bg-blueGray-200 ${style.containerAboutDescription}`}>
                            <h1 className="text-center text-black font-semibold text-5xl py-2">
                                Sobre o sorteio
                            </h1>
                            <div>
                                <p className={`mt-4 text-center text-lg text-black  md:p-2 sm:p-2`}>
                                    <span className={`font-semibold`}>Já imaginou ter meio milhão na conta? Ou um carro premium na garagem? </span> <br></br>
                                    Você também pode ganhar uma cirurgia de mamoplastia com lipoaspiração (silicone) ou optar por R$ 30.000,00 em dinheiro!
                                    E ainda tem a chance de levar um dos <b>30 prêmios de R$ 1.000,00 cada!</b>
                                </p>
                                <p className={`mt-4 text-lg text-center text-black `}>
                                    <span className='font-semibold'> Promoção válida em todo o território nacional, aberta a qualquer pessoa física com inscrição regular no Cadastro de Pessoas Físicas (CPF) do Ministério da Fazenda, desde que atenda a todos os requisitos descritos no REGULAMENTO.  </span>
                                    O sorteio será realizado com base na extração da Loteria Federal, considerando a combinação dos 5 dígitos do 1º prêmio e os 2 primeiros dígitos do 2º prêmio.
                                </p>
                            </div>
                            <ButtonBuyTicket onClick={() => setOpen(true)} />
                        </div>
                        <div className={`pb-10 bg-blueGray-200 ${style.containerAboutDescription}`}>
                            <h1 className="text-center text-black font-semibold text-5xl py-2">
                                Como Participar do Sorteio
                            </h1>
                            <div className={`flex justify-center align-center`}>
                                <div className={`text-left my-4 `}>
                                    <p className={`mt-4 text-lg text-black`}>
                                        Participar é super fácil! Você pode escolher quantos bilhetes quiser e adquirir quantos desejar.
                                    </p>
                                    <p className={`mt-4 text-lg text-black`}>
                                        <b>Também oferecemos pacotes promocionais com descontos progressivos para quem deseja aumentar as chances de ganhar:</b>
                                    </p>
                                    <ol className={`text-center `}>
                                        <li className={`mt-4 text-lg text-black font-semibold ${style.borderAnimatedTicket} ${style.paddingTicket}`}>10 bilhetes por R$ 9,90</li>
                                        <li className={`mt-4 text-lg text-black font-semibold ${style.borderAnimatedTicket} ${style.paddingTicket}`}>20 bilhetes por R$ 17,90</li>
                                        <li className={`mt-4 text-lg text-black font-semibold ${style.borderAnimatedTicket} ${style.paddingTicket}`}>50 bilhetes por R$ 37,50</li>
                                        <li className={`mt-4 text-lg text-black font-semibold ${style.borderAnimated} ${style.paddingTicket}`}>100 bilhetes por R$ 69,00</li>
                                        <li className={`mt-4 text-lg text-black font-semibold ${style.borderAnimatedTicket} ${style.paddingTicket}`}>250 bilhetes por R$ 147,50</li>
                                        <li className={`mt-4 text-lg text-black font-semibold ${style.borderAnimatedTicket} ${style.paddingTicket}`} >1000 bilhetes por R$ 490,00</li>
                                    </ol>
                                </div>
                            </div>
                            <ButtonBuyTicket onClick={() => setOpen(true)} />
                        </div>
                        <div className={`pb-10 bg-blueGray-200 ${style.containerAboutDescription}`}>
                            <h1 className="text-center text-black font-semibold text-5xl py-2">
                                Premiações
                            </h1>
                            <div className={`flex justify-center align-center flex-wrap`}>
                                <div className={`text-center my-4 `}>
                                    <p className={`mt-4 text-lg text-black`}>
                                        <b>Primeiro prêmio:</b>  R$ 500.000,00 (Meio milhão de reais).
                                    </p>
                                    <p className={`mt-4 text-lg text-black`}>
                                        <b>Segundo prêmio:</b>  Carro Audi A3 2017.
                                    </p>
                                    <p className={`mt-4 text-lg text-black`}>
                                        <b>Terceiro prêmio:</b>  Cirurgia de mamoplastia (Silicone) de aumento com lipoaspiração ou <br></br>o valor de R$ 30.000,00 (trinta mil reais) no lugar da cirurgia.
                                    </p>
                                    <p className={`mt-4 text-lg text-black`}>
                                        <b>Quarto prêmio:</b>  30 bilhetes de R$ 1.000,00 cada. Serão 30 sorteados que levarão 1,000,00.
                                    </p>
                                </div>
                            </div>
                            <ButtonBuyTicket onClick={() => setOpen(true)} />
                        </div>
                        <footer className="relative  pt-8 pb-6 mt-1">
                            <div className="container mx-auto px-4">
                                <div className="flex flex-wrap items-center md:justify-between justify-center">
                                    <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                                        <div className="text-sm text-blueGray-700 font-semibold py-1">
                                            Mais informações: <strong>Instagram:  </strong><a href="https://www.instagram.com/depaulapremiacoes?igsh=MXVmyYndkcG10bHBpYQ==" target="_blank" className="text-blueGray-500 hover:text-blueGray-800 font-bold">@depaulapremiacoes</a>.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </section>
            </section >
            <ModalFormCheckout open={showModal} setOpen={setOpen} />
        </>
    )
}

export default HomeTemplate;