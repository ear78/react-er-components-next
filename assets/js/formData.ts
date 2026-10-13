type FormField = {
  id: number;
  inputType: string;
  labelText: string;
  name: string;
  inputVal?: string | boolean;
};

type FormDataEntry = FormField[] | Record<number, FormField[]> | null;

export const formData: Record<string, FormDataEntry> = {
  '/dashboard': {
    0: [
      // { id: 0, inputType: 'text', labelText: 'Background Image', name: 'bgImage' },
      { id: 0, inputType: 'text', labelText: 'Banner Pre Title', name: 'preTitle' },
      { id: 1, inputType: 'text', labelText: 'Cta Url', name: 'ctaUrl' },
      { id: 2, inputType: 'text', labelText: 'Banner Title', name: 'title' },
      { id: 3, inputType: 'text', labelText: 'Banner Sub Title', name: 'subTitle' },
      { id: 4, inputType: 'text', labelText: 'Banner Button Text', name: 'btnText' },
      { id: 5, inputType: 'color', labelText: 'Banner Button Color', name: 'btnColor' },
      { id: 6, inputType: 'checkbox', labelText: 'Banner Overlay', name: 'overlay' },
      { id: 7, inputType: 'checkbox', labelText: 'Banner Overlay Dark', name: 'overlayDark' },
      { id: 8, inputType: 'checkbox', labelText: 'Banner Overlay Full', name: 'overlayFull' },
      { id: 9, inputType: 'checkbox', labelText: 'Show CTA Button', name: 'showBtn' },
      { id: 10, inputType: 'radio', labelText: 'Banner Alignment', name: 'textAlign' },
    ],
    1: [
      { id: 0, inputType: 'color', labelText: 'Hover Color', name: 'hoverColor' },
      { id: 1, inputType: 'checkbox', labelText: 'Squared Hover Pod', name: 'isSquared' },
      { id: 2, inputType: 'checkbox', labelText: 'Open New Tab', name: 'openTab' },
    ],
    2: [
      { id: 0, inputType: 'checkbox', labelText: 'Alternate Layout', name: 'altLayout' },
    ],
    3: [
      { id: 0, inputType: 'color', labelText: 'Dot Color', name: 'dotColor' },
    ],
  },
  '/page-banner': [
    // { id: 0, inputType: 'text', labelText: 'Background Image', name: 'bgImage' },
    { id: 0, inputType: 'text', labelText: 'Banner Pre Title', name: 'preTitle' },
    { id: 1, inputType: 'text', labelText: 'Cta Url', name: 'ctaUrl' },
    { id: 2, inputType: 'text', labelText: 'Banner Title', name: 'title' },
    { id: 3, inputType: 'text', labelText: 'Banner Sub Title', name: 'subTitle' },
    { id: 4, inputType: 'text', labelText: 'Banner Button Text', name: 'btnText' },
    { id: 5, inputType: 'color', labelText: 'Banner Button Color', name: 'btnColor' },
    { id: 6, inputType: 'checkbox', labelText: 'Banner Overlay', name: 'overlay' },
    { id: 7, inputType: 'checkbox', labelText: 'Banner Overlay Dark', name: 'overlayDark' },
    { id: 8, inputType: 'checkbox', labelText: 'Banner Overlay Full', name: 'overlayFull' },
    { id: 9, inputType: 'checkbox', labelText: 'Show CTA Button', name: 'showBtn' },
    { id: 10, inputType: 'radio', labelText: 'Banner Alignment', name: 'textAlign' },
  ],
  '/hover-pods': [
    { id: 0, inputType: 'color', labelText: 'Hover Color', name: 'hoverColor' },
    { id: 1, inputType: 'checkbox', labelText: 'Squared Pods', name: 'isSquared' },
    { id: 2, inputType: 'checkbox', labelText: 'Open New Tab', name: 'openTab' },
  ],
  '/team-building': [
    { id: 0, inputType: 'checkbox', labelText: 'Alternate Layout', name: 'altLayout' },
  ],
  '/happy-dots': [
    { id: 0, inputType: 'color', labelText: 'Dot Color', name: 'dotColor' },
    { id: 1, inputType: 'color', labelText: 'Text Color', name: 'textColor' },
  ],
  '/dropper': null,
  '/e-slider': null,
};
