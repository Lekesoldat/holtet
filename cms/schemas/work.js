export default {
  title: "Work",
  name: "work",
  type: "document",
  fields: [
    { title: "Employer", name: "employer", type: "string" },
    { title: "Title", name: "title", type: "string" },
    {
      title: "Description",
      name: "description",
      type: "string",
    },
    {
      title: "From",
      name: "fromDate",
      type: "date",
      options: {
        dateFormat: "YYYY-MM",
      },
    },
    {
      title: "To",
      name: "toDate",
      type: "date",
      options: {
        dateFormat: "YYYY-MM",
      },
    },
  ],
  preview: {
    select: {
      title: "employer",
      subtitle: "title",
    },
  },
}
