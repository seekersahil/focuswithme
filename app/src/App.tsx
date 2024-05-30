import AnimationWrapper from "./components/AnimationWrapper";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { animations, classNames } from "./App.helpers";
import useApp from "./App.hooks";

export default function Home() {
  const { selectAnimation, selectedAnimationOption, selectedAnimation } =
    useApp();
  return (
    <main className="flex flex-col items-center gap-20 pt-4 md:px-24 md:py-12 lg:pt-24 min-h-screen">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Focus with me
        </p>

        <div className="fixed bottom-0 left-0 flex h-20 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 px-8 py-4 lg:pointer-events-auto lg:p-0"
            href="https://radiau.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Radiau by seekersahil
          </a>
        </div>
      </div>

      <div className="relative flex flex-col w-full justify-start items-center h-full flex-auto">
        <div className="flex flex-col justify-center items-center gap-4 h-full">
          <div className="pointer-events-none flex place-items-center lg:pointer-events-auto h-full">
            Animation:
            <Menu as="div" className="relative inline-block text-left pl-2">
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-900">
                  {selectedAnimationOption.label}
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </MenuButton>
              </div>

              <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {animations.map((animation) => (
                      <MenuItem key={`animation-${animation.value}`}>
                        {({ focus }) => (
                          // eslint-disable-next-line jsx-a11y/anchor-is-valid
                          <a
                            onClick={() => selectAnimation(animation)}
                            className={classNames(
                              focus ? "bg-gray-500 text-gray-50" : "text-white",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            {animation.label}
                          </a>
                        )}
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Transition>
            </Menu>
          </div>
          <p className="pointer-events-none flex place-items-center lg:pointer-events-auto">
            Music: <span className="font-bold pl-2">Breathing Relaxer</span>
          </p>
        </div>
        <div className="flex-auto w-full h-full">
          <AnimationWrapper animation={selectedAnimation} />
        </div>
      </div>
    </main>
  );
}
