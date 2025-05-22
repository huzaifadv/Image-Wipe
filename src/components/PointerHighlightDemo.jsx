import { PointerHighlight } from "./pointer-highlight";


export function PointerHighlightDemo() {
    return (
        <>
            <div className="mx-auto container  text-center">
                <h1 className="text-[#000] sm:text-[40px] text-[30px] font-[900] mb-[15px]">
                    <span>Stunning </span>
                    <PointerHighlight>
                        <span className="inline-block px-[7px]">Quality</span>
                    </PointerHighlight>
                </h1>
            </div>
        </>
    );
}
