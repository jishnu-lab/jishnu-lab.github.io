import { useState, useRef, useEffect } from "react";
import {
  Listbox,
  Transition,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Portal,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export function MultiSelectDropdown({ label, options, selectedValues, onChange }) {
  const buttonRef = useRef(null);
  const [dropdownStyles, setDropdownStyles] = useState({ top: 0, left: 0, width: 0 });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (buttonRef.current && isOpen) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownStyles({
        top: rect.bottom + window.scrollY + 4,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [isOpen]);

  // Helper to get label from a value
  const getLabel = (value) => {
    const match = options.find((opt) => opt.value === value);
    return match ? match.label : value;
  };

  return (
    <div className="w-full sm:w-72 md:max-w-xs mb-4">
      <Listbox value={selectedValues} onChange={onChange} multiple>
        {({ open }) => {
          useEffect(() => setIsOpen(open), [open]);

          return (
            <div className="relative mt-1">
              <ListboxButton
                ref={buttonRef}
                className="relative w-full rounded-full bg-gray-100 hover:bg-green-500 hover:text-white text-black py-2 pl-3 pr-10 text-left shadow-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {selectedValues.length > 0
                  ? selectedValues.map(getLabel).join(", ")
                  : `Select ${label}`}
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </ListboxButton>
              <Transition
                as="div"
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                {open && (
                  <Portal>
                    <ListboxOptions
                      className="absolute z-50 max-h-60 overflow-auto rounded-md bg-white py-1 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none text-sm"
                      style={{
                        position: "absolute",
                        top: dropdownStyles.top,
                        left: dropdownStyles.left,
                        width: dropdownStyles.width,
                      }}
                    >
                      {options.map((option) => (
                        <ListboxOption
                          key={option.value}
                          value={option.value}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                            }`
                          }
                        >
                          {({ selected }) => (
                            <>
                              <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                {option.label}
                              </span>
                              {selected && (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                              )}
                            </>
                          )}
                        </ListboxOption>
                      ))}
                    </ListboxOptions>
                  </Portal>
                )}
              </Transition>
            </div>
          );
        }}
      </Listbox>
    </div>
  );
}
