export default function Arrow2Stroke(props: Arrow2StrokeProps) {
  return (
    <div
      className="absolute w-[115px] left-[22.4%] right-[31.6%] top-[65.81%] bottom-[29.29%]"
    >
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 115 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 109 0.23 L 114.774 6.004 L 109 11.777 L 104.226 7.004 H 0 V 5.004 H 104.226 L 109 0.23 Z"
          fill="#FF1F00"
         />
      </svg>
    </div>
  );
}

Arrow2Stroke.defaultProps = {};

interface Arrow2StrokeProps {}

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
