export default function Track(props: TrackProps) {
  return (
    <div>
      <div
        className="h-3.5 left-0 absolute w-[167px] top-[calc(50%_-_7px_+_0.5px)]"
      >
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 167 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 160 5 H 0 V 9 H 160 V 5 Z" fill="#91D5FF" />
          <path
            d="M 160 13 C 163.314 13 166 10.314 166 7 C 166 3.686 163.314 1 160 1 C 156.686 1 154 3.686 154 7 C 154 10.314 156.686 13 160 13 Z"
            fill="white"
            stroke="#91D5FF"
            strokeWidth="2"
           />
        </svg>
      </div>
    </div>
  );
}

Track.defaultProps = {};

interface TrackProps {}

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
