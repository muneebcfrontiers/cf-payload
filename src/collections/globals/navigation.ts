import { GlobalConfig } from "payload";

const Navigation: GlobalConfig = {
  slug: "navigation",
  label: "Navigation",
  access: {
    read: () => true,
    update: () => true,
  },
  fields: [
    {
      name: "menu",
      label: "Menu Items",
      type: "array",
      required: true,
      fields: [
        {
          name: "label",
          label: "Label",
          type: "text",
          required: true,
        },
        // {
        //   name: 'pages',
        //   type: 'relationship',
        //   relationTo: 'pages' 
        // },
        {
          name: "url",
          label: "URL",
          type: "text",
        },
        {
          name: "children",
          label: "Submenu",
          type: "array",
          fields: [
            {
              name: "label",
              label: "Label",
              type: "text",
              required: true,
            },
            {
              name: "url",
              label: "URL",
              type: "text",
            },
            {
              name: "description",
              label: "Description",
              type: "textarea",
              required: false,
            },
            {
              name: "image",
              label: "Image",
              type: "upload",
              relationTo: "media",
              required: false,
            },
            {
              name: "children",
              label: "Sub-submenu",
              type: "array",
              fields: [
                {
                  name: "label",
                  type: "text",
                  required: true,
                },
                {
                  name: "url",
                  type: "text",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default Navigation;
