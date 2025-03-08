export type ColorShade = {
  name: string;
  value: string;
  contrastText?: string;
};

export type ColorGroup = {
  name: string;
  description?: string;
  shades: ColorShade[];
};

export type ColorSystem = {
  id: string;
  name: string;
  description: string;
  url: string;
  colorGroups: ColorGroup[];
};

export const colorSystems: ColorSystem[] = [
  {
    id: "ibm-carbon",
    name: "IBM Carbon",
    description: "IBM's open-source design system for products and digital experiences",
    url: "https://carbondesignsystem.com/",
    colorGroups: [
      {
        name: "Blue",
        description: "Primary brand color",
        shades: [
          { name: "10", value: "#edf5ff" },
          { name: "20", value: "#d0e2ff" },
          { name: "30", value: "#a6c8ff" },
          { name: "40", value: "#78a9ff" },
          { name: "50", value: "#4589ff" },
          { name: "60", value: "#0f62fe" },
          { name: "70", value: "#0043ce" },
          { name: "80", value: "#002d9c" },
          { name: "90", value: "#001d6c" },
          { name: "100", value: "#001141" }
        ]
      },
      {
        name: "Gray",
        description: "Neutral colors",
        shades: [
          { name: "10", value: "#f4f4f4" },
          { name: "20", value: "#e0e0e0" },
          { name: "30", value: "#c6c6c6" },
          { name: "40", value: "#a8a8a8" },
          { name: "50", value: "#8d8d8d" },
          { name: "60", value: "#6f6f6f" },
          { name: "70", value: "#525252" },
          { name: "80", value: "#393939" },
          { name: "90", value: "#262626" },
          { name: "100", value: "#161616" }
        ]
      }
    ]
  },
  {
    id: "material-3",
    name: "Material Design 3",
    description: "Google's open-source design system",
    url: "https://m3.material.io/",
    colorGroups: [
      {
        name: "Primary",
        shades: [
          { name: "0", value: "#000000" },
          { name: "10", value: "#21005d" },
          { name: "20", value: "#381e72" },
          { name: "30", value: "#4f378b" },
          { name: "40", value: "#6750a4" },
          { name: "50", value: "#7f67be" },
          { name: "60", value: "#9a82db" },
          { name: "70", value: "#b69df8" },
          { name: "80", value: "#d0bcff" },
          { name: "90", value: "#eaddff" },
          { name: "95", value: "#f6edff" },
          { name: "99", value: "#fffbfe" },
          { name: "100", value: "#ffffff" }
        ]
      },
      {
        name: "Secondary",
        shades: [
          { name: "0", value: "#000000" },
          { name: "10", value: "#1d192b" },
          { name: "20", value: "#332d41" },
          { name: "30", value: "#4a4458" },
          { name: "40", value: "#625b71" },
          { name: "50", value: "#7a7289" },
          { name: "60", value: "#958da5" },
          { name: "70", value: "#b0a7c0" },
          { name: "80", value: "#ccc2dc" },
          { name: "90", value: "#e8def8" },
          { name: "95", value: "#f6edff" },
          { name: "99", value: "#fffbfe" },
          { name: "100", value: "#ffffff" }
        ]
      }
    ]
  },
  {
    id: "apple-design",
    name: "Apple Design",
    description: "Apple's Human Interface Guidelines colors",
    url: "https://developer.apple.com/design/human-interface-guidelines/color",
    colorGroups: [
      {
        name: "Light Mode",
        shades: [
          { name: "Red", value: "#ff3b30" },
          { name: "Orange", value: "#ff9500" },
          { name: "Yellow", value: "#ffcc00" },
          { name: "Green", value: "#34c759" },
          { name: "Mint", value: "#00c7be" },
          { name: "Teal", value: "#30b0c7" },
          { name: "Cyan", value: "#32ade6" },
          { name: "Blue", value: "#007aff" },
          { name: "Indigo", value: "#5856d6" },
          { name: "Purple", value: "#af52de" },
          { name: "Pink", value: "#ff2d55" },
          { name: "Brown", value: "#a2845e" }
        ]
      },
      {
        name: "Dark Mode",
        shades: [
          { name: "Red", value: "#ff453a" },
          { name: "Orange", value: "#ff9f0a" },
          { name: "Yellow", value: "#ffd60a" },
          { name: "Green", value: "#30d158" },
          { name: "Mint", value: "#63e6e2" },
          { name: "Teal", value: "#40c8e0" },
          { name: "Cyan", value: "#64d2ff" },
          { name: "Blue", value: "#0a84ff" },
          { name: "Indigo", value: "#5e5ce6" },
          { name: "Purple", value: "#bf5af2" },
          { name: "Pink", value: "#ff375f" },
          { name: "Brown", value: "#ac8e68" }
        ]
      }
    ]
  },
  {
    id: "radix-ui",
    name: "Radix UI Colors",
    description: "A gorgeous, accessible color system for building functional and beautiful apps",
    url: "https://www.radix-ui.com/colors",
    colorGroups: [
      {
        name: "Gray",
        shades: [
          { name: "1", value: "#fcfcfc" },
          { name: "2", value: "#f8f8f8" },
          { name: "3", value: "#f3f3f3" },
          { name: "4", value: "#ededed" },
          { name: "5", value: "#e8e8e8" },
          { name: "6", value: "#e2e2e2" },
          { name: "7", value: "#dbdbdb" },
          { name: "8", value: "#c7c7c7" },
          { name: "9", value: "#8f8f8f" },
          { name: "10", value: "#858585" },
          { name: "11", value: "#6f6f6f" },
          { name: "12", value: "#171717" }
        ]
      },
      {
        name: "Mauve",
        shades: [
          { name: "1", value: "#fdfcfd" },
          { name: "2", value: "#f9f8f9" },
          { name: "3", value: "#f4f2f4" },
          { name: "4", value: "#eeedef" },
          { name: "5", value: "#e9e8ea" },
          { name: "6", value: "#e4e2e4" },
          { name: "7", value: "#dcdbdd" },
          { name: "8", value: "#c8c7cb" },
          { name: "9", value: "#908e96" },
          { name: "10", value: "#86848d" },
          { name: "11", value: "#6f6e77" },
          { name: "12", value: "#1a1523" }
        ]
      },
      {
        name: "Blue",
        shades: [
          { name: "1", value: "#fbfdff" },
          { name: "2", value: "#f5faff" },
          { name: "3", value: "#edf6ff" },
          { name: "4", value: "#e1f0ff" },
          { name: "5", value: "#cee7fe" },
          { name: "6", value: "#b7d9f8" },
          { name: "7", value: "#96c7f2" },
          { name: "8", value: "#5eb0ef" },
          { name: "9", value: "#0091ff" },
          { name: "10", value: "#0081f1" },
          { name: "11", value: "#006adc" },
          { name: "12", value: "#00254d" }
        ]
      },
      {
        name: "Red",
        shades: [
          { name: "1", value: "#fffcfc" },
          { name: "2", value: "#fff8f8" },
          { name: "3", value: "#ffefef" },
          { name: "4", value: "#ffe5e5" },
          { name: "5", value: "#fdd8d8" },
          { name: "6", value: "#f9c6c6" },
          { name: "7", value: "#f3aeaf" },
          { name: "8", value: "#eb9091" },
          { name: "9", value: "#e5484d" },
          { name: "10", value: "#dc3d43" },
          { name: "11", value: "#cd2b31" },
          { name: "12", value: "#381316" }
        ]
      },
      {
        name: "Green",
        shades: [
          { name: "1", value: "#fbfefc" },
          { name: "2", value: "#f2fcf5" },
          { name: "3", value: "#e9f9ee" },
          { name: "4", value: "#ddf3e4" },
          { name: "5", value: "#ccebd7" },
          { name: "6", value: "#b4dfc4" },
          { name: "7", value: "#92ceac" },
          { name: "8", value: "#5bb98c" },
          { name: "9", value: "#30a46c" },
          { name: "10", value: "#299764" },
          { name: "11", value: "#18794e" },
          { name: "12", value: "#153226" }
        ]
      },
      {
        name: "Purple",
        shades: [
          { name: "1", value: "#fefcfe" },
          { name: "2", value: "#fdfaff" },
          { name: "3", value: "#f9f1fe" },
          { name: "4", value: "#f3e7fc" },
          { name: "5", value: "#eddbf9" },
          { name: "6", value: "#e3ccf4" },
          { name: "7", value: "#d3b4ed" },
          { name: "8", value: "#be93e4" },
          { name: "9", value: "#8e4ec6" },
          { name: "10", value: "#8445bc" },
          { name: "11", value: "#793aaf" },
          { name: "12", value: "#2b0e44" }
        ]
      },
      {
        name: "Amber",
        shades: [
          { name: "1", value: "#fefdfb" },
          { name: "2", value: "#fff9ed" },
          { name: "3", value: "#fff4d5" },
          { name: "4", value: "#ffecbc" },
          { name: "5", value: "#ffe3a2" },
          { name: "6", value: "#ffd386" },
          { name: "7", value: "#f3ba63" },
          { name: "8", value: "#ee9d2b" },
          { name: "9", value: "#ffb224" },
          { name: "10", value: "#ffa01c" },
          { name: "11", value: "#ad5700" },
          { name: "12", value: "#4e2009" }
        ]
      },
      {
        name: "Cyan",
        shades: [
          { name: "1", value: "#fafdfe" },
          { name: "2", value: "#f2fcfd" },
          { name: "3", value: "#e7f9fb" },
          { name: "4", value: "#d8f3f6" },
          { name: "5", value: "#c4eaef" },
          { name: "6", value: "#aadee6" },
          { name: "7", value: "#84cdda" },
          { name: "8", value: "#3db9cf" },
          { name: "9", value: "#05a2c2" },
          { name: "10", value: "#0894b3" },
          { name: "11", value: "#0c7792" },
          { name: "12", value: "#04313c" }
        ]
      },
      {
        name: "Violet",
        shades: [
          { name: "1", value: "#fdfcfe" },
          { name: "2", value: "#fbfaff" },
          { name: "3", value: "#f5f2ff" },
          { name: "4", value: "#ede9fe" },
          { name: "5", value: "#e4defc" },
          { name: "6", value: "#d7cff9" },
          { name: "7", value: "#c4b8f3" },
          { name: "8", value: "#aa99ec" },
          { name: "9", value: "#6e56cf" },
          { name: "10", value: "#644fc1" },
          { name: "11", value: "#5746af" },
          { name: "12", value: "#20134b" }
        ]
      }
    ]
  }
]; 