"use client";
import { Tabs } from "./tabs";
import Products from "/src/assets/images/bags.PNG"
import People from "/src/assets/images/peoples.PNG"
import Animals from "/src/assets/images/animals.PNG"
import Cars from "/src/assets/images/cars.PNG"
import Graphics from "/src/assets/images/leafs.PNG"
import { PointerHighlightDemo } from "./PointerHighlightDemo";

export function TabsDemo() {
    const tabs = [
        {
            title: "Products",
            value: "product",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 pb-24 text-xl md:text-4xl font-bold text-white bg-[#333387]">
                    {/* <p>Product Tab</p> */}
                    <img
                        src={Products}
                        alt="dummy image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top sm:h-[60%] h-[80%] md:h-[90%] absolute bottom-6 inset-x-0 w-[90%] rounded-xl mx-auto"
                    />
                </div>
            ),
        },
        {
            title: "People",
            value: "people",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 pb-24 text-xl md:text-4xl font-bold text-white bg-[#333387]">
                    {/* <p>Services tab</p> */}
                    <img
                        src={People}
                        alt="dummy image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top sm:h-[60%] h-[75%] md:h-[90%] absolute bottom-6 inset-x-0 w-[90%] rounded-xl mx-auto"
                    />
                </div>
            ),
        },
        {
            title: "Animals",
            value: "animals",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 pb-24 text-xl md:text-4xl font-bold text-white bg-[#333387]">
                    {/* <p>Playground tab</p> */}
                    <img
                        src={Animals}
                        alt="dummy image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top sm:h-[60%] h-[75%] md:h-[90%] absolute bottom-6 inset-x-0 w-[90%] rounded-xl mx-auto"
                    />
                </div>
            ),
        },
        {
            title: "Cars",
            value: "cars",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 pb-24 text-xl md:text-4xl font-bold text-white bg-[#333387]">
                    {/* <p>Content tab</p> */}
                    <img
                        src={Cars}
                        alt="dummy image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top sm:h-[60%] h-[75%] md:h-[90%] absolute bottom-6 inset-x-0 w-[90%] rounded-xl mx-auto"
                    />
                </div>
            ),
        },
        {
            title: "Graphics",
            value: "graphics",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 pb-24 text-xl md:text-4xl font-bold text-white bg-[#333387]">
                    {/* <p>Random tab</p> */}
                    <img
                        src={Graphics}
                        alt="dummy image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top sm:h-[60%] h-[75%] md:h-[90%] absolute bottom-6 inset-x-0 w-[90%] rounded-xl mx-auto"
                    />
                </div>
            ),
        },
    ];

    return (
        <div className="h-[30rem] md:h-[40rem] relative flex flex-col max-w-5xl pr-[10px] pl-[10px] mx-auto w-full items-start justify-start">
            <div className="mx-auto mb-[20px]">
                <PointerHighlightDemo/>
            </div>
            <Tabs tabs={tabs} />
        </div>
    );
}





