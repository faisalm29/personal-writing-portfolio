import {
  ComputedFields,
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";
import remarkGfm from "remark-gfm";

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
  },
};

// const For = defineNestedType(() => ({
//   name: "For",
//   fields: {
//     label: { type: "string", required: true },
//     description: { type: "string", required: true },
//   },
// }));

// const Problem = defineNestedType(() => ({
//   name: "Problem",
//   fields: {
//     label: { type: "string", required: true },
//     description: { type: "string", required: true },
//   },
// }));

// const Goal = defineNestedType(() => ({
//   name: "Goal",
//   fields: {
//     label: { type: "string", required: true },
//     description: { type: "string", required: true },
//   },
// }));

// const HowToAchieve = defineNestedType(() => ({
//   name: "HowToAchieve",
//   fields: {
//     label: { type: "string", required: true },
//     description: { type: "string", required: true },
//   },
// }));

// const Details = defineNestedType(() => ({
//   name: "Details",
//   fields: {
//     for: { type: "nested", of: For, required: true },
//     problem: { type: "nested", of: Problem, required: true },
//     goal: { type: "nested", of: Goal, required: true },
//     howToAchieve: { type: "nested", of: HowToAchieve, required: true },
//   },
// }));

const Details = defineNestedType(() => ({
  name: "Details",
  fields: {
    label: { type: "string", required: true },
    description: { type: "string", required: true },
  },
}));

export const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: "articles/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    excerpt: { type: "string", required: true },
    details: { type: "list", of: Details, required: true },
    thumbnail: { type: "string", required: true },
  },
  computedFields,
}));

const contentlayerConfig = makeSource({
  contentDirPath: "data",
  documentTypes: [Article],
  mdx: {
    remarkPlugins: [remarkGfm],
  },
});

export default contentlayerConfig;
