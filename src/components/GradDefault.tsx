import Group2 from "assets/Group2";
import Group3 from "assets/Group3";
import Group4 from "assets/Group4";
import Group5 from "assets/Group5";
import Group6 from "assets/Group6";
import Group7 from "assets/Group7";
import Group8 from "assets/Group8";
import Group9 from "assets/Group9";
import Group10 from "assets/Group10";
import Group11 from "assets/Group11";
import Group1 from "assets/Group1";

export default function GradDefault(props: GradDefaultProps) {
  return (
    <>
      <div>
        <div className="absolute left-0 top-0 w-[1460px] h-[4156px]">
          <div className="inset-0 absolute bg-black" />
          {props.type === "TYPE1" && <Group2 />}
          {props.type === "TYPE2" && <Group3 />}
          {props.type === "TYPE3" && <Group4 />}
          {props.type === "TYPE4" && <Group5 />}
          {props.type === "TYPE5" && <Group6 />}
          {props.type === "TYPE6" && <Group7 />}
          {props.type === "TYPE7" && <Group8 />}
          {props.type === "TYPE8" && <Group9 />}
          {props.type === "TYPE9" && <Group10 />}
          {props.type === "TYPE10" && <Group11 />}
          {props.type === "TYPE" && <Group1 />}
        </div>
      </div>
    </>
  );
}

GradDefault.defaultProps = {
  type: "TYPE",
};

interface GradDefaultProps {
  type:
    | "TYPE"
    | "TYPE1"
    | "TYPE2"
    | "TYPE3"
    | "TYPE4"
    | "TYPE5"
    | "TYPE6"
    | "TYPE7"
    | "TYPE8"
    | "TYPE9"
    | "TYPE10";
}

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
