import type { Collection } from "tinacms";
import slugify from "slugify";

const Post: Collection = {
  label: "Blog Posts",
  name: "post",
  path: "content/posts",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      return `/${document._sys.breadcrumbs.join("/")}`;
    },
    filename: {
      slugify: (values) => slugify(values.title || "", {
        lower: true,
        strict: true,
        locale: "vi",
      }),
    },
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
      isTitle: true,
      required: true
    },
    {
      type: "string",
      label: "Description",
      name: "description",
      ui: {
        component: "textarea"
      },
      required: true
    },
    {
      type: "reference",
      label: "Author",
      name: "author",
      collections: ["author"]
    },
    {
      type: "string",
      label: "Category",
      name: "category",
      list: true,
      options: [
        {
          value: "movies",
          label: "Movies"
        }, {
          value: "music",
          label: "Music"
        }
      ]
    },
    {
      type: "image",
      name: "featureImage",
      label: "Feature Image"
    },
    {
      type: "rich-text",
      label: "Excerpt",
      name: "excerpt"
    },
    {
      type: "datetime",
      label: "Posted Date",
      name: "date",
      ui: {
        dateFormat: "MMMM DD YYYY",
        timeFormat: "hh:mm A"
      }
    },
    {
      type: "rich-text",
      label: "Body",
      name: "_body",
      templates: [
        {
          name: "DateTime",
          label: "Date & Time",
          inline: true,
          fields: [
            {
              name: "format",
              label: "Format",
              type: "string",
              options: ["utc", "iso", "local"]
            }
          ]
        },
        {
          name: "BlockQuote",
          label: "Block Quote",
          fields: [
            {
              name: "children",
              label: "Quote",
              type: "rich-text"
            },
            {
              name: "authorName",
              label: "Author",
              type: "string"
            }
          ]
        },
        {
          name: "NewsletterSignup",
          label: "Newsletter Sign Up",
          fields: [
            {
              name: "children",
              label: "CTA",
              type: "rich-text"
            },
            {
              name: "placeholder",
              label: "Placeholder",
              type: "string"
            },
            {
              name: "buttonText",
              label: "Button Text",
              type: "string"
            },
            {
              name: "disclaimer",
              label: "Disclaimer",
              type: "rich-text"
            }
          ],
          ui: {
            defaultItem: {
              placeholder: "Enter your email",
              buttonText: "Notify Me"
            }
          }
        }
      ],
      isBody: true
    }
  ]
};

export default Post;
