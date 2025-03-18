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
  image: string;
};

export const colorSystems: ColorSystem[] = [
  {
    id: "ibm-carbon",
    name: "IBM Carbon",
    description: "IBM's open-source design system for products and digital experiences",
    url: "",
    image: "./images/IBM carbon.png",
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
      },
      {
        name: "Green palette",
        description: "IBM Green colors",
        shades: [
          {name: "10", value: "#defbe6"},
          {name: "20", value: "#A7F0BA"},
          {name: "30", value: "#6fdc8c"}
          
        ]
      }
    ]
  },
  {
    id: "material-3",
    name: "Material Design 3",
    description: "Google's open-source design system",
    url: "",
    image: "./images/material.png",
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
    url: "",
    image: "./images/Apple.png",
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
    image: "./images/radix.png",
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
          { name: "8", value: "#bcbac7" },
          { name: "9", value: "#8e8c99" },
          { name: "10", value: "#84828e" },
          { name: "11", value: "#65636d" },
          { name: "12", value: "#211f26" }
        ]
      },
      {
        name: "Slate",
        shades: [
          { name: "1", value: "#fcfcfd" },
          { name: "2", value: "#f8f9fa" },
          { name: "3", value: "#f1f3f5" },
          { name: "4", value: "#eceef0" },
          { name: "5", value: "#e6e8eb" },
          { name: "6", value: "#dfe3e6" },
          { name: "7", value: "#d7dbdf" },
          { name: "8", value: "#c1c8cd" },
          { name: "9", value: "#889096" },
          { name: "10", value: "#7e868c" },
          { name: "11", value: "#687076" },
          { name: "12", value: "#11181c" }
        ]
      },
      {
        name: "Sage",
        shades: [
          { name: "1", value: "#fbfdfc" },
          { name: "2", value: "#f8faf9" },
          { name: "3", value: "#f1f4f3" },
          { name: "4", value: "#ecefed" },
          { name: "5", value: "#e6e9e8" },
          { name: "6", value: "#dfe4e2" },
          { name: "7", value: "#d7dcda" },
          { name: "8", value: "#c2c9c6" },
          { name: "9", value: "#8a918e" },
          { name: "10", value: "#808784" },
          { name: "11", value: "#6a736f" },
          { name: "12", value: "#141917" }
        ]
      },
      {
        name: "Olive",
        shades: [
          { name: "1", value: "#fcfdfc" },
          { name: "2", value: "#f8faf8" },
          { name: "3", value: "#f2f4f2" },
          { name: "4", value: "#ecefec" },
          { name: "5", value: "#e6e9e6" },
          { name: "6", value: "#dfe4df" },
          { name: "7", value: "#d8ddd7" },
          { name: "8", value: "#c3c8c2" },
          { name: "9", value: "#8b918a" },
          { name: "10", value: "#818780" },
          { name: "11", value: "#6b726a" },
          { name: "12", value: "#141e12" }
        ]
      },
      {
        name: "Sand",
        shades: [
          { name: "1", value: "#fdfdfc" },
          { name: "2", value: "#f9f9f8" },
          { name: "3", value: "#f3f3f2" },
          { name: "4", value: "#eeeeec" },
          { name: "5", value: "#e9e9e6" },
          { name: "6", value: "#e3e3e0" },
          { name: "7", value: "#dbdbd7" },
          { name: "8", value: "#c8c7c1" },
          { name: "9", value: "#90908c" },
          { name: "10", value: "#868682" },
          { name: "11", value: "#706f6c" },
          { name: "12", value: "#1b1b18" }
        ]
      },
      {
        name: "Tomato",
        shades: [
          { name: "1", value: "#fffcfc" },
          { name: "2", value: "#fff8f7" },
          { name: "3", value: "#fff0ee" },
          { name: "4", value: "#ffe6e2" },
          { name: "5", value: "#fdd8d3" },
          { name: "6", value: "#fac7be" },
          { name: "7", value: "#f3b0a2" },
          { name: "8", value: "#ea9280" },
          { name: "9", value: "#e54d2e" },
          { name: "10", value: "#db4324" },
          { name: "11", value: "#ca3214" },
          { name: "12", value: "#341711" }
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
        name: "Ruby",
        shades: [
          { name: "1", value: "#fffcfd" },
          { name: "2", value: "#fff7f9" },
          { name: "3", value: "#feeff3" },
          { name: "4", value: "#fce5eb" },
          { name: "5", value: "#f9d8e2" },
          { name: "6", value: "#f4c6d7" },
          { name: "7", value: "#edadc8" },
          { name: "8", value: "#e58fb1" },
          { name: "9", value: "#e93d82" },
          { name: "10", value: "#df3478" },
          { name: "11", value: "#cb1d63" },
          { name: "12", value: "#43121d" }
        ]
      },
      {
        name: "Crimson",
        shades: [
          { name: "1", value: "#fffcfd" },
          { name: "2", value: "#fff7fb" },
          { name: "3", value: "#feeff6" },
          { name: "4", value: "#fce5f0" },
          { name: "5", value: "#f9d8e7" },
          { name: "6", value: "#f4c6db" },
          { name: "7", value: "#edadcc" },
          { name: "8", value: "#e58fb6" },
          { name: "9", value: "#e93d82" },
          { name: "10", value: "#df3478" },
          { name: "11", value: "#cb1d63" },
          { name: "12", value: "#43121d" }
        ]
      },
      {
        name: "Pink",
        shades: [
          { name: "1", value: "#fffcfe" },
          { name: "2", value: "#fff7fc" },
          { name: "3", value: "#feeef8" },
          { name: "4", value: "#fce5f3" },
          { name: "5", value: "#f9d8ec" },
          { name: "6", value: "#f3c6e2" },
          { name: "7", value: "#ecadd4" },
          { name: "8", value: "#e38ec3" },
          { name: "9", value: "#d6409f" },
          { name: "10", value: "#d23197" },
          { name: "11", value: "#cd1d8d" },
          { name: "12", value: "#3b0a2a" }
        ]
      },
      {
        name: "Plum",
        shades: [
          { name: "1", value: "#fefcff" },
          { name: "2", value: "#fdf8fe" },
          { name: "3", value: "#f9f1fe" },
          { name: "4", value: "#f5e8fc" },
          { name: "5", value: "#efdbf9" },
          { name: "6", value: "#e7ccf4" },
          { name: "7", value: "#dcb8ee" },
          { name: "8", value: "#cda0e5" },
          { name: "9", value: "#ab4aba" },
          { name: "10", value: "#a144af" },
          { name: "11", value: "#953ea3" },
          { name: "12", value: "#341237" }
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
      },
      {
        name: "Iris",
        shades: [
          { name: "1", value: "#fdfdff" },
          { name: "2", value: "#fafbff" },
          { name: "3", value: "#f5f7ff" },
          { name: "4", value: "#eff1ff" },
          { name: "5", value: "#e5e9ff" },
          { name: "6", value: "#d9e0ff" },
          { name: "7", value: "#c6d1ff" },
          { name: "8", value: "#aabbff" },
          { name: "9", value: "#5b5bd6" },
          { name: "10", value: "#5151cd" },
          { name: "11", value: "#4646c6" },
          { name: "12", value: "#1d1d4d" }
        ]
      },
      {
        name: "Indigo",
        shades: [
          { name: "1", value: "#fdfdfe" },
          { name: "2", value: "#f8faff" },
          { name: "3", value: "#f0f4ff" },
          { name: "4", value: "#e6edfe" },
          { name: "5", value: "#d9e2fc" },
          { name: "6", value: "#c6d4f9" },
          { name: "7", value: "#aec0f5" },
          { name: "8", value: "#8da4ef" },
          { name: "9", value: "#3e63dd" },
          { name: "10", value: "#3a5ccc" },
          { name: "11", value: "#3451b2" },
          { name: "12", value: "#101d46" }
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
        name: "Teal",
        shades: [
          { name: "1", value: "#fafefd" },
          { name: "2", value: "#f1fcfa" },
          { name: "3", value: "#e7f9f5" },
          { name: "4", value: "#d9f3ee" },
          { name: "5", value: "#c7ebe5" },
          { name: "6", value: "#afdfd7" },
          { name: "7", value: "#8dcec3" },
          { name: "8", value: "#53b9ab" },
          { name: "9", value: "#12a594" },
          { name: "10", value: "#0e9888" },
          { name: "11", value: "#067a6f" },
          { name: "12", value: "#10302b" }
        ]
      },
      {
        name: "Jade",
        shades: [
          { name: "1", value: "#fbfefd" },
          { name: "2", value: "#f2fcf8" },
          { name: "3", value: "#e8f8f3" },
          { name: "4", value: "#ddf3ec" },
          { name: "5", value: "#ceece2" },
          { name: "6", value: "#b9e2d6" },
          { name: "7", value: "#9dd4c5" },
          { name: "8", value: "#72c2af" },
          { name: "9", value: "#30a58e" },
          { name: "10", value: "#2b9a81" },
          { name: "11", value: "#1d8a6e" },
          { name: "12", value: "#153b35" }
        ]
      },
      {
        name: "Grass",
        shades: [
          { name: "1", value: "#fbfefb" },
          { name: "2", value: "#f3fcf3" },
          { name: "3", value: "#ebf9eb" },
          { name: "4", value: "#dff3df" },
          { name: "5", value: "#ceebcf" },
          { name: "6", value: "#b7dfba" },
          { name: "7", value: "#97cf9c" },
          { name: "8", value: "#65ba75" },
          { name: "9", value: "#46a758" },
          { name: "10", value: "#3d9a50" },
          { name: "11", value: "#297c3b" },
          { name: "12", value: "#162919" }
        ]
      },
      {
        name: "Bronze",
        shades: [
          { name: "1", value: "#fdfcfc" },
          { name: "2", value: "#fdf8f6" },
          { name: "3", value: "#f8f1ee" },
          { name: "4", value: "#f3e9e5" },
          { name: "5", value: "#ece0db" },
          { name: "6", value: "#e4d6cd" },
          { name: "7", value: "#dcc9bd" },
          { name: "8", value: "#cbb7a8" },
          { name: "9", value: "#a18072" },
          { name: "10", value: "#957160" },
          { name: "11", value: "#7d5e4d" },
          { name: "12", value: "#3e2f28" }
        ]
      },
      {
        name: "Gold",
        shades: [
          { name: "1", value: "#fdfdfc" },
          { name: "2", value: "#faf9f4" },
          { name: "3", value: "#f5f2e9" },
          { name: "4", value: "#f0ebdd" },
          { name: "5", value: "#eae1ce" },
          { name: "6", value: "#e2d7be" },
          { name: "7", value: "#d8ccac" },
          { name: "8", value: "#cebf95" },
          { name: "9", value: "#978b63" },
          { name: "10", value: "#8c825a" },
          { name: "11", value: "#776d41" },
          { name: "12", value: "#3b3520" }
        ]
      },
      {
        name: "Brown",
        shades: [
          { name: "1", value: "#fefdfc" },
          { name: "2", value: "#fcf9f6" },
          { name: "3", value: "#f8f1ec" },
          { name: "4", value: "#f4e9e1" },
          { name: "5", value: "#eddfd3" },
          { name: "6", value: "#e5d4c4" },
          { name: "7", value: "#dcc6b3" },
          { name: "8", value: "#cdb49a" },
          { name: "9", value: "#a18072" },
          { name: "10", value: "#967566" },
          { name: "11", value: "#7c5e54" },
          { name: "12", value: "#3e2f28" }
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
        name: "Orange",
        shades: [
          { name: "1", value: "#fefcfb" },
          { name: "2", value: "#fff8f4" },
          { name: "3", value: "#ffedd3" },
          { name: "4", value: "#ffe0c2" },
          { name: "5", value: "#ffd3ab" },
          { name: "6", value: "#ffc392" },
          { name: "7", value: "#ffad6d" },
          { name: "8", value: "#fa934e" },
          { name: "9", value: "#f76808" },
          { name: "10", value: "#ed5f00" },
          { name: "11", value: "#bd4b00" },
          { name: "12", value: "#451e11" }
        ]
      },
      {
        name: "Yellow",
        shades: [
          { name: "1", value: "#fdfdf9" },
          { name: "2", value: "#fffce8" },
          { name: "3", value: "#fffbd1" },
          { name: "4", value: "#fff8bb" },
          { name: "5", value: "#fef2a4" },
          { name: "6", value: "#f9e68c" },
          { name: "7", value: "#efd36c" },
          { name: "8", value: "#ebbc00" },
          { name: "9", value: "#f5d90a" },
          { name: "10", value: "#f7ce00" },
          { name: "11", value: "#946800" },
          { name: "12", value: "#35290f" }
        ]
      },
      {
        name: "Lime",
        shades: [
          { name: "1", value: "#fcfdfa" },
          { name: "2", value: "#f9fbe7" },
          { name: "3", value: "#f1f8d2" },
          { name: "4", value: "#e9f4bd" },
          { name: "5", value: "#dfeca6" },
          { name: "6", value: "#d3e194" },
          { name: "7", value: "#c3d181" },
          { name: "8", value: "#a9bc6e" },
          { name: "9", value: "#8cbc1e" },
          { name: "10", value: "#82b218" },
          { name: "11", value: "#62921d" },
          { name: "12", value: "#2a3514" }
        ]
      },
      {
        name: "Mint",
        shades: [
          { name: "1", value: "#f9fefd" },
          { name: "2", value: "#effefa" },
          { name: "3", value: "#e1fbf4" },
          { name: "4", value: "#d2f7ed" },
          { name: "5", value: "#c0efe3" },
          { name: "6", value: "#a5e4d4" },
          { name: "7", value: "#7ed7c1" },
          { name: "8", value: "#40c4aa" },
          { name: "9", value: "#70e1c8" },
          { name: "10", value: "#3dd9b4" },
          { name: "11", value: "#26bc98" },
          { name: "12", value: "#124b45" }
        ]
      },
      {
        name: "Sky",
        shades: [
          { name: "1", value: "#f9feff" },
          { name: "2", value: "#f1fafd" },
          { name: "3", value: "#e6f6fc" },
          { name: "4", value: "#d5f0fa" },
          { name: "5", value: "#c1e8f7" },
          { name: "6", value: "#a9def2" },
          { name: "7", value: "#86d1ec" },
          { name: "8", value: "#4cbfe3" },
          { name: "9", value: "#0ba2dc" },
          { name: "10", value: "#0396cf" },
          { name: "11", value: "#0078a1" },
          { name: "12", value: "#003046" }
        ]
      },
      {
        name: "Black",
        shades: [
          { name: "1", value: "#111111" },
          { name: "2", value: "#191919" },
          { name: "3", value: "#222222" },
          { name: "4", value: "#2a2a2a" },
          { name: "5", value: "#313131" },
          { name: "6", value: "#3a3a3a" },
          { name: "7", value: "#484848" },
          { name: "8", value: "#606060" },
          { name: "9", value: "#6e6e6e" },
          { name: "10", value: "#7b7b7b" },
          { name: "11", value: "#b4b4b4" },
          { name: "12", value: "#eeeeee" }
        ]
      },
      {
        name: "White",
        shades: [
          { name: "1", value: "#ffffff" },
          { name: "2", value: "#fcfcfc" },
          { name: "3", value: "#f9f9f9" },
          { name: "4", value: "#f4f4f4" },
          { name: "5", value: "#eeeeee" },
          { name: "6", value: "#e9e9e9" },
          { name: "7", value: "#e3e3e3" },
          { name: "8", value: "#d8d8d8" },
          { name: "9", value: "#c5c5c5" },
          { name: "10", value: "#bbbbbb" },
          { name: "11", value: "#8f8f8f" },
          { name: "12", value: "#111111" }
        ]
      }
    ]
  },
  {
    id: "atlassian",
    name: "Atlassian Design System",
    description: "The official color palette from Atlassian's design system",
    url: "",
    image: "./images/atlassian.svg",
    colorGroups: [
      {
        name: "Blue",
        description: "Atlassian's primary brand color",
        shades: [
          { name: "100", value: "#EAE6FF" },
          { name: "200", value: "#C0B6F2" },
          { name: "300", value: "#998DD9" },
          { name: "400", value: "#8777D9" },
          { name: "500", value: "#6554C0" },
          { name: "600", value: "#5243AA" },
          { name: "700", value: "#403294" },
          { name: "800", value: "#322A7C" },
          { name: "900", value: "#292169" }
        ]
      },
      {
        name: "Red",
        description: "Error and danger messaging",
        shades: [
          { name: "100", value: "#FFEBE6" },
          { name: "200", value: "#FFBDAD" },
          { name: "300", value: "#FF8F73" },
          { name: "400", value: "#FF7452" },
          { name: "500", value: "#FF5630" },
          { name: "600", value: "#E34933" },
          { name: "700", value: "#BF2600" },
          { name: "800", value: "#94241E" },
          { name: "900", value: "#7A1E17" }
        ]
      },
      {
        name: "Green",
        description: "Success messaging",
        shades: [
          { name: "100", value: "#E3FCEF" },
          { name: "200", value: "#ABF5D1" },
          { name: "300", value: "#79F2C0" },
          { name: "400", value: "#57D9A3" },
          { name: "500", value: "#36B37E" },
          { name: "600", value: "#00875A" },
          { name: "700", value: "#006644" },
          { name: "800", value: "#00533B" },
          { name: "900", value: "#004233" }
        ]
      }
    ]
  },
  {
    id: "stripe",
    name: "Stripe Colors",
    description: "Colors from Stripe's visual design system",
    url: "",
    image: "./images/stripe.svg",
    colorGroups: [
      {
        name: "Primary",
        shades: [
          { name: "Primary", value: "#635BFF" },
          { name: "Light", value: "#A5AFFB" },
          { name: "Dark", value: "#4C44EF" },
          { name: "Gradient Start", value: "#7A73FF" },
          { name: "Gradient End", value: "#635BFF" }
        ]
      },
      {
        name: "UI",
        shades: [
          { name: "Background", value: "#FFFFFF" },
          { name: "Foreground", value: "#F7FAFC" },
          { name: "Border", value: "#E3E8EE" },
          { name: "Subtle Text", value: "#697386" },
          { name: "Text", value: "#425466" },
          { name: "Dark Text", value: "#1A1F36" }
        ]
      },
      {
        name: "Status",
        shades: [
          { name: "Success", value: "#3ECF8E" },
          { name: "Warning", value: "#FFB932" },
          { name: "Error", value: "#EF4444" },
          { name: "Info", value: "#3D8AFF" }
        ]
      }
    ]
  },
  {
    id: "bootstrap",
    name: "Bootstrap 5",
    description: "The official color system from Bootstrap 5",
    url: "",
    image: "./images/bootstrap.svg",
    colorGroups: [
      {
        name: "Core Colors",
        shades: [
          { name: "Primary", value: "#0d6efd" },
          { name: "Secondary", value: "#6c757d" },
          { name: "Success", value: "#198754" },
          { name: "Danger", value: "#dc3545" },
          { name: "Warning", value: "#ffc107" },
          { name: "Info", value: "#0dcaf0" },
          { name: "Light", value: "#f8f9fa" },
          { name: "Dark", value: "#212529" }
        ]
      },
      {
        name: "Blue",
        shades: [
          { name: "100", value: "#cfe2ff" },
          { name: "200", value: "#9ec5fe" },
          { name: "300", value: "#6ea8fe" },
          { name: "400", value: "#3d8bfd" },
          { name: "500", value: "#0d6efd" },
          { name: "600", value: "#0a58ca" },
          { name: "700", value: "#084298" },
          { name: "800", value: "#052c65" },
          { name: "900", value: "#031633" }
        ]
      },
      {
        name: "Indigo",
        shades: [
          { name: "100", value: "#e0cffc" },
          { name: "200", value: "#c29ffa" },
          { name: "300", value: "#a370f7" },
          { name: "400", value: "#8540f5" },
          { name: "500", value: "#6610f2" },
          { name: "600", value: "#520dc2" },
          { name: "700", value: "#3d0a91" },
          { name: "800", value: "#290661" },
          { name: "900", value: "#140330" }
        ]
      },
      {
        name: "Purple",
        shades: [
          { name: "100", value: "#e2d9f3" },
          { name: "200", value: "#c5b3e6" },
          { name: "300", value: "#a98eda" },
          { name: "400", value: "#8c68cd" },
          { name: "500", value: "#6f42c1" },
          { name: "600", value: "#59359a" },
          { name: "700", value: "#432874" },
          { name: "800", value: "#2c1a4d" },
          { name: "900", value: "#160d27" }
        ]
      },
      {
        name: "Pink",
        shades: [
          { name: "100", value: "#f7d6e6" },
          { name: "200", value: "#efadce" },
          { name: "300", value: "#e685b5" },
          { name: "400", value: "#de5c9d" },
          { name: "500", value: "#d63384" },
          { name: "600", value: "#ab296a" },
          { name: "700", value: "#801f4f" },
          { name: "800", value: "#561435" },
          { name: "900", value: "#2b0a1a" }
        ]
      },
      {
        name: "Red",
        shades: [
          { name: "100", value: "#f8d7da" },
          { name: "200", value: "#f1aeb5" },
          { name: "300", value: "#ea868f" },
          { name: "400", value: "#e35d6a" },
          { name: "500", value: "#dc3545" },
          { name: "600", value: "#b02a37" },
          { name: "700", value: "#842029" },
          { name: "800", value: "#58151c" },
          { name: "900", value: "#2c0b0e" }
        ]
      },
      {
        name: "Orange",
        shades: [
          { name: "100", value: "#ffe5d0" },
          { name: "200", value: "#fecba1" },
          { name: "300", value: "#feb272" },
          { name: "400", value: "#fd9843" },
          { name: "500", value: "#fd7e14" },
          { name: "600", value: "#ca6510" },
          { name: "700", value: "#984c0c" },
          { name: "800", value: "#653208" },
          { name: "900", value: "#331904" }
        ]
      },
      {
        name: "Yellow",
        shades: [
          { name: "100", value: "#fff3cd" },
          { name: "200", value: "#ffe69c" },
          { name: "300", value: "#ffda6a" },
          { name: "400", value: "#ffcd39" },
          { name: "500", value: "#ffc107" },
          { name: "600", value: "#cc9a06" },
          { name: "700", value: "#997404" },
          { name: "800", value: "#664d03" },
          { name: "900", value: "#332701" }
        ]
      },
      {
        name: "Green",
        shades: [
          { name: "100", value: "#d1e7dd" },
          { name: "200", value: "#a3cfbb" },
          { name: "300", value: "#75b798" },
          { name: "400", value: "#479f76" },
          { name: "500", value: "#198754" },
          { name: "600", value: "#146c43" },
          { name: "700", value: "#0f5132" },
          { name: "800", value: "#0a3622" },
          { name: "900", value: "#051b11" }
        ]
      },
      {
        name: "Teal",
        shades: [
          { name: "100", value: "#d2f4ea" },
          { name: "200", value: "#a6e9d5" },
          { name: "300", value: "#79dfc1" },
          { name: "400", value: "#4dd4ac" },
          { name: "500", value: "#20c997" },
          { name: "600", value: "#1aa078" },
          { name: "700", value: "#137858" },
          { name: "800", value: "#0d5039" },
          { name: "900", value: "#06281b" }
        ]
      },
      {
        name: "Cyan",
        shades: [
          { name: "100", value: "#cff4fc" },
          { name: "200", value: "#9eeaf9" },
          { name: "300", value: "#6edff6" },
          { name: "400", value: "#3dd5f3" },
          { name: "500", value: "#0dcaf0" },
          { name: "600", value: "#0aa2c0" },
          { name: "700", value: "#087990" },
          { name: "800", value: "#055160" },
          { name: "900", value: "#032830" }
        ]
      },
      {
        name: "Gray",
        shades: [
          { name: "100", value: "#f8f9fa" },
          { name: "200", value: "#e9ecef" },
          { name: "300", value: "#dee2e6" },
          { name: "400", value: "#ced4da" },
          { name: "500", value: "#adb5bd" },
          { name: "600", value: "#6c757d" },
          { name: "700", value: "#495057" },
          { name: "800", value: "#343a40" },
          { name: "900", value: "#212529" }
        ]
      }
    ]
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    description: "The default color palette from Tailwind CSS",
    url: "",
    image: "./images/tailwind.svg",
    colorGroups: [
      {
        name: "Slate",
        shades: [
          { name: "50", value: "#f8fafc" },
          { name: "100", value: "#f1f5f9" },
          { name: "200", value: "#e2e8f0" },
          { name: "300", value: "#cbd5e1" },
          { name: "400", value: "#94a3b8" },
          { name: "500", value: "#64748b" },
          { name: "600", value: "#475569" },
          { name: "700", value: "#334155" },
          { name: "800", value: "#1e293b" },
          { name: "900", value: "#0f172a" },
          { name: "950", value: "#020617" }
        ]
      },
      {
        name: "Blue",
        shades: [
          { name: "50", value: "#eff6ff" },
          { name: "100", value: "#dbeafe" },
          { name: "200", value: "#bfdbfe" },
          { name: "300", value: "#93c5fd" },
          { name: "400", value: "#60a5fa" },
          { name: "500", value: "#3b82f6" },
          { name: "600", value: "#2563eb" },
          { name: "700", value: "#1d4ed8" },
          { name: "800", value: "#1e40af" },
          { name: "900", value: "#1e3a8a" },
          { name: "950", value: "#172554" }
        ]
      },
      {
        name: "Green",
        shades: [
          { name: "50", value: "#f0fdf4" },
          { name: "100", value: "#dcfce7" },
          { name: "200", value: "#bbf7d0" },
          { name: "300", value: "#86efac" },
          { name: "400", value: "#4ade80" },
          { name: "500", value: "#22c55e" },
          { name: "600", value: "#16a34a" },
          { name: "700", value: "#15803d" },
          { name: "800", value: "#166534" },
          { name: "900", value: "#14532d" },
          { name: "950", value: "#052e16" }
        ]
      }
    ]
  },
  {
    id: "untitled-ui",
    name: "Untitled UI",
    description: "A beautiful color system from the Untitled UI design kit",
    url: "",
    image: "./images/untitled.svg",
    colorGroups: [
      {
        name: "Gray",
        shades: [
          { name: "25", value: "#FCFCFD" },
          { name: "50", value: "#F9FAFB" },
          { name: "100", value: "#F2F4F7" },
          { name: "200", value: "#EAECF0" },
          { name: "300", value: "#D0D5DD" },
          { name: "400", value: "#98A2B3" },
          { name: "500", value: "#667085" },
          { name: "600", value: "#475467" },
          { name: "700", value: "#344054" },
          { name: "800", value: "#1D2939" },
          { name: "900", value: "#101828" }
        ]
      },
      {
        name: "Primary",
        shades: [
          { name: "25", value: "#FCFAFF" },
          { name: "50", value: "#F9F5FF" },
          { name: "100", value: "#F4EBFF" },
          { name: "200", value: "#E9D7FE" },
          { name: "300", value: "#D6BBFB" },
          { name: "400", value: "#B692F6" },
          { name: "500", value: "#9E77ED" },
          { name: "600", value: "#7F56D9" },
          { name: "700", value: "#6941C6" },
          { name: "800", value: "#53389E" },
          { name: "900", value: "#42307D" }
        ]
      },
      {
        name: "Error",
        shades: [
          { name: "25", value: "#FFFBFA" },
          { name: "50", value: "#FEF3F2" },
          { name: "100", value: "#FEE4E2" },
          { name: "200", value: "#FECDCA" },
          { name: "300", value: "#FDA29B" },
          { name: "400", value: "#F97066" },
          { name: "500", value: "#F04438" },
          { name: "600", value: "#D92D20" },
          { name: "700", value: "#B42318" },
          { name: "800", value: "#912018" },
          { name: "900", value: "#7A271A" }
        ]
      }
    ]
  },
  {
    id: "kromatika",
    name: "Kromatika",
    description: "A vibrant and accessible color system for digital products",
    url: "",
    image: "",
    colorGroups: [
      {
        name: "Primary",
        shades: [
          { name: "50", value: "#E6F7FF" },
          { name: "100", value: "#BAE7FF" },
          { name: "200", value: "#91D5FF" },
          { name: "300", value: "#69C0FF" },
          { name: "400", value: "#40A9FF" },
          { name: "500", value: "#1890FF" },
          { name: "600", value: "#096DD9" },
          { name: "700", value: "#0050B3" },
          { name: "800", value: "#003A8C" },
          { name: "900", value: "#002766" }
        ]
      },
      {
        name: "Magenta",
        shades: [
          { name: "50", value: "#FFF0F6" },
          { name: "100", value: "#FFD6E7" },
          { name: "200", value: "#FFADD2" },
          { name: "300", value: "#FF85C0" },
          { name: "400", value: "#F759AB" },
          { name: "500", value: "#EB2F96" },
          { name: "600", value: "#C41D7F" },
          { name: "700", value: "#9E1068" },
          { name: "800", value: "#780650" },
          { name: "900", value: "#520339" }
        ]
      },
      {
        name: "Neutral",
        shades: [
          { name: "50", value: "#FAFAFA" },
          { name: "100", value: "#F5F5F5" },
          { name: "200", value: "#E5E5E5" },
          { name: "300", value: "#D4D4D4" },
          { name: "400", value: "#A3A3A3" },
          { name: "500", value: "#737373" },
          { name: "600", value: "#525252" },
          { name: "700", value: "#404040" },
          { name: "800", value: "#262626" },
          { name: "900", value: "#171717" }
        ]
      }
    ]
  },
  {
    id: "adobe-spectrum",
    name: "Adobe Spectrum",
    description: "Adobe's design system for creating cohesive experiences",
    url: "",
    image: "./images/adobe.svg",
    colorGroups: [
     
        {
            name: "",
            description: "",
            shades: [
                { name: "", value: "#fff1f0" },
                { name: "", value: "#ffccc7" },
                { name: "", value: "#ffa39e" },
                { name: "", value: "#ff7875" },
                { name: "", value: "#ff4d4f" },
                { name: "", value: "#f5222d" },
                { name: "", value: "#cf1322" },
                { name: "", value: "#a8071a" },
                { name: "", value: "#820014" },
                { name: "", value: "#5c0011" },
                { name: "", value: "#fff2e8" },
                { name: "", value: "#ffd8bf" },
                { name: "", value: "#ffbb96" },
                { name: "", value: "#ff9c6e" },
                { name: "", value: "#ff7a45" },
                { name: "", value: "#fa541c" },
                { name: "", value: "#d4380d" },
                { name: "", value: "#ad2102" },
                { name: "", value: "#871400" },
                { name: "", value: "#610b00" },
                { name: "", value: "#fff7e6" },
                { name: "", value: "#ffe7ba" },
                { name: "", value: "#ffd591" },
                { name: "", value: "#ffc069" },
                { name: "", value: "#ffa940" },
                { name: "", value: "#fa8c16" },
                { name: "", value: "#d46b08" },
                { name: "", value: "#ad4e00" },
                { name: "", value: "#873800" },
                { name: "", value: "#612500" },
                { name: "", value: "#ffffb8" },
                { name: "", value: "#fffb8f" },
                { name: "", value: "#fff566" },
                { name: "", value: "#ffec3d" },
                { name: "", value: "#fadb14" },
                { name: "", value: "#d4b106" },
                { name: "", value: "#ad8b00" },
                { name: "", value: "#876800" },
                { name: "", value: "#614700" },
                { name: "", value: "#fcffe6" },
                { name: "", value: "#f4ffb8" },
                { name: "", value: "#eaff8f" },
                { name: "", value: "#d3f261" },
                { name: "", value: "#bae637" },
                { name: "", value: "#a0d911" },
                { name: "", value: "#7cb305" },
                { name: "", value: "#5b8c00" },
                { name: "", value: "#3f6600" },
                { name: "", value: "#254000" },
                { name: "", value: "#f6ffed" },
                { name: "", value: "#d9f7be" },
                { name: "", value: "#b7eb8f" },
                { name: "", value: "#95de64" },
                { name: "", value: "#73d13d" },
                { name: "", value: "#52c41a" },
                { name: "", value: "#389e0d" },
                { name: "", value: "#237804" },
                { name: "", value: "#135200" },
                { name: "", value: "#092b00" },
                { name: "", value: "#e6fffb" },
                { name: "", value: "#b5f5ec" },
                { name: "", value: "#87e8de" },
                { name: "", value: "#5cdbd3" },
                { name: "", value: "#36cfc9" },
                { name: "", value: "#13c2c2" },
                { name: "", value: "#08979c" },
                { name: "", value: "#006d75" },
                { name: "", value: "#00474f" },
                { name: "", value: "#002329" },
                { name: "", value: "#e6f4ff" },
                { name: "", value: "#bae0ff" },
                { name: "", value: "#91caff" },
                { name: "", value: "#69b1ff" },
                { name: "", value: "#4096ff" },
                { name: "", value: "#1677ff" },
                { name: "", value: "#0958d9" },
                { name: "", value: "#003eb3" },
                { name: "", value: "#002c8c" },
                { name: "", value: "#001d66" },
                { name: "", value: "#f0f5ff" },
                { name: "", value: "#d6e4ff" },
                { name: "", value: "#adc6ff" },
                { name: "", value: "#85a5ff" },
                { name: "", value: "#597ef7" },
                { name: "", value: "#2f54eb" },
                { name: "", value: "#1d39c4" },
                { name: "", value: "#10239e" },
                { name: "", value: "#061178" },
                { name: "", value: "#030852" },
                { name: "", value: "#f9f0ff" },
                { name: "", value: "#efdbff" },
                { name: "", value: "#d3adf7" },
                { name: "", value: "#b37feb" },
                { name: "", value: "#9254de" },
                { name: "", value: "#722ed1" },
                { name: "", value: "#531dab" },
                { name: "", value: "#391085" },
                { name: "", value: "#22075e" },
                { name: "", value: "#120338" },
                { name: "", value: "#fff0f6" },
                { name: "", value: "#ffd6e7" },
                { name: "", value: "#ffadd2" },
                { name: "", value: "#ff85c0" },
                { name: "", value: "#f759ab" },
                { name: "", value: "#eb2f96" },
                { name: "", value: "#c41d7f" },
                { name: "", value: "#9e1068" },
                { name: "", value: "#780650" },
                { name: "", value: "#520339" },
                { name: "", value: "#3e2723" },
                { name: "", value: "#5d4037" },
                { name: "", value: "#795548" },
                { name: "", value: "#8d6e63" },
                { name: "", value: "#9e9e9e" },
                { name: "", value: "#bdbdbd" },
                { name: "", value: "#e0e0e0" },
                { name: "", value: "#f5f5f5" },
                { name: "", value: "#000000" },
                { name: "", value: "#ffffff" },
                { name: "", value: "#f44336" },
                { name: "", value: "#e91e63" },
                { name: "", value: "#9c27b0" },
                { name: "", value: "#673ab7" },
                { name: "", value: "#3f51b5" },
                { name: "", value: "#2196f3" },
                { name: "", value: "#03a9f4" },
                { name: "", value: "#00bcd4" },
                { name: "", value: "#009688" },
                { name: "", value: "#4caf50" },
                { name: "", value: "#8bc34a" },
                { name: "", value: "#cddc39" },
                { name: "", value: "#ffeb3b" },
                { name: "", value: "#ffc107" },
                { name: "", value: "#ff9800" },
                { name: "", value: "#ff5722" },
                { name: "", value: "#795548" },
                { name: "", value: "#9e9e9e" },
                { name: "", value: "#607d8b" },
                { name: "", value: "#78909c" },
                { name: "", value: "#90a4ae" },
                { name: "", value: "#607d8b" },
                { name: "", value: "#455a64" },
                { name: "", value: "#263238" },
                { name: "", value: "#b71c1c" },
                { name: "", value: "#880e4f" },
                { name: "", value: "#4a148c" },
                { name: "", value: "#311b92" },
                { name: "", value: "#0d47a1" },
                { name: "", value: "#01579b" },
                { name: "", value: "#FF5722" },
                { name: "", value: "#FFC107" },
                { name: "", value: "#2196F3" },
                { name: "", value: "#4CAF50" },
                { name: "", value: "#9C27B0" },
                { name: "", value: "#E91E63" },
                { name: "", value: "#FF9800" },
                { name: "", value: "#00BCD4" },
                { name: "", value: "#8BC34A" },
                { name: "", value: "#673AB7" },
                { name: "", value: "#FFCDD2" },
                { name: "", value: "#FFECB3" },
                { name: "", value: "#81C784" },
                { name: "", value: "#64B5F6" },
                { name: "", value: "#9575CD" },
                { name: "", value: "#FFB74D" },
                { name: "", value: "#AED581" },
                { name: "", value: "#FF8A65" },
                { name: "", value: "#4FC3F7" },
                { name: "", value: "#FFD54F" }
            ]
        }
    ]
  },
  {
    id: "uber",
    name: "Uber Design",
    description: "Uber's design system for building consistent experiences",
    url: "",
    image: "./images/Ubers Base.png",
    colorGroups: [
      {
        name: "Primary",
        shades: [
          { name: "50", value: "#EDF0F9" },
          { name: "100", value: "#D8E0F0" },
          { name: "200", value: "#B9C5E1" },
          { name: "300", value: "#98A9D2" },
          { name: "400", value: "#778DC4" },
          { name: "500", value: "#5871B5" },
          { name: "600", value: "#3E5496" },
          { name: "700", value: "#2B3C6B" },
          { name: "800", value: "#1A2541" },
          { name: "900", value: "#0B101C" }
        ]
      },
      {
        name: "Monochrome",
        shades: [
          { name: "White", value: "#FFFFFF" },
          { name: "100", value: "#F7F7F7" },
          { name: "200", value: "#F0F0F0" },
          { name: "300", value: "#E2E2E2" },
          { name: "400", value: "#CBCBCB" },
          { name: "500", value: "#ADADAD" },
          { name: "600", value: "#757575" },
          { name: "700", value: "#545454" },
          { name: "800", value: "#333333" },
          { name: "900", value: "#000000" }
        ]
      },
      {
        name: "Accent",
        shades: [
          { name: "Green", value: "#06C167" },
          { name: "Red", value: "#E31B0C" },
          { name: "Yellow", value: "#FFC043" },
          { name: "Orange", value: "#FF6937" }
        ]
      }
    ]
  },
  {
    id: "ant-design",
    name: "Ant Design",
    description: "An enterprise-class UI design language and React UI library",
    url: "",
    image: "./images/ant.svg",
    colorGroups: [
      {
        name: "Blue",
        shades: [
          { name: "1", value: "#E6F7FF" },
          { name: "2", value: "#BAE7FF" },
          { name: "3", value: "#91D5FF" },
          { name: "4", value: "#69C0FF" },
          { name: "5", value: "#40A9FF" },
          { name: "6", value: "#1890FF" },
          { name: "7", value: "#096DD9" },
          { name: "8", value: "#0050B3" },
          { name: "9", value: "#003A8C" },
          { name: "10", value: "#002766" }
        ]
      },
      {
        name: "Red",
        shades: [
          { name: "1", value: "#FFF1F0" },
          { name: "2", value: "#FFCCC7" },
          { name: "3", value: "#FFA39E" },
          { name: "4", value: "#FF7875" },
          { name: "5", value: "#FF4D4F" },
          { name: "6", value: "#F5222D" },
          { name: "7", value: "#CF1322" },
          { name: "8", value: "#A8071A" },
          { name: "9", value: "#820014" },
          { name: "10", value: "#5C0011" }
        ]
      },
      {
        name: "Gold",
        shades: [
          { name: "1", value: "#FFFBE6" },
          { name: "2", value: "#FFF1B8" },
          { name: "3", value: "#FFE58F" },
          { name: "4", value: "#FFD666" },
          { name: "5", value: "#FFC53D" },
          { name: "6", value: "#FAAD14" },
          { name: "7", value: "#D48806" },
          { name: "8", value: "#AD6800" },
          { name: "9", value: "#874D00" },
          { name: "10", value: "#613400" }
        ]
      }
    ]
  },
  {
    id: "dell",
    name: "Dell Design System",
    description: "Dell's design system for creating consistent digital experiences",
    url: "",
    image: "./images/dell.svg",
    colorGroups: [
      {
        name: "Brand",
        shades: [
          { name: "Blue", value: "#007DB8" },
          { name: "Dark Blue", value: "#00447C" },
          { name: "Light Blue", value: "#64CDF4" },
          { name: "Black", value: "#191919" },
          { name: "White", value: "#FFFFFF" }
        ]
      },
      {
        name: "UI",
        shades: [
          { name: "Primary", value: "#0076CE" },
          { name: "Secondary", value: "#6E6E6E" },
          { name: "Success", value: "#378D3B" },
          { name: "Warning", value: "#E59700" },
          { name: "Error", value: "#D53E4F" },
          { name: "Info", value: "#449ECA" }
        ]
      },
      {
        name: "Grays",
        shades: [
          { name: "50", value: "#FAFAFA" },
          { name: "100", value: "#F2F2F2" },
          { name: "200", value: "#E6E6E6" },
          { name: "300", value: "#CCCCCC" },
          { name: "400", value: "#B3B3B3" },
          { name: "500", value: "#999999" },
          { name: "600", value: "#6E6E6E" },
          { name: "700", value: "#4D4D4D" },
          { name: "800", value: "#333333" },
          { name: "900", value: "#191919" }
        ]
      }
    ]
  },
  {
    id: "pantone",
    name: "Pantone Neutrals",
    description: "Pantone's collection of neutral and light colors widely used in fashion and design",
    url: "",
    image: "./images/Avatar.png",
    colorGroups: [
      {
        name: "Pure Whites & Off-Whites",
        description: "Crisp, clean whites with subtle undertones",
        shades: [
          { name: "Bright White", value: "#f4f5f0" },
          { name: "Cloud Dancer", value: "#f0eee9" },
          { name: "Marshmallow", value: "#f0eee4" },
          { name: "Blanc de Blanc", value: "#e7e9e7" },
          { name: "Whisper White", value: "#ede6db" },
          { name: "Star White", value: "#efefe8" },
          { name: "Lily White", value: "#e2e2da" },
          { name: "Vaporous Gray", value: "#dfddd7" },
          { name: "White Asparagus", value: "#e1dbc8" },
          { name: "Silver Birch", value: "#d2cfc4" }
        ]
      },
      {
        name: "Creams & Ivories",
        description: "Warm, delicate creams and ivory tones",
        shades: [
          { name: "Gardenia", value: "#f1e8df" },
          { name: "Pristine", value: "#f2e8da" },
          { name: "Vanilla Ice", value: "#f0eada" },
          { name: "Antique White", value: "#ede3d2" },
          { name: "Winter White", value: "#f5ecd2" },
          { name: "Papyrus", value: "#f5edd6" },
          { name: "Cloud Cream", value: "#e6ddc5" },
          { name: "Angora", value: "#dfd1bb" },
          { name: "Seedpearl", value: "#e6dac4" },
          { name: "Vanilla Custard", value: "#f3e0be" },
          { name: "Almond Oil", value: "#f4efc1" },
          { name: "Vanilla", value: "#f4e1c1" },
          { name: "Rutabaga", value: "#ecddbe" }
        ]
      },
      {
        name: "Warm Neutrals",
        description: "Earthy beiges and warm neutral tones",
        shades: [
          { name: "Birch", value: "#ddd5c7" },
          { name: "Turtledove", value: "#ded7c8" },
          { name: "Bone White", value: "#d7d0c0" },
          { name: "Alabaster Gleam", value: "#f0debd" },
          { name: "Banana Crepe", value: "#e7d3ad" },
          { name: "Italian Straw", value: "#e7d1a1" },
          { name: "Whitecap Gray", value: "#e0d5c6" },
          { name: "Fog", value: "#d0c5b1" },
          { name: "White Swan", value: "#e4d7c5" },
          { name: "Sandshell", value: "#d8ccbb" },
          { name: "Tapioca", value: "#dccdbc" },
          { name: "Creme Brulee", value: "#dbccb5" },
          { name: "Parchment", value: "#dfd1be" },
          { name: "Lambs Wool", value: "#e5d0b1" },
          { name: "Winter Wheat", value: "#dfc09f" },
          { name: "Summer Melon", value: "#ead3ae" },
          { name: "Chamomile", value: "#e8d0a7" },
          { name: "Cornhusk", value: "#f2d6ae" },
          { name: "Apricot Gelato", value: "#f5d7af" },
          { name: "Biscotti", value: "#dac7ab" }
        ]
      },
      {
        name: "Cool Neutrals & Grays",
        description: "Sophisticated cool-toned neutrals and grays",
        shades: [
          { name: "Asparagus Green", value: "#d2cdb4" },
          { name: "Oyster White", value: "#d2caaf" },
          { name: "Putty", value: "#d4cab0" },
          { name: "Moth", value: "#d2cbaf" },
          { name: "Wood Ash", value: "#d7cab0" },
          { name: "Gravel", value: "#cbbfa2" },
          { name: "Pale Khaki", value: "#bfaf92" },
          { name: "Light Gray", value: "#dad8c9" },
          { name: "Silver Green", value: "#d7d7c7" },
          { name: "Pelican", value: "#c1bcac" },
          { name: "Overcast", value: "#c3bdab" },
          { name: "Tidal Foam", value: "#bfb9a3" },
          { name: "Agate Gray", value: "#b1b09f" },
          { name: "Alfalfa", value: "#b7b59f" },
          { name: "Castle Wall", value: "#c8c1ab" },
          { name: "Oyster Gray", value: "#cbc1ae" },
          { name: "Cement", value: "#c4b6a6" },
          { name: "Spray Green", value: "#aea692" },
          { name: "Eucalyptus", value: "#b1a992" },
          { name: "Twill", value: "#a79b82" },
          { name: "Olive Gray", value: "#a6997a" },
          { name: "Chinchilla", value: "#9c8e7b" },
          { name: "Seneca Rock", value: "#9a927f" },
          { name: "Laurel Oak", value: "#918c7e" },
          { name: "Coriander", value: "#938772" },
          { name: "Crystal Gray", value: "#d7cbc4" },
          { name: "Mushroom", value: "#bdaca3" },
          { name: "Shadow Gray", value: "#bba5a0" },
          { name: "Sphinx", value: "#ab9895" },
          { name: "Bark", value: "#a99592" },
          { name: "Fawn", value: "#ae9490" }
        ]
      },
      {
        name: "Subtle Pastels",
        description: "Delicate pinks, blues and mint tones",
        shades: [
          { name: "Sheer Pink", value: "#f6e5db" },
          { name: "Dew", value: "#eeded1" },
          { name: "Powder Puff", value: "#f3e0d6" },
          { name: "Pearled Ivory", value: "#f0dfcc" },
          { name: "White Smoke", value: "#eddcc9" },
          { name: "Ecru", value: "#f3dfca" },
          { name: "Navajo", value: "#efdcc3" },
          { name: "Almost Mauve", value: "#e7dcd9" },
          { name: "Delicacy", value: "#f5e3e2" },
          { name: "Petal Pink", value: "#f2e2e0" },
          { name: "Bridal Blush", value: "#eee2dd" },
          { name: "Cream Pink", value: "#f6e4d9" },
          { name: "Angel Wing", value: "#f3dfd7" },
          { name: "Pastel Parchment", value: "#e5d9d3" },
          { name: "Summer Shower", value: "#e5ebe3" },
          { name: "Ice", value: "#e0e4d9" },
          { name: "Frost", value: "#dde2d6" },
          { name: "Icicle", value: "#dadcd0" },
          { name: "Bit of Blue", value: "#e2eaeb" },
          { name: "Mystic Blue", value: "#e1e3de" },
          { name: "Bluewash", value: "#e2e6e0" },
          { name: "Spa Blue", value: "#d3dedf" },
          { name: "Lightest Sky", value: "#e4eadf" },
          { name: "Hint of Mint", value: "#d8e8e6" },
          { name: "Murmur", value: "#d2d8d2" },
          { name: "Barely Blue", value: "#dde0df" },
          { name: "Blue Blush", value: "#d6dbd9" },
          { name: "Zephyr Blue", value: "#d3d9d1" },
          { name: "Blue Flower", value: "#d0d9d4" },
          { name: "Sprout Green", value: "#cbd7d2" },
          { name: "Billowing Sail", value: "#d8e7e7" },
          { name: "Hushed Green", value: "#d8e9e5" },
          { name: "Orchid Tint", value: "#dbd2db" },
          { name: "Lilac Ash", value: "#d7cdcd" },
          { name: "Gray Lilac", value: "#d4cacd" },
          { name: "Hushed Violet", value: "#d1c0bf" },
          { name: "Orchid Hush", value: "#cec3d2" },
          { name: "Evening Haze", value: "#bdb8c7" },
          { name: "Thistle", value: "#b9b3c5" }
        ]
      },
      {
        name: "Pink & Mauve Tones",
        description: "Soft pink and mauve hues",
        shades: [
          { name: "Adobe Rose", value: "#ba9f99" },
          { name: "Pale Mauve", value: "#c6a4a4" },
          { name: "Woodrose", value: "#ae8c8e" },
          { name: "Deauville Mauve", value: "#af9294" },
          { name: "Antler", value: "#957a76" },
          { name: "Twilight Mauve", value: "#8b6f70" },
          { name: "Rose Taupe", value: "#806062" },
          { name: "Rose Brown", value: "#80565b" },
          { name: "Roan Rouge", value: "#885157" },
          { name: "Mahogany Rose", value: "#c5a193" },
          { name: "Burlwood", value: "#9b716b" },
          { name: "Marron", value: "#6e4c4b" },
          { name: "Parfait Pink", value: "#e9c3cf" },
          { name: "Pink Mist", value: "#e6bccd" },
          { name: "Cameo Pink", value: "#dba9b8" },
          { name: "Sweet Lilac", value: "#e8b5ce" },
          { name: "Heather Rose", value: "#ad6d7f" },
          { name: "Red Violet", value: "#a35776" },
          { name: "Zephyr", value: "#c89fa5" },
          { name: "Nostalgia Rose", value: "#a4777e" },
          { name: "Deco Rose", value: "#985f68" },
          { name: "Renaissance Rose", value: "#865560" }
        ]
      },
      {
        name: "Orchid & Lavender",
        description: "Elegant orchid and lavender shades",
        shades: [
          { name: "Mauve Orchid", value: "#b58299" },
          { name: "Orchid Haze", value: "#b0879b" },
          { name: "Pink Lavender", value: "#d9afca" },
          { name: "Pastel Lavender", value: "#d8a1c4" },
          { name: "Orchid", value: "#d198c5" },
          { name: "Lilac Chiffon", value: "#de9bc4" },
          { name: "Moonlite Mauve", value: "#d28fb0" },
          { name: "Cyclamen", value: "#d687ba" },
          { name: "Opera Mauve", value: "#ca80b1" },
          { name: "Crocus", value: "#c67fae" },
          { name: "Violet", value: "#c17fb5" },
          { name: "Iris Orchid", value: "#a767a2" },
          { name: "Radiant Orchid", value: "#ad5e99" },
          { name: "Spring Crocus", value: "#ba69a1" },
          { name: "Meadow Mauve", value: "#a9568c" },
          { name: "Rosebud", value: "#b65f9a" },
          { name: "Purple Orchid", value: "#ad4d8c" },
          { name: "Lavender Herb", value: "#b18eaa" },
          { name: "Lavender Mist", value: "#ae90a7" },
          { name: "Valerian", value: "#9f7a93" },
          { name: "Cloud Gray", value: "#b7a9ac" },
          { name: "Quail", value: "#98868c" },
          { name: "Nirvana", value: "#a2919b" },
          { name: "Iris", value: "#baafbc" },
          { name: "Sea Fog", value: "#a5929d" }
        ]
      },
      {
        name: "Purple & Wine",
        description: "Rich purple and wine hues",
        shades: [
          { name: "Mulberry", value: "#a76c97" },
          { name: "Striking Purple", value: "#944e87" },
          { name: "Amethyst", value: "#864d75" },
          { name: "Magenta Purple", value: "#6b264b" },
          { name: "Festival Fuchsia", value: "#9e2c6a" },
          { name: "Baton Rouge", value: "#973c6c" },
          { name: "Boysenberry", value: "#85325c" },
          { name: "Raspberry Radiance", value: "#802a50" },
          { name: "Purple Potion", value: "#692746" },
          { name: "Dahlia Mauve", value: "#a64f82" },
          { name: "Vivid Viola", value: "#993c7c" },
          { name: "Wild Aster", value: "#92316f" },
          { name: "Deep Orchid", value: "#903f75" },
          { name: "Clover", value: "#8a3371" },
          { name: "Purple Wine", value: "#8c3573" },
          { name: "Hollyhock", value: "#823270" },
          { name: "Hyacinth Violet", value: "#8d4687" },
          { name: "Dahlia", value: "#843e83" },
          { name: "Sparkling Grape", value: "#773376" },
          { name: "Byzantium", value: "#853b7b" },
          { name: "Phlox", value: "#692d5d" },
          { name: "Grape Juice", value: "#682961" },
          { name: "Gloxinia", value: "#622e5a" },
          { name: "Mellow Mauve", value: "#996378" },
          { name: "Bordeaux", value: "#96637b" },
          { name: "Violet Quartz", value: "#8b4963" },
          { name: "Damson", value: "#854c65" },
          { name: "Amaranth", value: "#6f3c56" },
          { name: "Dusky Orchid", value: "#9a7182" },
          { name: "Grape Shake", value: "#886971" },
          { name: "Wistful Mauve", value: "#946c74" },
          { name: "Tulipwood", value: "#805466" },
          { name: "Grape Nectar", value: "#8d5c74" },
          { name: "Argyle Purple", value: "#895c79" }
        ]
      },
      {
        name: "Deep Plum & Berry",
        description: "Deep, rich plum and berry tones",
        shades: [
          { name: "Peppercorn", value: "#6c5656" },
          { name: "Raisin", value: "#524144" },
          { name: "Huckleberry", value: "#5b4349" },
          { name: "Catawba Grape", value: "#5d3c43" },
          { name: "Puce", value: "#503938" },
          { name: "Fudge", value: "#493338" },
          { name: "Decadent Chocolate", value: "#513235" },
          { name: "Red Mahogany", value: "#60373d" },
          { name: "Vineyard Wine", value: "#58363d" },
          { name: "Winetasting", value: "#492a34" },
          { name: "Port", value: "#663336" },
          { name: "Chocolate Truffle", value: "#612e35" },
          { name: "Burgundy", value: "#64313e" },
          { name: "Zinfandel", value: "#5c2935" },
          { name: "Windsor Wine", value: "#582b36" },
          { name: "Port Royale", value: "#502b33" },
          { name: "Fig", value: "#532d3b" },
          { name: "Nocturne", value: "#7a4b56" },
          { name: "Crushed Berry", value: "#804f5a" },
          { name: "Crushed Violets", value: "#643a4c" },
          { name: "Mauve Wine", value: "#5b3644" },
          { name: "Plum Wine", value: "#674550" },
          { name: "Eggplant", value: "#613f4c" },
          { name: "Prune", value: "#603749" },
          { name: "Prune Purple", value: "#5c3a4d" },
          { name: "Grape Wine", value: "#5a2f43" },
          { name: "Italian Plum", value: "#533146" },
          { name: "Potent Purple", value: "#462639" },
          { name: "Black Plum", value: "#6c5765" },
          { name: "Flint", value: "#705861" },
          { name: "Sassafras", value: "#54353b" }
        ]
      },
      {
        name: "Grape & Indigo",
        description: "Deep grape and indigo shades",
        shades: [
          { name: "Very Grape", value: "#927288" },
          { name: "Grapeade", value: "#85677b" },
          { name: "Purple Gumdrop", value: "#7a596f" },
          { name: "Berry Conserve", value: "#765269" },
          { name: "Chinese Violet", value: "#835e81" },
          { name: "Crushed Grape", value: "#7a547f" },
          { name: "Concord Grape", value: "#7c5379" },
          { name: "Sunset Purple", value: "#6f456e" },
          { name: "Wood Violet", value: "#75406a" },
          { name: "Purple Passion", value: "#683d62" },
          { name: "Dark Purple", value: "#582147" },
          { name: "Grape Jam", value: "#725671" },
          { name: "Deep Purple", value: "#50314c" },
          { name: "Wineberry", value: "#5a395b" },
          { name: "Grape Royale", value: "#4f2d54" },
          { name: "Plum Purple", value: "#51304e" },
          { name: "Hortensia", value: "#553b50" },
          { name: "Blackberry Wine", value: "#4d3246" },
          { name: "Navy Cosmos", value: "#503b53" },
          { name: "Indigo", value: "#4c3957" },
          { name: "Purple Pennant", value: "#432c47" },
          { name: "Plum Perfect", value: "#473442" },
          { name: "Sweet Grape", value: "#4b3b4f" },
          { name: "Shadow Purple", value: "#4e334e" },
          { name: "Blackberry Cordial", value: "#3f2a47" },
          { name: "Purple Reign", value: "#56456b" },
          { name: "Mulberry Purple", value: "#493c62" },
          { name: "Gothic Grape", value: "#473951" },
          { name: "Grape", value: "#433455" },
          { name: "Purple Velvet", value: "#46394b" },
          { name: "Nightshade", value: "#433748" },
          { name: "Elderberry", value: "#9d848e" }
        ]
      },
      {
        name: "Lavender & Gray Tones",
        description: "Soft lavender grays and muted purple-gray blends",
        shades: [
          { name: "Lavender-Gray", value: "#9890a2" },
          { name: "Minimal-Gray", value: "#948d99" },
          { name: "Purple-Ash", value: "#8f8395" },
          { name: "Gray-Ridge", value: "#847986" },
          { name: "Purple-Sage", value: "#75697e" },
          { name: "Gull-Gray", value: "#a49ca0" },
          { name: "Zinc", value: "#92898a" },
          { name: "Gull", value: "#918c8f" },
          { name: "Shark", value: "#6d636b" },
          { name: "Sparrow", value: "#69595c" },
          { name: "Lilac-Marble", value: "#c3babf" },
          { name: "Ashes-Of-Roses", value: "#b5acab" },
          { name: "Lavender-Fog", value: "#d2c4d6" },
          { name: "Chalk-Violet", value: "#8f7da5" },
          { name: "Purple-Haze", value: "#807396" },
          { name: "Dapple-Gray", value: "#9c9ba7" },
          { name: "Heron", value: "#62617e" },
          { name: "Graystone", value: "#4d495b" },
          { name: "Lavender-Aura", value: "#9f99aa" },
          { name: "Stonewash", value: "#74809a" },
          { name: "Nightshadow-Blue", value: "#4e5368" }
        ]
      },
      {
        name: "Soft Lavender & Orchid",
        description: "Delicate lavender and soft orchid hues",
        shades: [
          { name: "Heirloom-Lilac", value: "#9d96b2" },
          { name: "Wisteria", value: "#a198af" },
          { name: "Dusk", value: "#897f98" },
          { name: "Daybreak", value: "#8981a0" },
          { name: "Cadet", value: "#6a6378" },
          { name: "Orchid-Ice", value: "#e0d0db" },
          { name: "Lilac-Snow", value: "#e0c7d7" },
          { name: "Winsome-Orchid", value: "#d4b9cb" },
          { name: "Fair-Orchid", value: "#c0aac0" },
          { name: "Lavender-Frost", value: "#bdabbe" },
          { name: "Orchid-Petal", value: "#bfb4cb" },
          { name: "Pastel-Lilac", value: "#bdb0d0" },
          { name: "Orchid-Bloom", value: "#c5aecf" },
          { name: "Orchid-Bouquet", value: "#d1acce" },
          { name: "Lupine", value: "#be9cc1" },
          { name: "Lavendula", value: "#bca4cb" },
          { name: "Lavender", value: "#afa4ce" },
          { name: "Violet-Tulip", value: "#9e91c3" },
          { name: "Smoky-Grape", value: "#b88aac" },
          { name: "Regal-Orchid", value: "#a98baf" },
          { name: "Viola", value: "#a692ba" },
          { name: "Orchid-Mist", value: "#917798" },
          { name: "Lilac-Hint", value: "#d0d0da" },
          { name: "Misty-Lilac", value: "#bcb4c4" },
          { name: "Lavender-Blue", value: "#c5c0d0" },
          { name: "Purple-Heather", value: "#bab8d3" },
          { name: "Cosmic-Sky", value: "#aaaac4" },
          { name: "Languid-Lavender", value: "#a2a1ba" },
          { name: "Sweet-Lavender", value: "#9a9bc1" },
          { name: "Thistle-Down", value: "#9499bb" }
        ]
      },
      {
        name: "Vibrant Purple & Violet",
        description: "Rich and vibrant purple, violet, and orchid shades",
        shades: [
          { name: "Mulled-Grape", value: "#675a74" },
          { name: "Purple-Plumeria", value: "#473854" },
          { name: "Violet-Tulle", value: "#c193c0" },
          { name: "Sheer-Lilac", value: "#b793c0" },
          { name: "African-Violet", value: "#b085b7" },
          { name: "Dusty-Lavender", value: "#a1759c" },
          { name: "Paisley-Purple", value: "#8b79b1" },
          { name: "Hyacinth", value: "#936ca7" },
          { name: "Amethyst-Orchid", value: "#926aa6" },
          { name: "Dewberry", value: "#8b5987" },
          { name: "Purple-Heart", value: "#745587" },
          { name: "Meadow-Violet", value: "#764f82" },
          { name: "Royal-Purple", value: "#603f83" },
          { name: "Deep-Lavender", value: "#775496" },
          { name: "Royal-Lilac", value: "#774d8e" },
          { name: "Pansy", value: "#653d7c" },
          { name: "Bright-Violet", value: "#784384" },
          { name: "Amaranth-Purple", value: "#6a397b" },
          { name: "Purple-Magic", value: "#663271" },
          { name: "Bougainvillea", value: "#9884b9" },
          { name: "Grape-Compote", value: "#6b5876" },
          { name: "Montana-Grape", value: "#6c5971" },
          { name: "Vintage-Violet", value: "#634f62" },
          { name: "Aster-Purple", value: "#7d74a8" },
          { name: "Dahlia-Purple", value: "#7e6eac" },
          { name: "Passion-Flower", value: "#6d5698" },
          { name: "Ultra-Violet", value: "#5f4b8b" },
          { name: "Prism-Violet", value: "#53357d" },
          { name: "Heliotrope", value: "#4f3872" },
          { name: "Petunia", value: "#4f3466" }
        ]
      },
      {
        name: "Deep Purple & Blue",
        description: "Deep purple and blue-purple transitional shades",
        shades: [
          { name: "Plum", value: "#5a315d" },
          { name: "Imperial-Palace", value: "#604e7a" },
          { name: "Patrician-Purple", value: "#6c4e79" },
          { name: "Loganberry", value: "#5a4769" },
          { name: "Majesty", value: "#593761" },
          { name: "Imperial-Purple", value: "#542c5d" },
          { name: "Crown-Jewel", value: "#482d54" },
          { name: "Parachute-Purple", value: "#392852" },
          { name: "Corsican-Blue", value: "#646093" },
          { name: "Veronica", value: "#6d6695" },
          { name: "Blue-Iris", value: "#5a5b9f" },
          { name: "Purple-Opulence", value: "#60569a" },
          { name: "Gentian-Violet", value: "#544275" },
          { name: "Liberty", value: "#4d448a" },
          { name: "Deep-Blue", value: "#44377d" },
          { name: "Deep-Wisteria", value: "#443f6f" },
          { name: "Blue-Ribbon", value: "#3a395f" },
          { name: "Astral-Aura", value: "#363151" }
        ]
      },
      {
        name: "Blue & Periwinkle",
        description: "Blue to periwinkle range with purple undertones",
        shades: [
          { name: "Easter-Egg", value: "#919bc9" },
          { name: "Jacaranda", value: "#848dc5" },
          { name: "Deep-Periwinkle", value: "#7c83bc" },
          { name: "Dusted-Peri", value: "#696ba0" },
          { name: "Violet-Storm", value: "#5c619d" },
          { name: "Baja-Blue", value: "#5f6db0" },
          { name: "Persian-Violet", value: "#8c8eb2" },
          { name: "Twilight-Purple", value: "#66648b" },
          { name: "Orient-Blue", value: "#47457a" },
          { name: "Clematis-Blue", value: "#363b7c" },
          { name: "Royal-Blue", value: "#3d428b" },
          { name: "Spectrum-Blue", value: "#3d3c7c" },
          { name: "Lavender-Violet", value: "#767ba5" },
          { name: "Blue-Ice", value: "#70789b" },
          { name: "Velvet-Morning", value: "#60688d" },
          { name: "Marlin", value: "#515b87" },
          { name: "Bleached-Denim", value: "#646f9b" },
          { name: "Skipper-Blue", value: "#484a72" },
          { name: "Navy-Blue", value: "#403f6f" },
          { name: "Blueprint", value: "#2d3359" },
          { name: "Blue-Depths", value: "#263056" },
          { name: "Medieval-Blue", value: "#29304e" },
          { name: "Blue-Indigo", value: "#49516d" },
          { name: "Crown-Blue", value: "#464b65" }
        ]
      },
      {
        name: "New Reds",
        description: "Rich red and burgundy tones",
        shades: [
          { name: "aura-orange", value: "#b4262a" },
          { name: "toreador", value: "#b61032" },
          { name: "lychee", value: "#ba0b32" },
          { name: "goji-berry", value: "#b91228" },
          { name: "jalapeno-red", value: "#b2103c" },
          { name: "love-potion", value: "#c01352" },
          { name: "merlot", value: "#72262c" },
          { name: "red-pear", value: "#7b3539" },
          { name: "smoked-paprika", value: "#6e362c" },
          { name: "cherry-mahogany", value: "#66352b" }
        ]
      },
      {
        name: "New Purples",
        description: "Deep purple and plum shades",
        shades: [
          { name: "pink-peacock", value: "#c62168" },
          { name: "grape-kiss", value: "#7b4368" },
          { name: "willowherb", value: "#8e4483" },
          { name: "charisma", value: "#632a60" },
          { name: "plum-jam", value: "#624076" },
          { name: "lavender-crystal", value: "#936a98" },
          { name: "purple-sapphire", value: "#6f4685" },
          { name: "chive-blossom", value: "#7d5d99" },
          { name: "purple-corallite", value: "#5a4e8f" },
          { name: "pickled-beet", value: "#4d233d" },
          { name: "plum-caspia", value: "#61224a" },
          { name: "winter-bloom", value: "#47243b" },
          { name: "spiced-plum", value: "#6d4773" },
          { name: "violet-indigo", value: "#3e285c" }
        ]
      },
      {
        name: "New Blues",
        description: "Ocean-inspired blues and teals",
        shades: [
          { name: "gray-blue", value: "#4d587a" },
          { name: "blue-horizon", value: "#4e6482" },
          { name: "iris-bloom", value: "#5b609e" },
          { name: "nebulas-blue", value: "#2d62a3" },
          { name: "indigo-bunting", value: "#006ca9" },
          { name: "fjord-blue", value: "#007290" },
          { name: "hawaiian-surf", value: "#0078a7" },
          { name: "tahitian-tide", value: "#006b7e" },
          { name: "maritime-blue", value: "#27293d" },
          { name: "navy-peony", value: "#223a5e" },
          { name: "sargasso-sea", value: "#35435a" },
          { name: "sailor-blue", value: "#0e3a53" },
          { name: "gibraltar-sea", value: "#123850" },
          { name: "lapis-blue", value: "#004b8d" },
          { name: "baleine-blue", value: "#155187" },
          { name: "galaxy-blue", value: "#2a4b7c" },
          { name: "blue-opal", value: "#0f3b57" },
          { name: "moonlit-ocean", value: "#293b4d" },
          { name: "deep-dive", value: "#29495c" }
        ]
      },
      {
        name: "New Greens",
        description: "Natural and forest greens",
        shades: [
          { name: "quetzal-green", value: "#006865" },
          { name: "lush-meadow", value: "#006e51" },
          { name: "sea-turtle", value: "#5e5749" },
          { name: "deep-depths", value: "#46483c" },
          { name: "crystal-teal", value: "#00637c" },
          { name: "deep-lagoon", value: "#005265" },
          { name: "sea-moss", value: "#254445" },
          { name: "forest-biome", value: "#184a45" },
          { name: "rain-forest", value: "#15463e" }
        ]
      },
      {
        name: "New Earth Tones",
        description: "Rich browns and neutral earth tones",
        shades: [
          { name: "kalamata", value: "#5f5b4c" },
          { name: "crocodile", value: "#5d5348" },
          { name: "chocolate-plum", value: "#3c2d2e" },
          { name: "chocolate-lab", value: "#5c3e35" },
          { name: "shaved-chocolate", value: "#543b35" },
          { name: "fondue-fudge", value: "#5d4236" },
          { name: "tiramisu", value: "#634235" },
          { name: "rocky-road", value: "#5a3e36" },
          { name: "chicory-coffee", value: "#4a342e" },
          { name: "chocolate-fondant", value: "#56352d" }
        ]
      },
      {
        name: "Grays",
        description: "Sophisticated gray and neutral tones",
        shades: [
          { name: "arctic-dusk", value: "#735b6a" },
          { name: "ephemera", value: "#6f5965" },
          { name: "volcanic-glass", value: "#615c60" },
          { name: "granite-gray", value: "#615e5f" },
          { name: "gray-pinstripe", value: "#49494d" },
          { name: "obsidian", value: "#3a363b" },
          { name: "blackened-pearl", value: "#4d4b50" },
          { name: "odyssey-gray", value: "#434452" },
          { name: "black-onyx", value: "#2b272b" }
        ]
      }
    ]
  },
  {
    id: "pajamas-color-system",
    name: "Pajamas",
    description: "GitLab's design system color palette",
    url: "https://www.colorsandfonts.com/color-systems/pajamas-color-system/",
    image: "./images/pajamas.svg",
    colorGroups: [
      {
        name: "Blue",
        description: "Primary brand color",
        shades: [
          { name: "10", value: "#e9f3fc" },
          { name: "20", value: "#cbe2f9" },
          { name: "30", value: "#9dc7f1" },
          { name: "40", value: "#63a6e9" },
          { name: "50", value: "#428fdc" },
          { name: "60", value: "#1f75cb" },
          { name: "70", value: "#1068bf" },
          { name: "80", value: "#0b5cad" },
          { name: "90", value: "#064787" },
          { name: "100", value: "#033464" }
        ]
      },
      {
        name: "Green",
        description: "Indicates success",
        shades: [
          { name: "10", value: "#ecf4ee" },
          { name: "20", value: "#c3e6cd" },
          { name: "30", value: "#91d4a8" },
          { name: "40", value: "#52b87a" },
          { name: "50", value: "#2da160" },
          { name: "60", value: "#108548" },
          { name: "70", value: "#217645" },
          { name: "80", value: "#24663b" },
          { name: "90", value: "#0d532a" },
          { name: "100", value: "#0a4020" }
        ]
      },
      {
        name: "Orange",
        description: "Indicates attention is required",
        shades: [
          { name: "10", value: "#fdf1dd" },
          { name: "20", value: "#f5d9a8" },
          { name: "30", value: "#e9be74" },
          { name: "40", value: "#d99530" },
          { name: "50", value: "#c17d10" },
          { name: "60", value: "#ab6100" },
          { name: "70", value: "#9e5400" },
          { name: "80", value: "#8f4700" },
          { name: "90", value: "#703800" },
          { name: "100", value: "#5c2900" }
        ]
      },
      {
        name: "Red",
        description: "Indicates a problem",
        shades: [
          { name: "10", value: "#fcf1ef" },
          { name: "20", value: "#fdd4cd" },
          { name: "30", value: "#fcb5aa" },
          { name: "40", value: "#f57f6c" },
          { name: "50", value: "#ec5941" },
          { name: "60", value: "#dd2b0e" },
          { name: "70", value: "#c91c00" },
          { name: "80", value: "#ae1800" },
          { name: "90", value: "#8d1300" },
          { name: "100", value: "#660e00" }
        ]
      },
      {
        name: "Purple",
        description: "Associated with the GitLab brand",
        shades: [
          { name: "10", value: "#f4f0ff" },
          { name: "20", value: "#e1d8f9" },
          { name: "30", value: "#cbbbf2" },
          { name: "40", value: "#ac93e6" },
          { name: "50", value: "#9475db" },
          { name: "60", value: "#7b58cf" },
          { name: "70", value: "#694cc0" },
          { name: "80", value: "#5943b6" },
          { name: "90", value: "#453894" },
          { name: "100", value: "#2f2a6b" }
        ]
      },
      {
        name: "Neutral",
        description: "Primarily used for surfaces and hierarchy differentiation",
        shades: [
          { name: "10", value: "#ffffff" },
          { name: "20", value: "#fbfafd" },
          { name: "30", value: "#ececef" },
          { name: "40", value: "#dcdcde" },
          { name: "50", value: "#bfbfc3" },
          { name: "60", value: "#a4a3a8" },
          { name: "70", value: "#89888d" },
          { name: "80", value: "#737278" },
          { name: "90", value: "#626168" },
          { name: "100", value: "#4c4b51" },
          { name: "110", value: "#3a383f" },
          { name: "120", value: "#28272d" }
        ]
      },
      {
        name: "Indigo",
        description: "Used for vibrant accents and highlights",
        shades: [
          { name: "10", value: "#f8f8ff" },
          { name: "20", value: "#f1f1ff" },
          { name: "30", value: "#dbdbf8" },
          { name: "40", value: "#c7c7f2" },
          { name: "50", value: "#a2a2e6" },
          { name: "60", value: "#8181d7" },
          { name: "70", value: "#6666c4" },
          { name: "80", value: "#5252b5" },
          { name: "90", value: "#41419f" },
          { name: "100", value: "#303083" },
          { name: "110", value: "#222261" },
          { name: "120", value: "#14143d" }
        ]
      },
      {
        name: "Light Blue",
        description: "Used for softer, calming accents",
        shades: [
          { name: "10", value: "#eef3f7" },
          { name: "20", value: "#dde6ee" },
          { name: "30", value: "#c1d4e6" },
          { name: "40", value: "#a0bedc" },
          { name: "50", value: "#74a3d3" },
          { name: "60", value: "#4f8bc7" },
          { name: "70", value: "#3476b9" },
          { name: "80", value: "#2268ae" },
          { name: "90", value: "#145aa1" },
          { name: "100", value: "#0e4d8d" },
          { name: "110", value: "#0c4277" },
          { name: "120", value: "#0a3764" }
        ]
      },
      {
        name: "Light Red",
        description: "Used for softer, warm accents",
        shades: [
          { name: "10", value: "#fdf9f8" },
          { name: "20", value: "#faf2f1" },
          { name: "30", value: "#f6d9d5" },
          { name: "40", value: "#ebada2" },
          { name: "50", value: "#e07f6f" },
          { name: "60", value: "#d36250" },
          { name: "70", value: "#c24b38" },
          { name: "80", value: "#b53a26" },
          { name: "90", value: "#a02e1c" },
          { name: "100", value: "#8b2212" },
          { name: "110", value: "#751709" },
          { name: "120", value: "#5c1105" }
        ]
      }
    ]
  },
  {
    id: "vitamin-color-system",
    name: "Vitamin",
    description: "Decathlon's design system color palette",
    url: "https://www.colorsandfonts.com/color-systems/vitamin-color-system/",
    image: "./images/vitamin.svg",
    colorGroups: [
      {
        name: "Purple",
        description: "Primary brand color",
        shades: [
          { name: "10", value: "#2C202D" },
          { name: "20", value: "#49354B" },
          { name: "30", value: "#5B415D" },
          { name: "40", value: "#6C4E6F" },
          { name: "50", value: "#966F9A" },
          { name: "60", value: "#AC8DAF" },
          { name: "70", value: "#DCCFDD" },
          { name: "80", value: "#F2EDF2" }
        ]
      },
      {
        name: "Blue",
        description: "Secondary brand color",
        shades: [
          { name: "10", value: "#012B49" },
          { name: "20", value: "#00537D" },
          { name: "30", value: "#00689D" },
          { name: "40", value: "#007DBC" },
          { name: "50", value: "#3D9ACC" },
          { name: "60", value: "#7EBEE0" },
          { name: "70", value: "#BEDEEF" },
          { name: "80", value: "#E7F3F9" }
        ]
      },
      {
        name: "Green",
        description: "Indicates success",
        shades: [
          { name: "10", value: "#006F43" },
          { name: "20", value: "#017F5C" },
          { name: "30", value: "#029E73" },
          { name: "40", value: "#02BE8A" },
          { name: "50", value: "#21CE9C" },
          { name: "60", value: "#7CDFC4" },
          { name: "70", value: "#BEEFE2" },
          { name: "80", value: "#E4F9F3" }
        ]
      },
      {
        name: "Conifer Green",
        description: "Used for natural accents",
        shades: [
          { name: "10", value: "#256C1D" },
          { name: "20", value: "#378D2E" },
          { name: "30", value: "#41A036" },
          { name: "40", value: "#23A942" },
          { name: "50", value: "#74C76A" },
          { name: "60", value: "#88D77F" },
          { name: "70", value: "#CBF0C7" },
          { name: "80", value: "#EAFBE8" }
        ]
      },
      {
        name: "Yellow",
        description: "Indicates attention is required",
        shades: [
          { name: "10", value: "#67611B" },
          { name: "20", value: "#999028" },
          { name: "30", value: "#BCB02C" },
          { name: "40", value: "#FFEA28" },
          { name: "50", value: "#FFF370" },
          { name: "60", value: "#FFF58D" },
          { name: "70", value: "#FFFBC7" },
          { name: "80", value: "#FFFFE0" }
        ]
      },
      {
        name: "Orange",
        description: "Indicates a warning",
        shades: [
          { name: "10", value: "#673216" },
          { name: "20", value: "#9A4B21" },
          { name: "30", value: "#C15E29" },
          { name: "40", value: "#FF600A" },
          { name: "50", value: "#FA9C69" },
          { name: "60", value: "#FAC3A5" },
          { name: "70", value: "#FFE4D6" },
          { name: "80", value: "#FFEF3D" }
        ]
      },
      {
        name: "Red",
        description: "Indicates a problem",
        shades: [
          { name: "10", value: "#5A0005" },
          { name: "20", value: "#870007" },
          { name: "30", value: "#AB0009" },
          { name: "40", value: "#E3262F" },
          { name: "50", value: "#FD7278" },
          { name: "60", value: "#FD9297" },
          { name: "70", value: "#FEC9CB" },
          { name: "80", value: "#FEECED" }
        ]
      },
      {
        name: "Grey",
        description: "Used for neutral accents",
        shades: [
          { name: "10", value: "#001018" },
          { name: "20", value: "#142129" },
          { name: "30", value: "#1A2A34" },
          { name: "40", value: "#344450" },
          { name: "50", value: "#4E5D6B" },
          { name: "60", value: "#687787" },
          { name: "70", value: "#8996A2" },
          { name: "80", value: "#B3BAC3" },
          { name: "90", value: "#D9DDE1" },
          { name: "100", value: "#EFF1F3" },
          { name: "110", value: "#F7F8F9" }
        ]
      },
      {
        name: "Black/White",
        description: "Primary text and background colors",
        shades: [
          { name: "10", value: "#001018" },
          { name: "20", value: "#FFFFFF" }
        ]
      }
    ]
  }
]; 