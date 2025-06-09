import { Info } from "lucide-react";

export type Step = {
  step: number;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
};

export interface StepModalProps {
  isOpen: boolean;
  onClose: () => void;
  step: Step | null;
}

export function StepModal({ isOpen, onClose, step }: StepModalProps) {
  if (!isOpen || !step) return null;

  return (
    <div
      className="relative z-50"
      aria-labelledby="dialog-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div
                  className={`mx-auto flex size-12 shrink-0 items-center justify-center rounded-full ${step.bgColor} bg-opacity-20 sm:mx-0 sm:size-10`}
                >
                  <Info
                    className={`size-6 ${step.iconColor}`}
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className={`text-[20px] font-semibold leading-[28px] ${step.iconColor}`}
                    id="dialog-title"
                  >
                    Passo {step.step}: {step.title}
                  </h3>
                  <div className="mt-2">
                    <p className="text-[16px] font-normal leading-[24px] text-[#717171]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={onClose}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
