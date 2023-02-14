import Arrow3 from "assets/Arrow3";

export default function Popup(props: PopupProps) {
  return (
    <div className={`text-white font-['Source_Code_Pro']`}>
      <div className="absolute w-[310px] h-[396px] left-[1069px] top-[118px]">
        <div
          className="inset-0 absolute rounded-lg bg-gradient-to-b from-[rgba(171,26,139,0.64)] to-[black]"
         />
        <div
          className="h-9 absolute gap-2.5 inline-flex items-start p-2.5 text-left font-medium left-[16.77%] right-[16.77%] w-[206px] top-[7.58%] bottom-[83.33%]"
        >
          <p className="text-xl m-0 tracking-[-0.32px] leading-[0.8]">
            Profile Settings
          </p>
        </div>
        <p
          className="h-6 absolute text-xs font-normal text-left inline m-0 w-[57px] left-[8.71%] right-[72.9%] top-[25.76%] bottom-[68.18%] tracking-[-0.32px] leading-[1.15]"
        >
          Name:
        </p>
        <p
          className="h-6 absolute text-xs font-normal text-left inline m-0 w-[83px] left-[8.71%] right-[64.52%] top-[37.12%] bottom-[56.82%] tracking-[-0.32px] leading-[1.15]"
        >
          Color:
        </p>
        <div
          className="h-3.5 absolute left-1/2 inline-flex items-start text-center font-normal w-[93px] right-[20%] top-[27.02%] bottom-[69.44%] overflow-clip"
        >
          <p className="text-xs m-0 tracking-[-0.32px] leading-[1.15]">
            Anthony
          </p>
        </div>
        <div
          className="absolute rounded left-[49.03%] right-[20%] top-[25.76%] bottom-[68.18%] bg-[rgba(217,217,217,0.12)]"
         />
        <div
          className="[box-shadow:0px_0px_0px_2px_white_inset] [box-shadow-width:2px] left-1/2 absolute rounded right-[42.26%] top-[37.12%] bottom-[56.82%] bg-[rgba(99,255,171,1)]"
         />
        <div
          className="absolute rounded left-[60.65%] right-[31.61%] top-[37.12%] bottom-[56.82%] bg-[rgba(171,26,139,1)]"
         />
        <div
          className="absolute rounded left-[72.26%] right-[20%] top-[37.12%] bottom-[56.82%] bg-[rgba(222,130,118,1)]"
         />
        <p
          className="h-6 top-1/2 absolute text-xs font-normal text-left inline m-0 w-[151px] left-[8.71%] right-[42.58%] bottom-[43.94%] tracking-[-0.32px] leading-[1.15]"
        >
          Pop-up Notifications:
        </p>
        <p
          className="h-6 absolute text-xs font-normal text-left inline m-0 w-[18px] left-[62.9%] right-[31.29%] top-[49.75%] bottom-[44.19%] tracking-[-0.32px] leading-[1.15]"
        >
          On
        </p>
        <p
          className="h-6 w-6 absolute text-xs font-normal text-left inline m-0 left-[83.23%] right-[9.03%] top-[49.75%] bottom-[44.19%] tracking-[-0.32px] leading-[1.15]"
        >
          Off
        </p>
        <Arrow3 />
      </div>
    </div>
  );
}

Popup.defaultProps = {};

interface PopupProps {}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
