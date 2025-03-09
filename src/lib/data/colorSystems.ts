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
    url: "",
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
    url: "",
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
    url: "",
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
  },
  {
    id: "atlassian",
    name: "Atlassian Design System",
    description: "The official color palette from Atlassian's design system",
    url: "",
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
        name: "Blue Variations",
        shades: [
          { name: "Blue", value: "#0d6efd" },
          { name: "Indigo", value: "#6610f2" },
          { name: "Purple", value: "#6f42c1" },
          { name: "Pink", value: "#d63384" },
          { name: "Red", value: "#dc3545" },
          { name: "Orange", value: "#fd7e14" },
          { name: "Yellow", value: "#ffc107" },
          { name: "Green", value: "#198754" },
          { name: "Teal", value: "#20c997" },
          { name: "Cyan", value: "#0dcaf0" }
        ]
      },
      {
        name: "Gray Scale",
        shades: [
          { name: "Gray-100", value: "#f8f9fa" },
          { name: "Gray-200", value: "#e9ecef" },
          { name: "Gray-300", value: "#dee2e6" },
          { name: "Gray-400", value: "#ced4da" },
          { name: "Gray-500", value: "#adb5bd" },
          { name: "Gray-600", value: "#6c757d" },
          { name: "Gray-700", value: "#495057" },
          { name: "Gray-800", value: "#343a40" },
          { name: "Gray-900", value: "#212529" }
        ]
      }
    ]
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    description: "The default color palette from Tailwind CSS",
    url: "",
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
    colorGroups: [
      {
        name: "Blue",
        shades: [
          { name: "100", value: "#E1F2FF" },
          { name: "200", value: "#BADED9" },
          { name: "300", value: "#89CBDF" },
          { name: "400", value: "#55B8E3" },
          { name: "500", value: "#1D9DE8" },
          { name: "600", value: "#1581D3" },
          { name: "700", value: "#0866B0" },
          { name: "800", value: "#084F8D" },
          { name: "900", value: "#003969" }
        ]
      },
      {
        name: "Red",
        shades: [
          { name: "100", value: "#FFEDEB" },
          { name: "200", value: "#FFD6D2" },
          { name: "300", value: "#FFAE9F" },
          { name: "400", value: "#FF8370" },
          { name: "500", value: "#FF5746" },
          { name: "600", value: "#E93C35" },
          { name: "700", value: "#C22C31" },
          { name: "800", value: "#9C1F2A" },
          { name: "900", value: "#7D1421" }
        ]
      },
      {
        name: "Gray",
        shades: [
          { name: "50", value: "#FFFFFF" },
          { name: "75", value: "#FAFAFA" },
          { name: "100", value: "#F5F5F5" },
          { name: "200", value: "#EAEAEA" },
          { name: "300", value: "#E1E1E1" },
          { name: "400", value: "#CACACA" },
          { name: "500", value: "#B3B3B3" },
          { name: "600", value: "#8E8E8E" },
          { name: "700", value: "#6E6E6E" },
          { name: "800", value: "#4B4B4B" },
          { name: "900", value: "#2C2C2C" }
        ]
      }
    ]
  },
  {
    id: "uber",
    name: "Uber Design",
    description: "Uber's design system for building consistent experiences",
    url: "",
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
      }
    ]
  }
]; 