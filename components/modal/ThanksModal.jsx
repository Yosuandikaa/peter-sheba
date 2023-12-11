import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function MyModal({ isOpen, closeModal}) {
//   let [isOpens, setIsOpen] = useState(true)

//   function closeModal() {
//     setIsOpen(false)
//   }

//   function openModal() {
//     setIsOpen(true)
//   }

  return (
    <>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative" onClose={closeModal} style={{zIndex: 99999}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all flex flex-col gap-4 items-center">
                  <img src="/img/thank.svg" alt="thank" className="w-32 m-auto" />
            
                  <div className="mt-2 text-center">
                  <h3
                    className="text-lg font-semibold leading-6 text-gray-900 mb-1"
                  >
                    Terima Kasih
                  </h3>
                    <p className="text-sm text-gray-500 w-[85%] text-center mx-auto block">
                     Kami sangat senang atas doa dan ucapan yang anda berikan, terima kasih.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#9a4e33] px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2"
                      onClick={closeModal}
                    >
                      Oke, Sama sama !
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
