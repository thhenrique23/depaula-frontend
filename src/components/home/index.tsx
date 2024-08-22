import React from 'react';
import style from './style.module.scss'
import Image from 'next/image';
// import { Container } from './styles';
// background - image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80');
const HomeTemplate: React.FC = () => {
    return (
        <>
            <section className="relative  bg-blueGray-50">
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                    <div className={`absolute top-0 w-full h-full bg-center bg-cover ${style.bgImage}`}>
                        <span id="blackOverlay" style={{ opacity: ".7" }} className="w-full h-full absolute bg-black"></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="">
                                    <h1 className="text-white font-semibold text-5xl">
                                        Super Sorteio
                                    </h1>
                                    <p className="mt-4 text-lg text-blueGray-200">
                                        <strong>Não fique de fora!</strong> Participe do nosso mega sorteio e aumente suas chances de ganhar com várias oportunidades imperdíveis.
                                    </p>
                                    <p className="mt-4 text-lg text-blueGray-200">
                                        Compre quantos bilhetes quiser. Quanto mais bilhetes, maiores são suas chances de ganhar!
                                    </p>
                                    <p className="mt-4 text-lg font-semibold text-blueGray-200">Confira as premiações abaixo e como participar</p>
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
                            <div className={`md:pt-12 lg:pt-4 w-full md:w-64 px-4 text-center`}>
                                <div className="relative flex h-56 flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className={`px-4 py-5 flex-auto ${style.heightImportantCard}`}>
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                            <i className="fas fa-money-bill-alt"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">30 bilhetes de R$ 1000,00</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Sorteio de 1 Silicone + Lipo ou se desejar, <span className="font-semibold">R$ 30,000 mil reais no PIX</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

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
                                        <h6 className="text-xl font-semibold">1 Silicone + Lipo</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Sorteio de 1 Silicone + Lipo ou se desejar, <span className="font-semibold">R$ 30,000 mil reais no PIX</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer className="relative  pt-8 pb-6 mt-1">
                            <div className="container mx-auto px-4">
                                <div className="flex flex-wrap items-center md:justify-between justify-center">
                                    <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                                            Mais informações: <b>Instagram:</b><a href="https://www.instagram.com/depaulapremiacoes?igsh=MXVmyYndkcG10bHBpYQ==" target="_blank" className="text-blueGray-500 hover:text-blueGray-800">@depaulapremiacoes</a>.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </section>
            </section >
        </>
    )
}

export default HomeTemplate;