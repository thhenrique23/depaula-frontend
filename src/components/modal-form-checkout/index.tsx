import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/16/solid';
import { useRouter } from 'next/router';
import React from 'react';

type ModalFormCheckoutProps = {
  setOpen: (isOpen: boolean) => void;
  open: boolean
}
const ModalFormCheckout: React.FC<ModalFormCheckoutProps> = ({ open, setOpen }) => {
  const router = useRouter();

  const formData = {
    name: 'Thales Henrique Gomes Bezerra',
    cpf: '10369488466',
    email: 'thaalesheenrique@gmail.com',
    phone: '83999031108',
    amount: 1
  }

  const renderPayment = () => {
    router.push('/mercado-pago/payment')
  }
  return <Dialog open={open} onClose={setOpen} className="relative z-10">
    <DialogBackdrop
      transition
      className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
    />
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <DialogPanel
          transition
          className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
        >
          <div className="mx-auto max-w-md px-6 py-12 sm:rounded-3xl">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Checkout</h1>
              <h3 className="font-bold">Valor: R$ 1,00 </h3>
            </div>
            <h6 className="font-bold mb-4">Preencha as informações abaixo para realizar o pagamento.</h6>
            <form id="form" noValidate>
              <div className="relative z-0 w-full mb-5">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder=" "
                  required
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                <label className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Digite seu nome</label>
                <span className="text-sm text-red-600 hidden" id="error">Name is required</span>
              </div>
              <div className="relative z-0 w-full mb-5">
                <input
                  type="text"
                  name="cpf"
                  value={formData.cpf}
                  placeholder=" "
                  required
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                <label className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Digite seu CPF</label>
                <span className="text-sm text-red-600 hidden" id="error">Name is required</span>
              </div>
              <div className="relative z-0 w-full mb-5">
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  placeholder=" "
                  required
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                <label className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Digite seu telefone</label>
                <span className="text-sm text-red-600 hidden" id="error">Name is required</span>
              </div>

              <div className="relative z-0 w-full mb-5">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder=" "
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                <label className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Digite seu email</label>
                <span className="text-sm text-red-600 hidden" id="error">Email address is required</span>
              </div>
              <div className="relative z-0 w-full mb-5">
                <input
                  type="number"
                  name="amount"
                  placeholder=" "
                  value={formData.amount}
                  className="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                <div className="absolute top-0 left-0 mt-3 ml-1 text-gray-400">$</div>
                <label className="absolute duration-300 top-3 left-5 -z-1 origin-0 text-gray-500">Quantidade de cotas</label>
                <span className="text-sm text-red-600 hidden" id="error">Amount is required</span>
              </div>
              <button
                id="button"
                type="button"
                onClick={() => renderPayment()}
                className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
              >
                Realizar pagamento
              </button>
              <button
                id="button"
                type="button"
                onClick={() => setOpen(false)}
                className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-gray-500 hover:bg-gray-600 hover:shadow-lg focus:outline-none"
              >
                Cancelar
              </button>
            </form>
          </div>
          {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
            >
              Deactivate
            </button>
            <button
              type="button"
              data-autofocus
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              Cancel
            </button>
          </div> */}
        </DialogPanel>
      </div>
    </div>
  </Dialog>;
}

export default ModalFormCheckout;